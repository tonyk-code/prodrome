import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-tight";

  const variants = {
    primary:
      "bg-[#0066cc] hover:bg-[#0055b3] text-white rounded-full font-semibold",
    secondary:
      "bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] rounded-full font-semibold",
    ghost: "bg-transparent hover:bg-[#f5f5f7] text-[#0066cc] rounded-md",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-[17px]",
    lg: "px-8 py-3.5 text-[19px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
