// src/pages/Reviews.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Review {
  avatar: string;
  name: string;
  text: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      avatar: "https://i.pravatar.cc/80?img=1",
      name: "Sarah & John",
      text: "Absolutely stunning photography! Captured every emotion perfectly.",
    },
    {
      avatar: "https://i.pravatar.cc/80?img=2",
      name: "Emma & Lucas",
      text: "Our European wedding photos are breathtaking. Professional & creative.",
    },
    {
      avatar: "https://i.pravatar.cc/80?img=3",
      name: "Sophia & Michael",
      text: "Incredible detail and artistic shots. Memories we’ll cherish forever.",
    },
    {
      avatar: "https://i.pravatar.cc/80?img=4",
      name: "Olivia & James",
      text: "Perfectly captured our love and happiness. Couldn’t be happier!",
    },
  ];

  // Duplicate reviews array for seamless infinite scroll
  const reviewLoop = [...reviews, ...reviews];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#fff8f0] to-[#fefefe]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <img
          src="/img/img21.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Capturing Your Perfect Moments
            </h1>
          </div>
        </div>
      </section>

      {/* Reviews Slider Section */}
      <main className="py-16 px-4">
        <section className="reviews max-w-6xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 inline-block relative">
            Client Reviews
            <span className="block w-20 h-1 bg-yellow-600 mt-2 mx-auto rounded"></span>
          </h2>

          {/* Auto-scrolling slider */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {reviewLoop.map((rev, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg border-t-4 border-yellow-600 p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-600 shadow-sm object-cover"
                  />
                  <div className="review-stars flex justify-center mb-3 text-yellow-600">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <i key={i} className="fa-solid fa-star mr-1"></i>
                      ))}
                  </div>
                  <p className="text-gray-600 italic mb-2">{rev.text}</p>
                  <strong className="block text-gray-900">{rev.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Tailwind + Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }

          /* Auto-scroll animation */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }

          /* Hide scrollbar */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default Reviews;
