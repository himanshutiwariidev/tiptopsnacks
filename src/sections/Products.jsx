const product1 = "/assets/katori.jpeg";
const product2 = "/assets/rings.jpeg";
const product3 = "/assets/jeerapapad.jpeg";
const product4 = "/assets/ghapaghap.jpeg";
const product5 = "/assets/paasta.jpeg";
const product6 = "/assets/kurreymasala.jpeg";

const products = [
  {
    id: 1,
    name: "Chatori Katori",
    image: product1,
  },
  {
    id: 2,
    name: "Rings Masala",
    image: product2,
  },
  {
    id: 3,
    name: "Jeera Papad",
    image: product3,
  },
  {
    id: 4,
    name: "Ghapa Ghap",
    image: product4,
  },
  {
    id: 5,
    name: "Crispy Pasta",
    image: product5,
  },
  {
    id: 6,
    name: "Kurrey Masala",
    image: product6,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-5 brand-section-white">
      <div className="w-full mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="brand-eyebrow inline-block px-5 py-2 rounded-full font-medium text-sm">
            Our Best Snacks
          </span>

          <h2 className=" text-2xl md:text-5xl font-semibold md:font-bold mt-5">
            Crunchy & Delicious
            <span className="text-yellow-400"> Snacks</span> from a Trusted
            Snacks Manufacturer
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-[var(--brand-brown-soft)]">
            Great snacks start with great ingredients — and that's exactly
            where we begin. As an experienced snacks manufacturer, we bring
            together traditional Indian recipes and modern manufacturing
            techniques to create snacks that are crunchy, flavourful, and
            impossible to resist.
          </p>

          <p className="max-w-3xl mx-auto mt-6 font-semibold text-[var(--brand-brown)]">
            Our range includes:
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="brand-card group relative rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden p-2">
                <img
                  src={product.image}
                  alt={product.name}
  className=" w-full h-[280px] object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              {/* Product Content */}
              <div className="px-6 pb-6 text-center">
                <h3 className="text-md md:text-xl font-semibold md:font-bold  ">
                  {product.name}
                </h3>

              
              </div>

              {/* Decorative Glow */}
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-10 text-center text-[var(--brand-brown-soft)]">
          Every product is cooked, seasoned, and packed under hygienic
          conditions to lock in freshness and flavour — so every bite
          delivers the perfect crunch.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
