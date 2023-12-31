import React, { useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ keranjangs }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const calculatedTotalPrice = selectedItems.reduce(
      (total, keranjang) => total + keranjang.price,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [selectedItems]);

  const handleAddToCart = async () => {
    try {
      // Add code to send selected items to the server and update the order
      console.log("Selected Items:", selectedItems);
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const handleCheckboxChange = (keranjang) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(keranjang)
        ? prevSelected.filter((item) => item !== keranjang)
        : [...prevSelected, keranjang]
    );
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
            className="p-4 border-b-2 flex justify items-center"
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
              className="p-4 border-b-2 flex justify items-center"
              style={{ width: "350px" }}
            >
              <div className="flex flex-row justify-between w-full">
                <div className="text-left">
                  <label className="cursor-pointer">
                    <Link style={{
                      textDecoration: "none",
                      color: "#000"
                    }} href={`/${keranjang._id}`}>
                      <span className="text-black font-semibold text-sm">
                        {keranjang.title}
                      </span>
                    </Link>
                  </label>
                </div>
                <div className="text-right">
                  <span className="mr-1">+</span>
                  <span className="text-gray-700 font-medium text-sm" style={{
                    fontWeight: "600",
                    color: "#000",
                    fontSize: "13px"
                  }}>
                    Rp. {keranjang.price}
                  </span>
                  <input
                    className="ml-2"
                    type="checkbox"
                    checked={selectedItems.includes(keranjang)}
                    onChange={() => handleCheckboxChange(keranjang)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            style={{
              borderRadius: "27px",
              background: "#F3E0BF",
              padding: "15px 20px",
              gap: "10px",
              color: "#67442E"
            }}
          >
            Tambah Order
            <span className="bg-[#67442E]"
              style={{
                borderRadius: "23px",
                background: "#67442E",
                color: "#F3E0BF",
                padding: "10px 20px",
                gap: "10px",
                marginLeft: "30px"
              }}>
              {totalPrice}
            </span>
          </button>
        </div>
      </div>
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
