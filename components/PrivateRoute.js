import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import Link from 'next/link';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const cookies = parseCookies();

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    if (cookies.user_token) {
      setIsLoggedIn(JSON.parse(cookies.user_token)?.isLoggedIn);
      setUserRole(JSON.parse(cookies.user_token)?.role); // Assuming the user role is stored in the cookies
      setIsLoading(false);

      if (!isLoggedIn) {
        console.log("redirect to login page");
      }
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setIsLoggedIn(false);
        console.log("user_token is false");
      }, 3000);
    }
  }, [cookies]);

  return (
    <div className='flex flex-col items-center justify-center'>
      {isLoading ? (
        "Loading..."
      ) : isLoggedIn ? (
        children
      ) : (
        <div className='text-[#67442E] text-center flex-1' style={{ margin: "150px auto" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 h-16 mb-4 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <h1 className="text-xl font-bold">Anda belum melakukan
            <Link href="/login">
              <h1 className="text-xl font-bold rounded" style={{
                border:"2px solid #67442E"
              }}>
                Login
              </h1>
            </Link>
          </h1>
        </div>
      )}
      {isLoggedIn && userRole === 'admin' && children} {/* Only render children if user is logged in and has admin role */}
    </div>
  );
};

export default PrivateRoute;
