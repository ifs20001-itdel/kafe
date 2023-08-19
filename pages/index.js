import Link from 'next/link'
import { Button } from 'semantic-ui-react'

const Home = () => {
  const openMaps = () => {
    const width = 600
    const height = 600
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    const options = `width=${width},height=${height},top=${top},left=${left}`

    window.open('https://goo.gl/maps/C5y8Qym7WoCpMKeB8', 'Google Maps', options)
  }
  return (
    <main className='bg-[#fff]'>
      <div style={{ position: `relative` }}>
        <img src='/background.png' className='h-screen' style={{
          objectFit: `cover`,
          width: `100%`

        }} />
        <div
          style={{
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            color: `black`,
            fontSize: `20px`
          }}
        >
          <p style={{
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            fontSize: "27px",
            fontStyle: "normal",
            fontWeight: "400px",
            lineHeight: "normal",
            fontFamily: "Quicksand",

          }}>
            Yuk,
            Recharge Energimu &
            Rasakan Keajaiban
            KEFI Cafe & Space
          </p>

          <Link
            href={`/menu`}
            className='order-button relative px-3 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300'
            style={{
              borderRadius: "20px",
              textDecoration:"none",
              color:"#000"
            }}
          >
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease'></span>
            <span className='relative'>Order Sekarang</span>
          </Link>
        </div>
      </div>

      {/* STORY */}
      <div className='text-gray-600 body-font'>
        <div className='container text-center mt-16 mb-16'>
          <div className='lg:flex-grow md:items-start md:text-left mb-16 items-center text-center'>
            <h1 className='title-font text-3xl mb-4 font-medium text-gray-900'>
              Our Story
            </h1>
          </div>
          <div className='m-auto'>
            <img
              className='object-cover object-center rounded mb-'
              alt='hero'
              src='/story.png'
            />
          </div>
          <p className='mt-8 leading-relaxed'>
            Kefi Coffe And Space merupakan sebuah tempat makan yang berada di
            Medan. Rumah makan ini menyajikan berbagai menu minuman & aneka nasi
            yang dibanderol dengan harga yang murah dan bersahabat dengan
            kantong Anda.
          </p>
        </div>
      </div>

      {/* FOOD */}
      <div class='text-gray-600 body-font pb-12 bg-[#F9F9F9]'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Our Foods
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
                  <Link style={{
                      textDecoration:"none",
                      color:"#A5895E"
                    }} href="/makanan">
                    See others
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='flex mt-6 mb-6 justify-center'>
            <div class='w-16 h-1 rounded-full bg-[#A5895E] inline-flex'></div>
          </div>
          <div class="flex flex-col m-auto p-auto">
            <div
              class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
              <div
                class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan2.JPG' class="w-full h-full" />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan3.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan4.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/makanan5.JPG' class="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MINUMAN */}
      <div class='text-gray-600 body-font pb-12 bg-[#F9F9F9]'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='flex items-center justify-between' style={{
            width: "314px",
            height: "47px",
          }}>
            <p class='' style={{
              color: "#000",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal"
            }}>
              Our Drinks
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
                  <Link style={{
                      textDecoration:"none",
                      color:"#A5895E"
                    }} href="/minuman">
                    See others
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class='flex mt-6 mb-6 justify-center'>
            <div class='w-16 h-1 rounded-full bg-[#A5895E] inline-flex'></div>
          </div>
          <div class="flex flex-col m-auto p-auto">
            <div
              class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >
              <div
                class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman1.JPG' class="w-full h-full" />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman2.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman3.JPG' class="w-full h-full" />

                  </div>
                </div>
                <div class="inline-block px-3">
                  <div
                    class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <img src='/minuman.png' class="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROMO */}
      <div class='text-gray-600 body-font mb-10'>
        <div class='container py-10 mx-auto'>
          <div class='text-center mb-10 px-3'>
            <div class='flex items-center justify-between' style={{
              width: "314px",
              height: "47px",
            }}>
              <p class='' style={{
                color: "#000",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal"
              }}>
                Promo
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
                    <Link style={{
                      textDecoration:"none",
                      color:"#A5895E"
                    }} href="/promo">
                      See others
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='flex items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6' style={{
            margin: "auto 25px"
          }}>
            <div class='flex items-center mb-4' style={{
              width: "308px",
              height: "103px",
              flexShrink: "0",
              borderRadius: "10px",
              background: "#F6ECD1"
            }}>

              <img class='ml-3'
                src="https://s3-alpha-sig.figma.com/img/2137/baaf/6216d4f413ae5c613992c0dc521567ed?Expires=1692576000&Signature=SHFRPQEa8ZY-pcwlDT2K7HpST1qvlgEKs86hjSPCpj0CrEqsNUBCH2R1TXlN~cWroSpPBiGBaDL3QGRJ~PLPoAkRDXZo-nkjCod~wxxHBH~HcaqKNZ7JV0hhcP68QHSsefbBj8LcQKY4MmqFMAghO87qD-1lXvYeNP7fwY0BQcYSjxCYIV1hj~tWymxeGHCOgb8mdEy1C9NupZk--uk~Yj7~B8xmIv6lG-A6J10jOmkrXikc3eGo9T8XdVBrmU1-FlN2duNtkX0tahO1-FzKqivwQIjWXdSM2UdLpKS0bpaJl1nc6YjbPu83cc0V9u7EP0AFozfTSTBnPXOrejSxLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Deskripsi Gambar" style={{
                  width: "76.757px",
                  height: "79px",
                  borderRadius: "10px"
                }} />

              <div class='flex items-center flex-wrap ml-6'>
                <p style={{
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "20px"
                }}>
                  Buy one get one free
                </p>
                <div style={{
                  color: "rgba(0, 0, 0, 0.75)",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "20px"
                }}>
                  <p class='mt-2 mb-2'>
                    14-19 Februari 2023
                  </p>
                  <p>
                    Syarat dan ketentuan berlaku
                  </p>
                </div>
              </div>
            </div>

            <div class='flex items-center' style={{
              width: "308px",
              height: "103px",
              flexShrink: "0",
              borderRadius: "10px",
              background: "#F6ECD1"
            }}>

              <img class='ml-3'
                src="https://s3-alpha-sig.figma.com/img/2137/baaf/6216d4f413ae5c613992c0dc521567ed?Expires=1692576000&Signature=SHFRPQEa8ZY-pcwlDT2K7HpST1qvlgEKs86hjSPCpj0CrEqsNUBCH2R1TXlN~cWroSpPBiGBaDL3QGRJ~PLPoAkRDXZo-nkjCod~wxxHBH~HcaqKNZ7JV0hhcP68QHSsefbBj8LcQKY4MmqFMAghO87qD-1lXvYeNP7fwY0BQcYSjxCYIV1hj~tWymxeGHCOgb8mdEy1C9NupZk--uk~Yj7~B8xmIv6lG-A6J10jOmkrXikc3eGo9T8XdVBrmU1-FlN2duNtkX0tahO1-FzKqivwQIjWXdSM2UdLpKS0bpaJl1nc6YjbPu83cc0V9u7EP0AFozfTSTBnPXOrejSxLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Deskripsi Gambar" style={{
                  width: "76.757px",
                  height: "79px",
                  borderRadius: "10px"
                }} />

              <div class='flex items-center flex-wrap ml-6'>
                <p style={{
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "20px"
                }}>
                  Buy one get one free
                </p>
                <div style={{
                  color: "rgba(0, 0, 0, 0.75)",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "20px"
                }}>
                  <p class='mt-2 mb-2'>
                    14-19 Februari 2023
                  </p>
                  <p>
                    Syarat dan ketentuan berlaku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONI */}
      <div className='text-gray-600 body-font'>
        {/* <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Story</h1>
                <p className="mb-8 leading-relaxed">Kefi Coffee And Space is a restaurant located in Medan. This restaurant serves various drinks and rice menus at affordable prices.</p>
            </div> */}
        <div className='w-full'>
          <img className='w-full' alt='testimoni' src='/Testimonials.png' />
        </div>
        {/* </div> */}
      </div>

      {/* Location */}
      <div className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 flex-col items-center'>
          <div className='flex flex-col mb-16 items-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-900'>
              Location
            </h1>
            <div className='w-5/6'>
              <img
                className='object-cover object-center rounded-xl'
                alt='hero'
                src='/lokasi.png'
              />
            </div>
            <p className='mb-8 leading-relaxed mt-5 text-center'>
              KOMPLEK, Jl. Classic II Jl. Abdul Hakim, Tj. Sari, Kec. Medan
              Selayang, Kota Medan, Sumatera Utara 20131
            </p>
            <p className='mb-8 leading-relaxed'>Open at 09.00 AM - 11.00 PM</p>
          </div>
          <Button
            style={{ backgroundColor: '#DDCCAE', color: '#67442E' }}
            onClick={openMaps}
          >
            Open Maps
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Home
