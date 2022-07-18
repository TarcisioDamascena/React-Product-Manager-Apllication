const mongoose = require('mongoose');

/* 
    Caso queira rodar o projeto em ambiente local, deve ser configurado um
    arquivo .env na raiz do projeto a URI de conexão com o mongoDB e o nome
    da coleção com os campos MONGODB_URI e DB_COLLECTION respectivamente
*/

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ecociclagem:Emvus0333@cluster0.cagei.mongodb.net/ecociclagem', { useNewUrlParser: true })
    .then(connect => console.log('connected to mongodb..'))
    .catch(e => console.log('could not connect to mongodb', e))

const productSchema = new mongoose.Schema({
    codigo: Number,
    descricao: String,
    preco: Number,
    data_cadastro: String,

}, { collection: process.env.DB_COLLECTION }
);

module.exports = { Mongoose: mongoose, ProductSchema: productSchema }