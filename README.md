# Andy Lucas ANDRIAMANANA — Portfolio

Portfolio professionnel construit avec **React.js** en **Clean Architecture**, disponible en **Français** et **Anglais**, avec Dark Mode activé par défaut.

---

## ✨ Aperçu

| Page | URL |
|------|-----|
| Accueil | `/` |
| À propos | `/about` |
| Compétences | `/skills` |
| Projets | `/projects` |
| Expérience | `/experience` |
| Formation | `/education` |
| Contact | `/contact` |

---

## 🚀 Installation

### Prérequis
- **Node.js** >= 18.x
- **npm** >= 9.x

### Démarrage rapide

```bash
# 1. Extraire l'archive et entrer dans le dossier
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Serveur de développement
npm run dev
# → http://localhost:5173
```

### Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Dev avec HMR |
| `npm run build` | Build production dans `dist/` |
| `npm run preview` | Prévisualiser le build en local |
| `npm run lint` | ESLint |
| `npm run lint:fix` | Correction automatique |

---

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel && vercel --prod
```
Le fichier `vercel.json` est déjà configuré.

### Netlify
- Build command : `npm run build`
- Publish directory : `dist`
- Le fichier `public/_redirects` gère les routes SPA.

### GitHub Pages
Ajouter dans `vite.config.js` :
```js
base: '/nom-du-repo/'
```
Puis :
```bash
npm install --save-dev gh-pages
# ajouter "deploy": "gh-pages -d dist" dans package.json scripts
npm run deploy
```

---

## 🏗️ Clean Architecture

```
src/
├── core/              # Transversal (hooks, constants, services, utils)
├── domain/            # Entités métier + interfaces repository
├── application/       # Use cases + mappers
├── infrastructure/    # Données CV (fr/en) + implémentations repository
├── presentation/      # React : pages, layouts, composants, styles
└── assets/            # CV PDF
```

**Règle d'or** : les dépendances ne pointent que vers l'intérieur.
`presentation` → `application` → `domain` ← `infrastructure`

---

## 🌍 Internationalisation

- Données CV dans `infrastructure/data/cvData.fr.js` et `cvData.en.js`
- UI strings dans `core/constants/translations.js`
- Langue persistée dans localStorage
- Bascule en un clic via `LanguageToggle`

---

## 📁 Ajouter un projet

Ouvrir `src/infrastructure/data/cvData.fr.js` et `cvData.en.js`, ajouter
une entrée dans le tableau `projects`. Aucun composant à modifier.

---

© Andy Lucas ANDRIAMANANA — Tous droits réservés

# portfolio-react
Andy Lucas portfolio
