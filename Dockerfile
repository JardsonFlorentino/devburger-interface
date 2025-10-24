Etapa 1: build

FROM node:20-alpine AS build

WORKDIR /app

Instalar pacotes necessários para compilações nativas

RUN apk add --no-cache python3 make g++

Copiar package.json e package-lock.json

COPY package*.json ./

Limpar cache e instalar dependências forçando a recarga

RUN npm cache clean --force
RUN npm install --force

Copiar restante dos arquivos

COPY . .

Build da aplicação

RUN npm run build

Etapa 2: servidor

FROM nginx:alpine

Ação Crítica: Copia a configuração customizada do Nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

Copia os arquivos de build

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]