// app/page.tsx
"use client";

import DashboardTabs from "./dashboard/DashboardTabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <DashboardTabs />
    </main>
  );
}