---
name: design-system-guardian
description: Gobernar los tokens y CSS global del portfolio antes de escribir o revisar CSS. En NORMAL MODE proteger y extender el sistema existente; en TOTAL REDESIGN MODE permitir reemplazar, renombrar o eliminar tokens siempre que todos los consumidores se migren y no quede un sistema legado paralelo.
---

# Design System Guardian

`src/index.css` es la única fuente de tokens. No introducir Tailwind, CSS-in-JS ni una segunda fuente de verdad.

## NORMAL MODE

- Auditar usos antes de añadir un token.
- Extender escalas con cambios acotados.
- No renombrar ni borrar tokens sin migrar cada consumidor.
- Preferir transiciones por propiedad sobre `transition: all`.

## TOTAL REDESIGN MODE

- Autorizar una taxonomía nueva para color, tipografía, spacing, container, grid, radius, borde, elevación, motion y breakpoints.
- Reemplazar valores y nombres heredados cuando la nueva dirección lo necesite.
- Migrar todos los componentes durante el mismo rediseño; buscar consumidores antes de eliminar.
- Eliminar tokens zombie, aliases temporales y estilos de compatibilidad al estabilizar el sistema.
- Validar contraste, focus-visible, reduced motion y consistencia responsive.

## Reglas comunes

- Tokenizar decisiones repetidas; permitir valores ópticos únicos cuando no representan una escala reusable.
- Mantener un acento principal deliberado y escaso.
- No usar radius, sombras, bordes o gradientes por reflejo.
- Grepear literales, variables y media queries antes y después de la migración.
- Delegar composición a `portfolio-premium-ui` y verificación renderizada a `visual-qa`.
