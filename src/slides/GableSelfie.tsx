import { motion } from "framer-motion";
import {
  AccentLine,
  GradientText,
  SlideShell,
} from "../components/index.ts";
import { bodyText, heroTitle } from "../lib/motion.ts";
import { internSelfieImg } from "../content/assets.ts";

const GLOWS = [
  { top: -200, right: -100, size: 900, color: "59, 130, 246", opacity: 0.15 }, // Blue
  { bottom: -200, left: -100, size: 700, color: "236, 72, 153", opacity: 0.12 }, // Pink
];

export function GableSelfie() {
  return (
    <SlideShell glows={GLOWS}>
      {/* Top Brand Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0284C7, #EC4899)",
              boxShadow: "0 0 10px rgba(236, 72, 153, 0.6)",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#0284C7",
              fontWeight: 800,
            }}
          >
            Memories & Outro
          </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 64,
          alignItems: "center",
          minHeight: 0,
        }}
      >
        {/* Left Side: Polaroid Selfie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            flex: 1.2,
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "20px 20px 48px 20px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Selfie Image wrapper */}
          <div
            style={{
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #F3F4F6",
              aspectRatio: "4/3",
            }}
          >
            <img
              src={internSelfieImg}
              alt="Intern Selfie at G-ABLE"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Polaroid Caption */}
          <div
            style={{
              marginTop: 20,
              fontSize: 24,
              fontWeight: 800,
              color: "#4B5563",
              letterSpacing: "0.05em",
              fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
              textAlign: "center",
            }}
          >
            G-ABLE Intern Team 2026 📸✨
          </div>
        </motion.div>

        {/* Right Side: Thank You message */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.h1
            {...heroTitle(0.1, 32)}
            style={{
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: "0 0 24px",
              color: "#0A0A0A",
              userSelect: "none",
              fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
            }}
          >
            Thank{" "}
            <GradientText from="#F59E0B" via="#F97316" to="#EA580C">
              You!
            </GradientText>
          </motion.h1>

          <AccentLine
            delay={0.45}
            width={100}
            style={{
              marginBottom: 32,
              background: "linear-gradient(90deg, #F59E0B, #F97316)",
            }}
          />

          <motion.p
            {...bodyText(0.6)}
            style={{
              fontSize: 26,
              color: "#374151",
              margin: "0 0 16px 0",
              fontWeight: 600,
              letterSpacing: "-0.2px",
              lineHeight: 1.6,
              fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
            }}
          ></motion.p>
        </div>
      </div>

      {/* Bottom info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #F3F4F6",
          paddingTop: 24,
          fontSize: 18,
          color: "#9CA3AF",
          fontWeight: 600,
          letterSpacing: "0.02em",
          fontFamily: "'Inter', 'Noto Sans Thai', sans-serif",
        }}
      >
        มาฝึกงานที่ G-ABLE แล้วได้อะไร? · G-ABLE Public Company Limited
      </div>
    </SlideShell>
  );
}
