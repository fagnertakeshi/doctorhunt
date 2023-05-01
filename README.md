#Sistema de Agendamento Médic

Esse é um sistema de agendamento médico desenvolvido utilizando React para o frontend e Node.js para o backend.

Pré-requisitos
Antes de começar a utilizar o sistema, você deve ter as seguintes ferramentas instaladas em seu computador:

Node.js (versão 14 ou superior)
NPM (gerenciador de pacotes do Node.js)
MongoDB (para armazenamento dos dados)
Instalação
Para instalar as dependências do frontend e do backend, siga os seguintes passos:

Clone o repositório do GitHub para o seu computador.
Abra o terminal na pasta raiz do projeto.
Execute o comando npm install para instalar as dependências do backend.
Entre na pasta do frontend com o comando cd client.
Execute o comando npm install para instalar as dependências do frontend.
Configuração
Antes de rodar o sistema, é necessário configurar algumas variáveis de ambiente.

Variáveis de ambiente do backend
Crie um arquivo .env na pasta raiz do projeto e adicione as seguintes variáveis:

makefile
Copy code
PORT=<PORTA_DO_SERVIDOR>
MONGO_URI=<URI_DO_MONGODB>
JWT_SECRET=<SEGREDO_PARA_GERAR_JWT>
PORT: a porta em que o servidor do backend irá rodar (ex: 5000).
MONGO_URI: a URI de conexão com o banco de dados MongoDB.
JWT_SECRET: o segredo utilizado para gerar o token JWT.
Variáveis de ambiente do frontend
Crie um arquivo .env na pasta client do projeto e adicione a seguinte variável:

makefile
Copy code
REACT_APP_BACKEND_URL=<URL_DO_BACKEND>
REACT_APP_BACKEND_URL: a URL do servidor do backend (ex: http://localhost:5000).
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
