import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies'; // Import parseCookies dari nookies

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const cookies = parseCookies(); // Mengambil semua cookie
  
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  console.log(cookies)
  
  useEffect(() => {

    console.log(cookies)
    
    if (cookies.user_token) {
      setIsLoggedIn(JSON.parse(cookies.user_token)?.isLoggedIn); // Sesuaikan dengan nilai yang Anda gunakan saat setCookie
  
      setIsLoading(false)
  
      console.log(isLoggedIn)
      
      if (!isLoggedIn) {
        // router.push('/login'); // Redirect ke halaman login jika tidak
        console.log("redirect to login page")  
      }
    } else {
      setTimeout(() => {
        setIsLoading(false)
        setIsLoggedIn(false)
        console.log("user_token is false")
      }, 3000);
    }
    
  }, [cookies]);

  return (
    <>
    {
      isLoading ? "loading..." : isLoggedIn ? children : "not logged in"
    }
    </>
    ) 
  };

export default PrivateRoute;
