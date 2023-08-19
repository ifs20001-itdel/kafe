import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        required: true
    },
    alamat:{
        type:String,
        required:true,
        unique:true
    },
    nomorhp:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)