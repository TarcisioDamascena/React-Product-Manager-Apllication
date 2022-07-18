const db = require('../../db')

module.exports = app => {

  app.route('/').post(async (req, res) => {
    reqData = req.body

    let _product = {
      codigo: reqData.codigo || 0,
      descricao: reqData.descricao || "",
      preco: reqData.preco || 0,
      data_cadastro: reqData.data_cadastro || new Date(),
    }

    const Product = db.Mongoose.model(process.env.DB_COLLECTION, db.ProductSchema, process.env.DB_COLLECTION);
    const docs = await Product.find({ codigo: _product.codigo }).lean().exec();
    
    if (docs.length == 0) {
      const product = new Product(_product);
      try {
  
        await product.save();
        console.log('Novo produto inserido')

        res.status(201).send('Novo produto inserido');
  
      } catch (err) {
        console.log(err);
        res.status(500).send(err)
      }
    }
  
    else {
      console.log('Codigo do produto já existe')
      res.status(400).send('Codigo do produto já existe');
    }


  });
}
