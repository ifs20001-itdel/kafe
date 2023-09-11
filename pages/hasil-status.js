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
                <div className="">
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
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
                            {/* Iterasi dan tampilkan order */}
                            {orders.map((order) => (
                                <div
                                    key={order._id}
                                    className="flex justify items-center mb-6"
                                    style={{
                                        width: "350px",
                                        borderBottom: "2px solid rgba(0, 0, 0, 0.1)"
                                    }}
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
                        <div className="menu-container rounded" style={{ background: "", padding: "10px" }}>
                            {orders.map((order) => (
                                <div key={order._id} className="menu-item container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
                                    <div className="menu-item-header text-2xl font-semibold mb-4">
                                        Menu
                                    </div>
                                    <div className="menu-item-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="menu-item-card bg-gray-100 p-4 rounded-lg shadow-md">
                                                <img
                                                    src={item.image}
                                                    alt={`Deskripsi Gambar ${index}`}
                                                    className="w-full h-40 object-cover rounded-md"
                                                />
                                                <h1 className="text-lg font-semibold mt-2">{item.title}</h1>
                                                <p className="text-gray-600 text-sm">Price: {item.price}</p>
                                                <div className="menu-item-actions mt-2">
                                                    {/* Add buttons for customization or ordering here */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {isOrderDetailsVisible && (
                                        <div className="menu-item-order-details mt-4">
                                            <p className="text-lg font-semibold">Total: {order.total}</p>
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>
                    )}
                </div>
                
                <div className='container mb-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-2'>Order Status</h2>
                    <div className='notification-box bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-md'>
                        <p className='text-lg text-blue-800'>{selectedStatus}</p>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default HasilStatus;
