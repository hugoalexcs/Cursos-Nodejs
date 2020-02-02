const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome heroi")
        .option('-p, --poder [value]', "Poder do heroi")
        .option('-i, --id [value]', "id do heroi")

        .option('-c, --cadastrar', "Cadastrar Heroi")
        .option('-l, --listar', "Listar Heroi")
        .option('-l, --remover ', "Remover heroi pelo id")
        .option('-a, --atualizar [value]', "Atualizar heroi pelo id")
        .parse(process.argv);
        const heroi = new Heroi(Commander);
        
        try {
            if (Commander.cadastrar) {
                delete heroi.id
                const resultado = await Database.cadastrar(heroi);
                if (!resultado) {
                    console.error('Heroi não cadastrado!');
                    return;                
                }
                console.log('Heroi cadastrado com sucesso');
            }
            if (Commander.listar) {
                const resultado = await Database.listar();
                if (!resultado) {
                    console.error('Herois não listado!');
                    return;                
                }
                console.log('Herois listados com sucesso', resultado);
            }
            if (Commander.remover) {
                const resultado = await Database.remover(heroi.id);
                if (!resultado) {
                    console.error('Heroi não removido!');
                    return;                
                }
                console.log('Heroi removido com sucesso', resultado);
            }
            if (Commander.atualizar) {
                const idParaAtualizar = parseInt(Commander.atualizar);
                //remover todas as chaves que estiverem com undefined | null
                const dado = JSON.stringify(heroi);
                const heroiAtualizar  = JSON.parse(dado);
                const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar);
                if (!resultado) {
                    console.error('Heroi não atualizado!');
                    return;                
                }
                console.log('Heroi atualizado com sucesso', resultado);
            }
        } catch(error) {
            console.error('Error ...!',error);
        }
}

main()