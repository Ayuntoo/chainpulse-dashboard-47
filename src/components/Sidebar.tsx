
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  TrendingUp, 
  LineChart, 
  List, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  BarChart4,
  Award,
  Users
} from "lucide-react";

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ 
  icon: Icon, 
  label, 
  active = false, 
  collapsed = false,
  onClick 
}: SidebarLinkProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-full w-full transition-all duration-200 active:animate-button-press",
        active 
          ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" 
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        collapsed && "justify-center"
      )}
    >
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </button>
  );
};

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const getActivePath = () => {
    const path = location.pathname;
    if (path === "/") return "Dashboard";
    if (path === "/projects") return "Class List";
    if (path === "/top-roi") return "Top Performers";
    if (path === "/trending") return "Exam Statistics";
    if (path === "/market-insights") return "School Insights";
    if (path === "/portfolios") return "Academic Programs";
    if (path === "/social-trends") return "School Activities";
    if (path === "/settings") return "Settings";
    return "Dashboard";
  };

  const activeLink = getActivePath();

  return (
    <div
      className={cn(
        "relative h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-56",
        className
      )}
    >
      <div className="p-4">
        <div className={cn(
          "flex items-center gap-2",
          collapsed && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-primary/90 flex items-center justify-center">
            <BarChart4 size={18} className="text-primary-foreground" />
          </div>
          {!collapsed && (
            <h1 className="font-semibold text-xl text-sidebar-foreground">Super<span className="text-primary">Agent</span></h1>
          )}
        </div>
      </div>

      <div className="absolute top-4 -right-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center h-6 w-6 rounded-full bg-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent transition-colors active:animate-button-press"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <div className="px-2 mt-6 space-y-6">
        <div className="space-y-1">
          <SidebarLink 
            icon={LayoutDashboard} 
            label="Dashboard" 
            active={activeLink === "Dashboard"}
            collapsed={collapsed}
            onClick={() => navigate("/")}
          />
          <SidebarLink 
            icon={List} 
            label="Class List" 
            active={activeLink === "Class List"}
            collapsed={collapsed}
            onClick={() => navigate("/projects")}
          />
          <SidebarLink 
            icon={Award} 
            label="Top Performers" 
            active={activeLink === "Top Performers"}
            collapsed={collapsed}
            onClick={() => navigate("/top-roi")}
          />
          <SidebarLink 
            icon={TrendingUp} 
            label="Exam Statistics" 
            active={activeLink === "Exam Statistics"}
            collapsed={collapsed}
            onClick={() => navigate("/trending")}
          />
        </div>

        <div className="pt-4 border-t border-sidebar-border">
          <p className={cn(
            "text-xs uppercase text-sidebar-foreground/60 mb-2 px-3",
            collapsed && "text-center"
          )}>
            {collapsed ? "More" : "Analytics"}
          </p>
          <div className="space-y-1">
            <SidebarLink 
              icon={LineChart} 
              label="School Insights" 
              active={activeLink === "School Insights"}
              collapsed={collapsed}
              onClick={() => navigate("/market-insights")}
            />
            <SidebarLink 
              icon={GraduationCap} 
              label="Academic Programs" 
              active={activeLink === "Academic Programs"}
              collapsed={collapsed}
              onClick={() => navigate("/portfolios")}
            />
            <SidebarLink 
              icon={Users} 
              label="School Activities" 
              active={activeLink === "School Activities"}
              collapsed={collapsed}
              onClick={() => navigate("/social-trends")}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full px-2">
        <SidebarLink 
          icon={Settings} 
          label="Settings" 
          active={activeLink === "Settings"}
          collapsed={collapsed}
          onClick={() => navigate("/settings")}
        />
      </div>
    </div>
  );
}
