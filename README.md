# IMAGEN - Portafolio de Fotografía Profesional

Sitio web profesional para fotógrafa, inspirado en el estilo minimalista de Ryan Edy Photography.  
**Hecho con HTML, CSS y JavaScript puro** — Sin frameworks, sin dependencias.

---

## 🚀 Despliegue en Vercel

### Paso 1: Subir a GitHub
1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos de esta carpeta
3. O usa la línea de comandos:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/imagen-photography.git
git push -u origin main
```

### Paso 2: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Click en **"Add New Project"**
3. Importa tu repositorio
4. En la configuración:
   - **Framework Preset**: `Other`
   - **Build Command**: (dejar vacío)
   - **Output Directory**: `.` (punto)
5. Click **Deploy**

> 💡 Vercel detectará automáticamente que es un sitio estático y lo servirá desde la raíz.

### Paso 3: Dominio personalizado (opcional)
1. En el dashboard de Vercel, ve a tu proyecto
2. Click en **Settings** → **Domains**
3. Agrega tu dominio personalizado

---

## 📸 Cómo Agregar/Editar Fotografías

### Método 1: Desde GitHub (Recomendado para tu cliente)

Tu cliente puede agregar fotos **sin tocar código**, solo editando un archivo JSON.

#### 1. Editar `data/portfolio.json`
1. Ve al repositorio en GitHub
2. Navega a `data/portfolio.json`
3. Click en el lápiz ✏️ (Edit this file)
4. Agrega un nuevo objeto al array:

```json
{
  "slug": "mi-nueva-foto",
  "title": "Título de la Foto",
  "category": "retratos",
  "description": "Descripción breve de la fotografía.",
  "image": "images/portfolio/mi-foto.jpg",
  "date": "2026-07-31",
  "featured": true,
  "order": 7
}
```

5. **Importante**: Agrega una coma `,` después del cierre `}` del objeto anterior
6. Click en **Commit changes**

#### 2. Subir la imagen
1. Ve a `images/portfolio/` en GitHub
2. Click en **Add file** → **Upload files**
3. Arrastra o selecciona la imagen
4. El nombre del archivo debe coincidir con el campo `image` del JSON
5. Click en **Commit changes**

#### 3. ¡Listo!
Vercel detectará los cambios y re-desplegará automáticamente en ~30 segundos.

---

### Método 2: Usando el Panel de Admin

1. Abre `admin/index.html` en tu navegador (localmente)
2. Llena el formulario con los datos de la foto
3. Click en **"Generar JSON"**
4. Copia el resultado
5. Pégalo en `data/portfolio.json` en GitHub
6. Sube la imagen correspondiente

---

### Método 3: Desde tu computadora

```bash
# Clona el repo
git clone https://github.com/TU-USUARIO/imagen-photography.git
cd imagen-photography

# Agrega la imagen
cp ~/Descargas/mi-foto.jpg images/portfolio/

# Edita data/portfolio.json con tu editor favorito
# Agrega el nuevo objeto al array

# Sube los cambios
git add .
git commit -m "Agrega nueva foto: mi-foto"
git push origin main
```

---

## 📁 Estructura del Proyecto

```
imagen-photography/
├── index.html              ← Página principal
├── css/
│   └── styles.css          ← Todos los estilos
├── js/
│   └── app.js              ← Toda la lógica JavaScript
├── data/
│   └── portfolio.json      ← Base de datos del CMS
├── images/
│   └── portfolio/          ← Aquí van las fotos
├── admin/
│   └── index.html          ← Panel de administración simple
└── README.md               ← Este archivo
```

---

## 🎨 Personalización

### Cambiar colores
Edita `css/styles.css`, busca `:root`:
```css
:root {
    --bg: #0a0a0a;        /* Fondo */
    --text: #ffffff;      /* Texto */
    --muted: #888888;     /* Texto secundario */
}
```

### Cambiar información de contacto
Edita `index.html`, busca la sección `#contacto`:
```html
<a href="mailto:tu-email@ejemplo.com">...</a>
<a href="tel:+1234567890">...</a>
```

### Cambiar texto "Sobre Mí"
Edita la sección `#sobre-mi` en `index.html`.

---

## 📝 Campos del JSON

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `slug` | string | Identificador único (sin espacios) |
| `title` | string | Título de la foto |
| `category` | string | Categoría (cualquiera que quieras) |
| `description` | string | Descripción corta |
| `image` | string | Ruta relativa a la imagen |
| `date` | string | Fecha en formato AAAA-MM-DD |
| `featured` | boolean | `true` para destacarla |
| `order` | number | Orden de aparición (1 = primero) |

---

## 📧 Formulario de Contacto

El formulario usa **Formspree** (gratuito):
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Copia el endpoint URL (ej: `https://formspree.io/f/abcdefgh`)
4. Reemplaza `YOUR_FORM_ID` en `index.html`:
```html
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

---

## ⚡ Características

- ✅ **100% HTML/CSS/JS puro** — Sin dependencias
- ✅ **Diseño minimalista** estilo Ryan Edy
- ✅ **Responsive** — Móvil, tablet, desktop
- ✅ **Galería con filtros** por categoría
- ✅ **Lightbox** con navegación por teclado
- ✅ **CMS basado en JSON** — Fácil de editar
- ✅ **Panel de admin** incluido
- ✅ **Animaciones suaves** con CSS + Intersection Observer
- ✅ **Optimizado para Vercel/GitHub Pages**

---

Hecho con ❤️ para IMAGEN Fotografía
