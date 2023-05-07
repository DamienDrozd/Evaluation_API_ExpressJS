FROM node:alpine as base

WORKDIR /app

COPY ./build ./build

COPY ./package.json ./package.json

RUN npm install --production

EXPOSE 3030
CMD ["npm", "run", "start"]
