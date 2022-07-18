const db = require('../../db')

/*
Essa rota retorna a lista de produtos cadastrados, caso
for passado o ID como parametro de rota, é retornado apenas 
o objeto especificado
*/

module.exports = app => {

  app.route('/').get(async (req, res) => {

    let index = req.query?.produto
    
    const Product = db.Mongoose.model(process.env.DB_COLLECTION, db.ProductSchema, process.env.DB_COLLECTION);
    const list = await Product.find()

    if (index != undefined) {

      if (list[index] != undefined) {
        res.status(200).send(JSON.stringify(list[index]))
      }
      else {
        res.status(400).send("O produto não existe")
      }

    }
    else {
      res.status(200).send(JSON.stringify(list))
    }

  });

}
