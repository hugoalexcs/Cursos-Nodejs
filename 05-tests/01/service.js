const { get } = require('axios');
//import axios from 'axios';

const URL = 'https://swapi.co/api/people';

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const result = await get(url);    
    return result.data.results.map(mepearPessoas);
}

function mepearPessoas (item) {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
        obterPessoas
    }