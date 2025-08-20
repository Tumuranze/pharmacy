import React, { useState } from 'react';
import { 
  Pill, 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  Truck, 
  Building2, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Award,
  CheckCircle,
  Package,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
<h1 className="text-2xl font-bold text-gray-900">Care Craft Pharmacy</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Services</button>
                <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Healthcare Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Providing quality pharmaceutical services to both retail customers and wholesale partners. 
                Your health is our priority, with over 25 years of trusted service in the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Heart className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Retail Services</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-teal-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <Building2 className="w-8 h-8 text-teal-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Wholesale</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-xl mb-3 mx-auto w-fit">
                      <ShieldCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pharmaceutical services tailored to meet the needs of individual customers and business partners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Retail Services */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Retail Services</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Prescription medications and refills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Over-the-counter medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Health consultations and advice</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Vaccination services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Health screenings and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Medical supplies and equipment</span>
                </li>
              </ul>
            </div>

            {/* Wholesale Services */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 p-3 rounded-xl mr-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Wholesale Services</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Bulk pharmaceutical supplies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Hospital and clinic partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Competitive pricing for volume orders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Reliable supply chain management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fast and secure delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Regulatory compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of pharmaceutical products and medical supplies to meet all your healthcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-4 rounded-lg mb-4 w-fit">
                <Pill className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescription Drugs</h3>
              <p className="text-gray-600">Wide range of prescription medications from leading pharmaceutical companies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-4 rounded-lg mb-4 w-fit">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">OTC Medications</h3>
              <p className="text-gray-600">Over-the-counter medicines for common health conditions and wellness.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 p-4 rounded-lg mb-4 w-fit">
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Supplies</h3>
              <p className="text-gray-600">Essential medical equipment and supplies for healthcare providers.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-4 rounded-lg mb-4 w-fit">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Products</h3>
              <p className="text-gray-600">Vitamins, supplements, and wellness products for healthy living.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About MediCare Pharmacy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over years,Care Craft Pharmacy has been a trusted cornerstone of healthcare in our community. 
                We combine traditional pharmacy values with modern technology to provide exceptional pharmaceutical services.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of licensed pharmacists and healthcare professionals is committed to ensuring you receive 
                the highest quality medications and personalized care, whether you're an individual customer or a 
                healthcare institution.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Licensed & Certified</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Pharmacists</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Fast Delivery</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Years of Experience</h4>
                    <p className="text-gray-600">Decades of trusted service in pharmaceutical care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed Pharmacists</h4>
                    <p className="text-gray-600">Expert healthcare professionals on staff</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Products</h4>
                    <p className="text-gray-600">Only the highest quality medications and supplies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                    <p className="text-gray-600">Individual attention for every customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for all your pharmaceutical needs. We're here to help with both retail and wholesale inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-xl mb-4 w-fit mx-auto">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Store</h3>
              <a 
                href="https://www.google.com/maps/search/pharmacy+Main+Street+Kabale+Town+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Main Street, Kabale Town<br />Kabale District, Uganda
                <div className="text-sm text-blue-600 mt-2 font-medium">📍 View on Google Maps</div>
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-teal-100 p-4 rounded-xl mb-4 w-fit mx-auto">
                <Phone className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Retail: +256 785841017<br />Wholesale: +256 774092416</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-xl mb-4 w-fit mx-auto">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8AM - 8PM<br />Sat-Sun: 9AM - 6PM</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Retail Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Retail Inquiries</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Wholesale Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wholesale Inquiries</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Pharmacy</option>
                    <option>Other Healthcare Facility</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"></textarea>
                </div>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Care Craft Pharmacy</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted healthcare partner over years. Providing quality pharmaceutical services to individuals and healthcare institutions.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="text-gray-300">info@Care Craft Pharmacy.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Prescription Medications</li>
                <li>OTC Products</li>
                <li>Health Consultations</li>
                <li>Wholesale Supply</li>
                <li>Medical Equipment</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="https://www.google.com/maps/search/pharmacy+Main+Street+Kabale+Town+Uganda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Main Street, Kabale Town
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/search/pharmacy+Main+Street+Kabale+Town+Uganda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Kabale District, Uganda 📍
                  </a>
                </li>
                <li>Retail: +256 785841017</li>
                <li>Wholesale: +256 774092416</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">&copy; 2025 Care craft Pharmacy. All rights reserved. Licensed Pharmacy - State License #RX123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;