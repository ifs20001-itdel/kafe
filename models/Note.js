const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    maxlength: [40, 'Title cannot be more than 40 characters']
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  image: {
    type: Buffer, // Menggunakan tipe Buffer untuk menyimpan data gambar
    required: true
  },
  imageType: {
    type: String, // Menyimpan tipe file gambar (misalnya: image/jpeg, image/png)
    required: true
  }
});

NoteSchema.virtual('imagePath').get(function() {
  if (this.image && this.imageType) {
    return `data:${this.imageType};base64,${this.image.toString('base64')}`;
  }
});

module.exports = mongoose.model('Note', NoteSchema);
