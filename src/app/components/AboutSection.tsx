'use client';

import Image from 'next/image';
import { colors, fonts } from '../utils/theme';
import CTAButton from './CTAButton';
import Section from './Section';

const AboutSection = () => (
  <Section id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className={`text-3xl md:text-4xl font-bold ${colors.headingText} ${fonts.heading} mb-6`}>
          Built on a Foundation of Trust.
        </h2>
        <p className={`text-lg ${colors.bodyText} ${fonts.body} leading-relaxed mb-4`}>
          With over 45 years in construction, Shrinath Realty (formerly Trio Builders) has built a legacy of unwavering
          commitment and high-quality projects across industrial, institutional, public, commercial, and administrative
          sectors. We now bring that same dedication to Antrang, a marvel designed for Nashik.
        </p>
        <p className={`text-lg ${colors.bodyText} ${fonts.body} leading-relaxed mb-8`}>
          Time-bound completion, superior quality, and visionary design are the cornerstones of our rapid growth.
        </p>
        <CTAButton text="Learn More About Shrinath Realty" href="#contact" />
      </div>
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/images/trust.png"
          alt="Symbolic image of trust and quality in construction"
          width={700}
          height={500}
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className={`absolute inset-0 bg-[#2F2F2F]/20 to-transparent`}></div>
      </div>
    </div>
  </Section>
);

export default AboutSection;