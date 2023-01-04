import React from 'react';
import imageTwo from '../assets/images/download (1).jpeg';
import imageThree from '../assets/images/download (2).jpeg';
import imageFour from '../assets/images/download (3).jpeg';
import imageFive from "../assets/images/download (4).jpeg";
import imageOne from '../assets/images/download.jpeg';

const HotelDetails = () => {
  return (
    <div className="mt-16 mb-10">
      <div className="flex justify-center items-center">
        <div
          className="hero w-[30rem] h-[19.25rem] mr-5"
          style={{
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <div className="hero-overlay bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="avatar online placeholder">
                <div className="bg-green-500 text-black rounded-full w-16">
                  <span className="text-xl">V</span>
                </div>
              </div>
              <div className="avatar online placeholder">
                <div className="bg-yellow-500 text-black rounded-full w-16">
                  <span className="text-xl">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img className="w-56 h-36" src={imageTwo} alt="" />
          <img className="w-56 h-36" src={imageThree} alt="" />
          <img className="w-56 h-36" src={imageFour} alt="" />
          <img className="w-56 h-36" src={imageFive} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;