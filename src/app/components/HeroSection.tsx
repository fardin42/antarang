'use client';

import { colors, fonts } from '../utils/theme';
import CTAButton from './CTAButton';
import Image from 'next/image';

interface HeroSectionProps {
  onGetDetailsClick: () => void;
}

const HeroSection = ({ onGetDetailsClick }: HeroSectionProps) => (
  <section
    id="hero"
    className="relative h-screen flex items-center justify-center text-center overflow-hidden"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <Image
        src="/images/arial-view.webp"
        alt="Aerial view of property"
        fill
        priority
        loading='lazy'

        quality={85}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className={`absolute inset-0 bg-[#2F2F2F]/70 opacity-70`}></div>
    </div>

    {/* Logo */}
    <div className="absolute top-4 left-1/2 translate-x-[-50%] z-20 bg-amber-50 py-4 px-8 rounded-2xl">
      <Image
        src="/images/antarang_logo.webp"
        alt="Antrang Logo"
        width={180}
        height={60}
        className="animate-fade-in-up"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-0">
      <h1 className={`text-3xl md:text-6xl font-bold ${fonts.heading} ${colors.primaryAccentText} leading-tight mb-4 animate-fade-in-up`}>
        Antrang: Your Status. Your Sanctuary. Your Nashik.
      </h1>
      <p className={`text-lg md:text-xl ${fonts.body} ${colors.primaryAccentText} mb-8 animate-fade-in-up delay-200`}>
        Experience visionary living and retail spaces, crafted with heart in Nashik Road.
      </p>
      <CTAButton
        text="Get Details"
        onClick={onGetDetailsClick}
        className="animate-fade-in-up delay-400 mx-auto"
        href="#"
      />
      <p className={`mt-6 text-sm md:text-base ${fonts.body} ${colors.primaryAccentText} animate-fade-in-up delay-600`}>
        By Shrinath Realty: 45+ Years of Trust & Excellence.
      </p>
      <p className={`mt-2 text-sm md:text-base ${fonts.body} ${colors.primaryAccentText} animate-fade-in-up delay-600`}>
        Contact: 9071 88 55 88
      </p>
    </div>
  </section>
);

export default HeroSection;