import Link from 'next/link'
import React from 'react'

function menu() {
  return (
    <div>
      <nav class='w-full rounded-md p-3'>
        <ol class='list-reset flex'>
          <li>
            <Link href='/'>Homepage</Link>
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
      <div class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-10 d-flex'>
            <h1 class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black'>
              Foods
            </h1>
            <Link href='/makanan'>
              <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-[#67442E]'>
                Menu lainnya
              </p>
            </Link>
          </div>

          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div class='text-gray-600 body-font'>
              <div
                id='makanan'
                class='carousel slide carousel-fade'
                data-bs-ride='carousel'
              >
                <div class='carousel-inner rounded-lg'>
                  <div class='carousel-item active'>
                    <img src='makanan4.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='makanan2.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='makanan3.JPG' class='d-block w-100' alt='...' />
                  </div>
                </div>
                <button
                  class='carousel-control-prev'
                  type='button'
                  data-bs-target='#makanan'
                  data-bs-slide='prev'
                >
                  <span
                    class='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button
                  class='carousel-control-next'
                  type='button'
                  data-bs-target='#makanan'
                  data-bs-slide='next'
                >
                  <span
                    class='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MINUMAN */}
      <div class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-10 d-flex'>
            <h1 class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black'>
              Drinks
            </h1>
            <Link href='/minuman'>
              <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-[#67442E]'>
                Menu lainnya
              </p>
            </Link>{' '}
          </div>

          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div class='text-gray-600 body-font'>
              <div
                id='minuman'
                class='carousel slide carousel-fade'
                data-bs-ride='carousel'
              >
                <div class='carousel-inner rounded-lg'>
                  <div class='carousel-item active'>
                    <img src='/minuman1.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman2.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman3.JPG' class='d-block w-100' alt='...' />
                  </div>
                </div>
                <button
                  class='carousel-control-prev'
                  type='button'
                  data-bs-target='#minuman'
                  data-bs-slide='prev'
                >
                  <span
                    class='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button
                  class='carousel-control-next'
                  type='button'
                  data-bs-target='#minuman'
                  data-bs-slide='next'
                >
                  <span
                    class='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default menu
