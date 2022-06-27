## :page_with_curl: Projeto

<LINKEDIN>
Realizando testes E2E no Node.js!
</LINKEDIN>

<LINKEDIN>
Para relembrar

Existem tipos e tipos de testes dentro da aplicação, mas os mais famosos são:

Unitários vão testar um componente/funcionalidade de forma **isolada**.
Integração testa como um ou mais componentes/funcionalidades se comportam juntos(as)
End to End(E2E) vai simular o que um usuário vai fazer na aplicação diariamente
</LINKEDIN>

Quando temos bando de dados na aplicação
<LINKEDIN>
Os testes batem no banco da dado?
</LINKEDIN>

O testes unitários geralmente não faz sentido esse tipo de teste bater no banco de dados, por um simples motivo, o teste unitário testa de forma isolada, quer dizer que esse tipo de teste não vai se comunicar com qualquer meio externo, ou seja, em testes unitários não é feito a conexão com o banco de dado.

No teste de integração talvez seja realizado a conexão com o banco porque nem todo teste de integração que é necessário bater no cando de dados.

No E2E é necessário sim e muito importante bater no banco de dados mas não só ele, nesse tipo de teste entra qualquer conexão externa, inclusive APIs.

<LINKEDIN>
Ex: Imagine que você está desenvolvendo um Backend de um E-commerce
E temos uma funcionalidade na aplicação:

- Realizar compra

  dentro desse fluxo temos:

  1- Cadastra usuário no banco
  
  2- Cadastra endereço no banco
  
  3- Se comunica com gateway de pagamento para enviar a transação
  
  4- Cadastra a compra no banco

Quando for realizado o teste unitário dessa funcionalidade, não será necessário banco de dados e nem a API do Gateway, ou seja, as operações vão ser testadas sem conectar com banco de dados e sem bater no Gateway de pagamento.

Quando for realizado um testes E2E(ponta a ponta), esse teste precisa ser muito próximo a experiência que um usuário vai ter operando na aplicação, necessita ser igual. Nesse tipo de deste não é aconselhável ter mocks ou dados fakes porque o teste E2E precisa simular um usuário trabalhando(executando) na aplicação.

</LINKEDIN>

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
