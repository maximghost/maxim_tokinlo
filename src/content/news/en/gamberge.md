---
title: "Gamberge: release planned for late December 2026"
tag: "Ghost.Technologies · Gamberge"
date: 2026-11-08
status: "Final polish"
summary: "Gamberge is on the home stretch: the game content, the purchase page and the usability are being refined, as is its product website."
stack: ["React 19", "TypeScript", "Capacitor", "Supabase", "FedaPay", "Vitest"]
links:
  - { label: "Try the demo", url: "https://gamberge.vercel.app" }
  - { label: "Product website", url: "https://gamberge-site.vercel.app" }
  - { label: "Read the case study", url: "/en/projects/gamberge/" }
highlights:
  - { label: "Platforms", value: "Web and Android, then iOS" }
  - { label: "Tests", value: "616 automated tests" }
  - { label: "Model", value: "One-time purchase of 500 CFA francs, no ads" }
  - { label: "Release", value: "Late December 2026" }
steps:
  - { label: "The 10 games and online duels", state: done }
  - { label: "Daily challenge and GambNews", state: done }
  - { label: "Content, purchase and usability", state: current }
  - { label: "Release on the Play Store", state: next, note: "Late December 2026" }
  - { label: "Release on the App Store", state: next }
order: 3
---

## Where Gamberge stands

The ten games, online duels, the daily challenge and the GambNews community feed are in place and playable in the demo. What remains is polishing what makes the difference at launch.

## In progress

- **Game content**: expanded and proofread, game by game.
- **The purchase page**: the Mobile Money and card payment flow.
- **Usability**: every screen is being reworked to be clearer and smoother.
- **The product website**, [gamberge-site.vercel.app](https://gamberge-site.vercel.app), is being refined too.

## Under the hood

React 19, TypeScript, Vite and Tailwind CSS v4 for the interface; Capacitor for a single codebase on the web and Android; Supabase (PostgreSQL, real time) for accounts, duels and leaderboards; FedaPay for local payments, verified on the server. 616 automated Vitest tests cover the game logic.

## What comes next

The Play Store release is planned for late December 2026, ahead of the App Store.
