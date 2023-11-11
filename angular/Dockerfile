FROM node:18-alpine3.17 as build
RUN mkdir -p /app
WORKDIR /app
RUN npm cache clean --force
COPY package.json /app
RUN npm i
COPY . /app
RUN npm run build

FROM nginx:1.24.0-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular/browser /usr/share/nginx/html