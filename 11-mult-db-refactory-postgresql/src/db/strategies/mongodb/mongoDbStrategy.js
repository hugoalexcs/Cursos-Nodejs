const IDb = require('../../base/interfaceDb');
const Mongoose = require('mongoose');

const Status = {
  0: 'Disconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Disconectado',
}

class MongoDBStrategy extends IDb {
  constructor(connection, schema) {
    super();
    this._schema = schema;
    this._conenction = connection;
    //this._connect();
  }
  
  async isConnected() {
    
    const state = Status[ this._conenction.readyState];
    if (state == 'Conectado') return state;
    if (state != 'Conectando') return state;
    await new Promise(reolsve => setTimeout(reolsve, 1000));
    return Status[this._conenction.readyState];
  }

  static connect(){
    Mongoose.connect('mongodb://web.clinica.local:27016/herois', 
      {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }/* , function (error) {
        console.log('Error!', error)
      } */).then(() => {        
          console.log('DB Conectou com sucesso!')
        });

      return Mongoose.connection;
      
      //connection.once('open', ()=> console.log('Database conected!'))
  }


  async create(item) {
     return this._schema.create(item);
  }
  
  async read(item, skip=0, limit = 10) {
     return this._schema.find(item).skip(skip).limit(limit);
  }

  async update(id, item) {
     return this._schema.findByIdAndUpdate(id, item, {
      new: true,
      upsert: true,
      runValidators: true
    });
  }
  async delete(id) {
     return this._schema.findByIdAndDelete(id);
  }

}

module.exports = MongoDBStrategy;
