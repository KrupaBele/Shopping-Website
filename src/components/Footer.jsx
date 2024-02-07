import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-y relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <div className="hover:underline">Home</div>
                </li>
                <li>
                  <div className="hover:underline">About</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">Github</li>
                <li>Discord</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <div className="hover:underline">Privacy Policy</div>
                </li>
                <li>
                  <div className="hover:underline">Terms &amp; Conditions</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 . All Rights Reserved.
          </span>
        </div>
      </div>
      <div className=" bg-white border border-black h-12 w-8 absolute  right-7  top-0  rounded-full rounded-t-xl">
        <a href="#">
          <div className=" pt-2 text-2xl hover:scale-125 hover:h-8 hover:-translate-y-11  duration-700   scroll-smooth ">
            <FaArrowUpLong />
          </div>
        </a>
      </div>
    </footer>
  );
}
