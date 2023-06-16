import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import 'styles/globals.css';

import { userService } from 'services';
import { Nav, Alert, Link } from 'components';

export default App;

function App({ Component, pageProps }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on(`routeChangeStart`, hideContent);

        // on route change complete - run auth check 
        router.events.on(`routeChangeComplete`, authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off(`routeChangeStart`, hideContent);
            router.events.off(`routeChangeComplete`, authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        setUser(userService.userValue);
        const publicPaths = [`/account/login`, `/account/register`];
        const path = url.split(`?`)[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: `/account/login`,
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (
        <>
            <Head>
                <title>Next.js 11 - User Registration and Login Example</title>
                
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className={`app-container ${user ? `bg-light` : ``}`}>
                <Nav />
                <Alert />
                {authorized &&
                    <Component {...pageProps} />
                }
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                <div className="text-gray-600 body-font mt-20" style={{backgroundColor:"#F6ECD1"}}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">We Are Waiting to Serve You!</h1>
                    <h2 className="text-xl text-brown-300 tracking-widest font-medium title-font mb-5">KEFI CAFE</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Or Call +62 821 6809 5251</p>
                    </div>
                    <div className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 lg:w-1/3">
                                <div className="h-full text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">LOCATION</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">KOMPLEK, Jl. Classic II Jl. Abdul Hakim, Tj. Sari, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20131</h1>
                                    <p className="leading-relaxed mb-3">Connect with Us</p>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                                <div className="p-4 lg:w-1/3">
                                <div className="h-full">
                                    <div className="flex justify-center">
                                        <img className="object-cover object-center rounded h-64" alt="hero" src="/background.png" />
                                    </div>
                                </div>
                                </div>
                                <div className="p-4 lg:w-1/3">
                                <div className="h-full text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Hours</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Open at 09.00 AM - 11.00 PM</h1>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                </div>


                <div style={{backgroundColor:"#AA8F63"}}>
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
                        <img src="/kefi.png" width={60} height={60}></img>
                    </div>
                    <p className="text-sm text-white-500 sm:ml-6 sm:mt-0 mt-4">© Intership Del 2023 —
                        <Link href="kefi.cafeandspace" rel="noopener noreferrer" className="text-white-600 ml-1" target="_blank">@keficafe</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <div className="text-white-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </div>
                        <div className="ml-3 text-white-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        </div>
                        <div className="ml-3 text-white-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                        </div>
                        <div className="ml-3 text-white-500">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                        </div>
                    </span>
                    </div>
                </div>
            </div>
        </>
    );
}
