import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, TrendingUp, Users, Heart } from 'lucide-react';

interface DataPoint {
  time: string;
  followers: number;
  engagement: number;
  views: number;
  likes: number;
}

interface RealTimeChartProps {
  title: string;
  metric: 'followers' | 'engagement' | 'views' | 'likes';
  color: string;
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ title, metric, color }) => {
  const [data, setData] = useState<DataPoint[]>([]);

  // Generate initial data points
  useEffect(() => {
    const initialData: DataPoint[] = [];
    const now = new Date();
    
    for (let i = 29; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60000); // Every minute
      initialData.push({
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        followers: Math.floor(Math.random() * 1000) + 5000,
        engagement: Math.floor(Math.random() * 100) + 50,
        views: Math.floor(Math.random() * 5000) + 10000,
        likes: Math.floor(Math.random() * 500) + 200
      });
    }
    
    setData(initialData);
  }, []);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        
        // Remove oldest data point and add new one
        newData.shift();
        
        const now = new Date();
        const lastValue = newData[newData.length - 1]?.[metric] || 0;
        
        newData.push({
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          followers: lastValue + Math.floor(Math.random() * 20) - 10 + (metric === 'followers' ? Math.floor(Math.random() * 50) : 0),
          engagement: Math.max(0, lastValue + Math.floor(Math.random() * 20) - 10),
          views: lastValue + Math.floor(Math.random() * 200) - 100 + (metric === 'views' ? Math.floor(Math.random() * 500) : 0),
          likes: lastValue + Math.floor(Math.random() * 50) - 25 + (metric === 'likes' ? Math.floor(Math.random() * 100) : 0)
        });
        
        return newData;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [metric]);

  const getIcon = () => {
    switch (metric) {
      case 'followers': return <Users className="w-5 h-5" />;
      case 'engagement': return <Heart className="w-5 h-5" />;
      case 'views': return <Activity className="w-5 h-5" />;
      case 'likes': return <TrendingUp className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const currentValue = data[data.length - 1]?.[metric] || 0;
  const previousValue = data[data.length - 2]?.[metric] || 0;
  const change = currentValue - previousValue;
  const isPositive = change >= 0;

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-gradient-${color} rounded-lg flex items-center justify-center`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">
                {currentValue.toLocaleString()}
              </span>
              <span className={`text-sm font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
                {isPositive ? '+' : ''}{change}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 bg-${color} rounded-full animate-pulse`} />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${metric}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`hsl(var(--${color}))`} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={`hsl(var(--${color}))`} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Area
              type="monotone"
              dataKey={metric}
              stroke={`hsl(var(--${color}))`}
              strokeWidth={2}
              fill={`url(#gradient-${metric})`}
              dot={false}
              activeDot={{ 
                r: 4, 
                fill: `hsl(var(--${color}))`,
                stroke: 'hsl(var(--background))',
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RealTimeChart;