---
name: visual-qa
description: Verificar visualmente el portfolio renderizado después de cambios de UI. En NORMAL MODE comprobar regresiones; en TOTAL REDESIGN MODE capturar BEFORE/AFTER, recorrer la página completa en 375/430/768/1024/1440/1920 y exigir una diferencia estructural inequívoca, además de revisar consola y corregir hallazgos.
---

# Visual QA — portfolio

Compilar no equivale a completar una UI.

## Preparación

- Reusar o iniciar el servidor CRA en localhost.
- Preferir las herramientas de navegador conectadas. Si no existen, usar Chrome/Edge headless disponible en el sistema y el protocolo DevTools sin instalar Playwright.
- Guardar capturas fuera del repo.
- Si no se puede controlar el viewport o leer la consola, marcarlo `UNVERIFIED` con el motivo exacto.

## NORMAL MODE

- Revisar regresiones de layout, overflow, contraste, foco, anchors, motion y consola.

## TOTAL REDESIGN MODE

1. Capturar BEFORE antes de editar la UI.
2. Capturar después de cada pase estructural, visual y polish cuando sea útil para decidir.
3. Recorrer la página completa en 375, 430, 768, 1024, 1440 y 1920; no limitarse al hero.
4. Comparar hero, navegación, tipografía, color, sección/orden, proyectos, experiencia, spacing, componentes y motion contra el sitio anterior.
5. Aplicar la prueba: un observador neutral debe decir “es un sitio nuevo”, no “el mismo template mejorado”.

## Inspección

- Overflow horizontal, texto cortado, alturas o espacios accidentales.
- Jerarquía y densidad, composición mobile independiente y touch targets.
- Anchor offsets, navegación con teclado, focus-visible y contraste.
- Imágenes con alt y dimensiones; contenido lazy bajo el fold.
- Reveals que no dejen contenido invisible y `prefers-reduced-motion` efectivo.
- Errores y warnings legítimos de React en al menos un ancho mobile y uno desktop.

## Reporte

Registrar PASS / ISSUE / UNVERIFIED por viewport y zona, con ruta de captura para cada ISSUE. Corregir y volver a inspeccionar antes de cerrar; no dejar defectos conocidos solo documentados.
