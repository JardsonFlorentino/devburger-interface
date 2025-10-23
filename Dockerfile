# Etapa 1: build
FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependências para native build
RUN apk add --no-cache python3 make g++

# Instala dependências
COPY package*.json ./

RUN npm cache clean --force
RUN npm install --force

# Copia o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: servidor
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expor porta padrão do nginx
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
