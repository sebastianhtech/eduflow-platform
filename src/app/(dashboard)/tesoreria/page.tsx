"use client";

import { motion } from "framer-motion";
import { 
  CreditCard, 
  Download, 
  Filter, 
  MoreHorizontal, 
  Search, 
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  PieChart,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { id: "INV-001", user: "Maria García", amount: 450.00, date: "10 May, 2024", status: "Paid", method: "Credit Card" },
  { id: "INV-002", user: "Juan Pérez", amount: 320.00, date: "09 May, 2024", status: "Pending", method: "Bank Transfer" },
  { id: "INV-003", user: "Ana Lopez", amount: 150.00, date: "08 May, 2024", status: "Overdue", method: "Cash" },
  { id: "INV-004", user: "Carlos Ruiz", amount: 500.00, date: "07 May, 2024", status: "Paid", method: "PayPal" },
  { id: "INV-005", user: "Sofia Mar", amount: 450.00, date: "06 May, 2024", status: "Paid", method: "Credit Card" },
];

export default function TesoreriaPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit">Gestión Financiera</h1>
          <p className="text-muted-foreground mt-1">Control de ingresos, facturación y cartera.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            <Download className="w-4 h-4" />
            Reporte
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <DollarSign className="w-4 h-4" />
            Nueva Factura
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-primary rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <p className="text-white/80 text-sm font-medium">Ingresos Totales (Mes)</p>
          <h2 className="text-4xl font-bold font-outfit mt-2">$45,200.00</h2>
          <div className="mt-6 flex items-center gap-2 text-indigo-100 text-sm">
            <div className="p-1 bg-white/20 rounded-full">
              <ArrowUpRight className="w-3 h-3" />
            </div>
            <span>+15% respecto al mes anterior</span>
          </div>
        </div>
        
        <div className="p-8 bg-card border border-border rounded-3xl">
          <p className="text-muted-foreground text-sm font-medium">Pendiente por Cobrar</p>
          <h2 className="text-4xl font-bold font-outfit mt-2 text-amber-500">$12,450.00</h2>
          <div className="mt-6 flex items-center gap-2 text-muted-foreground text-sm">
            <div className="p-1 bg-amber-500/10 rounded-full">
              <Clock className="w-3 h-3 text-amber-500" />
            </div>
            <span>42 facturas pendientes</span>
          </div>
        </div>

        <div className="p-8 bg-card border border-border rounded-3xl">
          <p className="text-muted-foreground text-sm font-medium">Gastos Operativos</p>
          <h2 className="text-4xl font-bold font-outfit mt-2">$8,200.00</h2>
          <div className="mt-6 flex items-center gap-2 text-muted-foreground text-sm">
            <div className="p-1 bg-emerald-500/10 rounded-full">
              <ArrowDownLeft className="w-3 h-3 text-emerald-500" />
            </div>
            <span>-2% eficiencia mejorada</span>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-card border border-border rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-lg font-bold font-outfit">Transacciones Recientes</h3>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Buscar factura o cliente..."
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted/50 border border-border text-xs outline-none focus:border-primary transition-all"
              />
            </div>
            <button className="p-2 border border-border rounded-xl hover:bg-muted transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <th className="px-8 py-4">ID Factura</th>
                <th className="px-8 py-4">Estudiante</th>
                <th className="px-8 py-4">Monto</th>
                <th className="px-8 py-4">Fecha</th>
                <th className="px-8 py-4">Estado</th>
                <th className="px-8 py-4">Método</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {transactions.map((tx, i) => (
                <motion.tr 
                  key={tx.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-muted/30 transition-colors group"
                >
                  <td className="px-8 py-5 font-medium text-sm">{tx.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {tx.user.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold">{tx.user}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-bold text-sm">${tx.amount.toFixed(2)}</td>
                  <td className="px-8 py-5 text-sm text-muted-foreground">{tx.date}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide",
                      tx.status === "Paid" && "bg-emerald-500/10 text-emerald-500",
                      tx.status === "Pending" && "bg-amber-500/10 text-amber-500",
                      tx.status === "Overdue" && "bg-destructive/10 text-destructive",
                    )}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-muted-foreground">{tx.method}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-border flex justify-between items-center bg-muted/20">
          <p className="text-sm text-muted-foreground">Mostrando 5 de 150 transacciones</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-border rounded-lg text-xs font-medium hover:bg-muted transition-colors disabled:opacity-50" disabled>Anterior</button>
            <button className="px-4 py-2 border border-border rounded-lg text-xs font-medium hover:bg-muted transition-colors">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
