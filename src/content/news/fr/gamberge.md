---
title: "Gamberge : publication prévue fin décembre 2026"
tag: "Ghost.Technologies · Gamberge"
date: 2026-11-08
status: "En finition"
summary: "Gamberge entre dans sa dernière ligne droite : contenu des jeux, page d’achat et ergonomie sont en cours de perfectionnement, tout comme son site de présentation."
stack: ["React 19", "TypeScript", "Capacitor", "Supabase", "FedaPay", "Vitest"]
links:
  - { label: "Essayer la démo", url: "https://gamberge.vercel.app" }
  - { label: "Site de présentation", url: "https://gamberge-site.vercel.app" }
  - { label: "Lire l’étude de cas", url: "/fr/projets/gamberge/" }
highlights:
  - { label: "Plateformes", value: "Web et Android, puis iOS" }
  - { label: "Tests", value: "616 tests automatisés" }
  - { label: "Modèle", value: "Achat unique de 500 F CFA, sans publicité" }
  - { label: "Sortie", value: "Fin décembre 2026" }
steps:
  - { label: "Les 10 jeux et le duel en ligne", state: done }
  - { label: "Défi du jour et GambNews", state: done }
  - { label: "Contenu, achat et ergonomie", state: current }
  - { label: "Publication sur le Play Store", state: next, note: "Fin décembre 2026" }
  - { label: "Publication sur l’App Store", state: next }
order: 3
---

## Où en est Gamberge

Les dix jeux, le duel en ligne, le défi du jour et le fil communautaire GambNews sont en place et jouables en démo. Il reste à polir ce qui fait la différence à la sortie.

## Ce qui est en cours

- **Le contenu des jeux** : enrichi et relu, jeu par jeu.
- **La page d’achat** : le parcours de paiement par Mobile Money et par carte.
- **L’ergonomie des interfaces** : chaque écran est repris pour être plus clair et plus fluide.
- **Le site de présentation**, [gamberge-site.vercel.app](https://gamberge-site.vercel.app), est lui aussi en cours de perfectionnement.

## Sous le capot

React 19, TypeScript, Vite et Tailwind CSS v4 pour l’interface ; Capacitor pour une seule base de code sur le web et sur Android ; Supabase (PostgreSQL, temps réel) pour les comptes, le duel et les classements ; FedaPay pour le paiement local, vérifié côté serveur. 616 tests automatisés Vitest couvrent la logique du jeu.

## La suite

La publication sur le Play Store est prévue fin décembre 2026, avant l’App Store.
