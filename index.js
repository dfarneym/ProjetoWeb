const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

//Adicionando dentro de app o db, podendo usa-lo para fazer update, delete...
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})