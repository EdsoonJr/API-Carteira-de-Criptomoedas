<h1>Desafio </h1>
<a href="https://imgur.com/uxpq1Cu"><img src="https://i.imgur.com/uxpq1Cu.png?3" title="source: imgur.com" /></a>

<h2> API-Carteira de Criptomoedas </h2>
<a href="https://imgur.com/xAdDRE7"><img src="https://i.imgur.com/xAdDRE7.png?1" title="source: imgur.com" /></a>

> Status: Em Desenvolvimento⏱️
<h2> Descrição do Desafio📝</h2>
<p>
 Criação de uma API de Carteira de CriptoMoedas
</p>

❗-Não Consegui terminar o desafio devido a erros e problemas com associações de tabelas 😭


### Execução da API👨‍💻

>Modulos Necessários
+ Express
+ Body-parser
+ Sequelize
+ Sequelize-cli
+ path
+ Mysql2
+ Config


1. Criação do Banco de Dados MySql

+ Criar manualmente um banco com nome: "carteira"

+ ❗ O nome pode ser alterado no default.json da Config

2. Criação das tabelas e inserção de dados

+ npx sequelize-cli db:migrate
+ npx  sequelize-cli db:seed:all


3. Executar o GET

+ http://localhost:3000/api/v1/wallet

Resultado

<a href="https://imgur.com/ADSVYJj"><img src="https://i.imgur.com/ADSVYJj.png" title="source: imgur.com" /></a>
