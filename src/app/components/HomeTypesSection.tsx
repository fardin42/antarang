'use client';

import Image from 'next/image';
import Section from '../components/Section';
import { FaWhatsapp } from 'react-icons/fa';

const HomeTypesSection = () => {
  const homeTypes = [
    {
      type: '2 BHK',
      description: 'Thoughtfully designed for comfort and functionality, perfect for modern living.',
      image: '/images/plans/2bhk-plan.webp',
      whatsappLink: 'https://wa.me/919071885588?text=Hello!%20I\'m%20interested%20in%20the%202%20BHK%20plan%20at%20Antrang.'
    },
    {
      type: '3 BHK',
      description: 'Spacious layouts crafted for growing families, offering ample room and privacy.',
      image: '/images/plans/3bhk-plan.webp',
      whatsappLink: 'https://wa.me/919071885588?text=Hello!%20I\'m%20interested%20in%20the%203%20BHK%20plan%20at%20Antrang.'
    },
    {
      type: '4 BHK',
      description: 'Expansive homes delivering ultimate luxury and space, designed for grand living.',
      image: '/images/plans/4bhk-plan.webp',
      whatsappLink: 'https://wa.me/919071885588?text=Hello!%20I\'m%20interested%20in%20the%204%20BHK%20plan%20at%20Antrang.'
    }
  ];

  return (
    <Section id="homes" className="bg-[var(--main-bg)] py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--heading-text)] font-montserrat mb-12">
        Your Ideal Home Awaits.
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {homeTypes.map((home, index) => (
          <div
            key={index}
            className="bg-[var(--warm-ivory)] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between items-center text-center"
          >
            <div className="planImage p-4 h-80">
              <Image
                src={home.image}
                alt={`${home.type} Floor Plan`}
                width={600}
                height={400}
                className="w-full !h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[var(--heading-text)] font-montserrat mb-3">
                {home.type} Apartments
              </h3>
              <p className="text-[var(--body-text)] font-open-sans mb-4">{home.description}</p>
              <a
                href={home.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex  items-center justify-center px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[var(--primary-accent)] text-[var(--primary-accent-text)] font-montserrat font-semibold text-base gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Get {home.type} Plan
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeTypesSection;
