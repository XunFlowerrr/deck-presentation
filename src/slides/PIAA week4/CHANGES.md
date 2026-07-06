# สรุปการแก้สไลด์ทั้งหมด

## 1. เอา emoji ตกแต่งออกทั้งหมด
- NextSteps: 🧪💬 → หัวข้อเป็นคำพูดปกติ ("What I plan to try next", "Questions I'd like to discuss")
- Summary: ✓✓✓✓★↗ → เปลี่ยนเป็นเลข 1-6 (ดูเป็นลำดับ เป็นระเบียบ)
- FineTuning: ★📉🔒 → เอาออก เหลือแค่ ★ เล็กๆ มาร์ค backbone ที่ดีที่สุด (functional)
- StandardScaler: 🔍✅ → เอาออก
- VlmBackbone: 🧠📐📊📝⚙️🚀💾🎯⚡ → เปลี่ยนเป็น bullet • ธรรมดา
- Wilcoxon: 💡 → เอาออก

## 2. แก้ภาษาให้เป็นธรรมชาติ (เลิกโทนโฆษณา)
- "Small beats giant" → "A small tuned model can win / A small fine-tuned CLIP does better..."
- "It's a dimensionality problem." → "the problem comes from having so many dimensions"
- "Redundancy pattern:" → "A pattern worth noting:"
- "emotion adds" (คอลัมน์) → "How much the emotion step helps"
- ลบคอลัมน์ "Signal" (แถบสีที่อ่านไม่รู้เรื่อง) ออก
- คำอธิบายทุกจุดเขียนใหม่ให้เหมือนคนเล่างาน ไม่ใช่ headline

## 3. แก้ตัวเลข Wilcoxon ให้ตรงไฟล์ล่าสุด
- CLIP: ใช้ชุดใหม่ (+0.071 win 91.7% ที่ n=100) — ตรง wilcoxon_CLIP_ccc.csv รอบใหม่
- Qwen2: แก้เป็น +0.049 win 80.1% ที่ n=100 — ตรง wilcoxon_Qwen2_ccc.csv
- ลบข้อความเก่าที่พูดผิดว่า "Qwen benefits more than CLIP"
  (ความจริงรอบใหม่ CLIP ได้ประโยชน์มากกว่า เพราะ Direct อ่อนกว่า)

## 4. แก้ชื่อรุ่นพี่เจ้าของ dataset
- ทุกจุด: Hiyoshi-san → **Hayashi-san** (Takato Hayashi)
- อยู่ใน FairComparison (ตาราง ICI/MIR) และ FineTuning (ตาราง) และ Agenda

## ตัวเลขที่ยืนยันแล้วว่าตรงไฟล์ทางการ
- FairComparison: P-oracle 0.725, ICI 0.409, MIR 0.411, CLIP Hybrid 0.366, Direct 0.293 ✓
- FineTuning: CLIP-ft emotion 0.400 (พระเอก), Qwen3 0.382, ICI 0.409, MIR 0.411 ✓
- StandardScaler: Qwen3 L2=0.006/StandardScaler=0.376, CLIP L2=0.301/SS=0.293 ✓

## หมายเหตุ
- สี ดีไซน์ layout เดิมเก็บไว้ทั้งหมดตามที่ขอ
- Qwen2-vision ยังอยู่ในสไลด์ Wilcoxon (ไม่เปลี่ยนเป็น Qwen3)
  เพราะสไลด์นั้นเล่าเรื่อง "emotion ช่วยจริง" ซึ่ง Qwen2+CLIP เป็นคู่เทียบที่ดี
  ส่วน Qwen3 (ที่ emotion แทบไม่ช่วย) ไปเด่นในสไลด์ Summary/FineTuning เรื่อง redundancy
