import { useEffect, useState } from "react";
import product1 from "../assets/katori.jpeg";
import product2 from "../assets/rings.jpeg";
import product3 from "../assets/jeerapapad.jpeg";
import product4 from "../assets/ghapaghap.jpeg";
import product5 from "../assets/paasta.jpeg";
import product6 from "../assets/kurreymasala.jpeg";

const products = [
  {
    image: product1,
    name: "Chatori Katori",
    tagline: "Crunchy & Delicious",
    description:
      "A delightful snack packed with irresistible taste and crispy goodness.",
    color: "#b4070b",
  },
  {
    image: product2,
    name: "Rings Masala",
    tagline: "Masaledaar Fun",
    description:
      "Spicy rings that deliver a burst of flavor in every bite.",
    color: "#c58b08",
  },
  {
    image: product3,
    name: "Jeera Papad",
    tagline: "Traditional Taste",
    description:
      "Light, crispy and enriched with aromatic cumin flavors.",
    color: "#7c0508",
  },
  {
    image: product4,
    name: "Ghapa Ghap",
    tagline: "Snack Without Limits",
    description:
      "A flavorful munching experience perfect for every occasion.",
    color: "#f4c21c",
  },
  {
    image: product5,
    name: "Crispy Pasta",
    tagline: "Crispy Perfection",
    description:
      "Crunchy pasta bites seasoned with mouthwatering flavors.",
    color: "#b4070b",
  },
  {
    image: product6,
    name: "Kurrey Masala",
    tagline: "Bold & Spicy",
    description:
      "The ultimate masala snack for spice lovers.",
    color: "#c58b08",
  },
];

const DURATION = 4500;

const ProductShowcase = () => {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
      setProgressKey((k) => k + 1);
    }, DURATION);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setActive(index);
    setProgressKey((k) => k + 1);
  };

  const product = products[active];

  return (
    <section
      id="featured"
      className="relative overflow-hidden py-14 md:py-20 bg-white"
    >
      <style>{`
        @keyframes floatBig {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .animate-float-big {
          animation: floatBig 4.5s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp .5s ease forwards;
        }

        @keyframes progressBar {
          from { width:0%; }
          to { width:100%; }
        }

        .animate-progress {
          animation: progressBar ${DURATION}ms linear forwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display:none;
        }

        .scrollbar-hide {
          -ms-overflow-style:none;
          scrollbar-width:none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content First On Mobile */}
          <div className="order-1 text-center lg:text-left">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: `${product.color}15`,
                color: product.color,
              }}
            >
              ★ Featured Product
            </span>

            <h2
              key={`title-${active}`}
              className="mt-6 text-4xl sm:text-5xl font-extrabold text-[var(--brand-brown)] animate-fade-up"
            >
              {product.name}
            </h2>

            <p
              key={`tag-${active}`}
              className="mt-4 text-xl font-semibold animate-fade-up"
              style={{ color: product.color }}
            >
              {product.tagline}
            </p>

            <p
              key={`desc-${active}`}
              className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up"
            >
              {product.description}
            </p>

            <button
              className="mt-8 w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: product.color }}
            >
              Explore Product
            </button>

            {/* Thumbnails */}
            <div className="mt-10 flex gap-3 overflow-x-auto scrollbar-hide pb-3">
              {products.map((p, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white transition-all ${
                    active === index
                      ? "scale-105 shadow-lg border-2"
                      : "border opacity-70 hover:opacity-100"
                  }`}
                  style={
                    active === index
                      ? { borderColor: p.color }
                      : { borderColor: "#e5e7eb" }
                  }
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain"
                  />

                  {active === index && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-200">
                      <div
                        key={progressKey}
                        className="h-full animate-progress"
                        style={{ backgroundColor: p.color }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="order-2">
            <div className="relative h-[280px] sm:h-[360px] md:h-[450px] rounded-3xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                key={active}
                src={product.image}
                alt={product.name}
                className="max-w-[85%] max-h-[85%] object-contain animate-float-big"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;