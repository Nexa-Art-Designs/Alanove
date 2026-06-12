import React from 'react';

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="liquid-pill-btn text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
      {...props}
    >
      <span className="relative z-10">Contact Me</span>
    </button>
  );
};
