// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Scroll reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const countries = [
    { img: "/img/span.jpg", name: "Spain" },
    { img: "/img/france.jpg", name: "France" },
    { img: "/img/italy.jpg", name: "Italy" },
    { img: "/img/germany.jpg", name: "Germany" },
    { img: "/img/austria.jpg", name: "Austria" },
    { img: "/img/croatia.jpg", name: "Croatia" },
  ];

  // Auto-scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.children;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (slides.length === 0) return;
      currentIndex = (currentIndex + 1) % slides.length;
      slider.scrollTo({
        left: (slides[0] as HTMLElement).offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4] overflow-hidden">
        <img
          src="/img/img20.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider text-center px-4">
            About Us
          </h1>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* About Section */}
        <section className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src="/img/img10.jpg"
                alt="Couple Photography"
                className="w-full h-auto aspect-[4/3] object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 relative inline-block">
                About Eliaha Wedding
                <span className="block w-16 h-1 bg-yellow-600 mt-2"></span>
              </h2>
              <p className="text-gray-700 mb-4">
                At <b>Eliaha Wedding Photography</b>, we capture love stories in their most authentic and magical moments. From intimate garden weddings to grand European celebrations, we craft timeless memories that reflect your unique journey together.
              </p>
              <p className="text-gray-700 mb-4">
                Our team combines <b>creativity, artistry, and meticulous attention to detail</b> to deliver stunning visuals that tell your love story. We focus on genuine moments, candid emotions, and elegant compositions.
              </p>
              <p className="text-gray-700 mb-6">
                Every couple deserves a storybook experience, and Eliaha Wedding is committed to making your special day unforgettable. We stay in the background, yet capture every smile, tear, and joyful celebration.
              </p>
              <a
                href="/portfolio"
                className="inline-block px-6 py-3 bg-yellow-600 text-white font-medium rounded-full transition hover:bg-yellow-700 hover:-translate-y-1"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* Timeless Moments Section */}
        <section className="text-center reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Timeless Moments Worldwide</h2>
          <p className="text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
            At <b>Eliaha Wedding</b>, we believe that every love story deserves to be immortalized. From romantic European streets to breathtaking destinations worldwide, our team transforms fleeting moments into lifelong memories. Our focus is on authenticity, capturing emotions, and creating a visual legacy of your most cherished day.
          </p>
        </section>

        {/* Country Slider */}
        <section className="relative">
          <div className="overflow-x-auto no-scrollbar">
            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap scroll-smooth cursor-pointer"
            >
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className="inline-block w-64 sm:w-72 md:w-80 flex-shrink-0 text-center"
                  onClick={() => setLightboxImg(country.img)}
                >
                  <img
                    src={country.img}
                    alt={country.name}
                    className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg mb-2 transform transition-transform duration-300 hover:scale-105"
                  />
                  <h3 className="text-lg sm:text-xl font-medium">{country.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl animate-zoomIn"
          />
          <button
            className="absolute top-5 right-5 sm:right-10 text-white text-4xl font-bold"
            onClick={() => setLightboxImg(null)}
          >
            &times;
          </button>
        </div>
      )}

      <Footer />

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes zoomIn {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-zoomIn { animation: zoomIn 0.5s ease forwards; }
          .reveal { opacity: 0; transform: translateY(40px); transition: all 1s ease; }
          .reveal.active { opacity: 1; transform: translateY(0); }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default About;
