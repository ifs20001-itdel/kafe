import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
    // <nav classNameName="navbar">
    //     <Link href="/">
    //         <span classNameName="navbar-brand">Note App</span>
    //     </Link>
    //     <Link href="/new">
    //         <span classNameName="create">Create note</span>
    //     </Link>
    // </nav>
    <>
        <nav className="text-gray-600 body-font mb-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/home">
                <span className="ml-3 text-xl">
                <Image src="/kefi.png" width={50} height={50}></Image>
                </span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" href="/home">Home Page</Link>
                <Link className="mr-5 hover:text-gray-900" href="/">Menu</Link>
                <Link className="mr-5 hover:text-gray-900" href="/promo">Promo</Link>
                <Link className="mr-5 hover:text-gray-900" href="/contact">Contact</Link>
                <Link className="mr-5 hover:text-gray-900" href="/new">CREATE</Link>
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

export default Navbar;
