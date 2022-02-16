FROM node:latest
ENV PORT=3000
ENV SERVER_URL=http://localhost:3000/api/v1

RUN apt-get update || : && apt-get install -y python build-essential

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
