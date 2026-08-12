"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Send, PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "Who is the best snacks manufacturer in Delhi?",
    answer:
      "TIP TOP Food Tech India Pvt. Ltd. is one of the best snacks manufacturers in Delhi, with 35+ years of experience, modern manufacturing facilities, and trusted OEM partnerships with leading brands like Haldiram's and Bikanervala.",
  },
  {
    question: "Where can I find the best snacks manufacturer in Delhi?",
    answer:
      "You can find the best snacks manufacturer in Delhi by visiting TIP TOP Food Tech, located in Delhi NCR, offering namkeen, chips, popcorn, and custom private label snacks with nationwide distribution.",
  },
  {
    question: "How to choose the best snacks manufacturer in Delhi?",
    answer:
      "To choose the best snacks manufacturer in Delhi, check their years of experience, FSSAI certification, quality control process, product range, and client reputation — TIP TOP Food Tech meets all these standards with 35+ years of trusted service.",
  },
  {
    question: "Do you offer private label snack manufacturing?",
    answer:
      "Yes, we manufacture and pack snacks under your own brand name, with custom packaging options available.",
  },
  {
    question: "What types of snacks do you manufacture?",
    answer:
      "We manufacture namkeen, chips, extruded snacks, popcorn, fryums, and custom snack products.",
  },
  {
    question: "Do you supply to businesses outside Delhi?",
    answer:
      "Yes, we supply to retailers and distributors across Delhi NCR and other parts of India through our nationwide distribution network.",
  },
  {
    question: "Is your manufacturing unit FSSAI certified?",
    answer:
      "Yes, our unit follows FSSAI guidelines to ensure food safety and hygiene at every stage.",
  },
  {
    question: "Can I get product samples before placing a bulk order?",
    answer:
      "Yes, samples can be provided so you can check quality before confirming your order.",
  },
  {
    question: "How do you ensure snacks stay fresh during delivery?",
    answer:
      "We use moisture-proof, food-grade packaging that keeps snacks crunchy and fresh until they reach you.",
  },
  {
    question: "How can I get in touch to start an order?",
    answer:
      "You can contact us directly through our website or phone number to discuss your requirements and get a quote.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="py-10 bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold tracking-wide uppercase">
            <HelpCircle size={14} />
            FAQs
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-gray-900 mt-5 mb-4 tracking-tight">
            What Our Customers Say About Our{" "}
            <span className="text-yellow-500">Snacks Manufacturer</span>
          </h2>

          <p className="text-gray-500 text-lg">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-yellow-300 shadow-md bg-yellow-50/40"
                    : "border-gray-100 shadow-sm bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-yellow-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-yellow-400 rounded-3xl px-6 py-10 md:py-12">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-2">
            Ready to Partner with a Trusted Snacks Manufacturer in Delhi?
          </h3>
          <p className="text-yellow-900/80 mb-7 max-w-xl mx-auto">
            Get in touch today and let's create the perfect snack range for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-yellow-900 font-semibold px-7 py-3 rounded-xl text-sm hover:bg-gray-50 active:scale-95 transition-all duration-200"
            >
              <PhoneCall size={16} />
              Contact Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-yellow-900 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-yellow-950 active:scale-95 transition-all duration-200"
            >
              Request a Quote
              <Send size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
