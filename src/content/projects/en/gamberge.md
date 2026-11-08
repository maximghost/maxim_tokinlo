---
title: "Gamberge"
category: "Mobile app · Learning through play"
tagline: "10 brain games, one mind at full speed."
summary: "A mobile hub of ten French-language brain games, playable solo, with friends on a single phone, or in real-time online duels. Designed, built and styled single-handedly, end to end."
role: "Founder, project lead and developer (solo project)"
period: "Since mid-2025 (about 18 months)"
status: "Final polish — release planned for late December 2026"
stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion", "Capacitor", "Supabase", "PostgreSQL", "FedaPay", "Vitest"]
stats:
  - { value: "10", label: "games" }
  - { value: "616", label: "automated tests" }
  - { value: "0", label: "ads" }
links:
  demo: "https://gamberge.vercel.app"
images:
  - { src: "../../../assets/projects/gamberge-hub-light.png", alt: "Gamberge home screen in light mode" }
  - { src: "../../../assets/projects/gamberge-hub-dark.png", alt: "Gamberge home screen in dark mode" }
featured: true
order: 1
---

## At a glance

- **10** brain games
- **3** ways to play: solo, pass-and-play, online duel
- **7** games with a daily challenge and a leaderboard
- **616** automated tests
- **0** ads
- **500 CFA francs**, one-time purchase, no subscription

## Why Gamberge

I believe people can learn through play. I have nothing against video games, but I wanted to build something different: a game people describe as a positive tool, one that trains memory, logic and vocabulary, and that brings a real community together.

That last point is why GambNews exists, the app's community feed: on Gamberge, people play, but they also share anecdotes, tips and general knowledge.

## What I built

Gamberge brings together ten games, each with its own visual and sound identity, in three families:

- **Numbers and arithmetic**: Devinettes, Haut ou Bas, Cascade, Oracle
- **Words and letters**: Mot Caché, Anagramme, Déclic, Bobard
- **Logic and judgement**: Imposteur (investigations where a single witness is lying), Équilibre (game-theory dilemmas)

Around the games, the app offers:

- **A pass-and-play mode**: 2 to 4 players share one phone, and the game resumes automatically after a reload.
- **An online duel**: random matchmaking or a private room with a code, identical content on both sides, one-tap rematch and detection of a player leaving.
- **A daily challenge**: one attempt per game per day, the same content for everyone, a shared leaderboard.
- **GambNews**: a community feed with reactions, comments and automatic moderation triggered by reports.
- **A payment flow** with Mobile Money (MTN, Moov, Celtiis) and cards through FedaPay.

Writing the content was part of the project too: the word dictionary, the clues, the investigation scenarios and the dilemmas were all written for the app.

## My role

I carried Gamberge alone, from idea to production:

- **Game design**: the games and their rules
- **Development** of the web and Android app
- **Infrastructure**: database, real-time duel, payments
- **Content**: words, scenarios, dilemmas, clues
- **Design**: visual identity, mascot (Cogito), animations and soundscapes

I used AI as a development assistant. The design, the architecture, the trade-offs and the validation of the code (through tests in particular) are my own work.

## The main challenge: online duel matchmaking

**The problem.** A duel starts in one of two ways: by challenging a random online player, who has to accept the request, or by sharing the code of a private room. Either way, two people who do not connect at the same moment must end up in the same game, see the same screen at the same time and get fair results.

**What went wrong.** The first versions did not hold up. If the two players did not arrive at exactly the same time, they never saw each other. And a player who received several requests at once could not join any session.

**The solution.** Instead of fixing bugs one by one, I stepped back and redesigned the whole flow by listing every possible case: staggered arrivals, simultaneous requests, refusals, players leaving. The system was then rebuilt on that basis:

- a **queue** collects incoming requests, and the player chooses which one to accept;
- the list of available players **refreshes automatically every 10 seconds**, which absorbs staggered arrivals;
- each step requires **explicit agreement from both players**, and a single refusal closes the session cleanly;
- once the game starts, both players see **the same screen at the same moment**, and results are only revealed at the end of each round.

**The result.** The duel is now stable and covered by automated tests. Above all, I took a method from it: when facing a synchronisation problem, map every possible state before writing any code.

## Technical choices

- **React 19 + Vite + Tailwind CSS v4**, with **Framer Motion** for animation: a fluid interface that delivers the "wow" effect I wanted with every win.
- **Capacitor** to ship a single codebase to the web (Vercel) and Android, then iOS.
- **Supabase** (PostgreSQL, real time, server functions) for accounts, duels, leaderboards and the community.
- **FedaPay** for local payments. Every payment is verified server-side: no payment key ships with the app.
- **Vitest**: 616 automated tests cover game logic, duels, persistence, payments and the community.

## Respecting players

Gamberge refuses advertising. The model is simple: 20 free games to discover it, then a one-time purchase of 500 CFA francs. Accounts ask for no email and no unnecessary data: a username, a password and a personal recovery code.

## Where the project stands

The app is playable as a web demo. The game content, the purchase page and the usability of the interfaces are being refined, along with testing on real devices. Release on the Play Store, then the App Store, is planned for late December 2026. The next technical goal is a smooth duel with 1,000, then 10,000 simultaneous players.

## What I take from it

**A finished product demands total commitment.** For months, Gamberge filled my days and my thoughts. Leading a project of this size alone taught me determination and attention to detail: rereading my code, testing again, never settling for "it works".

**Quality comes from iteration.** The first versions were rough, and the original design looked nothing like today's. Each redesign brought the app closer to the standard I had set myself.

**Players have the final say.** I recruited testers to confront my choices with real use. Their feedback shaped much of the final polish.
