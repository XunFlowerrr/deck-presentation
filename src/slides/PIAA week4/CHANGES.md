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

## 5. แก้ StandardScalerWeek4 — ประโยคผิด
- เดิม: "text tokens beat image tokens at **every layer**" (ไม่จริง — ชั้น 1-9 image tokens ชนะ)
- ใหม่: "from the middle layers onward... best was a mid-to-late text-token layer"

## 6. สไลด์ใหม่ 5 อัน (session 2026-07-06/07)
- **DedupProblemWeek4** (Task 1, หลัง FairComparison): ให้เห็นภาพปัญหา rating ซ้ำ
  (100→106 rows) + before/after fix + impact +0.004 CCC
- **VlmFaithfulnessWeek4** (Task 2, หลัง VlmBackbone): ตารางเทียบทุก aspect กับเปเปอร์
  Ryu & Yanaka แบบ MATCH/CLOSE/EXTENDED + แนบรูป Figure 1 จริงจากเปเปอร์
  (asset: `assets/images/general/ryu_yanaka_fig1.png`, export `ryuYanakaFig1Img`)
- **StandardScalerConceptWeek4** (Task 2, ก่อนตาราง StandardScaler เดิม): อธิบาย
  แนวคิดว่าทำไม L2-norm พังที่ 4096 มิติ ด้วย mini-bar visualization (ไม่ใช่แค่ตัวเลข)
- **LayerSweepWeek4** (Task 2, หลัง StandardScaler): กราฟเส้น LT vs LV ทั้ง 36 ชั้น,
  จุดตัดที่ layer~10, มาร์ค layer 15 (paper) vs layer 32 (best จริง)
- **FineTuneHowWeek4** (Task 3, ก่อนตารางผล FineTuning): ไดอะแกรม 2-stage
  (fine-tune บน population → freeze → per-user Ridge = Personal Formula)
  พร้อมอธิบายว่าทำไมไม่ joint-train backprop ทั้งคู่

⚠️ ไม่มี Node.js/npm ในเครื่องตอนแก้ — ตรวจ syntax/props ด้วยการอ่านโค้ดเทียบ
กับ component จริง (SlideHeader/SlideShell props) แทน `tsc --noEmit`
ควรรัน `pnpm install && pnpm dev` เช็คก่อนพรีเซนต์จริง
