import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/asset/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 lg:px-16 flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
          <div className="flex items-center mb-6">
            <Image src={logo} alt="Staylio" width={100} height={40} />
          </div>
          <p className="text-gray-600 w-64 leading-relaxed">
            The best hotel booking platform in the world
          </p>
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="max-w-xs">
            <h3 className="font-semibold text-gray-800 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/rooms/standard">Hotel</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/rooms/deluxe">AI Chatbot</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/rooms/family">Services</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/rooms/family">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-xs ml-[-70px]">
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/resources/help-center">Help Center</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/resources/guides">Guides</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/resources/partner-network">Partner Network</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/resources/developers">Developers</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-xs ml-[-70px]">
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-xs ml-[-70px]">
            <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Subscribe and get the latest updates
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center text-gray-600">
        © 2024 — Design and Developed by Staylio Team
      </div>
    </footer>
  );
};

export default Footer;
