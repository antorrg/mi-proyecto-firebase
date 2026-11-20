# App Pública (`apps/publica`)

Aplicación web pública (Portfolio / Catálogo de proyectos y servicios de **Antorrg**), desarrollada con **React 19**, **TypeScript**, **Vite** y **React Router**. Forma parte del monorepo `mi-proyecto-firebase` y se despliega en el sitio principal de Firebase Hosting (`proyectopreact.web.app`).

---

## ✨ Características Principales

- **Portada Optimizada (`Home`):** Renderiza la presentación principal (`FrontPage`) y el resumen de proyectos destacados (`Marketing` usando `productsPreview`) en una sola consulta de datos.
- **Catálogo y Detalle de Proyectos (`Products`, `DetailProduct`, `Item`):**
  - Listado general de proyectos en `/detalles`.
  - Vista detallada de cada proyecto en `/detalles/:id` con enlace al sitio en vivo o demostración en video, además de su galería de secciones/capturas (`items`).
  - Vista individual de cada captura/sección en `/detalles/item/:id`.
- **Demostraciones en Video (`Videos`):** Reproductor integrado de YouTube para los proyectos que cuentan con recorrido en video (`/videos/:id`).
- **Secciones Informativas (`About` y `Contact`):**
  - Página `/acerca` con soporte para contenido enriquecido.
  - Página `/contacto` con formulario y protección honeypot anti-spam.
- **Modo Claro / Oscuro:** Selector de tema persistente en `localStorage` con detección automática de la preferencia del sistema (`data-bs-theme`).
- **Manejo Resiliente de Errores:** Protegida a nivel global con `ErrorBoundary` y a nivel de rutas con `RouteErrorBoundary` (testeados con Vitest y React Testing Library).
- **Paquetes Compartidos del Monorepo:**
  - Consume tipos unificados desde `@mi-app/types`.
  - Consume estilos globales, íconos y tema Bootstrap personalizado desde `@mi-app/shared-styles`.

---

## 🗺️ Rutas de la Aplicación

| Ruta | Vista / Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `Home` (`FrontPage` + `Marketing`) | Portada principal y tarjetas de vista previa (`productsPreview`) |
| `/detalles` | `Products` | Listado completo de proyectos/productos |
| `/detalles/:id` | `DetailProduct` | Detalle de un proyecto y sus `items` asociados |
| `/detalles/item/:id` | `Item` | Vista ampliada de un item/captura específica |
| `/videos/:id` | `Videos` | Videos demostrativos asociados al `productId` |
| `/acerca` | `About` | Información sobre el autor y servicios |
| `/contacto` | `Contact` | Formulario de contacto y enlace a WhatsApp |

---

## 📁 Estructura Interna (`src/`)

```text
apps/publica/src/
├── api/                  # Capa de acceso a datos asíncrona (preparada para Firestore)
│   ├── frontPage.api.ts
│   ├── product.api.ts
│   ├── item.api.ts
│   ├── video.api.ts
│   └── about.api.ts
├── features/             # Módulos por dominio funcional
│   ├── frontPage/        # FrontPage.tsx, Marketing.tsx
│   ├── product/          # Products.tsx, Product.tsx, DetailProduct.tsx, Item.tsx
│   ├── videos/           # Videos.tsx
│   ├── about/            # About.tsx
│   └── contact/          # Contact.tsx
├── shared/               # Componentes transversales y manejo de errores
│   ├── components/       # Layout.tsx, Navbar.tsx, Footer.tsx
│   └── errors/           # ErrorBoundary, RouteErrorBoundary y sus tests (.test.tsx)
├── views/                # Vistas contenedoras (Home.tsx)
├── routes.tsx            # Definición del router con createBrowserRouter
├── App.tsx               # Punto de montaje con ErrorBoundary + RouterProvider
└── main.tsx              # Entrada principal e importación de @mi-app/shared-styles
```

---

## 🚀 Comandos Útiles

Ejecutados desde la **raíz del monorepo**:

```bash
# Levantar servidor de desarrollo (Vite)
npm run dev:publica

# Ejecutar tests unitarios (Vitest)
npm run test:publica

# Compilar para producción (genera apps/publica/dist)
npm run build:publica

# Desplegar únicamente la app pública en Firebase Hosting
firebase deploy --only hosting:publica
```
