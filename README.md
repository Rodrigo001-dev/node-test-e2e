## :page_with_curl: Projeto

O testes unitários geralmente não faz sentido esse tipo de teste bater no banco de dados, por um simples motivo, o teste unitário testa de forma isolada, quer dizer que esse tipo de teste não vai se comunicar com qualquer meio externo, ou seja, em testes unitários não é feito a conexão com o banco de dado.

No teste de integração talvez seja realizado a conexão com o banco porque nem todo teste de integração que é necessário bater no cando de dados.

No E2E é necessário sim e muito importante bater no banco de dados mas não só ele, nesse tipo de teste entra qualquer conexão externa, inclusive APIs.


Uma das coisas que é importante cuidar quando está trabalhando com testes E2E que conectam no banco é que os testes não devem interferir entre si, é como se eu precisasse ter um banco de dados específico para cada suite(arquivo) de teste que tem na aplicação.
E outra coisa importante é que eu não posso usar o banco de desenvolvimento, é necessário usar um banco específico para testes

Utilizando o Pattern chamado In Memory database
que é nada mais do que um banco de dados que vai rodar na memória sem tocar no
disco, que é criado no processo de start da aplicação e vai rodar durante os testes e depois ele é destruído quando o processo finaliza.
[Veja mais desse pattern aqui](https://martinfowler.com/bliki/InMemoryTestDatabase.html#:~:text=An%20in%2Dmemory%20database%20is,destroyed%20when%20the%20process%20finishes.)

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nodejs.org/en/" target="_blank"> <img src="https://img.shields.io/badge/-Node.js-32CD32?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js"> </a>
<a href="https://jestjs.io/pt-BR/" target="_blank"> <img src="https://img.shields.io/badge/-Jest-FF7800?style=flat-square&logo=jest&logoColor=white" alt="Jest"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
