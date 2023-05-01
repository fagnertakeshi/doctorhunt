<<<<<<< HEAD
# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo-cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).
=======
# **Sistema de Agendamento Médico**

Esse é um sistema de agendamento médico desenvolvido utilizando React para o frontend e Node.js para o backend.

## Pré-requisitos
Antes de começar a utilizar o sistema, você deve ter as seguintes ferramentas instaladas em seu computador:

1. Node.js (versão 14 ou superior)
2. NPM (gerenciador de pacotes do Node.js)
3. MongoDB (para armazenamento dos dados)

## Instalação
  Para instalar as dependências do frontend e do backend, siga os seguintes passos:

1. Clone o repositório do GitHub para o seu computador.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando npm install para instalar as dependências do backend.
4. Entre na pasta do frontend com o comando cd client.
5. Execute o comando npm install para instalar as dependências do frontend.

### Configuração
  Antes de rodar o sistema, é necessário configurar algumas variáveis de ambiente.

### Variáveis de ambiente do backend
  Crie um arquivo .env na pasta raiz do projeto e adicione as seguintes variáveis:
```
makefile
Copy code
PORT=<PORTA_DO_SERVIDOR>
MONGO_URI=<URI_DO_MONGODB>
JWT_SECRET=<SEGREDO_PARA_GERAR_JWT>
PORT: a porta em que o servidor do backend irá rodar (ex: 5000).
MONGO_URI: a URI de conexão com o banco de dados MongoDB.
JWT_SECRET: o segredo utilizado para gerar o token JWT.
```

##Variáveis de ambiente do frontend
Crie um arquivo .env na pasta client do projeto e adicione a seguinte variável:

```
makefile
Copy code
REACT_APP_BACKEND_URL=<URL_DO_BACKEND>
REACT_APP_BACKEND_URL: a URL do servidor do backend (ex: http://localhost:5000).
```


Uso
Para rodar o sistema, siga os seguintes passos:

Abra o terminal na pasta raiz do projeto.
Execute o comando npm run dev para rodar o backend e o frontend simultaneamente.
Acesse o sistema no navegador utilizando a URL http://localhost:3000.
Contribuição
Contribuições são sempre bem-vindas! Para contribuir com o projeto, siga os seguintes passos:

Faça um fork do repositório.
Crie uma branch com as suas alterações: git checkout -b minha-branch
Faça as alterações necessárias e faça o commit: git commit -m "Minhas alterações"
Faça o push para a sua branch: git push origin minha-branch
Abra um Pull Request para a branch main.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
>>>>>>> 9a714a17ee843edccbdcd6f9458c9a8ac0334c13
