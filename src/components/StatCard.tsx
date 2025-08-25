import React from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  platform?: string;
  color?: string;
  onClick?: () => void;
}
  // onClick?: () => void;


const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon, 
  platform,
  color = 'primary',
  onClick
}) => {
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  
  return (
    <div 
      className="stat-card group cursor-pointer active:scale-95 transition-transform" 
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-${color} rounded-xl flex items-center justify-center shadow-${color}`}>
          {icon}
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-success/10' : 'bg-destructive/10'} transition-transform group-hover:scale-110`}>
          <TrendIcon className={`w-4 h-4 ${isPositive ? 'trend-up' : 'trend-down'}`} />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <div className="flex items-baseline space-x-2">
          <h3 className="text-2xl font-bold text-foreground">{value}</h3>
          {platform && (
            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
              {platform}
            </span>
          )}
        </div>
        
        {/* Trend */}
        <div className="flex items-center space-x-2">
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
            <ArrowIcon className="w-3 h-3" />
            <span className="text-sm font-medium">{change}</span>
          </div>
          <span className="text-xs text-muted-foreground">vs last month</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-${color} rounded-full transition-all duration-1000 group-hover:w-full`}
          style={{ width: `${Math.abs(parseFloat(change))}%` }}
        />
      </div>
    </div>
  );
};

export default StatCard;