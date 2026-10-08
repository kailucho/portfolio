# AGENTS.md — portfolio (kaidosDeveloper.com)

Antes de actuar sobre una tarea que coincida con un trigger de la tabla, **leer el `SKILL.md`
referenciado por completo y seguirlo** — este archivo es un índice, no un resumen suficiente.

`.claude/skills/` es la ubicación canónica de las skills para este repo, sin importar qué agente
(Claude Code o Codex) esté trabajando. No existe una copia separada en `.agents/skills/` —
mantener una sola fuente evita que las dos versiones diverjan.

## Índice de skills

| Skill | Trigger | Ruta |
|---|---|---|
| portfolio-rebuild | Rediseño visual/estructural total autorizado explícitamente | `.claude/skills/portfolio-rebuild/SKILL.md` |
| portfolio-upgrade | Mejorar/rediseñar el portfolio, o tocar varias secciones a la vez | `.claude/skills/portfolio-upgrade/SKILL.md` |
| design-system-guardian | Antes de escribir o revisar CSS | `.claude/skills/design-system-guardian/SKILL.md` |
| portfolio-career-positioning | Antes de tocar copy, métricas o contenido visible | `.claude/skills/portfolio-career-positioning/SKILL.md` |
| safe-refactor | Antes de refactorizar, renombrar o borrar código | `.claude/skills/safe-refactor/SKILL.md` |
| visual-qa | Después de cualquier cambio de UI | `.claude/skills/visual-qa/SKILL.md` |
| portfolio-premium-ui | Al rediseñar el look de una sección | `.claude/skills/portfolio-premium-ui/SKILL.md` |
| responsive-accessibility | Tras cambios de layout | `.claude/skills/responsive-accessibility/SKILL.md` |
| performance-seo | Antes de deploy, o temas de carga/SEO | `.claude/skills/performance-seo/SKILL.md` |
| micro-interactions | Al final, después de resolver el layout | `.claude/skills/micro-interactions/SKILL.md` |

## Stack (resumen — el detalle vive en cada SKILL.md)

CRA (`react-scripts` 5), React 18, JavaScript plano, CSS por componente, tokens en
`src/index.css`, todo el contenido en `src/data/*.js` (sin CMS externo — Contentful fue
eliminado 2026-08-14). Sin router, sin TypeScript, sin Tailwind. Scripts reales: `start`,
`build`, `test`, `eject`. No hay lint, typecheck ni e2e — no reportar gates que no existen.

## Prohibiciones duras

- No instalar dependencias nuevas sin aprobación explícita del usuario.
- No inventar métricas, clientes o testimonios.
- No escribir en `D:\KAI\proyectos\career-analysis\` (solo lectura).
- No trabajar fuera de este repo sin autorización explícita (regla de aislamiento de
  `D:\KAI\proyectos\CLAUDE.md`).

Ver `docs/AI_SKILLS.md` para la lista de deuda/bloqueos conocidos del repo.
