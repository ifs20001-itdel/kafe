import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
    // <nav className="navbar">
    //     <Link href="/">
    //         <span className="navbar-brand">Note App</span>
    //     </Link>
    //     <Link href="/new">
    //         <span className="create">Create note</span>
    //     </Link>
    // </nav>
    <>
        <nav class="text-gray-600 body-font mb-10">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span class="ml-3 text-xl">
                <Image src="/kefi.png" width={50} height={50}></Image>
                </span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link class="mr-5 hover:text-gray-900" href="/home">Home Page</Link>
                <Link class="mr-5 hover:text-gray-900" href="/">Menu</Link>
                <Link class="mr-5 hover:text-gray-900" href="/index_promo">Promo</Link>
                <Link class="mr-5 hover:text-gray-900" href="/contact">Contact</Link>
                <Link class="mr-5 hover:text-gray-900" href="/new">CREATE</Link>
            </nav>
            <Link href="/autentikasi">
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Akun
                </button>
            </Link>
            </div>
        </nav>
    </>




);

export default Navbar;
