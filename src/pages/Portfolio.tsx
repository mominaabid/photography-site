// pages/Portfolio.tsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
  // Intro background images
  const images = ["/img/port1.jpg", "/img/port2.jpg", "/img/port3.jpg", "/img/port4.jpg"];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Lightbox state
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [zoomOut, setZoomOut] = useState(false);

  const portfolioImages = [
    "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg",
    "img7.jpg","img8.jpg","img11.jpg","img13.jpg","img14.jpg","img15.jpg",
    "img16.jpg","img17.jpg","img18.jpg","img19.jpg",
  ];

  // Scroll reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  // Handle lightbox close with zoom-out
  const handleCloseLightbox = () => {
    setZoomOut(true);
    setTimeout(() => {
      setLightboxImg(null);
      setZoomOut(false);
    }, 300); // match animation duration
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Intro Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl uppercase tracking-widest animate-fadeInDown">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* About / Intro Text Section */}
      <section className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl mb-6 text-yellow-700 reveal">Every moment, beautifully captured.</h2>
        <p className="mb-4 reveal">
          For us, it’s all about capturing those moments that bring back the same emotions you felt when they happened. We are genuinely excited to be part of your wedding.
        </p>
        <p className="mb-4 reveal">
          Each smile, every tear, all the laughter - it’s all part of your unique story. We take the time to get to know you and weave all that into the images we create.
        </p>
        <p className="reveal">
          Our approach is simple: We stay in the background, letting the day unfold naturally, so what you get are real, unfiltered memories.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioImages.map((img, idx) => (
            <img
              key={idx}
              src={`/img/${img}`}
              alt={`Portfolio ${idx + 1}`}
              className="w-full h-60 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-yellow-600"
              onClick={() => setLightboxImg(`/img/${img}`)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseLightbox}
        >
          <div
            className={`relative ${
              zoomOut ? "animate-zoomOutLightbox" : "animate-zoomInLightbox"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg}
              alt="Lightbox"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-5 right-10 text-white text-4xl font-bold"
              onClick={handleCloseLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />

      {/* Tailwind Animations */}
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(40px);
          }
          .reveal.active {
            animation: fadeUp 1s ease forwards;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes zoomInLightbox {
            0% { transform: scale(0.75); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-zoomInLightbox {
            animation: zoomInLightbox 0.35s ease-out forwards;
          }
          @keyframes zoomOutLightbox {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.75); opacity: 0; }
          }
          .animate-zoomOutLightbox {
            animation: zoomOutLightbox 0.35s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;
