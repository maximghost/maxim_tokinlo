---
title: "Gamberge"
category: "Application mobile · Éducation ludique"
tagline: "10 jeux de réflexion, un seul cerveau qui carbure."
summary: "Un hub mobile de dix mini-jeux de réflexion en français, jouable en solo, à plusieurs sur un même téléphone ou en duel en ligne en temps réel. Conçu, développé et designé seul, de A à Z."
role: "Fondateur, chef de projet et développeur (projet solo)"
period: "Depuis mi-2025 (environ 18 mois)"
status: "En finition — publication prévue fin décembre 2026"
stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion", "Capacitor", "Supabase", "PostgreSQL", "FedaPay", "Vitest"]
stats:
  - { value: "10", label: "jeux" }
  - { value: "616", label: "tests automatisés" }
  - { value: "0", label: "publicité" }
links:
  demo: "https://gamberge.vercel.app"
  site: "https://gamberge-site.vercel.app"
images:
  - { src: "../../../assets/projects/gamberge-hub-light.png", alt: "Écran d’accueil de Gamberge en mode clair" }
  - { src: "../../../assets/projects/gamberge-hub-dark.png", alt: "Écran d’accueil de Gamberge en mode sombre" }
featured: true
order: 1
---

## En bref

- **10** jeux de réflexion
- **3** façons de jouer : solo, détente, duel en ligne
- **7** jeux avec un défi du jour et un classement
- **616** tests automatisés
- **0** publicité
- **500 F CFA**, achat unique, sans abonnement

## Pourquoi Gamberge

Je suis convaincu qu’on peut apprendre en jouant. Je n’ai rien contre les jeux vidéo, mais je voulais créer autre chose : un jeu dont on parle comme d’un outil positif, qui fait travailler la mémoire, la logique et le vocabulaire, et autour duquel se forme une vraie communauté.

Ce dernier point explique l’existence de GambNews, le fil communautaire de l’application : à Gamberge, on joue, mais on partage aussi des anecdotes, des astuces et de la culture générale.

## Ce que j’ai construit

Gamberge réunit dix jeux, chacun avec sa propre identité visuelle et sonore, répartis en trois familles :

- **Nombres et calcul** : Devinettes, Haut ou Bas, Cascade, Oracle
- **Mots et lettres** : Mot Caché, Anagramme, Déclic, Bobard
- **Logique et jugement** : Imposteur (des enquêtes où un seul témoin ment), Équilibre (des dilemmes de théorie des jeux)

Autour des jeux, l’application propose :

- **Un mode Détente** : 2 à 4 joueurs se passent le même téléphone, avec reprise automatique de la partie après un rechargement.
- **Un duel en ligne** : appariement aléatoire ou salon privé par code, contenu identique des deux côtés, revanche en un geste et détection de l’abandon de l’adversaire.
- **Un défi du jour** : une seule tentative par jeu et par jour, le même contenu pour tous, un classement commun.
- **GambNews** : un fil communautaire avec réactions, commentaires et une modération automatique déclenchée par les signalements.
- **Un parcours de paiement** par Mobile Money (MTN, Moov, Celtiis) et carte via FedaPay.

L’écriture du contenu fait aussi partie du projet : le dictionnaire de mots, les indices, les scénarios d’enquête et les dilemmes ont tous été rédigés pour l’application.

## Mon rôle

J’ai porté Gamberge seul, de l’idée à la mise en production :

- **Conception** des jeux et de leurs règles
- **Développement** de l’application web et Android
- **Infrastructure** : base de données, duel en temps réel, paiements
- **Contenu** : mots, scénarios, dilemmes, indices
- **Design** : identité visuelle, mascotte (Cogito), animations et ambiances sonores

J’ai utilisé l’IA comme assistant de développement. La conception, l’architecture, les arbitrages et la validation du code (notamment par les tests) sont de mon fait.

## Le défi principal : l’appariement du duel en ligne

**Le problème.** Le duel se lance de deux façons : en défiant un joueur en ligne choisi au hasard, qui doit accepter la demande, ou en partageant le code d’un salon privé. Dans les deux cas, deux personnes qui ne se connectent pas au même instant doivent finir dans la même partie, voir le même écran au même moment et recevoir des résultats justes.

**Ce qui a coincé.** Les premières versions ne tenaient pas la route. Si les deux joueurs n’arrivaient pas exactement en même temps, ils ne se voyaient jamais. Et un joueur qui recevait plusieurs demandes à la fois ne pouvait rejoindre aucune session.

**La solution.** Plutôt que de corriger les bugs un par un, j’ai pris du recul et redéfini tout le parcours en recensant chaque cas possible : arrivée décalée, demandes simultanées, refus, abandon. Le système a ensuite été reconstruit sur cette base :

- une **file d’attente** recueille les demandes entrantes, et le joueur choisit celle qu’il accepte ;
- la liste des joueurs disponibles **se met à jour automatiquement toutes les 10 secondes**, ce qui absorbe les arrivées décalées ;
- chaque étape demande l’**accord explicite des deux joueurs**, et un seul refus clôt proprement la session ;
- une fois la partie lancée, les deux joueurs voient **le même écran au même moment** et les résultats ne sont révélés qu’en fin de manche.

**Le résultat.** Le duel est aujourd’hui stable et couvert par des tests automatisés. Surtout, j’en ai tiré une méthode : face à un problème de synchronisation, cartographier tous les états possibles avant d’écrire du code.

## Choix techniques

- **React 19 + Vite + Tailwind CSS v4**, avec **Framer Motion** pour les animations : une interface fluide qui produit l’« effet waouh » recherché à chaque victoire.
- **Capacitor** pour livrer une seule base de code sur le web (Vercel) et sur Android, puis iOS.
- **Supabase** (PostgreSQL, temps réel, fonctions serveur) pour les comptes, le duel, les classements et la communauté.
- **FedaPay** pour le paiement local. Chaque paiement est vérifié côté serveur : aucune clé de paiement n’est présente dans l’application.
- **Vitest** : 616 tests automatisés couvrent la logique de jeu, le duel, la persistance, les paiements et la communauté.

## Respect du joueur

Gamberge refuse la publicité. Le modèle est simple : 20 parties gratuites pour découvrir, puis un achat unique de 500 F CFA. Les comptes ne demandent ni e-mail ni donnée superflue : un pseudo, un mot de passe et un code de récupération personnel.

## Où en est le projet

L’application est jouable en démo sur le web. Le contenu des jeux, la page d’achat et l’ergonomie des interfaces sont en cours de perfectionnement, ainsi que les tests sur appareils réels. La publication sur le Play Store, puis sur l’App Store, est prévue fin décembre 2026. L’objectif technique suivant est un duel fluide avec 1 000, puis 10 000 joueurs connectés simultanément.

## Ce que j’en retiens

**Un produit abouti exige un engagement total.** Pendant des mois, Gamberge a occupé mes journées et mes réflexions. Mener seul un projet de cette ampleur m’a appris la détermination et la minutie : relire son code, tester encore, ne pas se contenter du « ça marche ».

**La qualité vient de l’itération.** Les premières versions étaient brouillonnes, et le design de départ n’avait rien à voir avec celui d’aujourd’hui. Chaque refonte a rapproché l’application de l’exigence que je m’étais fixée.

**Les joueurs ont le dernier mot.** J’ai recruté des testeurs pour confronter mes choix à de vrais usages. Leurs retours ont guidé une bonne partie des finitions.
