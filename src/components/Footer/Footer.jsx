import React from "react";
import FooterLogo from "../../assets/food-logo.png";
import {
  FaMobileAlt,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950 dark:hover:text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
                FOODIE
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                rerum nihil quas culpa explicabo ad perferendis! Inventore alias
                unde laudantium
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Tehsil, Peshawar</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+345 9180775</p>
              </div>
              {/* Social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
