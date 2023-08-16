import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("user");
  const cookies = parseCookies();

  useEffect(() => {
    if (cookies.user_token) {
      const user = JSON.parse(cookies.user_token).user;
      setUserRole(user?.role?.toLowerCase());
    }
  }, []);

  const isLoginPage = router.pathname === "/login";
  const isRegisterPage = router.pathname === "/register";

  return (
    <>
      <Head>
        <title>Kefi Cafe</title>
        <script src="https://cdn.tailwindcss.com" async></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
          async
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
          async
        ></script>

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>
        {`
          * {
            font-family: "Poppins", sans-serif;
          }

          body {
            background-color: #FFFCF8;
            min-height: 100vh;
          }

        `}
      </style>
        <div
          className="m-auto"
          style={{
            width: "387px",
            height: "800px",
            background: "white"
          }}
        >
          {!isLoginPage && !isRegisterPage && (
            <Navbar userRole={userRole} />
          )}
          {children}
          {!isLoginPage && !isRegisterPage && <Footer />}
        </div>
    </>
  );
};

export default Layout;
