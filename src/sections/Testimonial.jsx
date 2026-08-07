"use client";

import { useRef } from 'react';

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Card width (w-80 = 320px) + gap (approx 24px)
      const scrollAmount = direction === 'left' ? -344 : 344;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      value: "500+",
      label: "Retail partners",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ),
      value: "4.9⭐",
      label: "Average rating",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      value: "Pan-India",
      label: "Distribution",
    }
  ];

  const testimonials = [
    {
      initials: "RK",
      avatarBg: "bg-yellow-100",
      name: "Rajesh Kumar",
      role: "Retail Distributor",
      platform: "facebook",
      rating: 5,
      text: "TIP TOP products have consistently delivered excellent quality. Their snacks are among the best-selling in our stores — customers keep coming back.",
      isHighlighted: true
    },
    {
      initials: "PS",
      avatarBg: "bg-pink-100",
      name: "Priya Sharma",
      role: "Happy Customer",
      platform: "instagram",
      rating: 5,
      text: "The taste, freshness, and packaging are outstanding. My family loves TIP TOP snacks and namkeens — a daily staple in our home.",
      isHighlighted: true
    },
    {
      initials: "AV",
      avatarBg: "bg-orange-100",
      name: "Amit Verma",
      role: "Institutional Buyer",
      platform: "google",
      rating: 5,
      text: "Their commitment to quality and timely delivery makes them a truly trusted partner. Highly recommend for bulk institutional requirements.",
      isHighlighted: true
    },
    {
      initials: "SG",
      avatarBg: "bg-blue-100",
      name: "Sanjay Gupta",
      role: "Retail Partner",
      platform: "x",
      rating: 5,
      text: "Working with TIP TOP has been a wonderful experience. Their products have excellent market demand and the support team is very responsive.",
      isHighlighted: true
    },
    {
      initials: "MP",
      avatarBg: "bg-red-100",
      name: "Meena Patel",
      role: "Wholesale Buyer",
      platform: "facebook",
      rating: 5,
      text: "Exceptional product range with consistent quality. TIP TOP is our go-to brand for all snack requirements — reliable and professional.",
      isHighlighted: true
    }
  ];

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'facebook':
        return <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>;
      case 'instagram':
        return <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
      case 'google':
        return <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;
      case 'x':
        return <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>;
      default:
        return null;
    }
  };

  const StarRating = () => (
    <div className="flex gap-1 mb-4 mt-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-10 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-600 font-medium text-sm mb-6">
            <span>⭐</span> CUSTOMER LOVE
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-gray-900 mb-4 tracking-tight">
            What our <span className="text-yellow-400">customers</span> says
          </h2>
          
          <p className="text-gray-500 text-lg">
            Trusted by distributors, retailers, institutions, and families across India.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-500">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all focus:outline-none hidden md:flex cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all focus:outline-none hidden md:flex cursor-pointer"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Cards Container with Hidden Scrollbar via standard CSS combinations in Tailwind */}
          <div 
            ref={scrollContainerRef}
            className="flex justify-start items-stretch gap-4 md:gap-6 py-8 px-4 overflow-x-auto snap-x snap-mandatory pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className={`snap-center flex-shrink-0 w-80 bg-white rounded-2xl p-6 relative transition-transform duration-300 ${
                  t.isHighlighted 
                    ? 'border-2 border-yellow-300 shadow-xl scale-105 z-10' 
                    : 'border border-gray-100 shadow-md scale-95 opacity-90 hover:scale-100'
                }`}
              >
                {/* Header Profile */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-gray-800 font-bold text-lg`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <div>{getPlatformIcon(t.platform)}</div>
                </div>

                {/* Rating */}
                <StarRating />

                <hr className={`mb-4 ${t.isHighlighted ? 'border-yellow-200' : 'border-gray-100'}`} />

                {/* Quote Block */}
                <div className="relative">
                  <span className="absolute -top-3 -left-1 text-4xl text-yellow-300 opacity-50 leading-none">“</span>
                  <p className={`text-sm leading-relaxed z-10 relative mt-2 ${t.isHighlighted ? 'text-gray-700 font-medium' : 'text-gray-600'}`}>
                    {t.text}
                  </p>
                  <span className="absolute -bottom-6 right-0 text-5xl text-yellow-300 opacity-50 leading-none rotate-180">“</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;