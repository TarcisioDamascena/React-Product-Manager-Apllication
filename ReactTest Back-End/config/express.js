const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = () => {
    const app = express()
    app.set('port', process.env.PORT || 3001)

    app.use(bodyParser.json())
    app.use(cors())

    require('../api/routes/products')(app); //rota GET
    require('../api/routes/newProduct')(app); //rota POST
    require('../api/routes/deleteProduct')(app); //rota DELETE
    require('../api/routes/editProduct')(app); //rota PATCH

    return app
}