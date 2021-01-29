# Referência: https://refactoring.guru/pt-br/design-patterns/strategy

# Módulo 5 - Bancos de Dados - Nosso projeto Multi-banco de dados

- Trabalhando com o padrão Strategy para Multi DataSources

## Instalando docker para usar o MongoDB e Postgres

```shell

docker run \
    --name postgres \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_USER=erickwendel \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer





docker run -it \
 -p 5432:5432 \
 --link postgres:postgres \
 postgres psql -h $HOST -p $PORT -U $USER $DATABASE

```

- Go to `http://localhost:8080/?pgsql=postgres&username=postgres&db=heroes&ns=public`

# Conexão com o MongoDB

docker run -it ID_CONTAINER \
 mongo -u erickwendel -p minhasenhasecreta --autheticationDatabase herois

Mostra todos os banco de dados
 - show dbs 
 - use herois
 - show collections
 //Create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1988-01-01'
})
//Find
db.herois.find().pretty()
Rodar um javascript dentro do MongoDB
for(let i=0; i <= 100; i++) {
    db.herois.insert({
    nome: `Clone-${i},
    poder: 'Velocidade',
    dataNascimento: '1988-01-01'
})
}
//Update
db.herois.update({_id: ObjectId('ID')}, 
    {nome: 'Mulher Maravilha'}
)
db.herois.update({_id: ObjectId('ID')}, 
    {$set: {nome: 'Mulher Maravilha'}}
)

//Delete
db.herois.remove({_id: ObjectId('ID')})