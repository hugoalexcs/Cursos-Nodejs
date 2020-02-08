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

# Criando peojetos Multi-banco de dados
- Padrão Strategy para Multi DataSources
-  Docker: é um programa que consegue criar um mini sistema operacional 
- Docker hub: repositorio do docker
- Install docker container do postgres
docker run \
 --name postgres \
 -e POSTGRES_USER=hugosilva \
 -e POSTGRES_PASSWORD=minhasenha \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres
 
 - Install docker postgres-client
 docker run --name adminer --link postgres:postgres -p 8080:8080 -d adminer 

- Install mongoDB
docker run --name mongodb -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4
docker run \
    --name mongo4 \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4
- Intall clinet MongoDB
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient 
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

- Comandos do docker
--> docker ps: mostra os docker rodando na maquina
--> docker exec -it postgres /bin/bash : entra no comando para                                              alterar algo 
--> -d significa em segundo plano

- Criar um mando de usuario e banco no mongo 
docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'hugo', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"

# Usando o padrão de projeto Startegy para multi-datasource Design Pattern
- 

