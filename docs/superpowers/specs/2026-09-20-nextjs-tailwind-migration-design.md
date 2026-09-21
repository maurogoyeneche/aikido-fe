# Migración aikido-fe: CRA + Bootstrap → Next.js + Tailwind + shadcn/ui

## Contexto

`aikido-fe` es un sitio chico (landing + info) para un dojo de Aikido, hoy en Create React App (deprecado) + React 17 + Bootstrap 5/react-bootstrap + react-router-dom. Deployado en Vercel, conectado al dominio `aikidouruguay.com`. `react-i18next`/`i18next` están instalados pero sin uso real en el código (dead dependency).

El sitio va a crecer (calendario de clases, noticias/blog, perfiles de instructores, testimonios), por lo que la elección de stack debe soportar agregar piezas de UI reutilizables sin reinventar accesibilidad cada vez.

## Objetivo

Reescribir el frontend en una branch nueva (`migrate/nextjs`) del mismo repo, corriendo en Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui, con paridad visual y funcional completa respecto al sitio actual, deployable como preview en Vercel, y actualizar la configuración de build de Vercel para el nuevo framework.

## Stack

- **Next.js 15** (App Router), Server Components por default, `"use client"` solo en componentes con estado/efectos.
- **TypeScript**.
- **Tailwind CSS**, tema con los tokens de marca actuales (azul `#0000fe`, negro, tipografía Montserrat/Manrope).
- **shadcn/ui** para componentes "de sistema" (Input, Textarea, Button, Card, NavigationMenu, Toast, Accordion, Dialog) — copiado al repo y re-temizado, nunca con el look default.
- Se mantienen: **Formik + Yup** (form), **Swiper** (carousel de dojos), **axios**, **Cloudflare Turnstile** (integración ya hecha en el CRA actual).
- Se eliminan: `bootstrap`, `react-bootstrap`, `bootstrap-icons`, `react-bootstrap-icons`, `react-router-dom` (reemplazado por App Router), `react-i18next`, `i18next`.
- Íconos: `lucide-react` (estándar de shadcn) en vez de `react-bootstrap-icons`.

## Estructura de carpetas

```
app/
  layout.tsx          # Navbar + Footer globales, fuentes, providers
  page.tsx            # Home: Hero + DojoList + AboutAiki + ContactView
  contact/page.tsx
  about/page.tsx
  dojo/page.tsx
components/
  ui/                 # shadcn primitives
  hero.tsx
  navbar.tsx
  footer.tsx
  dojo-card.tsx
  dojo-list.tsx
  contact-form.tsx
  contact-info.tsx
  about-aiki.tsx
lib/
  dojos.ts            # datos tipados de dojos (mismo contenido que src/mocks/dojos.js)
  turnstile.ts         # helper de carga/render de Turnstile (portado)
```

## Mapeo de componentes actuales → nuevos

| Actual | Nuevo | Notas |
|---|---|---|
| `Hero` | `components/hero.tsx` (Tailwind custom) | Arte de marca; layout validado en mockup previo |
| `NavbarMenu` | `components/navbar.tsx` (shadcn `NavigationMenu` + estilo custom) | |
| `AboutAiki` | `components/about-aiki.tsx` (Tailwind custom) | |
| `DojoList` + `DojoDetails` | `components/dojo-list.tsx` (Swiper) + `components/dojo-card.tsx` (shadcn `Card`) | |
| `ContactForm` | `components/contact-form.tsx` (shadcn `Input`/`Textarea`/`Button` + Formik/Yup) | Turnstile + honeypot portados literal |
| `ContactInfo` | `components/contact-info.tsx` (Tailwind + `lucide-react`) | |
| `ToastMessage` | shadcn `Toast`/`Sonner` | Reemplaza feedback de éxito/error del form |
| `Footer` | `components/footer.tsx` (Tailwind custom) | |
| `Post`/`PostList` | shadcn `Card` (sin ruta activa aún) | Quedan listos para blog/noticias futuro, no se activan en esta migración |

## Datos

`src/mocks/dojos.js` → `lib/dojos.ts`, mismo contenido, con interfaz TypeScript:

```ts
interface Dojo {
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
```

Sigue siendo un array estático versionado en el repo — no se introduce CMS/backend de contenido en esta migración.

## Formulario de contacto

- Formik + Yup se mantienen (no dependen de CRA).
- Inputs de Bootstrap → shadcn `Input`/`Textarea`, con las mismas validaciones (regex de nombre, email, teléfono, mensaje) ya existentes.
- Honeypot (`surname`, oculto vía CSS off-screen + `aria-hidden`) se porta literal.
- Turnstile (script dinámico, widget, `captchaToken` en el POST, reset tras submit) se porta literal a `lib/turnstile.ts` + hook en `contact-form.tsx`.
- Request POST a `https://aikido-be.vercel.app/send-mail` sin cambios (backend no se toca).
- Éxito/error se muestra con shadcn `Toast` en vez del `Alert`/`Toast` de react-bootstrap.

## Fases de implementación

1. Scaffold: `create-next-app` (TS + Tailwind + App Router) en `migrate/nextjs`, init shadcn, tema con paleta actual.
2. Layout global: Navbar, Footer, fuentes.
3. Hero + About (piezas de marca).
4. DojoList + DojoDetails (Swiper + shadcn Card), datos desde `lib/dojos.ts`.
5. ContactForm completo (shadcn inputs + Formik/Yup + Turnstile + honeypot + Toast).
6. Build de verificación local (`next build`) sin errores/warnings.
7. Config de Vercel: cambiar el Framework Preset del proyecto `aikido-fe` de "Create React App" a "Next.js" (autodetecta build/output, ya no hace falta el override `CI=false`), deploy de la branch como preview.

## Testing / validación

No hay suite automatizada hoy en el proyecto CRA tampoco. Validación:
- `next build` limpio (0 errores, 0 warnings de TS/ESLint).
- Smoke test manual de cada ruta en el preview de Vercel: Home (Hero, DojoList, About, Contact embebido), `/contact`, `/about`, `/dojo`.
- Envío real del formulario de contacto en el preview para confirmar Turnstile + honeypot + POST a `send-mail` funcionando end-to-end.

## Fuera de alcance

- i18n (se descarta; `react-i18next` estaba sin uso real).
- CMS para dojos/contenido.
- Blog/noticias activo (solo se dejan los componentes `Post`/`PostList` listos en shadcn `Card`, sin ruta).
- Cambios en el backend (`aikido-be`).
- Corte de dominio a producción (esta migración entrega el preview funcionando en la branch; el corte de `aikidouruguay.com` es una decisión posterior del usuario).
