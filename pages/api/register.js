import connect from "../../lib/dbConnect";
import User from "../../models/schema";


connect()

export default async function handler(req, res) {
    try {
        const user = await User.create(req.body);
        if (!user) {
            return res.json({ code: 'User belum dibuat' });
        } else {
            // Redirect to the homepage when registration is successful
            res.redirect('/');
        }
    } catch (error) {
        res.status(400).json({ status: 'Buat user baru' });
    }
}
