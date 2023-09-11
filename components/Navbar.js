import 'tailwindcss/tailwind.css';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { destroyCookie, parseCookies } from 'nookies'; // Added parseCookies
import { useRouter } from 'next/router';

const Navbar = ({ userRole }) => {
  const router = useRouter();
  const cookies = parseCookies(); // Parse cookies


  const handleLogout = () => {
    // Remove the user_token cookie
    destroyCookie(null, 'user_token', {
      path: '/',
    });
    router.push('/login');
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCreateMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setIsMobileMenuOpen(false)
    })

    return () => {

    }
  }, [])
  const isLoggedIn = !!cookies.user_token;


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
              <p className="text-center" style={{
                marginTop: "10px",
                textDecoration: "none",
                color: "#000"
              }}>Home Page</p>
            </Link>
            {userRole === 'user' && (
              <>
                <Link href="/menu" style={{
                  textDecoration: "none",
                  color: "#000"
                }} className="mr-5 hover:text-gray-900">
                  <p className="text-center">Menu</p>
                </Link>
              </>
            )}
            <Link href="/promo" style={{
              textDecoration: "none",
              color: "#000"
            }} className="mr-5 hover:text-gray-900">
              <p className="text-center">Promo</p>
            </Link>
            <Link href="/keranjang" style={{
              textDecoration: "none",
              color: "#000"
            }} className="mr-5 hover:text-gray-900">
              <p className="text-center">Keranjang</p>
            </Link>
            {userRole === 'user' && (
              <>
                <Link href="/hasil-status" style={{
                  textDecoration: "none",
                  color: "#000"
                }} className="mr-5 hover:text-gray-900">
                  <p className="text-center">Status Pemesanan</p>
                </Link>
              </>
            )}
            <div className="hover:text-gray-900 focus:outline-none cursor-pointer" onClick={toggleCreateMenu}>
              {userRole === 'admin' && (
                <>
                  <Link href="/status" style={{
                    textDecoration: "none",
                    color: "#000"
                  }} className="mr-5 hover:text-gray-900">
                    <p className="text-center">Status Pemesanan</p>
                  </Link>
                  <Link href="/menuAdmin" style={{
                    textDecoration: "none",
                    color: "#000"
                  }} className="mr-5 hover:text-gray-900">
                    <p className="text-center">EDIT MENU</p>
                  </Link>
                  <p className="text-center">CREATE</p>
                  {isCreateMenuOpen && (
                    <div className="mt-4 bg-[#C8AE7D]">
                      <Link href="/newmakanan" style={{
                        textDecoration: "none",
                        color: "#000"
                      }} className="mr-5 hover:text-gray-900">
                        <p className="text-center pt-2">CREATE Makanan</p>
                      </Link>
                      <Link href="/newminuman" style={{
                        textDecoration: "none",
                        color: "#000"
                      }} className="mr-5 hover:text-gray-900">
                        <p className="text-center">CREATE Minuman</p>
                      </Link>
                      <Link href="/newpromo" style={{
                        textDecoration: "none",
                        color: "#000"
                      }} className="mr-5 hover:text-gray-900">
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
        <div className="pt-8 pb-12 z-20">
          <div className="mr-5">
            <button className="focus:outline-none ml-6" onClick={toggleUserMenu} style={{ color: "#67442E" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
          </div>

          <div className={`${isUserMenuOpen ? '' : 'hidden'} mt-6 w-full flex-wrap items-center justify-center absolute top-16 left-0 z-10`} style={{ zIndex: 10, backgroundColor: "#F3E0BF" }}>
            <Link href="/profil" className="mr-5 hover:text-gray-900">
              <p className="text-center" style={{
                marginTop: "10px",
                textDecoration: "none",
                color: "#000"
              }}>Profil</p>
            </Link>
            {/* Check if user is logged in */}
            {/* <div>
              {isLoggedIn ? (
                <button
                  className="focus:outline-none cursor-pointer mt-4"
                  onClick={handleLogout}
                >
                  <p style={{ margin: "auto 150px" }}>Logout</p>
                </button>
              ) : (
                <Link
                  href="/login"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                  className="mr-5 hover:text-gray-900"
                >
                  <h3 className="text-center">Login</h3>
                </Link>
              )}
            </div> */}
            {/* Check if user is logged in */}
            {userRole === 'user' ? (
              <Link href="/login" style={{
                textDecoration: "none",
                color: "#000"
              }} className="mr-5 hover:text-gray-900">
                <p className="text-center">Login</p>
              </Link>
            ) : (
              <button className="focus:outline-none cursor-pointer mt-4" onClick={handleLogout}>
                <p style={{
                  margin: "auto 150px"
                }}>Logout</p>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
