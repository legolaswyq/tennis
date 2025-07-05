'use client';

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import HeroBanner from "@/components/HeroBanner";

export default function Services() {
  const services = [
    {
      title: 'Racquet Stringing',
      description: 'Professional racquet stringing service to keep your equipment in top condition. We use high-quality strings and precise tension settings to optimize your racquet\'s performance.',
      icon: '/icons/tennis-racquet.svg',
      details: [
        '24-hour turnaround',
        'Various string options',
        'Custom tension settings',
        'Equipment consultation'
      ]
    },
  ];

  return (
    <>
      <HeroBanner
        title="Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image="/services/racquet-stringing.png"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {services.map((service) => (
                <Card key={service.title} className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                      <p className="text-gray-800 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center text-gray-800">
                            <span className="mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={`/services/${service.title.toLowerCase().replace(/ /g, '-')}.png`}
                          alt={`${service.title} at 365 Tennis`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}