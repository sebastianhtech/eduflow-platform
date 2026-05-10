"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1000px] grid lg:grid-cols-2 bg-card rounded-3xl overflow-hidden border border-border shadow-2xl"
      >
        {/* Left Side: Branding/Marketing */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-indigo-900 z-0" />
          
          {/* Abstract Shapes */}
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-3xl z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white font-outfit tracking-tight">EduFlow</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white font-outfit leading-tight mb-6">
              Impulsa el futuro de tu <span className="text-indigo-200">institución.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-md">
              La plataforma integral diseñada para simplificar la gestión académica, financiera e institucional.
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-400/30 flex-shrink-0" />
              <div>
                <p className="text-white font-medium italic">"EduFlow ha transformado nuestra eficiencia operativa en un 40%."</p>
                <p className="text-white/60 text-sm mt-1">— Rectoría Instituto Superior</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-card">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold font-outfit mb-2">Bienvenido</h2>
            <p className="text-muted-foreground">Ingresa tus credenciales para acceder</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 ml-1">Usuario</label>
              <input 
                type="text" 
                placeholder="08556337"
                className="w-full h-12 px-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-foreground/80">Contraseña</label>
                <Link href="#" className="text-xs text-primary hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                required
              />
            </div>

            <button 
              disabled={isLoading}
              className="w-full h-12 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Ingresar
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">¿Eres nuevo en EduFlow?</p>
            <Link 
              href="#" 
              className="px-6 py-2 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
