FROM node:carbon

WORKDIR ./

COPY ./package.json ./package-lock.json ./app.js ./

RUN npm install

CMD [ "npm", "start" ]
