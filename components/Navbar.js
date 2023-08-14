import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

const Navbar = ({ userRole }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the user_token cookie
    destroyCookie(null, 'user_token', {
      path: '/',
    });
    router.push('/login');
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCreateMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", ()=>{
      setIsMobileMenuOpen(false)
    })
  
    return () => {
      
    }
  }, [])
  

    return (
      <>
        <nav className="flex justify-content-between relative" >
          <div className="pt-8 pb-12 z-20">
            <div className="mr-5">
              <button className="focus:outline-none ml-6" onClick={toggleMobileMenu} style={{ color: "#67442E" }}>
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

            <div className={`${isMobileMenuOpen ? '' : 'hidden'} mt-6 w-full flex-wrap items-center justify-center absolute top-16 left-0 z-10`} style={{ zIndex: 10, backgroundColor: "#F3E0BF" }}>
              <Link href="/" className="mr-5 hover:text-gray-900">
                <p className="text-center" style={{ marginTop: "10px" }}>Home Page</p>
              </Link>
              <Link href="/menu" className="mr-5 hover:text-gray-900">
                <p className="text-center">Menu</p>
              </Link>
              <Link href="/promo" className="mr-5 hover:text-gray-900">
                <p className="text-center">Promo</p>
              </Link>
              <Link href="/keranjang" className="mr-5 hover:text-gray-900">
                <p className="text-center">Keranjang</p>
              </Link>
              <Link href="/contact" className="mr-5 hover:text-gray-900">
                <p className="text-center">Contact</p>
              </Link>
              <div className="hover:text-gray-900 focus:outline-none cursor-pointer" onClick={toggleCreateMenu}>
                {userRole === 'Admin' && (
                  <>
                    <p className="text-center">CREATE</p>
                    {isCreateMenuOpen && (
                      <div className="mt-4 bg-[#C8AE7D]">
                        <Link href="/newmakanan" className="mr-5 hover:text-gray-900">
                          <p className="text-center pt-2">CREATE Makanan</p>
                        </Link>
                        <Link href="/newminuman" className="mr-5 hover:text-gray-900">
                          <p className="text-center">CREATE Minuman</p>
                        </Link>
                        <Link href="/newpromo" className="mr-5 hover:text-gray-900">
                          <p className="text-center">CREATE Promo</p>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8 pb-12">
            <span className="text-xl">
              <Image src="/kefi.png" width={50} height={50} />
            </span>
          </div>

          <details className="md:ml-auto flex flex-wrap items-center text-base justify-center pt-8 pb-12 mr-6" style={{ color: "#67442E", zIndex: 20 }}>
            <summary style={{ listStyle: "none", cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </summary>
            <div className={`mt-6 md:flex w-screen flex-wrap items-center justify-center absolute top-16 left-0 z-10`} style={{ zIndex: 10, backgroundColor: "#F3E0BF" }}>
              <Link href="/" className="mr-5 hover:text-gray-900">
                <p className="text-center" style={{ marginTop: "10px" }}>Home Page</p>
              </Link>
              {/* <Link href="/registrasi" className="mr-5 hover:text-gray-900">
              <p className="text-center">Log out</p>
            </Link> */}
              <Link href="/registrasi" className="mr-5 hover:text-gray-900" onClick={handleLogout}>
                <p className="text-center">Log out</p>
              </Link>
            </div>
          </details>
        </nav>
      </>
    );
  };

  export default Navbar;
