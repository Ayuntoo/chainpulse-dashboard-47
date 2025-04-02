
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Award } from "lucide-react";

interface FearGreedIndexProps {
  value: number;
  indicator: string;
  previousValue: number;
  previousChange: number;
}

export default function FearGreedIndex({ 
  value, 
  indicator, 
  previousValue, 
  previousChange 
}: FearGreedIndexProps) {
  // Data for the pie chart - full circle
  const data = [
    { name: "Value", value: value },
    { name: "Empty", value: 100 - value }
  ];
  
  // Get color based on value
  const getColor = () => {
    if (value >= 75) return "#4ADE80"; // Excellent - green
    if (value >= 55) return "#A3E635"; // Good - light green
    if (value >= 45) return "#FACC15"; // Average - yellow
    if (value >= 25) return "#FB923C"; // Below Average - orange
    return "#F87171"; // Needs Improvement - red
  };
  
  const activeColor = getColor();
  
  return (
    <div className="rounded-lg border border-border bg-card p-5 gradient-border h-[320px] animate-scale-in" style={{ animationDelay: "400ms" }}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Award size={16} className="text-primary" />
          <h3 className="font-medium">Top 100 Students</h3>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="90%"
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill={activeColor} />
              <Cell fill="#374151" /> {/* Dark gray for empty space */}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{value}</div>
          <div className="text-xl font-medium mt-1" style={{ color: activeColor }}>
            {indicator}
          </div>
          
          <div className="flex items-center mt-4 text-sm">
            <span className="text-muted-foreground mr-2">Last Month: {previousValue}</span>
            <div className={`flex items-center ${previousChange >= 0 ? "text-green-500" : "text-red-500"}`}>
              {previousChange >= 0 ? "+" : ""}{previousChange}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
