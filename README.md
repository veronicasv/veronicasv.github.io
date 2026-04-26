# 🌿 L'ada Natural - Sitio Web

**La que vuelve a tu esencia**

## 📁 Estructura del Proyecto

```
lada-natural/
├── index.html                    # Página principal
├── productos.html                # Catálogo de productos
├── nosotros.html                 # Sobre nosotros
├── contacto.html                 # Formulario de contacto
├── admin.html                    # Panel de administración (privado)
├── laboratorio-natural.html      # Sistema de gestión interno
├── styles.css                    # Estilos del sitio
├── script.js                     # JavaScript
└── README.md                     # Este archivo
```

## 🚀 Cómo Subir tu Sitio a Internet GRATIS

### Opción 1: GitHub Pages (RECOMENDADO)

**Ventajas:** Gratuito, rápido, confiable, con SSL gratis

#### Paso 1: Crear cuenta en GitHub
1. Ve a https://github.com
2. Crea una cuenta gratuita

#### Paso 2: Crear un repositorio
1. Haz clic en "New repository"
2. Nombre: `ladanatural-web`
3. Marca como "Public"
4. Crea el repositorio

#### Paso 3: Subir los archivos
1. Arrastra todos los archivos HTML, CSS y JS al repositorio
2. Haz commit de los cambios

#### Paso 4: Activar GitHub Pages
1. Ve a Settings → Pages
2. En "Source" selecciona "main branch"
3. Guarda
4. Tu sitio estará en: `https://tuusuario.github.io/ladanatural-web`

#### Paso 5: Conectar tu dominio ladanatural.com
1. En GitHub Pages, agrega tu dominio custom: `ladanatural.com`
2. Ve a GoDaddy → DNS Management
3. Agrega estos registros:

**Registro A (4 registros):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Type: A
Name: @
Value: 185.199.109.153
TTL: 600

Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

**Registro CNAME:**
```
Type: CNAME
Name: www
Value: tuusuario.github.io
TTL: 600
```

4. Espera 10-30 minutos para que se propague
5. ¡Listo! Tu sitio estará en ladanatural.com

---

### Opción 2: Netlify (MUY FÁCIL)

**Ventajas:** Deployment automático, SSL gratis, muy fácil de usar

#### Paso 1: Crear cuenta
1. Ve a https://netlify.com
2. Regístrate gratis

#### Paso 2: Subir el sitio
1. Arrastra la carpeta completa a Netlify
2. Tu sitio se publicará automáticamente en una URL temporal

#### Paso 3: Conectar dominio
1. Ve a Domain Settings
2. Agrega `ladanatural.com`
3. Netlify te dará instrucciones DNS
4. Ve a GoDaddy → DNS Management
5. Configura según las instrucciones de Netlify
6. ¡Listo!

---

### Opción 3: Vercel

Similar a Netlify, muy recomendado para proyectos estáticos.

---

## 🔐 Panel de Administración

### Acceso
- URL: `https://ladanatural.com/admin.html`
- Usuario: `admin`
- Contraseña: `ladanatural2024`

### ⚠️ IMPORTANTE - Cambiar Credenciales
Antes de subir a producción, edita `admin.html` línea 111-112:

```javascript
const ADMIN_USERNAME = 'tu-nuevo-usuario';
const ADMIN_PASSWORD = 'tu-nueva-contraseña-segura';
```

### Integrar tu Laboratorio Natural
1. Copia tu archivo HTML de gestión
2. Renómbralo como `laboratorio-natural.html`
3. Reemplaza el archivo placeholder
4. Sube todo de nuevo

---

## ✏️ Personalización

### Cambiar Colores
Edita `styles.css` líneas 10-17:

```css
--color-primario: #6B8E4E;      /* Verde principal */
--color-secundario: #8B7355;    /* Marrón tierra */
--color-acento: #D4A574;        /* Dorado */
```

### Agregar Imágenes
Reemplaza los placeholders en cada página:

```html
<!-- Busca esto: -->
<div class="placeholder-img">Nombre Producto</div>

<!-- Reemplázalo por: -->
<img src="imagenes/producto.jpg" alt="Nombre Producto">
```

### Cambiar Textos
- **Emails:** Busca `info@ladanatural.com` y reemplaza
- **Redes:** Busca `@ladanatural` y actualiza
- **Teléfonos:** Agrega en la sección de contacto

---

## 📧 Hacer que el Formulario Funcione

Actualmente el formulario es simulado. Para hacerlo funcional:

### Opción 1: Formspree (Gratis)
1. Ve a https://formspree.io
2. Crea una cuenta
3. Obtén tu endpoint
4. En `contacto.html` cambia el form:

```html
<form action="https://formspree.io/f/TU-ID-AQUI" method="POST">
```

### Opción 2: EmailJS (Recomendado)
1. Regístrate en https://emailjs.com
2. Configura tu servicio de email
3. Agrega el código en `script.js`

---

## 📱 Responsive

El sitio está optimizado para:
- ✅ Computadoras de escritorio
- ✅ Tablets
- ✅ Móviles

---

## 🎨 Características

- ✅ Diseño elegante y natural
- ✅ 100% responsive
- ✅ Navegación suave
- ✅ Formulario de contacto
- ✅ Catálogo de 10 productos
- ✅ Panel de administración privado
- ✅ Animaciones sutiles
- ✅ SEO friendly
- ✅ Carga rápida

---

## 📞 Soporte

Si necesitas ayuda:
1. Lee esta documentación completa
2. Revisa los comentarios en el código
3. Busca tutoriales de GitHub Pages o Netlify en YouTube

---

## 🔄 Actualizaciones Futuras

### Para agregar e-commerce:
- Shopify
- WooCommerce
- MercadoShops
- TiendaNube

### Para agregar blog:
- Medium
- WordPress
- Ghost

---

## ✅ Checklist Antes de Publicar

- [ ] Cambiar credenciales de admin
- [ ] Actualizar emails de contacto
- [ ] Agregar redes sociales reales
- [ ] Reemplazar imágenes placeholder
- [ ] Crear tu logo
- [ ] Configurar formulario de contacto
- [ ] Integrar Laboratorio Natural
- [ ] Probar en móvil
- [ ] Configurar DNS en GoDaddy
- [ ] Activar SSL (automático en GitHub Pages/Netlify)

---

**¡Tu sitio está listo para despegar! 🚀**

L'ada Natural - La que vuelve a tu esencia 🌿
