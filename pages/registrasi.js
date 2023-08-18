import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <div>
        <section className='bg-[#f6efdf] dark:bg-gray-900'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
            <div className='w-full'>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <Link style={{
                  textDecoration: "none",
                  color: "#000"
                }} href={`/`}>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.87646" y="39.9688" width="38.0927" height="38.0927" rx="18.7628" transform="rotate(-90 1.87646 39.9688)" fill="#DDCCAE" />
                    <path d="M26.8747 11.3995C26.8756 11.5562 26.8456 11.7115 26.7864 11.8565C26.7271 12.0015 26.6398 12.1335 26.5295 12.2447L17.8396 20.9227L26.5295 29.6007C26.7537 29.8248 26.8796 30.1288 26.8796 30.4458C26.8796 30.7629 26.7537 31.0669 26.5295 31.291C26.3054 31.5152 26.0013 31.6411 25.6843 31.6411C25.3673 31.6411 25.0633 31.5152 24.8392 31.291L15.316 21.7679C15.2044 21.6572 15.1159 21.5255 15.0554 21.3805C14.995 21.2354 14.9639 21.0798 14.9639 20.9227C14.9639 20.7655 14.995 20.6099 15.0554 20.4649C15.1159 20.3198 15.2044 20.1882 15.316 20.0775L24.8392 10.5543C24.9498 10.4428 25.0815 10.3542 25.2265 10.2938C25.3716 10.2333 25.5272 10.2022 25.6843 10.2022C25.8415 10.2022 25.9971 10.2333 26.1421 10.2938C26.2872 10.3542 26.4188 10.4428 26.5295 10.5543C26.6398 10.6656 26.7271 10.7975 26.7864 10.9425C26.8456 11.0875 26.8756 11.2428 26.8747 11.3995Z" fill="#67442E" />
                  </svg>
                </Link>
              </div>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='' style={{
                  color: "#67442E",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  letterSpacing: "2px"
                }}>
                  Hello, nice to meet you
                </h1>
                <form className='space-y-4 md:space-y-6' action='/api/register' method='post'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium'
                    >
                      Your name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='your name'
                      required=''
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-medium '
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                      required=''
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='block mb-2 text-sm font-medium '
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required=''
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='role'
                      className='block mb-2 text-sm font-medium '
                    >
                      Your Role
                    </label>
                    <input
                      type=''
                      name='role'
                      id='role'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Admin / User'
                      required=''
                    />
                  </div>
                  <button
                    type='submit'
                    value='Register'
                    style={{
                      borderRadius: "15px",
                      background: "#DDCCAE",
                      display: "flex",
                      width: "290px",
                      height: "54px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "-5px",
                      fontSize: "20px",
                      fontWeight: "500px",
                      color: "#67442E"
                    }}
                  >
                    Register
                  </button>
                  <p className='text-sm font-light text-gray-500 dark:text-gray-400'
                    style={{
                      color: "#000",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "20px",
                      textAlign: "center"
                    }}
                  >
                    Sudah punya akun?{' '}
                    <a
                      href='/login'
                      className='font-medium text-[#67442E] hover:underline dark:text-primary-500'
                    >
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
