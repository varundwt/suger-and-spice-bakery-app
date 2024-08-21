export const HeroSection = () => {
  return (
    <>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(/images/hero_background.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md md:max-w-xl">
      <h1 className="mb-5 text-4xl md:text-5xl font-bold">Crafting Sweet Moments,<br/> One Cake at a Time.</h1>
      <p className="mb-5">
      At Sugar and Spice, we craft every cake with love and care to make your moments truly special. Our cakes are more than just desserts. They are a warm embrace, a celebration of life's sweetest moments. Let us be part of your next occasion, bringing joy and delicious memories to your table.
      </p>
      <button className="btn btn-primary">Browse Products</button>
    </div>
  </div>
</div>
    </>
  )
}
