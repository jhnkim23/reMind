FROM node:18-alpine

WORKDIR /reMind

COPY . .

RUN npm install

RUN npm install reactflow

RUN npm install styled-components

RUN npm install react-icons

RUN npm install axios


RUN npm install elkjs

RUN npm run build


EXPOSE 5173


CMD [ "npm", "run", "dev" ]
