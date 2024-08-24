# SOLIDITY

Existem diversas ferramentas que são utilizadas para o desenvolvimento e teste de contratos como Truffle, Hardhat e Foundry. Todas possuem um repertório parecido de modo que a escolha de qual utilizar muitas vezes se resume a gosto pessoal

## Truffle
Primeira ferramenta utilizada durante o curso, fácil de utilizar e ótimo para iniciantes. Senti uma pequena demora no deploy dos contratos mas se mostrou bem completa

install Truffle globally.

```console
npm install -g truffle 
```
```console
truffle init
```
Compilar os contratos na pasta **"contracts"**
```console
truffle compile
```

Ambiente de desenvolvimento
```console
truffle develop
```
Fornece diversas contas e saldos para teste em uma local network

Migração pode ser feita com um simples arquivo de deployment:
```js
const Spacebears = artifacts.require("Spacebear");

module.exports = function(deployer) {
    deployer.deploy(Spacebears);
}
```

Pode-se utilizar outras networks também de acordo com o fornecido no arquivo truffle-config.js que possui comentado dicas para a configuração correta das redes.

## Hardhat

**Utilizado no projeto final do RifaChain**

Apresentado também no curso com grande similaridade com Truffle porém é recomendado para desenvolvedores com alguma experiência com tal tipo de ferramentas, pois não possui o direcionamento e organização de pastas didático característico do Truffle.

```console
npx hardhat
```
Futuramente depreciado e trocado por
```console
npx hardhat init
```

Para testes
```console
npx hardhat test
```
executa todos os testes da pasta de testes

Compilar
```console
npx hardhat compile
```

Deployment
```console
npx hardhat node
```
```console
npx hardhat run --network localhost scripts/deploy.js
```
Comando acima foi fornecido no curso porém nas versões atuais do hardhat a pasta scripts é substituída por ignition e a arquitetura do deploy.js é um pouco diferente, verifique o próprio arquivo (lock.js do próprio hardhat e deploy.js criado por mim)

# Remix IDE
Plataforma muito didática para desenvolvimento e teste rápido de smartcontracts. Foi preferencialmente utilizada durante o desenvolvimento dos contratos do projeto RifaChain e se tornou minha plataforma para estudo, rápido desenvolvimento e teste minoritário de contratos inteligentes

# NFT
NFT significa "Token Não Fungível". É um tipo de ativo digital que usa tecnologia de blockchain para verificar a propriedade e autenticidade de itens únicos. Diferente de criptomoedas como o Bitcoin, que são intercambiáveis, cada NFT é distinto e não pode ser substituído por outro de igual valor. Eles são frequentemente usados para representar obras de arte digitais, colecionáveis, música, vídeos e outros tipos de mídia digital. O valor dos NFTs pode variar bastante, dependendo da demanda e da importância do item representado.