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
### 3. **Configura `STEAM_API_KEY`**

Crea un archivo `.env` en la raíz del proyecto con tu clave:

```bash
STEAM_API_KEY=tu_clave_de_steam
```

También puedes editar `docker-compose.yml` y colocar el valor directamente en el servicio `backend`.

### **4. Levanta todos los servicios con Docker Compose**
```bash
docker-compose up --build -d
```
Esto inicia:

MongoDB (puerto 27017)

Mongo Express (http://localhost:8081)

Backend (http://localhost:3000)

Frontend (http://localhost:4200)

### **5. Accede a los servicios**

Frontend Angular: http://localhost:4200

Backend API: http://localhost:3000

Mongo Express: http://localhost:8081
Usuario: admin | Contraseña: admin

