FROM node:14.21.3-alpine

WORKDIR /

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 4005

CMD ["node", "server-build/index.js"]

