import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HearthstoneCardGrid from '../components/portfolio/HearthstoneCardGrid';
import GitHubRepoCard from '../components/portfolio/GitHubRepoCard';
import ContactForm from '../components/portfolio/ContactForm';
import GoogleMapComponent from '../components/portfolio/GoogleMapComponent';
import banner1 from '../assets/images/banner_1.jpg';
import heartstoneBanner from '../assets/images/heartstone_banner_1.jpg';

function PortfolioPage() {
  return (
    <>
      <Header />
      <div className="p-6">
        {/* Section 1: GitHub Repo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Github Repo 📁</h2>
          {/* Image banner section */}
          <section className="mb-8">
            <div className="flex justify-center">
              <img
                src={banner1}
                alt="Banner"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
          <GitHubRepoCard />
        </section>
        {/* Section 2: Interest Card Game - Hearthstone */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interest💡: Card Game🃏 - Hearthstone</h2>
          {/* Image banner section */}
          <section className="mb-8">
            <div className="flex justify-center">
              <img
                src={heartstoneBanner}
                alt="Banner"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </section>
          <HearthstoneCardGrid />
        </section>

        {/* Section 3: Contact Me */}
        <section>
          <div className="container mx-auto p-4 flex space-x-8">
            {/* Contact Form */}
            <div className="w-1/2">
              <ContactForm />
            </div>

            {/* Google Map */}
            <div className="w-1/2">
              <GoogleMapComponent />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PortfolioPage;
