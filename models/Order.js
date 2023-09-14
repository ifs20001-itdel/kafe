const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    price: {
        type: Number,
        required: true,
        maxlength: [200, 'Price cannot be more than 200 characters']
    },
    image: {
        type: String,
        required: true,
        maxlength: [1000, 'Image cannot be more than 1000 characters']
    },
    lokasi: {
        type: String,
        required: true,
        maxlength: [1000, 'Image cannot be more than 1000 characters']
    }
});

const OrderSchema = new mongoose.Schema({
  items: [ItemSchema],
  total: Number, 
  lokasi: String,
});

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema);
