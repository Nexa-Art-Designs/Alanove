import React from 'react';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="liquid-pill-btn text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer"
      {...props}
    >
      <span className="relative z-10">Live Project</span>
    </button>
  );
};
