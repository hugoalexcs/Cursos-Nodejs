const ContextStrategy = require('./db/strategies/base/contextStrategy');
const MongoBD = require('./db/mongodb');
const Postgres = require('./db/postgres');

const contextMongo = new ContextStrategy(new MongoBD());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();