'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6 text-gray-800">
                <p className="flex items-center text-xl">
                  <span className="font-medium mr-3">Email:</span>
                  <a href={`mailto:${siteConfig.links.email}`} className="text-blue-600 hover:text-blue-800">
                    {siteConfig.links.email}
                  </a>
                </p>
                <p className="flex items-center text-xl">
                  <span className="font-medium mr-3">Phone:</span>
                  <a href={`tel:${siteConfig.links.phone}`} className="text-blue-600 hover:text-blue-800">
                    {siteConfig.links.phone}
                  </a>
                </p>
                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
                  <div className="text-lg space-y-2 mb-6">
                    <p>Lynfield Tennis Club</p>
                    <p>Margaret Griffin Park</p>
                    <p>90 The Avenue</p>
                    <p>Lynfield, Auckland 1042</p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5791227653837!2d174.71661091547592!3d-36.92423797992247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d463e4e7644e9%3A0x4a1662fd36c09b41!2sLynfield%20Tennis%20Club!5e0!3m2!1sen!2snz!4v1629901234567!5m2!1sen!2snz"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}