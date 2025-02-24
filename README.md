# Teste Técnico - Chico Rei

## Overview
Esse projeto é uma aplicação de frontend que acomoda duas possíveis páginas de um e-commerce (uma página de produtos e uma página de checkout). A aplicação foi feita usando Vue.js e inclui features como filtro de produtos (via roteamento e falsas chamadas a APIs), edição de carrinhno e validação de campos de input.

## Tecnologias usadas
- Vue.js
- Vite
- Less
- Vue Router
- Faker.js

## Instruções de instalação

### Pré-requisitos
-Node.js (versão 14 ou maior)
-npm (versão 6 ou maior)

### Clone o repositório

```bash
git clone git@github.com:iagoViotti/chicorei-teste-iagoviotti.git
cd chicorei-teste-iagoviotti
```

### Instale as dependências

```bash
npm install
```

### Rode o projeto

```bash
npm run dev
```
## Uso

- Filtragem de Produtos: Use o menu suspenso para filtrar produtos por categoria.
- Gerenciamento do Carrinho: Adicione produtos ao carrinho, ajuste quantidades e remova itens.
- Finalização da Compra: Preencha as informações de contato, entrega e pagamento para concluir a compra.

### Estrutura do Projeto
```
src/
├── assets/             # Static assets (images, icons, etc.)
├── components/         # Vue components
├── pages/              # Vue pages
├── utils/              # Utility functions and mock data
├── App.vue             # Main App component
├── main.ts             # Entry point of the application
├── global.less         # Global Less variables
