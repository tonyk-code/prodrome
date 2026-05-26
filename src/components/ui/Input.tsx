import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className = "",
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className="text-xs font-semibold text-[#86868b] tracking-tight"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-[#f5f5f7] border border-transparent rounded-xl text-[17px] text-[#1d1d1f] transition-all duration-200 placeholder-[#86868b]/60 focus:bg-white focus:border-[#0066cc] focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
};
