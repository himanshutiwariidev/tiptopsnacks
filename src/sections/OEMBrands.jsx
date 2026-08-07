const haldiram = "/assets/Haldiram Logo.png";
const bikanervala = "/assets/Bikarnervala Logo.png";
const diamond = "/assets/Diamond Logo.png";
const twentyFourSeven = "/assets/24 Seven Logo.png";
const bikaji = "/assets/Bika ji Logo.png";
const babaji = "/assets/babaji.png";

const brands = [
  {
    name: "Haldiram",
    logo: haldiram,
  },
  {
    name: "Bikanervala",
    logo: bikanervala,
  },
  {
    name: "Yellow Diamond",
    logo: diamond,
  },
  {
    name: "24 Seven",
    logo: twentyFourSeven,
  },
  {
    name: "Bikaji",
    logo: bikaji,
  },
  {
    name: "Babaji",
    logo: babaji,
  },
];

const OEMBrandsSection = () => {
  return (
    <section id="oem" className="py-10 brand-section-light">
      <div className="max-w-full mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="brand-eyebrow inline-block px-5 py-2 rounded-full font-semibold">
            OEM Partners
          </span>

          <h2 className="brand-heading text-2xl md:text-4xl font-semibold md:font-bold mt-5">
            Trusted By Industry Leaders
          </h2>

          <p className="max-w-6xl mx-auto mt-4 text-lg text-[var(--brand-brown-soft)]">
            TIP TOP proudly associates with renowned OEM brands, delivering
            quality products and trusted manufacturing partnerships across India.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-card group rounded-2xl p-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="h-32 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-24 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            {/*   <h3 className="text-center font-bold text-[var(--brand-brown)] mt-4">
                {brand.name}
              </h3> */}
            </div>
          ))}

        </div>

        {/* Bottom Stats */}

      </div>
    </section>
  );
};

export default OEMBrandsSection;
