---
title: Body composition
summary: If you have a smart scale that syncs to Apple Health, Corpus reads weight, body fat % and lean mass into 90-day trends, derives BMR/TDEE, and flags recomposition automatically.
section: health-signals
order: 3
updated: 2026-05-05
---

If you have a smart scale that syncs with Apple Health, Corpus brings body composition into the picture — alongside the six daily metrics, on the dashboard, and into the coach's context.

## What you need

Any smart scale that writes weight, body fat percentage and lean mass to Apple Health will work — Withings, Garmin, Eufy, RENPHO and similar all do. Corpus doesn't need a direct integration with the manufacturer; it reads from HealthKit.

If you only have weight (most basic scales), Corpus will still show the weight trend — but the recomposition signal needs body fat and lean mass.

## What you'll see

- **Today's reading** — weight, body fat %, lean mass.
- **90-day charts** — scatter plots of every reading plus a smoothed trend line for each of the three. The scatter is deliberate; you see the noise as well as the trend, which is the only honest way to read body composition data.
- **Derived metrics** — estimated basal metabolic rate (BMR), total daily energy expenditure (TDEE) using your strain, and energy balance.
- **Recomposition flag** — when body fat % is dropping while weight stays roughly flat, you're losing fat and gaining muscle simultaneously. That's the kind of progress a single scale number would miss; Corpus highlights it in the coaching comment.

## Freshness

Body composition only appears on the dashboard when your most recent reading is within the last **14 days**. Older than that and the readings get a "stale" treatment — the trends are still visible in the detail view, but they don't show on the main screen and don't feed the coaching context. The aim is to make sure you're always looking at current data.

## How often to weigh in

Daily is fine, weekly is enough. The trend line is what matters — single-day jumps from hydration, glycogen and gut content can be ±2 kg without anything actually changing about your body. The 90-day chart is built for that reality.

## How body composition feeds the plan

- **Recomposition goals** prioritise body composition over scale weight. Lifting volume gets weighted; cardio is dosed so it doesn't compromise lean mass; protein is highlighted in coaching comments.
- **Cutting goals** track weight and body fat %; the coach will flag if lean mass is dropping faster than expected.
- **Performance goals** use TDEE to flag underfuelling — a marathon-build with persistent low energy and dropping lean mass is a problem the data shows long before it shows up in your races.

## What Corpus deliberately doesn't do

No calorie counting, no macro tracking. The behaviour engine captures *what* you ate qualitatively (heavy meal, late meal, high protein) and finds correlations against your numbers — that's the part where a personal pattern actually emerges. Counting calories accurately is hard, the data is poor, and it adds friction without adding much truth.
