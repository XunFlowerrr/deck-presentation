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
⚠️ อัปเดตตาม feedback อาจารย์ (สำคัญ)
═══════════════════════════════════════════════════════════
1. Dataset: ขยายให้เห็นหน้าตาข้อมูล (slide 6a/6b) ไม่ใช่แค่จำนวน
2. เล่าเฉพาะ MAIN RESULT ให้จบสวยๆ เน้นคนเข้าใจ ไม่เน้นว่าทำเยอะ
   → พูดแค่ 5 finding หลัก: 1 (helps), 3 (baseline), 4 (when/emo_r),
     6 (ceiling), 8 (cold-start) [+ 9 placebo ถ้าเวลาพอ]
   → ตัดออกจากการพูด: decomposition (2), redundancy (5), hard users (10)
3. เทคนิคเล่าแบบอาจารย์แนะนำ: มีสไลด์ overview บอกว่า "นี่คือทั้งหมดที่ศึกษา
   แต่วันนี้จะเล่าแค่ main results" แล้วค่อยลง → ดูมีเยอะแต่ไม่ยัด
4. เล่าแบบ research question: ตั้งคำถามแล้วไล่ตอบทีละอัน (ทำอยู่แล้ว)

═══════════════════════════════════════════════════════════
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
## SLIDE 3.5 — Why emotion? (motivation, สำคัญ — เชื่อมเรื่อง)
──────────────────────────────────────────
LAYOUT: กลางหน้า เล่าเป็น "ความรู้สึกก่อน แล้วค่อยตัดสิน"
TITLE (34pt, plum): "What makes a person like an image?"
เนื้อหา (แนวคิดง่ายๆ มีภาพประกอบ):
  - ภาพ 1 รูป → ไอคอนหน้าคน "feels calm / warm" → หัวใจ "likes it"
  - flow: [see image] → [feel something] → [like it]
    ไฮไลต์ [feel] สีชมพู (นี่คือ key insight)
CAPTION (20pt, plum): "You feel first, then you judge. So emotion explains taste."
เชิงอรรถเล็ก (เทา): "Prior work opens the black box (e.g. Ryu & Yanaka), but not in a
  human way. We explain through emotion."
COLOR: [feel] ชมพูเด่น · flow ม่วง

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
## SLIDE 5.5 — What the explanation looks like (interpretability example)
──────────────────────────────────────────
LAYOUT: 2 คน เทียบกัน โชว์ formula อารมณ์ (ใช้ fig_interpret.pdf)
TITLE (34pt, plum): "What does emotion explain?"
โชว์ 2 user เทียบ (bar chart แนวนอน):
  - User A: อารมณ์ที่ดัน beauty มากสุด = "Impressed" (แท่งชมพูยาว)
  - User B: อารมณ์ที่ดัน beauty มากสุด = "Nostalgic" + "Amused" (แท่งม่วงยาว)
  - อารมณ์ที่ลด beauty (Sad, Distaste) = แท่งเทาไปทางซ้าย
เล่า: "โมเดลบอกได้เลยว่า user A ชอบเพราะรู้สึกทึ่ง ส่วน user B ชอบเพราะคิดถึงอดีต
  นี่คือสิ่งที่ black box บอกไม่ได้"
CAPTION (16pt): "Because the last step is linear, we read each person's emotion weights"
COLOR: User A ชมพู · User B ม่วง · negative เทา
NOTE: สไลด์นี้สำคัญ ทำให้คนเห็นภาพจริงว่า "อธิบายได้" แปลว่าอะไร
  ใช้ fig_interpret.pdf ที่สร้างให้แล้ว (recolor ได้ถ้าต้องการ)

──────────────────────────────────────────
## SLIDE 6 — Dataset (XPASS-Vis) — ขยายให้เห็นหน้าตาข้อมูล (อาจารย์ขอ)
──────────────────────────────────────────
LAYOUT: 2 สไลด์ย่อย (6a ตัวอย่างข้อมูลจริง · 6b ตัวเลข+protocol)

### SLIDE 6a — หน้าตาข้อมูล (สำคัญ — โชว์ว่า 1 rating มีอะไรบ้าง)
TITLE (34pt, plum): "What one rating looks like"
โชว์ตัวอย่างจริง 1 แถว (mock ให้เหมือนข้อมูลจริง):
  - ซ้าย: ภาพตัวอย่าง 1 รูป (เช่น landscape)
  - ขวา: การ์ดแสดงสิ่งที่ user 1 คนให้กับภาพนี้:
    * Aesthetic score: 6 / 7  (ตัวเลขชมพูใหญ่)
    * 7 emotions (สเกล 1-5) แสดงเป็น bar เล็กๆ:
      Impressed 4 · Nostalgic 5 · Amused 2 · Motivated 4
      Intellectual 3 · [ฯลฯ ให้ครบ 7] — bar สีม่วงไล่ระดับ
  caption: "each person gives a beauty score (1-7) and 7 emotion ratings (1-5) per image"
NOTE: อธิบายว่า emotion มาจาก AESTHEMOS framework (9 มิติ ใช้ 7 core)
COLOR: aesthetic score ชมพู · emotion bars ม่วง

### SLIDE 6b — ขนาด + ความลึก + protocol
TITLE (34pt, plum): "Deep enough per person, and leak-free"
LEFT (ตัวเลข hero ชมพู Bold):
  "129 people" · "6,526 images" · "87,836 ratings" · "3 categories (art/fashion/landscape)"
RIGHT (กล่อง soft pink):
  1. "Each person rated 200+ images → deep enough for a personal formula"
  2. "Test-retest: some images rated twice → used later for the ceiling"
BOTTOM (แถบม่วงจาง): "leak-free: test users & images never seen in training"
COLOR: ตัวเลข hero ชมพู · box soft pink · leak-free ม่วงจาง

──────────────────────────────────────────
## SLIDE 7 — Transition: Part 2
──────────────────────────────────────────
LAYOUT: กลางหน้า minimal (สไลด์พักหายใจ)
TEXT ใหญ่ (40pt, plum): "Part 2 — Does it actually work?"
DECOR: reuse agenda เล็กๆ มุมขวา ไฮไลต์ข้อ 2 ด้วยชมพู
COLOR: พื้นสะอาด · ตัวหนังสือ plum · จุดชมพูเดียว

──────────────────────────────────────────
## SLIDE 7.5 — "What we studied" overview (อาจารย์แนะนำ)
──────────────────────────────────────────
LAYOUT: แผนภาพรวมเบาๆ บอกว่าศึกษาอะไรบ้าง แต่เน้นว่าวันนี้เล่าแค่ main
TITLE (32pt, plum): "We studied many aspects. Today: the main results."
โชว์ list เบาๆ (main = ชมพูเด่น, rest = เทาจาง):
  Main results (today):
    • Does emotion help?  (ชมพู)
    • Comparable to baselines?  (ชมพู)
    • When does it help?  (ชมพู)
    • How far can it go?  (ชมพู)
    • Is the gain real?  (ชมพู)
  Also studied (in the paper / journal):  (เทาจาง เล็ก)
    • perception vs weighting · backbone redundancy · hard users · traits
CAPTION: "I'll focus on the main story, so it stays clear"
COLOR: main ชมพู · rest เทาจาง
NOTE: สไลด์นี้ทำให้ดูงานเยอะแต่ไม่รก + คุมเวลา 15 นาทีได้

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
## SLIDE 12 — Finding 2: perception vs weighting (ทำ 2 สไลด์ย่อย)
──────────────────────────────────────────
### SLIDE 12a — อธิบาย 3 predictor (บล็อก + สี share/personal)
LAYOUT: 3 บล็อกแนวนอน (P / S / S-global) แต่ละบล็อกมี 2 ชั้น
TITLE (32pt, plum): "Where does personal taste come from?"

แต่ละ predictor วาดเป็นบล็อก 2 ชั้นซ้อน (emotions-in ด้านบน + formula ด้านล่าง):
  บล็อก P:
    ชั้นบน "own emotions" — สี PERSONAL (ชมพู #C2185B)
    ชั้นล่าง "own formula" — สี PERSONAL (ชมพู)
    label ใต้บล็อก: "full personal"
  บล็อก S:
    ชั้นบน "average emotions" — สี SHARED (เทา #9E9E9E)
    ชั้นล่าง "own formula" — สี PERSONAL (ชมพู)
    label: "isolates weighting"
  บล็อก S-global:
    ชั้นบน "average emotions" — สี SHARED (เทา)
    ชั้นล่าง "shared formula" — สี SHARED (เทา)
    label: "no personalization"

LEGEND (มุมขวาบน): ชมพู = personal · เทา = shared

ลูกศร + label ระหว่างบล็อก:
  P →(ลูกศร)→ S : label "difference = FEELING (perception)" สีม่วง
  S →(ลูกศร)→ S-global : label "difference = WEIGHTING" สีชมพู

CAPTION ล่าง (16pt): "perception share = (P−S) / (P−S-global)"

### SLIDE 12b — test-retest เลือกอารมณ์เข้า P + ผล
LAYOUT: บนซ้าย diagram test-retest · ขวา/ล่าง ตาราง+ข้อสรุป
TITLE (32pt, plum): "The answer depends on how we measure the emotions"

DIAGRAM (บนซ้าย) — แสดงว่าอารมณ์ที่ใส่ P มาจากไหน:
  กล่อง "Session 1" กับ "Session 2" (คนเรทรูปเดิม 2 รอบ)
  ลูกศร 3 เส้นชี้เข้าบล็อก P:
    - "same-session" : อารมณ์+คะแนน จาก session เดียวกัน (ลูกศรเทา + ป้าย "unfair")
    - "cross-session" : อารมณ์จาก S1, คะแนนจาก S2 (ลูกศรชมพู + ป้าย "honest")
    - "averaged" : เฉลี่ย S1+S2 (ลูกศรม่วง + ป้าย "fairest")
  หมายเหตุบน diagram: "only P changes; S and S-global stay fixed"

ตาราง (ขวา/ล่าง) — perception share:
  | measure | perception (CCC) | winner |
  | same-session | 58% [52,65] | feeling |
  | cross-session | 38% [30,46] | weighting |
  | averaged (fairest) | 55% [48,62] | ≈ 50/50 (tie) |
  แถว averaged ไฮไลต์ soft pink + วงกลม "can't tell → both matter"

CAPTION: "so we report it honestly, as a supporting result with ranges"
สี: feeling ม่วง · weighting ชมพู · averaged row เน้น soft pink
NOTE: พูดคร่าวๆ 12a เน้นภาพบล็อก 12b เน้น diagram test-retest

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
CAPTION (18pt): "Below 50 ratings, personalizing hurts. Direct never beats the crowd; only Hybrid does, from 50 on."
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