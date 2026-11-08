---
title: "ghoststructure, ma bibliothèque de structures de données en Python"
tag: "Open source"
date: 2026-11-08
status: "En développement · 30 %"
summary: "Une bibliothèque open source de structures de données classiques en Python moderne : typée, testée et documentée. Publication sur PyPI prévue d’ici fin novembre 2026."
progress: 30
stack: ["Python", "uv", "pytest", "Hypothesis", "mypy", "Ruff"]
links:
  - { label: "Voir sur GitHub", url: "https://github.com/maximghost/ghoststructure" }
highlights:
  - { label: "Type", value: "Bibliothèque open source" }
  - { label: "Langage", value: "Python 3.12, entièrement typé" }
  - { label: "Qualité", value: "100 % de couverture des branches, mypy strict" }
  - { label: "Publication", value: "PyPI, d’ici fin novembre 2026" }
steps:
  - { label: "Socle et outillage qualité", state: done }
  - { label: "Tableau dynamique", state: current }
  - { label: "Listes chaînées, piles et files", state: next }
  - { label: "Hachage, arbres, tas et graphes", state: next }
  - { label: "Publication sur PyPI", state: next, note: "Fin novembre 2026" }
order: 2
---

## Le projet

ghoststructure réimplémente les structures de données classiques en Python moderne. Deux objectifs : proposer une bibliothèque propre et pédagogique, et consolider mes propres acquis, une structure après l’autre.

## Le niveau d’exigence

- **Python 3.12** et ses types génériques modernes (PEP 695), vérifiés par **mypy en mode strict**.
- **Des tests pytest** avec 100 % de couverture des branches, complétés par des **tests par propriétés avec Hypothesis**, qui comparent chaque structure à une référence.
- **Ruff** pour le style et la qualité du code, et des docstrings au format Google.
- **uv** pour gérer le projet, une disposition `src/`, et des types distribués avec le paquet (`py.typed`).

## Où j’en suis

Le socle du projet est en place, et le tableau dynamique est en cours. Suivront les listes chaînées, les piles et les files, puis les tables de hachage, les arbres, les tas et les graphes.

## Prochaine étape

La publication sur PyPI, prévue d’ici fin novembre 2026 : la bibliothèque s’installera alors avec `pip`, comme n’importe quel paquet Python.
