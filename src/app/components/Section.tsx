'use client';

import { ReactNode } from 'react';
import { colors } from '../utils/theme';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${colors.mainBg} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export default Section;