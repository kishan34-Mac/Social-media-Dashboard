import { TrendingUp, TrendingDown, Target, Zap } from "lucide-react";
import StatCard from "@/components/StatCard";
import AnalyticsChart from "@/components/AnalyticsChart";

const Growth = () => {
  const growthStats = [
    {
      title: "Monthly Growth",
      value: "+12.5%",
      change: "+2.1%",
      isPositive: true,
      icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Follower Growth",
      value: "+4.2K",
      change: "+18.7%",
      isPositive: true,
      icon: <Target className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "Engagement Growth",
      value: "+8.9%",
      change: "+5.3%",
      isPositive: true,
      icon: <Zap className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Revenue Growth",
      value: "+15.2%",
      change: "-1.2%",
      isPositive: false,
      icon: <TrendingDown className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const growthGoals = [
    { metric: "Followers", current: 145200, target: 200000, progress: 72.6 },
    { metric: "Engagement Rate", current: 8.4, target: 12.0, progress: 70.0 },
    { metric: "Monthly Revenue", current: 24500, target: 35000, progress: 70.0 },
    { metric: "Content Output", current: 28, target: 40, progress: 70.0 }
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Growth Metrics</h2>
        <p className="text-muted-foreground">Track your growth progress and achieve your goals</p>
      </div>

      {/* Growth Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {growthStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Growth: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Growth Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <AnalyticsChart title="Growth Trajectory" type="area" />
        <AnalyticsChart title="Monthly Comparison" type="line" />
      </div>

      {/* Growth Goals */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">Growth Goals Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {growthGoals.map((goal, index) => (
            <div key={goal.metric} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{goal.metric}</span>
                <span className="text-sm text-muted-foreground">{goal.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{goal.current.toLocaleString()}</span>
                <span>{goal.target.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Recommendations */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Growth Recommendations</h3>
        <div className="space-y-4">
          {[
            { 
              title: "Increase posting frequency", 
              description: "Post 2-3 times daily to boost engagement by 15-20%",
              impact: "High",
              effort: "Medium"
            },
            { 
              title: "Collaborate with micro-influencers", 
              description: "Partner with 5-10 micro-influencers in your niche",
              impact: "High",
              effort: "High"
            },
            { 
              title: "Optimize posting times", 
              description: "Schedule posts during peak audience activity hours",
              impact: "Medium",
              effort: "Low"
            },
            { 
              title: "Create video content", 
              description: "Add 3-5 video posts per week to increase engagement",
              impact: "High",
              effort: "Medium"
            }
          ].map((recommendation, index) => (
            <div 
              key={index} 
              className="flex items-start justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{recommendation.title}</h4>
                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  recommendation.impact === "High" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {recommendation.impact} Impact
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  recommendation.effort === "Low" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {recommendation.effort} Effort
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Growth;