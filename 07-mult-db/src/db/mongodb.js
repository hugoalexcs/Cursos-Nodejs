const ICrud = require('./strategies/interfaces/interface.crud');

class MongoBD extends ICrud {
    constructor() {
        super();        
    }
    create(item) {
        console.log('O item foi salvo em mongodb');
    }
}

module.exports = MongoBD;