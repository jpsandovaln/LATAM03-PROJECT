FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN apt update && apt install ffmpeg -y

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]