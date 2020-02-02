const {
    readFile,
    writeFile
} = require('fs');

const {
    promisify
} = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
    construtor() {
        this.NOME_ARQUIVO = "herois.json";
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync("herois.json", 'utf8');
        //console.log(arquivo)
        return JSON.parse(arquivo.toString());
    }
    async escreverArquivo(dados) {
        writeFileAsync("herois.json", JSON.stringify(dados))
        return true;
    }
    async cadastrar (heroi) {
        const dados = await this.obterDadosArquivo();
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiComId = {
            id,
            ...heroi
        }
        const dadosFinal = [
            ...dados,
            heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosFinal);
        return  resultado;
    }

    async listar(id) {
        const dados = await this.obterDadosArquivo();
        
        const dadosFitrados = dados.filter(item => (id ? item.id === id : true));
        
        return dadosFitrados;
    }
    async remover(id) {
        if (!id) {
            return await this.escreverArquivo([]);
        }
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id));
        if (indice === -1) {
            throw Error('O usuário informado não exixte');
        }
        dados.splice(indice,1);
        return await this.escreverArquivo(dados);
    }

    async atualizar(id, modificacaes) {
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id));
        if (indice === -1) {
            throw Error('O usuário informado não exixte');
        }
        const atual = dados[indice];
        const objetosAtualizar = {
            ...atual,
            ...modificacaes
        }
        dados.splice(indice, 1);//remove da lista
        return await this.escreverArquivo([
            ...dados,
            objetosAtualizar
        ])
    }
}
module.exports = new Database();