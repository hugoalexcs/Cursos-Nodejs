# Ciclo de vida do Promises
- Pedding: Estado inicial, ainda não terminou ou ainda não foi rejeitado.
- FullFilled: Quando executou todas as operações com sucesso.
- Refected: Quando a operação falhou
Nota: A Promisse pode tornar uma código totalmente recursivo!

# Promises com async/await
- Facilita a visualização do fluxo de funções
- Não altara a performance de sua aplicação
- Veio da galera do C#
- Usar qpenas quando necessitar tratar a resposta da chamada

# Manipulação de eventos com EventEmitter
- Usado para ações contínuas
- Node.js usa para quase tudo em seu ecossistema
- Bastante usasdo também nos browsers (.onClick)
- Trabalha sob o Design Patter Observer/PubSub

# Manipulando Listas
- 

# Teste automatizados
- Mocha
- Nock

# Criando ferramentas de linha de comando
- Read
- Create
- Delele
- Update
- Cria ferramentas com linha de comando
- cadastrar
    node index.js -c -n Flash -p Speed
- Atualizar
    node index.js --atualizar 2 --nome Chapolin
    node index.js --atualizar 2 --poder "Cura"
- Listar
    node index.js  -l
- Remover
    node index.js --remover --id 1