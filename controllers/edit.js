const ItemList = require('../models/itemlist')

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id
        try {
            const items = await ItemList.find()
            res.render("edit.ejs", {itemList: items, idItem: id})
        } catch (err){
            return res.status(500).send(err)
        } 
    },

    deleteItem: async (req, res) => {

    },

    updateItem: async (req, res) => {

    },
}