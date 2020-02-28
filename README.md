# Desafio serasa!
Este repositório contém os dados da aplicação do desfio Serasa! Esta aplicação foi desenvolvida em [__React Native__](https://reactnative.dev/)
utilizando a arquitetura Flux para a gerência de estados dos componentes.
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

### Sobre o funcionamento da aplicação
Ao iniciar a aplicação, o app irá buscar os dados do usuário na API. Inicialmente o usuário vem por padrão com um score baixo, que
irá aumentar ao passo que este faz o pagamento das suas dívidas e/ou aceita uma oferta de crédito.


Assim que o usuário começa a pagar suas dívidas, o seu score começa a subir. Quando o score do usuário passa dos 30 pontos, este
começa a receber ofertas de crédito.


Assim que o score passa de 50, o usuário recebe uma oferta de proteção de dados


Assim que o score passa de 90, o usuário recebe um desconto na oferta de proteção de dados.


