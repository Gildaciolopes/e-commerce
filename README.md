# Ecommerce Backend API

Esse repositório contém o back‑end de um e‑commerce construído com Node.js, Express, MongoDB e integração de pagamentos via Stripe (cartão e Pix). O objetivo é fornecer uma API RESTful modular e escalável, pronta para ser consumida por um front‑end separado.

## 📋 Sumário

- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
  - [Autenticação](#autenticação)
  - [Produtos](#produtos)
  - [Pedidos](#pedidos)
  - [Pagamentos (Stripe + Pix)](#pagamentos-stripe--pix)
  - [Webhooks Stripe](#webhooks-stripe)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 📖 Descrição

Esse projeto implementa o back‑end de um e‑commerce com as seguintes funcionalidades:

- Cadastro e login de usuários (JWT)
- CRUD de produtos
- Criação e listagem de pedidos
- Integração de pagamentos via Stripe (cartões e Pix)
- Recebimento de webhooks para confirmação de pagamentos
- Tratamento global de erros

O front‑end deve consumir esta API para oferecer uma interface de compra, carrinho, checkout e painel de usuário.

---

## 🛠️ Tecnologias

- **Node.js** e **Express**: servidor HTTP e roteamento
- **MongoDB** com **Mongoose**: banco de dados NoSQL
- **Stripe**: gateway de pagamentos (cartão e Pix)
- **JSON Web Token (JWT)**: autenticação e autorização
- **Nodemon** e **cross-env**: ambiente de desenvolvimento
- **Dotenv**: variáveis de ambiente

---

## 📁 Estrutura de Pastas

```
ecommerce-backend/
├── src/
│   ├── config/
│   │   └── db.js                   # Conexão com MongoDB
│   ├── controllers/               # Lógica de negócio
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── paymentController.js
│   ├── middlewares/               # Middlewares Express
│   │   └── authMiddleware.js
│   ├── models/                    # Schemas Mongoose
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/                    # Definição de rotas
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── paymentRoutes.js
│   ├── utils/                     # Utils e handlers
│   │   └── errorHandler.js
│   ├── webhooks/                  # Endpoints de webhooks
│   │   └── stripeWebhook.js
│   └── index.js                   # Arquivo principal
├── .env                           # Variáveis de ambiente (não versionar)
├── .gitignore                     # Arquivos ignorados pelo Git
├── package.json
└── README.md
```

---

## ⚙️ Instalação

### Pré‑requisitos

- Node.js (versão LTS)
- npm ou yarn
- MongoDB (local ou Atlas)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/e-commerce.git
   cd e-commerce
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` na raiz, conforme descrito abaixo.

---

## 🔑 Variáveis de Ambiente

No arquivo `.env`, defina:

```dotenv
MONGO_URI=<sua_mongo_uri>
JWT_SECRET=<sua_chave_jwt>
STRIPE_SECRET_KEY=<sua_chave_stripe>
STRIPE_WEBHOOK_SECRET=<seu_webhook_secret>
PORT=5000
FRONTEND_URL=http://localhost:3000  # URL do front-end em desenvolvimento
```

> **Importante:** Nunca comite o `.env` no repositório.

---

## ▶️ Como Executar

- **Desenvolvimento** (hot reload com nodemon):
  ```bash
  npm run dev
  ```
- **Produção**:
  ```bash
  npm start
  ```

O servidor estará disponível em `http://localhost:5000` por padrão.

---

## 🚀 Endpoints da API

### Autenticação

| Método | Rota                 | Descrição           |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Cadastro de usuário |
| POST   | `/api/auth/login`    | Login (recebe JWT)  |

### Produtos

| Método | Rota                | Descrição                |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/products`     | Lista todos os produtos  |
| GET    | `/api/products/:id` | Detalha um produto       |
| POST   | `/api/products`     | Cria um produto (admin)  |
| PUT    | `/api/products/:id` | Atualiza produto (admin) |
| DELETE | `/api/products/:id` | Remove produto (admin)   |

### Pedidos

| Método | Rota                   | Descrição                         |
| ------ | ---------------------- | --------------------------------- |
| POST   | `/api/orders`          | Cria pedido (usuário autenticado) |
| GET    | `/api/orders/myorders` | Lista pedidos do usuário          |

### Pagamentos (Stripe + Pix)

| Método | Rota                 | Descrição                                |
| ------ | -------------------- | ---------------------------------------- |
| POST   | `/api/payments/pix`  | Cria PaymentIntent Pix e retorna QR code |
| POST   | `/api/payments/card` | (Opcional) Cria PaymentIntent cartão     |

### Webhooks Stripe

| Método | Rota                   | Descrição                                        |
| ------ | ---------------------- | ------------------------------------------------ |
| POST   | `/api/webhooks/stripe` | Recebe eventos Stripe (payment_intent.succeeded) |

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch com a feature ou correção: `git checkout -b feature/nome-da-feature`
3. Commit suas alterações: `git commit -m "Descrição da mudança"`
4. Faça push para a branch: `git push origin feature/nome-da-feature`
5. Abra um Pull Request no repositório original

Sinta‑se à vontade para abrir issues e sugerir melhorias!

---

Autor: [Gildácio Lopes](https://github.com/Gildaciolopes)
