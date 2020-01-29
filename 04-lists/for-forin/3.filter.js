import { obterPessoas } from './services';

Array.prototype.meuFilter = function (callback) {
    const lista = [];
    for ( let index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        // 0, "", null, undefined === false
        if (!result) continue;
        lista.push(item);
    }
    return lista;
} 

async function main() {
    try {
        const { results } = await obterPessoas('a');
        console.time('for');
  /*       const familiaLars = results.filter(function (item){
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
            return result;
        })
        */
       const familiaLars = results.meuFilter((item, index, lista) => {
        console.log(`Index: ${index} ${lista.length}`);
        item.name.toLowerCase().indexOf('lars') !== -1;
       });    
       const names = familiaLars.map(pessoa => pessoa.name);   
        console.log('name', names); 
        console.timeEnd('for');
    }
    catch (error) {
        console.error('error interno', error);
    }
}

main()