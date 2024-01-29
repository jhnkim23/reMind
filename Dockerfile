FROM node:18-alpine

WORKDIR /reMind

COPY package.json .

RUN npm install

RUN npm install reactflow

RUN npm install styled-components

RUN npm install react-icons

COPY . .

RUN npm run build


EXPOSE 5173

CMD [ "npm", "run", "dev" ]