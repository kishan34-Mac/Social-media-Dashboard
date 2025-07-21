import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import StatCard from "@/components/StatCard";
import AnalyticsChart from "@/components/AnalyticsChart";
import RealTimeChart from "@/components/RealTimeChart";

const Analytics = () => {
  const analyticsStats = [
    {
      title: "Page Views",
      value: "2.4M",
      change: "+18.2%",
      isPositive: true,
      icon: <Eye className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Unique Visitors",
      value: "847K",
      change: "+12.5%",
      isPositive: true,
      icon: <Users className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "Conversion Rate",
      value: "3.47%",
      change: "+0.8%",
      isPositive: true,
      icon: <TrendingUp className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Bounce Rate",
      value: "42.1%",
      change: "-2.3%",
      isPositive: true,
      icon: <BarChart3 className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Analytics Overview</h2>
        <p className="text-muted-foreground">Detailed insights into your social media performance</p>
      </div>

      {/* Analytics Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {analyticsStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Analytics: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Real-Time Analytics */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Real-Time Performance</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <RealTimeChart title="Live Traffic" metric="views" color="primary" />
          <RealTimeChart title="Live Conversions" metric="likes" color="accent" />
        </div>
      </div>

      {/* Detailed Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <AnalyticsChart title="Traffic Analytics" type="area" />
        <AnalyticsChart title="Engagement Metrics" type="line" />
      </div>

      {/* Top Performing Content */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Top Performing Content</h3>
        <div className="space-y-4">
          {[
            { title: "Summer Campaign Launch", views: "124K", engagement: "8.4%", platform: "Instagram" },
            { title: "Behind the Scenes Video", views: "89K", engagement: "12.1%", platform: "TikTok" },
            { title: "Product Tutorial Series", views: "76K", engagement: "6.8%", platform: "YouTube" },
            { title: "User Generated Content", views: "54K", engagement: "15.2%", platform: "Twitter" }
          ].map((content, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div>
                <p className="font-medium text-foreground">{content.title}</p>
                <p className="text-sm text-muted-foreground">{content.platform}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{content.views} views</p>
                <p className="text-sm text-accent">{content.engagement} engagement</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;