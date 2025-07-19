// components/ui/card.tsx
import { ReactNode } from "react";
import classNames from "classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={classNames("rounded-lg shadow-md bg-white dark:bg-gray-800", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={classNames("p-4", className)}>
      {children}
    </div>
  );
}