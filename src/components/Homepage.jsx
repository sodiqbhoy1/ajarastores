import React from 'react'
import Footer from './Footer'
import Harvester from '../assets/harvester.jpg'

const Homepage = () => {
  return (
<>
    <section id="home" className="pt-32 pb-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl font-bold text-green-900 leading-tight mb-4">
              Farm Smarter, Not Harder
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Get premium tools and machinery tailored for Nigerian farmers. From simple tools to smart machines, we've got you covered.
            </p>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition"
            >
              Chat with Sales
            </a>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img src={Harvester} alt="Farm tools" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16" id="products">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-green-900">Popular Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Cutlass', 'Knapsack Sprayer', 'Hand Tiller'].map((item, idx) => (
              <div key={idx} className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="h-40 bg-gray-300 rounded mb-4"></div>
                <h4 className="text-xl font-semibold text-green-800">{item}</h4>
                <p className="text-gray-600 mt-2">Durable and affordable {item.toLowerCase()} for every Nigerian farmer.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-green-100 py-16" id="about">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Why Choose Us?</h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            We source and supply high-quality farm equipment tailored to your needs. Trusted by farmers across Nigeria for fast delivery, great prices, and honest service.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16" id="contact">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-6">Have questions or need help picking the right tool? Chat with us on WhatsApp or call us directly.</p>
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Talk to Support
          </a>
        </div>
      </section>

      <Footer/>

</>
  )
}

export default Homepage
