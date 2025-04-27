import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  colorType: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ children, colorType, type, onClick }: ButtonProps) => {
  const baseClass = "text-white px-4 py-2 rounded";

  return (
    <button
      type={type}
      className={`${baseClass} ${colorType}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
