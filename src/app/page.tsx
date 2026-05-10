"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="p-5 bg-primary rounded-[2.5rem] shadow-2xl shadow-primary/20 mb-8">
          <GraduationCap className="w-16 h-16 text-white" />
        </div>
        
        <h1 className="text-5xl font-bold font-outfit text-white tracking-tight mb-2">
          Edu<span className="text-primary">Flow</span>
        </h1>
        <p className="text-zinc-400 font-medium tracking-widest uppercase text-xs">
          SaaS de Gestión Educativa Premium
        </p>

        <div className="mt-12 flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-primary/30 rounded-full animate-bounce [animation-delay:-0.3s]" />
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-zinc-500 text-sm font-medium"
      >
        Cargando experiencia...
      </motion.p>
    </div>
  );
}
