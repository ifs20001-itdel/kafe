import React, { useEffect, useState } from 'react';
import PrivateRoute from '../components/PrivateRoute';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';

const HasilStatus = () => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
    const { user_token } = parseCookies();
    const router = useRouter()

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
        // Mengambil selectedStatus dari localStorage
        const storedStatus = localStorage.getItem('selectedStatus');
        if (storedStatus) {
            setSelectedStatus(storedStatus);
        }
    }, []);

    return (
        <PrivateRoute>
            <div>
                <div className="p-4">
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <div className="flex flex-wrap justify-center mt-4" style={{
                            color: "#000",
                            fontSize: "13px",
                            fontWeight: "600"
                        }}>
                            <div
                                className="p-4 mb-12 border-b-2 flex justify items-center"
                                style={{
                                    width: "350px",
                                    color: "#000",
                                    fontSize: "13px",
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
                            {/* Iterasi dan tampilkan order */}
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
                    {selectedOrder && isOrderDetailsVisible && (
                        <div className="menu-container rounded" style={{ background: "#F6ECD1", padding: "10px" }}>
                            {orders.map((order) => (
                                <div key={order._id} className="menu-item container text-center">
                                    <div className="menu-item-image">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="menu-item-image-container">
                                                <img
                                                    src={item.image}
                                                    alt={`Deskripsi Gambar ${index}`}
                                                    style={{
                                                        width: "200px", height: "200px", borderRadius: "10px",
                                                        margin: "auto 60px"
                                                    }}
                                                />
                                                <h1>{item.title}</h1>
                                                <p className='mb-3'>Price: {item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="menu-item-details">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="menu-item-info">
                                            </div>
                                        ))}
                                    </div>
                                    {isOrderDetailsVisible && (
                                        <div className="menu-item-order-details">
                                            <p>Total: {order.total}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='container mb-3'>
                    <h2>Status Pemesanan</h2>
                    <p>{selectedStatus}</p>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default HasilStatus;
