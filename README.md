# 🔧 Mechanical Machine Pouch

![Mechanical Machine Pouch Logo](img/logo2.png)

## 📋 Descripción

Sitio web corporativo para **Mechanical Machine Pouch**, empresa especializada en soluciones mecánicas de alta precisión para la industria. Ofrecemos servicios de mantenimiento preventivo, reparación de maquinaria industrial y consultoría técnica en República Dominicana.

## ✨ Características

- 🎨 **Diseño Moderno y Responsive** - Adaptado a todos los dispositivos (desktop, tablet, mobile)
- 📱 **Menú Hamburguesa** - Navegación optimizada para móviles
- 💬 **Formulario de Contacto Funcional** - Integrado con Formspree para recibir mensajes
- 🎯 **Modal Interactivo** - Formulario que se abre en ventana emergente
- 🔘 **Botón Flotante** - Acceso rápido al formulario de contacto desde cualquier sección
- ⚡ **Animaciones Suaves** - Transiciones y efectos para mejor experiencia de usuario
- 🎯 **SEO Optimizado** - Meta tags para mejor posicionamiento en buscadores
- 🌐 **Redes Sociales** - Enlaces integrados a todas las plataformas

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño y animaciones
  - Flexbox y Grid para layouts
  - Animaciones CSS personalizadas
  - Media queries para responsive design
- **JavaScript Vanilla** - Interactividad sin frameworks
  - Menú hamburguesa
  - Modal del formulario
  - Validación de formulario
  - Smooth scroll
- **Formspree** - Servicio de envío de formularios

## 📁 Estructura del Proyecto

```
mechanical-machine-pouch/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principales
├── img/
│   └── logo2.png          # Logo de la empresa
├── .gitignore             # Archivos ignorados por Git
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/mechanical-machine-pouch.git
cd mechanical-machine-pouch
```

### Abrir el proyecto

Simplemente abre el archivo `index.html` en tu navegador preferido, o usa un servidor local:

**Opción 1: Abrir directamente**
```bash
# En Mac
open index.html

# En Linux
xdg-open index.html

# En Windows
start index.html
```

**Opción 2: Con Live Server (VSCode)**
- Instala la extensión "Live Server" en VSCode
- Click derecho en `index.html` → "Open with Live Server"

**Opción 3: Con Python**
```bash
# Python 3
python3 -m http.server 8000

# Luego abre: http://localhost:8000
```

## ⚙️ Configuración

### Configurar Formspree (Formulario de Contacto)

1. Crea una cuenta en [Formspree.io](https://formspree.io)
2. Crea un nuevo formulario y obtén tu ID
3. En `index.html`, busca la línea 324 y reemplaza el ID:

```html
<form id="contactForm" action="https://formspree.io/f/TU_ID_AQUI" method="POST">
```

### Actualizar Redes Sociales

En `index.html`, busca las líneas 256-259 y actualiza tus enlaces:

```html
<a href="https://facebook.com/TU_USUARIO" target="_blank">
<a href="https://instagram.com/TU_USUARIO" target="_blank">
<a href="https://linkedin.com/company/TU_EMPRESA" target="_blank">
<a href="https://wa.me/18091234567" target="_blank">
```

### Personalizar Información de Contacto

Actualiza los datos de contacto en las líneas 230-250:
- Dirección
- Teléfono
- Email
- Horarios

## 🎨 Paleta de Colores

El diseño está basado en los colores del logo:

```css
--primary-color: #2D4A1F;      /* Verde oscuro */
--secondary-color: #8BC34A;    /* Verde claro */
--accent-color: #7CB342;       /* Verde lima */
--dark-text: #1A1A1A;          /* Negro */
--bg-light: #f4f7f6;           /* Fondo gris claro */
```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Mobile**: < 480px
- 📱 **Tablet**: 481px - 768px
- 💻 **Desktop**: 769px - 1024px
- 🖥️ **Large Desktop**: > 1024px

## 🌟 Funcionalidades Destacadas

### Formulario de Contacto Modal
- Se abre con múltiples botones (flotante, CTA, servicios, menú)
- Validación en tiempo real
- Envío sin recargar página (AJAX)
- Mensajes de éxito/error
- Se cierra con ESC, click fuera o botón X

### Animaciones
- Fade in del logo hero
- Slide down de títulos
- Hover effects en tarjetas
- Pulso en botón flotante
- Transiciones suaves en todos los elementos

## 📊 SEO y Meta Tags

El sitio incluye:
- ✅ Meta description optimizada
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Favicon configurado
- ✅ Estructura semántica HTML5

## 🔄 Actualizaciones Futuras

- [ ] Blog de noticias de la industria
- [ ] Galería de proyectos completos
- [ ] Sistema de cotizaciones en línea
- [ ] Chat en vivo
- [ ] Multiidioma (Español/Inglés)
- [ ] Portal de clientes

## 👨‍💻 Autor

**Otachi08**
- GitHub: [@Otachi08](https://github.com/Otachi08)

## 📄 Licencia

Este proyecto es privado y pertenece a **Mechanical Machine Pouch**. Todos los derechos reservados © 2026.

## 🤝 Contribuciones

Este es un proyecto privado. Para consultas o sugerencias, contactar a través del formulario en el sitio web.

## 📞 Contacto

- **Email**: info@mechanicalmachine.com
- **Teléfono**: +1 (809) 123-4567
- **Ubicación**: Santo Domingo, República Dominicana
- **Website**: [En desarrollo]

---

⭐ **Desarrollado con dedicación para la excelencia industrial** ⭐