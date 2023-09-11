import connect from "../../lib/dbConnect";
import User from "../../models/schema";

connect();

export default async function handler(req, res) {
    try {
        // Validasi input di sini
        const { name, email, password, nomorhp, alamat, role } = req.body;

        if (!name || !email || !password || !nomorhp || !alamat || !role) {
            // Jika ada input yang kosong, beri pesan kesalahan
            const errorMessage = encodeURIComponent('Semua field harus diisi.');
            return res.redirect(`/?alert=${errorMessage}`);
        }

        // Lakukan validasi lain sesuai kebutuhan, misalnya validasi format email atau password lebih dari 6 karakter.

        const user = await User.create(req.body);
        if (!user) {
            const alertMessage = encodeURIComponent('User belum dibuat');
            return res.redirect(`/?alert=${alertMessage}`);
        } else {
            // Redirect to the homepage with a success message
            const successMessage = encodeURIComponent('Registrasi berhasil! Selamat datang di KEFI Cafe & Space.');
            return res.redirect(`/?alert=${successMessage}`);
        }
    } catch (error) {
        // Tangani kesalahan lain yang mungkin terjadi
        console.error(error);
        const errorMessage = encodeURIComponent('Terjadi kesalahan saat membuat akun Anda.');
        return res.redirect(`/?alert=${errorMessage}`);
    }
}
