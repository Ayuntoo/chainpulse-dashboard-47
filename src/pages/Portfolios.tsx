
import { useState } from "react";
import { ArrowLeft, GraduationCap, Plus, Trash2, Settings, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";
import { studentPrograms } from "@/lib/mockData";

export default function Portfolios() {
  const navigate = useNavigate();
  const { loading, refreshData } = useStats();
  const [hideDetails, setHideDetails] = useState(false);
  
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
                <h1 className="text-2xl font-bold">Academic Programs</h1>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => setHideDetails(!hideDetails)}
                >
                  {hideDetails ? <Eye size={16} /> : <EyeOff size={16} />}
                  <span className="ml-1">{hideDetails ? "Show" : "Hide"} Details</span>
                </Button>
                <Button className="rounded-full">
                  <Plus size={16} />
                  <span className="ml-1">New Program</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {studentPrograms.map((program, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm animate-fade-in">
                  <div className="flex justify-between items-center p-4 bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/20">
                        <GraduationCap size={18} className="text-primary" />
                      </div>
                      <h3 className="font-medium">{program.name}</h3>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <Settings size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-destructive">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-muted-foreground">Average Pass Rate</div>
                      <div className="flex items-center gap-2">
                        <span className={program.dailyChange >= 0 ? "text-chart-green" : "text-chart-red"}>
                          {program.dailyChange >= 0 ? "+" : ""}{program.dailyChange}%
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-semibold mb-6">
                      {hideDetails ? "••••••" : program.totalValue}
                    </div>
                    
                    <h4 className="text-sm font-medium mb-2">Subjects</h4>
                    <div className="space-y-2">
                      {program.assets.map((subject, assetIndex) => (
                        <div key={assetIndex} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                              <span className="text-xs">{subject.ticker.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{subject.name}</div>
                              <div className="text-xs text-muted-foreground">{subject.ticker}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">{hideDetails ? "••••••" : subject.value}</div>
                            <div className="text-xs text-muted-foreground">{subject.allocation}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-muted/30 rounded-2xl border border-dashed border-border flex items-center justify-center p-10 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-muted/70 flex items-center justify-center mb-3">
                    <Plus size={24} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium">Create New Program</h3>
                  <p className="text-sm text-muted-foreground mt-1">Track and manage different academic programs</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
