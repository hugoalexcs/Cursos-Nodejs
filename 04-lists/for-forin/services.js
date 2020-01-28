import axios from 'axios';

const URL = 'https://swapi.co/api/people';

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

/* obterPessoas('r2')
    .then(function (resultado){
        console.log('Resultado', resultado);
    })
    .catch(function (error) {
        console.error('Error ', error);
    }) */

    module.exports = {
        obterPessoas
    }