import React, { useState, useEffect, useRef } from "react";
import { ThaiText } from "../primitives/ThaiText.tsx";
import defaultImages from "../../content/dynamic-images.json";

interface DynamicImage {
  id: string;
  slideNum: number;
  src: string;
  originalName?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // degrees
  scale: number;
  cropLeft: number; // %
  cropRight: number; // %
  cropTop: number; // %
  cropBottom: number; // %
  zIndex: number;
}

interface DynamicImageManagerProps {
  slideNum: number;
}

export function DynamicImageManager({ slideNum }: DynamicImageManagerProps) {
  const [images, setImages] = useState<DynamicImage[]>(defaultImages as DynamicImage[]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragMode, setDragMode] = useState<"translate" | "scale" | "rotate" | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isApiAvailable, setIsApiAvailable] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0, imageX: 0, imageY: 0, imageScale: 1, imageRotation: 0 });

  // Load layout from disk or fallback to localStorage
  useEffect(() => {
    async function loadLayout() {
      try {
        const response = await fetch("/api/load-layout");
        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.images)) {
            setImages(data.images);
            setIsApiAvailable(true);
            return;
          }
        }
      } catch (err) {
        console.warn("Failed to load layout from API, trying localStorage...", err);
      }

      setIsApiAvailable(false);
      // Fallback to localStorage
      const stored = localStorage.getItem("aiq-dynamic-images");
      if (stored) {
        try {
          setImages(JSON.parse(stored));
        } catch (err) {
          console.error("Failed to parse stored images", err);
        }
      }
    }
    loadLayout();
  }, []);

  // Save layout helper
  const saveLayout = async (updatedImages: DynamicImage[]) => {
    setIsSaving(true);
    setSaveStatus(null);
    
    // Save to localStorage as a robust fallback
    localStorage.setItem("aiq-dynamic-images", JSON.stringify(updatedImages));

    try {
      const response = await fetch("/api/save-layout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: updatedImages }),
      });
      if (response.ok) {
        setSaveStatus("Saved to disk!");
        setIsApiAvailable(true);
      } else {
        setSaveStatus("Saved locally in browser");
        setIsApiAvailable(false);
      }
    } catch (err) {
      console.warn("Failed to save to disk. Saved locally in browser.", err);
      setSaveStatus("Saved locally in browser");
      setIsApiAvailable(false);
    }

    setIsSaving(false);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  // Keyboard navigation / edits
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isEditing || !selectedId) return;

      const img = images.find((i) => i.id === selectedId);
      if (!img) return;

      const step = e.shiftKey ? 10 : 1;
      let moved = false;
      let newX = img.x;
      let newY = img.y;

      if (e.key === "ArrowLeft") {
        newX -= step;
        moved = true;
      } else if (e.key === "ArrowRight") {
        newX += step;
        moved = true;
      } else if (e.key === "ArrowUp") {
        newY -= step;
        moved = true;
      } else if (e.key === "ArrowDown") {
        newY += step;
        moved = true;
      } else if (e.key === "Delete" || e.key === "Backspace") {
        deleteImage(selectedId);
        e.preventDefault();
        return;
      }

      if (moved) {
        e.preventDefault();
        const updated = images.map((i) =>
          i.id === selectedId ? { ...i, x: newX, y: newY } : i
        );
        setImages(updated);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEditing, selectedId, images]);

  // Upload file logic
  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Only image files are supported");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result as string;
      try {
        const response = await fetch("/api/upload-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: file.name, base64Data }),
        });

        let imageUrl = base64Data; // Default to base64 if upload fails
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.url) {
            imageUrl = data.url;
          }
        }

        // Load image using local base64 data (instant, never fails!)
        const tempImg = new Image();
        tempImg.onload = () => {
          const ratio = tempImg.naturalWidth / tempImg.naturalHeight;
          const defaultWidth = Math.min(500, tempImg.naturalWidth);
          const defaultHeight = defaultWidth / ratio;

          const newImage: DynamicImage = {
            id: String(Date.now()),
            slideNum,
            src: base64Data, // Use base64 locally so it renders immediately
            originalName: file.name,
            x: 200,
            y: 200,
            width: defaultWidth,
            height: defaultHeight,
            rotation: 0,
            scale: 1,
            cropLeft: 0,
            cropRight: 0,
            cropTop: 0,
            cropBottom: 0,
            zIndex: images.length > 0 ? Math.max(...images.map((i) => i.zIndex)) + 1 : 1,
          };

          // Update state with base64 for instant rendering
          const updatedState = [...images, newImage];
          setImages(updatedState);
          setSelectedId(newImage.id);

          // Save to server config with the actual static disk URL (so it loads from disk next time)
          const imageToSave = { ...newImage, src: imageUrl };
          const updatedSave = [...images.filter(i => i.id !== newImage.id), imageToSave];
          saveLayout(updatedSave);
        };

        tempImg.onerror = (e) => {
          console.error("Failed to decode uploaded image base64 data", e);
          alert("Failed to preview uploaded image.");
        };

        tempImg.src = base64Data;

      } catch (err) {
        console.error("Error uploading image", err);
        alert("Failed to upload image");
      }
    };
    reader.readAsDataURL(file);
  };

  // Drag and Drop handlers for file drop zone
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isEditing) {
      setIsDraggingOver(true);
    }
  };

  const onDragLeave = () => {
    setIsDraggingOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    if (!isEditing) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Image Translate / Drag handler
  const handleImageMouseDown = (e: React.MouseEvent, img: DynamicImage) => {
    if (!isEditing) return;
    e.stopPropagation();
    setSelectedId(img.id);
    setDraggedId(img.id);
    setDragMode("translate");

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      imageX: img.x,
      imageY: img.y,
      imageScale: img.scale,
      imageRotation: img.rotation,
    };
  };

  const handleHandleMouseDown = (e: React.MouseEvent, img: DynamicImage, mode: "scale" | "rotate") => {
    if (!isEditing) return;
    e.stopPropagation();
    e.preventDefault();
    setSelectedId(img.id);
    setDraggedId(img.id);
    setDragMode(mode);

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      imageX: img.x,
      imageY: img.y,
      imageScale: img.scale,
      imageRotation: img.rotation,
    };
  };

  const handleGlobalMouseMove = (e: MouseEvent) => {
    if (!draggedId || !dragMode) return;

    const img = images.find((i) => i.id === draggedId);
    if (!img || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = rect.width / 1920;
    const scaleY = rect.height / 1080;

    // Current mouse in canvas coordinates
    const mouseCanvasX = (e.clientX - rect.left) / scaleX;
    const mouseCanvasY = (e.clientY - rect.top) / scaleY;

    if (dragMode === "translate") {
      const dx = (e.clientX - dragStartRef.current.x) / scaleX;
      const dy = (e.clientY - dragStartRef.current.y) / scaleY;
      const newX = Math.round(dragStartRef.current.imageX + dx);
      const newY = Math.round(dragStartRef.current.imageY + dy);
      
      setImages((prev) =>
        prev.map((i) => (i.id === draggedId ? { ...i, x: newX, y: newY } : i))
      );
    } else if (dragMode === "scale") {
      // Calculate center of image in canvas coordinates
      const centerX = img.x + img.width / 2;
      const centerY = img.y + img.height / 2;

      // Distance from center to current mouse
      const dx = mouseCanvasX - centerX;
      const dy = mouseCanvasY - centerY;
      const currentDist = Math.sqrt(dx * dx + dy * dy);

      // Distance from center to start mouse
      const startMouseCanvasX = (dragStartRef.current.x - rect.left) / scaleX;
      const startMouseCanvasY = (dragStartRef.current.y - rect.top) / scaleY;
      const startDx = startMouseCanvasX - centerX;
      const startDy = startMouseCanvasY - centerY;
      const startDist = Math.sqrt(startDx * startDx + startDy * startDy);

      if (startDist > 0) {
        // Calculate new scale, round to 2 decimals
        const ratio = currentDist / startDist;
        const newScale = Math.round(Math.max(0.1, Math.min(4.0, dragStartRef.current.imageScale * ratio)) * 100) / 100;
        setImages((prev) =>
          prev.map((i) => (i.id === draggedId ? { ...i, scale: newScale } : i))
        );
      }
    } else if (dragMode === "rotate") {
      // Calculate center of image
      const centerX = img.x + img.width / 2;
      const centerY = img.y + img.height / 2;

      // Angle of current mouse from center
      const dx = mouseCanvasX - centerX;
      const dy = mouseCanvasY - centerY;
      const angleRad = Math.atan2(dy, dx);
      
      // Convert to degrees and add 90 (to offset top handle position)
      let angleDeg = Math.round((angleRad * 180) / Math.PI) + 90;
      
      // Normalize to -180 to 180
      if (angleDeg > 180) angleDeg -= 360;
      if (angleDeg < -180) angleDeg += 360;

      setImages((prev) =>
        prev.map((i) => (i.id === draggedId ? { ...i, rotation: angleDeg } : i))
      );
    }
  };

  const handleGlobalMouseUp = () => {
    if (draggedId) {
      setDraggedId(null);
      setDragMode(null);
      saveLayout(images);
    }
  };

  useEffect(() => {
    if (draggedId) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [draggedId, images, dragMode]);

  // Image deletion
  const deleteImage = (id: string) => {
    const updated = images.filter((i) => i.id !== id);
    setImages(updated);
    if (selectedId === id) setSelectedId(null);
    saveLayout(updated);
  };

  // Depth / Z-Index management
  const bringToFront = (id: string) => {
    const maxZ = images.length > 0 ? Math.max(...images.map((i) => i.zIndex)) : 0;
    const updated = images.map((i) => (i.id === id ? { ...i, zIndex: maxZ + 1 } : i));
    setImages(updated);
    saveLayout(updated);
  };

  const sendToBack = (id: string) => {
    const minZ = images.length > 0 ? Math.min(...images.map((i) => i.zIndex)) : 0;
    const updated = images.map((i) => (i.id === id ? { ...i, zIndex: minZ - 1 } : i));
    setImages(updated);
    saveLayout(updated);
  };

  // Selection state & updates
  const updateSelectedProp = (prop: keyof DynamicImage, val: number) => {
    if (!selectedId) return;
    const updated = images.map((i) => (i.id === selectedId ? { ...i, [prop]: val } : i));
    setImages(updated);
  };

  const handleSelectedPropChangeComplete = () => {
    saveLayout(images);
  };

  const selectedImage = images.find((i) => i.id === selectedId);
  const slideImages = images.filter((i) => i.slideNum === slideNum);

  return (
    <div
      ref={containerRef}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        pointerEvents: isEditing ? "all" : "none",
        zIndex: 40,
      }}
    >
      {/* File Drag Over Highlight Overlay */}
      {isEditing && isDraggingOver && (
        <div
          style={{
            position: "absolute",
            inset: 20,
            borderRadius: 24,
            border: "4px dashed #7C3AED",
            backgroundColor: "rgba(124, 58, 237, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            pointerEvents: "none",
            animation: "pulse 1.5s infinite",
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 700, color: "#7C3AED" }}>
            Drop Image File Here
          </span>
        </div>
      )}

      {/* Slide Images */}
      {slideImages.map((img) => {
        const isSelected = selectedId === img.id;
        
        // CSS Inset Crop
        const clipPath = `inset(${img.cropTop}% ${img.cropRight}% ${img.cropBottom}% ${img.cropLeft}%)`;

        return (
          <div
            key={img.id}
            onMouseDown={(e) => handleImageMouseDown(e, img)}
            style={{
              position: "absolute",
              left: img.x,
              top: img.y,
              width: img.width,
              height: img.height,
              transform: `rotate(${img.rotation}deg) scale(${img.scale})`,
              transformOrigin: "center center",
              zIndex: img.zIndex,
              cursor: isEditing ? "move" : "default",
              pointerEvents: "all",
              transition: draggedId === img.id ? "none" : "transform 0.1s ease",
            }}
          >
            {/* Image Box */}
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                outline: isEditing && isSelected ? "3px solid #7C3AED" : isEditing ? "1px dashed rgba(124,58,237,0.4)" : "none",
                outlineOffset: "2px",
                borderRadius: 4,
                boxShadow: isEditing && isSelected ? "0 10px 30px rgba(124,58,237,0.25)" : "none",
              }}
            >
              <img
                src={img.src}
                alt={img.originalName || "dynamic slide asset"}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  clipPath: clipPath,
                  display: "block",
                }}
              />

              {/* Selection info overlay in edit mode */}
              {isEditing && isSelected && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: -28,
                      left: 0,
                      backgroundColor: "#7C3AED",
                      color: "white",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 4,
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                    }}
                  >
                    {img.originalName || "Image"} · Z:{img.zIndex}
                  </div>

                  {/* Visual Handlers: Rotation (top center) */}
                  <div
                    onMouseDown={(e) => handleHandleMouseDown(e, img, "rotate")}
                    style={{
                      position: "absolute",
                      top: -30,
                      left: "50%",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#7C3AED",
                      border: "2px solid white",
                      boxShadow: "0 2px 8px rgba(124,58,237,0.5)",
                      cursor: "alias",
                      transform: "translateX(-50%)",
                      zIndex: 100,
                    }}
                    title="Rotate"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      left: "50%",
                      width: 1.5,
                      height: 20,
                      backgroundColor: "#7C3AED",
                      transform: "translateX(-50%)",
                      zIndex: 99,
                    }}
                  />

                  {/* Corner Scale Knobs */}
                  <div
                    onMouseDown={(e) => handleHandleMouseDown(e, img, "scale")}
                    style={{
                      position: "absolute",
                      top: -6,
                      left: -6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "2.5px solid #7C3AED",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      cursor: "nwse-resize",
                      zIndex: 100,
                    }}
                    title="Scale"
                  />
                  <div
                    onMouseDown={(e) => handleHandleMouseDown(e, img, "scale")}
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "2.5px solid #7C3AED",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      cursor: "nesw-resize",
                      zIndex: 100,
                    }}
                    title="Scale"
                  />
                  <div
                    onMouseDown={(e) => handleHandleMouseDown(e, img, "scale")}
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: -6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "2.5px solid #7C3AED",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      cursor: "nesw-resize",
                      zIndex: 100,
                    }}
                    title="Scale"
                  />
                  <div
                    onMouseDown={(e) => handleHandleMouseDown(e, img, "scale")}
                    style={{
                      position: "absolute",
                      bottom: -6,
                      right: -6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "2.5px solid #7C3AED",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      cursor: "nwse-resize",
                      zIndex: 100,
                    }}
                    title="Scale"
                  />
                </>
              )}
            </div>
          </div>
        );
      })}

      {/* Floating Canvas Controls (Only in Edit Mode) */}
      {isEditing && (
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            zIndex: 90,
            pointerEvents: "all",
            display: "flex",
            gap: 12,
          }}
        >
          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              border: "none",
              color: "white",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "transform 0.15s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
            </svg>
            <ThaiText en="Upload Image">อัปโหลดภาพ</ThaiText>
          </button>
          
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />

          <span
            style={{
              alignSelf: "center",
              fontSize: 11,
              color: "#6B7280",
              fontWeight: 600,
              backgroundColor: "white",
              padding: "4px 10px",
              borderRadius: 6,
              border: "1px solid #E5E7EB",
            }}
          >
            <ThaiText en="Drag & drop images anywhere on the slide">ลากและวางภาพลงในสไลด์ได้โดยตรง</ThaiText>
          </span>
        </div>
      )}

      {/* Editor Control Panel Sidebar (Right side, anchored top) */}
      {isEditing && selectedImage && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 300,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            borderRadius: 20,
            padding: 20,
            zIndex: 90,
            pointerEvents: "all",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: "#111827" }}>
              <ThaiText en="Image Settings">การตั้งค่ารูปภาพ</ThaiText>
            </span>
            <button
              onClick={() => setSelectedId(null)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 14,
                cursor: "pointer",
                color: "#9CA3AF",
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, marginTop: -8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: isApiAvailable ? "#10B981" : "#F59E0B" }} />
            <span style={{ color: isApiAvailable ? "#10B981" : "#F59E0B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {isApiAvailable ? "Connected to Disk" : "Browser Storage Only"}
            </span>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #F3F4F6", margin: 0 }} />

          {/* Scale Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
              <span><ThaiText en="Scale">ขนาด</ThaiText></span>
              <span>{Math.round(selectedImage.scale * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.05"
              value={selectedImage.scale}
              onChange={(e) => updateSelectedProp("scale", parseFloat(e.target.value))}
              onMouseUp={handleSelectedPropChangeComplete}
              style={{ width: "100%", accentColor: "#7C3AED" }}
            />
          </div>

          {/* Rotation Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
              <span><ThaiText en="Rotation">หมุน</ThaiText></span>
              <span>{selectedImage.rotation}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={selectedImage.rotation}
              onChange={(e) => updateSelectedProp("rotation", parseInt(e.target.value))}
              onMouseUp={handleSelectedPropChangeComplete}
              style={{ width: "100%", accentColor: "#7C3AED" }}
            />
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #F3F4F6", margin: 0 }} />

          {/* Crop Section */}
          <div>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#111827", display: "block", marginBottom: 8 }}>
              <ThaiText en="Crop Bounds">ครอปกรอบภาพ</ThaiText>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Crop Top */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#4B5563", marginBottom: 4 }}>
                  <span>Top</span>
                  <span>{selectedImage.cropTop}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="1"
                  value={selectedImage.cropTop}
                  onChange={(e) => updateSelectedProp("cropTop", parseInt(e.target.value))}
                  onMouseUp={handleSelectedPropChangeComplete}
                  style={{ width: "100%", accentColor: "#7C3AED" }}
                />
              </div>

              {/* Crop Bottom */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#4B5563", marginBottom: 4 }}>
                  <span>Bottom</span>
                  <span>{selectedImage.cropBottom}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="1"
                  value={selectedImage.cropBottom}
                  onChange={(e) => updateSelectedProp("cropBottom", parseInt(e.target.value))}
                  onMouseUp={handleSelectedPropChangeComplete}
                  style={{ width: "100%", accentColor: "#7C3AED" }}
                />
              </div>

              {/* Crop Left */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#4B5563", marginBottom: 4 }}>
                  <span>Left</span>
                  <span>{selectedImage.cropLeft}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="1"
                  value={selectedImage.cropLeft}
                  onChange={(e) => updateSelectedProp("cropLeft", parseInt(e.target.value))}
                  onMouseUp={handleSelectedPropChangeComplete}
                  style={{ width: "100%", accentColor: "#7C3AED" }}
                />
              </div>

              {/* Crop Right */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#4B5563", marginBottom: 4 }}>
                  <span>Right</span>
                  <span>{selectedImage.cropRight}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  step="1"
                  value={selectedImage.cropRight}
                  onChange={(e) => updateSelectedProp("cropRight", parseInt(e.target.value))}
                  onMouseUp={handleSelectedPropChangeComplete}
                  style={{ width: "100%", accentColor: "#7C3AED" }}
                />
              </div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #F3F4F6", margin: 0 }} />

          {/* Z-Index & Delete */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => bringToFront(selectedImage.id)}
              style={{
                flex: 1,
                fontSize: 10,
                fontWeight: 700,
                padding: "8px 0",
                borderRadius: 8,
                border: "1px solid #E5E7EB",
                background: "white",
                cursor: "pointer",
              }}
            >
              Bring Front
            </button>
            <button
              onClick={() => sendToBack(selectedImage.id)}
              style={{
                flex: 1,
                fontSize: 10,
                fontWeight: 700,
                padding: "8px 0",
                borderRadius: 8,
                border: "1px solid #E5E7EB",
                background: "white",
                cursor: "pointer",
              }}
            >
              Send Back
            </button>
          </div>

          <button
            onClick={() => deleteImage(selectedImage.id)}
            style={{
              padding: "10px 0",
              borderRadius: 10,
              background: "#FEE2E2",
              color: "#EF4444",
              border: "none",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              width: "100%",
              marginTop: 4,
            }}
          >
            Delete Image
          </button>
        </div>
      )}

      {/* Global Toggle Button & Status Indicators (Hidden until hovered, positioned bottom-left outside standard slide content) */}
      <div
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          padding: "24px 48px 24px 24px",
          zIndex: 9999,
          pointerEvents: "all",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            setSelectedId(null);
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "999px",
            background: isEditing ? "#EF4444" : "rgba(17, 24, 39, 0.78)",
            backdropFilter: "blur(12px)",
            border: isEditing ? "none" : "1px solid rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 11,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "background 0.2s, transform 0.15s, opacity 0.25s ease",
            opacity: isEditing || isBtnHovered || isSaving || !!saveStatus ? 1 : 0,
            pointerEvents: isEditing || isBtnHovered || isSaving || !!saveStatus ? "all" : "none",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {isEditing ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            )}
          </svg>
          <span>
            {isEditing ? (
              <ThaiText en="Close Editor">ปิดโหมดแก้ไข</ThaiText>
            ) : (
              <ThaiText en="Edit Slide Images">แก้ไขรูปภาพสไลด์</ThaiText>
            )}
          </span>
        </button>

        {/* Status notification */}
        {saveStatus && (
          <div
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.9)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              color: "white",
              fontSize: 10,
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
              transition: "opacity 0.25s ease",
              opacity: isEditing || isBtnHovered || isSaving || !!saveStatus ? 1 : 0,
            }}
          >
            {saveStatus}
          </div>
        )}
        {isSaving && (
          <div
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(124, 58, 237, 0.9)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              color: "white",
              fontSize: 10,
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.2)",
              transition: "opacity 0.25s ease",
              opacity: isEditing || isBtnHovered || isSaving || !!saveStatus ? 1 : 0,
            }}
          >
            Saving...
          </div>
        )}
      </div>
    </div>
  );
}
