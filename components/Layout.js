import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Kefi Cafe</title>
            <script src="https://cdn.tailwindcss.com" async></script>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
)
export default Layout;