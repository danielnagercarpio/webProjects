const mongoose = require("mongoose")
const dishesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Dishes', dishesSchema)