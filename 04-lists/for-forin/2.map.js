import service from './services';
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length -1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}
async function main() {
    try {
        const result = await service.obterPessoas('a');
        console.time('for');
       /* const names = [];
        result.results.forEach(element => {
            names.push(element.name);
        });  */
     /*  const names =  result.results.map(function (pessoa) {
            return pessoa.name;
        }) */

     /*    const names =  result.results.map((pessoa) => pessoa.name);
        
        */
        const names = result.results.meuMap(function (pessoa, indice){
            return  `[${indice}]${pessoa.name}`;
        });
        console.log('name', names); 
        console.timeEnd('for');
    }
    catch (error) {
        console.error('error interno', error);
    }
}

main()