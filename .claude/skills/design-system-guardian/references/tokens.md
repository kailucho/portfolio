# Tokens de `src/index.css` — estado actual y escalas propuestas

## Existentes (verbatim, no tocar los nombres ni valores sin decisión aparte)

```css
:root {
  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color-primary: #4db5ff;
  --color-primary-variant: rgba(77, 181, 255, 0.4);
  --color-secondary: #ff6f61;
  --color-accent: #ffd700;
  --color-white: #fff;
  --color-light: rgba(255, 255, 255, 0.8);

  --transition: all 400ms ease;

  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-sm: 90%;
}
```

Referenciado hoy por 10 hojas de estilo en `src/components/*/*.css`. Cualquier renombrado o
borrado rompe todas ellas — por eso la regla es **solo aditivo**.

## Huecos detectados (no existen, y por eso el CSS de componentes cae en valores sueltos)

- **Spacing** — no hay escala; los componentes usan `px`/`rem` sueltos.
- **Radius** — no hay escala.
- **Shadow / elevation** — no hay escala.
- **Type scale** — solo `h1 { font-size: 2.5rem }` fijo; el resto de tamaños están sueltos por
  componente.
- **Transition** — un único `--transition: all 400ms ease` que anima `all`, lo cual es costoso
  (fuerza recálculo de layout en propiedades que no lo necesitan) y poco preciso.

## Escalas propuestas (proponer, no aplicar sin pasar por `portfolio-premium-ui`)

```css
/* Spacing — base 4px, como pide el bootstrap, pero verificar contra los px reales
   ya usados en los componentes antes de fijar la escala definitiva */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;

/* Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-full: 999px;

/* Shadow — pensados para el fondo oscuro (--color-bg #1f1f38), no shadows genéricos claros */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.24);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.32);
--shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.4);

/* Type scale — usar clamp() para fluidez sin media queries adicionales */
--fs-sm: clamp(0.85rem, 0.8rem + 0.2vw, 0.95rem);
--fs-base: 1rem;
--fs-lg: clamp(1.15rem, 1.05rem + 0.4vw, 1.4rem);
--fs-xl: clamp(1.6rem, 1.3rem + 1vw, 2rem);
--fs-2xl: clamp(2rem, 1.6rem + 1.6vw, 2.75rem); /* reemplaza el h1 fijo de 2.5rem si se adopta */

/* Transition — dividir el --transition: all genérico */
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 400ms ease; /* valor original, para no romper nada que dependa del timing actual */
```

## Procedimiento antes de añadir un token nuevo

1. `Grep` en `src/components/**/*.css` por literales hex (`#[0-9a-fA-F]{3,6}`) y por `px` sueltos
   para saber si el valor que se quiere token-izar ya se repite (candidato real a token) o es un
   caso único (puede no merecer token).
2. Si se repite ≥3 veces o cruza ≥2 componentes, es candidato a token.
2. Añadir el token a `:root` en `src/index.css`, nunca en un componente.
3. Reemplazar los usos existentes por el token en el mismo cambio — no dejar el valor viejo y el
   token nuevo conviviendo sin motivo.
4. Nunca introducir una segunda fuente de tokens (por ejemplo un archivo `tokens.css` aparte) sin
   que el usuario lo pida — `src/index.css` es la única fuente de verdad hoy.
