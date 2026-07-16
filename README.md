# AGROMAI — Pilotage d'exploitation (v2 web)

Application de gestion pour AGROMAI Ferme Intégrée : clients, produits & stock, facturation, dépenses, tableau de bord.

Cette version remplace la v1 (fichier HTML portable en `localStorage`) par une version hébergée, multi-utilisateurs (3 comptes), avec authentification.

- **Backend** : [Supabase](https://supabase.com) (PostgreSQL + Auth)
- **Hébergement** : [Vercel](https://vercel.com) (déploiement automatique à chaque push)
- **Frontend** : HTML/CSS/JS statique, sans framework ni build

## Statut

🚧 En cours de migration depuis la v1 portable. Voir `web/PLAN_MIGRATION_WEB.md` à la racine du projet pour le détail des étapes.

## Configuration

`assets/supabase-config.js` contient l'URL du projet Supabase et la clé publique ("anon key"). Cette clé est conçue pour être publique côté client — la sécurité réelle est assurée par les policies RLS définies dans `web/supabase_schema.sql`. Elle est donc committée normalement, pas de variable d'environnement à gérer.

## Déploiement Vercel

1. Sur [vercel.com](https://vercel.com), **Import Project** → sélectionner `sambameissa/Agrimai`.
2. Aucune configuration de build nécessaire (site statique).
3. Chaque `git push` sur `main` redéploie automatiquement.

## Base de données

Le schéma complet (tables, contraintes, RLS) est dans `web/supabase_schema.sql` à la racine du projet. Les données historiques (57 factures, 33 clients, 3 produits) sont dans `web/supabase_data_migration.sql`.
