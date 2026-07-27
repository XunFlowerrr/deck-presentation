# Slide Design Spec — Emotion-Mediated PIAA (ให้ antigravity สร้างต่อ)
# 16 สไลด์ + Q&A backup · ~20 นาที · โทนชมพู-ม่วง (จุฬา) แบบมืออาชีพ

═══════════════════════════════════════════════════════════
DESIGN SYSTEM (ใช้ทั้ง deck — สำคัญที่สุด อ่านก่อน)
═══════════════════════════════════════════════════════════

## ปรัชญาการออกแบบ
ชมพู-ม่วง แบบ "นักวิจัยที่เนี๊ยบ" ไม่ใช่ "หวานสดใส"
เคล็ดลับให้ดูโต + น่าเชื่อถือ:
- ใช้ชมพูเป็น accent (เน้นจุดสำคัญ) ไม่ใช่ทาทั้งสไลด์
- พื้นหลังขาว/เทาอ่อนเป็นหลัก → ชมพูเลยเด่นและดูพรีเมียม
- ชมพูที่ใช้เป็นชมพูอมม่วงเข้ม (magenta-rose) ไม่ใช่ชมพูพาสเทลหวาน
- ตัวอักษรเนื้อหาเป็นเทาเข้ม ไม่ใช่ชมพู (อ่านง่าย มืออาชีพ)

## Palette (ให้ antigravity ใช้ hex พวกนี้เป๊ะ)
- **Primary pink (accent หลัก):** #C2185B (rose เข้ม อมม่วง — จุฬา-ish, ดูโต)
- **Secondary purple (accent รอง):** #7B2C8F (ม่วงเข้ม — Hybrid / คำตอบ / positive)
- **Deep plum (หัวข้อ/เน้นมาก):** #4A1533 (ม่วงเข้มเกือบดำ — headline สำคัญ)
- **Soft pink (พื้นหลัง box/ไฮไลต์):** #FCE4EC (ชมพูอ่อนมาก — พื้นกล่อง)
- **Text หลัก:** #2B2230 (เทาอมม่วงเข้ม ไม่ใช่ดำสนิท)
- **Text รอง/caption:** #6B5B6E (เทาอมม่วงกลาง)
- **พื้นหลังสไลด์:** #FFFFFF หรือ #FDFCFD (ขาวอมชมพูจางมาก)
- **เทากลาง(Direct / baseline / neutral):** #9E9E9E
→ กฎ: ชมพู #C2185B = จุดสำคัญที่สุด, ม่วง #7B2C8F = ผลบวก/คำตอบ, เทา = baseline/neutral

## ฟอนต์
- **หัวข้อ:** sans-serif หนา คม เช่น "Inter", "Poppins" (SemiBold/Bold) — modern, มืออาชีพ
- **เนื้อหา:** sans-serif เดียวกัน (Regular/Medium)
- **ตัวเลขสำคัญ:** ตัวใหญ่พิเศษ น้ำหนัก Bold สีชมพูหรือม่วง
- ขนาด: หัวข้อ 34-40pt · เนื้อหา 20-24pt · caption 15-16pt · ตัวเลข hero 60-80pt

## เลย์เอาต์ (กฎทองทุกสไลด์)
- 1 สไลด์ = 1 ข้อความหลัก
- หัวข้อสไลด์ = ประโยคสรุป (ไม่ใช่แค่ชื่อ) เช่น "Emotion helps 93% of users"
- รูป/กราฟใหญ่ 50-65% · ข้อความน้อย · white space เยอะ
- ตัวเลขสำคัญทำ hero (ตัวใหญ่พิเศษ สีชมพู/ม่วง)
- footer ทุกหน้า: ซ้าย "Emotion-Mediated PIAA" · ขวา เลขหน้า (เทาเล็ก 12pt)
- แถบ accent บางๆ สีชมพูด้านซ้ายหัวข้อ (2-3px) ให้ดู polished
- ไม่มี emoji · ไม่มี bullet เกิน 4 จุด/สไลด์ · transition fade เรียบ
- มุมหนึ่งของทุกสไลด์: จุดกลมชมพูจางๆ หรือเส้น gradient ชมพู→ม่วง บางๆ (subtle brand)

## รูปที่ใช้ (มีในเครื่อง paper/figures/)
fig1_pipeline · fig2_support_curve · fig3_mechanism · fig4_saturation
fig5_ceiling · fig6_coldstart · fig7_placebo
→ ถ้าสีกราฟไม่เข้าธีม ให้ recolor เป็นชมพู(#C2185B)/ม่วง(#7B2C8F)/เทา ให้เข้ากัน

═══════════════════════════════════════════════════════════
SLIDE-BY-SLIDE (ข้อความเป๊ะ + วางรูป + สี)
═══════════════════════════════════════════════════════════

──────────────────────────────────────────
## SLIDE 1 — Title
──────────────────────────────────────────
LAYOUT: กลางหน้า ค่อนบน
TEXT (บนลงล่าง):
- หัวเรื่องใหญ่ (40pt, deep plum #4A1533, Bold):
  "Emotion-Mediated Personalized Image Aesthetic Assessment"
- subtitle (26pt, pink #C2185B): "When, Why, and How Far It Helps"
- เว้นบรรทัด
- (22pt, text เทา): "Pinwa [นามสกุล]" + co-authors
- (18pt, เทารอง): "JAIST · Chulalongkorn University"
IMAGE: แถบล่างสุด — ภาพเดียวกัน 3 รูป (เช่น landscape) มีป้ายคะแนนต่างกัน 2/7, 5/7, 6/7
  สื่อ "คนเดียวกันมองต่างกัน" · กรอบภาพมุมมน เงาจางๆ
DECOR: เส้น gradient ชมพู→ม่วง บางๆ ใต้ subtitle · จุดกลมชมพูจางมุมขวาบน

──────────────────────────────────────────
## SLIDE 2 — Agenda / สารบัญ
──────────────────────────────────────────
LAYOUT: หัวข้อบน + 5 ข้อเรียงแนวตั้ง (เลขวงกลม)
TITLE (36pt, plum): "What we'll cover today"
5 ข้อ (เลขในวงกลมชมพู #C2185B, ข้อความเทาเข้ม 24pt):
  1. The idea
  2. Does it work?
  3. When and why does it help?
  4. How far can it go?
  5. Is the gain real?
DECOR: เลขวงกลม fill ชมพู ตัวเลขขาว · เส้นเชื่อมจุดจางๆ ม่วง
NOTE: สไลด์นี้เก็บไว้ reuse ตอน transition (ทำ dot ไฮไลต์ข้อปัจจุบันได้)

──────────────────────────────────────────
## SLIDE 3 — Background (IAA -> PIAA -> problem)
──────────────────────────────────────────
LAYOUT: 3 บล็อกไล่ซ้าย→ขวา (เหมือน flow)
TITLE (34pt, plum): "From average taste to personal taste"
บล็อก 1 (IAA): ไอคอนภาพ + คะแนนเดียว "3.5/7"
  caption: "IAA: one score, the average opinion"
บล็อก 2 (PIAA): ภาพเดียว 3 คนให้ต่างกัน 2/7, 5/7, 6/7
  caption: "PIAA: how much does THIS person like it?"
  → ไฮไลต์กล่องนี้ด้วยพื้น soft pink #FCE4EC
บล็อก 3 (problem): กล่องดำ "user -> [black box] -> score" + "?" ชมพูตัวใหญ่
  caption: "accurate, but cannot explain WHY"
BOTTOM STRIP (เทารอง): "used for recommendation, curation, ranking AI images"
COLOR: PIAA เด่นสุด (ชมพู) · black box เทาเข้ม · ? ชมพู

──────────────────────────────────────────
## SLIDE 4 — Our idea
──────────────────────────────────────────
LAYOUT: กลางหน้า flow ง่ายๆ
TITLE (34pt, plum): "We define preference through feeling"
FLOW (แนวนอน กล่อง→ลูกศร→กล่อง):
  [image] → [7 emotions] → [linear formula] → [preference score]
  - กล่อง "7 emotions" พื้นม่วง #7B2C8F ตัวขาว
  - กล่อง "linear formula" ขอบชมพู + ป้ายใต้ "readable per-person formula"
QUOTE ล่าง (20pt, plum italic):
  "This image makes me feel X, so I like it this much."
COLOR: emotion box ม่วง · formula box เน้นชมพู · ลูกศรเทาเข้ม

──────────────────────────────────────────
## SLIDE 5 — Pipeline (รูปจริง)
──────────────────────────────────────────
LAYOUT: รูปเต็มความกว้าง + annotation
TITLE (34pt, plum): "Two pathways: Direct and Hybrid"
IMAGE: fig1_pipeline (recolor ให้เข้าธีม: Hybrid=ม่วง, Direct=เทา, score=ชมพู)
ANNOTATION สด:
  - วงชมพูรอบ "per-user formula" + ลูกศร "this is what we can read"
  - ป้ายใต้ image→emotion: "shared (trained on general users)"
CAPTION (16pt): "The gap between Direct and Hybrid = what emotion adds"

──────────────────────────────────────────
## SLIDE 6 — Dataset (XPASS-Vis)
──────────────────────────────────────────
LAYOUT: ซ้ายตัวเลข hero · ขวาเหตุผล
TITLE (34pt, plum): "One dataset deep enough per person"
LEFT (ตัวเลข hero, ชมพู Bold 44pt เรียงลง):
  "129 people" · "6,526 images" · "3 categories"
RIGHT (2 จุด, กล่อง soft pink):
  1. "Deep per person → we can fit a personal formula"
  2. "Test-retest design → used later for the ceiling"
BOTTOM (แถบม่วงจาง): "leak-free: test users & images never seen in training"
COLOR: ตัวเลข hero ชมพู · box ขวา soft pink · leak-free bar ม่วงจาง

──────────────────────────────────────────
## SLIDE 7 — Transition: Part 2
──────────────────────────────────────────
LAYOUT: กลางหน้า minimal (สไลด์พักหายใจ)
TEXT ใหญ่ (40pt, plum): "Part 2 — Does it actually work?"
DECOR: reuse agenda เล็กๆ มุมขวา ไฮไลต์ข้อ 2 ด้วยชมพู
COLOR: พื้นสะอาด · ตัวหนังสือ plum · จุดชมพูเดียว

──────────────────────────────────────────
## SLIDE 8 — Finding 1: emotion helps
──────────────────────────────────────────
LAYOUT: ซ้ายตัวเลข · ขวากราฟ
TITLE (34pt, plum): "Going through emotion helps 93% of users"
LEFT (hero): "0.293 → 0.359" (ลูกศรม่วง) + "+0.066" (ชมพู Bold 48pt)
  ใต้: "helps 93% of people"
RIGHT: fig2_support_curve (recolor เส้นเป็นชมพู/ม่วง)
CAPTION (16pt): "more personal data → more help"
COLOR: gain +0.066 ชมพูเด่นสุด · เส้นกราฟม่วง

──────────────────────────────────────────
## SLIDE 9 — Finding 3: comparable to baselines
──────────────────────────────────────────
LAYOUT: กราฟแท่งกลาง + ข้อความล่าง
TITLE (34pt, plum): "We match trait methods, without traits"
CHART: bar chart 3 แท่ง (แนะนำทำใหม่ให้เข้าธีม):
  ICI 0.369 (เทา) · MIR 0.385 (เทา) · Ours 0.380 (ชมพู เด่น)
  ป้ายบนแท่ง Ours: "no traits · interpretable"
BOTTOM (2 บรรทัดเล็ก, ม่วง):
  "Stronger backbone ≠ always better (Qwen2 ≈ Qwen3)"
  "Fine-tuning not needed — matches Ryu & Yanaka"
COLOR: Ours ชมพูเด่น · baseline เทา

──────────────────────────────────────────
## SLIDE 10 — Transition: 3 questions
──────────────────────────────────────────
LAYOUT: กลางหน้า 3 คำถามใหญ่
TITLE (30pt, plum): "It works. Now three questions."
3 คำถาม (28pt, เรียงลง เลขชมพู):
  "When does it help?"
  "How far can it go?"
  "Is the gain real?"
COLOR: คำถาม plum · เลข/จุดนำ ชมพู · พื้นสะอาด

──────────────────────────────────────────
## SLIDE 11 — Finding 4: when (emo_r)
──────────────────────────────────────────
LAYOUT: ซ้ายข้อความ · ขวากราฟ
TITLE (34pt, plum): "It helps more when we read emotions well"
LEFT (2-3 บรรทัด): "One clean factor: emotion accuracy" +
  "gain rises 0.041 → 0.078 across groups" (ตัวเลขชมพู)
RIGHT: fig3_mechanism (recolor แท่งไล่เฉดชมพู→ม่วง ยิ่งแม่นยิ่งเข้ม)
CAPTION (16pt): "the rival explanation was a confound"

──────────────────────────────────────────
## SLIDE 12 — Finding 2: perception vs weighting
──────────────────────────────────────────
LAYOUT: 3 กรณีเรียงแนวนอน (stacked bar)
TITLE (32pt, plum): "Feeling vs weighting: it depends how we measure"
3 แท่ง (แต่ละแท่งแบ่ง feeling/weighting):
  same-session · cross-session · averaged
  - feeling = ม่วง #7B2C8F · weighting = ชมพู #C2185B
  - averaged: วงกลม "≈ 50/50" ไฮไลต์ deep plum
CAPTION: "so we report it honestly, as a supporting result with ranges"
NOTE: พูดคร่าวๆ อย่าค้างนาน

──────────────────────────────────────────
## SLIDE 13 — Finding 6: ceiling
──────────────────────────────────────────
LAYOUT: กราฟ 4 แท่ง (A/B/C/D) + hero number
TITLE (34pt, plum): "The realistic ceiling is 0.64"
CHART: fig5_ceiling — 4 แท่ง A 0.81 / B 0.64 / C 0.86 / D 0.69
  - แท่ง B (cross-session) ชมพูเด่น + ป้าย "deployment-realistic"
  - อื่นๆ เทา/ม่วงจาง
HERO (ขวา): "we reach 59% of it" (ม่วง Bold)
CAPTION: "averaging emotions raises it → the limit is measurement noise"
⚠️ ห้ามมีคำ "inflated" หรือเทียบเลขเก่า

──────────────────────────────────────────
## SLIDE 14 — Finding 8: cold-start
──────────────────────────────────────────
LAYOUT: กราฟเส้น + ข้อความ
TITLE (34pt, plum): "Emotion makes personalizing worth it"
CHART: fig6_coldstart — Hybrid(ม่วง)/Direct(เทา)/Population(ชมพูประ)
  ไฮไลต์จุดที่ Hybrid ตัดขึ้นเหนือ population ที่ n=50
CAPTION (18pt): "Direct never beats the crowd. Hybrid does, from 50 ratings."
COLOR: Hybrid ม่วง · population เส้นชมพูประ · Direct เทา

──────────────────────────────────────────
## SLIDE 15 — Finding 9: placebo
──────────────────────────────────────────
LAYOUT: กราฟแท่ง + ข้อความ
TITLE (34pt, plum): "The gain is real, not just a bottleneck"
CHART: fig7_placebo — random/shuffled(เทา ~0) vs PCA vs real(ชมพูเด่น)
HERO: "+0.026 from real emotion" (ชมพู Bold)
CAPTION: "fake emotions add nothing; real emotion content does"

──────────────────────────────────────────
## SLIDE 16 — Summary
──────────────────────────────────────────
LAYOUT: 4 จุด เลขวงกลม + ประโยคปิด
TITLE (34pt, plum): "What we found"
4 จุด (เลขวงกลมชมพู, 22pt):
  1. Interpretable pipeline through emotion
  2. Matches trait methods, no traits
  3. Helps by one factor: emotion accuracy
  4. Realistic ceiling 0.64; emotion makes personalizing worth it
CLOSING (ตัวใหญ่ 26pt, gradient ชมพู→ม่วง):
  "Not a new best score — an explanation of when, why, and how far"

──────────────────────────────────────────
## SLIDE 17 — Future work + Thank you
──────────────────────────────────────────
LAYOUT: กลางหน้า
TITLE ใหญ่ (44pt, plum): "Thank you"
FUTURE WORK (2 จุด, 20pt, เหนือ thank you):
  "Next: bring in traits, and study when emotion helps if predicted perfectly"
  "Next: better per-person emotion prediction (the bottleneck)"
BOTTOM: ชื่อ + อีเมล (ตอน present จริง) + "Questions?" (ชมพู)
DECOR: gradient ชมพู→ม่วง แถบล่าง · จุดชมพูจาง

──────────────────────────────────────────
## Q&A BACKUP (หลัง Thank you — โชว์เฉพาะถ้าถูกถาม)
──────────────────────────────────────────
ทำ 6 สไลด์สำรอง สไตล์เดียวกัน (หัวข้อชมพู):
- QA-A: Decomposition detail (3 predictor + ตาราง perception% + CI ทั้ง 3 นิยาม)
- QA-B: Ceiling detail (ตาราง A/B/C/D + per-user + SROCC + KS test)
- QA-C: Leak-free protocol (ภาพ 10-group, 5-fold, adapt/val/eval)
- QA-D: emo_r partial correlation (ตาราง Pearson/Spearman คุม/ไม่คุม)
- QA-E: Design choices (why linear = Iigaya · why 7 emotions = ตัด like/beautiful)
- QA-F: Related Work (ตาราง 4 งาน: Ryu&Yanaka/Liu&Wagemans/Lan/Iigaya ต่างเรายังไง)

═══════════════════════════════════════════════════════════
สรุปให้ antigravity
═══════════════════════════════════════════════════════════
- 17 สไลด์หลัก + 6 Q&A backup
- โทน: ชมพู #C2185B (เน้น) + ม่วง #7B2C8F (positive) + เทา (neutral) บนพื้นขาว
- ฟอนต์ sans-serif โมเดิร์น (Inter/Poppins)
- 1 สไลด์ 1 ข้อความ · หัวข้อเป็นประโยคสรุป · ตัวเลข hero · white space เยอะ
- recolor กราฟ fig1-7 ให้เข้าธีมชมพู-ม่วง-เทา
- เนี๊ยบ มืออาชีพ ไม่หวานเกิน (ชมพูเป็น accent ไม่ใช่พื้น)
