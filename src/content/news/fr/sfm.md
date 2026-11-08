---
title: "Un site vitrine et catalogue pour SFM"
tag: "Ghost.Technologies · Client"
date: 2026-11-08
status: "En conception"
summary: "Ghost.Technologies conçoit le site de SFM, enseigne d’Hêvié spécialisée dans les vins et spiritueux haut de gamme, les parfums et l’alimentation générale : vitrine, catalogue et réservation via WhatsApp."
stack: ["Next.js", "TypeScript", "Supabase"]
links: []
highlights:
  - { label: "Client", value: "SFM, Hêvié (Abomey-Calavi), deux boutiques" }
  - { label: "Livrables", value: "Identité visuelle, vitrine, catalogue, réservation WhatsApp" }
  - { label: "Mon rôle", value: "Conception et développement, de bout en bout" }
  - { label: "Technologies", value: "Next.js · TypeScript · Supabase" }
steps:
  - { label: "Cadrage du besoin", state: done }
  - { label: "Charte graphique et maquette", state: current, note: "En validation avec le client" }
  - { label: "Parcours de réservation", state: next }
  - { label: "Développement", state: next }
  - { label: "Mise en ligne", state: next }
order: 1
---

## Le contexte

SFM est une société d’Hêvié, à Abomey-Calavi, spécialisée dans le commerce de vins et spiritueux haut de gamme, de parfums et senteurs, et d’alimentation générale. Elle compte deux boutiques. Son site doit présenter l’enseigne, montrer l’étendue de ses rayons et permettre de réserver un produit sans friction.

## Ce que je construis

- **Une vitrine** : l’enseigne, ses trois univers et ses deux boutiques.
- **Un catalogue** : les produits classés par univers et par catégorie, pensé d’abord pour le mobile.
- **La réservation via WhatsApp** : depuis la fiche d’un produit, le client ouvre une conversation avec la boutique, le produit déjà indiqué dans le message.
- **L’identité visuelle** : charte graphique, typographies et maquettes, à la hauteur d’une enseigne haut de gamme.

## Les choix techniques

- **Next.js et TypeScript** : des pages rendues côté serveur ou générées à l’avance, pour un site rapide et bien référencé, et un code entièrement typé.
- **Supabase (PostgreSQL)** : le catalogue (produits, catégories, prix, disponibilité) vit dans une base de données et non dans le code. Il peut évoluer sans redéployer le site.
- **WhatsApp** : le canal que les clients utilisent déjà. Pas de compte à créer, ni de paiement en ligne à intégrer pour démarrer.

## Prochaines étapes

Valider avec le client la charte graphique et la maquette, puis le parcours de réservation. Le développement suivra.
