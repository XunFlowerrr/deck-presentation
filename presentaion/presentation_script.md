# Meeting #5

# Dataset Split

**"validation users" that is disjoint from the test users**

> Hyperparameters (learning rate, number of adaptation steps) are selected on a held-out set of *validation users*, disjoint from the test users, and are then fixed for all test users. No test-user label is used for model or hyperparameter selection.
> 

### Rerun baseline ICI MIR

```python
[Dataset: 129 Total Users]
 ├── Train Users (~97 users)  ──► Used for GIAA backbone training & PIAA pre-training
 ├── Val Users (~6 users)     ──► Used for backbone early-stopping
 └── Test Users (26 users)    ──► for personalization
			#For each of the 26 Test Users, their rated images are partitioned into three subsets:
		 └── Support Set: 100 images → used to fine-tune the user-specific personalization layers
	   └── Validation Set: 20 images → used for early-stopping during personalization
     └── Evaluation Set (Test): 50 images → evaluate the final personalized predictions 
```

### ICI

```
=== art ===
  Folds:           5
  Total users:     129
  Average MAE:     0.156129 (std: 0.040877)
  Average NDCG@10: 0.842575 (std: 0.080186)
  Average SROCC:   0.506027 (std: 0.168395)
  Average CCC:     0.448082 (std: 0.171720)
  
=== fashion ===
  Folds:           5
  Total users:     129
  Average MAE:     0.168905 (std: 0.054658)
  Average NDCG@10: 0.777733 (std: 0.095848)
  Average SROCC:   0.335506 (std: 0.171403)
  Average CCC:     0.258502 (std: 0.142774)

=== scenery ===
  Folds:           5
  Total users:     129
  Average MAE:     0.151752 (std: 0.042787)
  Average NDCG@10: 0.843821 (std: 0.085251)
  Average SROCC:   0.459672 (std: 0.181483)
  Average CCC:     0.399467 (std: 0.166759)
```

#### MIR

```
=== art ===
  Folds:           5
  Total users:     129
  Average MAE:     0.150767 (std: 0.037804)
  Average NDCG@10: 0.845430 (std: 0.078542)
  Average SROCC:   0.507809 (std: 0.164280)
  Average CCC:     0.468443 (std: 0.164444)
  
=== fashion ===
  Folds:           5
  Total users:     129
  Average MAE:     0.164832 (std: 0.050081)
  Average NDCG@10: 0.773070 (std: 0.092729)
  Average SROCC:   0.342771 (std: 0.156908)
  Average CCC:     0.277632 (std: 0.139153)

=== scenery ===
  Folds:           5
  Total users:     129
  Average MAE:     0.150317 (std: 0.041129)
  Average NDCG@10: 0.838266 (std: 0.084168)
  Average SROCC:   0.463786 (std: 0.180553)
  Average CCC:     0.409847 (std: 0.171770)
```

| **Model** | **Split Version** | **Art (SROCC / CCC)** | **Fashion  (SROCC / CCC)** | **Scenery  (SROCC / CCC)** | **Avg SROCC** | **Avg CCC** |
| --- | --- | --- | --- | --- | --- | --- |
| **PIAA-ICI Baseline** | old | 0.540 / 0.490 | 0.370 / 0.315 | 0.500 / 0.463 | 0.470 | 0.423 |
|  | **new (Leak-Free)** | **0.506 / 0.448** | **0.336 / 0.259** | **0.460 / 0.400** | **0.434** | **0.369** |
| **PIAA-MIR Baseline** | old | 0.530 / 0.484 | 0.370 / 0.313 | 0.490 / 0.435 | 0.463 | 0.411 |
|  | **new (Leak-Free)** | **0.508 / 0.468** | **0.343 / 0.278** | **0.464 / 0.410** | **0.438** | **0.385** |
| **Our Proposed (Qwen3 Hybrid)** | **new (Leak-Free)** | **0.448 / 0.454** | **0.292 / 0.288** | **0.401 / 0.398** | **0.380** | **0.380** |

<aside>

Key Findings:

- When switching from new data split, the baseline performances dropped significantly (ICI CCC dropped from 0.409 to 0.369; MIR CCC dropped from 0.411 to 0.385). This confirms that the old-split have information leakage.
- **Comparable Performance**: Our proposed Hybrid model (0.380 CCC) now slightly outperforms the ICI baseline (+0.011) and performs highly comparably to the MIR baseline (-0.005) on the leak-free split.
- our Hybrid model achieves comparable personalization using only interpretable intermediate visual emotions. no trait
</aside>

Downstream Experiment

https://drive.google.com/drive/folders/1TzZacqNlSIZi3uGUv-1k_XE7gyXWaUFr?usp=sharing

parameter ← training

hyperparameter ← validation 

เลือก the learning rate, number of adaptation steps, early stopping จาก dataset ใหม่

---

# เขียนเปเปอร์เสร็จ

> 
> 
> 
> Emotional and Social Signals in Multimedia
> 
> length - 6 page (+2 references + supplementary doc) 
> 

### Abstract

```latex
Personalized image aesthetic assessment (PIAA) predicts how much a specific
person will like an image. Most methods condition a black-box predictor on user
identity or personality traits and output a score directly. We instead route
every prediction through an interpretable emotion layer. We predict the emotions a user feels,
then map them to a personal score with a small per-user linear formula, and we
use this structure to study personalization itself. Under a strict leakage-free protocol on the cross-domain XPASS-Vis
benchmark (129 users, 6{,}526 images, three domains), emotion mediation helps
$92.8\%$ of user--domain cases, and how much it helps is governed by a single
factor: how accurately we predict that user's emotions (a dose-response with no
threshold). Without using any user traits, our method is comparable to strong
trait-based baselines (mean CCC $0.380$ vs.\ ICI $0.369$ and MIR $0.385$ on the
same split). We further show that the benefit shrinks as the visual backbone strengthens.
Moreover, below roughly fifty personal ratings, only emotion-mediated
personalization beats a non-personalized population model. Finally, the oracle
upper bound commonly used in this setting is inflated relative to human
self-agreement, which places the true reachable ceiling near $0.639$. A placebo
control confirms the gain stems from emotional content, not merely from a
low-dimensional bottleneck. Rather than a new state of the art, we contribute an
explanation of when, why, and how far emotion mediation helps.
```

CCS CONCEPTS
KEYWORDS
ACM Reference Format:

### 1. Introduction

**ปูเนื้อหา ความสำคัญ เอาไปใช้**

IAA คือ PIAAคือ ความสำคัญ

**ปัญหา**

ปัญหา PIAA อธิบายไม่ได้ 

**สรุป งานเราแก้**

เราทำPIAA ที่อธิบายได้ อธิบายเกณฑ์การให้คะแนนความสวยของแต่ละคนด้วยอารมณ์ที่คนนั้นรู้สึก เราสร้างไปป์ไลน์ ทายอารมร์ 7 ชนิด จากนั้นlinear model อารมณ์ทั้ง 7 เป็นคะแนนความสวย ด้วยความที่เป็นlinear ทำให้เราได้สูตรความสำคัญของอารมณ์ที่แต่ละบุคคลใช้เป็นเกณฑ์ในการให้คะแนนความสวยมา อธิบายได้

เป็นการศึกษาบน cross-catagory dataset ที่ leak less ข้อมูลผู้ใช้และภาพที่ใช้ทดสอบไม่เคยถูกเห็นในการประเมิน เทรน เลย

ผลของเราได้ว่า

To this end, 

การประเมินความสวยงามของภาพ (IAA) ถามว่าภาพน่ามองแค่ไหน IAA ทั่วไปทำนายคะแนนเดียว ที่เฉลี่ยจากผู้ชมหลายคน แต่รสนิยมความสวยเป็นเรื่องส่วนตัว ภาพเดียวกันอาจทำให้คนหนึ่งประทับใจ แต่อีกคนเบื่อ PIAA ทำนายว่าคนคนหนึ่งจะชอบภาพมากแค่ไหน และเป็นพื้นฐานของระบบแนะนำเฉพาะ บุคคล การจัดการรูปภาพ และการจัดอันดับภาพที่สร้างขึ้น

วิธี PIAA ส่วนใหญ่มองว่า personalization เป็นกล่องดำ โดยปรับโมเดลให้ขึ้นกับตัวระบุผู้ใช้หรือ ลักษณะนิสัย แล้วให้คะแนนตรงๆ โมเดลแบบนี้อาจแม่น แต่ตอบคำถามพื้นฐานไม่ได้ว่า personalization มาจากไหน เมื่อสองคนเห็นต่างกันเรื่องภาพหนึ่ง เป็นเพราะเขารู้สึกต่างกัน หรือเพราะเขาให้น้ำหนัก ความรู้สึกเดียวกันต่างกัน การตอบคำถามนี้ต้องใช้โมเดลที่ขั้นตอนภายในมีความหมายต่อมนุษย์

### 2. Related Work

#### **PIAA**

เทียบกับงานอื่นในฟิลด์ PIAA, Interpretable Aesthetics และโมเดล VLM

- XPASS-Vis
- NIMA ICI MIR

#### Interpretable Aesthetic

- **Liu & Wagemans** From Concepts to Judgments: Interpretable Image Aesthetic Assessment
(liu2026concepts) = concept bottleneck + sparse linear
→ "งานสายทำให้ IAA ตีความได้ผ่านแนวคิดที่มีความหมาย"
    
    **เราต่างยังไง:** เราใช้ปรัชญา bottleneck เหมือนกัน แต่ผ่าน "อารมณ์ของผู้ชม"
    ที่มี label ต่อผู้ใช้ + ต่างกันในแต่ละคน → ใช้เป็นเครื่องมือแยก perception/weighting ได้
    
    [ตรวจ] Liu & Wagemans ใช้ concept subspace + sparse linear — อันนี้ผมอ่านจริงจาก PDF
    ที่คุณเคยแนบ ค่อนข้างมั่นใจ แต่ verify ย้ำอีกรอบว่าเขาไม่ได้ใช้ emotion (ใช้ aesthetic
    concepts ทั่วไป) จะได้ contrast ถูก
    

#### **Emotion Layer**

- Image Aesthetics Assessment Based on Hypernetwork of Emotion Fusion	Guipeng Lan et al	2024	IEEE Transactions on Multimedia			เขาใช้อารมณ์เป็นข้อมูลเสริม (auxiliary) แต่เราวางอารมณ์บนเส้นทางหลัก (mediator)		https://ieeexplore.ieee.org/document/10246410
- AESTHEMOS TIPI big 5 trait
- Aesthetic preference for art can be predicted from a mixture of low- and high-level visual features	Kiyohito Iigaya et al	2021	Nature Human Behaviour			 linear formula Aesthetic	สมองรวมอารมณ์เป็น "ค่าความชอบ" แบบ linear คือสาเหตุที่เราเลือกridgeregression(linear)
- **Iigaya et al. 2023** (iigaya2023neural) = ต่อยอด neuroimaging (เสริม 2021)

#### VLM

- **Ryu & Yanaka** (ryu2026vlm) = ⭐ งานที่ engage โดยตรง (อ่านเต็มแล้ว)
→ "aesthetic อยู่ใน VLM hidden state, linear probe ทำ PIAA ได้ไม่ต้อง fine-tune"
→ เราต่อ: Direct ของเรา = setting นี้, ผลเราสอดคล้อง (redundancy, 4B=8B, comparable)
- **Jiang & Chen 2025** (jiang2025mllm) = MLLM zero-shot aesthetic
→ อ้างผ่านๆ ว่า "งานล่าสุดใช้ MLLM ให้เหตุผลเรื่องความสวย"

### 3. Method

- *Two-stage pipeline* (Stage 1: Perception & Stage 2: Judgment)
- *Direct and Hybrid Pathways* (เปรียบเทียบการต่อสายตรงกับการผ่านอารมณ์)
- *Oracles for decomposition* (ตัวแบบจำลองสมบูรณ์แบบเพื่อทดสอบสมมติฐาน)

### **4. Experiments**

#### *4.1 Dataset* (ข้อมูล XPASS-Vis)

- AESTHEMOS 9 ตัวเราเอาแค่ 7 เพราะ
- *Leakage-free protocol* (ขั้นตอนการแบ่งข้อมูลแบบป้องกันข้อมูลรั่วไหล)
    - test retest
- *Backbones, baselines, metrics* (ตัวแปรเปรียบเทียบและเกณฑ์วัดผล)
    - CLIP
    - Qwen2 3
    - ICI
    - MIR

#### 4.2 Implementation Details

- Metric
    - CCC
    - SCC
    - Wilcoxon rank

#### 4.4 Evaluation on Benchmarks

### **Results**

#### 5.1 Baselines

#### 5.2 ผลลัพธ์สัมพันธ์กับความแม่นยำในการทายอารมณ์ (emo_remo_r)

#### 5.3 Backbones

#### 5.4 The real ceiling

#### 5.5 Cold start

#### 5.6 Placebo control

### 5. Conclusion

สรุป intro method + experiment + analysis 

### Discussion and Limitations

ข้อจำกัด: 

1. ชุดข้อมูลเดียว XPASS-Vis เหมาะเฉพาะตัว (อารมณ์ต่อภาพข้ามโดเมน) แต่ยังไม่ได้ ทดสอบการ generalize 
2. การวิเคราะห์ test-retest ใช้ประมาณ 10% ของคะแนน 
3. เราไม่ได้ fine-tune backbone VLM ใหญ่ ซึ่งเป็นการเลือกขอบเขต ไม่ใช่การอ้างว่ามันไม่ช่วย

### Ethical Considerations

### **Acknowledgments**

### **References**

ในเปเปอร์ ให้ใช้คำสั่ง `\cite{ชื่อคีย์, ชื่อคีย์เปเปอร์2}` 

#### **A. อ้างอิงบทความวารสาร (Journal Article)**

ใช้คีย์เวิร์ด `@article`

```
bibtex

@article{talebi2018nima,
  author   = {Talebi, Hossein and Milanfar, Peyman},   % ชื่อผู้แต่ง ใช้ and คั่นระหว่างคน
  title    = {{NIMA}: Neural Image Assessment},         % ชื่อเปเปอร์ (ใส่ปีกกาครอบ NIMA เพื่อบังคับตัวพิมพ์ใหญ่)
  journal  = {IEEE Transactions on Image Processing},   % ชื่อวารสาร
  volume   = {27},                                      % เล่มที่ (Volume)
  number   = {8},                                       % ฉบับที่ (Issue)
  pages    = {3998--4011},                              % หน้า (ใช้ขีดกลาง 2 ขีด --)
  year     = {2018},                                    % ปีที่พิมพ์
  doi      = {10.1109/TIP.2018.2831899}                 % รหัส DOI
}
```

#### **B. อ้างอิงเอกสารงานประชุมวิชาการ (Conference Proceedings)**

ใช้คีย์เวิร์ด `@inproceedings`

```
bibtex

@inproceedings{jiang2025mllm,
  author    = {Jiang, Ruixiang and Chen, Chang Wen},
  title     = {Multimodal {LLMs} Can Reason About Aesthetics in Zero-Shot},
  booktitle = {ACM Multimedia},                         % ชื่อของงานประชุมวิชาการ
  year      = {2025}
}
```

#### **C. อ้างอิงหนังสือ (Book)**

ใช้คีย์เวิร์ด `@book`

```
bibtex

@book{Kosiur01,
  author    = {David Kosiur},
  title     = {Understanding Policy-Based Networking},
  publisher = {Wiley},
  year      = {2001},
  address   = {New York, NY}                            % เมืองที่จัดพิมพ์
}
```

> 💡 **กฎเหล็กการเขียนผู้แต่ง**: ชื่อผู้เขียนหลายคนต้องคั่นด้วยคำว่า **`and`** เสมอ (ห้ามใช้เครื่องหมายจุลภาค `,` คั่นเด็ดขาด เช่น `Talebi, Hossein and Milanfar, Peyman`)
> 

---

## LaTeX

```latex
## ชื่อเรื่อง
Emotion-Mediated Personalized Image Aesthetic Assessment: When, Why, and How Far It Helps
(การประเมินความสวยงามของภาพเฉพาะบุคคลผ่านตัวกลางอารมณ์: ช่วยเมื่อไหร่ ทำไม และช่วยได้แค่ไหน)

---

## บทคัดย่อ (Abstract)

การประเมินความสวยงามของภาพเฉพาะบุคคล (PIAA) คือการทำนายว่าคนคนหนึ่งจะชอบภาพหนึ่งมากแค่ไหน
วิธีส่วนใหญ่ปรับโมเดลกล่องดำให้ขึ้นกับตัวตนของผู้ใช้หรือลักษณะนิสัย แล้วให้คะแนนออกมาตรงๆ
เราเลือกทางที่ต่างออกไป โดยส่งทุกการทำนายผ่านชั้นอารมณ์ที่ตีความได้ นั่นคือ ทำนายอารมณ์ที่
ผู้ใช้รู้สึกก่อน แล้วแปลงเป็นคะแนนส่วนตัวด้วยสูตรเชิงเส้นเล็กๆ ต่อผู้ใช้หนึ่งคน และเราใช้โครงสร้างนี้
เพื่อศึกษาตัวการ personalization เอง

ภายใต้ระเบียบการทดลองที่ไม่มีการรั่วของข้อมูล บนชุดข้อมูลข้ามโดเมน XPASS-Vis (129 คน,
6,526 ภาพ, สามโดเมน) การผ่านอารมณ์ช่วยได้ใน 92.8% ของกรณีผู้ใช้-โดเมน และปริมาณที่ช่วย
ถูกกำหนดด้วยปัจจัยเดียว คือ ความแม่นในการทายอารมณ์ของผู้ใช้คนนั้น (เป็นความสัมพันธ์แบบยิ่งมาก
ยิ่งช่วย โดยไม่มีจุดตัด) โดยไม่ใช้ลักษณะนิสัยใดๆ วิธีของเราเทียบเท่ากับ baseline ที่ใช้ลักษณะนิสัย
(CCC เฉลี่ย 0.380 เทียบกับ ICI 0.369 และ MIR 0.385 บน split เดียวกัน)

เรายังแสดงว่าประโยชน์จะลดลงเมื่อ backbone แข็งแรงขึ้น นอกจากนี้ ต่ำกว่าประมาณห้าสิบคะแนน
ส่วนตัว มีเพียง personalization ผ่านอารมณ์เท่านั้นที่ชนะโมเดลประชากรที่ไม่ personalize สุดท้าย
เพดานบน (oracle) ที่นิยมใช้ในงานนี้สูงเกินจริงเมื่อเทียบกับความสอดคล้องของมนุษย์กับตัวเอง ซึ่ง
ทำให้เพดานจริงที่แตะได้อยู่ที่ประมาณ 0.639 การทดสอบ placebo ยืนยันว่าประโยชน์มาจากเนื้อหา
อารมณ์ ไม่ใช่แค่จากการมีชั้นบีบอัดมิติต่ำ เราไม่ได้เสนอ state of the art ใหม่ แต่เสนอคำอธิบายว่า
การผ่านอารมณ์ช่วยเมื่อไหร่ ทำไม และช่วยได้แค่ไหน

---

## 1. บทนำ (Introduction)

การประเมินความสวยงามของภาพ (IAA) ถามว่าภาพน่ามองแค่ไหน IAA ทั่วไปทำนายคะแนนเดียว
ที่เฉลี่ยจากผู้ชมหลายคน แต่รสนิยมความสวยเป็นเรื่องส่วนตัว ภาพเดียวกันอาจทำให้คนหนึ่งประทับใจ
แต่อีกคนเบื่อ PIAA ทำนายว่าคนคนหนึ่งจะชอบภาพมากแค่ไหน และเป็นพื้นฐานของระบบแนะนำเฉพาะ
บุคคล การจัดการรูปภาพ และการจัดอันดับภาพที่สร้างขึ้น

วิธี PIAA ส่วนใหญ่มองว่า personalization เป็นกล่องดำ โดยปรับโมเดลให้ขึ้นกับตัวระบุผู้ใช้หรือ
ลักษณะนิสัย แล้วให้คะแนนตรงๆ โมเดลแบบนี้อาจแม่น แต่ตอบคำถามพื้นฐานไม่ได้ว่า personalization
มาจากไหน เมื่อสองคนเห็นต่างกันเรื่องภาพหนึ่ง เป็นเพราะเขารู้สึกต่างกัน หรือเพราะเขาให้น้ำหนัก
ความรู้สึกเดียวกันต่างกัน การตอบคำถามนี้ต้องใช้โมเดลที่ขั้นตอนภายในมีความหมายต่อมนุษย์

เราส่งทุกการทำนายผ่านชั้นอารมณ์ที่ชัดเจน เมื่อให้ภาพและผู้ใช้เป้าหมาย เราทำนายอารมณ์เจ็ดชนิด
ที่ผู้ใช้คนนั้นจะรู้สึกก่อน แล้วแปลงเป็นคะแนนส่วนตัวด้วยสูตรเชิงเส้นต่อผู้ใช้ เราเรียกทางนี้ว่า Hybrid
และเทียบกับทาง Direct ที่ทำนายคะแนนตรงจากลักษณะภาพ เพราะตัวแทนตรงกลางมีความหมายต่อ
มนุษย์และขั้นตอนสุดท้ายเป็นเชิงเส้น เราจึงอ่านได้ว่าอารมณ์ไหนขับเคลื่อนการตัดสินของผู้ใช้ และเรา
แทรกแซงชั้นอารมณ์เพื่อศึกษา personalization ได้

เราประเมินภายใต้ระเบียบการที่ไม่มีการรั่ว โดยผู้ใช้ทดสอบไม่เคยถูกเห็น และภาพที่ใช้ประเมินของเขา
ก็ไม่เคยถูกเห็นโดยส่วนประกอบที่ใช้ร่วมกัน ผลของเรา:
- การผ่านอารมณ์ช่วย 92.8% ของกรณี (Wilcoxon p<0.001) แบบยิ่งมีข้อมูลมากยิ่งช่วย
- ปริมาณที่ช่วยถูกกำหนดด้วยปัจจัยเดียว คือความแม่นการทายอารมณ์ต่อผู้ใช้ โดยไม่มีจุดตัด และ
  ปัจจัยคู่แข่งที่ดูเป็นไปได้กลับเป็นตัวแปรกวน
- โดยไม่ใช้ลักษณะนิสัยใดๆ วิธีนี้เทียบเท่า baseline ที่ใช้ลักษณะนิสัย
- ประโยชน์ลดลงเมื่อ backbone แข็งแรงขึ้น เพราะ backbone แข็งเข้ารหัสอารมณ์ไว้แล้ว
- ต่ำกว่าประมาณ 50 คะแนน โมเดลประชากรชนะ มีเพียง personalization ผ่านอารมณ์ที่ชนะได้
- เพดาน oracle (0.722) สูงกว่าความสอดคล้องของมนุษย์กับตัวเอง (0.693) จึงสูงเกินจริง
  เพดานที่ซื่อสัตย์อยู่ที่ประมาณ 0.639
- placebo แสดงว่าประโยชน์สะท้อนเนื้อหาอารมณ์ ไม่ใช่แค่ชั้นบีบมิติเจ็ด

---

## 2. งานที่เกี่ยวข้อง (Related Work)

**จากความสวยทั่วไปสู่ความสวยเฉพาะบุคคล** ตัวแทนเชิงลึกที่เรียนรู้ได้เข้ามาแทนลักษณะที่ออกแบบ
ด้วยมือใน IAA เช่น NIMA ที่ทำนายการกระจายของคะแนนความเห็นมนุษย์ด้วยโครงข่าย convolution
โมเดลทั่วไปแบบนี้ทำนายคะแนนที่เฉลี่ยจากผู้ให้คะแนน จับรสนิยมส่วนตัวไม่ได้ PIAA ปรับการทำนาย
ให้ขึ้นกับผู้ใช้ ผ่าน embedding ผู้ใช้ การปรับโมเดลทั่วไปด้วยตัวอย่างน้อย หรือข้อมูลเสริมเช่นลักษณะ
นิสัย baseline ของเรา ICI และ MIR อยู่ในกลุ่มที่ใช้ลักษณะนิสัยนี้ เราต่างออกไปสองทาง เรา
personalize บนการตอบสนองทางอารมณ์ของผู้ใช้แทนลักษณะนิสัยคงที่ และเราใช้โครงสร้างโมเดล
เพื่อถามว่า personalization มาจากไหน ไม่ใช่แค่เพื่อเพิ่มความแม่น

**การประเมินความสวยที่ตีความได้** งานสายหนึ่งทำให้ IAA ตีความได้โดยทำนายผ่านแนวคิดที่มี
ความหมายต่อมนุษย์ Liu และ Wagemans เรียนรู้ subspace ของแนวคิดที่แต่ละแกนคือคุณสมบัติ
ความสวยที่มีความหมาย แล้วทำนายคะแนนด้วยโมเดลเชิงเส้นแบบกระจัดกระจาย เราใช้ปรัชญา concept
bottleneck เหมือนกัน แต่ผ่านการตอบสนองทางอารมณ์ของผู้ชม ซึ่งมี label ต่อผู้ใช้และต่างกันใน
คนต่างคนสำหรับภาพเดียวกัน ทำให้ bottleneck ไม่ใช่แค่ตีความได้ แต่ใช้เป็นเครื่องมือได้ โดยการ
แทรกแซงชั้นอารมณ์ เราวัดได้ว่า personalization มาจากการรับรู้เท่าไหร่และจากการประเมินเท่าไหร่

**อารมณ์และเหตุผลของขั้นตัดสินเชิงเส้น** การวางอารมณ์บนเส้นทางเชิงสาเหตุมีที่มาจากหลักฐานว่า
การตัดสินความสวยรวมลักษณะที่ตีความได้แบบเชิงเส้นโดยประมาณ Iigaya และคณะแสดงว่ารสนิยม
ความสวยของมนุษย์ต่องานศิลปะทำนายได้ดีด้วยการรวมลักษณะเชิงเส้น ทั้งภายในคนและข้ามคน และ
ภายหลังเชื่อมโยงการรวมนี้กับกลไกทางประสาทแบบลำดับชั้น การที่การทำนายข้ามคนได้ผลด้วยชุด
ลักษณะร่วมแต่การให้น้ำหนักต่างกันในแต่ละคน เป็นแรงจูงใจโดยตรงของการออกแบบสองขั้นของเรา
เราใช้กรอบอารมณ์ AESTHEMOS เป็นแหล่งของมิติอารมณ์

**ตัวแทนภาษาภาพสำหรับ PIAA** โมเดลภาษาภาพขนาดใหญ่ (VLM) เข้ารหัสข้อมูลความสวยที่อ่าน
ออกได้ด้วย probe ง่ายๆ Ryu และ Yanaka แสดงว่าคุณสมบัติความสวยมีอยู่ใน hidden state ของ
VLM และโมเดลเชิงเส้นบน state เหล่านั้นทำ PIAA ได้โดยไม่ต้อง fine-tune เขายังรายงานว่าวิธีของเขา
เทียบเท่ากับ baseline ที่ใช้ลักษณะนิสัย ไม่ใช่เหนือกว่า และพบว่าโมเดลเล็กในตระกูลเดียวกันสู้โมเดล
ใหญ่ได้ และ LoRA หรือ few-shot ไม่ชนะ linear probe ทาง Direct ของเราตรงกับการตั้งค่า
hidden-state นี้ และผลของเราสอดคล้องกับเขา การผ่านอารมณ์ชัดเจนช่วยน้อยลงเมื่อ backbone
แข็งขึ้น backbone 4B สู้ 8B ได้ และเรายังเทียบเท่า baseline ที่ใช้ลักษณะนิสัยโดยไม่ใช้ลักษณะนิสัย
ในเวลาเดียวกัน มีงานแสดงว่า MLLM ให้เหตุผลเรื่องความสวยได้แบบ zero-shot เราต่างจากงานเหล่านี้
ตรงที่ใช้โมเดลเป็นเครื่องมือแยกส่วน personalization ไม่ใช่แค่เป็นตัวทำนาย

---

## 3. วิธีการ (Method)

**ไปป์ไลน์สองขั้น** สำหรับภาพ x และผู้ใช้เป้าหมาย u เราแยกคะแนนผ่านอารมณ์ ขั้นที่ 1 (การรับรู้)
ฝังภาพด้วย backbone ที่แช่แข็งแล้วทำนายอารมณ์ด้วย ridge regression ที่ fit บนผู้ใช้ทั่วไป (ใช้ร่วม
กันทุกคน) ขั้นที่ 2 (การตัดสิน) เป็น ridge regression ต่อผู้ใช้ ที่ fit บนคะแนนของผู้ใช้เป้าหมาย
เท่านั้น personalization อยู่ในขั้นที่ 2 ซึ่งสัมประสิทธิ์เจ็ดตัวอ่านได้ว่า "ความชอบของคนนี้ขึ้นกับ
อารมณ์แต่ละตัวแค่ไหน" เราใช้อารมณ์หลักเจ็ดตัว โดยตัด "ชอบ" และ "สวย" ออกเพราะใกล้เคียงกับ
เป้าหมายเกินไป

**Direct และ Hybrid** Direct: ภาพ → ridge ต่อผู้ใช้ → คะแนน Hybrid: ภาพ → อารมณ์ → ridge
ต่อผู้ใช้ → คะแนน ผลต่างของทั้งสองแยกคุณค่าของการผ่านอารมณ์ออกมา สำหรับลักษณะ backbone
มิติสูง เราทำ standardize ต่อ feature แทนการ normalize แบบ L2 เพราะ L2 ทำให้ CCC ตกบน
ลักษณะมิติสูง

**Oracle สำหรับ decomposition** เพื่อตรวจต้นตอของ personalization เรานิยามตัวทำนายที่แทน
ส่วนที่เรียนรู้ด้วยค่าจริง: personal-emotion oracle ป้อนอารมณ์จริงของผู้ใช้เข้าขั้นที่ 2 (เพดานบน
ของไปป์ไลน์) shared-emotion oracle ป้อนอารมณ์เฉลี่ยประชากรพร้อมน้ำหนักต่อผู้ใช้ ("ทุกคนรู้สึก
เหมือนกัน ต่างแค่การให้น้ำหนัก") และตัวทำนาย global ใช้อารมณ์ประชากรและสูตรร่วม (พื้นที่ไม่
personalize)

---

## 4. การตั้งค่าการทดลอง (Experimental Setup)

**ชุดข้อมูล** XPASS-Vis: 129 คน, 6,526 ภาพ สามโดเมน (art, fashion, landscape), 87,836
คะแนน แต่ละคู่มีคะแนนความสวยสเกล 7 ระดับ และคะแนนอารมณ์ AESTHEMOS เก้าตัวสเกล 5 ระดับ
เราใช้เจ็ดมิติหลัก การออกแบบ test-retest ให้คะแนนบางคู่สองครั้ง เราเฉลี่ยตัวซ้ำ และใช้แยกต่างหาก
สำหรับเพดาน noise

**ระเบียบการที่ไม่มีการรั่ว** โครงสร้างสิบกลุ่มของชุดข้อมูลทำให้ผู้ใช้และภาพไม่ซ้ำข้ามกลุ่ม เราแบ่ง
ห้า fold (2 ทดสอบ, 1 validation, 7 train ทุกกลุ่มเป็น test หนึ่งครั้ง) วิธีนี้ตัดการรั่วสามทาง: (1)
hyperparameter ทุกตัวเลือกบนผู้ใช้ validation แล้วตรึงไว้ (2) โมเดลขั้นที่ 1 ที่ใช้ร่วม fit บนภาพ
กลุ่ม train เท่านั้น (ยืนยันว่าไม่ทับ test) (3) ผู้ใช้ทดสอบไม่เคยถูกเห็นและประเมินบนภาพที่ไม่เคยเห็น
ต่อผู้ใช้ทดสอบ เรากันภาพประเมิน 50 ภาพ และ fit ขั้นที่ 2 บน k ตัวแรก (k ∈ {10,25,50,100})
ของภาพที่เหลือ (เรียกว่า support size)

**Backbone, baseline, เมตริก** backbone แช่แข็งที่แข็งขึ้นเรื่อยๆ: CLIP, ตัวเข้ารหัสภาพ Qwen2-VL,
และ hidden state ของ Qwen3-VL ที่ 4B และ 8B baseline ICI และ MIR เป็นโมเดลเฉพาะบุคคลที่ใช้
ลักษณะนิสัยของชุดข้อมูล reproduce บนระเบียบการเดียวกับเรา เมตริกหลักคือ CCC เรายังรายงาน
SROCC เรานิยาม emo_r เป็นความแม่นขั้นที่ 1 ต่อผู้ใช้ คือค่าเฉลี่ย Pearson ระหว่างอารมณ์ที่ทาย
กับอารมณ์จริง (ค่าเฉลี่ยชุดข้อมูล 0.27)

---

## 5. ผลการทดลอง (Results)

### 5.1 การผ่านอารมณ์ช่วย และเทียบเท่า baseline ที่ใช้ลักษณะนิสัย
ที่ support 100 การผ่านอารมณ์เพิ่ม CCC จาก 0.293 (Direct) เป็น 0.359 (Hybrid) คือ +0.066
backbone ดีที่สุดของเราถึง 0.380 ที่สำคัญ โดยไม่ใช้ลักษณะนิสัยใดๆ ค่านี้เทียบเท่า baseline บน
split เดียวกัน (ICI 0.369, MIR 0.385) เราอยู่ระหว่างสองตัว การทดสอบ Wilcoxon มีนัยสำคัญทุก
support size ทั้ง median gain และสัดส่วนคนที่ถูกช่วยโตขึ้นตามข้อมูลส่วนตัว

### 5.2 อารมณ์ช่วยเมื่อไหร่
ต่อ (ผู้ใช้, โดเมน) ที่ support 100 เรานิยาม Δ = CCC Hybrid ลบ Direct (n=387) Δ เป็นบวก
92.8% และสัมพันธ์กับ emo_r (Spearman +0.273) แบ่ง 4 กลุ่มตาม emo_r gain เฉลี่ยเพิ่มจาก
+0.041 เป็น +0.078 คำอธิบายคู่แข่ง (baseline แข็งให้ที่ว่าง) เป็นตัวแปรกวน เมื่อคุม emo_r ผลของ
Direct หายไป แต่ emo_r ยังอยู่เมื่อคุม Direct ความสัมพันธ์เป็นแบบยิ่งมากยิ่งช่วย ไม่ใช่จุดตัด

### 5.3 ความซ้ำซ้อนข้าม backbone
gain ลดลงเรื่อยๆ เมื่อ backbone แข็งขึ้น เพราะ gain นิยามจาก Direct เราเลี่ยงสหสัมพันธ์ที่วนซ้ำ
โดยถดถอย Hybrid บน Direct แทน slope เท่ากับ 0.36 น้อยกว่า 1 อย่างมีนัยสำคัญ (p=0.009)
Hybrid จึงอิ่มตัวใกล้ 0.38 ขณะที่ Direct มีช่วงกว้างกว่าสองเท่า backbone แข็งเข้ารหัสอารมณ์ไว้แล้ว
Qwen3-VL 4B เท่ากับ 8B (0.380) ขนาดจึงไม่ใช่ตัวกำหนด

### 5.4 เพดานที่แท้จริง
งานก่อนหน้าถือว่า personal-emotion oracle เป็นเพดานบน เราแสดงว่ามันมองโลกในแง่ดีเกินไป จาก
คู่ test-retest 4,509 คู่ ความสอดคล้องของมนุษย์กับตัวเองคือ CCC 0.693 oracle แบบ same-session
ถึง 0.813 แต่ oracle แบบ cross-session (อารมณ์จาก session หนึ่ง คะแนนจากอีก session ตรงกับ
การใช้จริงที่เก็บโปรไฟล์ครั้งเดียว) ถึงแค่ 0.639 เพราะค่า same-session สูงกว่าความสอดคล้องมนุษย์
ด้วยซ้ำ มันจึงเฟ้อจากสภาวะชั่วขณะที่แชร์กัน เพดานที่ซื่อสัตย์คือ 0.639 โมเดลดีที่สุดของเราอยู่ที่
ประมาณ 59% ของเพดานนั้น การเฉลี่ยอารมณ์ซ้ำดันเพดานขึ้นเป็น 0.858 แสดงว่าตัวจำกัดคือ noise
การวัด ไม่ใช่ความสัมพันธ์อารมณ์กับคะแนน

### 5.5 Cold start: อารมณ์ทำให้ personalization คุ้ม
โมเดลประชากร (ไม่ใช้คะแนนส่วนตัว) ได้ CCC 0.283 ต่ำกว่าประมาณ 50 คะแนน ทั้งสองทางแพ้มัน
personalization อาจทำให้แย่ลงเมื่อข้อมูลน้อย เหนือกว่านั้น Hybrid ชนะ แต่ Direct ไม่เคยชนะ
โมเดลประชากรอย่างมีนัยสำคัญ แม้ที่ 100 คะแนน (p=0.29) การผ่านอารมณ์คือสิ่งที่ทำให้
personalization คุ้มที่งบคะแนนจริง ซึ่งเป็นข้อโต้แย้งเชิงปฏิบัติที่แข็งที่สุดของเรา

### 5.6 การควบคุม placebo: gain มาจากเนื้อหาอารมณ์
gain มาจากอารมณ์ หรือแค่จากการใส่ชั้นบีบมิติเจ็ด เราแทนชั้นอารมณ์ด้วย placebo ที่มีความจุเท่ากัน
ตัวกลางสุ่มและสลับเพิ่มแทบไม่มีอะไร ตัดข้อโต้แย้งเรื่องสิ่งประดิษฐ์เชิงโครงสร้าง ตัวกลาง PCA-7 ได้คืน
+0.040 ส่วนเนื้อหาอารมณ์เฉพาะให้ +0.026 ที่เหลือเกินความจุที่เท่ากัน เราจึงระบุว่า +0.026 จาก
+0.066 ทั้งหมดมาจากเนื้อหาอารมณ์โดยเฉพาะ

### 5.7 ผู้ใช้ที่ยาก
ตามการวิเคราะห์ผู้ใช้ที่ต่างจากประชากร เราแบ่งผู้ใช้ตามความสอดคล้องกับคะแนนประชากร อารมณ์
ช่วยผู้ใช้ที่ต่างที่สุดน้อยที่สุด (+0.041 เทียบ +0.081) นี่ไม่ใช่ข้อขัดแย้ง เพราะความสอดคล้องกับ
emo_r สัมพันธ์กันสูง (+0.531) ผู้ใช้ที่ต่างจึงเป็นผู้ใช้ที่ทายอารมณ์ยากด้วย รูปแบบนี้ตอกย้ำกลไก
เดียวในหัวข้อ 5.2 ไม่ใช่ขัดแย้ง

### 5.8 Decomposition: การรับรู้เทียบการให้น้ำหนัก (การวิเคราะห์สนับสนุน)
สุดท้ายเราถามว่า personalization มาจากการรับรู้อารมณ์ต่างกัน หรือการให้น้ำหนักต่างกัน คำตอบขึ้น
กับวิธีวัด oracle มาก เราจึงรายงานเป็นการวิเคราะห์สนับสนุน กับ oracle แบบ same-session การรับรู้
เด่น (58.0%, CI [51.6,64.5]) กับ oracle แบบ cross-session การให้น้ำหนักเด่นแทน (การรับรู้
37.9%, [30.4,45.9]) สุดท้าย กับ oracle แบบเฉลี่ยลด noise ซึ่งแฟร์สุดเพราะลด noise ทั้งสองฝั่ง
เท่ากัน การแบ่งแยกไม่ออกจากครึ่งต่อครึ่งทางสถิติ (การรับรู้ 54.8%, [48.3,61.6] ช่วงคร่อม 50%)
ข้อสรุปเสถียรทั้ง CCC และ SROCC เราจึงรายงานว่าทั้งสองส่วนมีนัยสำคัญ และการแยกถูกจำกัดด้วย
การวัด

### 5.9 สิ่งที่ไม่ช่วยเพิ่มความแม่น
โดยย่อ (รายละเอียดในภาคผนวก): ลักษณะนิสัยไม่มีสัญญาณข้ามผู้ใช้ที่ใช้ได้ในสี่ความพยายามอิสระ
การ ensemble backbone ไม่ชนะตัวเดียวที่ดีที่สุด และ head แบบไม่เชิงเส้นไม่ชนะ ridge ความแม่น
ถูกจำกัดด้วยการทายอารมณ์ขั้นที่ 1

---

## 6. อภิปรายและข้อจำกัด (Discussion and Limitations)

ผลของเราสอดคล้องกัน: personalization ส่วนใหญ่เกี่ยวกับการตอบสนองทางอารมณ์ ประโยชน์ของ
การผ่านอารมณ์ขึ้นกับว่าทายการตอบสนองนั้นดีแค่ไหน และคอขวดคือขั้นที่ 1 ไม่ใช่ head หรือข้อมูล
เสริม การพัฒนาตัวทายอารมณ์เฉพาะบุคคลจึงเป็นทางหลักของความก้าวหน้า และการวิเคราะห์เพดาน
บอกปริมาณที่เหลือให้พัฒนา ผลความซ้ำซ้อนเสริมว่า เมื่อ backbone แข็งขึ้น การผ่านอารมณ์ซื้อ
ความแม่นได้น้อยลง แม้ยังคงความตีความได้

ข้อจำกัด: (1) ชุดข้อมูลเดียว XPASS-Vis เหมาะเฉพาะตัว (อารมณ์ต่อภาพข้ามโดเมน) แต่ยังไม่ได้
ทดสอบการ generalize (2) การวิเคราะห์ test-retest ใช้ประมาณ 10% ของคะแนน (3) เราไม่ได้
fine-tune backbone VLM ใหญ่ ซึ่งเป็นการเลือกขอบเขต ไม่ใช่การอ้างว่ามันไม่ช่วย

---

## 7. บทสรุป (Conclusion)

เราเสนอวิธี PIAA ที่ผ่านอารมณ์และตีความได้ และใช้มันอธิบาย personalization: การผ่านอารมณ์ช่วย
ผู้ใช้ส่วนใหญ่ ถูกกำหนดด้วยความแม่นการทายอารมณ์ เทียบเท่า baseline ที่ใช้ลักษณะนิสัยโดยไม่ใช้
ลักษณะนิสัย ทำให้ personalization คุ้มที่งบคะแนนเล็ก กลายเป็นซ้ำซ้อนเมื่อ backbone แข็งขึ้น และ
ทำงานภายใต้เพดานที่ต่ำกว่าที่เคยคิด งานอนาคตมุ่งไปที่ตัวทายอารมณ์เฉพาะบุคคลขั้นที่ 1 และการ
โอนไปยังชุดข้อมูลที่มีระบบอารมณ์ต่างออกไป
```

---

# Script

Hello everyone, I'm Pinwa. My project is called Emotion-Mediated PIAA.
It is about building an explainable model that predict how much a specific person like an image from the emotions that person feels toward an image. 

---

Here's the content today, I'll start with the idea. Then I show how it works. Find when and why this model help. 
How much accuracy the model can reach, 
and last, prove that the gain is real. 

I will explain it one by one

---

First, some background. IAA is a model that predicts how much people like an image. But it usually predicts the average opinion of most people. 

While everyone has different taste. So there is PIAA, which predicts the preference of one specific person. 
It is used to make recommendations more personal and more accurate for each user.

But here is the problem. The PIAA models used inside these systems are a black box.
They predict well, but they cannot explain what the prediction is based on.

---

Some works try to open the box. For example, Ryu and Yanaka extract features to see where preference is stored inside a vision-language model. But it is still not defined in a detailed way.

---

Our idea is to define preference through feeling. Because an image makes you feel a certain way, and that is why you like it, this much

---

{point at figure}
This is our pipeline.
We put the image into a vision-language model and get an embedding vector. 

Then we pass that vector through a linear ridge model to get seven values. 
We train this ridge on emotion data, so it learns to project the embedding onto seven emotions.

After that, we train a per-person model: for this specific person, how do their seven emotions turn into a preference score from zero to seven, again with ridge regression.

One important detail. The first ridge, image to emotions, is trained on general users, so it is shared. The second one, emotions to score, is trained per person, and that is the part we can read and explain.

---

Our data comes from a dataset called XPASS-Vis, by Hayashi-san.
It has preference and emotion ratings from 129 people, on more than 6,500 images, across three categories. 

And each person rated more than 200 images, which is deep enough to do this work.

This dataset was also designed with a test-retest setup, where people rated some of the same images twice. This is very useful, and I will show you later what we use it for.

And to be safe, our data-split shared no image and no person across train and test set. So it is leak-free.

---

For metrics, we mainly use CCC and SCC, which measure how close the predicted scores are to the real ones.

I keep comparing two model.

- Hybrid, our pipeline that have emotions in the middle step.
- and Direct, model that predicts the beauty score directly without emotions.

---

#### Slide 6 — Transition

Now I go to part two, showing that our idea actually works.

---

#### Slide 7 — Finding 1: Hybrid > Direct

{point at curve}
First, I trained both versions and checked how much more Hybrid predicts correctly compared to Direct, for each person. 

I found that Hybrid raised the score, and it helped on 93 percent of all people.
the more personal data we have, the more it helps.

---

#### Slide 8 — Finding 3: baseline comparison

{point at chart}
Next, we compared our pipeline with the baselines from the XPASS-Vis paper, ICI and MIR. These baselines are trained with both emotions and trait data, while our pipeline use only emotion. 

I also tried changing the vision-language model in our pipeline, from CLIP to the stronger Qwen models. 

Here are the results.

- Our model is comparable to the baselines that use traits.
- And we found that a stronger backbone is not always necessary, since Qwen3-4B is the same as Qwen3-8B,
- and fine-tuning is not necessary either. This actually matches Ryu and Yanaka, who also report that fine-tuning does not beat a simple linear model. (pause)
- One thing to be notice is that the stronger the backbone, the smaller the Hybrid gain.
    
    This means a strong model may already store emotional information inside it, so adding emotion bottleneck helps less.
    

---

#### Slide 9 — Transition

So now we know our idea works, emotion really helps predict preference.

The next questions are: when does it help? How much can it help? And is it really because of emotion?

---

#### Slide 10 — Finding 4: emo_r

{point at figure}
First question: when does it help?

To find out this, for every person, I measured how much emotion helped them, and then checked what it depends on. (pause)

And the answer is that, the more accurately model predicts emotions, the more it helps. 

as we can see that in this graph.

---

#### Slide 11 — Finding 2: perception vs weighting

next, asking a deeper question. When people give different preference scores, is it because 
they feel differently, or because they feel the same but weight each feeling differently?

To separate these two, I built three predictors. All of them use the same personal formula, but I change what emotions go in.

- First, P: I feed a person real emotions, with their own formula.
- Second, S: feed an average emotions of everyone, but still use their own formula.
This isolates weighting.
- Third, S-global: this feed average emotions with a shared formula.

So the gap from P to S is the feeling part, and the gap from S to S-global is the weighting part.

Now, the emotions we feed into P can be measured three ways, and this is where the answer changes. as the dataset has test-retest setting

- If we take emotions from the same sitting as the score, feeling looks bigger, but that is unfair, because the same mood affects both.
- If we take them from a different sitting, which is the honest case, weighting looks bigger.
- And if we average, the two are basically equal.

So the honest answer is: it depends on how we measure, both feeling and weighting matter. 

---

#### Slide 12 — Finding 6: ceiling

{point at figure}
Next part: how much can emotion help? 
I find the upper-bound accuracy that the model can predict.
Here I use that test-retest setup, where people rated some images twice. 
I measured the ceiling three ways.

- A, same-session
- B, cross-session
- C, averaged

Here is the key point. 

a person agrees with their own past rating only  0.69. 

But Version A gives 0.81 which is impossible for a real ceiling, because a model cannot be more consistent than the person who made the labels.

While ceiling B is 0.64, Which is the honest one, because in real use we collect a person's emotions once and predict for them later. 
Our best model reaches about 59 percent of this.

And the interesting part is version C, 0.86. If we could measure a person's emotions stably, without mood noise, the ceiling jumps up.

So the emotion-to-score relationship itself is strong. What limits us is the noise in measuring emotion.

---

#### Slide 13 — Finding 8: cold-start

{point at figure}
Then we checked cold-start: from how many ratings does our model start to be useful?

We found that Hybrid helps from about 50 ratings, while Direct never beats the average. So emotion is what makes personalizing worth it."

---

#### Slide 14 — Finding 9: placebo

{point at figure}
Finally, to be sure the benefit really comes from emotion, and not just from having a seven-value bottleneck, I replaced the emotions with fake ones. 
The fake versions added almost nothing. This confirms that what really helps is our emotion bottleneck, the real emotional content."

---

#### Slide 15 — Summary

To summarize what I studied.

1.  we built an explinable model that predicts preference through emotion.
2. it is comparable to trait-based baselines, using only emotion.
3. it helps more when we predict a person's emotions more accurately.
4. the realistic ceiling is 0.63, and emotion is what makes personalizing worthwhile.

---

#### Slide 16 — Future work + Thank you

For future work, I will bring in traits, and study more clearly in which cases emotion helps if we could predict emotions perfectly. 

Thank you.

---

═══════════════════════════════════════════
Q&A — คำตอบสั้น ซื่อสัตย์ (เผื่อถูกถาม)
═══════════════════════════════════════════

Q: Perception-vs-weighting ดูไม่นิ่ง ทำไมรายงาน?
A: "Yes, it is unstable, and that is why we report it as a supporting result with
ranges, not a main claim. The instability itself is the finding: the answer
depends on measurement noise. We chose to be honest."

Q: มั่นใจได้ไงว่าไม่มี leak?
A: "Users and images are separate across splits, and the shared emotion model only
sees training images. We also saw a fine-tuned model drop when we removed the
leak, while frozen models did not move."

Q: ทำไมใช้ linear?
A: "Earlier work shows human aesthetic judgment is roughly linear in features, and
linear is what makes the per-person formula readable. A non-linear head did not do
better."

Q: ทำไม dataset เดียว?
A: "It is the only one deep enough per person, with emotion labels per image. Most
datasets have no emotion labels. Other datasets are future work."

Q: emotion accuracy แค่ 0.27 ต่ำไปไหม?
A: "It is low, and it is our main bottleneck, which the ceiling measures. But even at
0.27 we already match trait methods, so improving it is the clearest next step."
