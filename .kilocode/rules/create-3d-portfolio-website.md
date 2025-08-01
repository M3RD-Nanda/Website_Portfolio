---
type: "always_apply"
---

# AI Prompt: Create a 3D Portfolio Website for Muhammad Trinanda

## 1. Project Overview & Setup

### 1.1. Objective

The primary objective is to **create a sophisticated and modern 3D portfolio website for Muhammad Trinanda**. This website will serve as a personal showcase, highlighting his skills, experience, and projects as a web developer. Key features include the integration of a **3D Chibi character model** representing Muhammad, a **two-column layout** with a static sidebar and dynamic main content, and multiple pages for different types of information ("About", "Resume", "Portfolio", "Blog", "Contact"). The website must be **visually appealing with cool animations**, yet **optimal, effective, and efficient** in terms of performance, including fast load times, low resource usage, and mobile compatibility. The design should adhere to a specified color scheme and typography, creating a cohesive and professional online presence.

### 1.2. Technologies

The development of Muhammad Trinanda's 3D portfolio website will leverage a **modern technology stack** to achieve a sophisticated, performant, and interactive user experience. The core technologies include **React.js** as the primary JavaScript library for building the user interface components and managing application state. For the 3D graphics and animations, **Three.js** will be utilized, a powerful cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser. To seamlessly integrate Three.js within the React application, **React Three Fiber (R3F)** will be employed. R3F is a popular React renderer for Three.js, allowing developers to write Three.js code declaratively using JSX, which aligns well with React's development paradigm , . The build process and development server will be handled by **Vite**, a modern frontend build tool known for its fast server start and hot module replacement (HMR), significantly improving developer experience and build times , . For styling, **Tailwind CSS** is a strong candidate, a utility-first CSS framework that enables rapid UI development , . Additional libraries such as **Framer Motion** may be considered for adding sophisticated 2D animations , . For handling email functionality from the contact form, **EmailJS** is a viable option . Finally, **React Router** will be essential for implementing client-side routing between different pages of the portfolio , .

### 1.3. Initial Project Setup with Vite

To initiate the 3D portfolio website project, the first step involves **setting up a new React application using Vite** as the build tool and project scaffolder. This process begins by running the command `npm create vite@latest my-3d-portfolio -- --template react` in the terminal , . This command will create a new directory named `my-3d-portfolio` (or a name of choice, e.g., `muhammad-trinanda-portfolio`) and scaffold a basic React project structure within it using the official React template provided by Vite. The `--template react` flag ensures that the project is pre-configured with React and its necessary dependencies. After the project creation is complete, the next step is to navigate into the newly created project directory using `cd my-3d-portfolio`. Once inside the project directory, the base dependencies need to be installed by running `npm install` , . This command reads the `package.json` file (which Vite has generated with the React template) and installs all the listed dependencies, including React and ReactDOM, as well as Vite itself and its associated plugins for handling React. Following the installation of base packages, the development server can be started by executing `npm run dev` . This command will launch the Vite development server, which typically provides features like instant server start, extremely fast Hot Module Replacement (HMR), and rich features out-of-the-box. The console will usually display a local development URL (e.g., `http://localhost:5173`) where the initial React application can be viewed. It's also recommended to perform some initial cleanup, such as removing unnecessary boilerplate code and assets (e.g., `App.css`, `index.css`, Vite logo, etc.) that come with the template to prepare for custom development .

### 1.4. Installing Dependencies (Three.js, React Three Fiber, Tailwind CSS, etc.)

Once the initial React project is set up with Vite, the next crucial step is to **install the necessary dependencies** that will power the 3D features, styling, and routing of the portfolio website. The primary 3D libraries are **Three.js**, **React Three Fiber**, and **@react-three/drei**. These can be installed together using the command: `npm install three @react-three/fiber @react-three/drei` . `three` is the core 3D library, `@react-three/fiber` provides the React renderer for Three.js, and `@react-three/drei` offers a collection of useful helpers and abstractions for `react-three-fiber` , . For styling, **Tailwind CSS** will be installed along with its peer dependencies, PostCSS and Autoprefixer, using the command: `npm install -D tailwindcss postcss autoprefixer` . After installation, Tailwind CSS needs to be initialized by running `npx tailwindcss init` . This command generates a `tailwind.config.js` file where customizations like theme extensions, color palettes, and font families can be defined. It's also necessary to configure PostCSS by creating a `postcss.config.js` file (if not auto-generated) and adding TailwindCSS and Autoprefixer as plugins. For client-side routing, **React Router DOM** will be installed: `npm install react-router-dom` , . If animations for 2D UI elements are planned using **Framer Motion**, it can be added with `npm install framer-motion` . For handling email submissions from the contact form, **EmailJS** can be installed: `npm install emailjs-com` or `@emailjs/browser` (depending on the library version) . Additionally, if specific UI components like timelines for the resume page are needed, dedicated libraries such as `react-vertical-timeline-component` might be considered and installed accordingly. It's also good practice to install type definitions for JavaScript libraries if using TypeScript, for example, `npm i @types/three` for Three.js types .

### 1.5. Folder Structure

A **well-organized folder structure** is crucial for maintaining a scalable and manageable React project, especially one incorporating diverse technologies like 3D graphics and multiple pages. Based on common React practices and examples from similar projects , , a suggested structure for Muhammad Trinanda's portfolio is as follows:

```
/my-3d-portfolio (or /muhammad-trinanda-portfolio)
|-- /public
|   |-- /models (for 3D model files like .glb, .gltf)
|   |   |-- chibi-character.glb (placeholder for the Chibi model)
|   |-- /images (for static images used across the site)
|   |-- /videos (for video assets, if any)
|   |-- index.html
|   |-- favicon.ico
|-- /src
|   |-- /assets
|   |   |-- /fonts (for custom font files like Inter or Poppins)
|   |   |-- /icons (for SVG icons or icon fonts)
|   |-- /components
|   |   |-- common (reusable UI components like buttons, cards, loaders)
|   |   |   |-- Button.jsx
|   |   |   |-- Card.jsx
|   |   |   |-- Loader.jsx
|   |   |-- layout
|   |   |   |-- Sidebar.jsx
|   |   |   |-- Navbar.jsx
|   |   |   |-- Footer.jsx (if applicable)
|   |   |-- three (components related to Three.js/React Three Fiber)
|   |   |   |-- ChibiModel.jsx (component for the 3D Chibi character)
|   |   |   |-- Scene.jsx (main 3D scene setup)
|   |-- /pages
|   |   |-- AboutPage.jsx
|   |   |-- ResumePage.jsx
|   |   |-- PortfolioPage.jsx
|   |   |-- BlogPage.jsx
|   |   |-- ContactPage.jsx
|   |-- /context (for React context providers, if needed)
|   |-- /hooks (for custom React hooks)
|   |-- /utils (for utility functions, constants)
|   |-- App.jsx (or App.tsx)
|   |-- main.jsx (or main.tsx)
|   |-- index.css (or App.css, for global styles)
|   |-- tailwind.css (or integrated into index.css)
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- tailwind.config.js
|-- postcss.config.js
|-- README.md
```

In this structure, the `public/` directory contains static assets like 3D model files (in `public/models/`) . The `src/` directory houses all application source code, including `assets/` for processed assets, `components/` for reusable UI elements (categorized into `common`, `layout`, and `three` for 3D-specific components), `pages/` for route-specific components, and `scenes/` for complex 3D scene setups. This modular structure promotes separation of concerns and maintainability , .

# Muhammad Trinanda 3D Portfolio – Full Specification

---

## 1. Project Overview

| Key        | Value                                                               |
| ---------- | ------------------------------------------------------------------- |
| Name       | **Muhammad Trinanda 3D Portfolio**                                  |
| Purpose    | Personal showcase, demonstrating modern web-dev + 3D skills         |
| Owner      | Muhammad Trinanda – Web Developer                                   |
| Core Stack | React 18 + Vite 5 + Three.js (via React-Three-Fiber)                |
| Design     | Ultra-dark, minimal, tech-savvy with bright yellow accent (#FFC800) |
| Live Goal  | < 2 s first load, 60 fps on mobile, fully responsive                |

---

## 2. Quick Start

```bash
# 1. Scaffold
npm create vite@latest muhammad-trinanda-portfolio -- --template react
cd muhammad-trinanda-portfolio

# 2. Core deps
npm install
npm install three @react-three/fiber @react-three/drei
npm install react-router-dom framer-motion @emailjs/browser
npm install react-vertical-timeline-component
npm install @heroicons/react

# 3. Dev tools
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Run
npm run dev        # dev server  → http://localhost:5173
npm run build      # production   → /dist
npm run preview    # local prod test
```

---

## 3. Global Design System

| Token            | Value / Utility Class                                |
| ---------------- | ---------------------------------------------------- |
| Background       | `#1E1E1E` → `bg-primary-bg`                          |
| Card / Surface   | `#282828` → `bg-card-bg`                             |
| Text             | `#FFFFFF` → `text-primary-text`                      |
| Accent           | `#FFC800` → `text-accent-yellow`, `bg-accent-yellow` |
| Font             | **Inter** (Google Fonts)                             |
| Sidebar Width    | `w-72` (18 rem) – fixed, static                      |
| Content Overflow | `flex-1 overflow-y-auto`                             |

**Tailwind Config Snippet**

```js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1E1E1E",
        "card-bg": "#282828",
        "primary-text": "#FFFFFF",
        "accent-yellow": "#FFC800",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
```

---

## 5. Component-by-Component Specs

### 5.1 Sidebar (Static, Left)

| Element      | Details                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| Avatar       | 3D viewport (≈ 240 × 240 px) hosting `ChibiModel`. Fallback `<img>` while loading.                            |
| Name         | `<h1 class="text-xl font-bold">Muhammad Trinanda</h1>`                                                        |
| Role Button  | `<button class="mt-2 px-4 py-1 bg-accent-yellow text-primary-bg rounded-full text-sm">Web Developer</button>` |
| Contact List | List with Heroicons (yellow): Email, Phone, DOB, Location → data-driven map                                   |
| Social Icons | LinkedIn, GitHub, Twitter, Instagram – 24 px icons, yellow hover                                              |

### 5.2 Navbar (Dynamic, Top-Right)

- Horizontal flex menu: About | Resume | Portfolio | Blog | Contact
- Uses React-Router `<NavLink>`
- Active state: `text-accent-yellow border-b-2 border-accent-yellow`

---

## 6. Page Content Details

### About

Sections rendered as scroll-cards:

1. Introduction paragraph
2. Services (grid icons)
3. Testimonials (carousel)
4. Client logos (grid)

---

### Resume

#### Education Timeline

- Icon: `AcademicCapIcon`
- Items:  
  • **Universitas Islam Negeri Sumatera Utara** – 2020-2024 – _Bachelor of Computer Science_  
  • **SMA Negeri 3 Medan** – 2017-2020

#### Experience Timeline

- Icon: `BriefcaseIcon`
- Items:
  1. **Business Intelligence Analyst (Intern)** – PT Bank Muamalat – _Mar 2025_ – _Built BI dashboards_
  2. **Head of PDD Division** – KKN Tematik – _Jul-Aug 2024_ – _Led documentation & PR_
  3. **Administrative Staff Intern** – Local Gov Office – _Jan-Feb 2024_ – _Digital archiving_
  4. **Volunteer** – Accounting Fair (ACF V) – _Oct-Dec 2022_ – _Event logistics_

#### Skills

Animated progress bars (Framer-Motion + custom component) – yellow fill.  
Skills & levels: Office (95 %), Graphic Design (90 %), Accounting (90 %), Web Design (85 %), Database (85 %), Video Design (80 %).

---

### Portfolio

| Feature      | Spec                                            |
| ------------ | ----------------------------------------------- |
| Filters      | All / Web design / Graphic Design / Video       |
| Grid         | Responsive masonry, 3 columns → 1 column        |
| Card         | Image (16:9), title, category tag (yellow pill) |
| Modal / Page | Opens detailed view (stretch goal)              |

Sample projects:

- _Journal Website 3.0_ – Web design
- _Photoshop & Illustrator_ – Graphic Design
- _Premiere Pro Showreel_ – Video

---

### Blog

| Feature    | Spec                                        |
| ---------- | ------------------------------------------- |
| Layout     | 2-column cards → 1 column on mobile         |
| Card       | Image, date, title, 2-line excerpt          |
| Pagination | Load-more button (infinite scroll optional) |

---

### Contact

| Element      | Spec                                                               |
| ------------ | ------------------------------------------------------------------ |
| Map          | Embedded Google Maps – dark theme – centered on _Medan, Indonesia_ |
| Form         | Name, Email, Message – validated                                   |
| Submit       | Yellow button with `PaperAirplaneIcon`                             |
| EmailJS flow | Sends to `m.3rd.nanda@gmail.com` without backend                   |
| Extra links  | Direct email & LinkedIn icon repeated for redundancy               |

---

## 7. 3D Chibi Avatar – Implementation Guide

1. **Model**  
   _Placeholder_ – use free `chibi_character.glb` (CC-0) from Sketchfab.  
   _Future_ – replace with custom 3D scan or AI-generated GLB.

2. **Loading**

   ```jsx
   // ChibiModel.jsx
   import { useGLTF } from "@react-three/drei";
   export default function ChibiModel(props) {
     const { scene } = useGLTF("/models/chibi_character.glb");
     return <primitive object={scene} {...props} />;
   }
   ```

3. **Scene Setup (Sidebar)**

   ```jsx
   <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
     <ambientLight intensity={0.7} />
     <directionalLight position={[5, 5, 5]} intensity={1} />
     <Suspense fallback={null}>
       <ChibiModel scale={0.8} position={[0, -1, 0]} />
     </Suspense>
   </Canvas>
   ```

4. **Subtle Animations**
   - Continuous Y-axis rotation (0.5 rad/s)
   - Hover bobbing (± 0.1 units) via `useFrame`

---

## 8. Performance & Best Practices

| Area           | Measures                                                         |
| -------------- | ---------------------------------------------------------------- |
| Bundle size    | Lazy-loaded pages (`React.lazy`, `Suspense`), tree-shaking, gzip |
| Images         | WebP/AVIF, responsive `srcset`, `loading="lazy"`                 |
| 3D assets      | Draco compression, low-poly placeholder, dispose on unmount      |
| Lighthouse KPI | Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90                   |
| Mobile UX      | Touch targets ≥ 48 px, viewport meta, orientation handling       |

---

## 9. Integrations Cheat-Sheet

| Service      | How                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------- |
| **LinkedIn** | Icon links to `https://www.linkedin.com/in/mtrinanda/` (`target="_blank" rel="noopener"`)          |
| **EmailJS**  | `.env` variables: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` |

---

## 10. Deployment

1. `npm run build` → output `/dist`
2. Drop `/dist` to:
   - **Netlify** – drag & drop or GitHub auto-deploy
   - **Vercel** – `vercel --prod`
   - **GitHub Pages** – via `gh-pages` branch

---

## 11. Final Checklist

- [ ] All routes render correctly
- [ ] Sidebar sticky on desktop, collapsible on mobile
- [ ] 3D model loads within 2 s, animates smoothly
- [ ] Contact form delivers email successfully
- [ ] Cross-browser passed (Chrome, Firefox, Safari, Edge)
- [ ] Mobile 60 fps, no horizontal scroll
- [ ] Accessibility: color contrast, alt texts, focus states

---
