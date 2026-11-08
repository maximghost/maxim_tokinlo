---
title: "ghoststructure, Python-tietorakennekirjastoni"
tag: "Avoin lähdekoodi"
date: 2026-11-08
status: "Kehitteillä · 30 %"
summary: "Avoimen lähdekoodin kirjasto klassisia tietorakenteita modernilla Pythonilla: tyypitetty, testattu ja dokumentoitu. Julkaisu PyPI:ssä marraskuun 2026 loppuun mennessä."
progress: 30
stack: ["Python", "uv", "pytest", "Hypothesis", "mypy", "Ruff"]
links:
  - { label: "Katso GitHubissa", url: "https://github.com/maximghost/ghoststructure" }
highlights:
  - { label: "Tyyppi", value: "Avoimen lähdekoodin kirjasto" }
  - { label: "Kieli", value: "Python 3.12, täysin tyypitetty" }
  - { label: "Laatu", value: "100 % haarakattavuus, tiukka mypy" }
  - { label: "Julkaisu", value: "PyPI, marraskuun 2026 loppuun mennessä" }
steps:
  - { label: "Perusta ja laatutyökalut", state: done }
  - { label: "Dynaaminen taulukko", state: current }
  - { label: "Linkitetyt listat, pinot ja jonot", state: next }
  - { label: "Hajautus, puut, kekot ja verkot", state: next }
  - { label: "Julkaisu PyPI:ssä", state: next, note: "Marraskuun 2026 loppu" }
order: 2
---

## Projekti

ghoststructure toteuttaa klassiset tietorakenteet uudelleen modernilla Pythonilla. Kaksi tavoitetta: tarjota siisti ja opettavainen kirjasto sekä vahvistaa omaa osaamistani rakenne kerrallaan.

## Vaatimustaso

- **Python 3.12** ja sen modernit geneeriset tyypit (PEP 695), jotka **mypy tarkistaa tiukassa tilassa**.
- **pytest-testit** 100 %:n haarakattavuudella sekä **Hypothesis-ominaisuustestit**, jotka vertaavat jokaista rakennetta viitetoteutukseen.
- **Ruff** koodin tyyliin ja laatuun sekä Google-muotoiset dokumentaatiomerkkijonot.
- **uv** projektinhallintaan, `src/`-rakenne ja paketin mukana toimitettavat tyypit (`py.typed`).

## Missä olen

Projektin perusta on valmis, ja dynaaminen taulukko on työn alla. Seuraavaksi tulevat linkitetyt listat, pinot ja jonot, sitten hajautustaulut, puut, kekot ja verkot.

## Seuraava vaihe

Julkaisu PyPI:ssä marraskuun 2026 loppuun mennessä: kirjaston voi silloin asentaa `pip`-komennolla kuten minkä tahansa Python-paketin.
