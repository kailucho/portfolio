---
name: performance-seo
description: Optimiza performance y SEO del portfolio (D:\KAI\proyectos\portfolio, CRA) sin añadir dependencias nuevas — imágenes de src/assets, el @import de Google Fonts que bloquea el render en src/index.css, meta tags/Open Graph en public/index.html, y web-vitals (ya instalado). Úsalo antes de un deploy o cuando el usuario mencione carga lenta, Lighthouse o posicionamiento en buscadores.
---

# Performance & SEO — portfolio

Optimizaciones prácticas, no métricas sintéticas a costa de la UX.

## Medir antes de optimizar

`npm run build` imprime el tamaño gzip de cada bundle — usarlo como baseline y comparar después
del cambio. No proponer un analyzer de bundle nuevo; la salida de build ya alcanza para este
tamaño de proyecto.

## Hallazgo conocido — script roto

`npm run optimize-images` llama a `imagemin` (CLI) pero **`imagemin-cli` no está instalado** —
el script falla hoy. Reportarlo al usuario; no instalar la dependencia por cuenta propia (el
bootstrap prohíbe instalar dependencias sin aprobación explícita).

## Fuentes

`src/index.css` carga Poppins vía `@import url(...)` al inicio del archivo — esto bloquea el
render. Mover a `<link rel="preconnect">` + `<link>` en `public/index.html`, o considerar
`font-display: swap` si se mantiene el `@import`. Cambio de costo cero en dependencias.

## Imágenes

Revisar `src/assets` (avatares, `bg-texture.png`, imágenes de portfolio) por dimensiones y
formato. `loading="lazy"` en imágenes bajo el fold. Ancho/alto explícitos para evitar CLS. Las
imágenes de proyectos son locales (`src/assets/portfolio*.{jpg,png}`, importadas en
`src/data/projects.js`) — sin CDN ni transformaciones por URL; optimizar el archivo directamente
si el tamaño importa.

## Código

`React.lazy` + `Suspense` para secciones bajo el fold es viable con React 18 sin dependencias
nuevas. `framer-motion` es la dependencia de animación más pesada (`swiper` fue desinstalado
2026-08-14 junto con Testimonials) — no duplicar su funcionalidad con una librería adicional.

## SEO

`public/index.html` hoy es boilerplate de CRA — revisar/completar: `title`, `meta description`,
`canonical` (ojo: `homepage` en `package.json` apunta a `http://kaidosDeveloper.com`, sin `https`
— señalarlo), Open Graph, Twitter cards, favicon, `manifest.json`, `robots.txt`/sitemap si se
agregan.

## Web Vitals

`src/reportWebVitals.js` y la dependencia `web-vitals` ya existen — confirmar si están
efectivamente conectados (revisar `src/index.js`) antes de asumir que ya se está midiendo algo.

## Límites

Esto es un SPA de CRA sin SSR. No prometer metadata por ruta ni mejoras de SSR — no hay router ni
servidor propio. No proponer migrar a Next.js/Vite.

## Cuándo delega

- Confirmar que el cambio no rompió el layout → `visual-qa`.
- Cualquier cambio de copy en meta tags → `portfolio-career-positioning`.
