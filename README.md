[![Frontend CI](https://github.com/vuurlelie/biogarden-landing-page/actions/workflows/frontend-ci.yml/badge.svg?branch=main)](https://github.com/vuurlelie/biogarden-landing-page/actions/workflows/frontend-ci.yml)

# Bakony Kincse Biokertészet – Webshop

A responsive **React + TypeScript + Tailwind** based webshop frontend for *Bakony Kincse Biokertészet*.  
The goal of the project is to showcase products, ordering information, and the farm’s philosophy, as well as to prepare for backend integration.

---
**Live (temporary landing):** [bakonykincse.hu](https://bakonykincse.hu)  
**Status:** Demo frontend is live; backend (ASP.NET Core Web API, EF Core, Identity, JWT) and extended frontend is in progress.

## Key Features

- **Responsive UI** – works seamlessly on all screen sizes (mobile, tablet, desktop).
- **Navigation** – sticky navbar, scroll progress bar, mobile hamburger menu.
- **Carousel** – supports swipe and keyboard navigation, with auto-sliding.
- **Product catalog**:
  - filter by category
  - sorting (alphabetical, price ascending/descending)
  - pagination (12 products/page)
  - detailed product page with slug-based routing
- **About sections** – presentation of the farm, sustainable farming, and processed products.
- **Footer** – contact details, social media links (Facebook, Instagram), opening hours.
- **ScrollToTop + BackToTop** – smooth navigation between pages and scrolling.

---

## Technologies

### Frontend
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Development / Build
- [Vite](https://vitejs.dev/) – fast dev server and build tool
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – code quality and formatting

### Planned Backend
- ASP.NET Core Web API (C#)
- Entity Framework Core + SQL Server
- Identity-based user management
- JWT authentication
- Unit tests: xUnit 
