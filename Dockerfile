FROM node:12-slim

RUN apt-get update && apt-get install curl -y

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://mirrors.tencent.com/npm/

RUN npm install

COPY . ./

CMD ["npm", "start"]