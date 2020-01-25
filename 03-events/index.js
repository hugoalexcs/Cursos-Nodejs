import EventEmmiter from 'events';

class MeuEmissor extends EventEmmiter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click){
    console.log('us usuario clicou', click);
});

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no Ok');
 
let count = 0;
setInterval(function () {
    meuEmissor.emit(nomeEvento, 'no ok '+ count++);
}, 1000)