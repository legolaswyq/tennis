'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('clubs');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-tennis-green-900 via-tennis-green-800 to-tennis-green-600">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Hero content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* Main content */}
              <div className="lg:col-span-3">
                <div className="text-center lg:text-left text-white">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    WELCOME TO 365 TENNIS
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl">
                    Learn tennis in a fun, welcoming and encouraging environment.
                  </p>
                  <div className="text-lg md:text-xl mb-8 max-w-4xl italic">
                    <p className="mb-4">
                      365 Tennis. Auckland & Waikato's largest coaching company.
                    </p>
                    <p className="mb-4">
                      New Zealand owned and operated. Exceptional coaching,
                    </p>
                    <p>
                      sportsmanship, fitness and fun from a team trained in high-performance tennis centres all over the world.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-tennis-green-500 hover:bg-tennis-green-400 text-white font-bold text-lg rounded-lg transition-colors"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>

              {/* Sidebar - Free Trial */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto">
                  <h3 className="text-2xl font-bold text-tennis-green-800 mb-4 text-center">
                    LOVE IT OR IT'S FREE
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Try a group lesson and if you don't love it you don't pay!
                  </p>
                  
                  <div className="mb-4">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tennis-green-500 text-gray-500"
                    >
                      <option value="">Select Location</option>
                      <option value="auckland-central">Auckland Central</option>
                      <option value="auckland-north">Auckland North</option>
                      <option value="auckland-south">Auckland South</option>
                      <option value="hamilton">Hamilton</option>
                      <option value="tauranga">Tauranga</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location-type"
                        value="clubs"
                        checked={selectedType === 'clubs'}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="mr-2 text-tennis-green-500"
                      />
                      <span className="text-gray-700">Clubs</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location-type"
                        value="schools"
                        checked={selectedType === 'schools'}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="mr-2 text-tennis-green-500"
                      />
                      <span className="text-gray-700">Schools</span>
                    </label>
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    FIND A CLASS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Club Locations */}
            <div className="bg-tennis-green-800 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">OUR CLUB LOCATIONS</h2>
              <p className="text-lg mb-6 text-center">
                365 Tennis operates from a range of locations across Auckland and Waikato.
              </p>
              <div className="text-center">
                <Link
                  href="/locations"
                  className="inline-flex items-center text-white hover:text-tennis-green-200 font-semibold text-lg transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* School Locations */}
            <div className="bg-purple-800 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">OUR SCHOOL LOCATIONS</h2>
              <p className="text-lg mb-6 text-center">
                Discover your options to get on the court and learn to play with 365 Tennis.
              </p>
              <div className="text-center">
                <Link
                  href="/locations"
                  className="inline-flex items-center text-white hover:text-purple-200 font-semibold text-lg transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tennis-green-800 mb-4">OUR PROGRAMS</h2>
            <p className="text-xl text-gray-600">Comprehensive tennis programs for all ages and skill levels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Junior Programs</h3>
              <p className="text-gray-600">Age-appropriate tennis programs for kids aged 3-17</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Adult Coaching</h3>
              <p className="text-gray-600">Private and group lessons for adult players</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Performance</h3>
              <p className="text-gray-600">High-performance training for competitive players</p>
            </div>
            
            <div className="text-center p-6 bg-tennis-green-50 rounded-lg">
              <div className="w-16 h-16 bg-tennis-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-tennis-green-800 mb-2">Holiday Camps</h3>
              <p className="text-gray-600">Fun and intensive camps during school holidays</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-tennis-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Tennis Journey?</h2>
          <p className="text-xl text-tennis-green-100 mb-8">Join thousands of players who have improved their game with 365 Tennis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-tennis-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-tennis-green-600 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
