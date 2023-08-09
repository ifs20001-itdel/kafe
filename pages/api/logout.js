import { destroyCookie } from 'nookies';

export default async function handler(req, res) {
    // Hapus cookie yang berisi status login
    destroyCookie({ res }, 'user_token', {
        path: '/',
    });

    res.redirect('/login'); // Redirect to login page after logout
}
