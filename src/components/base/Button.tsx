import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-inter font-medium transition-all duration-300 cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-gold-500 hover:shadow-lg',
    secondary: 'bg-gold-500 text-white hover:bg-primary-500 hover:shadow-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}