# SENSORIUM5 - Molecular Bar Experience

Sitio conceptual de alta estética para barra de bebidas moleculares con enfoque **Future Age / Space Age**.

## Identidad visual actual

- Estilo: minimalista, impactante y sofisticado.
- Paleta: negro / blanco con acentos naranja.
- Narrativa: coctelería molecular + tecnología escénica (videomapping, lasermapping, hologramas).
- Arquitectura de contenido:
  - Manifiesto
  - Menús: **Quark**, **Órbita**, **Fragments of Flavor**
  - Experiencia escénica
  - Reservas y colaboraciones

## Estructura

- `index.html` - página principal y narrativa de marca
- `css/styles.css` - sistema visual minimal sci-fi
- `js/main.js` - interacciones:
  - menú responsive
  - reveal on-scroll (IntersectionObserver)
  - navegación activa por sección
  - validación de formulario con feedback
- `render.yaml` - configuración opcional para despliegue
- `.gitignore`
- `TODO.md`

## Ejecutar localmente

Abrir `index.html` en navegador o usar Live Server en VS Code.

## Publicar en Onrender (www.onrender.com)

1. Crear/usar repo en GitHub.
2. En Onrender: **New +** → **Static Site**.
3. Conectar repo.
4. Configurar:
   - **Build Command**: vacío (o `echo "static site"` si es obligatorio)
   - **Publish Directory**: `./`
5. Crear servicio y esperar deploy.

## Deploy automático

Cada push a `main` dispara redeploy automático.
