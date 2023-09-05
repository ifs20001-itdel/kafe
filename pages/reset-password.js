// pages/reset-password.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from 'nookies';

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi email (pastikan email sesuai format yang valid)
        // Validasi password (pastikan password sesuai dan kuat)

        if (password !== confirmPassword) {
            // Password dan konfirmasi password tidak cocok, tampilkan pesan error
            console.error("Password dan konfirmasi password tidak cocok.");
            return;
        }

        try {
            // Lakukan perubahan password di sini (misalnya, kirim permintaan API ke server)
            const response = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                // Setelah berhasil mereset password, perbarui data di penyimpanan data (cookie)
                const userData = {
                    email, // Gunakan email yang baru
                    // Tambahkan data pengguna lainnya jika ada
                };

                setCookie(null, 'user_data', JSON.stringify(userData), {
                    maxAge: 30 * 24 * 60 * 60, // Durasi cookie dalam detik (30 hari)
                    path: '/',
                });

                // Setelah berhasil mereset password, arahkan pengguna ke halaman login
                router.push("/login");
            } else {
                // Tangani error (misalnya, tampilkan pesan error)
                console.error("Gagal mereset password.");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-600">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-600">New Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#67442E] text-white py-2 rounded-md hover:bg-[#AA8F63] transition duration-300"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
