Hello everyone, I'm Pinwa. My project is called Emotion-Mediated PIAA. It is about building an explainable model that predicts how much a specific person likes an image, from the emotions that person feels toward an image.

Here's the content today. I'll start with the idea. Then I show how it works. Then I find when and why this model helps. Then how much accuracy the model can reach. And last, I prove that the gain is real. I will explain it one by one.

First, some background. IAA is a model that predicts how much people like an image. But it usually predicts the average opinion of most people. While everyone has different taste. So there is PIAA, which predicts the preference of one specific person. It is used to make recommendations more personal and more accurate for each user. But here is the problem. The PIAA models used inside these systems are a black box. They predict well, but they cannot explain what the prediction is based on.

There are some works that try to open the box. For example, Ryu and Yanaka extract features to see where preference is stored inside a vision-language model. But it is still not defined in a detailed way.

So my work studies how to explain a person's beauty rating, through emotion. My hypothesis is this: people rate beauty through the emotions they feel toward an image. For example, this image makes them feel inspired. This image makes them feel nostalgic. And that is why they find it beautiful. So instead of predicting the score directly, I predict it through these feelings. That is the core idea of the project.

This is my pipeline. I put the image into a vision-language model and get an embedding vector. Then I pass that vector through a linear ridge model to get seven values. I train this part on emotion data, so it learns to project the embedding onto seven emotions. After that, I train a per-person model, learning how their seven emotions turn into a preference score. Again with ridge regression. So the first ridge, image to emotions, is shared by everyone. While the second one, emotions to score, is personal, one per person. And this is the part I can read and explain.

{interpretability example slide} Let me show what "explain" means here. Because the last step is linear, I get a formula for each person, showing how much each emotion matters to them. For example, user A likes images that make them feel impressed. User B likes images that make them feel nostalgic and amused. Two people, different formulas. This is exactly what a black box cannot show.

{dataset — what data looks like} My data is a dataset called XPASS-Vis, from Hayashi-san. Let me show what one rating looks like. For each image, a person gives a beauty score from 1 to 7. And they also give seven emotion ratings, from 1 to 5, like impressed, nostalgic, and amused. These come from a psychology framework called AESTHEMOS. So every row is one person, one image, one beauty score, and seven emotion values.

{dataset — size and protocol} In total, it has 129 people, more than 6,500 images, and about 88,000 ratings, across three categories. Each person rated more than 200 images, which is deep enough to do this work. It was also designed with a test-retest setup, where people rated some images twice. This is very useful, and I will show later what I use it for. And to be safe, my data split shared no image and no person across train and test. So it is leak-free.

For metrics, I mainly use CCC and SROCC, which measure how close the predicted scores are to the real ones. I keep comparing two models. Hybrid, my pipeline that has emotions in the middle step. And Direct, the model that predicts the beauty score directly, without emotions.

{Transition} Now I go to part two, showing that my idea actually works.

{Finding 1: Hybrid > Direct} {point at curve} First, I compared Hybrid and Direct on the same people, to see if going through emotion helps. I found that Hybrid raised the score, and it helped on 93 percent of all people. And the more personal data I have, the more it helps.

{Finding 3: baseline comparison} {point at chart} Next, I compared my pipeline with the baselines from the XPASS-Vis paper, ICI and MIR. These baselines are trained with personality traits, while my pipeline uses only emotion. I also tried changing the vision-language model in my pipeline, from CLIP to the stronger Qwen models. Here are the results. My model is comparable to the baselines that use traits. A stronger backbone is not always necessary, since Qwen3-4B is the same as Qwen3-8B. And fine-tuning is not necessary either. This actually matches Ryu and Yanaka, who also report that fine-tuning does not beat a simple linear model. (pause) One thing to notice is that the stronger the backbone, the smaller the Hybrid gain. This means a strong model may already store emotional information inside it, so adding the emotion bottleneck helps less.

{Transition} So now we know the idea works, emotion really helps predict preference. The next questions are: when does it help? How much can it help? And is it really because of emotion?

{Finding 4: emo_r} {point at figure} First question: when does it help? To find out, for every person, I measured how much emotion helped them, and then checked what it depends on. (pause) And the answer is that the more accurately the model predicts emotions, the more it helps. As we can see in this graph.

{Finding 6: ceiling} {point at figure} Next part: how much can emotion help? I find the upper-bound accuracy that the model can reach. Here I use that test-retest setup, where people rated some images twice. I measured the ceiling three ways: same-session, cross-session, and averaged. (pause) Here is the key point. A person agrees with their own past rating only at 0.69. But same-session gives 0.81, which is impossible for a real ceiling, because a model cannot be more consistent than the person who made the labels. The honest ceiling is cross-session, 0.64, because in real use we collect a person's emotions once and predict for them later. My best model reaches about 59 percent of this. (pause) And the interesting part is averaged, 0.86. If we could measure a person's emotions stably, without mood noise, the ceiling jumps up. So the emotion-to-score relationship itself is strong. What limits us is the noise in measuring emotion.

{Finding 8: cold-start} {point at figure} Then I checked cold-start: from how many ratings does the model start to be useful? I compared against a model that just uses the crowd average, with no personal data. Below about 50 ratings, personalizing actually hurts. And the Direct version never really beats the crowd, even at 100 ratings. Only Hybrid does, from 50 ratings on. So emotion is what makes personalizing worth it.

{Finding 9: placebo} {point at figure} Finally, to be sure the benefit really comes from emotion, and not just from having a seven-value bottleneck, I replaced the emotions with fake ones: random numbers, and shuffled emotions. If the gain came from just having a layer, the fakes would still work. But the fakes added almost nothing. This confirms that what really helps is the emotion bottleneck, the real emotional content.

{Summary} To summarize what I studied. One, I built an explainable model that predicts preference through emotion. Two, it is comparable to trait-based baselines, using only emotion. Three, it helps more when we predict a person's emotions more accurately. Four, the realistic ceiling is 0.64, and emotion is what makes personalizing worthwhile.

{Future work + Thank you} For future work, I will bring in traits, and study more clearly in which cases emotion helps, if we could predict emotions perfectly. Thank you.

═══════════════════════════════════════════ TIMING ~15 min · ตัด decomposition/redundancy/hard users จากการพูด (อยู่ในเปเปอร์/journal) ═══════════════════════════════════════════

Q&A backup (เผื่อถูกถาม):

decomposition (perception vs weighting): "It depends how we measure the emotions. In the fairest case the two are about equal, so we report both as substantial, with ranges. It's a supporting result."
leakage: users & images disjoint across splits; fine-tuned model dropped when leak removed, frozen didn't move.
why linear: human taste is roughly linear in features (Iigaya); linear makes the formula readable; non-linear didn't do better.
one dataset: only one deep enough per person with emotion labels; others are future work.
emotion accuracy 0.27: it's the main bottleneck (ceiling measures it); even so we match trait methods.