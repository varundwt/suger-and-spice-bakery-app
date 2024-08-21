export const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/hero_background_1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">
              Crafting Sweet Moments,
              <br /> One Cake at a Time.
            </h1>
            <p className="mb-5">
              At Sugar and Spice, we craft every cake with love and care to make
              your moments truly special. Our cakes are more than just desserts.
              They are a warm embrace, a celebration of life's sweetest moments.
              Let us be part of your next occasion, bringing joy and delicious
              memories to your table.
            </p>
            <button className="btn btn-primary  hover:bg-amber-600 hover:text-white">Browse Our Delecacies</button>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen bg-black"        
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-4xl">
            <h1 className="mb-5 text-2xl md:text-3xl font-bold">
            Celebrate Special Occasions              
            </h1>
            <p className="mb-5 text-sm md:text-md">
            Celebrate your special moments at Sugar and Spice, where our cozy and charming venue sets the perfect backdrop for your gatherings. Whether it’s a birthday, anniversary, or any special occasion, let us help you create sweet memories in a warm and inviting atmosphere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 rounded-md">
                <div className="my-2"><img src="/images/anniversary.png" alt="anniversary_image" className="rounded-md"/><p className="pt-1">Anniversary</p></div>
                <div className="my-2"><img src="/images/birthday.png" alt="anniversary_image" className="rounded-md"/><p className="pt-1">Birthdays</p></div>
            </div>
          </div>
        </div>
      </div>
      
      
     
    </>
  );
};
