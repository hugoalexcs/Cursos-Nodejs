

function obterUsuario(callback) {
    setTimeout( function() {
        return callback(null,{
            id: 1,
            nome: "Hugo",
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null,{
            telefone: '54654564',
            ddd: '71'
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Travessa Acalanto'
        })
    }, 2000)
}


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
