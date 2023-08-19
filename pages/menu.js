import Link from 'next/link'
import React from 'react'

function menu() {
  return (
    <div className='bg-[#fff]'>
      <nav class='w-full rounded-md p-3'>
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
            Menu
          </li>
        </ol>
      </nav>
      <div className="mt-4" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        >Pilih menu favorit kamu</h1>
      </div>
      {/* MAKANAN */}
      <div class='text-gray-600 body-font pb-12'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Makanan
            </p>
            <div style={{ position: `relative` }}>
              <div class='text-center'>
                <div style={{
                  color: "#A5895E",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}>
                  <Link style={{
                    textDecoration: "none",
                    color: "#000"
                  }} href="/makanan">
                    Menu Lainnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='flex mt-6 mb-6 justify-center'>
            <div class='w-16 h-1 rounded-full bg-[#A5895E] inline-flex'></div>
          </div>
          <div class="flex flex-col m-auto p-auto">
            <div
              class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
              <div
                class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan2.JPG' class="w-full h-full" />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan3.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan4.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan5.JPG' class="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MINUMAN */}
      <div class='text-gray-600 body-font pb-12'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Minuman
            </p>
            <div style={{ position: `relative` }}>
              <div class='text-center'>
                <div style={{
                  color: "#A5895E",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}>
                  <Link style={{
                    textDecoration: "none",
                    color: "#000"
                  }} href="/minuman">
                    Menu Lainnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='flex mt-6 mb-6 justify-center'>
            <div class='w-16 h-1 rounded-full bg-[#A5895E] inline-flex'></div>
          </div>
          <div class="flex flex-col m-auto p-auto">
            <div
              class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
              <div
                class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman1.JPG' class="w-full h-full" />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman2.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman3.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman.png' class="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default menu
