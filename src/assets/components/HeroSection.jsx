export const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/hero_background_1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-45"></div>
        <div className="hero-content text-purpleone text-center">
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
            <button className="btn bg-purplefour text-purpleone hover:bg-purpleone hover:text-purplefour border-none">Find Your Cake</button>
          </div>
        </div>
      </div>
      <div
        className="hero max-h-md bg-purplefour"        
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center py-20">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold">
            Celebrate Special Occasions              
            </h1>
            <p className="mb-5 text-sm md:text-md">
            Celebrate your special moments at Sugar and Spice, where our cozy and charming venue sets the perfect backdrop for your gatherings. Whether it’s a birthday, anniversary, or any special occasion, let us help you create sweet memories in a warm and inviting atmosphere.
            </p>
            <div className="flex flex-col md:flex-row gap-4 rounded-md">
                <div className="my-2"><p className="pb-2 font-bold">Anniversary</p><img src="/images/anniversary.png" alt="anniversary_image" className="rounded-md"/></div>
                <div className="my-2"><p className="pb-2 font-bold">Birthdays</p><img src="/images/birthday.png" alt="anniversary_image" className="rounded-md"/></div>
            </div>
            <button className="btn bg-purplefour text-purpleone hover:bg-purpleone hover:text-purplefour border-none my-4">Find Us</button>
          </div>
        </div>
      </div>
      
      
     
    </>
  );
};
