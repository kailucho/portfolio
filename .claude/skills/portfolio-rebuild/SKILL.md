---
name: portfolio-rebuild
description: Ejecutar un rediseño visual y estructural total del portfolio cuando el usuario pida explícitamente TOTAL REDESIGN MODE, una reconstrucción completa, una nueva dirección artística o una sustitución integral del sistema visual. Preservar contenido factual e integraciones funcionales, pero permitir reemplazar información arquitectónica, componentes, DOM, tokens, tipografía, layouts y CSS legado.
---

# Portfolio Rebuild

Aplicar esta skill solo cuando el usuario autorice de forma explícita una reconstrucción integral. En ese caso, las reglas conservadoras de mejora incremental no limitan el trabajo.

## Jerarquía de instrucciones

1. Preservar prohibiciones duras del repo: no inventar evidencia, no escribir en `career-analysis`, no añadir dependencias sin aprobación y no reintroducir un CMS.
2. Preservar contenido verificable, enlaces, CV, EmailJS y otras integraciones que sigan siendo útiles.
3. Permitir reemplazar por completo la identidad visual, información arquitectónica, orden de secciones, componentes, nombres de clases y tokens.
4. Si una skill antigua exige conservar estructura, tokens, fuente o estética, ignorar esa regla únicamente durante TOTAL REDESIGN MODE y migrar todos los consumidores de forma segura.

## Flujo obligatorio

### 1. Auditar y establecer evidencia

- Verificar stack, scripts, dependencias, estado git, datos locales e integraciones reales.
- Leer `portfolio-career-positioning` antes de cambiar copy visible.
- Capturar screenshots BEFORE antes de modificar la UI.
- Identificar duplicación narrativa, jerarquía plana, patrones de template y CSS obsoleto.

### 2. Definir la dirección

- Crear tres conceptos visuales con filosofía, paleta, tipografía, grid, hero, proyectos, motion, imagen, navegación y firma visual.
- Evaluarlos contra posicionamiento, credibilidad, diferenciación, escaneabilidad y mantenimiento.
- Elegir uno sin detener la implementación y documentarlo en `docs/DESIGN_DIRECTION.md`.

### 3. Ejecutar tres pases

1. **Estructural:** reconstruir IA, DOM, jerarquía, grid, navegación y prioridad de proyectos.
2. **Sistema visual:** reemplazar tokens, tipografía, color, spacing, superficies y responsive; migrar todos los usos.
3. **Polish:** añadir motion intencional, estados, foco, detalle óptico y una firma visual relacionada con ingeniería/AI.

No pulir antes de resolver composición. No convertir todo en tarjetas. No dar la misma jerarquía a todos los proyectos.

### 4. Validar e iterar

- Aplicar `responsive-accessibility` y `micro-interactions` al final del layout.
- Aplicar `visual-qa` en 375, 430, 768, 1024, 1440 y 1920; inspeccionar la página completa y la consola.
- Comparar BEFORE/AFTER. Un observador neutral debe reconocer un sitio nuevo.
- Ejecutar la prueba de diferencia en hero, navegación, tipografía, color, orden, proyectos, experiencia, spacing, componentes y motion.
- Corregir los hallazgos; no limitarse a reportarlos.
- Eliminar tokens, clases, media queries, assets y componentes obsoletos cuando ya no tengan consumidores.
- Ejecutar `npm run build` como único gate automatizado real del repo.

## Criterio de cierre

Cerrar solo si el sitio comunica “Senior Software Engineer — AI Systems” en el primer viewport, el trabajo principal funciona como caso de estudio, experiencia y capacidades se escanean con facilidad, mobile está recompuesto, la firma visual es memorable, Contentful sigue ausente, la consola no muestra errores legítimos y el before/after es inequívoco.
