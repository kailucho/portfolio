# AI Skills — portfolio

Este repo tiene un sistema de skills en `.claude/skills/` para que Claude Code y Codex mejoren el
portfolio de forma consistente, sin re-derivar el stack o las reglas cada sesión.

## Fuente única, dos agentes

Los nueve skills existen **una sola vez**, en `.claude/skills/<nombre>/SKILL.md`. Tanto
`CLAUDE.md` como `AGENTS.md` (en la raíz del repo) apuntan a los mismos archivos — ninguno de los
dos los duplica. Si en el futuro Codex necesita carga nativa de skills (`.agents/skills/`), la
migración es un symlink o script de copia — deliberadamente no se construyó en este bootstrap.

## Orquestadores

**`portfolio-upgrade`** es el punto de entrada para cualquier mejora del portfolio. Enruta a las
demás skills y hace cumplir el criterio de cierre (`npm run build` + `visual-qa`).

**`portfolio-rebuild`** se activa cuando el usuario autoriza explícitamente TOTAL REDESIGN MODE.
Permite sustituir identidad, IA, DOM, componentes, tokens y CSS, preservando hechos e integraciones.

## Skills disponibles

| Skill | Cuándo se usa |
|---|---|
| `portfolio-rebuild` | Reconstrucción visual y estructural completa autorizada explícitamente |
| `portfolio-upgrade` | Punto de entrada — "mejorar/rediseñar el portfolio", tocar varias secciones a la vez |
| `design-system-guardian` | Antes de escribir CSS nuevo o revisar CSS existente |
| `portfolio-career-positioning` | Antes de tocar cualquier copy, métrica o sección de contenido |
| `safe-refactor` | Antes de refactorizar, renombrar o borrar código |
| `visual-qa` | Después de cualquier cambio de UI, antes de cerrar la tarea |
| `portfolio-premium-ui` | Al rediseñar el look de una sección concreta |
| `responsive-accessibility` | Tras cambios de layout, antes de cerrar tareas de UI |
| `performance-seo` | Antes de un deploy, o al mencionar carga lenta/SEO |
| `micro-interactions` | Al final, después de que el layout ya esté resuelto |

## Diferencias Claude vs Codex

Ambos leen el mismo `SKILL.md`. Claude Code descubre `.claude/skills/` automáticamente y puede
auto-disparar una skill por su `description`. Codex no tiene ese auto-trigger para skills locales
en este setup — lee `AGENTS.md` al iniciar, que actúa como índice y le indica que abra el
`SKILL.md` correspondiente antes de actuar. Si se usa con Codex, es más confiable nombrar la
skill explícitamente en el prompt.

## Migración: Contentful eliminado (2026-08-14)

El portfolio usaba Contentful como CMS para el content type "portfolio" (proyectos). Se eliminó
por completo como decisión arquitectónica deliberada: `src/contentfulClient.js` borrado, la
dependencia `contentful` desinstalada, y `Portfolio.jsx` reescrito para leer directamente de
`src/data/projects.js`. Todo el contenido del sitio (perfil, experiencia laboral, skills,
educación, proyectos) vive ahora en `src/data/*.js` — controlado en el repo, sin llamadas de red
en tiempo de carga. Esto también arregló el bug de la app en blanco (ver abajo, ya no aplica).
Contenido fuente: `D:\KAI\proyectos\career-analysis\` (Career Audit), solo lectura desde este repo.

## portfolio-upgrade aplicado (2026-08-14)

Primera pasada de `portfolio-upgrade` completa: tokens de spacing/radius/shadow/type-scale
añadidos a `src/index.css`, jerarquía visual migrada en About/Experience/Portfolio/
ProfessionalExperience, `:focus-visible` global, scrollbar delgado visible (ya no oculto),
`useReducedMotion` en las animaciones de Header/Portfolio, meta tags/SEO reales en
`public/index.html` (antes decía "React Developer Portfolio"), font-loading movido de `@import`
a `<link>` con preconnect. Las imágenes placeholder de proyecto (genéricas, sin relación real) se
reemplazaron por un badge de categoría honesto en vez de imágenes.

**`Testimonials` y `Blog.jsx` fueron eliminados** (2026-08-14, aprobado por el usuario) — ambos
tenían contenido 100% inventado ("Tina snow", posts falsos de plantilla con links `href="#"`
rotos). `swiper` desinstalado junto con Testimonials (sin otro consumidor en el repo).
`Services.jsx` reescrito el mismo día con contenido real (AI/ML Engineering, Full-Stack
Development, Production Engineering) en vez de `Lorem ipsum` + "Content Creation" genérico.

## Bloqueos y deuda conocidos (aún sin resolver)

- **Dos lockfiles** (`package-lock.json` + `yarn.lock`) — ambiguo cuál es canónico. No se borra
  ninguno sin decisión del usuario.
- **`optimize-images` roto** — llama a `imagemin` sin tener `imagemin-cli` instalado.
- Las imágenes de proyecto en `src/data/projects.js` no tienen screenshot real todavía (se usa
  un badge de categoría en su lugar) — reemplazar con capturas reales cuando estén disponibles.
- Favicon / `manifest.json` / `robots.txt` ausentes en `public/`.
- Mobile visual QA (375/430/768px) pendiente de confirmar con una herramienta que emule viewport
  real — el resize de ventana disponible en esta sesión no cambió el viewport interno de Chrome.

## Ejemplo de uso

```
Mejora el portfolio usando portfolio-upgrade.
Preserva la funcionalidad existente.
Haz visual QA antes de dar la tarea por terminada.
```
