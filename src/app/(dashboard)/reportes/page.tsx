"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Download,
  Calendar,
  Filter
} from "lucide-react";

const stats = [
  { label: "Matrículas Nuevas", value: "124", change: "+12%", trend: "up" },
  { label: "Asistencia Promedio", value: "94%", change: "+2%", trend: "up" },
  { label: "Recaudación Mensual", value: "$125,400", change: "-5%", trend: "down" },
  { label: "Deserción Escolar", value: "1.2%", change: "-0.5%", trend: "up" },
];

export default function ReportesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-outfit">Reportes y Estadísticas</h1>
          <p className="text-muted-foreground mt-1">Análisis detallado del rendimiento institucional.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl hover:bg-muted transition-all font-medium text-sm">
          <Download className="w-4 h-4" />
          Exportar PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-card border border-border rounded-3xl"
          >
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold font-outfit">{stat.value}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-destructive/10 text-destructive"
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-outfit">Distribución por Programas</h3>
          <p className="text-muted-foreground mt-2 max-w-sm">
            Visualización de la cantidad de estudiantes activos desglosado por facultad y programa académico.
          </p>
          <div className="mt-8 w-full max-w-md space-y-4">
            {[
              { label: "Ingeniería", value: 45, color: "bg-primary" },
              { label: "Derecho", value: 30, color: "bg-indigo-500" },
              { label: "Administración", value: 25, color: "bg-emerald-500" },
            ].map(item => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-amber-500/10 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-amber-500" />
          </div>
          <h3 className="text-xl font-bold font-outfit">Proyección de Ingresos</h3>
          <p className="text-muted-foreground mt-2 max-w-sm">
            Comparativa de ingresos reales vs proyectados para el próximo ciclo académico.
          </p>
          <div className="mt-8 grid grid-cols-6 gap-2 w-full h-32 items-end">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <div key={i} className="bg-primary/20 rounded-t-lg relative group h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="absolute bottom-0 w-full bg-primary rounded-t-lg group-hover:bg-primary/80 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <span>Ene</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Abr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
