import React from 'react';
import { 
  BarChart3, 
  Home, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Settings, 
  Bell,
  Calendar,
  Target,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen, onToggle }) => {
  const menuItems = [
    { icon: Home, label: 'Overview', active: true },
    { icon: BarChart3, label: 'Analytics', count: 3 },
    { icon: TrendingUp, label: 'Growth', trend: '+12%' },
    { icon: Users, label: 'Audience' },
    { icon: MessageSquare, label: 'Content' },
    { icon: Target, label: 'Campaigns' },
    { icon: Calendar, label: 'Schedule' },
    { icon: Bell, label: 'Notifications', count: 5 },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen w-80 lg:w-72
        sidebar-nav z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  SocialHub
                </h2>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className={`
                group flex items-center justify-between p-3 rounded-xl cursor-pointer
                transition-all duration-200 hover:bg-muted/50
                ${item.active ? 'bg-gradient-primary text-primary-foreground shadow-primary' : ''}
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 ${item.active ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                <span className={`font-medium ${item.active ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {item.label}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {item.count && (
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {item.count}
                  </span>
                )}
                {item.trend && (
                  <span className="text-success text-xs font-medium">
                    {item.trend}
                  </span>
                )}
                <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${item.active ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50">
          <div className="glass-card p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">JD</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">Pro Plan</p>
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;