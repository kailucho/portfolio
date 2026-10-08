---
name: portfolio-upgrade
description: Orquestar mejoras o rediseños del portfolio. Usar NORMAL MODE para ajustes incrementales y TOTAL REDESIGN MODE cuando el usuario autorice una reconstrucción visual/estructural completa; en ese modo delegar el flujo principal a portfolio-rebuild sin rebajarlo a un polish cosmético.
---

# Portfolio Upgrade — orquestador

## Seleccionar modo

- **NORMAL MODE:** aplicar mejoras acotadas, migrables por sección y compatibles con la identidad vigente.
- **TOTAL REDESIGN MODE:** activarlo solo ante autorización explícita de reconstrucción integral. Leer y aplicar `portfolio-rebuild`; se permite reemplazar identidad, tokens, IA, DOM, componentes, orden y CSS.

Las prohibiciones duras siguen vigentes en ambos modos: no inventar métricas/clientes/testimonios, no escribir en `career-analysis`, no instalar dependencias sin aprobación, no migrar framework por estética y no reintroducir Contentful ni otro CMS.

## Precondiciones

- Verificar `package.json`, `node_modules`, rama y `git status`; preservar cambios preexistentes.
- Usar `src/data/*.js` como fuente de contenido.
- Usar `npm`; mantener ambos lockfiles mientras el usuario no resuelva cuál es canónico.

## Enrutamiento

1. Contenido y evidencia → `portfolio-career-positioning`.
2. Refactor/renombres/borrados → `safe-refactor`, interpretado según el modo autorizado.
3. Sistema visual → `design-system-guardian`.
4. Dirección y UI → `portfolio-premium-ui`.
5. Responsive/accesibilidad → `responsive-accessibility`.
6. Motion final → `micro-interactions`.
7. Performance/SEO → `performance-seo`.
8. Capturas y consola → `visual-qa`.

## Cierre

Exigir `npm run build` con código 0 y QA renderizado corregido en 375/430/768/1024/1440/1920. No afirmar lint, typecheck, e2e o cobertura: esos gates no existen. En TOTAL REDESIGN MODE añadir comparación before/after y prueba explícita de diferencia contra el template anterior.
