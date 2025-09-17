// src/pages/Home.tsx
import  { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Home() {
  // --- Hero Slider Logic ---
  const images = [
    "/images/web banner.jpg",
    "/images/web banner2.jpg",
    "/images/web banner3.jpg",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="font-[Poppins]">
      {/* Header */}
      <Header />

      {/* Hero Section - Auto Slider */}
      <section id="home" className="home">
        <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section - Smaller image, balanced with text */}
      <section
        id="about"
        className="about py-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div className="about-image flex justify-center">
          <img
            src="/images/natural.jpeg"
            alt="About Our Store"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[280px] md:h-[380px] object-cover"
          />
        </div>
        <div className="about-content">
          <h2 className="text-3xl font-semibold mb-4">Natural Beauty, Inside Out</h2>
          <p className="mb-4 text-justify">
            Our beauty store brings you premium skincare products crafted with
            natural ingredients...
          </p>
          <p className="mb-4 text-justify">
            From skincare essentials to luxury beauty must-haves, our collection
            empowers you to look and feel your best.
          </p>
          <Link
            to="/products"
            className="bg-[#814d3f] text-white px-5 py-2 rounded hover:bg-[#6a3f33] transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Bestsellers Section - Zoomed out product images */}
      <section id="bestsellers" className="bestsellers py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-semibold text-center mb-10">All-Time Favorites</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: "/images/32.jpg", name: "Miracle White Cream", price: "$12.25" },
              { img: "/images/43.jpg", name: "Deluxe Beauty Cream", price: "$23.55" },
              { img: "/images/45.jpg", name: "LUNA Xpert whitening soap", price: "$19.99" },
              { img: "/images/48.jpg", name: "Deep Facial Cleansing Gel", price: "$15.75" },
              { img: "/images/54.jpg", name: "Facial Cleanser", price: "$19.99" },
              { img: "/images/59.jpg", name: "Moisturizing Lotion", price: "$12.25" },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-52 object-contain rounded mb-3" // zoomed out
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-[#814d3f] font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="bg-[#814d3f] text-white px-6 py-3 rounded hover:bg-[#6a3f33] transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Founder Section - Balanced image & text */}
      <section className="gift-section py-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="gift-image flex justify-center">
          <img
            src="/images/founder.jpg"
            alt="Founder"
            className="rounded-lg shadow-lg w-full md:w-[90%] h-[280px] md:h-[380px] object-cover"
          />
        </div>
        <div className="gift-content">
          <h1 className="text-3xl font-semibold mb-2">Message From The Manufacturer</h1>
          <h3 className="mb-4">Founder of Royal International</h3>
          <p className="text-justify mb-4">
            Hello Everybody, I hope all of you are enjoying good health...
          </p>
          <Link
            to="/about"
            className="bg-[#814d3f] text-white px-5 py-2 rounded hover:bg-[#6a3f33] transition"
          >
            See More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
