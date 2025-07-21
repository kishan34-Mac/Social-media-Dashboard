import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', followers: 4000, engagement: 2400, reach: 6400 },
  { name: 'Feb', followers: 4200, engagement: 2600, reach: 7200 },
  { name: 'Mar', followers: 4800, engagement: 2800, reach: 8100 },
  { name: 'Apr', followers: 5200, engagement: 3200, reach: 8800 },
  { name: 'May', followers: 5800, engagement: 3600, reach: 9600 },
  { name: 'Jun', followers: 6400, engagement: 4000, reach: 10400 },
  { name: 'Jul', followers: 7200, engagement: 4400, reach: 11200 },
];

interface AnalyticsChartProps {
  title: string;
  type?: 'line' | 'area';
  height?: number;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ 
  title, 
  type = 'area',
  height = 300 
}) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-4 rounded-xl border border-border/50">
          <p className="text-foreground font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className={`text-${entry.color === '#8884d8' ? 'primary' : entry.color === '#82ca9d' ? 'accent' : 'secondary'} text-sm`}>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-muted-foreground">Followers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span className="text-muted-foreground">Engagement</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full" />
            <span className="text-muted-foreground">Reach</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        {type === 'area' ? (
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="followers"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorFollowers)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--accent))"
              fillOpacity={1}
              fill="url(#colorEngagement)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="reach"
              stroke="hsl(var(--secondary))"
              fillOpacity={1}
              fill="url(#colorReach)"
              strokeWidth={2}
            />
          </AreaChart>
        ) : (
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="followers"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--accent))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--accent))', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="reach"
              stroke="hsl(var(--secondary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'hsl(var(--secondary))', strokeWidth: 2 }}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;