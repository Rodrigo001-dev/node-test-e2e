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

  1. Cadastra usuário no banco
  2. Cadastra endereço no banco
  3. Se comunica com gateway de pagamento para enviar a transação
  4. Cadastra a compra no banco

Quando for realizado o teste unitário dessa funcionalidade, não será necessário banco de dados e nem a API do Gateway, ou seja, as operações vão ser testadas sem conectar com banco de dados e sem bater no Gateway de pagamento.

Quando for realizado um testes E2E(ponta a ponta), esse teste precisa ser muito próximo a experiência que um usuário vai ter operando na aplicação, necessita ser igual. Nesse tipo de deste não é aconselhável ter mocks ou dados fakes porque o teste E2E precisa simular um usuário trabalhando(executando) na aplicação.

</LINKEDIN>