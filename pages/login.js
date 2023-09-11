import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    router.push("/reset-password");
  };

  return (
    <div>
      <section className="bg-[#f6efdf]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
                href={`/`}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your SVG code here */}
                </svg>
              </Link>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                className="mb-16"
                style={{
                  color: "#67442E",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                Welcome back!
              </h1>
              <form
                className="space-y-4 md:space-y-6 mb-6"
                action="/api/login"
                method="post"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan email anda"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Masukkan password anda"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-24"
                    required=""
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-3 py-2 h-full"
                  >
                    {showPassword ? (
                      // Ikon untuk menyembunyikan password
                      <p>
                        🙈
                      </p>

                    ) : (
                      // Ikon untuk melihat password
                      <p>
                        👁️
                      </p>
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  value="Login"
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
                  }}
                >
                  Login
                </button>
                <p
                  className="text-sm font-light text-center text-gray-500 dark:text-gray-400"
                  style={{
                    color: "#000",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  Belum punya akun?{" "}
                  <a
                    href="/registrasi"
                    className="font-medium text-[#67442E] hover:underline dark:text-primary-500"
                  >
                    Registrasi
                  </a>
                </p>
              </form>
              <button
                type="button"
                onClick={handleForgotPasswordClick}
                className="text-sm font-light text-gray-500 dark:text-gray-400 hover:underline"
              >
                <Link href="/reset-password">Lupa Password?</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
