
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ArrowUpRight } from "lucide-react";

interface GaugeChartProps {
  value: number;
  dailyChange: number;
  weeklyChange: number;
}

export default function GaugeChart({ value, dailyChange, weeklyChange }: GaugeChartProps) {
  // Format value
  const formattedValue = value.toString();
  
  // Data for the pie chart - semi-circle
  const data = [
    { name: "Grade 1", value: 30 },
    { name: "Grade 2-3", value: 70 }
  ];
  
  // Colors for pie chart segments
  const COLORS = ["#33C3F0", "#4ADE80"];
  
  return (
    <div className="relative rounded-lg border border-border bg-card p-5 gradient-border h-[320px] animate-scale-in" style={{ animationDelay: "100ms" }}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            Top 10 Students In Each Grade
          </h3>
          <div className="text-2xl font-semibold mt-1.5">Total: {formattedValue}</div>
        </div>
      </div>

      <div className="flex h-[230px] items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-8">
          <div className="text-xl font-medium mb-5 text-center">Grade Distribution</div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-[240px]">
            <div className="flex flex-col items-center bg-secondary p-3 rounded-md">
              <div className="text-sm text-muted-foreground mb-1">Grade 1</div>
              <div className="flex items-center gap-1">
                <ArrowUpRight size={16} className="text-green-500" />
                <span className="text-lg font-medium text-green-500">{dailyChange}%</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center bg-secondary p-3 rounded-md">
              <div className="text-sm text-muted-foreground mb-1">Grade 2-3</div>
              <div className="flex items-center gap-1">
                <ArrowUpRight size={16} className="text-green-500" />
                <span className="text-lg font-medium text-green-500">{weeklyChange}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
