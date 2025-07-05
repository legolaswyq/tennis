'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import HeroBanner from "@/components/HeroBanner";

export default function About() {
  return (
    <>
      <HeroBanner
        title="About"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        image="/services/private-coaching.png"
      />
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/Josh.jpg"
                    alt="Coach Josh Mark teaching a young student"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
                  Meet Coach Josh Mark
                </h1>
                <p className="text-xl text-gray-800 mb-6">
                  Dedicated tennis professional with a passion for developing players of all ages and skill levels.
                </p>
                <Button
                  onClick={() => window.location.href = '/contact'}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coaching Philosophy</h2>
                <p className="text-gray-800 mb-4">
                  My approach to coaching combines technical expertise with a strong focus on player development. I believe in creating a positive and encouraging environment where players can grow both in their tennis skills and personal confidence.
                </p>
                <p className="text-gray-800">
                  Whether you&apos;re a beginner picking up a racquet for the first time or an advanced player looking to refine your game, I tailor my coaching methods to meet your individual needs and goals.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience & Expertise</h2>
                <ul className="space-y-4 text-gray-800">
                  <li>• Professional tennis coach with extensive experience in player development</li>
                  <li>• Specialized in junior development and adult coaching programs</li>
                  <li>• Proven track record of improving players&apos; technical skills and match performance</li>
                  <li>• Certified tennis professional with ongoing education in modern coaching techniques</li>
                  <li>• Based at Lynfield Tennis Club, serving the Auckland community</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Junior Development</h3>
                <p className="text-gray-800">
                  Comprehensive training programs for young players, focusing on fundamental skills, game strategy, and character development through sport.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adult Coaching</h3>
                <p className="text-gray-800">
                  Tailored sessions for adult players of all levels, whether you&apos;re starting fresh or looking to improve your existing game.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Holiday Camps</h3>
                <p className="text-gray-800">
                  Intensive training camps during school holidays, combining technical instruction with fun activities and match play.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-200">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Start Your Tennis Journey Today</h2>
              <p className="text-gray-800 md:text-xl">
                Whether you&apos;re looking to start playing tennis or want to take your game to the next level, I&apos;m here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  onClick={() => window.location.href = `mailto:${siteConfig.links.email}`}
                >
                  Email Me
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
    </>
  );
}