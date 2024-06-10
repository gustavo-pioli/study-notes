# Projeto de APIs

Uma API básica criada com o intuito de aprendizado em javascript, nodejs e o processo de construção de API REST.

Foram criados suporte para requisições destinadas a mongoDB utilizando pacote mongoose, as quais englobam operações com os tipos Cliente e Cidade:

- Cidade:
   1. Cadastrar cidade
   2. Consultar cidade pelo nome
   3. Consultar cidade pelo estado
- Cliente:
   1. Cadastrar cliente
   2. Consultar cliente pelo nome
   3. Consultar cliente pelo id
   4. Remover cliente
   5. Alterar nome do cliente 
---
**Instalação:**

Ao replicar o repositório será necessário seguir as seguintes etapas:
- Para mongoDB hospedado com Atlas:
  - Abrir arquivo **config.env**
  - Fornecer a connection string na variável DATABASE
  - Fornecer a senha de seu usuário na variável DATABASE_PASSWORD
- Para mongoDB local:
  - Abrir arquivo **config.env**
  - Fornecer a connection string na variável DATABASE_LOCAL
  - Abrir arquivo **server.js**
  - Retirar comentário da linha 14 e comentar linha 15
- Execute o comando `npm install` no terminal e os pacotes necessários serão instalados
- Para execução em modo desenvolvedor basta utilizar `npm start` 
- Para modo produção utilize `npm run start:prod`
- Foi fornecido um arquivo de Collection para Postman _(API.postman_collection)_ para facilitar o teste da API
- Para importar a collection siga:
  - Collections -> Import
  - Arraste ou selecione o arquivo API.postman_collection
---
**Utilização:**
- Atributos Cidade:
  - **_Nome_**
  - **_Estado_**
- Atributos Cliente:
  - **_Nome_**
  - **_Sobrenome_**
  - Sexo
  - **_Data de Nascimento_** (dataNascimento)
  - Idade
  - **_Cidade_**

- Em Cidade o atributo Nome é **unique**.
- Em Cliente os atributos Nome e Sobrenome formam um par **unique**.

_Legenda: atributos em fonte **bold** são required_

**_Cliente_** (idade é calculada/opcional)
```json
{
  "nome": "Gabriel",
  "sobrenome": "Silva",
  "sexo": "masculino",
  "dataNascimento": "31/05/1996",
  "cidade": "Uberlândia
}
```
**_Cidade_**
```json
{
  "nome": "Uberlândia",
  "estado": "Minas Gerais"
}
```


## Enunciado do Progress Report 3

Nesta etapa esperamos que você construa o APIs que contemplem as seguintes operações expostas como endpoints REST:

1. Cadastrar cidade
2. Cadastrar cliente
3. Consultar cidade pelo nome
4. Consultar cidade pelo estado
5. Consultar cliente pelo nome
6. Consultar cliente pelo Id
7. Remover cliente
8. Alterar o nome do cliente

Considere o cadastro com dados básicos:

- Cidades: nome e estado
- Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.
---
**Critérios e Avaliação:**

A avaliação será feita da seguinte forma:

- Vamos baixar e analizar o seu código;
- Rodar sua aplicação e executar testes para validar o atendimento funcional dos items acima;
- Verificar se o seu código é limpo (Clean Code), fácil de entender e de dar manutenção;
- Podemos fazer uma sessão de code review com seu código, para percorrermos o código junto com você discutindo sobre suas decisões de implementação, os pontos positivos e negativos;
---
**Requisitos Obrigatórios:**

- Documentação (Readme.md) indicando todos os passos necessários para utilização do projeto
- Operações acima funcionando sem erros
- Código válido, estruturado e organizado para que possamos testar sua aplicação

**Atente-se para:**
Padrões REST nas requisições e respostas das APIs
Códigos de retorno das operações, em especial

- 200 - Success
- 201 - Created
- 204 - No Content
- 404 - Not found
- 500 - Internal Server Error

- Validação de campos obrigatórios
- Utilização de tipos de dados (string, date, boolean, int, long)