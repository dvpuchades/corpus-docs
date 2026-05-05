---
title: Where your data lives
summary: Raw health data never leaves your iPhone. Only a structured, anonymised daily summary — levels, not biometrics — is sent to generate coaching, over an encrypted connection, with nothing stored on a server.
section: privacy
order: 1
updated: 2026-05-05
---

This is the short version. The [privacy policy](/en/privacy) is the long, legally-binding version — read that one for the full picture.

## What stays on your device

**All of it.** Specifically:

- Every raw measurement read from Apple Health — heart rate, HRV, sleep stages, steps, workouts, mobility, body composition, mindfulness, cycle data.
- Your computed metrics and their full history.
- Your behaviour logs, notes, photos, and check-in answers.
- Your personalised insights and the correlations behind them.
- Your goals, plan summary, and chat history.

Corpus has no servers that store any of this. It's processed on your iPhone, stored on your iPhone, and stays there.

## What is sent (and what isn't)

To generate your coaching, training plans, and chat replies, Corpus sends a **structured daily summary** to a hosted AI service over HTTPS. That summary contains:

- **Metric levels** — *"Sleep: Fair"*, *"Readiness: Good"* — not the raw measurements behind them.
- A **7-day history** of metric states and logged behaviours.
- Your **goals**, profile summary, and current training plan.
- Your **notes and check-in answers** (text only).
- **Chat messages** during a coaching conversation.

What is **not** sent:

- Raw heart rate, HRV, or other biometric time-series data.
- Sleep-stage breakdowns or raw sleep data.
- GPS routes or detailed workout streams.
- Photos beyond the moment of analysis (see below).

The AI service processes the summary in real time and returns a response. **No biometric data is stored on any server beyond the lifetime of that single request.**

## Photo handling

When you take a photo for behaviour logging, the image is sent to the AI service for analysis — to describe what's in it and extract relevant tags (e.g. identifying foods in a meal photo). The image is processed transiently and is **not stored remotely**. The original photo stays only on your device.

## What we never do

- We don't sell, share or monetise your data.
- We don't use third-party analytics, advertising, or tracking SDKs.
- We don't require an account; there's no sign-up, no login, no cloud profile.
- We don't have social features — no feed, no leaderboards, no sharing.

## Why we built it this way

Corpus exists to help you understand your body. That mission only works if you trust us with the data — so the architecture is the simplest possible answer to "how do you minimise the risk?" The answer was: don't move the raw data, don't store anything on a server, send only what's strictly necessary for the model to give you useful coaching. The rest follows.
