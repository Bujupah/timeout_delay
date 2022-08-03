FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY app.js ./
RUN yarn install

EXPOSE 3001
CMD [ "yarn", "start" ]