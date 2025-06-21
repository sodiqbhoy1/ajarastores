import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-green-800">Ajara AgriTech</h1>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#products" className="hover:text-green-600">Products</a></li>
            <li><a href="#why-us" className="hover:text-green-600">Why Us</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-green-900 leading-tight mb-4">
              Power Your Farm with Smart Tools
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover innovative farming equipment built for productivity. Affordable, reliable, and perfect for Nigerian farms.
            </p>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 shadow-lg transition"
            >
              Order Now on WhatsApp
            </a>
          </div>

          <div className="flex-1">
            <img
              src="/images/farm-hero-modern.jpg"
              alt="Farm machinery display"
              className="rounded-xl w-full shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-900 mb-10">Top-Selling Farm Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Manual Seeder', img: '/images/seeder.jpg' },
              { name: 'Water Pump', img: '/images/water-pump.jpg' },
              { name: 'Knapsack Sprayer', img: '/images/sprayer.jpg' },
            ].map((tool, i) => (
              <div key={i} className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <img src={tool.img} alt={tool.name} className="h-40 w-full object-cover rounded mb-4" />
                <h4 className="text-xl font-semibold text-green-800">{tool.name}</h4>
                <p className="text-gray-600 mt-2">High-efficiency {tool.name.toLowerCase()} suitable for any terrain.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-green-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-900 mb-6">Why Choose Ajara?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Trusted Quality</h4>
              <p className="text-gray-600">All products are tested and recommended by local farmers.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Nationwide delivery within 3-5 working days, guaranteed.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Affordable Prices</h4>
              <p className="text-gray-600">We work directly with manufacturers to cut out middlemen costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-900 mb-6">Get in Touch</h3>
          <p className="text-gray-700 mb-6">
            We’re here to help. Reach out for product inquiries, partnerships, or farm supply quotes.
          </p>
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition shadow"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Ajara AgriTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
