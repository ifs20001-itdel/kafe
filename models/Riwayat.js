// model/Riwayat.js
const mongoose = require('mongoose');

const RiwayatSchema = new mongoose.Schema({
  items: [
    {
      title: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],
  total: Number,
  lokasi: String,
  // Add any other fields you need for the "riwayats" table
});

module.exports = mongoose.models.Riwayat || mongoose.model('Riwayat', RiwayatSchema);
