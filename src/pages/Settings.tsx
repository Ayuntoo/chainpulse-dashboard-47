
import { useState } from "react";
import { ArrowLeft, Save, Moon, Sun, Bell, User, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useStats } from "@/hooks/useStats";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { loading, refreshData } = useStats();
  
  const [theme, setTheme] = useState("dark");
  const [notifications, setNotifications] = useState({
    pricePriceAlerts: true,
    newsAlerts: true,
    securityAlerts: true,
    marketUpdates: false
  });
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
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
                <h1 className="text-2xl font-bold">Settings</h1>
              </div>
              <Button className="rounded-full" onClick={handleSaveSettings}>
                <Save size={16} />
                <span className="ml-1">Save Changes</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3 space-y-1">
                <div className="bg-primary/10 text-primary rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Globe size={18} />
                    <span className="font-medium">General</span>
                  </div>
                </div>
                <div className="rounded-xl p-3 hover:bg-muted transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User size={18} />
                    <span>Profile</span>
                  </div>
                </div>
                <div className="rounded-xl p-3 hover:bg-muted transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </div>
                </div>
                <div className="rounded-xl p-3 hover:bg-muted transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Shield size={18} />
                    <span>Security</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-9">
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in">
                  <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="border-b border-border pb-6">
                      <h3 className="text-md font-medium mb-4">Appearance</h3>
                      <div className="flex flex-wrap gap-3">
                        <button 
                          onClick={() => setTheme("light")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "light" ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
                        >
                          <Sun size={16} />
                          <span>Light</span>
                        </button>
                        <button 
                          onClick={() => setTheme("dark")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "dark" ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
                        >
                          <Moon size={16} />
                          <span>Dark</span>
                        </button>
                        <button 
                          onClick={() => setTheme("system")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme === "system" ? "border-primary bg-primary/10 text-primary" : "border-border"}`}
                        >
                          <div className="flex">
                            <Moon size={16} className="-mr-1" />
                            <Sun size={16} />
                          </div>
                          <span>System</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-b border-border pb-6">
                      <h3 className="text-md font-medium mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Price Alerts</div>
                            <div className="text-sm text-muted-foreground">Get notified about significant price movements</div>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary cursor-pointer"
                            onClick={() => setNotifications({...notifications, pricePriceAlerts: !notifications.pricePriceAlerts})}
                          >
                            <span className={`${notifications.pricePriceAlerts ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">News Alerts</div>
                            <div className="text-sm text-muted-foreground">Important news about your tracked cryptocurrencies</div>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary cursor-pointer"
                            onClick={() => setNotifications({...notifications, newsAlerts: !notifications.newsAlerts})}
                          >
                            <span className={`${notifications.newsAlerts ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Security Alerts</div>
                            <div className="text-sm text-muted-foreground">Get notified about security events</div>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary cursor-pointer"
                            onClick={() => setNotifications({...notifications, securityAlerts: !notifications.securityAlerts})}
                          >
                            <span className={`${notifications.securityAlerts ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Market Updates</div>
                            <div className="text-sm text-muted-foreground">Daily overview of market conditions</div>
                          </div>
                          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary cursor-pointer"
                            onClick={() => setNotifications({...notifications, marketUpdates: !notifications.marketUpdates})}
                          >
                            <span className={`${notifications.marketUpdates ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-background transition-transform`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-medium mb-4">Display Currency</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary">
                          <span>USD ($)</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border">
                          <span>EUR (€)</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border">
                          <span>GBP (£)</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border">
                          <span>JPY (¥)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
