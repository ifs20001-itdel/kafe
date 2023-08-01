import React, { useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from 'semantic-ui-react';

const Index = ({ minumans }) => {
  useEffect(() => {
    console.log(minumans); // Periksa data yang diterima
  }, [minumans]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/minumans/${id}`, {
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

  return (
    <div>
      <nav class='w-full rounded-md p-3'
        style={{
          color: "rgba(0, 0, 0, 0.75)",
          textAlign: "center",
          fontFamily: "Quicksand",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "15px",
          letterSpacing: "0.26px",
        }}>
        <ol class='list-reset flex'>
          <li>
            <Link href='/'>Homepage</Link>
          </li>
          <li>
            <span class='mx-2 text-neutral-500 dark:text-neutral-400'>/</span>
          </li>
          <li class='text-neutral-500 dark:text-neutral-400 text-[#67442E]'>
            Our Drinks
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
                fontFamily: "Quicksand",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "25px"
              }}
            >What do you want to drink?</h1>
          </div>
          <div className="cards-container">
            {minumans.map(minuman => {
              return (
                <div key={minuman._id} className="card-item" style={{ width: "156px" }}>
                  <div>
                    <div>
                      <img src={minuman.image} alt="image description" style={{
                        width: "150.135px",
                        height: "150.135px",
                        borderRadius: "20px"
                      }} />
                    </div>
                    <div>
                      <div className="mt-4 text-left">
                        <Link href={`/${minuman._id}`}>
                          <span style={{
                            color: "#000",
                            fontFamily: "Quicksand",
                            fontSize: "14.164px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "18.885px",
                            letterSpacing: "0.283px"
                          }}>{minuman.title}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-1 text-left">
                      <span style={{
                        color: "rgba(0, 0, 0, 0.75)",
                        textAlign: "center",
                        fontFamily: "Quicksand",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "15px",
                        letterSpacing: "0.26px"
                      }}>Rp. {minuman.price}</span>
                    </div>
                    <div className="mt-2 mb-6 text-left">
                      {/* <Link href={`/${minuman._id}`}>
                      <Button className="bg-transparent text-[#67442E] font-semibold py-2 px-4 border m-2 border-[#67442E] rounded">
                        View
                      </Button>
                    </Link> */}
                      <Link href={`/${minuman._id}`}>
                        <div className="flex items-center justify-start">
                          <button className="bg-transparent text-[#67442E] font-semibold py-2 px-auto"
                            style={{
                              borderRadius: "12.275px",
                              border: "1.416px solid #67442E",
                              display: "flex",
                              padding: "4.83px 29.272px",
                              alignItems: "flex-start",
                              gap: "-3.45px"
                            }}>
                            <p className="pr-2" style={{
                              color: "#67442E",
                              textAlign: "center",
                              fontFeatureSettings: "'clig' off, 'liga' off",
                              fontFamily: "DM Sans",
                              fontSize: "14.164px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "26.221px"
                            }}>Tambah</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                              style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </Link>
                      <Link href={`/${minuman._id}/edit`}>
                        <Button className="bg-transparent text-[#67442E] font-semibold py-2 px-4 border m-2 border-[#67442E] rounded">Edit</Button>
                      </Link>
                      <Button
                        className="bg-transparent text-[#FF0000] font-semibold py-2 px-4 border m-2 border-[#FF0000] rounded"
                        onClick={() => handleDelete(minuman._id)}
                      >
                        Delete
                      </Button>
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
    </div>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/minumans');
    const { data } = await res.json();
    return { minumans: data };
  } catch (error) {
    console.log(error);
    return { minumans: [] };
  }
}

export default Index;
