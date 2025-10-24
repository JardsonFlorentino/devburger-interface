FROM node:20-alpine AS build

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:alpine



COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]