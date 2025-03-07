'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/config/site';

export default function Services() {
  const services = [
    {
      title: 'SQUAD Coaching',
      description: 'Group training sessions designed to improve skills through structured drills and game play. Our SQUAD program focuses on developing fundamental tennis techniques, tactical awareness, and match play strategies in a fun, social environment.',
      icon: '/icons/squad.svg',
      details: [
        'Progressive skill development',
        'Match play opportunities',
        'Team building activities',
        'Regular progress assessments'
      ]
    },
    {
      title: 'Private Coaching',
      description: 'One-on-one sessions tailored to your specific needs and skill level. Private coaching provides focused attention and personalized feedback to help you achieve your tennis goals faster.',
      icon: '/icons/private.svg',
      details: [
        'Customized training plans',
        'Video analysis available',
        'Flexible scheduling',
        'Goal-oriented approach'
      ]
    },
    {
      title: 'Adult Coaching',
      description: 'Specialized programs for adults looking to start or improve their tennis game. Whether you\'re a beginner or returning to the sport, our adult coaching sessions provide a supportive environment to develop your skills.',
      icon: '/icons/adult.svg',
      details: [
        'Beginner to advanced levels',
        'Cardio tennis options',
        'Social play opportunities',
        'Evening sessions available'
      ]
    },
    {
      title: 'Holiday Camps',
      description: 'Fun and intensive training camps during school holidays for junior players. Our camps combine technical instruction with exciting games and activities to keep young players engaged while improving their tennis skills.',
      icon: '/icons/holiday.svg',
      details: [
        'Full day programs',
        'Multi-sport activities',
        'Skill challenges',
        'Tournament preparation'
      ]
    },
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
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-[800px] mx-auto">
              Discover our comprehensive range of tennis coaching services designed to help players of all ages and skill levels improve their game.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={service.title} className="p-8">
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}}`}>
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
                        alt={`${service.title} at Josh Tennis Training`}
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="text-gray-800 md:text-xl max-w-[600px]">
              Contact us today to discuss your tennis goals and find the perfect program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                onClick={() => window.location.href = `mailto:${siteConfig.links.email}`}
              >
                Email Us
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.location.href = `tel:${siteConfig.links.phone}`}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}