// Replace these with actual partner logo assets (PNG/SVG) provided by you,
// or your own hosted copies — don't hot-link third-party trademarked logos in production.
import partner1 from "../assets/partners/khadi.png";
import partner2 from "../assets/partners/kendriya-bhandar.png";
import partner3 from "../assets/partners/cpc.png";
import partner4 from "../assets/partners/northern-railway.png";
import partner5 from "../assets/partners/nafed.png";
import partner6 from "../assets/partners/irctc.png";
import partner7 from "../assets/partners/hafed.png";

const partners = [
  { logo: partner1, name: "Khadi" },
  { logo: partner2, name: "Kendriya Bhandar" },
  { logo: partner3, name: "CPC" },
  { logo: partner4, name: "Northern Railway" },
  { logo: partner5, name: "Nafed" },
  { logo: partner6, name: "IRCTC" },
  { logo: partner7, name: "Hafed" },
];

const Partners = () => {
  return (
    <section className="relative bg-white py-10 border-t-2 border-b-2 border-[#A41E22]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#1A2A4A] tracking-tight mb-8">
          OUR PRESTIGIOUS INSTITUTIONAL RETAIL PARTNERS:
        </h2>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
