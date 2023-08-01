import connect from "../../lib/dbConnect";
import User from "../../models/schema"

connect()

export default async function handler(req,res){
    const {name,email,password}=req.body
    const user = await User.findOne({name,email,password})
    if(!user){
        return res.json({status:"Belum melakukan registrasi"})
    }
    else{
        res.redirect('/')
    }
}