const express = require("express")
const dishSchema = require("../models/dishes")

const router = express.Router()

// create dish 
router.post('/dish', (req, res) => {
    const dish = dishSchema(req.body)
    dish.save().then((data) => res.json(data)).catch((error) => res.send({message: error}))
})

// get all dishes 
router.get('/dishes', (req, res) => {
    dishSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.send({message: error}))
})

// get specific dish 
router.get('/dish/:id', (req, res) => {
    const { id } = req.params
    dishSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.send({message: error}))
})

// update a dish 
router.put('/dish/:id', (req, res) => {
    const { id } = req.params
    const {name, ingredients, price, origin } = req.body
    dishSchema.updateOne({ _id: id }, {$set: { name, ingredients, price, origin }})
        .then((data) => res.json(data))
        .catch((error) => res.send({message: error}))
})

// delete a dish
router.delete('/dish/:id', (req, res) => {
    const { id } = req.params
    const {name, age, email } = req.body
    dishSchema.remove({ _id: id }, {$set: { name, age, email }})
        .then((data) => res.json(data))
        .catch((error) => res.send({message: error}))
})

module.exports = router
