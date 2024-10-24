import { cn } from "@/Lib/Utils";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode; // Accepting an icon as a ReactNode (can be any React element)
  position?: "left" | "right"; // Define position of the icon, either left or right
  otherClasses?: string;
}

function Button({
  icon,
  position = "left",
  children,
  className,
  otherClasses,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full w-full p-[1px] focus:outline-none ",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default Button;
