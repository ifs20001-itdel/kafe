import connect from "../../lib/dbConnect";
import User from "../../models/schema";

connect();

export default async function handler(req, res) {
    try {
        const user = await User.create(req.body);
        if (!user) {
            const alertMessage = encodeURIComponent('User belum dibuat');
            res.redirect(`/?alert=${alertMessage}`);
        } else {
            // Redirect to the homepage with a success message
            const successMessage = encodeURIComponent('Registrasi berhasil! Selamat datang di KEFI Cafe & Space.');
            res.redirect(`/?alert=${successMessage}`);
        }
    } catch (error) {
        const errorMessage = encodeURIComponent('Tolong buat akun anda terlebih dahulu');
        res.redirect(`/?alert=${errorMessage}`);
    }
}
