const pastriesType = [
  {
    id: 1,
    pastriesTitle: "Chocolate",
    pastriesImage: "/images/chocolate.jpg",
    description:
      "Rich and decadent, our Chocolate pastry features a luscious chocolate filling encased in a soft, buttery dough for a classic treat.",
  },
  {
    id: 2,
    pastriesTitle: "Chocolate Truffle",
    pastriesImage: "/images/chocolatetruffle.jpg",
    description:
      "Indulge in our Chocolate Truffle pastry, with its velvety chocolate center and a delicate, flaky exterior that melts in your mouth.",
  },
  {
    id: 3,
    pastriesTitle: "Choco Chips",
    pastriesImage: "/images/chocochips.jpeg",
    description:
      "Enjoy the delightful crunch of Choco Chips pastries, filled with sweet chocolate chips and a soft, golden crust that’s perfect for any chocolate lover.",
  },
  {
    id: 4,
    pastriesTitle: "Chocolate Ganache",
    pastriesImage: "/images/chocolateganache.jpg",
    description:
      "Experience ultimate chocolate bliss with our Chocolate Ganache pastry, overflowing with a smooth, rich ganache and topped with a glossy finish.",
  },
  {
    id: 5,
    pastriesTitle: "Pineapple",
    pastriesImage: "/images/pineapple.jpeg",
    description:
      "Refresh your palate with our Pineapple pastry, featuring a tangy, tropical pineapple filling nestled in a light, airy dough.",
  },
  {
    id: 6,
    pastriesTitle: "Butterscotch",
    pastriesImage: "/images/butterscotch.jpg",
    description:
      "Treat yourself to our Butterscotch pastry, blending buttery, caramelized flavors with a tender, flaky pastry that’s simply irresistible.",
  },
  {
    id: 7,
    pastriesTitle: "Red Velvet",
    pastriesImage: "/images/redvelvet.jpg",
    description:
      "Delight in our Red Velvet pastry, with its rich cocoa flavor and cream cheese filling, all enveloped in a beautifully soft and velvety dough.",
  },
  {
    id: 8,
    pastriesTitle: "Black Currant",
    pastriesImage: "/images/blackcurrant.jpg",
    description:
      "Enjoy the vibrant taste of Black Currant pastry, combining tangy black currant filling with a soft, buttery texture for a unique and flavorful treat.",
  },
  {
    id: 9,
    pastriesTitle: "Green Apple",
    pastriesImage: "/images/greenapple.jpg",
    description:
      "Crisp and refreshing, our Green Apple pastry features a zesty apple filling with hints of cinnamon, all wrapped in a flaky, golden crust.",
  },
  {
    id: 10,
    pastriesTitle: "Strawberry",
    pastriesImage: "/images/strawberry.jpg",
    description:
      "Indulge in our Strawberry pastry, filled with sweet and juicy strawberry compote and wrapped in a light, flaky pastry for a burst of fruity flavor.",
  },
  {
    id: 11,
    pastriesTitle: "Vanilla",
    pastriesImage: "/images/vanilla.jpg",
    description:
      "Savor the simple elegance of our Vanilla pastry, with its smooth vanilla cream filling and a tender, buttery exterior that’s pure comfort.",
  },
  {
    id: 12,
    pastriesTitle: "Fresh Fruit",
    pastriesImage: "/images/TruffleCakes.jpg",
    description:
      "Enjoy our Fresh Fruit pastry, bursting with a medley of seasonal fruits encased in a soft, flaky dough for a delightful, fruity experience.",
  },
];

export const PastriesSec = () => {
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
          {pastriesType.map((item, i) => (
            <div
              className="card glass md:w-72 lg:w-72 lg:mx-0 xl:w-96 m-1 text-four bg-five md:bg-three md:text-five hover:bg-five hover:text-four md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-300 "
              key={i}
            >
              <figure>
                <img
                  src={item.pastriesImage}
                  alt="pastry-image"
                  className="p-2 rounded-3xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{item.pastriesTitle}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
