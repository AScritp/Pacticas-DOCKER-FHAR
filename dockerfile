FROM node:14
WORKDIR /app
COPY package*.json ./
#PRUEBA "CARGAR INDEX.HTML"
COPY FRONTEND ./FRONTEND
RUN npm install
COPY . /app
CMD ["npm" ,"start"]
EXPOSE 3000
