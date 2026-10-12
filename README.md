# PacketCare — Mobile App Product Landing Page

Official product landing page for **PacketCare: Mobile-Based Child Immunization Notification and Tracking System for Android**.

Built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for healthcare administrators, Barangay Health Workers (BHWs), parents, and academic evaluators.

---

## 🌟 Key Features of the Landing Page

- **Hero & Interactive Smartphone Frame:** Live mockup simulating the PacketCare Android app with the official DOH EPI vaccine timeline, child status badges (Completed, Due, Upcoming), and incoming Semaphore SMS alerts.
- **DOH EPI Routine Immunization Roadmap:** Complete table detailing the 13 required childhood doses from birth to 12 months (BCG, Hep B, Pentavalent 1-3, OPV 1-3, IPV, PCV 1-3, MMR) with 28-day safety intervals and preventable disease protection.
- **Interactive Role Showcase:** Switch between the **Parent View** (Digital Bakuna Card, milestone countdown) and the **RHU Health Worker View** (Community Child Registry, Defaulter Tracker & 1-Click SMS dispatch).
- **Direct APK Download:** Bundled with the official Android APK installer (`packetcare.apk`, v1.0.0, 120.8 MB), checksum verification, and illustrated installation modal for Android 8.0+.
- **Healthcare Dark Mode Design System:** Sleek, high-contrast dark theme utilizing deep navy tones (`#0B1220`, `#101B2D`), glowing medical blue (`#3B82F6`) and emerald accents, dark glassmorphism, and responsive typography.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 3.4 (Custom healthcare color tokens & glassmorphism)
- **Icons:** Lucide React
- **Confetti:** Canvas Confetti
- **Deployment Ready:** Static `dist/` build compatible with GitHub Pages, Vercel, Netlify, or Apache/Nginx.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Runs at `http://localhost:5174/`.

### 3. Build for Production
```bash
npm run build
```
Generates production-optimized static assets in the `dist/` directory, including `/downloads/packetcare.apk`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📱 Mobile App Credentials (Demo Mode)

The companion mobile app (`paket_care`) includes demo data enabled by default. Visitors can sign in with:

| Role | Email | Password | Scope |
|------|-------|----------|-------|
| **Parent View** | `maria@email.com` | `password123` | Child Bakuna card, schedule timeline, SMS alerts |
| **RHU Staff View** | `ana.bhw@email.com` | `password123` | Community child registry, defaulter tracking, SMS dispatch |

---

## 📂 Project Structure

```
packetcare_landingpage/
├── dist/                     # Optimized production output
├── public/
│   ├── downloads/
│   │   └── packetcare.apk    # Official Android build (120.8 MB)
│   └── favicon.svg           # Health shield brand icon
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx          # Fragile paper card vs PacketCare digital
│   │   ├── BrandLogo.jsx             # Vector healthcare cross & shield logo
│   │   ├── CareBackground.jsx        # Ambient glow & grid overlay
│   │   ├── DownloadSection.jsx       # APK specs & download card
│   │   ├── DownloadToast.jsx         # Bottom-right download feedback toast
│   │   ├── EpiScheduleSection.jsx    # DOH EPI routine vaccines table
│   │   ├── FaqSection.jsx            # Interactive accordion FAQ
│   │   ├── FeaturesSection.jsx       # 8-card capability grid with filters
│   │   ├── FinalCtaSection.jsx       # High-conversion closing banner
│   │   ├── Footer.jsx                # Technical architecture & links
│   │   ├── Hero.jsx                  # Hero headline & 3D mobile mockup
│   │   ├── HowItWorksSection.jsx     # 4-step workflow (Register to Protect)
│   │   ├── InstallModal.jsx          # Android APK sideload instructions
│   │   ├── InteractiveAppShowcase.jsx# Interactive Parent/BHW/Admin preview
│   │   ├── LiveStatsBar.jsx          # 4 trust metrics
│   │   ├── Navbar.jsx                # Sticky responsive header
│   │   └── UserRolesSection.jsx      # Role-based feature comparison
│   ├── data/
│   │   └── config.js                 # Central product configuration & content
│   ├── utils/
│   │   └── confetti.js               # Celebratory particles trigger
│   ├── App.jsx                       # Main application shell
│   ├── index.css                     # Tailwind layers & custom scrollbar
│   └── main.jsx                      # React 19 root entrypoint
├── index.html                        # SEO meta tags & Inter typography
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License

Developed for educational, capstone, and public healthcare research evaluation.

