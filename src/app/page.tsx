'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteConfig } from '@/config/site';

export default function Home() {
  const services = [
    {
      title: 'SQUAD Coaching',
      description: 'Group training sessions designed to improve skills through structured drills and game play.',
      icon: '/icons/squad.svg',
    },
    {
      title: 'Private Coaching',
      description: 'One-on-one sessions tailored to your specific needs and skill level.',
      icon: '/icons/private.svg',
    },
    {
      title: 'Adult Coaching',
      description: 'Specialized programs for adults looking to start or improve their tennis game.',
      icon: '/icons/adult.svg',
    },
    {
      title: 'Holiday Camps',
      description: 'Fun and intensive training camps during school holidays for junior players.',
      icon: '/icons/holiday.svg',
    },
    {
      title: 'Racquet Stringing',
      description: 'Professional racquet stringing service to keep your equipment in top condition.',
      icon: '/icons/tennis-racquet.svg',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-50 relative">
        <div className="absolute inset-0 bg-[url('/LTC logo.jpg')] opacity-10 bg-center bg-cover"></div>
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
                Welcome to {siteConfig.name}
              </h1>
              <p className="text-xl text-gray-800 mb-6">
                {siteConfig.description}
              </p>
              <div className="space-x-4">
                <Button
                  onClick={() => window.location.href = '/services'}
                >
                  View Services
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/Josh.jpg"
                  alt="Coach Josh Mark"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-100">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-800">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Training Sessions Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tennis-green-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Past Training Sessions</h2>
            <p className="text-gray-800 md:text-xl max-w-[800px] text-center mb-8">
              Watch highlights from our previous training sessions and see what you can expect at Josh Tennis Training.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col space-y-4">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/mOlf4pcvUxM"
                    title="Tennis Training: Serve Technique"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SQUAD Training Highlights</h3>
                <p className="text-gray-700">See our group training sessions in action and the progress our players make.</p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/JslT4-g_Ivo"
                    title="Tennis Training: Forehand Technique"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Private Coaching Session</h3>
                <p className="text-gray-700">Watch how our one-on-one coaching sessions help players achieve their goals.</p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/TUyF142caS8"
                    title="Tennis Training: Backhand Technique"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Holiday Camp Activities</h3>
                <p className="text-gray-700">Experience the fun and learning at our school holiday tennis camps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
