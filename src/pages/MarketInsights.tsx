
import { useState } from "react";
import { ArrowLeft, BarChart4, LineChart, PieChart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";

export default function MarketInsights() {
  const navigate = useNavigate();
  const { loading, stats, refreshData } = useStats();
  
  // Format large numbers for display
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    return `$${value.toFixed(2)}`;
  };
  
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
                <h1 className="text-2xl font-bold">Market Insights</h1>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
              <p className="text-muted-foreground mb-6">
                In-depth analysis of current market conditions and trends.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-200/20">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Total Market Cap</div>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-purple-500/20">
                      <BarChart4 size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">{formatCurrency(stats.marketCap)}</div>
                  <div className="flex items-center text-xs">
                    <span className={`flex items-center ${stats.dailyChange >= 0 ? "text-chart-green" : "text-chart-red"}`}>
                      {stats.dailyChange >= 0 ? "+" : ""}{stats.dailyChange}%
                    </span>
                    <span className="text-muted-foreground ml-2">24h</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-200/20">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">24h Volume</div>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/20">
                      <LineChart size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">{formatCurrency(stats.tradingVolume)}</div>
                  <div className="flex items-center text-xs">
                    <span className="text-chart-green flex items-center">
                      +12.4%
                    </span>
                    <span className="text-muted-foreground ml-2">vs average</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/5 border border-green-200/20">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">BTC Dominance</div>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500/20">
                      <PieChart size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">53.2%</div>
                  <div className="flex items-center text-xs">
                    <span className="text-chart-green flex items-center">
                      +0.8%
                    </span>
                    <span className="text-muted-foreground ml-2">7d</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium mb-4">Latest Market Reports</h3>
                <div className="space-y-4">
                  {[
                    "Bitcoin Halving Impact Analysis",
                    "Layer 1 Performance Overview",
                    "DeFi Market Trends 2023",
                    "NFT Market Recovery Signs"
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors cursor-pointer">
                      <span className="font-medium">{report}</span>
                      <ArrowUpRight size={16} className="text-muted-foreground" />
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
