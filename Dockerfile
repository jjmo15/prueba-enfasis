FROM node:16.14.2

# Copia los archivos necesarios al contenedor
COPY . /app/

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Ejecuta comandos en el contenedor
RUN npm install

# Expone un puerto
EXPOSE 3001

# Define una variable de entorno
ENV DB_URL postgres://hvgodojd:BPNdoLTxNfY3osjO_Xk5MulSbNTXlIt6@peanut.db.elephantsql.com/hvgodojd

# Ejecuta un comando al iniciar el contenedor
CMD ["npm", "start"]
