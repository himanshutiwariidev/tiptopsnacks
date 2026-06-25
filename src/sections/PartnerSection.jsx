import kendriyaBhandar from "../assets/Kendriya Bhandhar.png";
import cpc from "../assets/Central Police Canteen.png";
import railway from "../assets/Northern Railway.png";
import nafed from "../assets/NAFED Logo.png";
import irctc from "../assets/IRCTC Logo.png";
import hafed from "../assets/HAFED LOGO IMAGE.png";

const partners = [
  kendriyaBhandar,
  cpc,
  railway,
  nafed,
  irctc,
  hafed,
];

const PartnerSection = () => {
  return (
    <section id="partners" className="py-16 brand-section-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Border */}
        <div className="brand-rule h-[3px] mb-8"></div>

        {/* Heading */}
        <h2 className="text-center md:text-left text-xl md:text-4xl md:font-extrabold font-semibold uppercase mb-12">
          Our Prestigious Institutional Retail Partners
        </h2>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="brand-card flex-shrink-0 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-20 md:h-24 object-contain w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="brand-rule h-[3px] mt-10"></div>
      </div>
    </section>
  );
};

export default PartnerSection;
