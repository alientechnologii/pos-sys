# POS-SYS: Sistema de Punto de Venta con Inventario Perpetuo

**Sistema de Punto de Venta integral con inventario perpetuo, integración de Mercado Pago, escaneo de códigos de barras, impresoras térmicas y sistema de tarjetas de fidelización.**

## 🚀 Características

- ✅ Aplicación de escritorio (Electron + React + TypeScript)
- ✅ Backend robusto (Express.js + PostgreSQL)
- ✅ Componentes móviles (React Native ready)
- ✅ Integración Mercado Pago
- ✅ Soporte para escáneres de código de barras
- ✅ Impresoras térmicas
- ✅ Sistema de tarjetas de fidelización
- ✅ Inventario en tiempo real
- ✅ Reportes de ventas
- ✅ Interfaz en español

## 📁 Estructura del Proyecto

```
pos-sys/
├── desktop/              # Aplicación Electron (escritorio)
├── backend/              # API Express.js
├── mobile/               # Aplicación React Native
├── shared/               # Código compartido
├── docs/                 # Documentación
├── .github/              # Workflows y configuración
└── docker-compose.yml    # Configuración de servicios
```

## 🛠️ Tech Stack

### Desktop
- **Electron** - Framework para aplicación de escritorio
- **React 18** - UI Framework
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Redux** - Gestión de estado

### Backend
- **Node.js + Express.js** - API REST
- **PostgreSQL** - Base de datos principal
- **SQLite** - Almacenamiento local (offline)
- **Sequelize** - ORM
- **JWT** - Autenticación

### Mobile
- **React Native** - Framework multiplataforma
- **TypeScript**
- **Redux**

### Integraciones
- **Mercado Pago SDK** - Procesamiento de pagos
- **Barcode Scanner** - Lectura de códigos
- **Print API** - Impresoras térmicas

## 📋 Requisitos Previos

- Node.js 16+
- PostgreSQL 12+
- npm o yarn
- Git

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone https://github.com/alientechnologii/pos-sys.git
cd pos-sys
```

### 2. Instalar dependencias
```bash
# Backend
cd backend
npm install

# Desktop
cd ../desktop
npm install

# Mobile (opcional)
cd ../mobile
npm install
```

### 3. Configurar variables de entorno
```bash
# Backend
cp backend/.env.example backend/.env
# Editar backend/.env con tus credenciales de BD y Mercado Pago
```

### 4. Iniciar la BD
```bash
cd backend
npm run db:migrate
```

### 5. Ejecutar en desarrollo
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Desktop
cd desktop
npm start
```

## 📚 Documentación

- [Guía de Instalación](docs/INSTALACION.md)
- [API Documentation](docs/API.md)
- [Guía de Desarrollo](docs/DESARROLLO.md)
- [Integración Mercado Pago](docs/MERCADO_PAGO.md)
- [Hardware](docs/HARDWARE.md)

## 🔐 Seguridad

- Variables de entorno para credenciales sensibles
- JWT para autenticación
- Validación de entrada
- HTTPS en producción
- Encriptación de datos sensibles

## 📝 Licencia

MIT

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📧 Soporte

Para reportar problemas o sugerencias, abre un issue en el repositorio.
