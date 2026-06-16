Na última aula de DS vocês criaram uma vitrine para o nosso sistema, mas usaram um "banco de dados falso" chumbado direto no Front-end. No mercado de trabalho real, quem guarda e fornece os dados é a engenharia do Submundo (Back-end).
A missão de hoje é puramente estrutural: vamos abrir a primeira válvula do nosso servidor Express e construir a rota GET da Lanchonete utilizando a Arquitetura MVC.
Sigam o passo a passo abaixo e construam os códigos nos arquivos corretos.

PASSO 1: O Model (A Nossa "Cozinha")
Os dados brutos precisam ficar isolados. Crie o arquivo src/models/CardapioModel.js e cole o nosso Array oficial:

PASSO 2: O Controller (O "Despachante")
O Controller é o cérebro que pega os dados do Model e empacota para o cliente. Crie o arquivo src/controllers/CardapioController.js:

PASSO 3: O Encanamento Principal (server.js)
Agora vamos plugar o Controller na porta de saída do nosso servidor. No seu arquivo server.js na raiz do projeto:

Não teremos telas HTML hoje. Vocês precisam me provar que a API de vocês funciona direto na linguagem das máquinas.
Abra o terminal do VS Code e ligue o servidor (node server.js).Abra a extensão Thunder Client.Crie uma requisição com o método GET apontando para http://localhost:8080/cardapio.Clique em Send.Me chame na mesa. Eu vou conferir se o JSON do cardápio apareceu na tela e se a flag de Status 200 OK está acesa em verde no seu Thunder Client.
