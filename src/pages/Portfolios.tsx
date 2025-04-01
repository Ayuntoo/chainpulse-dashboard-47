
import { useState } from "react";
import { ArrowLeft, Briefcase, Plus, Trash2, Settings, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";

export default function Portfolios() {
  const navigate = useNavigate();
  const { loading, refreshData } = useStats();
  const [hideBalances, setHideBalances] = useState(false);
  
  // Sample portfolio data
  const portfolios = [
    { 
      name: "Main Portfolio", 
      totalValue: "$45,320.50", 
      dailyChange: 2.4,
      assets: [
        { name: "Bitcoin", ticker: "BTC", allocation: "45%", value: "$20,394.23" },
        { name: "Ethereum", ticker: "ETH", allocation: "30%", value: "$13,596.15" },
        { name: "Solana", ticker: "SOL", allocation: "15%", value: "$6,798.08" },
        { name: "Cardano", ticker: "ADA", allocation: "10%", value: "$4,532.05" }
      ]
    },
    { 
      name: "DeFi Investments", 
      totalValue: "$12,450.00", 
      dailyChange: -1.2,
      assets: [
        { name: "Uniswap", ticker: "UNI", allocation: "25%", value: "$3,112.50" },
        { name: "Aave", ticker: "AAVE", allocation: "35%", value: "$4,357.50" },
        { name: "Compound", ticker: "COMP", allocation: "20%", value: "$2,490.00" },
        { name: "Maker", ticker: "MKR", allocation: "20%", value: "$2,490.00" }
      ]
    }
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
                <h1 className="text-2xl font-bold">Portfolios</h1>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => setHideBalances(!hideBalances)}
                >
                  {hideBalances ? <Eye size={16} /> : <EyeOff size={16} />}
                  <span className="ml-1">{hideBalances ? "Show" : "Hide"} Balances</span>
                </Button>
                <Button className="rounded-full">
                  <Plus size={16} />
                  <span className="ml-1">New Portfolio</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {portfolios.map((portfolio, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm animate-fade-in">
                  <div className="flex justify-between items-center p-4 bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/20">
                        <Briefcase size={18} className="text-primary" />
                      </div>
                      <h3 className="font-medium">{portfolio.name}</h3>
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
                      <div className="text-sm text-muted-foreground">Total Value</div>
                      <div className="flex items-center gap-2">
                        <span className={portfolio.dailyChange >= 0 ? "text-chart-green" : "text-chart-red"}>
                          {portfolio.dailyChange >= 0 ? "+" : ""}{portfolio.dailyChange}%
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-semibold mb-6">
                      {hideBalances ? "••••••" : portfolio.totalValue}
                    </div>
                    
                    <h4 className="text-sm font-medium mb-2">Assets</h4>
                    <div className="space-y-2">
                      {portfolio.assets.map((asset, assetIndex) => (
                        <div key={assetIndex} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                              <span className="text-xs">{asset.ticker.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">{asset.name}</div>
                              <div className="text-xs text-muted-foreground">{asset.ticker}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">{hideBalances ? "••••••" : asset.value}</div>
                            <div className="text-xs text-muted-foreground">{asset.allocation}</div>
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
                  <h3 className="text-lg font-medium">Create New Portfolio</h3>
                  <p className="text-sm text-muted-foreground mt-1">Track and manage your crypto investments</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
