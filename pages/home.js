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
    <main>
      <div style={{ width: `100%`, height: `100%`, position: `relative` }}>
        <img src='/background.png' style={{ objectFit: `cover` }} />
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
          <Link
            href='/menu'
            className='order-button relative rounded px-3 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300'
          >
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease'></span>
            <span className='relative'>Order Sekarang</span>
          </Link>
        </div>
      </div>

      {/* STORY */}
      <div className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Our Story
            </h1>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
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
      <div
        className='flex min-h-screen flex-col justify-between p-10'
        style={{ backgroundColor: '#F9F9F9' }}
      >
        <div class='text-center'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
            Our Foods
          </h1>
          <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
          <div class='flex mt-6 mb-6 justify-center'>
            <div class='w-16 h-1 rounded-full bg-yellow-500 inline-flex'></div>
          </div>
        </div>
        <div className='grid gap-4'>
          <div style={{ position: `relative` }}>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/makanan4.JPG'
              alt=''
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                transform: `translate(-50%, -50%)`,
                color: `black`,
                fontSize: `24px`
              }}
            >
              <Link
                href='/menu'
                class='relative rounded px-3 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300'
              >
                <span class='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease'></span>
                <span class='relative'>See Others</span>
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='/makanan4.JPG'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='/makanan2.JPG'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='/makanan3.JPG'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='/makanan4.JPG'
                alt=''
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* MINUMAN */}
      <div class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-10'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Our Drinks
            </h1>
            <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div class='flex mt-6 justify-center'>
              <div class='w-16 h-1 rounded-full bg-yellow-500 inline-flex'></div>
            </div>
          </div>

          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div class='text-gray-600 body-font'>
              <div
                id='minuman'
                class='carousel slide carousel-fade'
                data-bs-ride='carousel'
              >
                <div class='carousel-inner rounded-lg'>
                  <div class='carousel-item active'>
                    <img src='/minuman1.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman2.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman3.JPG' class='d-block w-100' alt='...' />
                  </div>
                </div>
                <button
                  class='carousel-control-prev'
                  type='button'
                  data-bs-target='#minuman'
                  data-bs-slide='prev'
                >
                  <span
                    class='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button
                  class='carousel-control-next'
                  type='button'
                  data-bs-target='#minuman'
                  data-bs-slide='next'
                >
                  <span
                    class='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROMO */}
      <div class='text-gray-600 body-font mb-10'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-10'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
              Promo
            </h1>
            <div class='flex mt-6 justify-center'>
              <div class='w-16 h-1 rounded-full bg-yellow-500 inline-flex'></div>
            </div>
          </div>

          <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
            <div class='text-gray-600 body-font'>
              <div
                id='promo'
                class='carousel slide carousel-fade'
                data-bs-ride='carousel'
              >
                <div class='carousel-inner rounded-lg'>
                  <div class='carousel-item active'>
                    <img src='/minuman1.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman2.JPG' class='d-block w-100' alt='...' />
                  </div>
                  <div class='carousel-item'>
                    <img src='minuman3.JPG' class='d-block w-100' alt='...' />
                  </div>
                </div>
                <button
                  class='carousel-control-prev'
                  type='button'
                  data-bs-target='#promo'
                  data-bs-slide='prev'
                >
                  <span
                    class='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button
                  class='carousel-control-next'
                  type='button'
                  data-bs-target='#promo'
                  data-bs-slide='next'
                >
                  <span
                    class='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span class='visually-hidden'>Next</span>
                </button>
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
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Location
            </h1>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <img
                className='object-cover object-center rounded-xl'
                alt='hero'
                src='/lokasi.png'
              />
            </div>
            <p className='mb-8 leading-relaxed mt-5'>
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
