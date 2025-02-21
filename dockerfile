FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
#PRUEBA "CARGAR INDEX.HTML"
COPY FRONTEND ./FRONTEND
CMD ["npm" ,"start"]
EXPOSE 3000
