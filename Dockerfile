FROM node:14.1-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]