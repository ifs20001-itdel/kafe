import React, { useState, useEffect } from 'react';
import PrivateRoute from '../components/PrivateRoute';
import { parseCookies } from 'nookies';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';



const Status = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState([]);
    const { user_token } = parseCookies();
    const router = useRouter()
    const lokasiAwal = 'KEFI CAFE AND SPACE, KOMPLEK, Jl. Classic II Jl. Abdul Hakim, Tj. Sari, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20131';



    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/orders', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${user_token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setOrders(data.data);
                } else {
                    throw new Error('Failed to fetch orders');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, [user_token]);

    const handleShowOrderDetails = (order) => {
        if (!isOrderDetailsVisible) {
            setSelectedOrder(order);
        } else {
            setSelectedOrder(null);
        }
        setIsOrderDetailsVisible(!isOrderDetailsVisible);
    };

    useEffect(() => {
        // Load selectedStatus dari localStorage saat komponen pertama kali di-mount
        const storedSelectedStatus = localStorage.getItem('selectedStatus');
        if (storedSelectedStatus) {
            setSelectedStatus([storedSelectedStatus]);
        }
    }, []);

    const handleRadioChange = (status) => {
        setSelectedStatus(status);

        // Simpan selectedStatus ke dalam localStorage
        localStorage.setItem('selectedStatus', status);

        // Navigasi ke halaman "HasilStatus"
        router.push('/status');
    };



    return (
        <PrivateRoute>
            <div className="">
                <div style={{ textAlign: "center" }}>
                    <div className="flex flex-wrap justify-center mt-4" style={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: "600"
                    }}>
                        <div
                            className="p-2 mb-12 border-b-2 flex justify items-center"
                            style={{
                                width: "350px",
                                color: "#000",
                                fontSize: "25px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "20px",
                            }}
                        >
                            <p className="mr-auto">
                                Order{" "}
                                <span
                                    style={{
                                        color: "rgba(0, 0, 0, 0.75)",
                                        fontSize: "10px",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        lineHeight: "20px",
                                    }}
                                >
                                </span>
                            </p>
                        </div>
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="flex justify items-center"
                                style={{ width: "350px" }}
                            >
                                <div className='text-gray-600 body-font mb-2'>
                                    <div className='mx-auto'>
                                        <div className='flex items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6' style={{
                                            margin: "auto 25px"
                                        }}>
                                            <div className='flex items-center mb-3' style={{
                                                width: "308px",
                                                height: "103px",
                                                flexShrink: "0",
                                                borderRadius: "10px",
                                                background: "#F6ECD1"
                                            }}>
                                                <img className='ml-3'
                                                    src={order.items[0].image}
                                                    alt="Deskripsi Gambar" style={{
                                                        width: "76.757px",
                                                        height: "79px",
                                                        borderRadius: "10px"
                                                    }} />
                                                <div className='text-start ml-6 flex flex-col justify-items-end'>
                                                    <h1
                                                        className="mb-2" style={{
                                                            color: "#000",
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                            lineHeight: "20px",
                                                        }}>
                                                        {order.items[0].title}
                                                    </h1>
                                                    <div style={{
                                                        color: "rgba(0, 0, 0, 0.75)",
                                                        fontSize: "13px",
                                                        fontWeight: "500",
                                                        lineHeight: "20px"
                                                    }}>
                                                        <button onClick={() => handleShowOrderDetails(order)}>
                                                            {isOrderDetailsVisible ? "Sembunyikan" : "dan lainnya"}
                                                        </button>
                                                        {isOrderDetailsVisible && (
                                                            <div>
                                                                {order.items.map((item, index) => (
                                                                    <p key={index}>
                                                                        Alamat {index + 1}:{" "}
                                                                        <a
                                                                            href={`https://www.google.com/maps/dir/${encodeURIComponent(lokasiAwal)}/${encodeURIComponent(item.lokasi)}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {item.lokasi}
                                                                        </a>
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div>
                    {selectedOrder && isOrderDetailsVisible && (
                        <div className="menu-container rounded" style={{ background: "#F6ECD1", padding: "10px" }}>
                            <div key={selectedOrder._id} className="menu-item container text-center">
                                <div className="menu-item-image">
                                    {selectedOrder.items.map((item, index) => (
                                        <div key={index} className="menu-item-image-container">
                                            <img
                                                src={item.image}
                                                alt={`Deskripsi Gambar ${index}`}
                                                style={{
                                                    width: "200px",
                                                    height: "200px",
                                                    borderRadius: "10px",
                                                    margin: "auto 60px"
                                                }}
                                            />
                                            <h1>{item.title}</h1>
                                            <p className='mb-3'>Price: {item.price}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="menu-item-details">
                                    {selectedOrder.items.map((item, index) => (
                                        <div key={index} className="menu-item-info">
                                        </div>
                                    ))}
                                </div>
                                {isOrderDetailsVisible && (
                                    <div className="menu-item-order-details">
                                        <p>Total: {selectedOrder.total}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>


            </div>
            <div className="space-y-4">
                <label className="flex items-center space-x-2">
                    <input
                        type="radio" // Ubah tipe input menjadi radio
                        name="status" // Berikan nama yang sama untuk semua radio button
                        className="form-radio text-indigo-600"
                        onChange={() => handleRadioChange("Menunggu konfirmasi pesanan")}
                    />
                    <span>Menunggu konfirmasi pesanan</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                        type="radio" // Ubah tipe input menjadi radio
                        name="status" // Berikan nama yang sama untuk semua radio button
                        className="form-radio text-indigo-600"
                        onChange={() => handleRadioChange("Sabar ya, pesanan kamu sedang dibuat")}
                    />
                    <span>Sabar ya, pesanan kamu sedang dibuat</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                        type="radio" // Ubah tipe input menjadi radio
                        name="status" // Berikan nama yang sama untuk semua radio button
                        className="form-radio text-indigo-600"
                        onChange={() => handleRadioChange("Pesanan kamu sedang dalam perjalanan")}
                    />
                    <span>Pesanan kamu sedang dalam perjalanan</span>
                </label>

                <label className="flex items-center space-x-2 mb-4">
                    <input
                        type="radio" // Ubah tipe input menjadi radio
                        name="status" // Berikan nama yang sama untuk semua radio button
                        className="form-radio text-indigo-600"
                        onChange={() => handleRadioChange("Pesanan telah diterima")}
                    />
                    <span>Pesanan telah diterima</span>
                </label>
            </div>

        </PrivateRoute>
    );
};

export default Status;
