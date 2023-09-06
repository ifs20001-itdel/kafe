import React, { useState, useEffect } from 'react';
import { parseCookies } from 'nookies';

const Profil = () => {
    const { user_token } = parseCookies();
    const { isLoggedIn, user } = JSON.parse(user_token);

    return (
        <div className='container'>
            <div className="mb-6" style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "26px"
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
                        fontSize: "20",
                        fontWeight: "600",
                        lineHeight: "25px"
                    }}
                >Profile</h1>
            </div>
            <div style={{
                margin: "auto 30px",
                marginBottom: "12px"
            }}>
                <div class="max-w-xs">
                    <div class="bg-[#F3E0BF] shadow-xl rounded-lg" style={{
                        padding: "30px 15px",
                        width: "312px",
                        height: "627px"
                    }}>
                        <div class="photo-wrapper p-2" style={{
                            marginBottom: "80px"
                        }}>
                            <img class="w-32 h-32 rounded-full mx-auto" style={{ backgroundColor: "white" }} src="https://cdn1.vectorstock.com/i/1000x1000/54/90/administrator-avatar-icon-vector-32095490.jpg" alt="Profil" />
                        </div>
                        <div class="p-2">
                            {/* <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div> */}
                            <div class="w-full max-w-xs">
                                <div class="">
                                    <div class="mb-4" width="282px">
                                        <p class="block mb-2" style={{
                                            color: "#000",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            lineHeight: "12px"
                                        }}>
                                            Nama
                                        </p>
                                        <p class="w-full py-2 px-3" style={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            lineHeight: "12px",
                                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.50)"
                                        }}>
                                            {user.name}
                                        </p>
                                    </div>

                                </div>
                                <div class="">
                                    <div class="mb-4" width="282px">
                                        <p class="block mb-2" style={{
                                            color: "#000",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            lineHeight: "12px"
                                        }}>
                                            Nomor WhatsApp
                                        </p>
                                        <p class="w-full py-2 px-3" style={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            lineHeight: "12px",
                                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.50)"
                                        }}>
                                            {user.nomorhp}
                                        </p>
                                    </div>

                                </div>
                                <div class="">
                                    <div class="mb-4" width="282px">
                                        <p class="block mb-2" style={{
                                            color: "#000",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            lineHeight: "12px"
                                        }}>
                                            Alamat
                                        </p>
                                        <p class="w-full py-2 px-3" style={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            lineHeight: "12px",
                                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.50)"
                                        }}>
                                            {user.alamat}
                                        </p>
                                    </div>

                                </div>
                                <div class="">
                                    <div class="mb-4" width="282px">
                                        <p class="block mb-2" style={{
                                            color: "#000",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            lineHeight: "12px"
                                        }}>
                                            Role
                                        </p>
                                        <p class="w-full py-2 px-3" style={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            lineHeight: "12px",
                                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.50)"
                                        }}>
                                            {user.role}
                                        </p>
                                    </div>

                                </div>
                                <div class="">
                                    <div class="mb-4" width="282px">
                                        <p class="block mb-2" style={{
                                            color: "#000",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            lineHeight: "12px"
                                        }}>
                                            Password
                                        </p>
                                        <p class="w-full py-2 px-3" style={{
                                            color: "#000",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            lineHeight: "12px",
                                            borderBottom: "0.5px solid rgba(0, 0, 0, 0.50)"
                                        }}>
                                            ********
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profil;
