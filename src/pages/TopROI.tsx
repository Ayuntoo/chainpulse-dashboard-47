
import { useState } from "react";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";
import { topPerformingStudents } from "@/lib/mockData";

export default function TopROI() {
  const navigate = useNavigate();
  const { loading, refreshData } = useStats();
  
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
                <h1 className="text-2xl font-bold">Top Performing Subjects</h1>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Best Academic Performance</h2>
              <p className="text-muted-foreground mb-6">
                Subjects with the highest pass rates over the current academic year.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Subject</th>
                      <th className="text-left py-3 px-4">Code</th>
                      <th className="text-left py-3 px-4">Pass Rate</th>
                      <th className="text-left py-3 px-4">Term</th>
                      <th className="text-left py-3 px-4">Student Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformingStudents.map((subject, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 font-medium">{subject.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{subject.ticker}</td>
                        <td className="py-3 px-4 text-chart-green font-medium">{subject.roi}</td>
                        <td className="py-3 px-4 text-muted-foreground">{subject.period}</td>
                        <td className="py-3 px-4">{subject.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
