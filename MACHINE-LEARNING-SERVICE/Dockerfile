FROM node:latest

RUN apt-get update || : && apt-get install python -y

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
