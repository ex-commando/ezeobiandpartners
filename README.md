# Ezeobi & Partners — Official Website

> **Exclusive Legal Practice** | Distinguished Nigerian Law Firm | Est. 1989

A premium, fully responsive React/Vite website for **Ezeobi & Partners**, a distinguished Nigerian law firm founded by the late **Chief Theodore A. Ezeobi SAN (1939–2014)**. The firm offers specialised legal services across General Practice, Business/Commercial Law, and Energy & Natural Resources — serving clients across Nigeria, Africa, and the World.

---

## 📁 Project Structure

```
ezeobiandpartners/
│
├── README.md
└── ep-react/                   # React/Vite SPA (main project)
    ├── index.html              # Vite HTML entry point
    ├── vite.config.js          # Vite configuration
    ├── package.json            # Dependencies & scripts
    ├── eslint.config.js        # ESLint configuration
    └── src/
        ├── main.jsx            # React entry point
        ├── App.jsx             # Root component + routing
        ├── App.css             # App-level styles
        ├── index.css           # Global design system
        ├── assets/             # Static assets (images, SVGs)
        ├── components/         # Shared/reusable components
        │   ├── Navbar.jsx          # Fixed navigation bar
        │   ├── Footer.jsx          # Site-wide footer
        │   └── ScrollToTop.jsx     # Route change scroll reset
        └── pages/              # Individual page components
            ├── Home.jsx            # Hero / landing page
            ├── About.jsx           # About the firm
            ├── PracticeAreas.jsx   # Practice areas detail
            ├── OurTeam.jsx         # Team & founder profile
            └── Contact.jsx         # Contact form & offices
```

---

## 🌐 Pages & Sections

| Page | Route | Key Sections |
|---|---|---|
| **Home** | `/` | Hero slider, Stats, Mission preview, CTA |
| **About** | `/about` | Firm history, founder legacy, values |
| **Practice Areas** | `/practice` | General Practice, Business/Commercial Law, Energy & Resources |
| **Our Team** | `/team` | Founder profile (Chief Theodore A. Ezeobi SAN), team CTA |
| **Contact** | `/contact` | Contact form, office locations (Abuja, Lagos, London) |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.2.4 | UI framework |
| **React DOM** | ^19.2.4 | DOM rendering |
| **React Router DOM** | ^7.13.1 | Client-side routing |
| **Framer Motion** | ^12.38.0 | Page transitions & animations |
| **Lucide React** | ^0.577.0 | Icon library |
| **EmailJS Browser** | ^4.4.1 | Contact form email integration |
| **Vite** | ^8.0.1 | Build tool & dev server |
| **ESLint** | ^9.39.4 | Code linting |

---

## 🎨 Design System

Dark-themed premium legal aesthetic. All design tokens live in `src/index.css`.

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--teal` | `#2a8fa8` | Primary brand / CTA buttons |
| `--teal-dark` | `#1e6e82` | Hover states |
| `--teal-light` | `#3db5cf` | Accents, underlines |
| `--dark` | `#0a1422` | Page background |
| `--dark-2` | `#0f1d2e` | Footer / card backgrounds |

### Typography
- **Headings**: `Cormorant Garamond` — elegant serif
- **Body / UI**: `Inter` — modern sans-serif

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **npm** v9+

### Run the Development Server

```bash
cd ep-react
npm install
npm run dev
```

➜ App runs at **http://localhost:5173**

---

## 📜 Available Scripts

From the `ep-react/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 📞 Contact Information

| Channel | Details |
|---|---|
| **Phone** | +234 (817) 774 4009 |
| **Email** | info@ezeobiandpartners.com |
| **Abuja HQ** | 15, Sfax Street, Zone 4 Wuse, Abuja |
| **Lagos** | 5 Simpson Street, Lagos |
| **London** | 38 Barnet Lane, Barnet EN5 2DN |

**Office Hours:** Mon–Fri 9:00–17:00 · Abuja Sat 10:00–14:00

---

## 📄 Legal

© 2026 Ezeobi & Partners. All Rights Reserved.  
*Exclusive Legal Practice — Built on trust, expertise, and unwavering ethical standards.*
