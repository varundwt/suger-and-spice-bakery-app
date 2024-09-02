const cakesType = [
  {
    id: 1,
    cakeTitle: "Choco Chips Cakes",
    address: "",
    cakeImage: "/images/ChocoChipsCakes.jpg",
    description:
      "Savor the irresistible delight of our Choco Chips Cake, where every bite melts with rich chocolatey goodness.",
  },
  {
    id: 2,
    cakeTitle: "Chocolate Cakes",
    address: "",
    cakeImage: "/images/ChocolateCakes.jpg",
    description:
      "Savor the decadence of our rich, velvety chocolate cakes, made with premium cocoa for a deeply satisfying taste in every bite.",
  },
  {
    id: 3,
    cakeTitle: "Cream Cakes",
    address: "",
    cakeImage: "/images/CreamCakes.jpg",
    description:
      "Experience the heavenly taste of our Cream Cakes, with layers of soft sponge and luscious, velvety cream in every bite.",
  },
  {
    id: 4,
    cakeTitle: "Customized Cakes",
    address: "",
    cakeImage: "/images/CustomizedCakes.jpg",
    description:
      "Indulge in the perfect blend of flavor and artistry with our Customized Cakes, tailored to your taste and crafted to make every occasion extraordinary.",
  },
  {
    id: 5,
    cakeTitle: "Fondant Cakes",
    address: "",
    cakeImage: "/images/FondantCakes.jpg",
    description:
      "Delight in the smooth elegance of our Fondant Cake, where every slice reveals a soft, rich cake wrapped in silky, sweet fondant.",
  },
  {
    id: 6,
    cakeTitle: "Fruit Cakes",
    address: "",
    cakeImage: "/images/FruitCakes.jpg",
    description:
      "Enjoy our fruit cake, packed with a medley of juicy fruits and nuts, layered in a moist, flavorful base for a delightful and festive treat.",
  },
  {
    id: 7,
    cakeTitle: "Photo Print Cakes",
    address: "",
    cakeImage: "/images/PhotoprintCakes.jpg",
    description:
      "Celebrate with our Photo Print Cakes, where delectable layers meet your favorite images for a uniquely sweet and personalized treat.",
  },
  {
    id: 8,
    cakeTitle: "Red Velvet Cakes",
    address: "",
    cakeImage: "/images/RedVelvetCakes.jpg",
    description:
      "Savor the elegance of our red velvet cake, with its moist, tender crumb and rich, creamy frosting for a truly delightful treat.",
  },
  {
    id: 9,
    cakeTitle: "Truffle Cakes",
    address: "",
    cakeImage: "/images/TruffleCakes.jpg",
    description:
      "Dive into the rich decadence of our Truffle Cakes, featuring layers of velvety chocolate ganache and a luxurious, melt-in-your-mouth experience.",
  },
];

export const CakesSec = () => {
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
            Indulge in Sweet Elegance, <br /> One Slice at a Time!
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-around my-3 md:justify-center md:gap-20 lg:gap-5 lg:mx-0 lg:px-2 md:py-5 lg:py-6">
          {cakesType.map((item, i) => (
            <div
              className="card glass md:w-72 lg:w-72 lg:mx-0 xl:w-96 m-1 text-four bg-five md:bg-three md:text-five hover:bg-five hover:text-four md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 "
              key={i}
            >
              <figure>
                <img
                  src={item.cakeImage}
                  alt="cake-image"
                  className="p-2 rounded-3xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{item.cakeTitle}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn tracking-wide hover:font-medium font-DM1 hover:bg-five hover:text-four bg-four text-five">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
