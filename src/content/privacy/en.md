---
title: Privacy policy
summary: Corpus keeps your health data on your device as the only source of truth — nothing is stored on a server. The AI coach pulls only what it needs to generate useful coaching, with no third-party analytics, no account required, and full deletion under your control.
version: federer-2001
effective: 2026-05-05
updated: 2026-05-05
---

## Our philosophy

Corpus exists to help you understand your body. That mission only works if you trust us with your data — so we built Corpus around a single principle: **your health data is yours.**

Four commitments we make to every user:

1. Your health data lives on your device — nothing is stored on our servers.
2. We don't sell, share, or monetise your data.
3. No account is required to use Corpus.
4. You can delete everything at any time.

## Data controller

The data controller for Corpus is **David Puchades Todolí**. Privacy questions and data-rights requests can be sent to [dvpuchades@gmail.com](mailto:dvpuchades@gmail.com).

## Data we collect

### From Apple Health

With your permission, Corpus reads the following categories from Apple Health on your device:

- **Heart rate & heart rate variability** — resting, active, and variability measurements used to assess readiness, stress, and recovery.
- **Sleep** — sleep stages (deep, REM, core, awake), duration, and timing used to evaluate sleep quality and detect naps.
- **Activity** — steps, active energy burned, workout sessions, and exercise minutes used to calculate strain and training load.
- **Respiratory rate & wrist temperature** — used when available to enhance readiness and recovery assessments.
- **Mobility** — walking speed and asymmetry, passively captured by your iPhone.
- **Blood oxygen** — used when available as an additional recovery signal.
- **Body composition** — weight, body fat percentage, and lean body mass from smart scales synced through Apple Health.
- **Mindfulness** — meditation and breathing sessions used for automatic behaviour detection.
- **Menstrual cycle** — flow data used to factor cycle phase into readiness and recovery, and for automatic behaviour logging when available.

### From you

- **Goals and preferences** — what you set during onboarding and update over time.
- **Behaviour logs** — check-in answers, notes, photos, and tags you provide.
- **Chat messages** — conversations with your AI coach.
- **Work schedule** — used to plan workouts around your availability.
- **Name** — optional, used only to personalise your coaching.

## Where your data is stored

**Your device is the only place your data lives.** Specifically:

- All raw health data read from Apple Health.
- Your computed health metrics and their history.
- Your behaviour logs, notes, photos, and check-in answers.
- Your personalised insights and the correlations behind them.
- Your goals, profile, plan summary, and chat history.

Corpus processes your health data locally on your device to generate your daily metrics. **Nothing is stored on our servers.**

## Third parties

Corpus uses **Anthropic** (Claude API) as the AI service that generates coaching responses, training plans, and chat replies. Anthropic processes the data described in *§ What is sent to the AI service* in real time and does not retain it beyond the lifetime of that single request.

Corpus does **not** use any third-party analytics, advertising, or tracking SDKs.

## What is sent to the AI service

To generate your coaching, training plans, and chat responses, Corpus sends data to the AI service on demand over an encrypted (HTTPS) connection. By default this is a **structured daily summary**, which includes:

- Your metric *levels* (e.g. "Sleep: Fair", "Readiness: Good").
- A recent history of metric states and logged behaviours.
- Your goals, profile summary, and current training plan.
- Your notes and check-in answers (text only).
- Chat messages during a coaching conversation.

When the coach needs more detail to answer a specific question or produce a better insight, it can pull additional data from your device on demand — for example, a workout's heart-rate trace, a night's sleep stages, or a longer history window. Only the data needed for that request is sent, and only at the moment it is needed.

The AI service processes whatever it receives in real time to generate a response. **Nothing is stored on any server beyond the lifetime of that single request** — the data is sent, used, and discarded. The only persistent copy stays on your device.

## Photo processing

When you take a photo for behaviour logging, it is sent to the AI service for analysis — to describe what's in the image and extract relevant behaviour tags (e.g. identifying foods in a meal photo). The image is processed transiently and is **not stored remotely**. The original photo is saved only on your device.

## Your rights

You are in control of your data at all times:

- **Delete all data** — From Profile, you can delete all stored data from your device.
- **Revoke health permissions** — Adjust which Apple Health categories Corpus can access at any time through *Settings → Health → Apps → Corpus*.
- **Delete individual entries** — Remove specific notes, photos, or behaviour logs from your dashboard.
- **Access and rectification** — Because all data lives on your device, you can view and edit any of it directly in the app.
- **Email contact** — For any data-rights question, email [dvpuchades@gmail.com](mailto:dvpuchades@gmail.com).

## Age requirement

Corpus is designed for users aged 17 and older.

## What Corpus does not do

- **No social features.** There are no profiles, feeds, leaderboards, or sharing mechanisms.
- **No account required.** Corpus works entirely on your device without sign-up or login.
- **No data sales.** Your health data is never sold, shared with advertisers, or used for any purpose other than generating your personal coaching.
- **No third-party analytics.** We don't track how you use the app with external analytics services.

## Changes to this policy

We may update this policy from time to time. Changes will be noted with an updated date at the top of this page. Continued use of Corpus after changes constitutes acceptance of the updated policy.

## Contact

If you have questions about how Corpus handles your data, email the developer at [dvpuchades@gmail.com](mailto:dvpuchades@gmail.com).
