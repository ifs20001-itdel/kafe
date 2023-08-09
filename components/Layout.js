import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // Ganti nilai userRole dengan nilai yang sesuai setelah pengguna masuk atau memiliki peran tertentu.
  const userRole = 'admin'; // Misalnya, ubah menjadi 'admin' jika pengguna memiliki peran admin.

  return (
    <>
      <Head>
        <title>Kefi Cafe</title>
        <script src="https://cdn.tailwindcss.com" async></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" async></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" async></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>
        {`
          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
      <Navbar userRole={userRole} /> {/* Berikan properti userRole */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
