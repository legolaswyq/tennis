'use client';

import React from 'react';
import HeroBanner from "@/components/HeroBanner";
import { siteConfig } from '@/config/site';

const contactCards = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2d225a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1569 3 12.5 4.34315 12.5 6C12.5 4.34315 13.8431 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" /></svg>
    ),
    title: 'OUR LOCATIONS',
    content: <a href="/locations" className="text-purple-900 hover:underline">View Our Locations</a>,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2d225a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.05a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.98.35 2 .59 3.05.72A2 2 0 0 1 22 16.92z" /></svg>
    ),
    title: "LET'S TALK",
    content: <span>Phone: <a href={`tel:${siteConfig.links.phone}`} className="text-purple-900 hover:underline">{siteConfig.links.phone}</a></span>,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#2d225a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" /></svg>
    ),
    title: 'EMAIL US',
    content: <a href={`mailto:${siteConfig.links.email}`} className="text-purple-900 hover:underline">{siteConfig.links.email}</a>,
  },
];

export default function Contact() {
  return (
    <>
      <HeroBanner
        title="Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/services/private-coaching.png"
      />
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                <div className="mb-4">{card.icon}</div>
                <div className="text-xl font-bold mb-2 text-gray-900" style={{ letterSpacing: 1 }}>{card.title}</div>
                <div className="text-lg text-purple-900 font-medium">{card.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}