# Usa una imagen oficial de Node
FROM node:current

# Crea el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto
EXPOSE 3000

# Variable de entorno
ENV NODE_ENV=production

# Comando por defecto
CMD ["npm", "start"]
