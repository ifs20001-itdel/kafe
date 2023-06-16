import Link from "next/link";

const Home = () => (
  <main>
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img src="/background.png" style={{ objectFit: "cover" }} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          fontSize: "24px"
        }}
      >
        <Link href="/menu">
          <div className="relative rounded px-20 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease"></span>
            <span className="relative">Order Sekarang</span>
          </div>
        </Link>
      </div>
    </div>

    {/* STORY */}
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Story</h1>
          <p className="mb-8 leading-relaxed">
            Kefi Coffee And Space is a restaurant located in Medan. This restaurant serves various drinks and rice menus at affordable prices.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          <img className="object-cover object-center rounded" alt="hero" src="/story.png" />
        </div>
      </div>
    </div>

    {/* FOOD */}
    <div className="flex min-h-screen flex-col justify-between p-10" style={{ backgroundColor: "#F9F9F9" }}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 pb-6 font-medium text-center text-gray-900">Our Foods</h1>
      <div className="grid gap-4">
        <div style={{ position: "relative" }}>
          <img className="h-auto max-w-full rounded-lg" src="/makanan4.JPG" alt="" style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "black",
              fontSize: "24px"
            }}
          >
            <Link href="/">
              <div className="relative rounded px-20 py-2.5 overflow-hidden group bg-yellow-50 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-amber-950 hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-20 group-hover:-translate-x-80 ease"></span>
                <span className="relative">See More</span>
              </div>
            </Link>
          </div>
        </div>
        <img className="h-auto max-w-full rounded-lg" src="/makanan2.JPG" alt="" style={{ objectFit: "cover" }} />
        <img className="h-auto max-w-full rounded-lg" src="/makanan3.JPG" alt="" style={{ objectFit: "cover" }} />
        <img className="h-auto max-w-full rounded-lg" src="/makanan1.JPG" alt="" style={{ objectFit: "cover" }} />
      </div>
    </div>

    {/* DRINKS */}
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Drinks</h1>
          <p className="lg:w-1/2 w-full leading-relaxed">
            We offer a wide selection of drinks to quench your thirst. From refreshing iced coffees to flavorful teas, we have something for everyone.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="/drink1.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">COFFEE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Iced Cappuccino</h2>
              <p className="leading-relaxed text-base">A classic blend of espresso, milk, and froth, served over ice for a refreshing coffee experience.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="/drink2.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">TEA</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Jasmine Green Tea</h2>
              <p className="leading-relaxed text-base">A fragrant and refreshing green tea infused with jasmine blossoms, perfect for relaxation.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="/drink3.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SMOOTHIE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mango Delight</h2>
              <p className="leading-relaxed text-base">A tropical blend of fresh mangoes, yogurt, and a hint of honey, perfect for a fruity treat.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="/drink4.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SODA</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Sparkling Lemonade</h2>
              <p className="leading-relaxed text-base">A fizzy and refreshing lemonade with a twist of sparkling water, perfect for hot summer days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
