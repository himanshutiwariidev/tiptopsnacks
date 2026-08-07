const imageone = "/assets/whychooseus.png"
const imagetwo = "/assets/whychose.png"
const Whychooseus = () => {
  return (
    <section id="home" className="max-w-5xl mx-auto">
      {/* Desktop Banner */}
      <div>
        <h2 className="text-center font-bold text-3xl md:text-4xl uppercase">Why choose <span className="text-red-700">us</span></h2>
      </div>
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

export default Whychooseus;
