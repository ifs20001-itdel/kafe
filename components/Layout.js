import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer";

const Layout = ({children}) => (
    <>
        <Head>
            <title>Kefi Cafe</title>
            <script src="https://cdn.tailwindcss.com" async></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" async></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" async></script>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>
)

export default Layout;