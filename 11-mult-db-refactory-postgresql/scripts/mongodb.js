const Mongoose = require('mongoose');

//Mongoose.connect('mongodb://user:password@web.clinica.local:27016/herois')
Mongoose.connect('mongodb://web.clinica.local:27016/herois', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB Conectou com sucesso!'));

/* const connection = Mongoose.connection;

connection.exec('open', () => console.log('Database rodando!')) */

const heroSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 
    poder: {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        default: new Date()
    }
})

const model = Mongoose.model('herois', heroSchema);

async function main() {
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    })
    const resultFind = await model.find();

    console.log('result cadastrar', resultCadastrar)
    console.log('result Find', resultFind)
}
main();