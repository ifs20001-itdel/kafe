import connect from "../../lib/dbConnect";
import User from "../../models/schema";

connect();

export default async function handler(req, res) {
    try {
        const { email, password, name, nomorhp, alamat, role } = req.body;

        // Validasi email (pastikan email sesuai format yang valid)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            const errorMessage = encodeURIComponent('Format email tidak valid.');
            res.redirect(`/?alert=${errorMessage}`);
            return;
        }

        // Temukan pengguna berdasarkan alamat email
        const user = await User.findOne({ email });

        if (!user) {
            const errorMessage = encodeURIComponent('Pengguna dengan alamat email ini tidak ditemukan.');
            res.redirect(`/?alert=${errorMessage}`);
            return;
        }

        // Lakukan perubahan data pengguna di sini
        if (password) {
            user.password = password;
        }

        if (name) {
            user.name = name;
        }
        if (nomorhp) {
            user.nomorhp = nomorhp;
        }
        if (alamat) {
            user.alamat = alamat;
        }
        if (role) {
            user.role = role;
        }

        await user.save();

        // Setelah berhasil mereset password atau mengedit data, arahkan pengguna ke halaman yang sesuai
        const successMessage = encodeURIComponent('Password berhasil direset atau data pengguna berhasil diperbarui.');
        res.redirect(`/login?alert=${successMessage}`);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        const errorMessage = encodeURIComponent('Terjadi kesalahan dalam mereset password atau mengedit data pengguna.');
        res.redirect(`/?alert=${errorMessage}`);
    }
}
