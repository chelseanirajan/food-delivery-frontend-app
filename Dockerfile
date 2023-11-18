# stage 1 : Build the angular app
FROM node:16 as Build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 2: serve the angular app using NGinx
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]