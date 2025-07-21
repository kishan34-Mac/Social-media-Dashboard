import React from 'react';
import { ExternalLink, Users, Heart, MessageCircle, Share, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialPlatformCardProps {
  platform: {
    name: string;
    icon: React.ReactNode;
    followers: string;
    engagement: string;
    posts: number;
    reach: string;
    color: string;
    gradient: string;
  };
  onClick?: () => void;
}

const SocialPlatformCard: React.FC<SocialPlatformCardProps> = ({ platform, onClick }) => {
  return (
    <div 
      className="stat-card group cursor-pointer active:scale-95 transition-transform" 
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-${platform.gradient} rounded-xl flex items-center justify-center shadow-${platform.color}`}>
            {platform.icon}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{platform.name}</h3>
            <p className="text-sm text-muted-foreground">Social Platform</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Followers</span>
          </div>
          <p className="text-xl font-bold text-foreground">{platform.followers}</p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Engagement</span>
          </div>
          <p className="text-xl font-bold text-foreground">{platform.engagement}</p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Posts</span>
          </div>
          <p className="text-xl font-bold text-foreground">{platform.posts}</p>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Reach</span>
          </div>
          <p className="text-xl font-bold text-foreground">{platform.reach}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-2">
        <Button 
          size="sm" 
          variant="outline" 
          className="flex-1 text-xs hover:scale-105 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Post clicked for ${platform.name}`);
          }}
        >
          <MessageCircle className="w-3 h-3 mr-1" />
          Post
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex-1 text-xs hover:scale-105 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Share clicked for ${platform.name}`);
          }}
        >
          <Share className="w-3 h-3 mr-1" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default SocialPlatformCard;