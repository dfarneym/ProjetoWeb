//Conectando com o mongodb
const mongoose = require('mongoose')

const uri = process.env.MONGOLAB_JADE_URI ? process.env.MONGOLAB_JADE_URI : 'mongodb://localhost/seraquepresta_stats'
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })

