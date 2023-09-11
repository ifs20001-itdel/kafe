import React, { useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ keranjangs }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [orders, setOrders] = useState([]); // Track orders separately
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);


  // Tambahkan state untuk modal pembayaran
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };


  useEffect(() => {
    const calculatedTotalPrice = selectedItems.reduce(
      (total, keranjang) => total + keranjang.price,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [selectedItems]);

  const handleOrder = async () => {
    try {
      // Check if any item in keranjang has a null title
      const hasNullTitleInKeranjang = selectedItems.some((keranjang) => keranjang.title === null);
      console.log('Has null title in keranjang:', hasNullTitleInKeranjang); // Debugging

      // Check if selectedItems is empty or if it contains items with null titles
      if (selectedItems.length === 0 || hasNullTitleInKeranjang) {
        alert("Pesanan gagal: Data tidak lengkap");
        return;
      }

      const orderData = selectedItems.map((keranjang) => ({
        title: keranjang.title || "Unknown Title", // Provide a default title if it's null
        price: keranjang.price,
        image: keranjang.image,
      }));

      console.log('Order Data:', orderData); // Debugging

      // Send the entire orderData array to the server
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Clear selected items after successful order
        setSelectedItems([]);

        // Clear the cart items from the database
        for (const keranjang of selectedItems) {
          await fetch(`http://localhost:3000/api/keranjangs/${keranjang._id}`, {
            method: "DELETE",
          });
        }
        setShowConfirmationModal(true);

        // Show alert and refresh page on OK
        const isConfirmed = window.confirm("Pesanan kamu berhasil 😊");
        if (isConfirmed) {
          window.location.reload();
        }
      } else {
        alert("Pesanan kamu gagal, silahkan coba lagi 😔");
      }
    } catch (error) {
      console.log("Error placing order:", error);
    }
    setShowPaymentModal(true);
  };






  const handleCheckboxChange = (keranjang) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(keranjang)
        ? prevSelected.filter((item) => item !== keranjang)
        : [...prevSelected, keranjang]
    );
  };

  const handleDelete = async (keranjang) => {
    try {
      // Konfirmasi sebelum penghapusan
      const isConfirmed = window.confirm("Apakah kamu yakin ingin menghapus?");

      if (!isConfirmed) {
        return; // Jika tidak dikonfirmasi, berhenti di sini
      }

      // Kirim permintaan DELETE ke server untuk menghapus item dari keranjang
      const res = await fetch(`http://localhost:3000/api/keranjangs/${keranjang._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Perbarui selectedItems dengan menghapus item yang dihapus
        setSelectedItems((prevSelected) =>
          prevSelected.filter((item) => item !== keranjang)
        );

        // Refresh the page after successful deletion
        window.location.reload();
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };




  return (
    <div>

      <div className="mt-4" style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginLeft: "24px",
        marginTop: "23px"
      }}>
        <Link style={{
          textDecoration: "none",
          color: "#000"
        }} href={`/menu`}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.87646" y="39.9688" width="38.0927" height="38.0927" rx="18.7628" transform="rotate(-90 1.87646 39.9688)" fill="#DDCCAE" />
            <path d="M26.8747 11.3995C26.8756 11.5562 26.8456 11.7115 26.7864 11.8565C26.7271 12.0015 26.6398 12.1335 26.5295 12.2447L17.8396 20.9227L26.5295 29.6007C26.7537 29.8248 26.8796 30.1288 26.8796 30.4458C26.8796 30.7629 26.7537 31.0669 26.5295 31.291C26.3054 31.5152 26.0013 31.6411 25.6843 31.6411C25.3673 31.6411 25.0633 31.5152 24.8392 31.291L15.316 21.7679C15.2044 21.6572 15.1159 21.5255 15.0554 21.3805C14.995 21.2354 14.9639 21.0798 14.9639 20.9227C14.9639 20.7655 14.995 20.6099 15.0554 20.4649C15.1159 20.3198 15.2044 20.1882 15.316 20.0775L24.8392 10.5543C24.9498 10.4428 25.0815 10.3542 25.2265 10.2938C25.3716 10.2333 25.5272 10.2022 25.6843 10.2022C25.8415 10.2022 25.9971 10.2333 26.1421 10.2938C26.2872 10.3542 26.4188 10.4428 26.5295 10.5543C26.6398 10.6656 26.7271 10.7975 26.7864 10.9425C26.8456 11.0875 26.8756 11.2428 26.8747 11.3995Z" fill="#67442E" />
          </svg>
        </Link>
        <h1
          style={{
            color: "#000",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "25px",
            marginLeft: "15px"
          }}
        >This is your Order </h1>
      </div>

      <nav className="w-full rounded-md p-3" style={{
        color: "rgba(0, 0, 0, 0.75)",
        textAlign: "center",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "15px",
        letterSpacing: "0.26px",
      }}>
      </nav>
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
              Keranjang{" "}
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.75)",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                {/* . optional */}
              </span>
            </p>
          </div>
          {keranjangs.map((keranjang) => (
            <div
              key={keranjang._id}
              className="flex justify items-center"
              style={{ width: "350px" }}
            >
              <div class='text-gray-600 body-font mb-2'>
                <div class='mx-auto'>
                  <div class='flex items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6' style={{
                    margin: "auto 25px"
                  }}>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleDelete(keranjang)}
                      style={{ border: "none", background: "none", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                    <div class='flex items-center mb-3' style={{
                      width: "308px",
                      height: "103px",
                      flexShrink: "0",
                      borderRadius: "10px",
                      background: "#F6ECD1"
                    }}>

                      <img class='ml-3'
                        src={keranjang.image} alt="Deskripsi Gambar" style={{
                          width: "76.757px",
                          height: "79px",
                          borderRadius: "10px"
                        }} />
                      <input
                        className="ml-2"
                        type="checkbox"
                        checked={selectedItems.includes(keranjang)}
                        onChange={() => handleCheckboxChange(keranjang)}
                        style={{ opacity: 0 }}
                      />

                      <div class='text-start ml-6 flex flex-col justify-items-end'>
                        <h1
                          className="mb-2" style={{
                            color: "#000",
                            fontSize: "15px",
                            fontWeight: "500",
                            lineHeight: "20px",
                          }}>
                          {keranjang.title}
                          <input
                            className="ml-2"
                            type="checkbox"
                            checked={selectedItems.includes(keranjang)}
                            onChange={() => handleCheckboxChange(keranjang)}
                            style={{ opacity: 0 }}
                          />
                        </h1>
                        <div style={{
                          color: "rgba(0, 0, 0, 0.75)",
                          fontSize: "13px",
                          fontWeight: "500",
                          lineHeight: "20px"
                        }}>

                          <p>
                            {keranjang.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="">

          </div>
        </div>
        <div className="mt-2 flex items-center border-t-2 justify-center">
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Sub Total
            </p>
            <div style={{ position: `relative` }}>
              <div class='text-center '>
                <div style={{
                  color: "#A5895E",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal"
                }}>
                  {totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Total
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
                  {totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => setShowPaymentModal(true)} // Tampilkan modal saat tombol diklik
        style={{
          borderRadius: "15px",
          background: "#DDCCAE",
          display: "flex",
          width: "308px",
          height: "54px",
          padding: "8px 20px",
          justifyContent: "center",
          alignItems: "center",
          gap: "-5px",
          fontSize: "20px",
          fontWeight: "500px",
          margin: "40px auto"
        }}
      >
        Buat Pesanan
      </button>

      {showPaymentModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg">
            <div className="p-4">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPaymentModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {selectedPaymentMethod ? (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    QR Code {selectedPaymentMethod}
                  </h2>
                  <h1 className="text-2xl font-bold">
                    Total : Rp.{totalPrice}
                  </h1>
                  {selectedPaymentMethod === "Dana" && (
                    <img
                      src="https://w7.pngwing.com/pngs/289/293/png-transparent-qr-code-business-cards-barcode-coupon-test-box-angle-text-rectangle.png"
                      alt="Dana QR Code"
                      width="200"
                      height="200"
                      className="mx-auto mt-4"
                    />
                  )}
                  {selectedPaymentMethod === "Ovo" && (
                    <img
                      src="https://w7.pngwing.com/pngs/289/293/png-transparent-qr-code-business-cards-barcode-coupon-test-box-angle-text-rectangle.png"
                      alt="Ovo QR Code"
                      width="200"
                      height="200"
                      className="mx-auto mt-4"
                    />
                  )}
                  <button
                    className="bg-[#A5895E] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
                    onClick={() => {
                      handleOrder();
                    }}
                  >
                    Konfirmasi Pembayaran
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold mb-6">Pilih Metode Pembayaran</h2>
                  <div className="flex justify-center space-x-4 mb-6">
                    <div
                      className="payment-option cursor-pointer"
                      onClick={() => handlePaymentMethodSelection("Dana")}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png"
                        alt="Dana"
                        className="w-32 h-16"
                      />
                    </div>
                    <div
                      className="payment-option cursor-pointer"
                      onClick={() => handlePaymentMethodSelection("Ovo")}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                        alt="Ovo"
                        className="w-32 h-16"
                      />
                    </div>
                    {/* Tambahkan lebih banyak pilihan pembayaran jika diperlukan */}
                  </div>
                  <button
                    className="bg-[#A5895E] text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 mt-6"
                    onClick={() => {
                      // Tambahkan logika konfirmasi pembayaran di sini
                    }}
                  >
                    Konfirmasi Pembayaran
                  </button>
                </div>
              )}
              {/* Tombol Cancel di sini */}
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-4 hover:bg-gray-400"
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

Index.getInitialProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/keranjangs");
    const { data } = await res.json();
    return { keranjangs: data };
  } catch (error) {
    console.log(error);
    return { keranjangs: [] };
  }
};

export default Index;

