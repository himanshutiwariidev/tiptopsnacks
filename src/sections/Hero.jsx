const imageone = "/assets/desktopbanner.jpeg"
const imagetwo = "/assets/mobilebanner.jpeg"
const HeroBanner = () => {
  return (
    <section id="home" className="w-full  bg-[var(--brand-cream-soft)]">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src={imageone}
          alt="Tip Top Snacks"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src={imagetwo}
          alt="Tip Top Snacks"
          className="w-full h-auto object-cover"
        />
      </div>
     
  </section>
  );
};

export default HeroBanner;
