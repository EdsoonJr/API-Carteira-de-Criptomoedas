const bodyParser = require('body-parser')
const Wallets = require('./walletsRoute')


module.exports = app => {
    app.use(bodyParser.json())
    
    app.use(Wallets)
    
}