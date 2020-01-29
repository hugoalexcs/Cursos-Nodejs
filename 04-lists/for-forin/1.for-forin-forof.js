import service from './services';

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const names = [];
        console.time('for');
        result.results.forEach(element => {
            names.push(element.name);
        }); 
        for (let i in result.results) {
            names.push(result.results[i].name);
        } 
       /*  for (pessoa of  result.results) {
            names.push(pessoa.name);
        } */
        console.log('name', names);
        console.timeEnd('for');
    }
    catch (error) {
        console.error('error interno', error);
    }
}

main()