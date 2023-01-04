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
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[14.5rem]">
        <div
          className="hero w-[20rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] xl:w-[35rem] h-[25rem] mr-5 rounded"
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <img className="w-96 h-[11.9rem] rounded" src={imageTwo} alt="" />
          <img className="w-96 h-[11.9rem] rounded" src={imageThree} alt="" />
          <img className="w-96 h-[11.9rem] rounded" src={imageFour} alt="" />
          <img className="w-96 h-[11.9rem] rounded" src={imageFive} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[14.5rem] mt-5">
        <div>
          <h2 className="text-xl font-bold mb-2">Hotel Vishal &#64; Airport</h2>
          <p>
            104/2/2, National Highway 8, Mahirapur, New{" "}
            <span className="text-blue-500 underline ml-2">View Map</span>
          </p>
          <p>Delhi, 110037 New Delhi, India</p>
          <p className="font-bold my-2">+91-7654564545, 8107344682</p>
        </div>
        <img className="w-36 h-34 rounded" src={mapImage} alt="" />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[14.5rem] font-bold">
        <p className="mr-3">&diams; Free Parking</p>
        <p className="mr-3">&diams; Conference Room</p>
        <p className="mr-3">&diams; ATM</p>
        <p className="mr-3">&diams; Conference Room</p>
        <p className="mr-3">&diams; Play Ground</p>
      </div>
      <p className="px-[3rem] md:px-[7rem] lg:px-[10rem] xl:px-[14.5rem] mt-5">
        Located in New Delhi, 5.5Km from Rashirapati Bhavan, Hotel Vishal @
        Airport provides accommodation with a restaurant, free private parking
        and a fit ness center. This 3-star hotel offer an ATM, a confirence
        service and free WIFI. The accommodstion features a 24-hour front desk,
        room service and cumency exchange for guest.
      </p>
    </div>
  );
};

export default HotelDetails;