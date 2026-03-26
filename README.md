# INCONED S.A.S. — Corporate Website

Sitio web corporativo de alto rendimiento desarrollado para una empresa de diseño, obras civiles y construcción en Ecuador. 

El objetivo principal del proyecto fue crear una plataforma web que combine un SEO técnico sólido para captación de clientes locales, con una experiencia de navegación fluida y moderna.

## 🛠️ Stack Tecnológico

* **Framework:** Astro (elegido por su arquitectura de "Islas" y generación de sitios estáticos, ideal para SEO y tiempos de carga rápidos).
* **UI/Componentes:** React (utilizado exclusivamente para componentes interactivos complejos).
* **Estilos:** Tailwind CSS.
* **Lenguaje:** TypeScript.

## ⚙️ Arquitectura y Decisiones Técnicas

A diferencia de una SPA tradicional de React, este proyecto utiliza la arquitectura de Astro para enviar la menor cantidad de JavaScript posible al cliente. 

* **Navegación SPA simulada:** Implementación de la API de *View Transitions* nativa del navegador para lograr cambios de ruta fluidos sin el peso de un router de cliente complejo (como React Router).
* **Generación Dinámica de Rutas (SSG):** Uso de plantillas dinámicas (`[id].astro`) para compilar en tiempo de construcción las páginas del portafolio de proyectos, mejorando el TTFB (Time to First Byte).
* **Optimización de Conversión (CRO):** Integración de un componente flotante persistente de WhatsApp que genera enlaces dinámicos prellenados con la API de WhatsApp, facilitando el contacto directo del cliente.
* **Diseño Asimétrico:** Implementación de un layout basado en *Bento Grid* utilizando CSS Grid y Tailwind para la galería de proyectos, garantizando total adaptabilidad en dispositivos móviles.

## 📂 Estructura del Proyecto

```text
/
├── public/          # Archivos estáticos e imágenes (optimizados)
├── src/
│   ├── components/  # Componentes UI reutilizables (.astro y .tsx)
│   ├── layouts/     # Wrappers de página (SEO meta tags, ViewTransitions)
│   ├── pages/       # Sistema de enrutamiento basado en archivos
│   └── styles/      # Configuración base de Tailwind y variables CSS
├── astro.config.mjs
└── tailwind.config.mjs