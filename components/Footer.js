import Link from "next/link";

const Footer = () => (
    <>
        <div class="text-black-600 body-font mt-20" style={{backgroundColor:"#F6ECD1"}}>
            <div class="container px-5 py-24 mx-auto">
                <div className="flex w-auto justify-center">
                <div class="flex title-font font-medium items-center md:justify-start text-white-900" style={{marginBottom: "46px"}}>
                    <img src="/Group.png" width={35} height={38} style={{marginRight:"20px"}}></img>
                </div>
            <div class="flex title-font font-medium items-center md:justify-start justify-center text-white-900" style={{marginBottom: "46px"}}>
                    <img src="/kefi.png" width={60} height={60}></img>
                </div>
                </div>
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900 mb-6">LINKS</div>
                <nav className="flex justify-center">
                <table>
                    <tr>
                        <td>
                        <Link href="/home" className="mr-5 hover:text-black-900">
                            <p>Home Page</p>
                        </Link>
                        </td>
                        <td>
                        <Link href="/" className="mr-5 hover:text-black-900">
                            <p>Promo</p>
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingRight:"109px"}}>
                        <Link href="/index_promo" className="mr-5 hover:text-black-900">
                            <p>Our Menu</p>
                        </Link>
                        </td>
                        <td>
                        <Link href="/contact" className="mr-5 hover:text-black-900">
                            <p>Location</p>
                        </Link>
                        </td>
                    </tr>
                    </table>

</nav>
<div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900 mb-3 mt-6">CONTACT</div>
<div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900 mb-10">email@gmail.com</div>

<div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900 mb-3">SOCIAL</div>
<div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">kefi.cafeandspace</div>

                    </div>
            </div>


            <div style={{backgroundColor:"#AA8F633"}}>
                <div class="container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col">
                <p class="text-sm text-white-500">© Intership Del 2023
                </p>
                </div>
            </div>
    </>
)

export default Footer;