---
title: FAQ
summary: Quick answers to the things people ask most — what Corpus costs, what hardware you need, how the chat coach actually works, what Corpus does with your data, smart scales, the cycle, mental load, and how long until insights show up.
section: faq
order: 1
updated: 2026-05-05
---

## How much does Corpus cost?

**€3.99 a month** — the price of a coffee in Ireland. There's no free tier; everything in the app — the daily coaching, the personalised insights, the chat, the weekly plan — is included in that single subscription. No in-app purchases, no upsells.

## Do I need an Apple Watch?

You can install Corpus with just an iPhone, but the Apple Watch is what gives you the full picture. Without it you'll still get sleep windows, steps, and any data from a smart scale, but you lose continuous heart rate, HRV, sleep staging, and most of the workout detail — which means readiness, recovery and stress will be coarser. Apple Watch Series 4 or later is the recommended baseline.

## Does Corpus replace Whoop, Oura, or Garmin Coach?

For most people, yes. The argument for Whoop, Oura and similar is that they bundle good biometric reading with coaching. The Apple Watch already does the biometric reading at least as well — Corpus is the missing coaching layer on top, at €3.99/month instead of around €30, with no extra strap, no extra charger, and no extra account.

What Corpus *doesn't* try to be: a sleep ring you wear when you're not training, or a fashion-watch alternative. If you specifically prefer a ring form factor, Oura is still the right product.

## Can the chat actually change my training plan?

**Yes — and this is the part most users miss.** The chat coach has tools that let it modify your plan, swap sessions, update goals, and write notes on your behalf. You can say:

- *"Move tomorrow's intervals to Friday."*
- *"I'm travelling Wednesday, replace the gym session with something I can do in a hotel room."*
- *"I want to drop intensity for the rest of the week — I'm feeling rough."*
- *"Update my goal to a marathon on 12 October instead of the half."*

The coach looks up the relevant data, makes the changes, and tells you what it did. You don't have to leave chat to act on the conversation.

## What does the coach actually know about me?

It has access to: your six daily metrics and their history, your active goals, your weekly plan, your plan summary, your behaviour logs, your check-in answers, your active personalised insights, your training load, your body composition (if applicable), and the chat history of the current conversation. When it needs more detail to answer a specific question — say, the heart-rate trace of a workout or the sleep stages of a particular night — it can pull that from your device on demand. Nothing is stored on a server. See [Where your data lives](/en/docs/privacy-control/where-your-data-lives) for the full breakdown.

## Does Corpus work with smart scales?

Yes. Any smart scale that syncs weight, body fat percentage and lean mass to Apple Health will work — Withings, Garmin, Eufy, RENPHO and similar. Corpus reads from HealthKit, so no manufacturer-specific integration is needed. With body fat % and lean mass, you also get derived metrics (BMR, TDEE) and automatic recomposition detection. See [Body composition](/en/docs/health-signals/body-composition).

## Does Corpus support menstrual cycle tracking?

Yes. Cycle data is read automatically from Apple Health if you log it (or a connected app does). Corpus factors **cycle phase** into recovery and readiness — so the engine doesn't read a luteal-phase HRV dip as illness or overtraining, and the plan respects the rhythms that actually matter for your training. Cycle data is treated like every other category: stored on your device, sent to the AI only as part of the same on-demand request flow used for the rest of your data, and never retained on a server.

## Why does recovery matter as much as training?

Because adaptation happens during recovery, not during the workout. The session is the stimulus; the rest is what makes you stronger, faster, or leaner. A plan that pushes hard sessions on a body that's still recovering doesn't make you fitter — it makes you flatter, more injured, or more burned out. Corpus weights recovery state in every plan decision for that reason.

## Can stress and mood affect my readiness score?

Yes — and this is one of the things people miss. Stress in Corpus is **physiological**: it's read from HRV trends, resting heart rate, sleep architecture and the autonomic nervous system. Mental and emotional load show up there with surprising fidelity. A bad week at work can drag readiness and recovery down even with no extra training. The coach reads the signal and adjusts; if you log "high work stress" in the check-in, it has the context to explain *why* readiness dropped.

## What are the "today's notes" actually for?

They're the input to your **personalised insight engine**. Every note, voice memo, photo or check-in answer is parsed into behaviour tags, paired with what your body did over the next 24–48 hours, and analysed across a 90-day window. The output is statistically meaningful patterns from *your* data — *"Late caffeine is associated with 28% less deep sleep for you"* or *"Cold exposure days show higher next-day recovery."* The more consistently you log, the faster and sharper those insights become.

## How long until I see personalised insights?

About **two to three weeks** of consistent logging. The engine needs enough days where you did something *and* enough days where you didn't to find a meaningful difference — typically 8–12 of each. You'll see your six metrics and daily coaching from day one; the personal insights appear progressively as the data builds.

## Does my data leave my device?

Your device is the only place your data is stored — nothing is kept on a server. To generate coaching, Corpus sends data to the AI service over HTTPS on demand: by default a structured daily summary (metric levels, recent history, your notes and goals), and when the coach needs more detail to answer a specific question, additional data pulled from your device for that single request only. Nothing is retained beyond the lifetime of each request. See [the privacy policy](/en/privacy) for the full description.

## How do I delete my data?

**Profile → Delete all data** wipes everything Corpus has stored on your device. You can also revoke individual Apple Health permissions in **Settings → Health → Apps → Corpus**, or delete individual notes, photos and check-in entries from the dashboard. Because nothing is stored on a server, that's all there is to it. See [Deleting your data](/en/docs/privacy-control/deleting-your-data).

## Which Apple Watch models are supported?

Series 4 and later. Series 3 is unsupported by recent watchOS releases that Corpus depends on.

## I have another question

Email [dvpuchades@gmail.com](mailto:dvpuchades@gmail.com) — every message is read.
