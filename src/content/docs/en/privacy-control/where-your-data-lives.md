---
title: Where your data lives
summary: Your iPhone is the only place your health data lives — nothing is stored on a server. Corpus sends a structured daily summary to the AI for coaching, and pulls more detail on demand only when the coach needs it.
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

## What is sent (and when)

To generate your coaching, training plans, and chat replies, Corpus sends data to a hosted AI service over HTTPS — on demand, only when there's a request to answer. By default that's a **structured daily summary** containing:

- **Metric levels** — *"Sleep: Fair"*, *"Readiness: Good"*.
- A **recent history** of metric states and logged behaviours.
- Your **goals**, profile summary, and current training plan.
- Your **notes and check-in answers** (text only).
- **Chat messages** during a coaching conversation.

When the coach needs more detail to answer a specific question or produce a better insight — *"why was my deep sleep low last night?"*, *"what happened in my heart rate during that interval session?"* — it can pull additional data from your device on demand: a workout's heart-rate trace, a night's sleep stages, a longer history window. Only the data needed for that particular request is sent, and only at the moment it's needed.

The AI service processes whatever it receives in real time and returns a response. **Nothing is stored on any server beyond the lifetime of that single request.** The data is sent, used, and discarded — the only persistent copy stays on your iPhone.

## Photo handling

When you take a photo for behaviour logging, the image is sent to the AI service for analysis — to describe what's in it and extract relevant tags (e.g. identifying foods in a meal photo). The image is processed transiently and is **not stored remotely**. The original photo stays only on your device.

## What we never do

- We don't sell, share or monetise your data.
- We don't use third-party analytics, advertising, or tracking SDKs.
- We don't require an account; there's no sign-up, no login, no cloud profile.
- We don't have social features — no feed, no leaderboards, no sharing.

## Why we built it this way

Corpus exists to help you understand your body. That mission only works if you trust us with the data — so the architecture is the simplest possible answer to "how do you minimise the risk?" The answer was: keep your device as the only persistent home for the data, don't store anything on a server, and only send what's needed at the moment the coach actually needs it. The rest follows.
