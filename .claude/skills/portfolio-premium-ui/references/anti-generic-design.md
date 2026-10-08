# Anti-patrones de diseño genérico de IA

Evitar por defecto (aplican salvo justificación explícita y deliberada):

- Gradientes morado/azul como recurso decorativo por defecto
- "Blobs" difuminados brillando de fondo
- Glassmorphism aplicado en todas partes
- Titulares gigantes con gradiente de texto
- Exceso de "pills"/badges decorativos sin función
- Exceso de tarjetas — no meter todo dentro de una card solo porque es fácil
- `border-radius` grande aplicado automáticamente a todo (`rounded-xl`/`rounded-2xl` como
  reflejo — aquí no hay Tailwind, pero el equivalente en CSS plano es igual de evitable:
  `border-radius: 16px` puesto por costumbre, no por diseño)
- `box-shadow` fuerte puesto por defecto en cada contenedor
- Bordes al azar sin función de agrupación
- Botones con gradiente como estilo por defecto
- Elementos flotantes decorativos sin significado
- Métricas de "dashboard" decorativas sin dato real detrás
- Emojis usados como iconografía profesional (este portfolio ya usa `react-icons` — seguir con
  eso)
- Hero enorme con poca información útil real

## Regla de oro

Toda decisión visual debe servir al menos uno de: jerarquía, claridad, navegación, legibilidad,
identidad, interacción, conversión, densidad de información. Si un elemento decorativo no sirve
a ninguno, se quita.

Una interfaz premium suele sentirse cara por lo que **no** tiene, no por lo que le suma. Preferir
restricción sobre acumulación de efectos.

## Aplicado a este portfolio en concreto

- El fondo ya tiene una textura (`bg-texture.png`) y un esquema de color oscuro coherente
  (`#1f1f38` / `#4db5ff`) — no apilar además gradientes ni blobs encima; ya hay identidad visual,
  no hace falta añadir capas.
- `--color-secondary` (`#ff6f61`) y `--color-accent` (`#ffd700`) existen pero casi no se usan —
  antes de inventar un color nuevo, evaluar si uno de estos ya cubre la necesidad.
- Los iconos existentes son `react-icons` — mantener esa librería, no mezclar con emoji ni con
  una segunda librería de iconos.
