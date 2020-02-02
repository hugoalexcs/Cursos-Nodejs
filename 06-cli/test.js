const {
    deepEqual,
    ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
    id: 1,
    nome: "Flash",
    poder: "Speed"
};
const DEFAULT_ITEM_ATUALIZAR = {
    id: 2,
    nome: "Lanterna Verde",
    poder: "Luz Verde"
};
describe('Suite de manipulação de Herois', () => {
    before(async ()=> {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
    })
    it('deve pesquisar um herou usando arquivos', async () =>{
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [ resultado ] = await database.listar(expected.id);                
        deepEqual(resultado, expected);
    })
     it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual(actual, expected);
    }) 
    //it.only ('deve remover um heroi por id', async () => {
    it('deve remover um heroi por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual(resultado, expected)
    })
    it('Deve atualizar um heroi delo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id); 
        deepEqual(resultado, expected);

    })
})
