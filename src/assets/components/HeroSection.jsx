import { Link, Outlet } from "react-router-dom";

export const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen font-DM1"
        style={{
          backgroundImage: "url(/images/hero_background_1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5 tracking-wide text-4xl md:text-5xl font-bold text-purplelight">
              Crafting Sweet Moments,
              <br /> One Cake at a Time.
            </h1>
            <p className="mb-5 tracking-wide text-purplelight">
              At Sugar and Spice, we craft every cake with love and care to make
              your moments truly special. Join us in creating memories that last
              a lifetime.
            </p>
            <Link to="/cakescatagory">
              <button className="btn tracking-wide hover:font-medium font-semibold hover:bg-purpleone hover:text-purplelight bg-purplelight text-purpleone border-none">
                Find Your Cake
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hero max-h-md font-DM1"
        style={{
          backgroundColor: "#000000", opacity:"90%",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center py-20">
          <div className="max-w-md md:max-w-2xl text-purpletwo">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold tracking-wide">
              Celebrate Special Occasions
            </h1>
            <p className="mb-5 text-sm md:text-md tracking-wide">
              Celebrate your special moments at Sugar and Spice, where our cozy
              and charming venue sets the perfect backdrop for your gatherings.
              Whether it’s a birthday, anniversary, or any special occasion, let
              us help you create sweet memories in a warm and inviting
              atmosphere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 rounded-md">
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
              <button className="btn tracking-wide hover:font-medium font-semibold hover:bg-purpleone hover:text-purplelight bg-purplelight text-purpleone border-none my-4">
                Find Our Location
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" px-1 lg:px-20 font-DM1 py-20">
      <h1 className="mb-5 text-3xl md:text-4xl font-bold tracking-wide text-center">
              Gallery
            </h1>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
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
