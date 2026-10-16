"use client";

import { useState } from "react";
import {
  MapPin,
  PhoneCall,
  Mail,
  Send,
  Factory,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "dfdaf450-a82b-4684-af75-6c0803165199";

const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Tip Top Snacks Website");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactCards = [
    {
      icon: <MapPin size={22} />,
      label: "Registered Office",
      content: (
        <>
          D-311, Tagore Garden,
          <br />
          New Delhi – 110027
        </>
      ),
    },
    {
      icon: <PhoneCall size={22} />,
      label: "Quick Contact",
      content: (
        <>
          <a
            href="tel:09891456953"
            className="text-yellow-700 hover:underline"
          >
            098914 56953
          </a>
          ,{" "}
          <a
            href="tel:09810637185"
            className="text-yellow-700 hover:underline"
          >
            09810637185
          </a>
          <br />
          <span className="text-gray-500 text-sm">Distribution</span>
          <br />
          <a
            href="tel:18003098301"
            className="text-yellow-700 hover:underline"
          >
            1800 309 8301
          </a>{" "}
          <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            Toll Free
          </span>
          <br />
          <span className="text-gray-500 text-sm">Customer Care</span>
        </>
      ),
    },
    {
      icon: <Mail size={22} />,
      label: "Support Email",
      content: (
        <>
          <a
            href="mailto:tiptop_food@yahoo.com"
            className="text-yellow-700 hover:underline"
          >
            tiptop_food@yahoo.com
          </a>
          <br />
          <a
            href="mailto:info@tiptopfoodtech.com"
            className="text-yellow-700 hover:underline"
          >
            info@tiptopfoodtech.com
          </a>
        </>
      ),
    },
  ];

  const units = [
    { id: "Unit 1", addr: "D-9, Sector 2" },
    { id: "Unit 2", addr: "D-11, Sector 2" },
    { id: "Unit 3", addr: "D-12, Sector 2" },
    { id: "Unit 4", addr: "H-274, Sector 2" },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold tracking-wide uppercase">
            <Mail size={14} />
            Contact Us
          </span>

          <h2 className="text-3xl lg:text-5xl font-semibold md:font-bold text-gray-900 mt-5 leading-tight">
            Get In Touch With{" "}
            <span className="text-yellow-500">Us</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            We'd love to hear from you. Reach out for product inquiries,
            distribution opportunities, or customer support.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left Column ── */}
          <div className="space-y-5">

            {/* Top 3 contact cards */}
            {contactCards.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-yellow-100 rounded-2xl p-5 flex gap-4 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300"
              >
                {/* Icon bubble */}
                <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-yellow-900 shrink-0">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-1">
                    {item.label}
                  </p>
                  <div className="text-gray-700 text-sm leading-7">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Works / Units card */}
            <div className="bg-white border border-yellow-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-yellow-900 shrink-0">
                  <Factory size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-1">
                    Works
                  </p>
                  <p className="text-sm text-gray-500">
                    Bawana Industrial Area, DSIIDC Delhi – 110039
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {units.map((u) => (
                  <div
                    key={u.id}
                    className="bg-yellow-50 border border-yellow-200 rounded-xl p-3"
                  >
                    <p className="text-xs font-bold text-yellow-700 mb-0.5">
                      {u.id}
                    </p>
                    <p className="text-xs text-gray-500">{u.addr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="bg-white border border-yellow-100 rounded-3xl shadow-md overflow-hidden">

            {/* Yellow top accent bar */}
            <div className="h-1.5 bg-yellow-400 w-full" />

            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Send Us A Message
              </h3>
              <p className="text-gray-400 text-sm mb-7">
                Fill out the form and we'll get back to you shortly.
              </p>

              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                />

                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-yellow-900 font-semibold px-7 py-3 rounded-xl text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={15} />
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Thank you! Your message has been sent. We'll get back to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Embedded Map */}
            <div className="border-t border-yellow-100">
              <iframe
                title="Tip Top Foods Location"
                src="https://www.google.com/maps?q=D-311,Tagore+Garden,New+Delhi+110027&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                allowFullScreen
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;