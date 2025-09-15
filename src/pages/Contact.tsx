// src/pages/Contact.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="/img/img12.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fadeIn">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-10">
          We’d love to hear about your wedding plans! Fill out the form below or reach us at{" "}
          <span className="font-semibold">info@eurwedding.com</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="lg:w-1/2 w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9990024868077!2d2.292292615674193!3d48.858373079287996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdb1b4f5d3b%3A0x8d6d3c7b1d9c43b6!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1675678901234!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <form className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <input
                type="text"
                placeholder="Fiancé's Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <input
                type="date"
                placeholder="Wedding Date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <input
                type="text"
                placeholder="Wedding Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600">
                <option>Select type of photography</option>
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Anniversary</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600">
                <option>How did you hear about us?</option>
                <option>Instagram</option>
                <option>Friend/Family</option>
                <option>Website</option>
              </select>
            </div>
            <textarea
              placeholder="Tell us more about your story..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        `}
      </style>
    </div>
  );
};

export default Contact;
