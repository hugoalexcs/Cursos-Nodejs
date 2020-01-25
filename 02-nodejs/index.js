
//importando um modulo interno do NodeJS
import util from 'util';
const obterEnderecoAsync = util.promisify(obterEndereco);


//
//Refatorando o Callbacks para Promises
function obterUsuario() {
    
    // Erroro => Reject
     // Success => resolve
    return new Promise(function resolvePromise( resolve, reject){
        setTimeout( function() {
            return resolve({
                id: 1,
                nome: "Hugo",
                dataNascimento: new Date()
            })
        }, 1000)

    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvetelefone(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '54654564',
                ddd: '71'
            })
        }, 2000)

    })
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Av. Presidente Dutra'
        })
    }, 2000)
}
main();
// 1) adicionar a palavra async --> automaticamente ela retornará uma promise
async function main() {
    try {
        console.time('medida-promise');
        const usuario = await obterUsuario();
        /* const telefone = await obterTelefone(usuario.id);
        const endereco = await obterEnderecoAsync(usuario.id); */
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

         console.log(`
            Nome: ${usuario.nome},
            Telefone: ${resultado[0].telefone},
            Endereco: ${resultado[1].rua}
        `); 
        console.timeEnd('medida-promise');
    } catch(error) {
        console.log('Error main', error)
    }
}

/* const usuarioPromise = obterUsuario()
//Para manipular o sucesso usamos a função .then
//Manipular error .catch
//Usuario --> telefone --> telefone
usuarioPromise
    .then(function (usuario){
            return obterTelefone(usuario.id)
            .then(function resolveTelefone (result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
       const endereco = obterEnderecoAsync(resultado.usuario.id)
       return endereco.then(function resolverEndereco(result){
           return {
               usuario: resultado.usuario,
               telefone: resultado.telefone,
               endereco: result
           }
       })
    })
    .then(function (resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome},
        Endereço: ${resultado.endereco.rua},
        Telefone: ${resultado.telefone.telefone}
       `)
     })
    .catch(function (error) {
        console.log('Error', error)
    })
 */

/*
 obterUsuario(function resolverUsuario(error, usuario) {    
    // null || "" || 0 === false 
    if (error) {
        console.log("Erro ao obter usuário ", error)
        return;
     }
     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.log("Erro ao obter telefone ", error)
            return;
         }         
         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log("Erro ao obter endereco ", error)
                return;
             }
            console.log(`
             Nome: ${usuario.nome},
             Endereço: ${endereco.rua},
             Telefone: ${telefone.telefone}
            `)
         })
     })     
 })
*/