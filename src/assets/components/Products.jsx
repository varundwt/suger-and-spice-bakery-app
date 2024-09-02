import { Link, Outlet } from "react-router-dom";

const productItems = [
  {
    id: 1,
    titleImage: "/images/cakes.jpg",
    title: "Cakes",
    description: "Indulge in layers of delight with every slice.",
    buttonLink: "/products/cakescatagory",
  },
  {
    id: 2,
    titleImage: "/images/pastries.jpg",
    title: "Pastries",
    description: "Flaky, buttery, and baked to perfection.",
    buttonLink: "/products/pastriescatagory",
  },
  {
    id: 3,
    titleImage: "/images/snacks.jpg",
    title: "Snacks",
    description: "Savory bites that satisfy your every craving.",
    buttonLink: "/products/snackscatagory",
  },
  {
    id: 4,
    titleImage: "/images/donuts.jpg",
    title: "Donuts",
    description: "Sweet rings of joy, perfect for any time of day.",
    buttonLink: "/products/donutscatagory",
  },
  {
    id: 5,
    titleImage: "/images/bakery.jpg",
    title: "Bakery",
    description: "Freshly baked wonders, crafted just for you.",
    buttonLink: "/products/bakerycatagory",
  },
  {
    id: 6,
    titleImage: "/images/beverages.jpg",
    title: "Beverages",
    description: "Refresh and recharge with every sip.",
    buttonLink: "/products/beveragescatagory",
  },
];

export const Products = () => {
  return (
    <>
      <div className="font-DM1 p-1 md:p-4 lg:p-10 xl:px-8 bg-three">
        <div
          className="text-xl p-3 rounded-lg md:p-8 md:text-2xl m-1 lg:mx-5 md:mx-7"
          style={{
            backgroundColor: "#481E14",
            color: "#FFFDF4",
          }}
        >
          <h1 className="font-bold tracking-wide py-3 md:py-0 text-purplelight">
            Satisfy Your Cravings, <br /> with Our Delightful Selection!
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-around my-3 md:justify-center md:gap-20 lg:gap-5 lg:mx-0 lg:px-2 md:py-5 lg:py-6">
          {productItems.map((item, i) => (
            <>
              <Link to={item.buttonLink} onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="card glass md:w-72 lg:w-72 lg:mx-0 xl:w-96 m-1 text-four bg-five md:bg-three md:text-five hover:bg-five hover:text-four md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 "
                  key={i}
                >
                  <figure>
                    <img
                      src={item.titleImage}
                      alt="car!"
                      className="p-2 rounded-3xl"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                      <Link to={item.buttonLink}>
                        <button className="btn tracking-wide hover:font-medium font-DM1 hover:bg-five hover:text-four bg-four text-five">
                          See Varieties
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
