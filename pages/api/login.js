import connect from "../../lib/dbConnect";
import User from "../../models/schema";
import { setCookie } from 'nookies';

connect();

export default async function handler(req, res) {
  const { email, password } = req.body;

  // Validasi email dan password (tidak boleh kosong)
  if (!email || !password) {
    const alertMessage = encodeURIComponent('Email dan password harus diisi.');
    res.redirect(`/?alert=${alertMessage}`);
    return;
  }

  // Temukan pengguna berdasarkan alamat email
  const user = await User.findOne({ email });

  if (!user) {
    const alertMessage = encodeURIComponent('Anda belum melakukan registrasi. Silakan daftar terlebih dahulu.');
    res.redirect(`/?alert=${alertMessage}`);
    return;
  }

  // Selanjutnya, Anda dapat memeriksa apakah kata sandi yang dimasukkan oleh pengguna cocok
  if (user.password !== password) {
    const alertMessage = encodeURIComponent('Kata sandi yang Anda masukkan salah.');
    res.redirect(`/?alert=${alertMessage}`);
    return;
  }

  // Jika email dan kata sandi cocok, maka pengguna berhasil login
  // Simpan status login ke cookie
  setCookie({ res }, 'user_token', JSON.stringify({ isLoggedIn: true, user }), {
    maxAge: 30 * 24 * 60 * 60, // Durasi cookie dalam detik (30 hari)
    path: '/',
  });

  res.redirect('/');
}
