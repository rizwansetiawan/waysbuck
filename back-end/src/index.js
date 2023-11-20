const express = require("express")
const dotenv = require("dotenv")

const cors = require('cors')
const app = express()
const {authenticate} = require('../src/middlewares/Auth')

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Halo aku Kucing")
})


const userController = require('./controller/user.controller')
app.use('/user', userController)

const drinksController = require('./controller/drinks.controller')
app.use('/drinks', authenticate, drinksController)

const cartController = require('./controller/cart.controller')
app.use('/carts', authenticate, cartController)

const toppingController = require('./controller/topping.controller')
app.use('/toppings', authenticate, toppingController)

const searchController = require('./controller/search.controller')
app.use('/search', authenticate, searchController)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})