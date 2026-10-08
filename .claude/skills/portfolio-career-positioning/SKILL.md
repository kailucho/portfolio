---
name: portfolio-career-positioning
description: Reescribe el copy y posicionamiento del portfolio (D:\KAI\proyectos\portfolio) usando exclusivamente el corpus ya auditado en D:\KAI\proyectos\career-analysis (portfolio-redesign.md, 09-master-career-profile, case-study-*.md). Úsalo antes de tocar About.jsx, Experience.jsx, Services.jsx o cualquier texto/métrica visible. Prohíbe inventar métricas, clientes o testimonios y exige respetar el grading VERIFIED / STRONG_INFERENCE / NEEDS_USER_CONFIRMATION / UNKNOWN.
---

# Portfolio Career Positioning

Fuente de verdad para TODO el copy visible del portfolio. Este skill no inventa posicionamiento
nuevo — enruta al corpus de `career-analysis` ya auditado y confirmado por el usuario, y hace
cumplir sus reglas.

## Antes de escribir cualquier texto

Leer `references/career-corpus-map.md` — lista las rutas exactas del corpus, el grading de
confianza y las decisiones ya confirmadas por el usuario (título, métricas a eliminar, años de
experiencia, secciones a agregar/quitar). Esas decisiones son vinculantes, no un punto de partida
para renegociar.

## Regla de confianza

Cualquier afirmación que termine en el HTML debe rastrearse a una línea `VERIFIED` o ya
confirmada por el usuario en `portfolio-redesign.md`. `STRONG_INFERENCE` solo puede publicarse
matizada. `NEEDS_USER_CONFIRMATION` y `UNKNOWN` **no se publican** — se preguntan con
`AskUserQuestion` primero. Impacto que no se puede verificar numéricamente se describe
cualitativamente, nunca con una cifra inventada.

## Dónde vive el contenido de proyectos

Los proyectos viven en `src/data/projects.js` (Contentful fue eliminado 2026-08-14) — este skill
edita ese archivo directamente para cualquier copy nuevo, en vez de producir texto para pegar en
un CMS externo. Ver `references/career-corpus-map.md` para el mapeo completo de dónde vive cada
tipo de contenido (`profile.js`, `experience.js`, `skills.js`, `education.js`, `projects.js`).

## Qué no hacer

- No crear documentos de posicionamiento nuevos. Si el corpus está mal o incompleto, eso se
  corrige dentro de `career-analysis/` con aprobación del usuario — es un proyecto aparte según
  las reglas de aislamiento de la fábrica.
- No mezclar evidencia `VERIFIED` con `evidence_source: work_experience_unaudited` sin marcar la
  diferencia explícitamente en el resumen de cambios.
- No inventar testimonios, clientes, ni cifras de impacto.

## Cuándo delega

- Aplicar el copy final al layout de un componente → `portfolio-premium-ui`.
- Confirmar visualmente que el nuevo copy no rompe el layout (overflow de texto largo, etc.) →
  `visual-qa`.
