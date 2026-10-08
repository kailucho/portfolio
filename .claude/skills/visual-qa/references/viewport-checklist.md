# Checklist de inspección visual — portfolio

## Anchos a probar (en este orden)

| Ancho | Categoría |
|---|---|
| 375 | móvil pequeño |
| 430 | móvil grande |
| 768 | tablet |
| 1024 | laptop pequeño |
| 1440 | desktop |
| 1920 | desktop ancho |

En cada ancho: recorrer todas las secciones visibles en `App.jsx`
(Header → Nav → About → Experience → ProfessionalExperience → Services → Portfolio → Contact →
Footer), capturando arriba, medio y abajo de la página si el contenido no entra en una sola
pantalla. (`Testimonials` fue eliminado 2026-08-14 — ya no está en el flujo.)

## Qué buscar en cada captura

- Overflow horizontal (scroll lateral inesperado)
- Texto cortado o desbordado
- Padding/spacing inconsistente entre secciones equivalentes
- Tarjetas de altura desigual en una misma fila (Portfolio, Experience)
- Contraste insuficiente sobre el fondo oscuro `#1f1f38`
- Elementos sobredimensionados o subdimensionados
- Desequilibrio visual (todo el peso a un lado)
- Áreas vacías extrañas
- Iconos inconsistentes entre secciones
- Animaciones rotas o que dejan contenido invisible (revisar `whileInView` de framer-motion)
- Layout shift entre carga inicial y estado final
- Estados de hover/focus ausentes en botones y links
- Nav fijo tapando contenido al hacer scroll a un ancla
- Sección Portfolio vacía → normal si falta `.env`, no reportar como bug de layout

## Formato de reporte

Tabla ancho × sección × veredicto (PASS / ISSUE / UNVERIFIED), con una línea de descripción por
cada ISSUE y la ruta del screenshot que lo respalda. Nunca "se ve bien" sin una captura detrás.

Si `resize_window` o el permiso de sitio para `localhost` fallan, marcar los anchos afectados
como **UNVERIFIED** y decir exactamente qué falló — nunca inventar que se verificó.
