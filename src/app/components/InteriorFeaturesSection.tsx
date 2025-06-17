'use client';

import Image from 'next/image';
import Section from '../components/Section';

const InteriorFeaturesSection = () => {
  const interiorFeatures = [
    {
      name: 'Living Room',
      image: '/images/flat-view/hall.webp',
      description: 'Where every corner invites connection and comfort.'
    },
    {
      name: 'Master Bedroom',
      image: '/images/flat-view/bedroom.webp',
      description: 'Your private retreat, designed for serenity.'
    },
    {
      name: 'Kitchen',
      image: '/images/flat-view/dining.webp',
      description: 'The perfect recipe for lifelong memories.'
    },
    {
      name: 'Balcony',
      image: '/images/flat-view/balcony.webp',
      description: 'A view that grows on you, connecting you to the outside.'
    },
    {
      name: 'Bathroom',
      image: '/images/flat-view/bathroom.webp',
      description: 'Flawless design and luxurious fittings for your daily escape.'
    }
  ];

  const specifications = [
    'Vitrified tile flooring throughout',
    'Granite kitchen with RO provision',
    'Jaquar or equivalent bathroom fittings',
    'Video door phone for security',
    'UPVC soundproof windows with mosquito nets',
    'Inverter backup provision'
  ];

  return (
<Section id="interiors" className="bg-[var(--main-bg)]">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--heading-text)] font-montserrat mb-12">
    Interiors Crafted for Life&apos;s Best Moments.
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {interiorFeatures.map((feature, index) => (
      <div
        key={index}
        className="relative rounded-xl overflow-hidden shadow-md group"
      >
        <div className="flatImage h-full">
        <Image
          src={feature.image}
          alt={feature.name}
          width={600}
          height={400}
          className="w-full object-cover transition-transform duration-300 !h-full group-hover:scale-105"
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <h3 className="text-xl font-semibold text-[var(--warm-ivory)] font-montserrat">
            {feature.name}
          </h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--deep-charcoal-60)] rounded-xl">
          <p className="text-[var(--warm-ivory)] text-center px-4 text-lg">
            {feature.description}
          </p>
        </div>
      </div>
    ))}

    {/* Features Summary Card */}
    <div className="bg-[var(--warm-ivory)] rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center">
      <h3 className="text-xl font-semibold text-[var(--heading-text)] font-montserrat mb-4">
        Premium Specifications:
      </h3>
      <ul className="text-[var(--body-text)] font-open-sans text-left space-y-2">
        {specifications.map((spec, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {spec}
          </li>
        ))}
      </ul>
    </div>
  </div>
</Section>

  );
};

export default InteriorFeaturesSection;