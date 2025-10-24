# 🍔 DevBurger - Full Stack Application

![DevBurger Banner](src/../public/devBurger.png)

Aplicação full stack de delivery de hambúrgueres construída com React e Node.js, hospedada na **Hetzner** utilizando **Easypanel** para orquestração de containers.

---

## 🌐 Aplicação Online

**🔗 Site:** [https://burger.jardsonflorentino.com.br/](https://burger.jardsonflorentino.com.br/)

### 🧪 Credenciais de Teste

#### Usuário Regular

- **Email:** qualquer endereço (ex: `teste@email.com`)
- **Senha:** crie uma conta no primeiro acesso

#### Usuário Admin (Gerenciamento de Pedidos)

- **Email:** `jardson@email.com`
- **Senha:** `123456`

---

## 📝 Descrição

O **DevBurger** é uma aplicação completa de e-commerce para delivery de hambúrgueres, desenvolvida como parte do curso Full Stack do Dev Club. O projeto demonstra conceitos avançados de desenvolvimento web, incluindo:

- Frontend responsivo e intuitivo com React
- API RESTful robusta com Node.js
- Integração com sistema de pagamentos (Stripe)
- Arquitetura de microsserviços com Docker
- Deploy profissional com Easypanel na Hetzner

---

## 🚀 Funcionalidades

### Para Clientes

- ✅ Navegação por categorias (hambúrgueres, bebidas, sobremesas)
- ✅ Visualização detalhada de produtos
- ✅ Carrinho de compras dinâmico
- ✅ Sistema de checkout com integração Stripe
- ✅ Histórico de pedidos
- ✅ Interface responsiva (mobile-first)

### Para Administradores

- ✅ Gerenciamento de pedidos em tempo real
- ✅ Controle de produtos e categorias
- ✅ Dashboard de vendas
- ✅ Gestão de usuários

---

## 💳 Pagamentos de Teste (Stripe)

Para testar o sistema de pagamento, utilize os cartões de teste da Stripe:

| Bandeira | Número do Cartão | CVV | Validade |
|----------|------------------|-----|----------|
| **Visa** | `4242 4242 4242 4242` | Qualquer 3 dígitos | Qualquer data futura |
| **Visa (Débito)** | `4000 0566 5566 5556` | Qualquer 3 dígitos | Qualquer data futura |
| **Mastercard** | `5555 5555 5555 4444` | Qualquer 3 dígitos | Qualquer data futura |
| **Mastercard (2-series)** | `2223 0031 2200 3222` | Qualquer 3 dígitos | Qualquer data futura |
| **Mastercard (Débito)** | `5200 8282 8282 8210` | Qualquer 3 dígitos | Qualquer data futura |
| **Mastercard (Pré-pago)** | `5105 1051 0510 5100` | Qualquer 3 dígitos | Qualquer data futura |

> ⚠️ **Importante:** Estes são cartões de teste e não processam pagamentos reais.

---

## 🛠️ Stack Tecnológica

### Frontend

- **React** 18.x - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **styled-components** - Estilização CSS-in-JS
- **react-router-dom** - Roteamento SPA
- **Axios** - Cliente HTTP
- **React Hook Form** - Gerenciamento de formulários
- **React Toastify** - Notificações

### Backend

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Sequelize** - ORM para PostgreSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticação
- **Multer** - Upload de arquivos
- **Bcrypt** - Criptografia de senhas
- **Stripe API** - Processamento de pagamentos

### Bancos de Dados

- **PostgreSQL** - Dados relacionais (produtos, categorias, usuários)
- **MongoDB** - Dados não-relacionais (pedidos, logs)

### Infraestrutura

- **Hetzner Cloud** - Servidor VPS
- **Easypanel** - Orquestração de containers
- **Docker** - Containerização
- **Nginx** - Reverse proxy

---

## 📦 Instalação Local

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- MongoDB
- Yarn ou npm

### Frontend

```bash
# Clone o repositório
git clone https://github.com/JardsonFlorentino/devburger-interface
cd devburger-interface

# Instale as dependências
yarn install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# Inicie o servidor de desenvolvimento
yarn dev
```

### Backend

```bash
# Clone o repositório do backend
git clone https://github.com/JardsonFlorentino/burger-db-api
cd burger-db-api

# Instale as dependências
yarn install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# Execute as migrations
yarn sequelize db:migrate

# Inicie o servidor
yarn dev
```

---

## 🐳 Deploy com Docker (Easypanel)

O projeto está configurado para deploy automatizado via Easypanel na Hetzner:

### Serviços Configurados

1. **Frontend (React + Vite)**
   - Build automático via Dockerfile
   - Servido via Nginx
   - Domínio: `burger.jardsonflorentino.com.br`

2. **Backend (Node.js + Express)**
   - API RESTful
   - Conexão com PostgreSQL e MongoDB
   - Variáveis de ambiente gerenciadas pelo Easypanel

3. **PostgreSQL**
   - Banco de dados relacional
   - Persistência via volumes Docker

4. **MongoDB**
   - Banco de dados NoSQL
   - Persistência via volumes Docker

### Arquivos de Configuração

```yaml
# docker-compose.yml (exemplo)
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    environment:
      - VITE_API_URL=${API_URL}
  
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - MONGO_URL=${MONGO_URL}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
  
  postgres:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  mongodb:
    image: mongo:7
    volumes:
      - mongo_data:/data/db

volumes:
  postgres_data:
  mongo_data:
```

---

## 📁 Estrutura de Pastas

### Frontend

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── Button/
│   ├── CartItems/
│   ├── Header/
│   └── ...
├── containers/      # Páginas da aplicação
│   ├── Home/
│   ├── Products/
│   ├── Cart/
│   ├── Checkout/
│   └── Admin/
├── hooks/           # Custom hooks
│   ├── useCart.js
│   └── useAuth.js
├── services/        # Integrações com APIs
│   └── api.js
├── styles/          # Estilos globais
│   └── globalStyles.js
└── routes/          # Configuração de rotas
    └── index.jsx
```

### Backend

```
src/
├── app/
│   ├── controllers/  # Lógica de negócio
│   ├── middlewares/  # Autenticação, validação
│   ├── models/       # Modelos Sequelize/Mongoose
│   └── schemas/      # Schemas MongoDB
├── config/           # Configurações (DB, Stripe)
├── database/         # Migrations e seeders
└── routes.js         # Definição de rotas
```

---

## 🔗 Repositórios

- **Frontend:** [devburger-interface](https://github.com/JardsonFlorentino/devburger-interface)
- **Backend:** [burger-db-api](https://github.com/JardsonFlorentino/burger-db-api)

---

## 🎯 Roadmap Futuro

- [ ] Sistema de cupons de desconto
- [ ] Notificações push para status do pedido
- [ ] Integração com outras gateways de pagamento (PagSeguro, Mercado Pago)
- [ ] App mobile com React Native
- [ ] Sistema de avaliações de produtos
- [ ] Programa de fidelidade

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙋‍♂️ Autor

**Jardson Florentino**

Desenvolvedor Full Stack | DevClub Student

- 💼 [LinkedIn](https://www.linkedin.com/in/jardsonflorentino)
- 🐙 [GitHub](https://github.com/JardsonFlorentino)
- 📧 Email: <jardsonflorentino@egmail.com>

---

## 🙏 Agradecimentos

- [DevClub](https://www.devclub.com.br/) pelo curso completo de Full Stack
- Comunidade React e Node.js
- Todos que contribuíram com feedback e sugestões

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

Feito com ❤️ e muito ☕ por [Jardson Florentino](https://github.com/JardsonFlorentino)

</div>
