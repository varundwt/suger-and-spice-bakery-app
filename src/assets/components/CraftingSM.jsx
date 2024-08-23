export const CraftingSM = () => {
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
              your moments truly special. Join us in creating memories that last a lifetime.
            </p>
            <button className="btn tracking-wide font-medium hover:font-semibold bg-purpleone text-purplelight hover:bg-purplelight hover:text-purpleone border-none">Find Your Cake</button>
          </div>
        </div>
      </div>
    </>
  )
}
