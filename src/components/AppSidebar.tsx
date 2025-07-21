import { 
  LayoutDashboard, 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  Megaphone, 
  Calendar, 
  Bell 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3, badge: "3" },
  { title: "Growth", url: "/growth", icon: TrendingUp, badge: "+12%" },
  { title: "Audience", url: "/audience", icon: Users },
  { title: "Content", url: "/content", icon: FileText },
  { title: "Campaigns", url: "/campaigns", icon: Megaphone },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Notifications", url: "/notifications", icon: Bell },
];

export function AppSidebar() {
  const { state, open, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => 
    isActive(path) 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={`${state === "collapsed" ? "w-14" : "w-64"} border-r border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-300`}
    >
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className={`${state === "collapsed" ? "hidden" : "block"} text-muted-foreground font-semibold text-xs uppercase tracking-wider mb-2`}>
            Dashboard
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavClassName(item.url)}`}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {state !== "collapsed" && (
                        <>
                          <span className="flex-1 text-sm font-medium">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge.includes("+") ? "default" : "secondary"} 
                              className="text-xs px-2 py-0.5 font-medium"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}