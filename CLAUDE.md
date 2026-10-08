# CLAUDE.md — portfolio (kaidosDeveloper.com)

Portfolio personal en producción. Create React App + React 18, JavaScript plano (sin
TypeScript), CSS por componente + tokens en `src/index.css`. Todo el contenido (perfil,
experiencia, skills, educación, proyectos) vive en `src/data/*.js` — controlado en el repo, sin
CMS externo (Contentful fue eliminado, ver `docs/AI_SKILLS.md`). Ver `docs/AI_SKILLS.md` para el
detalle completo del sistema de skills.

## Reglas de alto nivel

- Para cambios de UI de alcance medio/grande, usar el flujo `portfolio-upgrade`.
- Antes de introducir un valor de color/spacing/radius/shadow suelto, consultar
  `design-system-guardian`.
- Cualquier cambio de UI significativo requiere `visual-qa` antes de darse por terminado —
  compilar no es completar.
- Refactors mayores siguen `safe-refactor`.
- Cualquier copy, métrica o claim visible pasa por `portfolio-career-positioning` — no inventar
  cifras ni testimonios.
- Este repo solo tiene `npm run build`, `CI=true npm test`, `npm start`, `npm run eject` como
  scripts reales. No hay lint script, no hay typecheck, no hay e2e. No reportar gates que no
  existen.
- No instalar dependencias nuevas sin aprobación explícita del usuario.

## Skills

`.claude/skills/`: `portfolio-upgrade` (orquestador), `portfolio-premium-ui`,
`design-system-guardian`, `visual-qa`, `portfolio-career-positioning`, `responsive-accessibility`,
`performance-seo`, `safe-refactor`, `micro-interactions`.

## Reglas de la fábrica de proyectos (heredadas)

Este repo vive bajo `D:\KAI\proyectos\`, que tiene sus propias reglas de aislamiento en
`D:\KAI\proyectos\CLAUDE.md` (un proyecto = un repo, nunca mezclar proyectos, nunca `git init` en
la raíz). Se heredan sin duplicarlas aquí.

## Deuda conocida

Ver "Bloqueos y deuda conocidos" en `docs/AI_SKILLS.md` — dos lockfiles, `optimize-images` roto,
(`Testimonials` y `Blog.jsx` fueron eliminados 2026-08-14 — contenido inventado/huérfano, no
testimonios/posts reales. `Services.jsx` reescrito con contenido real el mismo día.)
(Contentful fue eliminado 2026-08-14 — ya no hay `.env` requerido para arrancar la app ni bloqueo
de case studies por esquema de CMS.)
