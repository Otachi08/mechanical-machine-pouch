# Mechanical Machine Pouch - Sitio Web

## 📁 Estructura de Archivos

```
proyecto/
│
├── index.html          # Página principal (HTML limpio sin JavaScript)
│
├── css/
│   └── style.css      # Hoja de estilos (totalmente responsive y comentada)
│
├── js/
│   └── main.js        # JavaScript separado (toda la funcionalidad)
│
└── img/               # Carpeta para imágenes (crear esta carpeta)
    └── logo2.png      # Logo de la empresa
```

## 🚀 Instrucciones de Uso

### 1. Configuración Inicial

1. Crea una carpeta `img` en la raíz del proyecto
2. Coloca tu logo como `logo2.png` dentro de la carpeta `img`
3. Abre `index.html` en tu navegador

### 2. Estructura de Carpetas Requerida

```
tu-proyecto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    └── logo2.png
```

## ✨ Características Implementadas

### 🔒 Protección de Imágenes
- Los logos NO se pueden arrastrar
- Click derecho deshabilitado en los logos
- No se pueden copiar fácilmente

### 📱 Diseño Responsive
- **Desktop**: Diseño completo con todas las características
- **Tablet (1024px)**: Ajustes para pantallas medianas
- **Móvil (768px)**: Menú hamburguesa, diseño de una columna
- **Móvil pequeño (480px)**: Optimizado para pantallas muy pequeñas

### 🎨 Mejoras Visuales
- Animaciones suaves al cargar
- Efectos hover en todos los elementos interactivos
- Transiciones fluidas
- Gradientes modernos

### 📋 Formulario de Contacto
- Validación en tiempo real
- Envío vía AJAX (no recarga la página)
- Mensajes de éxito/error
- Integrado con Formspree

### 🎯 Funcionalidades JavaScript
- Menú hamburguesa para móviles
- Modal de contacto
- Smooth scroll
- Protección de imágenes
- Animaciones al scroll
- Header sticky con efectos

## 🔧 Personalización

### Cambiar Colores
Edita las variables en `css/style.css` (líneas 1-20):

```css
:root {
  --primary-color: #2D4A1F;      /* Verde oscuro */
  --secondary-color: #8BC34A;    /* Verde claro */
  --accent-color: #7CB342;       /* Verde acento */
  /* ... más colores */
}
```

### Cambiar Información de Contacto
Edita el HTML en `index.html` en la sección de contacto:

```html
<!-- Busca la sección con id="contacto" -->
<section id="contacto" class="contact-info-section">
  <!-- Aquí están los datos de contacto -->
</section>
```

### Cambiar Enlaces de Redes Sociales
Edita los enlaces en `index.html`:

```html
<a href="https://facebook.com/TU_USUARIO" target="_blank">
<a href="https://instagram.com/TU_USUARIO" target="_blank">
<a href="https://linkedin.com/company/TU_EMPRESA" target="_blank">
<a href="https://wa.me/18098153285" target="_blank">
```

### Cambiar Endpoint del Formulario
En `index.html`, busca:

```html
<form id="contactForm" action="https://formspree.io/f/TU_ID_AQUI" method="POST">
```

## 📱 Puntos de Quiebre (Breakpoints)

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Móvil**: 480px - 768px
- **Móvil pequeño**: < 480px

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde Oscuro | `#2D4A1F` | Color principal, headers, títulos |
| Verde Claro | `#8BC34A` | Color secundario, acentos |
| Verde Acento | `#7CB342` | Botones, hover effects |
| Blanco | `#FFFFFF` | Fondos, texto en áreas oscuras |
| Gris Claro | `#e0e0e0` | Bordes, separadores |

## 📝 Comentarios en el Código

### CSS (style.css)
- **Sección 1-2**: Variables y reset
- **Sección 3**: Protección de imágenes
- **Sección 4-6**: Navegación y header
- **Sección 7**: Hero (cabecera)
- **Sección 8-13**: Secciones del contenido
- **Sección 14-17**: Footer y botones
- **Sección 18**: Animaciones
- **Sección 19-21**: Media queries (responsive)
- **Sección 22**: Accesibilidad

### JavaScript (main.js)
- **Sección 1**: Protección de imágenes
- **Sección 2**: Menú hamburguesa
- **Sección 3**: Smooth scroll
- **Sección 4**: Modal del formulario
- **Sección 5**: Validación de formulario
- **Sección 6**: Animaciones scroll
- **Sección 7**: Header sticky
- **Sección 8**: Prevenir zoom iOS
- **Sección 9-14**: Funcionalidades adicionales

## 🐛 Solución de Problemas

### El menú no se abre en móvil
- Verifica que `main.js` esté correctamente vinculado
- Abre la consola del navegador (F12) y busca errores

### Las imágenes no se ven
- Verifica que la carpeta `img` exista
- Verifica que el nombre del archivo sea exactamente `logo2.png`
- Revisa las rutas en el HTML

### El formulario no envía
- Verifica que el endpoint de Formspree sea correcto
- Verifica tu conexión a internet
- Revisa la consola del navegador por errores

### El diseño se sale en móvil
- Asegúrate de tener la etiqueta viewport en el HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 📞 Soporte

Para más información sobre el diseño o personalización:
- Email: info@mechanicalmachine.com
- Teléfono: +1 (809) 815-3285

## 📄 Licencia

© 2026 Mechanical Machine Pouch. Todos los derechos reservados.

---

**Nota**: Este sitio web está optimizado para:
- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS 12+
- ✅ Android 8+
- ✅ Accesibilidad (WCAG 2.1 AA)