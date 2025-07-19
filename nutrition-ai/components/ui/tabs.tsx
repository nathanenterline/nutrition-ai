// components/ui/tabs.tsx
import { ReactNode } from "react";
import classNames from "classnames";

type TabsProps = {
  value: string;
  children: ReactNode;
};

export function Tabs({ value, children }: TabsProps) {
  return <div>{children}</div>;
}

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

export function TabsList({ children, className }: TabsListProps) {
  return <div className={classNames("flex", className)}>{children}</div>;
}

type TabsTriggerProps = {
  value: string;
  onClick: () => void;
  children: ReactNode;
};

export function TabsTrigger({ onClick, children }: TabsTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

export function TabsContent({ children }: TabsContentProps) {
  return <div className="mt-4">{children}</div>;
}