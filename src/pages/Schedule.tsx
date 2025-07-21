import { Calendar, Clock, FileText, Video, Image, Send } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Schedule = () => {
  const scheduleStats = [
    {
      title: "Scheduled Posts",
      value: "47",
      change: "+12",
      isPositive: true,
      icon: <Calendar className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Posts This Week",
      value: "23",
      change: "+8",
      isPositive: true,
      icon: <Clock className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "Auto-Published",
      value: "156",
      change: "+24",
      isPositive: true,
      icon: <Send className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Draft Posts",
      value: "8",
      change: "-3",
      isPositive: false,
      icon: <FileText className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const scheduledPosts = [
    {
      id: 1,
      title: "Monday Motivation Quote",
      type: "Text",
      platform: "Instagram",
      scheduledTime: "Today, 9:00 AM",
      status: "Scheduled",
      thumbnail: "📝",
      content: "Start your week with positive energy..."
    },
    {
      id: 2,
      title: "Product Showcase Video",
      type: "Video",
      platform: "TikTok",
      scheduledTime: "Today, 3:00 PM",
      status: "Scheduled",
      thumbnail: "🎥",
      content: "Behind the scenes of our latest product..."
    },
    {
      id: 3,
      title: "Customer Success Story",
      type: "Image",
      platform: "LinkedIn",
      scheduledTime: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      thumbnail: "📸",
      content: "Amazing transformation story from..."
    },
    {
      id: 4,
      title: "Tutorial Tuesday",
      type: "Video",
      platform: "YouTube",
      scheduledTime: "Tomorrow, 2:00 PM",
      status: "Scheduled",
      thumbnail: "🎬",
      content: "Learn how to maximize your productivity..."
    },
    {
      id: 5,
      title: "Weekly Newsletter Content",
      type: "Text",
      platform: "Twitter",
      scheduledTime: "Wednesday, 11:00 AM",
      status: "Draft",
      thumbnail: "📧",
      content: "This week's highlights and updates..."
    }
  ];

  const weeklySchedule = [
    { day: "Monday", posts: 4, planned: 6 },
    { day: "Tuesday", posts: 3, planned: 5 },
    { day: "Wednesday", posts: 5, planned: 7 },
    { day: "Thursday", posts: 2, planned: 4 },
    { day: "Friday", posts: 4, planned: 6 },
    { day: "Saturday", posts: 2, planned: 3 },
    { day: "Sunday", posts: 3, planned: 4 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled": return "bg-primary text-primary-foreground";
      case "Draft": return "bg-muted text-muted-foreground";
      case "Published": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video": return <Video className="w-4 h-4" />;
      case "Image": return <Image className="w-4 h-4" />;
      case "Text": return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Content Schedule</h2>
          <p className="text-muted-foreground">Plan and schedule your content across platforms</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="default">
            <Calendar className="w-4 h-4 mr-2" />
            Calendar View
          </Button>
          <Button variant="premium" size="default">
            <Clock className="w-4 h-4 mr-2" />
            Schedule Post
          </Button>
        </div>
      </div>

      {/* Schedule Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {scheduleStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Schedule: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Weekly Overview */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Weekly Schedule Overview</h3>
        <div className="grid grid-cols-7 gap-3">
          {weeklySchedule.map((day, index) => (
            <div key={day.day} className="text-center">
              <div className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <p className="text-sm font-medium text-foreground mb-2">{day.day}</p>
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(day.posts / day.planned) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {day.posts}/{day.planned} posts
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Upcoming Posts</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">All Platforms</Button>
            <Button variant="ghost" size="sm">This Week</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div 
              key={post.id} 
              className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => console.log(`Post clicked: ${post.title}`)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-2xl">{post.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{post.title}</h4>
                      <Badge className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      {getTypeIcon(post.type)}
                      <span>{post.type}</span>
                      <span>•</span>
                      <span>{post.platform}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.scheduledTime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Delete</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Best Times to Post */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Best Times to Post</h3>
          <div className="space-y-4">
            {[
              { platform: "Instagram", time: "9:00 AM - 11:00 AM", engagement: "High" },
              { platform: "Twitter", time: "12:00 PM - 3:00 PM", engagement: "Very High" },
              { platform: "LinkedIn", time: "8:00 AM - 10:00 AM", engagement: "High" },
              { platform: "TikTok", time: "6:00 PM - 9:00 PM", engagement: "Peak" }
            ].map((time, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{time.platform}</p>
                  <p className="text-sm text-muted-foreground">{time.time}</p>
                </div>
                <Badge variant={time.engagement === "Peak" ? "default" : "secondary"}>
                  {time.engagement}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Content Calendar */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Content Themes</h3>
          <div className="space-y-4">
            {[
              { day: "Monday", theme: "Motivation Monday", color: "bg-primary" },
              { day: "Tuesday", theme: "Tutorial Tuesday", color: "bg-accent" },
              { day: "Wednesday", theme: "Wisdom Wednesday", color: "bg-secondary" },
              { day: "Thursday", theme: "Throwback Thursday", color: "bg-muted" },
              { day: "Friday", theme: "Feature Friday", color: "bg-primary" }
            ].map((theme, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${theme.color}`} />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{theme.day}</p>
                  <p className="text-sm text-muted-foreground">{theme.theme}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;