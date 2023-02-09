# stage 1 build react app first
FROM node as build

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx
COPY --from=build /app/build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off"]




