import React, { useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import PrivateRoute from "../components/PrivateRoute";

const Index = ({ testimonis, userRole }) => {

  const router = useRouter();

  useEffect(() => {
    console.log(testimonis); // Periksa data yang diterima
  }, [testimonis]);


  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/testimonis/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success) {
        // Jika delete berhasil, reload halaman untuk memperbarui daftar catatan
        window.location.reload();
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (testimoni) => {
    try {
      const res = await fetch("http://localhost:3000/api/keranjangs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: testimoni.title,
          image: testimoni.image
        }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Item berhasil ditambahkan ke keranjang:", data.data);
      } else {
        console.log("Gagal menambahkan item ke keranjang:", data.error);
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };


  return (
    <div>
      <PrivateRoute>
        <nav class='w-full rounded-md p-3'
          style={{
            color: "rgba(0, 0, 0, 0.75)",
            textAlign: "center",
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "15px",
            letterSpacing: "0.26px",
          }}>
          <ol class='list-reset flex'>
            <li>
              <Link style={{
                textDecoration: "none",
                color: "#000"
              }} href='/'>Homepage</Link>
            </li>
            <li>
              <span class='mx-2 text-neutral-500 dark:text-neutral-400'>/</span>
            </li>
            <li class='text-neutral-500 dark:text-neutral-400 text-[#67442E]'>
              Admin
            </li>
          </ol>
        </nav>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="content-container">
            <div className="mb-6" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                <g clip-path="url(#clip0_90_1510)">
                  <path d="M47 0H0V47H47V0Z" fill="white" fill-opacity="0.01" />
                  <path d="M11.75 5.875L5.875 11.75" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.125 35.25L35.25 41.125" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.5417 5.875L5.875 21.5417" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M31.3333 5.875L5.875 31.3333" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.125 5.875L5.875 41.125" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.1251 15.6666L15.6667 41.125" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M41.1249 25.4584L25.4583 41.125" stroke="#F3E0BF" stroke-width="3.91667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_90_1510">
                    <rect width="47" height="47" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1
                style={{
                  color: "#000",

                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "25px"
                }}
              >Testimonials</h1>
            </div>
            <div className="cards-container">
              {testimonis.map(testimoni => {
                return (
                  <div key={testimoni._id} className="card-item" style={{ width: "156px" }}>
                    <div>
                      <div>
                        <Link style={{
                          textDecoration: "none",
                          color: "#000"
                        }} href={`/${testimoni._id}/testimonis`}>
                          <img src={testimoni.image} alt="image description" style={{
                            width: "150.135px",
                            height: "150.135px",
                            borderRadius: "20px"
                          }} />
                        </Link>
                      </div>
                      <div>
                        <div className="mt-4 text-left">
                          <Link style={{
                            textDecoration: "none",
                            color: "#000"
                          }} href={`/${testimoni._id}/testimonis`}>
                            <span style={{
                              color: "#000",

                              fontSize: "14.164px",
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "18.885px",
                              letterSpacing: "0.283px"
                            }}>{testimoni.title}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="mt-2 mb-6 text-left">
                        <Link style={{
                          textDecoration: "none",
                          color: "#000"
                        }} href={`/${testimoni._id}/edittestimoni`}>
                          <div className="bg-transparent text-[#67442E] font-semibold py-2  px-auto" style={{ borderRadius: "12.275px", border: "1.416px solid #67442E", display: "flex", padding: "4.83px 29.272px", alignItems: "flex-start", gap: "-3.45px" }}>
                            <p style={{ margin: "auto 33px" }}>Edit</p>
                          </div>
                        </Link>
                        <div className="bg-transparent" onClick={() => handleDelete(testimoni._id)}>
                          <div className="bg-transparent text-[#67442E] font-semibold py-2 mt-2 px-auto" style={{ borderRadius: "12.275px", border: "1.416px solid #67442E", display: "flex", padding: "4.83px 29.272px", alignItems: "flex-start", gap: "-3.45px" }}>
                            <p style={{ margin: "auto 23px" }}>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <style jsx>{`
        /* Navbar styles */
        .navbar-container {
          /* Add styles for your navbar here */
          /* For example: background-color, height, padding, etc. */
        }

        /* Content styles */
        .content-container {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cards-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .card-item {
          margin: 10px;
        }
      `}</style>
        </div >
      </PrivateRoute>
    </div>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/testimonis');
    const { data } = await res.json();
    return { testimonis: data };
  } catch (error) {
    console.log(error);
    return { testimonis: [] };
  }
}

export default Index;
