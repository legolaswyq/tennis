'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="bg-tennis-green-50 shadow-sm border-b border-tennis-green-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-tennis-green-900 hover:text-tennis-green-700 transition-colors">
            Josh Tennis Training
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/services" className="text-tennis-green-800 hover:text-tennis-green-600 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-tennis-green-800 hover:text-tennis-green-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-tennis-green-800 hover:text-tennis-green-600 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
