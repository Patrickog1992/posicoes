import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pulse';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 shadow-red-500/30",
    pulse: "bg-green-600 text-white hover:bg-green-700 animate-pulse shadow-green-500/30",
    secondary: "bg-white text-gray-800 border-2 border-gray-200 hover:border-red-500 hover:text-red-600",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};