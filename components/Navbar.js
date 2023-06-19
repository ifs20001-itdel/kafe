import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="text-gray-600 body-font mb-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <Image src="/kefi.png" width={50} height={50}></Image>
            </span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 md:hidden">
            <button className="focus:outline-none"
                onClick={toggleMobileMenu}>
                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                    <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                    <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                </div>
                </div>
            </button>
            </div>

            <div
              className={`${
                isMobileMenuOpen ? '' : 'hidden'
              } md:flex flex-wrap items-center`}
            >
              <Link href="/home" className="mr-5 hover:text-gray-900">
                <p>Home Page</p>
              </Link>
              <Link href="/" className="mr-5 hover:text-gray-900">
                <p>Menu</p>
              </Link>
              <Link href="/index_promo" className="mr-5 hover:text-gray-900">
                <p>Promo</p>
              </Link>
              <Link href="/contact" className="mr-5 hover:text-gray-900">
                <p>Contact</p>
              </Link>
              <Link href="/new" className="mr-5 hover:text-gray-900">
                <p>CREATE</p>
              </Link>
            </div>
          </nav>
          <Link href="/autentikasi">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Akun
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
