import React from 'react';
import heroImage from '../../assets/images/zen-balancing-pebbles-misty-lake.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  // Function to handle button click
  const handleButtonClick = () => {
      // Navigate to the About Me page
      navigate('/about');
  };

  return (
    <div
      className="relative bg-cover bg-center h-64" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-5"></div> 
      {/* Semi-transparent overlay for better text visibility */}
      
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-white text-xl mt-4">I'm a web developer specializing in creating amazing experiences.</p>
        <button className="mt-8 bg-blue-400 text-white py-3 px-6 rounded-md hover:bg-blue-600" onClick={handleButtonClick}>About Me</button>
      </div>
    </div>
  );
}

export default Hero;
