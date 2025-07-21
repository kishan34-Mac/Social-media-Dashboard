import { Bell, AlertCircle, CheckCircle, Info, Settings, Users, MessageSquare } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const Notifications = () => {
  const notificationStats = [
    {
      title: "Unread Notifications",
      value: "23",
      change: "+5",
      isPositive: true,
      icon: <Bell className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Mentions Today",
      value: "12",
      change: "+8",
      isPositive: true,
      icon: <MessageSquare className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "New Followers",
      value: "47",
      change: "+23",
      isPositive: true,
      icon: <Users className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Alerts",
      value: "3",
      change: "-2",
      isPositive: true,
      icon: <AlertCircle className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "mention",
      title: "New mention on Instagram",
      message: "@johndoe mentioned you in their story",
      time: "2 minutes ago",
      unread: true,
      icon: <MessageSquare className="w-5 h-5 text-accent" />,
      platform: "Instagram"
    },
    {
      id: 2,
      type: "follower",
      title: "New follower on Twitter",
      message: "@socialmedia_expert started following you",
      time: "15 minutes ago",
      unread: true,
      icon: <Users className="w-5 h-5 text-primary" />,
      platform: "Twitter"
    },
    {
      id: 3,
      type: "achievement",
      title: "Goal achieved!",
      message: "You've reached 10K followers on Instagram",
      time: "1 hour ago",
      unread: true,
      icon: <CheckCircle className="w-5 h-5 text-accent" />,
      platform: "Instagram"
    },
    {
      id: 4,
      type: "alert",
      title: "Campaign budget alert",
      message: "Summer Sale campaign has used 90% of budget",
      time: "2 hours ago",
      unread: false,
      icon: <AlertCircle className="w-5 h-5 text-destructive" />,
      platform: "Facebook"
    },
    {
      id: 5,
      type: "info",
      title: "Scheduled post published",
      message: "Monday Motivation post was published successfully",
      time: "3 hours ago",
      unread: false,
      icon: <Info className="w-5 h-5 text-muted-foreground" />,
      platform: "LinkedIn"
    },
    {
      id: 6,
      type: "mention",
      title: "Comment on your post",
      message: "5 new comments on your latest video",
      time: "4 hours ago",
      unread: false,
      icon: <MessageSquare className="w-5 h-5 text-accent" />,
      platform: "YouTube"
    }
  ];

  const notificationSettings = [
    { category: "Mentions & Tags", description: "Get notified when someone mentions or tags you", enabled: true },
    { category: "New Followers", description: "Notifications for new followers and subscribers", enabled: true },
    { category: "Comments & Replies", description: "Notifications for comments and replies to your posts", enabled: true },
    { category: "Campaign Alerts", description: "Budget alerts and campaign performance notifications", enabled: true },
    { category: "Content Reminders", description: "Reminders for scheduled posts and content deadlines", enabled: false },
    { category: "Analytics Reports", description: "Weekly and monthly analytics summary reports", enabled: true },
    { category: "Platform Updates", description: "Updates about platform features and policy changes", enabled: false },
    { category: "Achievement Badges", description: "Notifications when you reach milestones and goals", enabled: true }
  ];

  const getNotificationTypeColor = (type: string) => {
    switch (type) {
      case "mention": return "border-l-accent";
      case "follower": return "border-l-primary";
      case "achievement": return "border-l-accent";
      case "alert": return "border-l-destructive";
      case "info": return "border-l-muted";
      default: return "border-l-muted";
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Notifications</h2>
          <p className="text-muted-foreground">Stay updated with your social media activity</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="default">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button variant="premium" size="default">
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {notificationStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Notification: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Recent Notifications */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Recent Notifications</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">All</Button>
                <Button variant="ghost" size="sm">Unread</Button>
              </div>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 rounded-xl border-l-4 transition-colors cursor-pointer ${
                    notification.unread ? 'bg-muted/50 hover:bg-muted/70' : 'bg-muted/30 hover:bg-muted/50'
                  } ${getNotificationTypeColor(notification.type)}`}
                  onClick={() => console.log(`Notification clicked: ${notification.title}`)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-medium ${notification.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h4>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-accent rounded-full" />
                        )}
                        <Badge variant="outline" className="text-xs">
                          {notification.platform}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-6">Notification Settings</h3>
          <div className="space-y-4">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{setting.category}</p>
                  <p className="text-xs text-muted-foreground mt-1">{setting.description}</p>
                </div>
                <Switch 
                  checked={setting.enabled} 
                  onCheckedChange={(checked) => console.log(`${setting.category}: ${checked}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Button variant="outline" className="justify-start">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" className="justify-start">
            <AlertCircle className="w-4 h-4 mr-2" />
            View Alerts Only
          </Button>
          <Button variant="outline" className="justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Mentions & Tags
          </Button>
          <Button variant="outline" className="justify-start">
            <Settings className="w-4 h-4 mr-2" />
            Notification Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;