import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from 'nookies';

export default function ResetPassword() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        nomorhp: "",
        alamat: "",
        role: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Ambil data pengguna dari cookie jika tersedia
        const cookies = parseCookies();
        const savedUserData = cookies.user_data ? JSON.parse(cookies.user_data) : null;

        if (savedUserData) {
            // Jika data pengguna tersedia, gunakan sebagai nilai awal
            setUserData(savedUserData);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { password, confirmPassword } = userData;

        if (password !== confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok.");
            return;
        }

        try {
            // Kirim data pengguna yang diubah ke server
            const response = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Setelah berhasil mereset password, perbarui data di penyimpanan data (cookie)
                const userDataToStore = {
                    email: userData.email, // Gunakan email yang baru
                    name: userData.name,
                    nomorhp: userData.nomorhp,
                    alamat: userData.alamat,
                    role: userData.role,
                    // Tambahkan data pengguna lainnya jika ada
                };

                setCookie(null, 'user_data', JSON.stringify(userDataToStore), {
                    maxAge: 30 * 24 * 60 * 60, // Durasi cookie dalam detik (30 hari)
                    path: '/',
                });

                // Setelah berhasil mereset password, arahkan pengguna ke halaman login
                router.push("/login");
            } else {
                console.error("Gagal mereset password.");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-600">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={userData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        {/* Lanjutkan dengan elemen input lainnya dengan cara yang sama */}
                        <div>
                            <label htmlFor="name" className="block text-gray-600">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={userData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="alamat" className="block text-gray-600">Alamat:</label>
                            <input
                                type="text"
                                id="alamat"
                                name="alamat"
                                defaultValue={userData.alamat}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="nomorhp" className="block text-gray-600">Nomor HP:</label>
                            <input
                                type="text"
                                id="nomorhp"
                                name="nomorhp"
                                defaultValue={userData.nomorhp}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-600">New Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    defaultValue={userData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <span
                                    className="absolute top-2 right-2 cursor-pointer"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    defaultValue={userData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <span
                                    className="absolute top-2 right-2 cursor-pointer"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#67442E] text-white py-2 rounded-md hover:bg-[#AA8F63] transition duration-300"
                        >
                            Edit Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
