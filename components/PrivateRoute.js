import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { parseCookies } from 'nookies'; // Import parseCookies dari nookies

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const cookies = parseCookies(); // Mengambil semua cookie
  const isLoggedIn = cookies.user_token === 'user_authenticated_value'; // Sesuaikan dengan nilai yang Anda gunakan saat setCookie

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login'); // Redirect ke halaman login jika tidak
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
