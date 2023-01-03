import React from 'react';
import hero from '../assets/images/hero.webp';

const Hero = () => {
  return (
    <div
      className="hero min-h-[65vh]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;