---
name: responsive-accessibility
description: Audita y corrige responsive y accesibilidad del portfolio (D:\KAI\proyectos\portfolio) — breakpoints existentes en las media queries de src/components/*/*.css, nav flotante. Úsalo tras cambios de layout y antes de cerrar cualquier tarea de UI. Cubre contraste sobre #1f1f38, foco visible, tap targets y alt en imágenes.
---

# Responsive & Accessibility — portfolio

## Responsive

Antes de asumir breakpoints, `Grep` las media queries existentes en `src/components/**/*.css` —
hoy giran en torno a `max-width: 1024px` y `max-width: 600px`. Estandarizar sobre lo que ya existe
en vez de inventar un set nuevo; si se justifica agregar un tier intermedio (p. ej. 768px para
tablet), hacerlo de forma consistente en todas las secciones, no solo una.

Verificar específicamente: nav (fijo, puede tapar contenido al hacer scroll a un ancla), hero
(`Header`), tarjetas de `Portfolio`/`Experience`/`ProfessionalExperience`, tipografía en móvil,
botones, formulario de `Contact`, footer. (`Testimonials` y su carrusel Swiper fueron eliminados
2026-08-14 — ya no aplica.)

## Accesibilidad

- **Semántica primero.** ARIA nunca sustituye HTML semántico correcto.
- Un único `h1`; verificar jerarquía de headings en `App.jsx` (secciones compuestas sin `<main>`
  hoy — evaluar si agregarlo).
- `alt` significativo en todas las imágenes de `src/assets` (no vacío salvo que sea puramente
  decorativa).
- **Foco visible**: ya existe una regla `:focus-visible` global en `src/index.css` (agregada
  2026-08-14, outline de 2px con `--color-primary`) — verificar que se mantenga tras cualquier
  cambio, no que exista por primera vez.
- Contraste de texto contra el fondo oscuro `--color-bg: #1f1f38` — medido 2026-08-14:
  `--color-light` ≈10.6:1, `--color-primary` ≈7.1:1, ambos superan AAA. Volver a medir si se
  introduce un color nuevo.
- Tap targets ≥44px en móvil.
- `prefers-reduced-motion` respetado tanto en CSS (`--transition`) como en `framer-motion` — ya
  aplicado vía `useReducedMotion` en `Header` y `Portfolio` (2026-08-14); replicar el patrón en
  cualquier `motion.*` nuevo.

## Ya resuelto (no reintroducir)

`::-webkit-scrollbar { display: none }` fue reemplazado (2026-08-14) por un scrollbar delgado
pero visible (`width: 10px`, thumb con `--color-bg-variant`) en `src/index.css`. No volver a
ocultar el scrollbar globalmente sin una razón de diseño explícita del usuario.

## Verificación

Se verifica con `visual-qa` (inspección renderizada real), no con una librería de axe — no hay
ninguna instalada y este skill no debe instalar una.

## Cuándo delega

- Valores de contraste que requieren nuevo token de color → `design-system-guardian`.
- Confirmación visual del arreglo → `visual-qa`.
