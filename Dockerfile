Indica la imagen base que utilizarás para tu contenedor
FROM node:14

Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

Copia los archivos de tu aplicación al directorio de trabajo del contenedor
COPY . /app

Instala las dependencias de tu aplicación
RUN npm install

Expone el puerto en el que se ejecuta tu aplicación (si es necesario)
EXPOSE 3000

Define el comando que se ejecutará cuando el contenedor se inicie
CMD ["npm", "start"]