# CRED Garage Inspired Dashboard

A modern, responsive web dashboard inspired by CRED Garage, built with Next.js, TailwindCSS, and Framer Motion. This project demonstrates best-in-class UI/UX, smooth animations, and attention to detail, reflecting real-world frontend engineering standards.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React 19)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **UI Components:** Custom, with [Radix UI](https://www.radix-ui.com/) primitives
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Charts:** [Recharts](https://recharts.org/) (for reward points)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Mock API:** [MSW (Mock Service Worker)](https://mswjs.io/)

---

## ✨ Features Overview

### 👤 User Profile Summary
- Avatar, name, level badge, and animated XP progress bar.
- Smooth entrance and progress animations.

### 🎁 Benefits Section (Card Tile Layout)
- Responsive grid of benefit cards (discounts, offers, vouchers).
- Each card includes an icon, title, description, and CTA button.
- Animated card transitions and hover effects.

### 💎 Reward Points Progress
- Radial bar chart visualizing reward points using Recharts.
- Animated count-up and progress transitions.

### 🌓 Dark/Light Mode Toggle
- Persistent theme toggle (light, dark, system) using next-themes.
- Accessible and visually appealing toggle UI.

### ⏳ Loading Skeletons & Transitions
- Skeleton components for all major sections during data loading.
- Smooth fade-in and layout transitions.

### 💫 Smooth Animations
- Framer Motion powers all layout, entrance, and hover animations.

---

## 🏗️ Bonus Implementations

- **Mock API Layer:** All data (e.g., benefits) is served via MSW for realistic loading and testing.
- **Chart Library:** Reward points use a radial chart for engaging data visualization.
- **Componentized Skeletons:** Each major section has a dedicated skeleton for loading states.
- **Mobile-First Responsive Design:** Fully responsive, works seamlessly on all devices.

---

## 📸 Screenshots

> _Add screenshots or a Loom walkthrough here for extra clarity and impact!_

---

## 🛠️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd cred-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 🌐 Live Demo

> _Deployed on Vercel: [your-vercel-link](https://your-vercel-link.vercel.app)_

---

## 📁 Project Structure

- `src/components/` – All UI components (ProfileSummary, BenefitsSection, RewardChart, etc.)
- `src/components/ui/` – Reusable UI primitives (Button, Dropdown, Skeleton)
- `src/mocks/` – Mock API handlers (MSW)
- `src/lib/` – Utility functions
- `src/app/` – Next.js app directory (pages, layout, global styles)

---


