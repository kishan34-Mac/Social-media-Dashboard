import { Megaphone, Target, DollarSign, Users, Calendar, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Campaigns = () => {
  const campaignStats = [
    {
      title: "Active Campaigns",
      value: "12",
      change: "+3",
      isPositive: true,
      icon: <Megaphone className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Total Reach",
      value: "2.4M",
      change: "+18.5%",
      isPositive: true,
      icon: <Users className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "Campaign ROI",
      value: "340%",
      change: "+45.2%",
      isPositive: true,
      icon: <DollarSign className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Conversion Rate",
      value: "4.8%",
      change: "+1.2%",
      isPositive: true,
      icon: <Target className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$5,000",
      spent: "$3,200",
      reach: "45.2K",
      conversions: 234,
      endDate: "July 31, 2024",
      progress: 64
    },
    {
      id: 2,
      name: "Brand Awareness Campaign",
      status: "Active",
      budget: "$8,000",
      spent: "$2,100",
      reach: "78.9K",
      conversions: 156,
      endDate: "August 15, 2024",
      progress: 26
    },
    {
      id: 3,
      name: "Product Launch - New Collection",
      status: "Scheduled",
      budget: "$12,000",
      spent: "$0",
      reach: "0",
      conversions: 0,
      endDate: "September 1, 2024",
      progress: 0
    },
    {
      id: 4,
      name: "Influencer Collaboration",
      status: "Active",
      budget: "$3,500",
      spent: "$3,500",
      reach: "125.3K",
      conversions: 489,
      endDate: "July 20, 2024",
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-accent text-accent-foreground";
      case "Scheduled": return "bg-primary text-primary-foreground";
      case "Completed": return "bg-secondary text-secondary-foreground";
      case "Paused": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-accent";
    if (progress >= 50) return "bg-primary";
    return "bg-secondary";
  };

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Campaigns</h2>
          <p className="text-muted-foreground">Manage and track your marketing campaigns</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="default">
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </Button>
          <Button variant="premium" size="default">
            <Megaphone className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {campaignStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Campaign: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Active Campaigns */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Active Campaigns</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Filter</Button>
            <Button variant="ghost" size="sm">Sort</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {activeCampaigns.map((campaign) => (
            <div 
              key={campaign.id} 
              className="p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => console.log(`Campaign clicked: ${campaign.name}`)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{campaign.name}</h4>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Budget</p>
                      <p className="font-medium text-foreground">{campaign.budget}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Spent</p>
                      <p className="font-medium text-foreground">{campaign.spent}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Reach</p>
                      <p className="font-medium text-foreground">{campaign.reach}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Conversions</p>
                      <p className="font-medium text-foreground">{campaign.conversions}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-48">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium text-foreground">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`${getProgressColor(campaign.progress)} h-2 rounded-full transition-all duration-300`} 
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Ends: {campaign.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Top Performing Campaigns */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Top Performing</h3>
          <div className="space-y-4">
            {[
              { name: "Influencer Collaboration", roi: "485%", reach: "125K" },
              { name: "Summer Sale 2024", roi: "340%", reach: "45K" },
              { name: "Brand Awareness", roi: "245%", reach: "79K" }
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{campaign.name}</p>
                  <p className="text-sm text-muted-foreground">{campaign.reach} reach</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-accent">{campaign.roi}</p>
                  <p className="text-xs text-muted-foreground">ROI</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Types */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Campaign Types</h3>
          <div className="space-y-4">
            {[
              { type: "Social Media Ads", count: 8, budget: "$24,500", color: "bg-primary" },
              { type: "Influencer Marketing", count: 3, budget: "$8,200", color: "bg-accent" },
              { type: "Email Campaigns", count: 5, budget: "$1,800", color: "bg-secondary" },
              { type: "Content Marketing", count: 2, budget: "$3,400", color: "bg-muted" }
            ].map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${type.color}`} />
                  <div>
                    <p className="font-medium text-foreground">{type.type}</p>
                    <p className="text-sm text-muted-foreground">{type.count} campaigns</p>
                  </div>
                </div>
                <p className="font-medium text-foreground">{type.budget}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;