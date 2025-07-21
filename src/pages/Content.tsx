import { FileText, Image, Video, Calendar, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";

const Content = () => {
  const contentStats = [
    {
      title: "Total Posts",
      value: "1,247",
      change: "+23.4%",
      isPositive: true,
      icon: <FileText className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Engagement Rate",
      value: "8.9%",
      change: "+1.2%",
      isPositive: true,
      icon: <TrendingUp className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "Videos Created",
      value: "234",
      change: "+45.7%",
      isPositive: true,
      icon: <Video className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Scheduled Posts",
      value: "67",
      change: "+12.1%",
      isPositive: true,
      icon: <Calendar className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const recentContent = [
    {
      id: 1,
      title: "Summer Product Launch",
      type: "Image",
      platform: "Instagram",
      status: "Published",
      engagement: "12.4K",
      date: "2 hours ago",
      thumbnail: "📸"
    },
    {
      id: 2,
      title: "Behind the Scenes Video",
      type: "Video",
      platform: "TikTok",
      status: "Scheduled",
      engagement: "8.9K",
      date: "Tomorrow 3:00 PM",
      thumbnail: "🎥"
    },
    {
      id: 3,
      title: "Customer Testimonial",
      type: "Text",
      platform: "Twitter",
      status: "Draft",
      engagement: "-",
      date: "Draft",
      thumbnail: "📝"
    },
    {
      id: 4,
      title: "Tutorial: Getting Started",
      type: "Video",
      platform: "YouTube",
      status: "Published",
      engagement: "15.7K",
      date: "1 day ago",
      thumbnail: "🎬"
    }
  ];

  const contentTypes = [
    { type: "Images", count: 567, percentage: 45.5, color: "bg-primary" },
    { type: "Videos", count: 234, percentage: 18.8, color: "bg-accent" },
    { type: "Text Posts", count: 389, percentage: 31.2, color: "bg-secondary" },
    { type: "Stories", count: 57, percentage: 4.5, color: "bg-muted" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-accent text-accent-foreground";
      case "Scheduled": return "bg-primary text-primary-foreground";
      case "Draft": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Content Management</h2>
          <p className="text-muted-foreground">Manage and analyze your content performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="default">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Post
          </Button>
          <Button variant="premium" size="default">
            <FileText className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {contentStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Content: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Content Types */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Content Types</h3>
          <div className="space-y-4">
            {contentTypes.map((content, index) => (
              <div key={content.type} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${content.color}`} />
                  <span className="font-medium text-foreground">{content.type}</span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{content.count}</p>
                  <p className="text-sm text-muted-foreground">{content.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Image className="w-6 h-6" />
              <span className="text-sm">Upload Image</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Video className="w-6 h-6" />
              <span className="text-sm">Upload Video</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Create Post</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Recent Content */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Recent Content</h3>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="space-y-3">
          {recentContent.map((content) => (
            <div 
              key={content.id} 
              className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => console.log(`Content clicked: ${content.title}`)}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{content.thumbnail}</div>
                <div>
                  <h4 className="font-medium text-foreground">{content.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{content.type}</span>
                    <span>•</span>
                    <span>{content.platform}</span>
                    <span>•</span>
                    <span>{content.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-medium text-foreground">{content.engagement}</p>
                  <p className="text-sm text-muted-foreground">engagement</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(content.status)}`}>
                  {content.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;