import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialMediaLinks from '../components/SoicalMediaLinks';
import { aboutInfo } from '../data/personalData';

function AboutPage() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="container mx-auto py-8 flex-1">
                    <div className="flex">
                        {/* Left side: Words */}
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-indigo-800  inline-block text-transparent bg-clip-text">{aboutInfo.title}</h2>
                            <p className="mt-4 text-lg text-gray-400">
                                {aboutInfo.description}
                            </p>
                            <div className='my-4'>
                                <SocialMediaLinks />
                            </div>
                        </div>

                        {/* Right side: Image */}
                        <div className="flex w-1/2 gap-4">
                        <img
                                src={aboutInfo.image1}
                                alt="About Me 1"
                                className="rounded-lg shadow-lg w-1/2" // Set width to half of the parent container
                            />
                            <img
                                src={aboutInfo.image2}
                                alt="About Me 2"
                                className="rounded-lg shadow-lg w-1/2" // Set width to half of the parent container
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;
