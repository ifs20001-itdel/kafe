import { destroyCookie } from 'nookies';

export default async function handler(req, res) {
    destroyCookie({ res }, 'user_token', {
        path: '/',
    });

    res.redirect('/');
}
