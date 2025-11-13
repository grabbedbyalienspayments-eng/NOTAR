import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:border-gold-500 hover:shadow-lg transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}