const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-10 brand-section-light"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-start mb-7">
          <span className="brand-eyebrow inline-block px-5 py-2 rounded-full font-semibold uppercase">
            About us
          </span>
                  </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--brand-brown)] mb-6">
              A Journey of Trust & Quality
            </h3>

            <p className="text-[var(--brand-brown-soft)] leading-relaxed mb-5">
              Established in <strong>1991</strong> by visionary entrepreneur
              <strong> Mr. Suresh Chand Goyal</strong>, TIP TOP Food Tech India
              Pvt. Ltd. started as a small operation with a simple mission:
              delivering quality food products to Indian consumers.
            </p>

            <p className="text-[var(--brand-brown-soft)] leading-relaxed mb-5">
              What began as family-shared recipes quickly gained popularity,
              transforming into a trusted food brand serving customers across
              India. Today, TIP TOP has expanded its operations to more than
              <strong> 25 cities</strong> and has established a strong presence
              across <strong>25+ states</strong>.
            </p>

            <p className="text-[var(--brand-brown-soft)] leading-relaxed">
              With decades of experience and commitment to excellence, the
              company continues to provide premium-quality food products while
              maintaining the values of trust, authenticity, and customer
              satisfaction.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="brand-card p-8 rounded-2xl">
              <h4 className="text-3xl md:text-5xl font-bold text-yellow-400">35+</h4>
              <p className="mt-3 text-[var(--brand-brown-soft)] font-medium">
                Years of Excellence
              </p>
            </div>

            <div className="brand-card p-8 rounded-2xl">
              <h4 className="text-3xl md:text-5xl font-bold text-yellow-400">25+</h4>
              <p className="mt-3 text-[var(--brand-brown-soft)] font-medium">
                States Covered
              </p>
            </div>

            <div className="brand-card p-8 rounded-2xl">
              <h4 className="text-3xl md:text-5xl font-bold text-yellow-400">25+</h4>
              <p className="mt-3 text-[var(--brand-brown-soft)] font-medium">
                Operational Cities
              </p>
            </div>

            <div className="brand-card p-8 rounded-2xl">
              <h4 className="text-3xl md:text-5xl font-bold text-yellow-400">100+</h4>
              <p className="mt-3 text-[var(--brand-brown-soft)] font-medium">
                Product Variants
              </p>
            </div>

          </div>
        </div>

        {/* Product Categories */}
       

        {/* Founder Quote */}
        <div className="brand-card mt-10 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-[var(--brand-brown)] mb-4">
            Our Vision
          </h3>

          <p className="text-lg text-[var(--brand-brown-soft)] max-w-4xl mx-auto italic">
            "From a humble beginning to becoming a trusted food brand across
            India, our mission remains the same — delivering quality, taste,
            and trust to every household."
          </p>

          <p className="mt-5 font-semibold text-[var(--brand-red)]">
            — Mr. Suresh Chand Goyal
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
