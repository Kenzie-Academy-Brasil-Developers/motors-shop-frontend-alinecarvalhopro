# Motors Shop 🚗 🚚 🏍️

_Aplicação de venda de veículos._

### Ela conta com os seguintes recursos:

- Cadastro de Usuário: É possível se cadastrar como vendedor ou comprador.

- Autenticação: Apenas os usuários autenticados têm permissão para editar ou excluir suas próprias contas. 

- Gerenciamento de Anúncios: Os usuários cadastrados como vendedores, além de poder cadastrar um anúncio, podem atualizar informações e  excluir anúncios. Além disso, podem remover comentários dos seus anúncios.

- Comentários: Usuários autenticados podem deixar comentários nos anúncios, bem como excluir seus próprios comentários.

- Toda a aplicação foi pensada para oferecer uma boa experiência para o usuário e conta com toasts, loadings e outros recursos que trazem feedbacks nas interações.

### Requisitos para instalação e uso:

- Seguir os requisitos de instalação e uso do Backend: https://github.com/Kenzie-Academy-Brasil-Developers/motors-shop-backend-alinecarvalhopro
- Clonar o repositório
- Rodar os comandos: <br/>
   - `npm install` (Para instalar as dependências do projeto) <br/>
   - `npm run dev` (Para rodar o projeto) <br/>

### Tecnologias utilizadas:

- React js 
- TypeScript
- Vite

### Bibliotecas:

- axios
- date-fns
- jwt-decode
- react-hook-form
-  @hookform/resolvers
- zod
- react-hot-toast
- react-router-dom
- styled-components


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
