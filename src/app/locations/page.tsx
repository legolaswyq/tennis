"use client";
import HeroBanner from "@/components/HeroBanner";
import { useState } from "react";

const clubs = [
  {
    id: "lynfield",
    name: "Lynfield Tennis Club",
    address: "Margaret Griffin Park, 90 The Avenue, Lynfield, Auckland 1042",
    description: "A vibrant club with excellent facilities and a welcoming community. Home to a range of coaching programs for all ages.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5791227653837!2d174.71661091547592!3d-36.92423797992247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d463e4e7644e9%3A0x4a1662fd36c09b41!2sLynfield%20Tennis%20Club!5e0!3m2!1sen!2snz!4v1629901234567!5m2!1sen!2snz"
  },
  {
    id: "blockhouse",
    name: "Blockhouse Bay Tennis Club",
    address: "33 Rathlin Street, Blockhouse Bay, Auckland 0600",
    description: "A friendly club offering coaching, social play, and competitive tennis for all levels. Great courts and a supportive environment.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.123456789!2d174.705123456!3d-36.926123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e4e7644e9%3A0x4a1662fd36c09b41!2sBlockhouse%20Bay%20Tennis%20Club!5e0!3m2!1sen!2snz!4v1629901234567!5m2!1sen!2snz"
  }
];

export default function LocationsPage() {
  const [selectedClub, setSelectedClub] = useState(clubs[0].id);
  const club = clubs.find((c) => c.id === selectedClub);

  return (
    <>
      <HeroBanner
        title="Locations"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        image="/services/squad-coaching.png"
      />
      <div className="bg-white w-full">
        <div className="max-w-4xl mx-auto pt-12 px-4 pb-0">
          <label htmlFor="club-select" className="block text-lg font-semibold mb-2 text-tennis-green-800">Select a Club:</label>
          <select
            id="club-select"
            value={selectedClub}
            onChange={e => setSelectedClub(e.target.value)}
            className="w-full p-3 rounded-lg border border-tennis-green-300 mb-8 focus:outline-none focus:ring-2 focus:ring-tennis-green-500 text-black"
          >
            {clubs.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <div className="bg-white rounded-lg shadow p-6 w-full">
            <h2 className="text-2xl font-bold text-tennis-green-800 mb-2">{club?.name}</h2>
            <p className="text-gray-700 mb-2">{club?.address}</p>
            <p className="text-gray-600 mb-4">{club?.description}</p>
            <div className="rounded-lg overflow-hidden shadow-md w-full">
              <iframe
                src={club?.map}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 