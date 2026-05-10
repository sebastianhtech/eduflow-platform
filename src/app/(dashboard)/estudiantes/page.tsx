"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

const students = [
  { id: 1, name: "Maria García", code: "EST-2024-001", email: "m.garcia@edu.co", phone: "+57 300 123 4567", program: "Ingeniería de Sistemas", semester: 4, avatar: "MG" },
  { id: 2, name: "Juan Pérez", code: "EST-2024-002", email: "j.perez@edu.co", phone: "+57 310 987 6543", program: "Derecho", semester: 2, avatar: "JP" },
  { id: 3, name: "Ana Lopez", code: "EST-2024-003", email: "a.lopez@edu.co", phone: "+57 320 456 7890", program: "Administración", semester: 6, avatar: "AL" },
  { id: 4, name: "Carlos Ruiz", code: "EST-2024-004", email: "c.ruiz@edu.co", phone: "+57 315 234 5678", program: "Ingeniería de Sistemas", semester: 8, avatar: "CR" },
  { id: 5, name: "Sofia Mar", code: "EST-2024-005", email: "s.mar@edu.co", phone: "+57 305 678 9012", program: "Psicología", semester: 1, avatar: "SM" },
];

export default function EstudiantesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit">Gestión de Estudiantes</h1>
          <p className="text-muted-foreground mt-1">Directorio completo de alumnos y su información académica.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          Registrar Estudiante
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar por nombre, código o documento..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted/50 border border-border text-sm outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <select className="h-11 px-4 bg-muted/50 border border-border rounded-xl text-sm outline-none focus:border-primary min-w-[150px]">
            <option>Todos los semestres</option>
            <option>Semestre 1</option>
            <option>Semestre 2</option>
          </select>
          <button className="px-4 py-2 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 rounded-xl text-sm font-medium hover:bg-indigo-500/20 transition-all">
            Exportar CSV
          </button>
        </div>
      </div>

      {/* Students List (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {students.map((student, i) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-3xl p-6 group hover:border-primary/30 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-primary flex items-center justify-center text-white font-bold text-xl font-outfit shadow-lg shadow-primary/20">
                  {student.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg font-outfit leading-none">{student.name}</h3>
                  <span className="text-xs text-muted-foreground font-medium mt-1 inline-block">{student.code}</span>
                </div>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{student.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="font-medium">{student.program}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold">Semestre {student.semester}</span>
              </div>
              <button className="text-xs font-bold text-primary hover:underline transition-all">
                Ver Expediente
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
