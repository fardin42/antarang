'use client';

import Image from 'next/image';
import Section from '../components/Section';

const LocationSection = () => {
  const locationDetails = {
    education: [
      'KJ Mehta High School',
      'St. Xavier High School',
      'JDC Bytco College',
      'RNC Arts, JDB Commerce College',
      'Gosavi Polytechnic Diploma College'
    ],
    healthcare: [
      'Magnum Hospital',
      'Purohit Hotel',
      'Passport Office',
      'Bytco Police Station'
    ],
    connectivity: [
      'Shri Sai Baba Temple',
      'Gurudwara',
      'Bytco College Ground',
      'Easy access to Nashik - Pune Highway',
      "Pune and Shirdi just a stone's throw away"
    ]
  };

  return (
    <Section id="location" className="bg-gradient-to-br from-[var(--warm-ivory)] to-[var(--main-bg)]">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--heading-text)] font-montserrat mb-12">
      Strategically Located for Unmatched Convenience.
    </h2>
  
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-4">
        <Image
          src="/images/map.png"
          alt="Map of Nashik Road with landmarks"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
       
      </div>
  
      <div>
        <p className="text-lg text-[var(--body-text)] font-open-sans leading-relaxed mb-6">
          Nestled in Nashik Road, Antrang offers unparalleled connectivity and proximity to essential services and attractions.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--heading-text)] font-montserrat mb-2">Education:</h3>
            <ul className="text-[var(--body-text)] font-open-sans list-disc list-inside space-y-1">
              {locationDetails.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-[var(--heading-text)] font-montserrat mb-2">Healthcare & Essentials:</h3>
            <ul className="text-[var(--body-text)] font-open-sans list-disc list-inside space-y-1">
              {locationDetails.healthcare.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
  
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold text-[var(--heading-text)] font-montserrat mb-2">Connectivity:</h3>
            <ul className="text-[var(--body-text)] font-open-sans list-disc list-inside space-y-1">
              {locationDetails.connectivity.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
  
  );
};

export default LocationSection;