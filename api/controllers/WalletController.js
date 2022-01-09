const database = require('../models')
const coins = database.coins
const transactions = database.transactions



class WalletController {
    static async pegaTodasAsWallets(req, res) {
        try {
            const todasAsWallets = await database.Wallets.findAll({
                include: [{
                    model: coins,
                    attributes: ['coin', 'fullname', 'amont'],
                    required: true,
                    include: {
                        model: transactions,
                        required: true,
                        attributes: ['value', 'datetime', 'currentCotations']
                    }
                }],
                attributes: [
                    'address',
                    'name',
                    'cpf',
                    'birthdate',
                    'createdAt',
                    'updatedAt'
                ]
            })
            return res.status(200).json(todasAsWallets)
        } catch (error) {
            return res.status(500).json(error.message)

        }

    }

}
module.exports = WalletController