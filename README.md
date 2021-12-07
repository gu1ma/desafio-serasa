# Desafio serasa!
<p align="left">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/gu1ma/desafio-serasa" />
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/gu1ma/desafio-serasa" />
  <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/gu1ma/desafio-serasa" />
  <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/gu1ma/desafio-serasa" />
  <img alt="Github License" src="https://img.shields.io/github/license/gu1ma/desafio-serasa" />
</p>

Este repositório contém os dados da aplicação do desfio Serasa! Esta aplicação foi desenvolvida em [__React Native__](https://reactnative.dev/)
utilizando a arquitetura Flux para a gerência de estados dos componentes.

![serasagif](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa.gif)

### Iniciando
Siga as instruções para executar o projeto no seu ambiente de desenvolvimento.

### Pré requisitos
Você irá precisar do Backend que serve o dados pra essa aplicação. Acesse o [__repositório da api__](https://github.com/gu1ma/desafio-serasa-api) 
e siga os passos para iniciar o web service.
### Instalando
Siga os passos para rodar o projeto:
1. Baixe o projeto com o comando `git clone https://github.com/gu1ma/desafio-serasa.git`
2. Rode o comando `yarn` ou `npm install` para instalar as dependências
3. Siga a documentação do [__React Native__](https://facebook.github.io/react-native/docs/running-on-device) para configurar o seu ambiente de desenvolvimento
4. Rode `react-native run-android` ou `react-native run-ios` para instalar o app no Android ou no IOS

### Rode os testes
`yarn test` ou `npm test`

### Sobre o funcionamento da aplicação
Ao iniciar a aplicação, o app irá buscar os dados do usuário na API. Inicialmente o usuário vem por padrão com um score baixo, que irá aumentar ao passo que este faz o pagamento das suas dívidas e/ou aceita uma oferta de crédito.<br>

_ | _
------------ | -------------
![img1](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado1.1.png) | ![img2](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado1.2.png)


Assim que o usuário começa a pagar suas dívidas, o seu score começa a subir. Quando o score do usuário passa dos 30 pontos, este começa a receber ofertas de crédito. <br>
_ | _
------------ | -------------
![img3](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado2.1.png) | ![img4](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado2.2.png)

Assim que o score passa de 50, o usuário recebe uma oferta de proteção de dados.<br>
_ |
------------ |
![img5](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado4.png) |

Assim que o score passa de 90, o usuário recebe um desconto na oferta de proteção de dados. <br>
_ |
------------ |
![img6](https://github.com/gu1ma/desafio-serasa/blob/master/app-imgs-examples/serasa-estado-5.png) |

### Tecnologias
- React Native
- Redux
- Axios
- Yarn/Npm
- Jest


