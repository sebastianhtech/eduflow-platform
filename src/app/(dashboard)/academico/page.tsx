"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Clock, 
  MoreVertical,
  Plus,
  Search,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  { 
    id: 1, 
    name: "Algoritmos y Estructuras de Datos", 
    code: "ING-102", 
    students: 32, 
    teacher: "Ing. Carlos Ruiz",
    schedule: "Lun - Mie (08:00 - 10:00)",
    progress: 75,
    status: "active"
  },
  { 
    id: 2, 
    name: "Base de Datos Avanzadas", 
    code: "ING-205", 
    students: 28, 
    teacher: "Dra. Elena Blanc",
    schedule: "Mar - Jue (10:00 - 12:00)",
    progress: 40,
    status: "active"
  },
  { 
    id: 3, 
    name: "Desarrollo Web Fullstack", 
    code: "ING-301", 
    students: 45, 
    teacher: "Msc. Roberto Soto",
    schedule: "Vie (14:00 - 18:00)",
    progress: 90,
    status: "active"
  },
  { 
    id: 4, 
    name: "Sistemas Operativos", 
    code: "ING-202", 
    students: 30, 
    teacher: "Ing. Sofia Mar",
    schedule: "Lun - Mie (10:00 - 12:00)",
    progress: 20,
    status: "active"
  },
];

export default function AcademicoPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit">Gestión Académica</h1>
          <p className="text-muted-foreground mt-1">Administra tus cursos, programas y secciones.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          Crear Curso
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-card border border-border rounded-2xl">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o código..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted/50 border border-border text-sm outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-muted text-sm font-medium transition-colors">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <select className="flex-1 md:flex-none h-11 px-4 bg-muted/50 border border-border rounded-xl text-sm outline-none focus:border-primary">
            <option>Todos los programas</option>
            <option>Ingeniería de Sistemas</option>
            <option>Administración</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-primary tracking-wider uppercase">{course.code}</p>
                <h3 className="text-xl font-bold font-outfit mt-1 group-hover:text-primary transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{course.teacher}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{course.students} Estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium truncate text-xs">{course.schedule}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progreso del curso</span>
                  <span className="font-bold">{course.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-full shadow-lg shadow-primary/20"
                  />
                </div>
              </div>
            </div>

            {/* Hover Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
