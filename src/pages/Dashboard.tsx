import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Eye, 
  MessageSquare, 
  Share, 
  TrendingUp,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import StatCard from '@/components/StatCard';
import SocialPlatformCard from '@/components/SocialPlatformCard';
import AnalyticsChart from '@/components/AnalyticsChart';
import RealTimeChart from '@/components/RealTimeChart';
import heroImage from '@/assets/dashboard-hero.jpg';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleStatClick = (statTitle: string) => {
    console.log(`Clicked on ${statTitle}`);
    // Add your click logic here
  };

  const handlePlatformClick = (platformName: string) => {
    console.log(`Clicked on ${platformName}`);
    // Add your click logic here
  };

  const stats = [
    {
      title: 'Total Followers',
      value: '145.2K',
      change: '+12.5%',
      isPositive: true,
      icon: <Users className="w-6 h-6 text-primary-foreground" />,
      color: 'primary'
    },
    {
      title: 'Total Engagement',
      value: '89.4K',
      change: '+8.2%',
      isPositive: true,
      icon: <Heart className="w-6 h-6 text-accent-foreground" />,
      color: 'accent'
    },
    {
      title: 'Total Reach',
      value: '2.1M',
      change: '+15.7%',
      isPositive: true,
      icon: <Eye className="w-6 h-6 text-secondary-foreground" />,
      color: 'secondary'
    },
    {
      title: 'Active Campaigns',
      value: '12',
      change: '-2.1%',
      isPositive: false,
      icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />,
      color: 'primary'
    }
  ];

  const platforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6 text-white" />,
      followers: '45.2K',
      engagement: '8.4%',
      posts: 234,
      reach: '890K',
      color: 'primary',
      gradient: 'gradient-primary'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6 text-white" />,
      followers: '28.7K',
      engagement: '6.2%',
      posts: 456,
      reach: '567K',
      color: 'secondary',
      gradient: 'gradient-secondary'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6 text-white" />,
      followers: '52.1K',
      engagement: '4.8%',
      posts: 189,
      reach: '1.2M',
      color: 'accent',
      gradient: 'gradient-accent'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-6 h-6 text-white" />,
      followers: '19.2K',
      engagement: '12.6%',
      posts: 67,
      reach: '445K',
      color: 'primary',
      gradient: 'gradient-primary'
    }
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6 lg:space-y-8">
      {/* Hero Section */}
      <div className="relative glass-card rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-slide-up">
              Social Media Analytics
              <span className="block text-lg sm:text-xl lg:text-2xl bg-gradient-primary bg-clip-text text-transparent">
                Performance Dashboard
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Track, analyze, and optimize your social media presence across all platforms with real-time insights and beautiful visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button 
                className="btn-primary"
                onClick={() => console.log('View Full Report clicked')}
              >
                View Full Report
              </button>
              <button 
                className="btn-accent"
                onClick={() => console.log('Schedule Posts clicked')}
              >
                Schedule Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => handleStatClick(stat.title)} />
          </div>
        ))}
      </div>

      {/* Real-Time Charts Section */}
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">Real-Time Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="animate-slide-up">
            <RealTimeChart title="Live Followers" metric="followers" color="primary" />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <RealTimeChart title="Live Engagement" metric="engagement" color="accent" />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <RealTimeChart title="Live Views" metric="views" color="secondary" />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <RealTimeChart title="Live Likes" metric="likes" color="primary" />
          </div>
        </div>
      </div>

      {/* Traditional Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="animate-slide-up">
          <AnalyticsChart title="Growth Analytics" type="area" />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <AnalyticsChart title="Engagement Trends" type="line" />
        </div>
      </div>

      {/* Social Platforms */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground">Platform Overview</h2>
          <div className="flex flex-wrap gap-2">
            <button 
              className="btn-primary"
              onClick={() => console.log('All Platforms clicked')}
            >
              All Platforms
            </button>
            <button 
              className="btn-secondary"
              onClick={() => console.log('Active Only clicked')}
            >
              Active Only
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {platforms.map((platform, index) => (
            <div key={platform.name} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <SocialPlatformCard platform={platform} onClick={() => handlePlatformClick(platform.name)} />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card rounded-2xl p-4 lg:p-6 animate-slide-up">
        <h3 className="text-lg lg:text-xl font-bold text-foreground mb-4 lg:mb-6">Recent Activity</h3>
        <div className="space-y-3 lg:space-y-4">
          {[
            { action: 'New post published', platform: 'Instagram', time: '2 hours ago', engagement: '+245 likes' },
            { action: 'Campaign completed', platform: 'Facebook', time: '4 hours ago', engagement: '+1.2K reach' },
            { action: 'Video uploaded', platform: 'YouTube', time: '6 hours ago', engagement: '+89 views' },
            { action: 'Story posted', platform: 'Instagram', time: '8 hours ago', engagement: '+156 views' }
          ].map((activity, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 lg:p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer active:scale-95"
              onClick={() => console.log(`Activity clicked: ${activity.action}`)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <div>
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.platform} • {activity.time}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-accent mt-2 sm:mt-0 pl-6 sm:pl-0">{activity.engagement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;