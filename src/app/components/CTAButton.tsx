'use client';

import { colors, fonts } from '../utils/theme';

interface CTAButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href: string;
  target?: string;
  className?: string;
  showWhatsAppIcon?: boolean;
}

const CTAButton = ({ 
  text, 
  onClick, 
  href, 
  target = '_self', 
  className = '', 
  showWhatsAppIcon = false 
}: CTAButtonProps) => (
  <a
    href={href}
    onClick={onClick}
    target={target}
    className={`inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${colors.primaryAccentBg} ${colors.primaryAccentText} ${fonts.heading} font-semibold text-lg md:text-xl ${className}`}
  >
    {showWhatsAppIcon && (
      <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2 fill-current">
        <path d="M12.04 2C7.02 2 2.98 6.04 2.98 11.06c0 1.7.48 3.32 1.35 4.74L2 22l5.06-1.35c1.39.77 2.97 1.22 4.49 1.22 5.02 0 9.06-4.04 9.06-9.06S17.06 2 12.04 2zm3.62 14.54c-.17.27-.61.42-.87.42-.25 0-.44-.06-.63-.12-.32-.1-.85-.34-1.61-.79-.87-.49-1.44-.94-2.05-1.55-.49-.49-.93-.97-1.28-1.49-.35-.52-.5-1.07-.4-1.6.09-.53.37-.87.64-1.03.14-.08.35-.14.56-.14.2 0 .34.02.47.05.15.04.35.09.52.42.17.33.58 1.45.63 1.56.05.11.09.2.09.34.02.13-.03.26-.06.35-.08.2-.18.33-.29.47-.13.14-.29.28-.48.43-.18.15-.38.25-.49.33-.11.09-.2.19-.28.29-.08.1-.14.2-.18.28-.04.09-.07.16-.09.25-.02.08-.02.17 0 .25.02.09.06.18.1.25.04.07.11.16.2.26.09.1.18.2.3.31.11.11.23.23.36.37.13.14.28.28.44.42.16.14.33.28.51.42.18.14.37.26.56.38.19.12.38.2.59.26.2.06.42.09.64.09.23 0 .44-.04.62-.12.18-.08.35-.19.49-.31.14-.12.28-.29.4-.49.12-.2.2-.38.28-.52.08-.14.13-.23.16-.3.03-.07.03-.1.02-.13-.01-.03-.04-.06-.1-.13-.06-.07-.15-.17-.26-.32z"/>
      </svg>
    )}
    {text}
  </a>
);

export default CTAButton;