import { Users, MapPin, Calendar, Smartphone } from "lucide-react";
import StatCard from "@/components/StatCard";
import AnalyticsChart from "@/components/AnalyticsChart";

const Audience = () => {
  const audienceStats = [
    {
      title: "Total Audience",
      value: "245.8K",
      change: "+8.2%",
      isPositive: true,
      icon: <Users className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    },
    {
      title: "Active Users",
      value: "89.4K",
      change: "+12.1%",
      isPositive: true,
      icon: <Smartphone className="w-6 h-6 text-accent-foreground" />,
      color: "accent"
    },
    {
      title: "New Followers",
      value: "4.2K",
      change: "+18.7%",
      isPositive: true,
      icon: <Calendar className="w-6 h-6 text-secondary-foreground" />,
      color: "secondary"
    },
    {
      title: "Retention Rate",
      value: "73.5%",
      change: "+2.8%",
      isPositive: true,
      icon: <MapPin className="w-6 h-6 text-primary-foreground" />,
      color: "primary"
    }
  ];

  const topCountries = [
    { country: "United States", percentage: 32.4, flag: "🇺🇸" },
    { country: "United Kingdom", percentage: 18.7, flag: "🇬🇧" },
    { country: "Canada", percentage: 12.1, flag: "🇨🇦" },
    { country: "Australia", percentage: 8.9, flag: "🇦🇺" },
    { country: "Germany", percentage: 6.2, flag: "🇩🇪" }
  ];

  const ageGroups = [
    { age: "18-24", percentage: 28.5, color: "bg-primary" },
    { age: "25-34", percentage: 34.2, color: "bg-accent" },
    { age: "35-44", percentage: 21.8, color: "bg-secondary" },
    { age: "45-54", percentage: 12.1, color: "bg-muted" },
    { age: "55+", percentage: 3.4, color: "bg-muted/50" }
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Audience Insights</h2>
        <p className="text-muted-foreground">Understand your audience demographics and behavior</p>
      </div>

      {/* Audience Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {audienceStats.map((stat, index) => (
          <div key={stat.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <StatCard {...stat} onClick={() => console.log(`Audience: ${stat.title} clicked`)} />
          </div>
        ))}
      </div>

      {/* Demographics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Age Demographics */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Age Demographics</h3>
          <div className="space-y-4">
            {ageGroups.map((group, index) => (
              <div key={group.age} className="flex items-center justify-between">
                <span className="font-medium text-foreground">{group.age}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`${group.color} h-3 rounded-full transition-all duration-300`} 
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{group.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Top Countries</h3>
          <div className="space-y-4">
            {topCountries.map((country, index) => (
              <div key={country.country} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <span className="font-medium text-foreground">{country.country}</span>
                </div>
                <span className="text-sm font-medium text-accent">{country.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Behavior */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <AnalyticsChart title="Audience Growth" type="area" />
        <AnalyticsChart title="Activity Patterns" type="line" />
      </div>

      {/* Audience Insights */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Peak Activity Times</h4>
            {[
              { time: "9:00 AM - 11:00 AM", activity: "High", percentage: 85 },
              { time: "2:00 PM - 4:00 PM", activity: "Medium", percentage: 60 },
              { time: "7:00 PM - 9:00 PM", activity: "Very High", percentage: 95 }
            ].map((timeSlot, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{timeSlot.time}</p>
                  <p className="text-sm text-muted-foreground">{timeSlot.activity} Activity</p>
                </div>
                <div className="w-16 bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full" 
                    style={{ width: `${timeSlot.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Platform Preferences</h4>
            {[
              { platform: "Instagram", preference: 42.5, color: "bg-gradient-primary" },
              { platform: "Twitter", preference: 28.3, color: "bg-gradient-accent" },
              { platform: "Facebook", preference: 18.9, color: "bg-gradient-secondary" },
              { platform: "YouTube", preference: 10.3, color: "bg-muted" }
            ].map((platform, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-foreground">{platform.platform}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`${platform.color} h-2 rounded-full`} 
                      style={{ width: `${platform.preference}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{platform.preference}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;