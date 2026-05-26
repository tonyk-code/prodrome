import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={`bg-white border border-[#e8e8ed] rounded-[18px] p-6 transition-transform duration-300 ${
        hoverEffect ? 'hover:scale-[1.02] hover:border-[#d2d2d7]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};