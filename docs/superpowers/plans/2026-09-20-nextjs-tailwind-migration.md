# Aikido FE: Next.js + Tailwind + shadcn Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild aikido-fe as a Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui app living in `web/` on branch `migrate/nextjs`, with full visual/functional parity to the current CRA site, and update the Vercel project config to build it.

**Architecture:** New app scaffolded in `web/` (sibling to the existing CRA app at repo root, which stays untouched until cutover) so there is zero file collision during migration. Components are split into `components/ui/` (shadcn primitives, re-themed) and `components/` (brand pieces: Hero, Navbar, Footer, About, DojoList/Card, ContactForm/Info). Data lives in `lib/dojos.ts`. All interactive pieces are `"use client"`; everything else is a Server Component by default.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui (Button, Input, Textarea, Card, NavigationMenu, Sonner toast), Formik + Yup, Swiper, axios, Cloudflare Turnstile, lucide-react.

**Spec:** `docs/superpowers/specs/2026-09-20-nextjs-tailwind-migration-design.md`

## Global Constraints

- App lives at `web/` inside the existing `aikido-fe` repo, on branch `migrate/nextjs`. Never touch `src/`, `public/`, `package.json` at repo root (the live CRA app) during this plan.
- TypeScript, not JavaScript, for every new file.
- No `bootstrap`, `react-bootstrap`, `bootstrap-icons`, `react-bootstrap-icons`, `react-router-dom`, `react-i18next`, `i18next` in `web/package.json`.
- The navbar **must** render the existing logo `iwamashinshinlogo-2.png` as a `next/image` in the brand slot — never replaced by text or an icon.
- ContactForm POST target stays `https://aikido-be.vercel.app/send-mail`, payload shape unchanged: `{ name, email, phone, message, surname, captchaToken }`. Turnstile site key: `0x4AAAAAAE-VIrYvNB8Er7Ov`.
- shadcn components are re-themed with the brand tokens (blue `#0000fe`, black, Montserrat) — never left at shadcn defaults.
- No i18n, no CMS, no blog route activation — out of scope per spec.

---

### Task 1: Scaffold the Next.js app in `web/`

**Files:**
- Create: `web/` (via `create-next-app`)
- Modify: none outside `web/`

**Interfaces:**
- Produces: a running Next.js dev server at `web/`, Tailwind configured, App Router, `src/` disabled (files live at `web/app`, `web/components`, `web/lib` directly — no extra `src/` nesting, to keep paths short since the repo root already has its own `src/`).

- [ ] **Step 1: Create the branch**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git checkout -b migrate/nextjs
```

- [ ] **Step 2: Scaffold Next.js**

```bash
npx create-next-app@latest web \
  --typescript --tailwind --app --eslint \
  --no-src-dir --import-alias "@/*"
```

When prompted, accept defaults (Turbopack: yes if offered).

- [ ] **Step 3: Verify the dev server runs**

```bash
cd web && npm run dev &
sleep 5
curl -s http://localhost:3000 | grep -o "<title>[^<]*</title>"
kill %1
```

Expected: prints the default Next.js title tag (`<title>Create Next App</title>` or similar) with no errors in the command output.

- [ ] **Step 4: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Scaffold Next.js app in web/ for migration"
```

---

### Task 2: Install shadcn/ui and re-theme it to the brand palette

**Files:**
- Create: `web/components.json` (shadcn config, generated)
- Create: `web/components/ui/button.tsx`, `input.tsx`, `textarea.tsx`, `card.tsx`, `navigation-menu.tsx`, `sonner.tsx` (generated)
- Modify: `web/app/globals.css`
- Modify: `web/tailwind.config.ts`

**Interfaces:**
- Produces: `Button`, `Input`, `Textarea`, `Card`/`CardHeader`/`CardContent`, `NavigationMenu*`, `Toaster`/`toast()` from `sonner`, all importable from `@/components/ui/*`, styled with the brand tokens below.

- [ ] **Step 1: Init shadcn**

```bash
cd web
npx shadcn@latest init -d
```

- [ ] **Step 2: Add the components this migration needs**

```bash
npx shadcn@latest add button input textarea card navigation-menu sonner
npm install lucide-react
```

- [ ] **Step 3: Set the brand tokens in `web/app/globals.css`**

Replace the `:root` and `.dark` color blocks shadcn generated with:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 4%;
  --primary: 231 100% 50%;        /* #0000fe */
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 4%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 40%;
  --accent: 0 0% 96%;
  --accent-foreground: 0 0% 4%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 0 0% 89%;
  --input: 0 0% 89%;
  --ring: 231 100% 50%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --primary: 231 100% 65%;
  --primary-foreground: 0 0% 4%;
  --secondary: 0 0% 12%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 12%;
  --muted-foreground: 0 0% 65%;
  --accent: 0 0% 12%;
  --accent-foreground: 0 0% 98%;
  --border: 0 0% 18%;
  --input: 0 0% 18%;
  --ring: 231 100% 65%;
}
```

- [ ] **Step 4: Set the brand font in `web/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "Iwama Shinshin Aiki Shuren Kai Uruguay",
  description: "Aikido tradicional en Uruguay. Alumnos directos de Hitohira Saito soke.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify the build compiles**

```bash
cd web && npm run build
```

Expected: `Compiled successfully`, no TS/ESLint errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Install shadcn/ui and apply brand theme tokens"
```

---

### Task 3: Copy static assets

**Files:**
- Create: `web/public/img/*` (copied)
- Create: `web/public/favicon.ico`, `web/public/manifest.json`, etc. (copied)

**Interfaces:**
- Produces: every image path referenced by later tasks (`/img/iwamashinshinlogo-2.png`, `/img/aikidoJefeBackground.jpg`, `/img/aikidoJefeMobile.jpg`, `/img/img-aiki-daijin.png`, `/img/Kanji-Aikido-PNG-Download-Image.png`, `/img/paselibreLogo.svg`) resolves under `web/public/`.

- [ ] **Step 1: Copy the image directory and root static files**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
cp -r public/img web/public/img
cp public/favicon.ico public/favicon-16x16.png public/favicon-32x32.png \
   public/apple-touch-icon.png public/android-chrome-192x192.png \
   public/android-chrome-512x512.png public/manifest.json public/robots.txt \
   web/public/
```

- [ ] **Step 2: Verify the logo file landed**

```bash
ls -la web/public/img/iwamashinshinlogo-2.png
```

Expected: file exists, non-zero size.

- [ ] **Step 3: Commit**

```bash
git add web/public
git commit -m "Copy static assets into web/public"
```

---

### Task 4: Navbar (with the required PNG logo) and Footer

**Files:**
- Create: `web/components/navbar.tsx`
- Create: `web/components/footer.tsx`
- Modify: `web/app/layout.tsx`

**Interfaces:**
- Produces: `Navbar` (default export), `Footer` (default export), both Server Components (no `"use client"` needed, no client state).

- [ ] **Step 1: Write `web/components/navbar.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
  { href: "/about", label: "Sobre Aikido" },
  { href: "/dojo", label: "Dojo" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-6 py-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/img/iwamashinshinlogo-2.png"
          alt="Iwama Shinshin Aiki Shuren Kai"
          width={200}
          height={60}
          priority
          className="h-auto w-[140px] sm:w-[200px]"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
```

- [ ] **Step 2: Write `web/components/footer.tsx`**

```tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col items-center bg-black pb-3 pt-1 text-center text-white">
      <span>Copyright © {year}</span>
      <span>Iwama Shinshin Aiki Shuren Kai Uruguay</span>
    </footer>
  );
}
```

- [ ] **Step 3: Wire both into `web/app/layout.tsx`**

Add the imports and render `<Navbar />` before `{children}` and `<Footer />` after it, inside `<body>`:

```tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// ...keep the Manrope/Toaster imports from Task 2...

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify visually**

```bash
cd web && npm run dev &
sleep 5
curl -s http://localhost:3000 | grep -o "iwamashinshinlogo-2.png"
kill %1
```

Expected: prints `iwamashinshinlogo-2.png` (confirms the logo `<img>` is rendered in the HTML).

- [ ] **Step 5: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add Navbar (with brand logo) and Footer"
```

---

### Task 5: Hero component

**Files:**
- Create: `web/components/hero.tsx`

**Interfaces:**
- Produces: `Hero` (default export), Server Component, no props.
- Consumes: `/img/aikidoJefeBackground.jpg`, `/img/paselibreLogo.svg` from `web/public/img` (Task 3).

- [ ] **Step 1: Write `web/components/hero.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-black text-white">
      <Image
        src="/img/aikidoJefeBackground.jpg"
        alt=""
        fill
        priority
        className="object-cover object-[top_right] opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-[11ch] text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
            Aikido Tradicional
          </h1>
          <h4 className="max-w-[26ch] text-xl font-normal text-neutral-300 sm:text-2xl">
            Alumnos directos de{" "}
            <b className="font-semibold text-[#5b7fff]">Hitohira Saito soke</b>.
          </h4>
          <Link
            href="/contact"
            className="w-fit rounded-md bg-[#0000fe] px-6 py-3 text-lg font-medium text-white transition hover:bg-[#0033a0]"
          >
            CONTACTANOS
          </Link>

          <div className="mt-10 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Membresía
            </span>
            <a href="https://paselibre.uy/" target="_blank" rel="noreferrer">
              <Image
                src="/img/paselibreLogo.svg"
                alt="Pase libre"
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the build compiles**

```bash
cd web && npm run build
```

Expected: `Compiled successfully`.

- [ ] **Step 3: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add Hero component"
```

---

### Task 6: About section

**Files:**
- Create: `web/components/about-aiki.tsx`

**Interfaces:**
- Produces: `AboutAiki` (default export), Server Component, no props.

- [ ] **Step 1: Write `web/components/about-aiki.tsx`**

```tsx
import Image from "next/image";

export default function AboutAiki() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16">
      <article className="mb-12 grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-[auto_1fr]">
        <Image
          src="/img/img-aiki-daijin.png"
          alt="Aiki Daijin"
          width={220}
          height={220}
          className="mx-auto h-auto w-40 sm:w-56"
        />
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            Conservamos y compartimos la gran influencia de mi padre Morihiro
            manteniéndonos fiel a la herencia técnica y a la espiritualidad
            dejada por el Fundador Morihei Ueshiba.
          </p>
          <p className="text-lg">
            Continuamente tratamos de mejorarnos a nosotros mismos a través del
            intensivo y práctico sistemática de kihon. Creemos que cada
            entrenamiento y cada sesión es una oportunidad única para sentirse
            más cerca del Fundador. Yo soy el primero en aplicar día a día,
            este entrenamiento constante.
          </p>
          <p className="text-right text-lg">
            Hitohira Saito
            <span className="block text-sm">
              Iwama Shinshin Aiki Shurenkai.
            </span>
          </p>
        </div>
      </article>

      <article className="w-full">
        <h3 className="bg-black p-3 text-white">
          Más sobre Iwama ShinShin Aikishurenkai
        </h3>
        <iframe
          className="mt-4 aspect-video w-full"
          src="https://www.youtube.com/embed/CoUlKdN-kgQ"
          title="Entrevista a Saito Hitohira - Iwama ShinShin Aiki Shurenkai"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </article>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add AboutAiki component"
```

---

### Task 7: Dojo data, DojoCard and DojoList

**Files:**
- Create: `web/lib/dojos.ts`
- Create: `web/components/dojo-card.tsx`
- Create: `web/components/dojo-list.tsx`

**Interfaces:**
- Produces: `Dojo` type and `dojos: Dojo[]` from `web/lib/dojos.ts`; `DojoCard({ dojo }: { dojo: Dojo })` default export; `DojoList` default export (client component, no props).
- Consumes: `Card`, `CardContent`, `CardHeader` from `@/components/ui/card` (Task 2).

- [ ] **Step 1: Write `web/lib/dojos.ts`**

```ts
export interface Dojo {
  name: string;
  branch_off: string;
  days: string[];
  hours: string;
  address: string;
  gmap_src: string;
  phone: string;
  phone_other?: string;
  sensei: string[];
}

export const dojos: Dojo[] = [
  {
    name: "Shin Dojo Aikido",
    branch_off: "Shin Dojo",
    days: ["Martes", "Jueves"],
    hours: "10:00 a 11:30 & 19:00 a 20:30",
    address: "Av. Agraciada 2522",
    gmap_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.7620617917712!2d-56.19423922383902!3d-34.886810506683744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80181d83fc97%3A0x193b5148a6a0b1cc!2sFANCAP!5e0!3m2!1ses-419!2suy!4v1654911323603!5m2!1ses-419!2suy",
    phone: "091461534",
    phone_other: "",
    sensei: ["Marcos Sosa"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "La Blanqueada",
    days: ["Lunes", "Miércoles"],
    hours: "20:30 a 22:30",
    address: "Jaime Cibils 2865a",
    gmap_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6545.837527811679!2d-56.162121695766366!3d-34.8833861864459!2m3!1f0!2f0!3f0!3m2!1s0x959f80f975a2b16d%3A0xeb3e4252e46966e6!2sURUGUAY%20AIKI%20SHUREN%20DOJO!5e0!3m2!1ses-419!2suy!4v1654909702367!5m2!1ses-419!2suy",
    phone: "099193526",
    phone_other: "098345951",
    sensei: ["Aldo Villagra", "Marcello Scarpa"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "Yamato Dojo",
    days: ["Martes", "Jueves"],
    hours: "19:00 a 20:30",
    address: "Pasaje Claudio Garcia 970",
    gmap_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1636.6560494631021!2d-56.20606558255615!3d-34.873508399999984!2m3!1f0!2f0!3f0!3m2!1s0x959f7f40ad052e79%3A0x2c174a8eccfb931a!2sYamato%20Dojo%20-%20Uruguay%20Budokan!5e0!3m2!1ses-419!2suy!4v1654910671050!5m2!1ses-419!2suy",
    phone: "099507411",
    phone_other: "",
    sensei: ["Andrés Camargo"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "Asociación Kokyu Dojo",
    days: ["Martes", "Jueves"],
    hours: "19:30 a 21:30",
    address: "Matto Grosso 557 esq Av. Garzón",
    gmap_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.889544417215!2d-56.22738898747992!3d-34.80872066824264!2m3!1f0!2f0!3f0!3m2!1s0x95a1d4bd4c04cd23%3A0x5140c29932c8e97f!2sMatto%20Grosso%2C%2012500%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1748563734966!5m2!1sen!2suy",
    phone: "097212971",
    phone_other: "",
    sensei: ["Walter Moyano"],
  },
];
```

- [ ] **Step 2: Write `web/components/dojo-card.tsx`**

```tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Dojo } from "@/lib/dojos";

export default function DojoCard({ dojo }: { dojo: Dojo }) {
  return (
    <Card className="mx-auto my-6 max-w-4xl overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{dojo.branch_off}</h3>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <iframe
          src={dojo.gmap_src}
          title={`Mapa - ${dojo.branch_off}`}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">Dirección</h4>
            <p>{dojo.address}</p>
          </div>
          <div>
            <h4 className="font-semibold">Teléfono</h4>
            <p>{dojo.phone}</p>
          </div>
          <div>
            <h4 className="font-semibold">Días y horarios</h4>
            <p>
              {dojo.days.join(" y ")} de {dojo.hours}
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Representante</h4>
            <p>{dojo.sensei.join(" & ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 3: Install Swiper**

```bash
cd web && npm install swiper
```

- [ ] **Step 4: Write `web/components/dojo-list.tsx`**

```tsx
"use client";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { dojos } from "@/lib/dojos";
import DojoCard from "@/components/dojo-card";

export default function DojoList() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={32}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="pb-10"
    >
      {dojos.map((dojo) => (
        <SwiperSlide key={`${dojo.name}-${dojo.branch_off}`}>
          <DojoCard dojo={dojo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
```

- [ ] **Step 5: Verify the build compiles**

```bash
cd web && npm run build
```

Expected: `Compiled successfully`.

- [ ] **Step 6: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add dojos data, DojoCard and DojoList"
```

---

### Task 8: ContactInfo component

**Files:**
- Create: `web/components/contact-info.tsx`

**Interfaces:**
- Produces: `ContactInfo` (default export), Server Component, no props.

- [ ] **Step 1: Write `web/components/contact-info.tsx`**

```tsx
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-3">
      <div className="w-full">
        <h5 className="mb-5 bg-black p-2 pl-3 font-bold text-white">
          Información de contacto
        </h5>
        <dl className="flex items-center gap-3">
          <dt><MapPin className="h-5 w-5" /></dt>
          <dd>Bv. Gral. Artigas 2498</dd>
        </dl>
        <dl className="flex items-center gap-3">
          <dt><Phone className="h-5 w-5" /></dt>
          <dd>+598 91 461 534</dd>
        </dl>
      </div>
      <Image
        src="/img/Kanji-Aikido-PNG-Download-Image.png"
        alt="Aikido"
        width={160}
        height={160}
        className="h-auto w-40 self-center opacity-80"
      />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add ContactInfo component"
```

---

### Task 9: Turnstile helper

**Files:**
- Create: `web/lib/turnstile.ts`

**Interfaces:**
- Produces: `loadTurnstileScript(): Promise<TurnstileAPI>`, `TURNSTILE_SITE_KEY: string` constants, exported for use in Task 10.

- [ ] **Step 1: Write `web/lib/turnstile.ts`**

```ts
export const TURNSTILE_SITE_KEY = "0x4AAAAAAE-VIrYvNB8Er7Ov";
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

export interface TurnstileRenderOptions {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

export interface TurnstileAPI {
  render: (el: HTMLElement, opts: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileAPI;
  }
}

export function loadTurnstileScript(): Promise<TurnstileAPI> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(window.turnstile!));
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.turnstile!);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add Turnstile loader helper"
```

---

### Task 10: ContactForm (shadcn inputs + Formik/Yup + Turnstile + honeypot)

**Files:**
- Create: `web/components/contact-form.tsx`

**Interfaces:**
- Consumes: `TURNSTILE_SITE_KEY`, `loadTurnstileScript` from `@/lib/turnstile` (Task 9); `Button`, `Input`, `Textarea` from `@/components/ui/*` (Task 2); `toast` from `sonner`.
- Produces: `ContactForm` (default export), `"use client"`, no props — owns its own toast feedback (replaces the old `setShow`/`setStatus` prop pattern from the CRA version).

- [ ] **Step 1: Install Formik/Yup**

```bash
cd web && npm install formik yup axios
```

- [ ] **Step 2: Write `web/components/contact-form.tsx`**

```tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TURNSTILE_SITE_KEY, loadTurnstileScript } from "@/lib/turnstile";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  surname: string;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  surname: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Ingrese un nombre")
    .matches(/^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/, "Ingrese solo letras")
    .max(50, "Máximo 50 caracteres")
    .min(3, "Mínimo 3 caracteres"),
  email: Yup.string()
    .required("Ingrese un e-mail")
    .email("Ingrese un e-mail válido")
    .max(128, "Máximo 128 caracteres"),
  phone: Yup.string().matches(
    /^(?!\s*$)[0-9*#\-+()\s]*$/,
    "Ingrese un número válido"
  ),
  message: Yup.string()
    .required("Ingrese un mensaje")
    .matches(
      /^(?!\s*$)[A-Za-zÀ-ÖØ-öø-ÿ0.,\s]*$/,
      "Ingrese un mensaje válido, sin caracteres especiales"
    )
    .max(500, "Máximo 500 caracteres"),
  surname: Yup.string(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(
    (turnstile: NonNullable<Window["turnstile"]>) => {
      if (!turnstileRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(""),
        "error-callback": () => setCaptchaToken(""),
      });
    },
    []
  );

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then((turnstile) => {
        if (!cancelled) renderTurnstile(turnstile);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderTurnstile]);

  const resetCaptcha = () => {
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setCaptchaToken("");
  };

  const handleSubmit = async (values: ContactValues) => {
    if (!captchaToken) {
      toast.error("Esperá a que se complete la verificación anti-bot");
      return;
    }
    if (values.surname !== "") {
      toast.error("Algo salió mal. Intentá nuevamente.");
      return;
    }
    try {
      setLoading(true);
      await axios.post("https://aikido-be.vercel.app/send-mail", {
        ...values,
        captchaToken,
      });
      toast.success("Mensaje enviado.");
    } catch {
      toast.error("Algo salió mal. Intentá nuevamente.");
    } finally {
      setLoading(false);
      resetCaptcha();
    }
  };

  return (
    <div className="px-3">
      <h5 className="mb-4 bg-black p-2 pl-3 font-bold text-white">
        Envíanos tu consulta
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4">
            <Field
              type="text"
              name="surname"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute -left-[9999px] -top-[9999px] h-px w-px overflow-hidden"
            />

            <div>
              <label className="mb-1 block text-sm font-medium">Nombre</label>
              <Field as={Input} name="name" placeholder="Ingrese su nombre..." />
              {touched.name && errors.name && (
                <span className="text-sm text-destructive">{errors.name}</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">E-mail</label>
              <Field as={Input} type="email" name="email" placeholder="Ingrese su E-mail..." />
              {touched.email && errors.email && (
                <span className="text-sm text-destructive">{errors.email}</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Teléfono</label>
              <Field as={Input} name="phone" placeholder="Ingrese su teléfono..." />
              {touched.phone && errors.phone && (
                <span className="text-sm text-destructive">{errors.phone}</span>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Mensaje</label>
              <Field as={Textarea} name="message" rows={4} placeholder="Ingrese un mensaje..." />
              {touched.message && errors.message && (
                <span className="text-sm text-destructive">{errors.message}</span>
              )}
            </div>

            <div ref={turnstileRef} />

            <Button type="submit" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
```

- [ ] **Step 3: Verify the build compiles**

```bash
cd web && npm run build
```

Expected: `Compiled successfully`.

- [ ] **Step 4: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add ContactForm with Turnstile and honeypot"
```

---

### Task 11: Pages — home, contact, about, dojo

**Files:**
- Modify: `web/app/page.tsx`
- Create: `web/app/contact/page.tsx`
- Create: `web/app/about/page.tsx`
- Create: `web/app/dojo/page.tsx`

**Interfaces:**
- Consumes: `Hero` (Task 5), `DojoList` (Task 7), `AboutAiki` (Task 6), `ContactForm` (Task 10), `ContactInfo` (Task 8).

- [ ] **Step 1: Write `web/app/page.tsx`**

```tsx
import Hero from "@/components/hero";
import DojoList from "@/components/dojo-list";
import AboutAiki from "@/components/about-aiki";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 bg-neutral-100 p-3 text-center text-black">
          Centros de entrenamiento
        </h1>
        <DojoList />
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 bg-neutral-100 p-3 text-center text-black">
          Filosofía
        </h1>
        <AboutAiki />
      </section>
      <section className="bg-black py-16">
        <h1 className="mb-8 p-3 text-center text-white">Contáctanos</h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Write `web/app/contact/page.tsx`**

```tsx
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2">
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
```

- [ ] **Step 3: Write `web/app/about/page.tsx`**

```tsx
import AboutAiki from "@/components/about-aiki";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <AboutAiki />
    </main>
  );
}
```

- [ ] **Step 4: Write `web/app/dojo/page.tsx`**

```tsx
import DojoList from "@/components/dojo-list";

export default function DojoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <DojoList />
    </main>
  );
}
```

- [ ] **Step 5: Verify the build compiles**

```bash
cd web && npm run build
```

Expected: `Compiled successfully`, routes `/`, `/contact`, `/about`, `/dojo` listed in the build output.

- [ ] **Step 6: Commit**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git add web
git commit -m "Add home, contact, about and dojo pages"
```

---

### Task 12: Manual smoke test on the dev server

**Files:** none (verification-only task)

- [ ] **Step 1: Start the dev server**

```bash
cd web && npm run dev &
sleep 5
```

- [ ] **Step 2: Check every route returns 200**

```bash
for path in "" "contact" "about" "dojo"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/$path")
  echo "$path -> $code"
done
```

Expected: all four print `200`.

- [ ] **Step 3: Confirm the logo and Turnstile script are present on `/`**

```bash
curl -s http://localhost:3000/ | grep -o "iwamashinshinlogo-2.png\|challenges.cloudflare.com"
```

Expected: both strings printed.

- [ ] **Step 4: Stop the dev server**

```bash
kill %1
```

- [ ] **Step 5: Manual browser check (done by the user or via Claude in Chrome if connected)**

Open `http://localhost:3000`, submit the contact form with the Turnstile widget solved, and confirm a success toast appears and the network request to `aikido-be.vercel.app/send-mail` fires with `captchaToken` in the payload.

---

### Task 13: Update Vercel project configuration

**Files:** none in the repo — Vercel project settings for `aikido-fe`

**Interfaces:**
- Consumes: Vercel project id `prj_OnE8DitzREJA0DPLzj9v8TQLyWIz`.

- [ ] **Step 1: Push the branch**

```bash
cd /Users/maurogoyeneche/workspace/dev/Aikido/aikido-fe
git push origin migrate/nextjs
```

Expected: Vercel creates a preview deployment for the branch automatically (Git integration is already connected). Because the repo root still has the old CRA `package.json`, this first preview will build the OLD app from root — that is expected until Step 2.

- [ ] **Step 2: Set the project's Root Directory to `web` (Vercel dashboard or API)**

Via the Vercel MCP tool `mcp__plugin_vercel_vercel__update_project`, set:
- `rootDirectory: "web"`
- `framework: "nextjs"`

This must only be applied when the team is ready to preview the new app — it changes what every branch (including `main`) builds from. Confirm with the user before applying, since it affects the live production build source once merged.

- [ ] **Step 3: Remove the now-unneeded `CI=false` env var**

Once the project builds via Next.js (whose build does not fail on ESLint warnings the way `CI=true` did under CRA), remove the `CI` env var added earlier for the CRA build via `mcp__plugin_vercel_vercel__filter_project_envs` (to find its id) and the corresponding delete call, so it does not silently mask real warnings in the new app.

- [ ] **Step 4: Verify the branch preview builds successfully**

Use `mcp__plugin_vercel_vercel__list_deployments` with `branch: "migrate/nextjs"` and confirm `state: "READY"`.

- [ ] **Step 5: Report to the user**

Give the user the preview URL and explicitly ask before merging `migrate/nextjs` into `main` or pointing the production domain at it — that is a cutover decision outside this plan's scope (per the spec's "Fuera de alcance" section).

---

## Self-Review Notes

- **Spec coverage:** every row of the spec's component mapping table has a task (Navbar/logo → Task 4, Hero → 5, About → 6, DojoList/Card → 7, ContactInfo → 8, ContactForm/Turnstile/honeypot → 9–10, pages → 11, Vercel config → 13). `Post`/`PostList` are explicitly out of scope per spec and are not built here.
- **Type consistency:** `Dojo` type defined once in Task 7 and imported (never redefined) in `dojo-card.tsx`. `TURNSTILE_SITE_KEY`/`loadTurnstileScript` defined once in Task 9, imported in Task 10.
- **No placeholders:** every step has runnable commands or complete file contents, no TBD/TODO left.
