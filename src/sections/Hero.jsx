const imageone = "/assets/desktopbanner.webp"
const imagetwo = "/assets/mobilebanner.webp"
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
      <h1 className="text-xl  md:text-4xl font-bold text-center mt-4 md:mt-8">A Journey of Trust & Quality — Delhi's Leading Snacks Manufacturer
</h1>
  </section>
  );
};

export default HeroBanner;
