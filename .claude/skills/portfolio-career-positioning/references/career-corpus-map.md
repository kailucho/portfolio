# Mapa del corpus de carrera (fuente de verdad del copy del portfolio)

Todo bajo `D:\KAI\proyectos\career-analysis\` — **solo lectura**. Nunca escribir aquí; si el
corpus está mal o incompleto, es una tarea aparte y aprobada por el usuario, no algo que este
skill corrija por su cuenta.

## Documentos obligatorios antes de escribir cualquier copy

- `12-portfolio\portfolio-redesign.md` — **plan de contenido confirmado por el usuario** para
  este portfolio exacto. Tratarlo como vinculante, no como sugerencia.
- `09-master-career-profile\CAREER_POSITIONING.md` — posicionamiento, elevator pitches por
  audiencia, riesgos y mitigaciones.
- `09-master-career-profile\PROFILE.md`, `EXPERIENCE.md`, `METRICS.md`, `ACHIEVEMENTS.md`,
  `AI_SKILLS.md`, `SKILLS.md` — evidencia graduada por confianza.
- `12-portfolio\case-study-dota-ai-coach.md`
- `12-portfolio\case-study-supervisa-360.md`
- `12-portfolio\case-study-dota-plus-free.md`
- `12-portfolio\case-study-simulador-credito-telegram.md`
- `12-portfolio\case-study-utp-facial-recognition.md`

## Grading de confianza (respetar siempre)

`VERIFIED` → puede publicarse tal cual.
`STRONG_INFERENCE` → puede publicarse solo si el copy queda matizado (no como hecho absoluto).
`NEEDS_USER_CONFIRMATION` / `UNKNOWN` → **no publicar**. Preguntar al usuario primero.
`evidence_source: work_experience_unaudited` → marcar en el resumen de cambios al usuario; ni
mantenerlo ni borrarlo en silencio.

## Decisiones ya confirmadas por el usuario (no relitigar)

1. Headline: **"Senior Software Engineer — AI Systems"** (reemplaza "React Developer & Frontend
   Engineer" en `About.jsx`).
2. **Eliminar** las cards "15+ Clients Worldwide" y "25+ Completed Projects" — el usuario
   confirmó que eran cifras infladas sin base real.
3. "5+ Years in the Industry" → **"7+ Years in the Industry"** (trabajando desde enero 2019).
4. Cards de reemplazo sugeridas: "AI in Production" (microservicio de Computer Vision en UTP) y
   "4 Flagship Personal Projects".
5. `Services.jsx` tiene `Lorem ipsum` sin reemplazar — reescribir con evidencia real o remover la
   sección con aprobación del usuario, nunca dejarlo así.
6. Testimonials fue **eliminado** (2026-08-14) — no tenía testimonios reales, solo contenido
   inventado ("Tina snow", Lorem ipsum). No revivir la sección sin testimonios reales aportados
   por el usuario.
7. Agregar sección "Professional Experience" (UTP, Computer Vision en producción) antes de
   Portfolio.
8. NestJS, GraphQL, MongoDB, Tailwind CSS listados en `Experience.jsx`: confirmado como
   experiencia laboral real no cubierta por este audit — mantener pero marcar internamente como
   `evidence_source: work_experience_unaudited`.

## Contenido: dónde vive (Contentful eliminado 2026-08-14)

Ya no hay CMS. Todo el contenido del sitio vive en `src/data/*.js` (`profile.js`,
`experience.js`, `skills.js`, `education.js`, `projects.js`), controlado en el repo. Los 5 case
studies completos (formato problem/context/myRole/architecture/.../learnings) están en
`projects.js`, copiados de los `case-study-*.md` de abajo. Cualquier copy nuevo o corrección se
edita directamente ahí — no hay credenciales de CMS que gestionar ni bloqueo de esquema.
