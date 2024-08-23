import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 py-4 px-10">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ai-chatbot">AI Chatbot</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <Link href="/">
            <Image
              src={logo}
              className="btn btn-ghost object-contain"
              width={140}
              height={100}
              alt="Newsglo Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            <li><Link href="/" className="px-6 py-4 text-lg">Home</Link></li>
            <li><Link href="/ai-chatbot" className="px-6 py-4 text-lg">AI Chatbot</Link></li>
            <li><Link href="/services" className="px-6 py-4 text-lg">Services</Link></li>
            <li><Link href="/contact" className="px-6 py-4 text-lg">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/button-page" className="btn flex justify-center items-center px-10 py-4 h-14 bg-[#FE6927] hover:bg-[#D9581F] hover:border-white  rounded-2xl text-white font-semibold">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
