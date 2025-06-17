'use client';

import Image from 'next/image';
import { colors, fonts } from '../utils/theme';
import Section from './Section';

const amenities = [
  {
    name: 'Kids Play Area',
    image: '/images/amenities/Kids-play-area.webp',
    description: 'Safe and engaging play spaces for children'
  },
  {
    name: 'Garden',
    image: '/images/amenities/garden.webp',
    description: 'Beautifully landscaped green spaces'
  },
  {
    name: 'Gym',
    image: '/images/amenities/gym.webp',
    description: 'Modern fitness equipment for health enthusiasts'
  },
  {
    name: 'Indoor Games',
    image: '/images/amenities/indoor-games.webp',
    description: 'Entertainment zone for all ages'
  },
  {
    name: 'Jogging Path',
    image: '/images/amenities/jogging-path.webp',
    description: 'Dedicated track for fitness activities'
  },
  {
    name: 'Temple',
    image: '/images/amenities/temple.webp',
    description: 'Peaceful space for spiritual connection'
  }
];

const AmenitiesSection = () => (
  <Section id="amenities" className="bg-gradient-to-br from-[#F7F3ED] to-[#E8D9C1]">
    <h2 className={`text-3xl md:text-4xl font-bold text-center ${colors.headingText} ${fonts.heading} mb-12`}>
      Experience A Life Rich in Every Dimension.
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-48 w-full">
            <Image
              src={amenity.image}
              alt={amenity.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className={`text-xl font-semibold ${colors.headingText} ${fonts.heading} mb-2`}>{amenity.name}</h3>
            <p className={`text-sm ${colors.bodyText} ${fonts.body}`}>{amenity.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default AmenitiesSection;