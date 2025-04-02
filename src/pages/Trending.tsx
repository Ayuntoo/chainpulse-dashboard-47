
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TrendingSection from "@/components/TrendingSection";
import { useStats } from "@/hooks/useStats";

export default function Trending() {
  const navigate = useNavigate();
  const { trending, loading, refreshData } = useStats();
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header onRefresh={refreshData} isLoading={loading} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-screen-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="rounded-full">
                  <ArrowLeft size={20} />
                </Button>
                <h1 className="text-2xl font-bold">Exam Statistics</h1>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Subject Performance</h2>
              <p className="text-muted-foreground mb-6">
                Subjects with the highest average scores in the current academic term.
              </p>
              <TrendingSection tokens={trending} />
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Academic Departments</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Sciences", "Humanities", "Languages", "Mathematics", "Arts", "Physical Education"].map((category) => (
                    <div key={category} className="bg-muted rounded-xl p-4 hover:bg-muted/80 transition-colors">
                      <h4 className="font-medium">{category}</h4>
                      <p className="text-sm text-muted-foreground mt-1">Academic department</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
