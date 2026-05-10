"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  CreditCard,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Estudiantes", value: "1,284", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", trend: "+12%" },
  { label: "Cursos Activos", value: "42", icon: BookOpen, color: "text-indigo-500", bg: "bg-indigo-500/10", trend: "+3" },
  { label: "Asistencia Promedio", value: "94.2%", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10", trend: "+1.5%" },
  { label: "Recaudación Mensual", value: "$45,200", icon: CreditCard, color: "text-amber-500", bg: "bg-amber-500/10", trend: "+8%" },
];

const activities = [
  { title: "Nueva matrícula", user: "Maria García", time: "Hace 10 min", type: "success" },
  { title: "Falta registrada", user: "Juan Pérez", time: "Hace 25 min", type: "warning" },
  { title: "Pago recibido", user: "Ana Lopez", time: "Hace 1 hora", type: "info" },
  { title: "Examen cargado", user: "Prof. Ramírez", time: "Hace 2 horas", type: "info" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit">Panel de Control</h1>
          <p className="text-muted-foreground mt-1">Bienvenido de nuevo, Sebastian. Aquí tienes el resumen de hoy.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-card border border-border rounded-xl flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>Ciclo: 2024-I</span>
          </div>
          <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Nueva Matrícula
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-xl transition-colors", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-2xl font-bold font-outfit mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chart Area (Placeholder for now) */}
        <div className="lg:col-span-2 p-8 bg-card border border-border rounded-3xl min-h-[400px] relative overflow-hidden flex flex-col justify-center items-center">
          <div className="absolute top-8 left-8">
            <h3 className="text-xl font-bold font-outfit">Rendimiento Académico</h3>
            <p className="text-sm text-muted-foreground">Promedio general por programa</p>
          </div>
          <div className="w-full h-48 flex items-end justify-between gap-4 px-12">
            {[65, 85, 45, 90, 75, 60, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                  className="w-full bg-primary rounded-t-lg shadow-lg shadow-primary/20 group-hover:bg-indigo-500 transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Ingeniería</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-300" />
              <span className="text-xs text-muted-foreground">Derecho</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-8 bg-card border border-border rounded-3xl">
          <h3 className="text-xl font-bold font-outfit mb-6">Actividad Reciente</h3>
          <div className="space-y-6">
            {activities.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className={cn(
                  "w-2 h-2 rounded-full mt-2 shrink-0",
                  activity.type === "success" && "bg-emerald-500",
                  activity.type === "warning" && "bg-amber-500",
                  activity.type === "info" && "bg-blue-500",
                )} />
                <div>
                  <p className="text-sm font-semibold">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-border hover:bg-muted text-sm font-medium transition-colors">
            Ver todo el historial
          </button>
        </div>
      </div>
    </div>
  );
}
