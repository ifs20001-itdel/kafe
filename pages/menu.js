import Link from 'next/link'
import React from 'react'

function menu() {
  return (
    <div>
        <nav class="w-full rounded-md p-3">
            <ol class="list-reset flex">
                <li>
                <Link
                    href="/home"
                    >Homepage</Link>
                </li>
                <li>
                <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                </li>
                <li class="text-neutral-500 dark:text-neutral-400 text-[#67442E]">Menu</li>
            </ol>
            </nav>
            <h1 class="tracking-widest sm:text-3xl text-2xl font-medium title-font p-3">
                Pilih menu favorit kamu
            </h1>
        {/* MAKANAN */}
        <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10 d-flex">
        <h1 class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">Foods</h1>
        <Link href="#">
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-[#67442E]">Menu lainnya</p>
        </Link>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="text-gray-600 body-font">

        <div id="makanan" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner rounded-lg">
    <div class="carousel-item active">
      <img src="makanan4.JPG" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="makanan2.JPG" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="makanan3.JPG" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#makanan" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#makanan" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    </div>
        </div>

                {/* MINUMAN */}
                <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10 d-flex">
        <h1 class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">Drinks</h1>
        <Link href="/">
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-[#67442E]">Menu lainnya</p>
        </Link>        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="text-gray-600 body-font">

        <div id="minuman" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner rounded-lg">
    <div class="carousel-item active">
      <img src="/minuman1.JPG" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="minuman2.JPG" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="minuman3.JPG" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#minuman" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#minuman" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    </div>
        </div>


    </div>
  )
}

export default menu