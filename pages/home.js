const Home = () => (
    <main>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img src="/background.png" style={{ objectFit: "cover" }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '24px' }}>
                <a href="/menu" class="relative rounded px-20 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300">
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease"></span>
                    <span class="relative">Order Sekarang</span>
                </a>
                </div>
        </div>


        {/* STORY */}
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Story</h1>
                <p className="mb-8 leading-relaxed">Kefi Coffee And Space is a restaurant located in Medan. This restaurant serves various drinks and rice menus at affordable prices.</p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="/story.png" />
            </div>
            </div>
        </div>

        {/* FOOD */}
        <div className="flex min-h-screen flex-col justify-between p-10" style={{backgroundColor:"#F9F9F9"}}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-6 font-medium text-center text-gray-900">Our Foods</h1>
            <div className="grid gap-4">
            <div style={{ position: 'relative' }}>
                <img className="h-auto max-w-full rounded-lg" src="/makanan4.JPG" alt="" style={{ objectFit: "cover" }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '24px' }}>
                <a href="/menu" class="relative rounded px-20 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300">
                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease"></span>
                    <span class="relative">See Others</span>
                </a>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
                <div>
                <img className="h-auto max-w-full rounded-lg" src="/makanan4.JPG" alt="" />
                </div>
                <div>
                <img className="h-auto max-w-full rounded-lg" src="/makanan2.JPG" alt="" />
                </div>
                <div>
                <img className="h-auto max-w-full rounded-lg" src="/makanan3.JPG" alt="" />
                </div>
                <div>
                <img className="h-auto max-w-full rounded-lg" src="/makanan4.JPG" alt="" />
                </div>
                <div>
                <img className="h-auto max-w-full rounded-lg" src="/makanan2.JPG" alt="" />
                </div>
            </div>
            </div>
        </div>

        {/* MINUMAN */}
        <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Drinks</h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div class="text-gray-600 body-font">

    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div class="flex justify-center">
                    <img class="h-auto w-max-ful mb-10 object-cover object-center rounded" alt="hero" src="/minuman1.JPG" />
                </div>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">Rp.60.000</h2>

            </div>
        </div>

        <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <div class="flex justify-center">
                    <img class="h-auto w-max-ful mb-10 object-cover object-center rounded" alt="hero" src="/minuman2.JPG" />
                </div>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">Rp.60.000</h2>

            </div>
        </div>

        <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <div class="flex justify-center">
                    <img class="h-auto w-max-ful mb-10 object-cover object-center rounded" alt="hero" src="/minuman3.JPG" />
                </div>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                <h2 class="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">Rp.60.000</h2>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>

        {/* PROMO */}
        <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">PROMO</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="minuman.png" />
            <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-flex">
                <a class="text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a class="ml-2 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                </a>
                </span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    </main>
)

export default Home;