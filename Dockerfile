FROM node:carbon-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Server

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
# Move build to nginx folder
COPY --from=node /usr/src/app/dist .

EXPOSE 80
