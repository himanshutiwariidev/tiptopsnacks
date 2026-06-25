import imageone from "../assets/bannerdesktop.webp"
import imagetwo from "../assets/bannermobile.webp"
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
