import connect from "../../lib/dbConnect";
import User from "../../models/schema";
import { setCookie } from 'nookies';

connect();

export default async function handler(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    const alertMessage = encodeURIComponent('Anda belum melakukan registrasi. Silakan daftar terlebih dahulu.');
    res.redirect(`/?alert=${alertMessage}`);
  } else {
    // Simpan status login ke cookie
    setCookie({ res }, 'user_token', JSON.stringify({ isLoggedIn: true, user }), {
      maxAge: 30 * 24 * 60 * 60, // Durasi cookie dalam detik (30 hari)
      path: '/',
    });

    res.redirect('/');
  }
}
