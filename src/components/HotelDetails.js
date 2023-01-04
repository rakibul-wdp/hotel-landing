import React from 'react';
import imageTwo from '../assets/images/download (1).jpeg';
import imageThree from '../assets/images/download (2).jpeg';
import imageFour from '../assets/images/download (3).jpeg';
import imageFive from "../assets/images/download (4).jpeg";
import imageOne from '../assets/images/download.jpeg';
import mapImage from '../assets/images/map.png';

const HotelDetails = () => {
  return (
    <div className="mt-16 mb-10">
      <div className="flex justify-center items-center">
        <div
          className="hero w-[35rem] h-[25rem] mr-5"
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
          <img className="w-96 h-[11.9rem]" src={imageTwo} alt="" />
          <img className="w-96 h-[11.9rem]" src={imageThree} alt="" />
          <img className="w-96 h-[11.9rem]" src={imageFour} alt="" />
          <img className="w-96 h-[11.9rem]" src={imageFive} alt="" />
        </div>
      </div>
      <div className='flex justify-between px-[14.5rem] mt-5'>
        <div>
          <h2 className='text-xl font-bold mb-2'>Hotel Vishal &#64; Airport</h2>
          <p>104/2/2, National Highway 8, Mahirapur, New <span className='text-blue-500 underline ml-2'>View Map</span></p>
          <p>Delhi, 110037 New Delhi, India</p>
          <p className='font-bold my-2'>+91-7654564545, 8107344682</p>
        </div>
        <img className='w-36 h-34' src={mapImage} alt="" />
      </div>
    </div>
  );
};

export default HotelDetails;