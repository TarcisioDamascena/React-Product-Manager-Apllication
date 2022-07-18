const db = require('../../db')

module.exports = app => {

  app.route('/').patch(async (req, res) => {
    reqData = req.body

    let dataToUpdate = {
      descricao: reqData.descricao,
      preco: reqData.preco,
      data_cadastro: reqData.data_cadastro || new Date(),
    }

    const Product = db.Mongoose.model(process.env.DB_COLLECTION, db.ProductSchema, process.env.DB_COLLECTION);
    const docs = await Product.updateOne({ codigo: reqData.codigo }, dataToUpdate).lean().exec()
      .then(() => {
        res.status(200).send("Produto atualizado")
      }).catch((err) => {
        console.log(err)
        res.status(500).send(JSON.stringify(err))
      })


  });
}
