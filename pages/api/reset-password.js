// api/reset-password.js
import connect from "../../lib/dbConnect";
import User from "../../models/schema";

connect();

export default async function handler(req, res) {
    try {
        const { email, password } = req.body;

        // Validasi email (pastikan email sesuai format yang valid)

        // Temukan pengguna berdasarkan alamat email
        const user = await User.findOne({ email });

        if (!user) {
            const errorMessage = encodeURIComponent('Pengguna dengan alamat email ini tidak ditemukan.');
            res.redirect(`/?alert=${errorMessage}`);
            return;
        }

        // Lakukan perubahan password di sini (misalnya, mengubah nilai password pengguna)
        user.password = password;
        await user.save();

        // Setelah berhasil mereset password, arahkan pengguna ke halaman login
        const successMessage = encodeURIComponent('Password berhasil direset. Silakan login dengan password baru Anda.');
        res.redirect(`/login?alert=${successMessage}`);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        const errorMessage = encodeURIComponent('Terjadi kesalahan dalam mereset password.');
        res.redirect(`/?alert=${errorMessage}`);
    }
}
