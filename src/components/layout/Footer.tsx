'use client';

import React from 'react';
import Image from 'next/image';
import Copyright from './Copyright';
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="bg-tennis-green-50 border-t border-tennis-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">External Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://clubspark.kiwi/lynfieldtennisclub" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Image src="/globe.svg" alt="Website" width={20} height={20} />
                  Lynfield Tennis Club Website
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lynfieldtennis/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/lynfield.tennis.5/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
                  Join us on Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Email: {siteConfig.links.email}</li>
              <li>Phone: {siteConfig.links.phone}</li>
              <li>Location: Lynfield Tennis Club</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
