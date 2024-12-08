FROM node:22-alpine AS build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=root nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443