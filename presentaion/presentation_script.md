# Speaking Script (v4, Pinwa's voice, ~20 min) — Emotion-Mediated PIAA

> โครงและสำนวนตามที่ Pinwa เขียนเอง ย่อให้พอดี ~20 นาที
> เล่าวิธีทดลองสั้นๆ ก่อนผล ทุก finding · {...} = ไม่ต้องพูด · (pause) = หยุด

═══════════════════════════════════════════
OPENING [~2 min]
═══════════════════════════════════════════

## Slide 1 — Title
"Hello everyone, I'm Pinwa. My project is called Emotion-Mediated PIAA.
It is about building an explainable model that predicts a person's preference from
the emotions that person feels toward an image."

## Slide 2 — Agenda / สารบัญ
"Here's the content today.
We will explore the idea, then prove that it works.
Then we find when and why it helps.
Then how far it can go.
And last, we confirm that the gain is real. (pause)
I will explain it one by one."

## Slide 3 — Background (IAA -> PIAA -> problem)
"First, the background.
IAA means predicting how much people like an image. But it usually predicts the
average opinion of most people. Of course, everyone has different taste. So there is
PIAA, which predicts the preference of one specific person. It is used to make
recommendations more personal, and more accurate, for each user. (pause)
But here is the problem. The PIAA models used inside these systems are a black box.
They predict well, but they cannot explain what the prediction is based on.
Some works try to open the box. For example, Ryu and Yanaka extract features to see
where preference is stored inside a vision-language model. But it is still not
defined in a detailed way. (pause)
Our idea is to define preference through feeling. Because an image makes us feel a
certain way, and that is why we like it, this much."

═══════════════════════════════════════════
BLOCK 1 — PIPELINE & DATA [~5 min]
═══════════════════════════════════════════

## Slide 3 — Pipeline
{point at figure}
"This is our pipeline.
We put the image into a vision-language model and get an embedding vector. Then we
pass that vector through a linear ridge model to get seven values. We train this
ridge on emotion data, so it learns to project the embedding onto seven emotions.
(pause)
After that, we train a per-person model: for this specific person, how do their seven
emotions turn into a preference score from zero to seven, again with ridge
regression.
One important detail. The first ridge, image to emotions, is trained on general
users, so it is shared. The second one, emotions to score, is trained per person,
and that is the part we can read and explain."

## Slide 4 — Dataset (XPASS-Vis)
"Our data comes from a dataset called XPASS-Vis, by Hayashi-san.
It has preference and emotion ratings from 129 people, on more than 6,500 images, in
three categories. So it is cross-category. And each person rated many images, which
gives us data that is deep enough to do this work. So it is both deep and
cross-category, which is exactly what we need. (pause)
This dataset was also designed with a test-retest setup, meaning people rated some
of the same images twice. This is very useful, and I will show you later what we use
it for.
And to be safe, we split train, test, and validation so that no image and no person
in the test set ever appears in training. So it is leak-free, no worries there."

## Slide 5 — Setup (metrics, Direct vs Hybrid)
"For metrics, we mainly use CCC and SROCC, which measure how close the predicted
scores are to the real ones. (pause)
And two names to remember. The pipeline I just described, going through emotions, we
call Hybrid. The version that predicts the score without emotions at all, we call
Direct. We keep comparing these two the whole time."

═══════════════════════════════════════════
BLOCK 2 — DOES IT WORK [~5 min]
═══════════════════════════════════════════

## Slide 6 — Transition
"Now we go to part two: showing that our idea actually works."

## Slide 7 — Finding 1: Hybrid > Direct
{point at curve}
"First, we trained both versions and checked how much more Hybrid predicts correctly
compared to Direct, for each person. (pause)
We found that Hybrid raised the score, and it helped on 93 percent of all people.
And the more personal data we have, the more it helps."

## Slide 8 — Finding 3: baseline comparison
{point at chart}
"Next, we compared our pipeline with the baselines from the XPASS-Vis paper, ICI and
MIR. These baselines are also trained with trait data, while we use only emotion. We
also tried changing the vision-language model in our pipeline, from CLIP to the
stronger Qwen models. Here are the results. (pause)
Our model is comparable to the baselines that use traits. And we found that a
stronger backbone is not always necessary, since Qwen2 is close to Qwen3, and
fine-tuning is not necessary either. This actually matches Ryu and Yanaka, who also
report that fine-tuning does not beat a simple linear model. (pause)
And notice this: the stronger the backbone, the smaller the Hybrid gain. This means a
strong model may already store emotional information inside it, so adding emotion
separately helps less."

## Slide 9 — Transition (breather)
"So now we know our idea works, emotion really helps predict preference. (pause)
The next questions are: when does it help? How much can it help? And is it really
because of emotion? Let's go one by one."

═══════════════════════════════════════════
BLOCK 3 — WHEN & WHY [~3 min]
═══════════════════════════════════════════

## Slide 10 — Finding 4: emo_r
{point at figure}
"First question: when does it help?
To find out, for every person we measured how much emotion helped them, and then
checked what it depends on. (pause)
The answer: the more accurately our model predicts a person's emotions, the more it
helps. You can see that in this graph."

## Slide 11 — Finding 2: perception vs weighting
"We then looked deeper. When people give different preference scores, is it because
they feel differently, or because they feel the same but weight each feeling
differently? (pause)
To separate these two, we built three predictors. All of them use the same personal
formula, but we change what emotions go in.
First, P: this person's own real emotions, with their own formula. This is the full
personal model.
Second, S: the average emotions of everyone, but still this person's own formula.
This isolates weighting.
Third, S-global: average emotions with a shared formula. This is no personalization.
(pause)
So the gap from P to S is the feeling part, and the gap from S to S-global is the
weighting part.
Now, the emotions we feed into P can be measured three ways, and this is where the
answer changes. If we take emotions from the same sitting as the score, feeling looks
bigger, but that is unfair, because the same mood affects both. If we take them from
a different sitting, the honest case, weighting looks bigger. And in the fairest case,
where we average, the two are basically equal. (pause)
So the honest answer is: it depends on how we measure, and both feeling and weighting
matter. That is why we report this as a supporting result, with ranges, not as a main
claim."

═══════════════════════════════════════════
BLOCK 4 — HOW FAR [~3 min]
═══════════════════════════════════════════

## Slide 12 — Finding 6: ceiling
{point at figure}
"Next part: how much can emotion help? Where is the ceiling of predicting preference
from emotion? (pause)
Here we use that test-retest setup, where people rated some images twice. We measured
the ceiling three ways.
A, same-session: emotions and score from the same sitting.
B, cross-session: emotions and score from different sittings.
C, averaged: emotions averaged over two sittings. (pause)
Here is the key point. Version A gives 0.81. But that is even higher than how well a
person agrees with their own past rating, which is 0.69. That is impossible for a real
ceiling, because a model cannot be more consistent than the person who made the
labels. So A borrows from the shared mood of a single sitting.
The honest ceiling is B, 0.64, because in real use we collect a person's emotions
once and predict for them later. Our best model reaches about 59 percent of this.
(pause)
And the interesting part is version C, 0.86. If we could measure a person's emotions
stably, without mood noise, the ceiling jumps up. So the emotion-to-score
relationship itself is strong. What limits us is the noise in measuring emotion, not
the idea itself."

## Slide 13 — Finding 8: cold-start
{point at figure}
"Then we checked cold-start: from how many ratings does our model start to be useful?
(pause)
We found that Hybrid helps from about 50 ratings, while Direct never beats simply
using the average. So emotion is what makes personalizing worth it."

═══════════════════════════════════════════
BLOCK 5 — IS THE GAIN REAL [~2 min]
═══════════════════════════════════════════

## Slide 14 — Finding 9: placebo
{point at figure}
"Finally, to be sure the benefit really comes from emotion, and not just from having a
seven-value bottleneck, we replaced the emotions with fake ones. (pause)
The fake versions added almost nothing. This confirms that what really helps is our
emotion bottleneck, the real emotional content."

═══════════════════════════════════════════
CLOSING [~1.5 min]
═══════════════════════════════════════════

## Slide 15 — Summary
"To summarize what we studied.
One, we built an explainable model that predicts preference through emotion.
Two, it is comparable to trait-based baselines, using only emotion.
Three, it helps more when we predict a person's emotions more accurately.
Four, the realistic ceiling is 0.63, and emotion is what makes personalizing
worthwhile."

## Slide 16 — Future work + Thank you
"For future work, we will bring in traits, and study more clearly in which cases
emotion helps if we could predict emotions perfectly. (pause)
Thank you."

═══════════════════════════════════════════
TIMING ~20 min
═══════════════════════════════════════════
Open 2 + B1 5 + B2 5 + B3 3 + B4 3 + B5 2 + Close 1.5 = ~20 min
- ถ้าเกิน: ย่อ slide 11 (decomposition) กับ 8 (baseline detail)
- ถ้าเหลือ: ขยาย ceiling หรือ future work

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
