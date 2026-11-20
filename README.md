# Proyecto Mayorista - Monorepo con Firebase

Este repositorio contiene una arquitectura **monorepo** basada en **npm workspaces** para el sistema mayorista, integrando dos aplicaciones web frontend (React + Vite + TypeScript), paquetes compartidos y un backend serverless en **Firebase** (Firestore, Cloud Functions, Authentication, Storage y Multi-Site Hosting).

---

## 📁 Estructura del Proyecto

```text
mi-proyecto-firebase/
├── apps/
│   ├── publica/              # Web pública / catálogo mayorista (React + Vite + TS)
│   └── admin/                # Panel de administración privado (React + Vite + TS)
├── packages/
│   └── shared-types/         # Tipos e interfaces TypeScript compartidos (@mi-app/types)
├── functions/                # Backend en Cloud Functions para Firebase (Node.js 24 + TS)
├── firebase.json             # Configuración de servicios y Multi-Site Hosting
├── .firebaserc               # Proyecto de Firebase y targets de despliegue
├── firestore.rules           # Reglas de seguridad de Cloud Firestore
├── firestore.indexes.json    # Índices compuestos de Cloud Firestore
├── storage.rules             # Reglas de seguridad de Firebase Storage
└── package.json              # Configuración raíz de npm workspaces y scripts globales
```

---

## 🚀 Instalación y Configuración Inicial

El monorepo gestiona desde la raíz las dependencias de `apps/*` y `packages/*`, mientras que `functions/` mantiene sus propias dependencias aisladas para garantizar despliegues limpios en Google Cloud Build.

Para instalar todas las dependencias del proyecto (frontend + backend):

```bash
npm install && npm --prefix functions install
```

---

## 💻 Desarrollo Local

Desde la carpeta raíz puedes levantar cualquiera de las aplicaciones con estos comandos:

- **Iniciar la app pública (`apps/publica`):**
  ```bash
  npm run dev:publica
  ```

- **Iniciar el panel de administración (`apps/admin`):**
  ```bash
  npm run dev:admin
  ```

- **Compilar todo el proyecto (`publica`, `admin` y `functions`):**
  ```bash
  npm run build
  ```

---

## 🔗 Uso de Paquetes Compartidos

### 1. Tipos Compartidos (`@mi-app/types`)
Definidos en `packages/shared-types/index.d.ts`. Se pueden importar tanto en `apps/publica`, `apps/admin` como en `functions/`:

```ts
import type { Usuario } from "@mi-app/types";
```

### 2. Estilos Compartidos (Opcional: `@mi-app/styles`)
Para compartir hojas de estilo CSS o variables globales entre `publica` y `admin`, se puede crear un paquete en `packages/shared-styles` y declararlo como dependencia `"@mi-app/styles": "*"` en ambas aplicaciones.

---

## ☁️ Firebase y Despliegue (Multi-Site Hosting)

El proyecto está vinculado al proyecto de Firebase **`proyectopreact`** y configurado con **Multi-Site Hosting** en `firebase.json` y `.firebaserc`:

| Target | Carpeta compilada | Sitio en Firebase Hosting |
| :--- | :--- | :--- |
| **`publica`** | `apps/publica/dist` | `proyectopreact.web.app` |
| **`admin`** | `apps/admin/dist` | `proyectopreact-admin.web.app` |

> **Nota (solo la primera vez):** Si aún no existe el segundo sitio de Hosting en Firebase Console, créalo con:
> ```bash
> firebase hosting:sites:create proyectopreact-admin
> ```

### Comandos de Deploy

Antes de desplegar el frontend, asegúrate de compilar las aplicaciones (`npm run build`):

- **Desplegar todo el proyecto (Hosting, Functions, Reglas de Firestore y Storage):**
  ```bash
  npm run build && firebase deploy
  ```

- **Desplegar solo la web pública:**
  ```bash
  npm run build:publica && firebase deploy --only hosting:publica
  ```

- **Desplegar solo el panel admin:**
  ```bash
  npm run build:admin && firebase deploy --only hosting:admin
  ```

- **Desplegar solo Cloud Functions:**
  ```bash
  firebase deploy --only functions
  ```

- **Desplegar solo reglas de seguridad (Firestore y Storage):**
  ```bash
  firebase deploy --only firestore:rules,storage
  ```
