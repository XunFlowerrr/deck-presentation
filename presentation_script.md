# Speaking Script — Emotion-Mediated PIAA (30 min)

> English, plain and easy to say out loud. Read naturally, do not rush.
> [timing] shown per block. Pauses marked with (pause).
> Words in {curly} are stage directions, not spoken.

═══════════════════════════════════════════════════════
BLOCK 0 — OPENING  [~3 min]
═══════════════════════════════════════════════════════

## Slide 1 — Title
"Hello everyone. My name is Pinwa. Today I want to talk about how we can predict,
and more importantly \emph{explain}, why a specific person finds an image
beautiful. Our title is Emotion-Mediated Personalized Image Aesthetic Assessment.
(pause) The short version is this: instead of guessing a person's taste directly,
we guess it through the emotions they feel."

## Slide 2 — Agenda
"Here is how I will tell the story. First, the problem and our main idea. Second,
does it actually work, and how does it compare to existing methods. Third, when and
why does it help. Fourth, how far can it go. And fifth, is the improvement real, or
just a trick. I will take you through these one at a time, so it is easy to follow."

═══════════════════════════════════════════════════════
BLOCK 1 — PROBLEM & IDEA  [~7 min]
═══════════════════════════════════════════════════════

## Slide 3 — IAA / PIAA
"Let us start from the basics. Image aesthetic assessment asks a simple question:
how beautiful is this image? Normally we get one score, averaged over many people.
But taste is personal. The same photo can make one person happy and bore another
person completely. (pause) So personalized image aesthetic assessment, or PIAA,
asks a better question: how much will \emph{this specific person} like the image?
This matters for real products, like photo recommendation, album curation, and
ranking images that AI systems generate."

## Slide 4 — The problem
"Now here is the problem. Most personalized methods work like a black box. You give
the model a user id, or some personality traits, and it outputs a score. It can be
accurate, but it cannot tell you \emph{why}. When two people disagree about an
image, is it because they \emph{feel} different emotions, or because they feel the
same emotions but \emph{care} about them differently? A black box cannot answer
this. We wanted a model that can."

## Slide 5 — Our idea
"So here is our idea. Instead of predicting the beauty score directly from the
image, we predict it through emotion. First we predict the seven emotions the
person would feel. Then a simple linear model turns those seven emotions into a
beauty score. (pause) Because that last step is linear, we get, for every person, a
small formula that says how much they rely on each emotion. That formula is the
explanation. And it lets us ask our main research question: does personal taste
come from feeling differently, or from weighting emotions differently?"

## Slide 6 — Pipeline
{point at figure}
"This is the pipeline. We compare two versions. The Direct pathway, on top, goes
straight from the image to the score. The Hybrid pathway, on the bottom, goes
through the seven emotions first. Notice two things. The emotion step is
\emph{shared} across everyone, because how an image makes people feel is fairly
general. But the final formula is \emph{personal}, one per user, and it is the part
we can read and interpret. The difference between Direct and Hybrid tells us
exactly what going through emotion buys us."

═══════════════════════════════════════════════════════
BLOCK 2 — DOES IT WORK + BASELINE  [~6 min]
═══════════════════════════════════════════════════════

## Slide 7 — Dataset & protocol
"We study this on a dataset called XPASS-Vis: 129 people, about 6500 images, three
categories, art, fashion, and landscape. (pause) Why this dataset? Because it is the
only one deep enough per person. Each person rated many images, enough for us to fit
a personal formula that actually means something. Most other datasets are too thin
per person. (pause) One more important point: we use a strict protocol with no data
leakage. The test users, and the images we test them on, were never seen during
training. So the numbers are honest."

## Slide 8 — Finding 1: emotion helps
{point at dose-response figure}
"So, does going through emotion help? Yes. With a basic backbone, the score goes
from 0.293 to 0.359. It helps in almost 93 percent of cases. And look at this curve:
the more personal data we have for a user, the more emotion helps. It is a steady,
consistent effect, not a lucky one."

## Slide 9 — Comparable to baselines
{point at table}
"Now, how do we compare to existing methods? The two baselines, ICI and MIR, use
personality traits. They score 0.369 and 0.385. We score 0.380, right between them.
(pause) Here is the key point. We match these trait-based methods \emph{without
using any traits at all}, and our model is interpretable while theirs are not. We
are not claiming a new best score. We are claiming something more useful: comparable
accuracy, no traits, and a model you can actually explain. One more small thing: a
4-billion model ties an 8-billion model, so bigger is not needed here."

## Slide 10 — Transition
"So we know it works, and it is competitive. But that raises three natural
questions. When does it help? How far can it go? And is the gain real? Let us take
them in turn."

═══════════════════════════════════════════════════════
BLOCK 3 — WHEN & WHY  [~5 min]
═══════════════════════════════════════════════════════

## Slide 11 — Finding 4: emo_r
{point at mechanism figure}
"First, when does emotion help? We found a single, clean answer: it depends on how
accurately we can predict that person's emotions. We call this emotion accuracy. The
better we read a person's emotions, the more the emotion pathway helps. You can see
it here, going up steadily across four groups. (pause) We also checked a competing
explanation, that people with a weak direct model just have more room to improve.
But when we controlled for emotion accuracy, that explanation disappeared. So there
is really just one mechanism: read the person's emotions well, and emotion helps."

## Slide 12 — Finding 2: perception vs weighting
"Remember our research question, feeling differently versus weighting differently?
We tried to measure this. The honest answer is that it depends on how carefully we
measure a person's emotions. In the fairest setup, the two are roughly equal. (pause)
So rather than claim a headline number, we report this carefully, with confidence
ranges, and say both parts matter. I think reporting this honestly is more valuable
than forcing a clean story."

## Slide 13 — Finding 5: redundancy
{point at saturation figure, keep brief}
"Quick one. As the image model gets stronger, emotion helps less and less. Why?
Because a strong image model already stores emotional information inside it. So
explicit emotion matters most when the backbone is weak. The takeaway: emotion and a
strong backbone are partly doing the same job."

═══════════════════════════════════════════════════════
BLOCK 4 — HOW FAR  [~4 min]
═══════════════════════════════════════════════════════

## Slide 14 — Finding 6: ceiling
{point at ceiling figure}
"How far can this go? To answer that, we measured the ceiling, the best score any
model could reach. We measured it several ways, and we report the one that matches
real use: you collect a person's emotions once, and predict for them later. That
ceiling is 0.639. Our best model reaches about 59 percent of it. (pause) And here is
something hopeful: if we could measure a person's emotions more than once and average
them, the ceiling jumps much higher. So the thing holding us back is noise in
measuring emotion, not the idea itself."

## Slide 15 — Finding 8: cold-start
{point at cold-start figure}
"Now a very practical question: how much personal data do you need before
personalizing is even worth it? We compared against a population model that uses no
personal data at all. (pause) Below about 50 ratings, personalizing actually hurts,
you would be better off with the population model. But here is the important part.
The Direct pathway never clearly beats the population model, even with 100 ratings.
The Hybrid pathway does, from 50 ratings on. So going through emotion is what makes
personalization worth doing in the first place. This is our strongest practical
result."

═══════════════════════════════════════════════════════
BLOCK 5 — IS THE GAIN REAL  [~3 min]
═══════════════════════════════════════════════════════

## Slide 16 — Finding 9: placebo
{point at placebo figure}
"One more worry. Maybe the gain does not come from emotion at all. Maybe it comes
just from adding a small layer in the middle. So we tested that. We replaced the
seven emotions with fake versions: random numbers, and shuffled emotions. (pause)
Those added almost nothing. So it is not just about having a layer. When we put the
real emotions back, we get the gain. The part that comes specifically from emotional
content is a clear, measurable piece. The improvement is real."

## Slide 17 — Finding 10: hard users
{keep brief}
"Last finding, quickly. What about people whose taste is very different from the
crowd? Emotion helps them the least, which sounds bad. But it turns out those people
are also the hardest to predict emotions for. So it is the same single mechanism
again, not a contradiction."

═══════════════════════════════════════════════════════
CLOSING  [~2 min]
═══════════════════════════════════════════════════════

## Slide 18 — Summary
"Let me wrap up. Five things to take home. One, we built an interpretable pipeline
that predicts taste through emotion. Two, it matches trait-based baselines without
using any traits. Three, how much it helps depends on one clean factor, how well we
read a person's emotions. Four, we found a realistic ceiling of 0.639, and we showed
that emotion is what makes personalization worthwhile when data is limited. Five, a
placebo test confirmed the gain really comes from emotional content. (pause) We are
not offering a new best score. We are offering an explanation of when, why, and how
far emotion mediation helps."

## Slide 19 — Future work + Thank you
"For future work, the main bottleneck is predicting a person's emotions more
accurately, so that is where we are heading, along with testing on other datasets.
(pause) Thank you very much. I am happy to take any questions."

═══════════════════════════════════════════════════════
TIMING SUMMARY
═══════════════════════════════════════════════════════
Opening 3 + Block1 7 + Block2 6 + Block3 5 + Block4 4 + Block5 3 + Closing 2
= 30 minutes.

Pace tips:
- ~130 words/min speaking. This script is sized for that.
- If running long: shorten slide 12, 13, 17 (the "brief" ones).
- If running short: expand future work, or take the ceiling detail deeper.
- Practice the transitions (slide 10) — they give the audience a breath and you a
  moment to reset.

═══════════════════════════════════════════════════════
Q&A BACKUP — คำตอบเตรียมไว้ (ถ้าถูกถาม)
═══════════════════════════════════════════════════════

Q "Isn't the perception-vs-weighting result too unstable to report?"
A "Yes, and that is exactly why we report it as a supporting analysis with intervals,
   not a headline. The instability itself is informative: it tells you the answer
   depends on measurement noise, so we are honest about that."

Q "How do you know there is no leakage?"
A "Our split keeps users and images disjoint across groups. The shared emotion model
   only sees training-group images, verified zero overlap with test. And we have
   empirical evidence: a fine-tuned backbone dropped when we removed the leakage,
   while frozen ones did not move."

Q "Why linear? Isn't that too simple?"
A "Two reasons. First, prior work shows human aesthetic judgment is well approximated
   by a linear combination of features. Second, linear is what makes the per-user
   formula interpretable, which is the whole point. And empirically, a non-linear
   head did not beat it."

Q "Why only one dataset?"
A "XPASS-Vis is the only dataset deep enough per person, with per-image emotions
   across categories. Most PIAA datasets lack emotion labels. Cross-dataset transfer
   is future work, and we are honest about that limitation."

Q "Emotion accuracy is only 0.27. Isn't that too low?"
A "It is low, and that is our main bottleneck, which we quantify with the ceiling
   analysis. The interesting point is that even with this low accuracy, emotion
   mediation already matches trait-based baselines. Improving it is the clearest path
   forward."
