// app/dashboard/DashboardTabs.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs value={activeTab}>
      <TabsList className="space-x-4 p-4">
        <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>Overview</TabsTrigger>
        <TabsTrigger value="nutrition" onClick={() => setActiveTab("nutrition")}>Nutrition</TabsTrigger>
        <TabsTrigger value="assistant" onClick={() => setActiveTab("assistant")}>AI Assistant</TabsTrigger>
      </TabsList>

      {activeTab === "overview" && (
        <TabsContent value="overview">
          <Card><CardContent>Welcome to your dashboard overview.</CardContent></Card>
        </TabsContent>
      )}

      {activeTab === "nutrition" && (
        <TabsContent value="nutrition">
          <Card><CardContent>Nutrition tracking UI will go here.</CardContent></Card>
        </TabsContent>
      )}

      {activeTab === "assistant" && (
        <TabsContent value="assistant">
          <Card><CardContent>Chatbot assistant integration coming soon.</CardContent></Card>
        </TabsContent>
      )}
    </Tabs>
  );
}