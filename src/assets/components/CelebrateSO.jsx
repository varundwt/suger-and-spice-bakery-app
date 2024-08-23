export const CelebrateSO = () => {
  return (
    <>
        <div
        className="hero max-h-md font-mono" style={{
          backgroundColor: "#000000",
        }}        
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center py-20">
          <div className="max-w-md md:max-w-2xl text-purpletwo">
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
            <button className="btn bg-purpleone text-purplelight hover:bg-purplelight hover:text-purpleone border-purplelight my-4">Find Our Location</button>
          </div>
        </div>
      </div>
    </>
  )
}
