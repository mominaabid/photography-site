import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <header className="relative text-center text-white">
        <div
          className="h-[80vh] bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Capturing Timeless Eliaha Weddings Photography
          </h1>
          <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">
            Elegant photography for your unforgettable day
          </p>
          <a
            href="/portfolio"
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg shadow-md font-semibold transition"
          >
            View Portfolio
          </a>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/img1.jpg"
              alt="Wedding Venue"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/img2.jpg"
              alt="Wedding Couple"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/img3.jpg"
              alt="Wedding Decor"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
            <img
              src="/img/img4.jpg"
              alt="Wedding Ceremony"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Full Wedding */}
          <div
            className="h-80 bg-cover bg-center rounded-xl shadow-lg relative flex items-end justify-center"
            style={{ backgroundImage: "url('/img/img10.jpg')" }}
          >
            <div className="bg-black/50 w-full p-4 rounded-b text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Full Wedding Coverage</h3>
              <p>Capture every special moment from start to finish.</p>
            </div>
          </div>

          {/* Pre-Wedding */}
          <div
            className="h-80 bg-cover bg-center rounded-xl shadow-lg relative flex items-end justify-center"
            style={{ backgroundImage: "url('/img/prewedding.jpg')" }}
          >
            <div className="bg-black/50 w-full p-4 rounded-b text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Pre-Wedding Shoot</h3>
              <p>Beautiful outdoor or indoor sessions before your big day.</p>
            </div>
          </div>

          {/* Wedding Albums */}
          <div
            className="h-80 bg-cover bg-center rounded-xl shadow-lg relative flex items-end justify-center"
            style={{ backgroundImage: "url('/img/weddingalbum.jpg')" }}
          >
            <div className="bg-black/50 w-full p-4 rounded-b text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Wedding Albums</h3>
              <p>Elegant photo albums to cherish your memories forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section with Sliding Reviews */}
      <section
        className="py-16 px-6 relative text-center"
        style={{
          backgroundImage: "url('/img/review1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-white">Client Reviews</h2>

        {/* Sliding container */}
        <div className="overflow-hidden relative max-w-6xl mx-auto">
          <div className="flex gap-8 animate-slide">
            {/* Review 1 */}
            <div className="min-w-[300px] bg-white bg-opacity-90 p-6 rounded-xl shadow-lg italic">
              "Absolutely stunning photography! Captured every emotion perfectly."
              <h4 className="mt-4 font-bold text-yellow-600">- Sarah & John</h4>
            </div>

            {/* Review 2 */}
            <div className="min-w-[300px] bg-white bg-opacity-90 p-6 rounded-xl shadow-lg italic">
              "Our ELIAHA Wedding photos are breathtaking. Professional and creative team."
              <h4 className="mt-4 font-bold text-yellow-600">- Emma & Lucas</h4>
            </div>

            {/* Review 3 */}
            <div className="min-w-[300px] bg-white bg-opacity-90 p-6 rounded-xl shadow-lg italic">
              “ELIAHA photography captured our day so beautifully.”
              <h4 className="mt-4 font-bold text-yellow-600">- A & S</h4>
            </div>

            {/* Review 4 */}
            <div className="min-w-[300px] bg-white bg-opacity-90 p-6 rounded-xl shadow-lg italic">
              “From the first meeting to the wedding day, everything was seamless.”
              <h4 className="mt-4 font-bold text-yellow-600">- F & M</h4>
            </div>

            {/* Review 5 */}
            <div className="min-w-[300px] bg-white bg-opacity-90 p-6 rounded-xl shadow-lg italic">
              “We can’t stop looking at our photos! Truly the best investment.”
              <h4 className="mt-4 font-bold text-yellow-600">- R & T</h4>
            </div>
          </div>
        </div>

        {/* Inline styles for animation */}
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide {
              display: flex;
              width: max-content;
              animation: slide 30s linear infinite;
            }
          `}
        </style>
      </section>

      {/* FAQ Section */}
    <section className="py-16 px-6 max-w-3xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>

  <div className="space-y-4">
    {[
      {
        q: "📸 How far in advance should we book?",
        a: "We recommend booking at least 6–12 months before your wedding to secure your preferred date.",
      },
      {
        q: "💍 Do you travel for destination weddings?",
        a: "Yes! We love capturing love stories worldwide. Travel and accommodation will be discussed in detail.",
      },
      {
        q: "⏱ How long before we receive our photos?",
        a: "You’ll receive your beautifully edited gallery within 4–6 weeks after your wedding.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300 cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.q}</h3>
          <span className={`text-yellow-600 text-2xl transform transition-transform duration-300 ${openFAQ === index ? "rotate-45" : ""}`}>
            +
          </span>
        </div>
        <div
          className={`px-6 text-gray-600 text-base md:text-lg transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? "max-h-40 py-4" : "max-h-0"}`}
        >
          {item.a}
        </div>
      </div>
    ))}
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Home;