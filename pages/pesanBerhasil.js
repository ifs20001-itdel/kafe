import React from 'react';
import Link from 'next/link';

function pesanBerhasil() {
    return (
        <div className='w-full'
            style={{
                display: "inline-flex",
                height: "800px",
                padding: "0px 25.5px 0px 24.5px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(103, 68, 46, 0.50)"
            }}>
            <div style={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "31px",
                borderRadius: "15px",
                background: "#FFF"
            }}>
                <div style={{
                    color: "#000",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "20px"
                }}>
                    Pesan kamu berhasil
                </div>
                <div className='flex'>
                    <Link style={{
                        textDecoration: "none",
                        color: "#000"
                    }} href="/">
                        <div className='flex justify-center items-center mr-3'
                            style={{
                                width: "117px",
                                padding: "7px 20px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                                background: "#DDCCAE",
                                textDecoration: "none",
                                color: "#000"
                            }}>
                            Beranda
                        </div>
                    </Link>
                    <button className='flex justify-center items-center'
                        style={{
                            width: "117px",
                            padding: "7px 20px",
                            borderRadius: "10px",
                            background: "#DDCCAE"
                        }}>
                        Cek Status
                    </button>
                </div>
            </div>
        </div>
    )
}

export default pesanBerhasil;
