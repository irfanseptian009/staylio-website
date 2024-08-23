'use client'; 

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (err) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex bg-white rounded-lg shadow-lg max-w-4xl overflow-hidden">
        {/* Left Section - Login Form */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">
            Login and <span className="text-orange-500">Discover</span> Your Perfect Stay
          </h1>
          <p className="mb-8 text-gray-600">
            Find your ideal getaway with us. Enjoy top-notch comfort and quality service at every destination. Login now to unlock exclusive benefits.
          </p>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="/login/user" className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              User
            </Link>
            <Link href="/login/admin" className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Admin
            </Link>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg mb-4">Sign In</button>
          <div className="text-center text-gray-500 mb-4">Or sign in with</div>
          {/* Google Login Button */}
          <button 
            onClick={handleGoogleLogin} 
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
        </div>
        {/* Right Section - Image */}
        <div className="w-1/2">
          <img
            src="/Intersect.png"
            alt="Intersect"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}