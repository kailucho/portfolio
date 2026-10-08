---
name: portfolio-premium-ui
description: Diseñar la UI editorial y premium del portfolio sobre React/JSX y CSS plano. En NORMAL MODE elevar secciones concretas; en TOTAL REDESIGN MODE permitir reconstruir hero, navegación, IA, DOM, componentes, layouts y lenguaje visual completo sin conservar patrones del template.
---

# Portfolio Premium UI

Leer `references/anti-generic-design.md` antes de añadir efectos.

## NORMAL MODE

- Mejorar jerarquía, legibilidad, spacing y estados sin reemplazar innecesariamente la arquitectura.
- Mantener cambios revisables por sección.

## TOTAL REDESIGN MODE

- Empezar con concepto e información arquitectónica, no con CSS cosmético.
- Rehacer por completo hero y navegación si conservan el patrón de template.
- Usar un grid deliberado, asimetría útil y alineaciones que continúen entre secciones.
- Presentar el proyecto principal como caso de estudio editorial; usar patrones compactos distintos para proyectos secundarios.
- Presentar experiencia como cronología escaneable y capacidades como dominios de ingeniería, no icon cloud ni cards uniformes.
- Combinar o eliminar secciones que repitan la historia. El prompt de TOTAL REDESIGN MODE constituye autorización para borrar estructura obsoleta dentro del alcance declarado.
- Replantear tipografía, paleta, portrait y surfaces; no preservar Poppins, morado/azul, textura o card language por inercia.
- Crear al menos una firma visual conectada a arquitectura, datos, pipelines o sistemas AI.

## Reglas comunes

- Mantener CSS por componente y tokens globales en `src/index.css`.
- Usar cards solo cuando una superficie separada ayuda a comprender el contenido.
- Preservar contenido factual, links, CV y comportamiento funcional útil.
- Incluir hover, focus, active y tap states; semántica primero.
- Resolver layout antes de motion; delegar motion a `micro-interactions` y QA a `visual-qa`.
