import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted/30">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header with sidebar trigger */}
          <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border/50 bg-card/50 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="h-8 w-8 p-0 hover:bg-muted/50 rounded-lg transition-colors">
                <Menu className="h-4 w-4" />
              </SidebarTrigger>
              <h1 className="text-lg font-semibold text-foreground">Social Media Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xs font-medium text-white">JD</span>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}