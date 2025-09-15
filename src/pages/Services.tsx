// src/pages/Services.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  const services = [
    {
      title: "Destination Weddings",
      description:
        "Celebrate your big day in Europe’s most romantic cities — Paris, Santorini, Rome, or Venice. Our team captures stunning scenery along with heartfelt emotions, bringing your dream wedding to life in timeless frames.",
      bgImage: "/img/destination.jpg",
    },
    {
      title: "Pre-Wedding Shoots",
      description:
        "Turn your love story into a visual journey. From Tuscan vineyards to cobblestone streets of Prague, we create enchanting pre-wedding portraits that reflect the joy and excitement of your upcoming celebration.",
      bgImage: "/img/prewedding.jpg",
    },
    {
      title: "Luxury Wedding Albums",
      description:
        "Relive your wedding day with handcrafted albums made from premium materials. Each page is thoughtfully designed, transforming your memories into heirlooms that will be cherished for generations.",
      bgImage: "/img/luxury.jpg",
    },
    {
      title: "Engagement Photography",
      description:
        "Your engagement marks a beautiful beginning. With styled shoots in dreamy European backdrops, we capture laughter, romance, and the promise of a lifetime together in stunning detail.",
      bgImage: "/img/img2.jpg",
    },
    {
      title: "Bridal Portraits",
      description:
        "Every bride deserves portraits that radiate elegance. We focus on capturing intricate details of your attire, your beauty, and the emotions that make this moment truly unforgettable.",
      bgImage: "/img/img1.jpg",
    },
    {
      title: "Reception Coverage",
      description:
        "The celebration doesn’t end with the vows. From heartfelt toasts to lively dances, we document the joy and candid moments of your reception, preserving the energy of the night forever.",
      bgImage: "/img/img5.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="/img/img9.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"></div>
        <div className="relative z-20 animate-fadeInUp px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            Our Services
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl">
            Elegant wedding photography & timeless memories
          </p>
        </div>
      </section>

      {/* Services Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="font-serif text-3xl sm:text-3xl md:text-4xl font-bold text-yellow-700 inline-block border-b-4 border-yellow-500 pb-2 mb-6">
          What We Offer
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
          From intimate vows to grand celebrations, our services are designed to
          capture every precious detail of your love story across Europe’s most
          iconic destinations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 min-h-[250px] flex flex-col justify-end overflow-hidden text-left p-4 sm:p-6"
            >
              {/* Background Image */}
              <img
                src={service.bgImage}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              {/* Content */}
              <div className="relative z-20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-200 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default Services;
