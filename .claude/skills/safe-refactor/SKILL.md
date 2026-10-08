---
name: safe-refactor
description: Protocolo de cambios seguros en el portfolio (D:\KAI\proyectos\portfolio). IMPORTANTE — este repo SOLO tiene los scripts start, build, test y eject; no hay lint script, no hay typecheck (JavaScript plano, no TypeScript), no hay e2e, no hay formatter, y npm test no encuentra ningún archivo de test. Úsalo antes de refactorizar, renombrar, borrar o mover componentes, o al tocar más de un archivo.
---

# Safe Refactor — portfolio

Protege lo que ya funciona. El portfolio es un sitio en producción
(kaidosDeveloper.com) — no es un playground.

## La validación real de este repo (decir exactamente esto, nunca más)

- **`npm run build`** es el único gate automatizado real. `react-scripts build` aplica el
  `eslintConfig: ["react-app"]` declarado en `package.json`, así que los errores de ESLint
  **sí** aparecen — como warnings/errores de build, no como un `npm run lint` (ese script no
  existe). Nunca reportar "lint pasó": no hay tal comando.
- **`CI=true npm test`** (o `--watchAll=false`) — `react-scripts test` es modo watch por defecto
  y se cuelga sin `CI=true` en Windows. Hoy no existe ni un solo archivo de test, así que este
  comando no prueba nada todavía. No reportarlo como cobertura.
- **No hay typecheck.** Es JavaScript plano (`.jsx`, sin `.ts`/`.tsx`, sin `tsconfig.json`).
  Nunca afirmar "types check out".
- **No hay e2e ni formatter.**
- El gate real de UI es `npm run build` + `visual-qa` (inspección renderizada) — ver esa skill.

## Antes de tocar código

1. `git status` limpio antes de empezar; saber en qué rama se está.
2. `node_modules` puede faltar (`npm install` primero). Todo el contenido vive en `src/data/*.js`
   (sin CMS externo, sin `.env` que gestionar).
3. **Dos lockfiles conviven**: `package-lock.json` y `yarn.lock`. Ambiguo qué gestor es canónico.
   No borrar ninguno de los dos sin que el usuario lo decida — usar `npm` por convención de CRA
   mientras tanto, y reportar la ambigüedad.

## Durante el cambio

- Un concern por commit; diffs revisables.
- Preferir cambios aditivos (CSS, tokens) y migrar de a un componente, no reescrituras masivas.
- Mantener el orden de composición de `App.jsx` estable salvo que el cambio sea justamente ese.
- No añadir dependencias nuevas sin aprobación explícita del usuario.
- No ejecutar `npm run eject` nunca.

## Política de borrado

Antes de borrar una sección o componente:

1. Confirmar con el usuario — no es una decisión que el agente tome solo.
2. Si se aprueba, borrar el import en `App.jsx`, la carpeta del componente y cualquier CSS/asset
   que solo ese componente use, y desinstalar cualquier dependencia que quede sin otro consumidor
   (ver el precedente: `Testimonials` se eliminó 2026-08-14 con aprobación explícita del usuario,
   incluyendo `npm uninstall swiper` porque nada más lo usaba).

## Rollback

`git diff` antes de commitear. Restaurar con `git restore <path>` acotado a archivos concretos,
nunca `git reset --hard` ni `git clean -f` sin pedirlo explícitamente el usuario.

## Cuándo delega

- Verificación visual del resultado → `visual-qa`.
- Qué copy/contenido es seguro afirmar → `portfolio-career-positioning`.
