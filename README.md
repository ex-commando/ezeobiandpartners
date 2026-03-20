# Ezeobi & Partners — Official Website

> **Exclusive Legal Practice** | Distinguished Nigerian Law Firm | Est. 1989

A premium, fully responsive website for **Ezeobi & Partners**, a distinguished Nigerian law firm founded by the late **Chief Theodore A. Ezeobi SAN (1939–2014)**. The firm offers specialised legal services across General Practice, Business/Commercial Law, and Energy & Natural Resources — serving clients across Nigeria, Africa, and the World.

---

## 📁 Project Structure

```
Ezeobiandpartners/
│
├── index.html              # Static HTML version of the website (single-page)
├── style.css               # Stylesheet for the static HTML version
├── script.js               # Vanilla JavaScript for the static HTML version
├── logo.jpg                # Firm logo
├── hero-bg.png             # Hero section background image
├── about-img.png           # About section image
│
└── ep-react/               # React/Vite version (multi-page, full SPA)
    ├── index.html          # Vite HTML entry point
    ├── vite.config.js      # Vite configuration
    ├── package.json        # Node.js dependencies & scripts
    ├── eslint.config.js    # ESLint configuration
    └── src/
        ├── main.jsx        # React application entry point
        ├── App.jsx         # Root component with routing setup
        ├── App.css         # App-level styles
        ├── index.css       # Global stylesheet & design system
        ├── assets/         # Static assets (images, icons, etc.)
        ├── components/     # Shared/reusable components
        │   ├── Navbar.jsx      # Fixed navigation bar with scroll effects
        │   ├── Footer.jsx      # Site-wide footer
        │   └── ScrollToTop.jsx # Scroll-restoration on route change
        └── pages/          # Individual page components
            ├── Home.jsx        # Landing / Hero page
            ├── About.jsx       # About the firm page
            ├── PracticeAreas.jsx # Practice areas detail page
            ├── OurTeam.jsx     # Team & founder profile page
            └── Contact.jsx     # Contact form & office locations page
```

---

## 🌐 Website Sections

The site is built around the following primary sections:

| Section | Description |
|---|---|
| **Home / Hero** | Cinematic hero with tagline, CTA buttons, and animated statistics counter (30+ years, 3 offices, 500+ cases) |
| **About** | Firm history, founding vision, and legacy of Chief Theodore A. Ezeobi SAN |
| **Practice Areas** | Three core disciplines: General Practice, Business/Commercial Law, Energy & Natural Resources |
| **Our Team** | Founder profile with achievements; invitation to consult the legal team |
| **Why Choose Us** | Six value propositions: Excellence, Reputation, Expertise, Client Relationships, Ethical Standards, Technology |
| **Mission** | Full mission statement with four strategic pillars |
| **Social Investment** | CSR programs including "Lawyers VS Cancer" initiative |
| **Offices** | Three office locations — Abuja (HQ), Lagos, and London |
| **Contact** | Interactive contact form with practice-area selector and full contact details |

---

## 🗺️ Routes (React SPA)

| Path | Page | Description |
|---|---|---|
| `/` | Home | Full hero landing page |
| `/about` | About | Firm history and background |
| `/practice` | Practice Areas | Detailed services overview |
| `/team` | Our Team | Team and founder page |
| `/contact` | Contact | Enquiry form and office locations |

---

## 🛠️ Tech Stack

### Static Version (`index.html`)
| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **Vanilla CSS** (`style.css`) | Styling, animations, responsive layout |
| **Vanilla JavaScript** (`script.js`) | Interactions, scroll effects, form handling |
| **Google Fonts** | *Cormorant Garamond* (headings) & *Inter* (body) |

### React SPA (`ep-react/`)
| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.2.4 | Component-based UI framework |
| **React DOM** | ^19.2.4 | DOM rendering |
| **React Router DOM** | ^7.13.1 | Client-side routing (5 pages) |
| **Framer Motion** | ^12.38.0 | Page transition animations (`AnimatePresence`) |
| **Lucide React** | ^0.577.0 | Icon library |
| **EmailJS Browser** | ^4.4.1 | Contact form email integration |
| **Vite** | ^8.0.1 | Build tool & dev server |
| **ESLint** | ^9.39.4 | Code linting |

---

## 🎨 Design System

The design follows a premium, dark-themed aesthetic inspired by high-end legal brands. All design tokens are defined as CSS custom properties in `src/index.css`.

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--teal` | `#2a8fa8` | Primary brand / CTA buttons |
| `--teal-dark` | `#1e6e82` | Hover states |
| `--teal-light` | `#3db5cf` | Accents, nav underlines |
| `--dark` | `#0a1422` | Page background |
| `--dark-2` | `#0f1d2e` | Footer background |
| `--dark-3` | `#152234` | Card backgrounds |
| `--text` | `#1a2332` | Body text |
| `--text-muted` | `#6b7c8d` | Secondary text |

### Typography
- **Headings**: `Cormorant Garamond` — elegant, classic serif font
- **Body / UI**: `Inter` — clean, modern sans-serif

### UI Utilities
- **Glassmorphism**: `.glass`, `.glass-light` — blur + semi-transparent backgrounds
- **Smooth transitions**: `--transition: all 0.38s cubic-bezier(0.4, 0, 0.2, 1)`
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-teal`
- **Border radius**: `--radius: 14px`, `--radius-lg: 22px`, `--radius-xl: 32px`

### Responsive Breakpoints
| Breakpoint | Layout Changes |
|---|---|
| `≤ 1024px` | Footer collapses to 2-column grid |
| `≤ 900px` | Desktop nav hidden; hamburger menu shown; reduced section padding |
| `≤ 600px` | Single-column footer; reduced page hero height |

---

## ✨ Features

### User Experience
- **Animated statistics counter** — numbers count up on page load using `IntersectionObserver`
- **Scroll reveal animations** — elements fade/slide in as they enter the viewport
- **Sticky navbar** — transitions from transparent to frosted-glass on scroll
- **Active nav link tracking** — highlights current section in the navigation
- **Smooth anchor scrolling** — all `#hash` links scroll smoothly with fixed header offset
- **Scroll-to-top button** — appears after scrolling 500px, with smooth scroll-back

### Mobile Experience
- **Slide-in mobile menu** — full-height side drawer with blur backdrop overlay
- **Hamburger toggle** — animated 3-bar icon transforms to × when open
- **Body scroll lock** — prevents background scroll when mobile menu is open

### Contact Form (Static Version)
- Client-side validation (required fields: Name, Email, Message)
- Visual error feedback (red border on empty required fields, auto-clears after 3s)
- Simulated send flow with loading state and success confirmation message

### Animations (React Version)
- **Page transitions**: Framer Motion `AnimatePresence` with `mode="wait"` for smooth in/out between routes
- **Scroll restoration**: `ScrollToTop` component resets scroll position on route change

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Running the React App (Recommended)

```bash
# Navigate to the React app directory
cd ep-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at: **http://localhost:5173**

### Opening the Static Version

Simply open `index.html` directly in any modern browser — no build step required.

```bash
# From the project root
start index.html   # Windows
open index.html    # macOS
```

---

## 📜 Available Scripts (React App)

From the `ep-react/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR at `localhost:5173` |
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

**Office Hours:**
- Abuja: Mon–Fri 9:00–17:00 · Saturday 10:00–14:00
- Lagos & London: Mon–Fri 9:00–17:00

---

## 📄 Legal

© 2026 Ezeobi & Partners. All Rights Reserved.  
*Exclusive Legal Practice — Built on a foundation of trust, expertise, and unwavering ethical standards.*
