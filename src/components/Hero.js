import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { BsCalendar3, BsChevronDown } from "react-icons/bs";
import hero from "../assets/images/hero.webp";

const Hero = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div
      className="hero min-h-[65vh]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex justify-center">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 w-52 bg-base-100 text-black border-0"
            >
              <BsCalendar3 />
              <span className="mx-2">Check in</span>
              <BsChevronDown />
            </label>
            <Calendar
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 w-52 bg-base-100 text-black border-0"
            >
              <BsCalendar3 />
              <span className="mx-2">Check out</span>
              <BsChevronDown />
            </label>
            <Calendar
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 w-52 bg-base-100 text-black border-0"
            >
              <span className="mr-2">Room & Guests</span>
              <BsChevronDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 w-52 bg-base-100 text-black border-0"
            >
              <span className="mr-2">Check availability</span>
              <BsChevronDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
