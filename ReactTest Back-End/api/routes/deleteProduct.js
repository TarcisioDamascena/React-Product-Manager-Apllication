const db = require('../../db')

/*
Essa rota retorna a lista de produtos cadastrados, caso
for passado o ID como parametro de rota, é retornado apenas 
o objeto especificado
*/

module.exports = app => {

  app.route('/').delete(async (req, res) => {

    let reqData = req.body

    const Product = db.Mongoose.model(process.env.DB_COLLECTION, db.ProductSchema, process.env.DB_COLLECTION);
    const docs = await Product.find({ codigo: reqData.codigo }).lean().exec();

    if (docs.length == 0) {
      res.status(400).send("O produto com esse codigo não existe")
    }

    else {
      Product.deleteOne({ codigo: reqData.codigo }).then(

        res.status(200).send("O produto foi removido")

      ).catch((err) => {
        res.status(500).send("O produto não pode ser removido. \n " + err)
      })
    }

  });

}
