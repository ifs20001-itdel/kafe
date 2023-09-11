const mongoose = require('mongoose')

const PromoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    image: {
        type: String,
        required: true,
        maxlength: [1000, 'Image cannot be more than 1000 characters']
    }
})

module.exports = mongoose.models.Promo || mongoose.model('Promo', PromoSchema);