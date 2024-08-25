const productItems = [
  {
    id:1,
    titleImage: "/images/cakes.jpg",
    title: "Cakes",
    description : "Indulge in layers of delight with every slice."
  },
  {
    id:2,
    titleImage: "/images/pastries.jpg",
    title: "Pastries",
    description : "Flaky, buttery, and baked to perfection."
  },
  {
    id:3,
    titleImage: "/images/snacks.jpg",
    title: "Snacks",
    description : "Savory bites that satisfy your every craving."
  },
  {
    id:4,
    titleImage: "/images/donuts.jpg",
    title: "Donuts",
    description : "Sweet rings of joy, perfect for any time of day."
  },
  {
    id:5,
    titleImage: "/images/bakery.jpg",
    title: "Bakery",
    description : "Freshly baked wonders, crafted just for you."
  },
  {
    id:6,
    titleImage: "/images/beverages.jpg",
    title: "Beverages",
    description : "Refresh and recharge with every sip."
  }
]

export const Products = () => {
  return (
    <>
      <div className="font-DM1 m-1 md:m-4 lg:m-10 xl:mx-8">
        <div
          className="text-xl p-3 rounded-lg md:p-8 md:text-2xl m-1 lg:mx-5 md:mx-7"
          style={{
            backgroundImage: "url(/images/banner.jpg)",
          }}
        >
          <h1 className="font-bold tracking-wide py-3 md:py-0">
            Satisfy Your Cravings, <br /> with Our Delightful Selection!
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-around my-3 md:justify-center md:gap-20 lg:gap-5 lg:mx-0 lg:px-2 md:py-5 lg:py-6">
        {productItems.map((item, i)=>(
          <>
          <div className="card glass md:w-72 lg:w-72 lg:mx-0 xl:w-96 m-1" key={i}>
            <figure>
              <img
                src={item.titleImage}
                alt="car!"
                className="p-2 rounded-3xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          </>
        ))}
          
        </div>
      </div>
    </>
  );
};
