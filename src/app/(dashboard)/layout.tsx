"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  Calendar, 
  Wallet, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  ChevronRight,
  LogOut,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: GraduationCap, label: "Académico", href: "/academico" },
  { icon: Users, label: "Estudiantes", href: "/estudiantes" },
  { icon: Wallet, label: "Tesorería", href: "/tesoreria" },
  { icon: BarChart3, label: "Reportes", href: "/reportes" },
  { icon: Settings, label: "Configuración", href: "/configuracion" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-6 gap-3">
            <div className="p-2 bg-primary rounded-xl flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl font-outfit tracking-tight">EduFlow</span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative",
                  pathname === item.href 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
                {!isSidebarOpen && (
                  <div className="absolute left-full ml-4 px-3 py-1 bg-popover text-popover-foreground rounded-md text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-border shadow-md z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* Footer / User */}
          <div className="p-4 border-t border-border">
            <button 
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all",
                !isSidebarOpen && "justify-center"
              )}
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">Cerrar Sesión</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        className={cn(
          "flex-1 transition-all duration-300",
          isSidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        {/* Header */}
        <header className="h-20 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Panel</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium capitalize">
                {pathname.split("/").pop() || "Dashboard"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center relative w-64">
              <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Buscar estudiantes, cursos..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-muted/50 border border-border text-sm outline-none focus:border-primary transition-all"
              />
            </div>
            
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-card" />
            </button>

            <div className="flex items-center gap-3 border-l border-border pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Sebastian H.</p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-indigo-500 border-2 border-border shadow-sm" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
