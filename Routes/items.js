const express = require("express")
const ctrItems = require("../Controller/ctrlItems")

const routes = express.Router()

routes.get('/items',ctrItems.getAll)
routes.get('/items/ID',ctrItems.getOne)
routes.delete('/deleteItem/ID',ctrItems.deleteOne)
routes.delete('/addItem',ctrItems.addLeerling)



module.exports = routes