import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Note App</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
)

export default Layout;