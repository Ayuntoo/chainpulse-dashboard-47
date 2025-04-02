
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectsTable from "@/components/ProjectsTable";
import { useStats } from "@/hooks/useStats";

export default function ProjectList() {
  const navigate = useNavigate();
  const { recentProjects, loading, refreshData } = useStats();
  
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
                <h1 className="text-2xl font-bold">Class List</h1>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">All Classes</h2>
              <p className="text-muted-foreground mb-6">
                Browse all classes with detailed information and performance metrics.
              </p>
              <ProjectsTable projects={recentProjects} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
