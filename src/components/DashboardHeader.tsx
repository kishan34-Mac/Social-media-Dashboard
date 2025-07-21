import React from 'react';
import { Bell, Search, Menu, Sun, Moon, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  onSidebarToggle: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSidebarToggle }) => {
  return (
    <header className="glass-card border-b border-border/50 p-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Here's your social media overview
            </p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search analytics, posts, or insights..."
              className="pl-10 bg-background/50 border-border/50 focus:bg-background"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Filter Button */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>

          {/* Download Report */}
          <Button variant="outline" size="sm" className="hidden sm:flex btn-primary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center notification-badge">
                3
              </span>
            </Button>
          </div>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm">
            <Sun className="w-5 h-5" />
          </Button>

          {/* Profile */}
          <div className="flex items-center space-x-2 pl-3 border-l border-border/50">
            <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;