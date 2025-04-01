
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";

export default function TopROI() {
  const navigate = useNavigate();
  const { loading, refreshData } = useStats();
  
  // Sample top ROI projects
  const topROIProjects = [
    { name: "Ethereum", ticker: "ETH", roi: "428%", period: "1 Year", price: "$3,482.15" },
    { name: "Solana", ticker: "SOL", roi: "392%", period: "1 Year", price: "$149.73" },
    { name: "Cosmos", ticker: "ATOM", roi: "246%", period: "1 Year", price: "$8.91" },
    { name: "Avalanche", ticker: "AVAX", roi: "187%", period: "1 Year", price: "$34.25" },
    { name: "Polkadot", ticker: "DOT", roi: "112%", period: "1 Year", price: "$7.61" },
  ];
  
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
                <h1 className="text-2xl font-bold">Top ROI</h1>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Best Performing Projects</h2>
              <p className="text-muted-foreground mb-6">
                Projects with the highest return on investment over the past year.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Project</th>
                      <th className="text-left py-3 px-4">Ticker</th>
                      <th className="text-left py-3 px-4">ROI</th>
                      <th className="text-left py-3 px-4">Period</th>
                      <th className="text-left py-3 px-4">Current Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topROIProjects.map((project, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 font-medium">{project.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{project.ticker}</td>
                        <td className="py-3 px-4 text-chart-green font-medium">{project.roi}</td>
                        <td className="py-3 px-4 text-muted-foreground">{project.period}</td>
                        <td className="py-3 px-4">{project.price}</td>
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
