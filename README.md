# SENSORIUM5 - Website Template

Plantilla estática lista para publicar con **GitHub + Onrender (www.onrender.com)**.

## Estructura

- `index.html` - página principal
- `css/styles.css` - estilos
- `js/main.js` - interacción básica
- `render.yaml` - configuración opcional de infraestructura para Render/Onrender
- `.gitignore`
- `TODO.md`

## Ejecutar localmente

Solo abre `index.html` en tu navegador o usa una extensión tipo Live Server en VS Code.

## Publicar en Onrender usando GitHub

1. Sube esta carpeta a un repositorio en GitHub.
2. Entra a **www.onrender.com** e inicia sesión.
3. Click en **New +** → **Static Site**.
4. Conecta tu cuenta de GitHub y selecciona el repo.
5. Configura:
   - **Build Command**: (vacío)
   - **Publish Directory**: `.`
6. Click en **Create Static Site**.
7. Onrender hará deploy automático.

## Deploy automático

Cada `git push` a la rama principal vuelve a desplegar el sitio automáticamente.

## Comandos sugeridos para git

```bash
git init
git add .
git commit -m "Initial SENSORIUM5 website template"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## Próximos pasos recomendados

- Conectar formulario de contacto a Formspree, Resend o backend propio.
- Agregar dominio personalizado en Onrender.
- Integrar analítica (Plausible o Google Analytics).
