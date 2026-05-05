---
title: Deleting your data
summary: How to wipe everything Corpus has stored on your device, revoke individual Apple Health permissions, or remove specific entries — your data, fully under your control.
section: privacy
order: 2
updated: 2026-05-05
---

You can leave at any time. Because Corpus stores everything on your device and nothing on a server, "deleting your data" is genuinely a single action — there's no second copy somewhere to chase down.

## Delete everything

In the app: **Profile → Delete all data**. This removes:

- All metrics and history Corpus has computed.
- All behaviour logs, notes, photos, and check-in answers.
- All personalised insights and the correlations behind them.
- Your goals, plan, plan summary, and chat history.
- Your profile, preferences and any name you set.

The action is destructive and immediate — there's no undo, because there's nothing to restore from. If you want to keep anything before wiping, export or screenshot it first.

The app itself stays installed; if you re-open it, you'll go through onboarding again as a fresh user.

## Uninstall

If you also uninstall Corpus, iOS removes the app's local data automatically. (Apple Health data, which lives outside Corpus, is unaffected — that's owned by you and managed in the Health app.)

## Revoke Apple Health permissions

You can change which Health categories Corpus can read at any time, without deleting anything else:

**Settings → Health → Apps → Corpus → Data Access & Devices**

Toggle individual categories on or off. Corpus continues working with whatever's still allowed; the metrics that depend on revoked categories degrade gracefully (or disappear, if there's no fallback).

## Delete individual entries

You don't have to wipe everything to remove one thing.

- **A specific note, photo, or behaviour log:** swipe it on the dashboard to delete.
- **A specific check-in answer:** tap into the day's check-in and edit or remove individual answers.
- **A workout:** removed from Apple Health (which is the source of truth) — Corpus then reflects the change next time it syncs.

## What we don't have to delete on a server

There's no server-side copy of your health data, your behaviours, your insights, your plan, or your chat history. The only thing that briefly touches a server is the structured daily summary that's sent to the AI service to generate coaching — and that's processed transiently for the lifetime of the request only. There is nothing to delete there because nothing is retained there.

## Questions

If you have a specific data question, email [dvpuchades@gmail.com](mailto:dvpuchades@gmail.com).
