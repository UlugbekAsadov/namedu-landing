import React from 'react';
interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}
const CardWrapper: React.FC<CardWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export { CardWrapper };
