# AGROMAI — Pilotage d'exploitation (version web)

Application statique (HTML/JS, sans build) hébergée sur **GitHub Pages**, avec **Supabase** pour
l'authentification, les rôles et le stockage des données.

- Les données ne sont **pas** dans ce dépôt : elles sont dans Supabase, derrière une connexion.
- Rôles : **admin** (tout), **gestionnaire** (saisie/modification, pas de suppression ni paramètres), **lecteur** (consultation).
- La sécurité est appliquée côté serveur (RLS, voir `web/supabase_schema_v2.sql` à la racine du projet).

## Mise en ligne (une seule fois)

1. **Supabase → SQL Editor** : exécuter `web/supabase_schema_v2.sql`.
2. **Supabase → Authentication → Sign In / Providers** : désactiver *Allow new users to sign up*.
3. **Supabase → Authentication → Users → Add user → Create new user** (cocher *Auto Confirm User*) :
   créer votre compte en premier — le premier compte devient **admin**.
4. **Supabase → Project Settings → API** : copier la clé **anon public** dans `assets/supabase-config.js`
   (jamais la clé `service_role`).
5. **Supabase → Authentication → URL Configuration** : *Site URL* = `https://sambameissa.github.io/Agrimai/`
   (nécessaire pour le lien « Mot de passe oublié »).
6. Pousser ce dossier dans le dépôt `sambameissa/Agrimai`, puis **Settings → Pages → Deploy from branch → main / (root)**.
7. Ouvrir le site, se connecter en admin, puis **Importer JSON** (export de la version portable) pour charger les données initiales.

## Reconstruire `index.html`

`python3 source/build.py web` (depuis la racine du projet) régénère `web/repo/index.html`.
