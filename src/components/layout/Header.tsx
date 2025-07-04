'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const programsSubmenu = [
    { title: 'SQUAD COACHING', href: '/programs#squad' },
    { title: 'PRIVATE COACHING', href: '/programs#private' },
    { title: 'ADULT COACHING', href: '/programs#adult' },
    { title: 'HOLIDAY CAMPS', href: '/programs#holiday' },
  ];

  return (
    <header className="relative">
      {/* Top contact bar */}
      <div className="bg-tennis-green-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>TEXT OR CALL</span>
            <span className="font-semibold">{siteConfig.links.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>EMAIL US TODAY</span>
            <span className="font-semibold">{siteConfig.links.email}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-tennis-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-tennis-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 2a10 10 0 0 0 0 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tennis-green-600">365</div>
                  <div className="text-lg font-semibold text-tennis-green-800">tennis</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {siteConfig.mainNav.map((item) => {
                if (item.title === 'PROGRAMS') {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                      onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`font-medium text-sm uppercase tracking-wide transition-all duration-200 relative flex items-center ${
                          isActiveLink(item.href)
                            ? 'text-tennis-green-600 font-bold'
                            : 'text-tennis-green-800 hover:text-tennis-green-600'
                        }`}
                      >
                        {item.title}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        {isActiveLink(item.href) && (
                          <div className="absolute -bottom-6 left-0 right-0 h-1 bg-tennis-green-500 rounded-full"></div>
                        )}
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {isProgramsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                          <div className="py-2">
                            {programsSubmenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-3 text-sm font-medium text-tennis-green-800 hover:bg-tennis-green-50 hover:text-tennis-green-600 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium text-sm uppercase tracking-wide transition-all duration-200 relative ${
                      isActiveLink(item.href)
                        ? 'text-tennis-green-600 font-bold'
                        : 'text-tennis-green-800 hover:text-tennis-green-600'
                    }`}
                  >
                    {item.title}
                    {isActiveLink(item.href) && (
                      <div className="absolute -bottom-6 left-0 right-0 h-1 bg-tennis-green-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-tennis-green-800 hover:text-tennis-green-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-tennis-green-200">
              <div className="flex flex-col space-y-4">
                {siteConfig.mainNav.map((item) => {
                  if (item.title === 'PROGRAMS') {
                    return (
                      <div key={item.href}>
                        <Link
                          href={item.href}
                          className={`font-medium text-sm uppercase tracking-wide transition-colors relative ${
                            isActiveLink(item.href)
                              ? 'text-tennis-green-600 font-bold bg-tennis-green-50 px-3 py-2 rounded-md'
                              : 'text-tennis-green-800 hover:text-tennis-green-600'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                        <div className="ml-4 mt-2 space-y-2">
                          {programsSubmenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm font-medium text-tennis-green-700 hover:text-tennis-green-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-medium text-sm uppercase tracking-wide transition-colors relative ${
                        isActiveLink(item.href)
                          ? 'text-tennis-green-600 font-bold bg-tennis-green-50 px-3 py-2 rounded-md'
                          : 'text-tennis-green-800 hover:text-tennis-green-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
