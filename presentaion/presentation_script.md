# Speaking Script (v5, Pinwa's voice, ~15 min + 5 min Q&A)

> ใช้ "I" ทั้งหมด (พรีเซนต์ในแลป ไม่เป็นทางการ) · ประโยคพูดเข้าปาก
> ตัดให้พอดี 15 นาที · {...} = ไม่ต้องพูด · (pause) = หยุด

═══════════════════════════════════════════
OPENING [~2 min]
═══════════════════════════════════════════

## Slide 1 — Title
"Hello everyone, I'm Pinwa. My project is called Emotion-Mediated PIAA.
It is about building a model that predicts how much a person likes an image, from the
emotions they feel toward that image. And it can also explain its own prediction."

## Slide 2 — Agenda
"Here is the plan for today.
I'll start with the idea. Then I show it works.
Then I ask when and why it helps.
Then how much accuracy it can reach.
And last, I confirm the gain is real. (pause)
Let's go step by step."

## Slide 3 — Background (IAA -> PIAA -> problem)
"First, some background.
IAA is a model that predicts how much people like an image. But it predicts one score,
the average opinion of most people. (pause)
Of course, everyone has different taste. So there is PIAA, which predicts the
preference of one specific person. This is what makes recommendations feel personal.
But there is a problem. These personal models are a black box. They predict well, but
they cannot tell us what the prediction is based on."

## Slide 4 — Our hypothesis (why emotion)
"So my work studies how to explain a person's beauty rating, through emotion.
My hypothesis is this: people rate beauty through the emotions they feel toward an
image. (pause)
For example, this image makes me feel inspired. This image makes me feel nostalgic,
like remembering old days. And that is why I find it beautiful.
So instead of predicting the score directly, I predict it through these feelings.
That is the core idea of the project."

{ถ้าอาจารย์/คนถามว่ามีงานรองรับไหม ค่อยเสริม: "This is supported by earlier work.
Iigaya and colleagues show human aesthetic preference can be predicted from a
linear combination of features, and Ryu and Yanaka show a vision-language model
already stores preference information inside it."}

═══════════════════════════════════════════
BLOCK 1 — PIPELINE & DATA [~3.5 min]
═══════════════════════════════════════════

## Slide 5 — Pipeline
{point at figure}
"This is my pipeline. It has two steps.
First, I put the image into a vision-language model, and get a vector. Then I pass
that vector through a simple linear model, to get seven emotion values. I train this
part on emotion data, so it learns to turn an image into seven emotions. (pause)
Second, for each person, I learn how their seven emotions turn into a preference
score. Again with a simple linear model.
One important detail. The first step, image to emotions, is shared by everyone. The
second step, emotions to score, is personal, one per person. And that personal step is
the part I can read and explain."

## Slide 6a — Dataset: what the data looks like
"My data is a dataset called XPASS-Vis, by Hayashi-san. Let me show you what one
rating looks like. (pause)
For each image, a person gives a beauty score from 1 to 7. And they also give seven
emotion ratings, from 1 to 5, like impressed, nostalgic, amused, and so on. These
emotions come from a psychology framework called AESTHEMOS.
So every row is: one person, one image, one beauty score, and seven emotion values.
That is exactly what I need, because I want to connect emotions to beauty, per person."

## Slide 6b — Dataset: size and protocol
"In total, it has 129 people, more than 6,500 images, and about 88,000 ratings, in
three categories: art, fashion, and landscape. (pause)
The important thing is that each person rated more than 200 images. That is deep
enough to learn a personal model, which most datasets cannot give us.
It also has that nice feature: people rated some images twice. I use this later for
the ceiling analysis.
And my data split shares no person and no image between train and test. So it is
leak-free."

## Slide 7 — Setup (Direct vs Hybrid)
"Two names to remember.
Hybrid is my pipeline, the one with emotions in the middle.
Direct is the version that predicts the score straight from the image, with no
emotions. (pause)
I keep comparing these two. For scores, I use two standard measures, CCC and SROCC."

═══════════════════════════════════════════
BLOCK 2 — DOES IT WORK [~3 min]
═══════════════════════════════════════════

## Slide 7.5 — What I studied (overview)
"Before the results, one quick note. I studied several aspects of this idea. Today I
will focus on the main results, so the story stays clear: does it help, is it
comparable to baselines, when does it help, how far can it go, and is the gain real.
A few more analyses, like perception versus weighting, are in the paper. (pause)
Let's start."

## Slide 8 — Transition
"So, part two. Does the idea actually work?"

## Slide 9 — Finding 1: Hybrid > Direct
{point at curve}
"First, I compared Hybrid and Direct, on the same people, to see if going through
emotion helps. (pause)
It does. Hybrid scores higher, and it helps 93 percent of the people. And look here:
the more personal data I have, the more emotion helps."

## Slide 10 — Finding 3: baseline comparison
{point at chart}
"Next, I compared my pipeline with the two baselines from the XPASS-Vis paper, ICI
and MIR. These baselines use both emotions and personality traits. I use only
emotions. I also tried stronger vision-language models, from CLIP to Qwen. (pause)
Here is what I found.
I are comparable to the baselines, even though they use traits and I don't.
A stronger backbone is not always needed. Qwen 4B is the same as 8B.
And fine-tuning is not needed either. This matches Ryu and Yanaka, who report the same
thing. (pause)
One more thing. The stronger the backbone, the smaller the emotion gain. So a strong
model probably already stores emotion inside it, and adding emotion again helps less."

## Slide 11 — Transition
"So the idea works, and it is competitive.
Now three questions. When does it help? How much can it help? And is it really because
of emotion?"

═══════════════════════════════════════════
BLOCK 3 — WHEN & WHY [~2.5 min]
═══════════════════════════════════════════

## Slide 12 — Finding 4: emo_r
{point at figure}
"First, when does it help?
For each person, I measured how much emotion helped, and checked what it depends on.
(pause)
The answer is clean: the better I predict a person's emotions, the more emotion helps.
You can see it rising in this graph."

═══════════════════════════════════════════
BLOCK 4 — HOW FAR [~2.5 min]
═══════════════════════════════════════════

## Slide 13 — Finding 6: ceiling
{point at figure}
"Next, how much can emotion help? What is the best score I could reach?
Here I use the twice-rated images. I measured this ceiling three ways: same-session,
cross-session, and averaged. (pause)
Here is the key. A person agrees with their own past rating at 0.69. But same-session
gives 0.81, which is impossible for a real ceiling, because a model can't be more
consistent than the person themselves. So that one is not realistic.
The honest ceiling is cross-session, 0.64, because in real use I measure a person's
emotions once, then predict later. My best model reaches 59 percent of it. (pause)
And the interesting part: if I average emotions to remove noise, the ceiling jumps to
0.86. So the emotion idea itself is strong. What holds us back is noise in measuring
emotion."

## Slide 14 — Finding 8: cold-start
{point at figure}
"Then a practical question. How much personal data do I need before personalizing is
worth it? (pause)
I compared against a simple model that just uses the crowd average, with no personal
data. Below about 50 ratings, personalizing actually hurts. You'd do better with the
crowd.
But the Direct version never really beats the crowd, even at 100 ratings. Only Hybrid
does, from 50 ratings on. So going through emotion is what makes personalizing worth
it at all."

═══════════════════════════════════════════
BLOCK 5 — IS THE GAIN REAL [~1.5 min]
═══════════════════════════════════════════

## Slide 15 — Finding 9: placebo
{point at figure}
"Last check. Maybe the gain is not from emotion. Maybe it's just from adding a small
seven-value layer, any layer. I had to rule that out. (pause)
So I kept everything the same, but replaced the real emotions with fake ones: random
numbers, and shuffled emotions. If the gain came from just having a layer, the fakes
would still work.
But the fakes added almost nothing. Only the real emotions gave the gain. So the
benefit really comes from emotional content, not from the shape of the pipeline."

═══════════════════════════════════════════
CLOSING [~1.5 min]
═══════════════════════════════════════════

## Slide 16 — Summary
"To summarize.
One, I built a model that predicts preference through emotion, and it explains itself.
Two, it matches trait-based baselines, using only emotion.
Three, it helps more when I read a person's emotions better.
Four, the realistic ceiling is 0.64, and emotion is what makes personalizing worth it."

## Slide 17 — Future work + Thank you
"For future work, I want to bring in traits, and study more clearly which cases
emotion helps, if I could predict emotions perfectly. (pause)
Thank you."

═══════════════════════════════════════════
TIMING ~15 min
═══════════════════════════════════════════
Open 2.5 (title/agenda/background/hypothesis)
+ Pipeline & data 3.5 (pipeline/dataset 6a-6b/setup/overview)
+ Does it work 3 (finding 1, 3)
+ When 1.5 (finding 4)
+ How far 2.5 (ceiling, cold-start)
+ Real 1.5 (placebo)
+ Close 1.5 = ~15 min
- decomposition + hard users + redundancy ตัดออกจากการพูด (อยู่ในเปเปอร์/journal)
- ถ้าเกิน: ย่อ placebo (slide 15) + overview (7.5)
- ถ้าเหลือ: ขยาย ceiling หรือ cold-start

═══════════════════════════════════════════
Q&A [5 min] — คำตอบสั้น ซื่อสัตย์
═══════════════════════════════════════════

Q: Perception-vs-weighting ดูไม่นิ่ง ทำไมรายงาน?
A: "Yes, it's unstable, and that's why I report it as a supporting result with ranges,
   not a headline. The instability is the point: it tells us the answer depends on
   measurement noise. I chose to be honest."

Q: มั่นใจได้ไงว่าไม่มี leak?
A: "Users and images are separate across splits, and the shared emotion model only sees
   training images. I also saw a fine-tuned model drop when I removed the leak, while
   frozen models didn't move. That's what I'd expect if the leak was real."

Q: ทำไมใช้ linear? ง่ายไปไหม?
A: "Two reasons. Past work shows human taste is roughly linear in features. And linear
   is what makes the per-person formula readable, which is my whole point. A
   non-linear version didn't do better anyway."

Q: ทำไม dataset เดียว?
A: "It's the only one deep enough per person, with emotion labels for each image. Most
   datasets have no emotion labels. Testing on others is future work, and I say that
   openly."

Q: emotion accuracy แค่ 0.27 ต่ำไปไหม?
A: "It is low, and it's my main bottleneck, which the ceiling measures. But even at
   0.27, I already match trait methods. So improving it is the clearest next step."

Q: ทำไมเลือกอารมณ์ ไม่ใช่อย่างอื่น?
A: "Because emotion is how people naturally experience images. You feel something
   first, then you judge. Emotion is also labeled per person in this dataset, so it
   varies across people, which is what personalization needs."