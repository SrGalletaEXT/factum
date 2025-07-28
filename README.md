# FACTUM

**Plataforma web para rastrear, comparar y compartir logros de videojuegos usando la API de Steam.**  
Arquitectura profesional y totalmente dockerizada: Angular (frontend), Node.js/Express (backend), MongoDB (database) y Mongo Express (admin visual DB).

---

## 🚀 Stack tecnológico

- **Frontend:** Angular (última versión) servido con Nginx
- **Backend:** Node.js (última versión) + Express + Mongoose
- **Base de datos:** MongoDB
- **Administrador visual DB:** Mongo Express
- **Orquestación:** Docker Compose

---

## 🗂️ Estructura de carpetas
factum/
├── backend/ # API Node.js
├── frontend/ # Angular
├── data/ # Persistencia de MongoDB (no se sube a git)
├── docker-compose.yml
└── README.md

---

## ⚡ ¿Cómo levantar el proyecto?

### 1. **Pre-requisitos**

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado (Windows, Mac, Linux)
- Git (opcional, para clonar el repo)

### 2. **Clona el repo**

```bash
git clone https://github.com/SrGalletaEXT/factum.git
cd factum
```
### **3. Levanta todos los servicios con Docker Compose**
```bash
docker-compose up --build -d
```
Esto inicia:

MongoDB (puerto 27017)

Mongo Express (http://localhost:8081)

Backend (http://localhost:3000)

Frontend (http://localhost:4200)

### Autenticación con Steam

El backend ahora utiliza `passport-steam` para permitir iniciar sesión con la cuenta de Steam. Configura las siguientes variables de entorno en el servicio **backend**:

```
STEAM_API_KEY=tu_clave_de_steam
STEAM_RETURN_URL=http://localhost:3000/auth/steam/return
STEAM_REALM=http://localhost:3000/
SESSION_SECRET=alguna_clave_segura
```

Luego accede a `http://localhost:4200` y pulsa el botón **Login with Steam**.

### **4. Accede a los servicios**

Frontend Angular: http://localhost:4200

Backend API: http://localhost:3000

Mongo Express: http://localhost:8081
Usuario: admin | Contraseña: admin

