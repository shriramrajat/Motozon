import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';
  
  const variants = {
    primary: 'bg-brand-primary text-brand-white hover:opacity-90 focus:ring-brand-primary',
    secondary: 'bg-brand-dark text-brand-white hover:opacity-90 focus:ring-brand-dark',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary',
    danger: 'bg-brand-red text-brand-white hover:opacity-90 focus:ring-brand-red'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
