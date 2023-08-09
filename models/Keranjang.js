const mongoose = require('mongoose')

const KeranjangSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    price: {
        type: Number,
        required: true,
        maxlength: [200, 'Price cannot be more than 200 characters']
    }
})

module.exports = mongoose.models.Keranjang || mongoose.model('Keranjang', KeranjangSchema);