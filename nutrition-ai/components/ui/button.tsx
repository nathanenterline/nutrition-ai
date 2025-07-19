// components/ui/button.tsx
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded font-medium",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" && "border border-gray-400 text-gray-700 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}