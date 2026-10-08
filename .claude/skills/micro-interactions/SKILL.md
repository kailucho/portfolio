---
name: micro-interactions
description: Añade animaciones y micro-interacciones al portfolio (D:\KAI\proyectos\portfolio) usando framer-motion ^12 (ya instalado) y las variables --transition de src/index.css. Úsalo para hover states, reveals al hacer scroll, transiciones de nav y feedback del formulario de contacto — solo DESPUÉS de que el layout ya esté resuelto. No introduce librerías de animación nuevas y exige respetar prefers-reduced-motion.
---

# Micro-interactions — portfolio

El movimiento se aplica al final, cuando layout y UX ya son correctos — no antes, y nunca porque
"se ve cool".

## Stack disponible (no añadir nada más)

`framer-motion ^12.5.0` ya está instalado y se usa en `Header` y `Portfolio`. `swiper` fue
desinstalado (2026-08-14) junto con `Testimonials.jsx` — ya no hay carrusel en el sitio.

## Presupuesto de movimiento

La animación debe comunicar: estado, jerarquía, relación, navegación o feedback. Como máximo un
par de ideas de movimiento simultáneas por viewport — no animar todo a la vez.

## Patrones aplicables aquí

- `whileHover` / `whileTap` en tarjetas y CTAs.
- `whileInView` + `viewport={{ once: true }}` para reveals de sección al hacer scroll.
- `AnimatePresence` para el feedback de envío del formulario de contacto o transiciones de nav.

## Reglas técnicas

- Animar solo `transform` y `opacity` — nunca `width`, `top`/`left`, ni `box-shadow` en loop
  (fuerza layout/paint costoso).
- Duración en el rango **120–300ms** para interacciones normales, salvo justificación explícita.
- `--transition: all 400ms ease` (el token actual) es demasiado lento para feedback de hover y
  anima `all`, lo cual es costoso — para hover usar una transición más corta y específica en la
  propiedad que realmente cambia; coordinar con `design-system-guardian` si hace falta un token
  `--transition-fast` nuevo, no inventar el valor localmente en un componente.
- Respetar `prefers-reduced-motion` — envolver el movimiento no esencial (usar `useReducedMotion`
  de framer-motion) y no depender de animación para transmitir información crítica.
- La grilla de Portfolio lee de `src/data/projects.js` (síncrono, sin fetch) — no hay estado de
  carga que coordinar, pero mantener el `AnimatePresence` del expand de case study suave y sin
  saltos de layout.

## Verificación

`visual-qa` solo captura frames estáticos — no puede probar que la animación se sienta bien.
Verificar visualmente que ningún reveal deja contenido invisible si el observer no se dispara
(por ejemplo, contenido con `opacity:0` inicial sin fallback si JS falla).

## Cuándo delega

- Definir el token de duración si no existe → `design-system-guardian`.
- Confirmar el resultado final → `visual-qa`.
