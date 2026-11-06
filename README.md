# 🍽️ FoodieHub: Online Food Ordering System

A responsive online food ordering web application built with **React JS (Vite)** and **React Router**.
Customers can browse a Nigerian-inspired menu, search and filter meals, add food to a cart, and place a
sample order. No backend or payment gateway is used.

> Student project: contact details and orders are **sample data only**.

## ✨ Features

- Home, About, Menu, Contact, Cart and Checkout pages (React Router, no page reloads)
- Menu of 18 meals across 6 categories, with **search** and **category filtering**
- **Shopping cart**: add, increase, decrease, remove, clear, live total and item count
- Cart saved in **Local Storage** so it survives a page refresh
- **Checkout** with validation (name, email, phone, address) and an order confirmation
- **Contact form** with controlled inputs, email validation and success/error messages
- Loading state, empty cart state, "no results" state and a 404 page
- Fully responsive layout (mobile, tablet, laptop, desktop) with a hamburger menu on small screens

## 🧰 Tech Stack

- React 18 + Vite
- React Router DOM 6
- Plain external CSS (Flexbox, Grid, media queries)

## 🚀 Run Locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # create the production build in /dist
npm run preview   # preview the production build locally
```

## 📁 Project Structure

```
food-ordering-system/
├── public/                 # static files served as-is
│   ├── favicon.svg
│   ├── _redirects          # Netlify: make React Router links work on refresh
│   └── images/             # put your food photos here
├── src/
│   ├── main.jsx            # entry point: renders <App /> inside BrowserRouter
│   ├── App.jsx             # routes + cart state (useState) + Local Storage
│   ├── components/         # reusable UI pieces (Navbar, FoodCard, CartItem ...)
│   ├── pages/              # Home, About, Menu, Contact, Cart, Checkout, NotFound
│   ├── data/               # foods.js and categories.js (arrays used with .map())
│   ├── utils/              # helpers.js (Naira + totals) and validators.js
│   └── css/styles.css      # all styling
├── index.html
├── vite.config.js
├── vercel.json             # Vercel: SPA rewrites
├── netlify.toml            # Netlify: build settings + SPA redirect
└── package.json
```

## 📚 React Concepts Demonstrated

| Concept | Where |
| --- | --- |
| Vite setup, `src` and `public` folders, `main.jsx` and `App.jsx` | whole project |
| Functional components, import/export | `src/components`, `src/pages` |
| JSX, `className`, JavaScript expressions in JSX | every component |
| Props (parent to child) | `FoodCard`, `FoodList`, `CartItem`, `OrderSummary`, `FormField` |
| `.map()` rendering lists | `FoodList`, `CategoryFilter`, `Home`, `OrderSummary` |
| `useState` | cart (`App.jsx`), forms, search, category, mobile menu (`Navbar.jsx`) |
| `useEffect` | Local Storage sync (`App.jsx`), loading state (`Menu.jsx`), scroll to top |
| Events: `onClick`, `onChange`, `onSubmit` | buttons, inputs and forms across the app |
| Controlled inputs and validation | `Checkout.jsx`, `Contact.jsx`, `FormField.jsx` |
| React Router (`Routes`, `Route`, `Link`, `NavLink`, `useSearchParams`) | `App.jsx`, `Navbar.jsx`, `Menu.jsx` |

## 🖼️ Adding Food Photos

Each meal in `src/data/foods.js` points to an image such as `/images/jollof-rice.jpg`.
Add your own photos with those file names to `public/images/` (see `public/images/README.txt`).
If a photo is missing, the app shows a food emoji tile instead, so nothing breaks.

## 🐙 Upload to GitHub

`node_modules` is already ignored by `.gitignore`. Do **not** upload it.

```bash
git init
git add .
git commit -m "Initial commit: Online Food Ordering System"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 🌍 Deployment

**Netlify**
1. Push the project to GitHub.
2. In Netlify choose **Add new site → Import an existing project** and select the repo.
3. Build command: `npm run build`, publish directory: `dist` (already set in `netlify.toml`).

**Vercel**
1. Choose **Add New → Project** and import the GitHub repo.
2. Vercel detects Vite automatically. Click **Deploy**. (`vercel.json` handles page refreshes.)

**Render**
1. Choose **New → Static Site** and connect the repo.
2. Build command: `npm install && npm run build`, publish directory: `dist`.
3. Under **Redirects/Rewrites** add: source `/*`, destination `/index.html`, action **Rewrite**.

## ✅ Testing Checklist

- [ ] Every navigation link and button works
- [ ] Add, increase, decrease and remove items in the cart; total updates
- [ ] Refresh the page: the cart is still there
- [ ] Search and category filters on the Menu page
- [ ] Checkout shows errors for empty or invalid fields, and a success message when valid
- [ ] Contact form shows errors for empty fields or a bad email, and a success message when valid
- [ ] Resize the browser (or use DevTools device mode): no horizontal scrolling or overlap

## 📄 Licence

Created for educational purposes.
