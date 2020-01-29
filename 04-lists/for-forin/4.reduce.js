import { obterPessoas } from './services';

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial :this[0];
    //for ( let index in this) {
        for (let index = 0; index <= this.length -1; index++) {
        valorFinal = callback(valorFinal, this[index], this);        
    }
    return valorFinal;
} 

async function main() {
    try {
        const { results } = await obterPessoas('a');
        console.time('for');
        const pesos = results.map(item => parseInt(item.height));
        console.log('pesos', pesos);
        //[20.2, 30.3, 40,4] 
       /*  const total = pesos.reduce((anterior, proximo) => {
            return anterior+proximo;
        }, 0); */
        const minhaLista = [
            ['Hugo', 'Silva'],
            ['Node', 'Angular']
        ];
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo);
        }, [])
        .join(', ');
        console.log('total', total);


        console.timeEnd('for');
    }
    catch (error) {
        console.error('error interno', error);
    }
}

main()