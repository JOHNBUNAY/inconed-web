# 🏗️ INCONED S.A.S. — Sitio Web Corporativo

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![Tecnología](https://img.shields.io/badge/Astro-v5.0-orange)
![Estilos](https://img.shields.io/badge/Tailwind-CSS-blue)

Sitio web moderno, rápido y responsivo desarrollado para **INCONED S.A.S.**, empresa de diseño y construcción en Ecuador.

Este proyecto utiliza una arquitectura **SPA (Single Page Application)** simulada mediante Astro View Transitions, garantizando una navegación instantánea sin recargas de página y una experiencia de usuario Premium.

---

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido con las herramientas más modernas del desarrollo web (2025):

* **[Astro](https://astro.build/):** Framework principal (Rendimiento y SEO).
* **[React](https://react.dev/):** Para componentes interactivos (Hero, Animaciones).
* **[Tailwind CSS](https://tailwindcss.com/):** Sistema de diseño y estilos utilitarios.
* **View Transitions API:** Para animaciones suaves entre páginas (efecto App nativa).
* **TypeScript:** Para lógica robusta y tipado seguro.

---

## ✨ Características Principales

1.  **Navegación SPA:** Transiciones suaves (`slide`) entre secciones sin pantallazos blancos.
2.  **Diseño Bento Grid:** Galería de proyectos moderna y asimétrica.
3.  **Rutas Dinámicas:** Sistema de plantillas (`[id].astro`) para generar páginas de detalle de proyectos automáticamente.
4.  **Dark/Light Mode Híbrido:** Combinación estratégica de secciones oscuras (elegancia) y claras (lectura).
5.  **Integración WhatsApp:**
    * Botón flotante persistente con efecto "ping".
    * Formulario de contacto que redirige a la API de WhatsApp con mensaje prellenado.
6.  **100% Responsive:** Adaptado perfectamente a Móviles, Tablets y Escritorio.
7.  **SEO Optimizado:** Etiquetas Meta, Open Graph (para compartir en redes) y Favicon personalizado.

---

## 📂 Estructura del Proyecto

```text
/
├── public/
│   ├── assets/          # Imágenes de proyectos y logos
│   └── favicon.png      # Ícono de la pestaña
├── src/
│   ├── components/      # Piezas reutilizables (Navbar, Footer, Cards)
│   ├── layouts/         # Plantilla maestra (SEO, ViewTransitions)
│   ├── pages/           # Rutas del sitio
│   │   ├── detalle/     # Plantilla dinámica de proyectos ([id].astro)
│   │   ├── contacto.astro
│   │   ├── index.astro
│   │   └── ...
│   └── styles/          # Estilos globales y configuración de Tailwind
├── astro.config.mjs     # Configuración del framework
└── tailwind.config.mjs  # Configuración de diseño (Colores, Fuentes)