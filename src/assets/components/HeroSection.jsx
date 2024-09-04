import { Link, Outlet } from "react-router-dom";

export const HeroSection = () => {
  return (
    <>
      <div
        className=" min-h-screen font-DM1 place-items-center grid w-full bg-cover bg-center pt-5 pb-5 md:pt-0 md:pb-0"
        style={{
          backgroundColor: "#F3BA9E",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-xl font-DM1">
            <h1 className="mb-5 tracking-wide text-4xl md:text-5xl font-bold text-five">
              Crafting Sweet Moments,
              <br /> One Cake at a Time.
            </h1>
            <p className="mb-5 tracking-wide text-five">
              At Sugar and Spice, we craft every cake with love and care to make
              your moments truly special. Join us in creating memories that last
              a lifetime.
            </p>
            <Link to="/products/cakescatagory">
              <button
                className="btn tracking-wide hover:font-medium font-DM1 hover:bg-five hover:text-four bg-four text-five"
                onClick={() => window.scrollTo(0, 0)}
              >
                Find Your Cake
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center font-DM1 pt-5 md:p-10 lg:p-32">
        <div className="md:w-2/3 p-4 md:pl-18 text-center">
          <h1 className="mb-5 tracking-wide text-4xl md:text-5xl font-bold text-five  md:text-left">
            Satisfy cravings,
            <br /> find tasty treats.
          </h1>
          <p className="mb-5 tracking-wide  md:text-left text-five md:w-3/4">
            Explore a selection of delicious treats crafted to satisfy every
            craving, from rich indulgences to savory snacks, all made for
            maximum flavor.
          </p>
          <Link to="/products">
            <button
              className="btn tracking-wide hover:font-medium font-DM1 hover:bg-five hover:text-four bg-four text-five border-five md:flex"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore our Delicacies
            </button>
          </Link>
        </div>
        <div className="md:pr-18 m-2">
          <div className="carousel rounded-box md:w-64 ">
            <div className="carousel-item w-full">
              <img
                src="/images/01.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/02.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/03.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/04.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/05.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/06.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero max-h-md font-DM1">
        <div className="hero-overlay bg-base-100"></div>
        <div className="hero-content text-center py-10 ">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="mb-5 tracking-wide text-4xl md:text-5xl font-bold text-five">
              Celebrate Special Occasions
            </h1>
            <p className="mb-5 tracking-wide text-five ">
              Celebrate your special moments at Sugar and Spice, where our cozy
              and charming venue sets the perfect backdrop for your gatherings.
              Whether it’s a birthday, anniversary, or any special occasion, let
              us help you create sweet memories in a warm and inviting
              atmosphere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 rounded-md text-five mb-5">
              <div className="my-2">
                <p className="pb-2 font-bold tracking-wide">Anniversary</p>
                <img
                  src="/images/anniversary.png"
                  alt="anniversary_image"
                  className="rounded-md"
                />
              </div>
              <div className="my-2">
                <p className="pb-2 font-bold tracking-wide">Birthdays</p>
                <img
                  src="/images/birthday.png"
                  alt="anniversary_image"
                  className="rounded-md"
                />
              </div>
            </div>
            <Link
              to="https://maps.app.goo.gl/z5yZ5ma3eR9ydzPPA"
              target="_blank"
            >
              <button className="btn tracking-wide hover:font-medium font-DM1 hover:bg-five hover:text-four bg-four text-five border-five my-4">
                Find Our Location
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-1 pt-0 lg:px-20 font-DM1 py-20 text-five">
        <h1 className="mb-5 text-3xl md:text-4xl font-bold tracking-wide text-center">
          Our Space View
        </h1>
        <p className="mb-5 text-center text-lg md:text-md tracking-wide">
          Explore the design and ambiance of our space through this curated
          collection of images.
        </p>
        <div className="mx-2 md:mx-32 lg:mx-54 xl:mx-72 rounded-lg mt-8">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src="/images/slide_1.jpeg" className="w-full rounded-2xl" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src="/images/slide_2.jpeg" className="w-full rounded-2xl" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="/images/slide_3.jpeg" className="w-full rounded-2xl" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="/images/slide_4.jpeg" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};
