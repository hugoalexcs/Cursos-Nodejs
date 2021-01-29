
const assert = require('assert');
const MongoDB = require('../db/strategies/mongodb/mongoDbStrategy')
const HeroiSchema = require('./../db/strategies/mongodb/schemas/heroisSchema');
const Context = require('../db/base/contextStrategy');

//const context = new Context(new MongoDB());
let context = {};

const MOCK_HEROI_DEFAULT = { nome: `Homem Aranha-${Date.now()}`, poder: 'Teia' };
const MOCK_HEROI_CADASTRAR = { nome: 'Gaviao Negro', poder: 'flexas' };
const MOCK_HEROI_ATUALIZAR = { nome: `Home Formiga-${Date.now()}`, poder: 'tamanho' };
let MOCK_HEROI_ID = null;

describe('MongoDB Suite de Tests', function () {
  this.beforeAll(async () => {
   let connection = MongoDB.connect();
   context = new Context(new MongoDB(connection, HeroiSchema));
  })
  it('Verifica Conexão', async () => {
    const result = await context.isConnected();
    const expected = 'Conectado';  
    assert.deepEqual(result, expected)
  })
  it('cadastrar', async () => {         
    const { nome, poder, _id} = await context.create(MOCK_HEROI_DEFAULT);     
    MOCK_HEROI_ID = _id;
    assert.deepEqual({ nome, poder }, MOCK_HEROI_DEFAULT);
  })
  it('listar', async () => {        
 /*    const result = await context.read({nome: MOCK_HEROI_DEFAULT.nome}, 0, 1);    
    console.log(result.length)  */ 
    const [{nome, poder}] = await context.read({nome: MOCK_HEROI_DEFAULT.nome});    
    
    assert.deepEqual({ nome, poder }, MOCK_HEROI_DEFAULT);
  })
  it('atualizar', async () => {          
    const  result = await context.update(MOCK_HEROI_ID, {nome: 'Perna Longa'});    
    console.log("Result", result)
    assert.deepEqual(result.nome, 'Perna Longa');
  })
  it('remover', async () => {          
    const  result = await context.delete(MOCK_HEROI_ID);    
    console.log("Result", result)
    assert.deepEqual(result.nome, 'Perna Longa');
  })
})
