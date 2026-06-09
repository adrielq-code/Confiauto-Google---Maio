/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  Maximize2, 
  ArrowRight,
  Phone,
  MessageSquare,
  Eye,
  Percent,
  Youtube,
  Sparkles,
  RefreshCw,
  Video,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { cn } from '@/src/lib/utils';
import { PERFORMANCE_DATA } from './constants';

// --- Components ---

const SlideWrapper = ({ children, slideKey }: { children: React.ReactNode; slideKey: number }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-start md:justify-center p-4 md:py-6 md:px-12 overflow-y-auto"
    >
      <div className="w-full max-w-5xl my-auto py-2 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);

const MetricCard = ({ icon: Icon, label, value, subtext, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glass-card p-6 rounded-2xl flex flex-col gap-3 group hover:border-brand-cyan/50 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan">
        <Icon size={20} />
      </div>
      <span className="text-white/60 text-sm font-medium tracking-wider uppercase">{label}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-3xl font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
        {value}
      </span>
      {subtext && <span className="text-white/40 text-xs mt-1">{subtext}</span>}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [compilePeriod, setCompilePeriod] = useState<'7d' | 'month'>('7d');
  const [activeGoogleCampaign, setActiveGoogleCampaign] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col relative text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <header className="py-3 px-6 md:py-4 md:px-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black tracking-tighter">AEG<span className="text-brand-cyan">MEDIA</span></span>
            <span className="text-[8px] text-white/40 tracking-[0.2em] font-bold uppercase -mt-1">Relatórios Estratégicos</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Confiauto Proteção Veicular</p>
          <div className="w-full h-[1px] bg-brand-cyan/30 mt-1" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        <SlideWrapper slideKey={currentSlide}>
          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">BRAND</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.awarenessCampaign.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.awarenessCampaign.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Pessoas Alcançadas Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.awarenessCampaign.combined.reach.toLocaleString('pt-BR')} Pessoas
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">CPM Médio Geral (1.000 Alc.)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.awarenessCampaign.combined.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Pessoas Alc.</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.awarenessCampaign.week1.reach.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">CPM (1.000 Alc.)</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.awarenessCampaign.week1.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Pessoas Alc.</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.awarenessCampaign.week2.reach.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.awarenessCampaign.week2.reach / PERFORMANCE_DATA.awarenessCampaign.week1.reach) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">CPM (1.000 Alc.)</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.awarenessCampaign.week2.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap">
                          -{((1 - PERFORMANCE_DATA.awarenessCampaign.week2.cpm / PERFORMANCE_DATA.awarenessCampaign.week1.cpm) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Pessoas Alc.</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.awarenessCampaign.week3.reach.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-amber-500 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.awarenessCampaign.week3.reach / PERFORMANCE_DATA.awarenessCampaign.week2.reach) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">CPM (1.000 Alc.)</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.awarenessCampaign.week3.cpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-amber-400 mt-0.5 whitespace-nowrap font-black">
                          +{((PERFORMANCE_DATA.awarenessCampaign.week3.cpm / PERFORMANCE_DATA.awarenessCampaign.week2.cpm - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">VISIT</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.trafficToProfile.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.trafficToProfile.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Total de Visitas Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.trafficToProfile.combined.visits.toLocaleString('pt-BR')} Visitas
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Custo Médio por Visita (CPV)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.trafficToProfile.combined.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Visitas ao Perfil</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.trafficToProfile.week1.visits.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Visita</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.trafficToProfile.week1.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Visitas ao Perfil</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.trafficToProfile.week2.visits.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.trafficToProfile.week2.visits / PERFORMANCE_DATA.trafficToProfile.week1.visits) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Visita</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.trafficToProfile.week2.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.trafficToProfile.week2.cpv / PERFORMANCE_DATA.trafficToProfile.week1.cpv) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Visitas ao Perfil</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.trafficToProfile.week3.visits.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          +{(((PERFORMANCE_DATA.trafficToProfile.week3.visits / PERFORMANCE_DATA.trafficToProfile.week2.visits) - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Custo por Visita</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.trafficToProfile.week3.cpv.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.trafficToProfile.week3.cpv / PERFORMANCE_DATA.trafficToProfile.week2.cpv) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">HIRE</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Métricas: {PERFORMANCE_DATA.hiringCampaign.name}</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Evolução de Performance Semanal e Visão Mensal Consolidada</p>
              </div>

              {/* Destaque do Acumulado (Visão Consolidada de 3 Semanas) */}
              <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-[0_0_35px_-20px_rgba(0,242,255,0.15)] w-full">
                <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Resultado Geral Acumulado • Visão 3 Semanas</p>
                <div className="flex flex-col md:flex-row justify-around items-center gap-3 mt-1.5">
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Total Investido</p>
                    <p className="text-sm md:text-base font-black italic text-white uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.hiringCampaign.combined.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-brand-cyan text-[8px] font-bold uppercase tracking-widest">Contatos Recebidos Acumulado</p>
                    <p className="text-lg font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none">
                      {PERFORMANCE_DATA.hiringCampaign.combined.leads.toLocaleString('pt-BR')} Leads
                    </p>
                  </div>
                  <div className="hidden md:block h-6 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Custo Médio por Lead (CPL)</p>
                    <p className="text-sm md:text-base font-black italic text-emerald-400 uppercase tracking-tighter">
                      R$ {PERFORMANCE_DATA.hiringCampaign.combined.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid das 3 semanas comparativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full items-stretch animate-fade-in">
                {/* Semana 1 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W1: Inicial</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/40">Fase 1: Sem. Inicial (05-11/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week1.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Contatos Recebidos</p>
                      <p className="text-sm font-black italic text-white/70">{PERFORMANCE_DATA.hiringCampaign.week1.leads.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Lead</p>
                      <p className="text-xs md:text-sm font-black italic text-white">R$ {PERFORMANCE_DATA.hiringCampaign.week1.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>

                {/* Semana 2 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-white/5 space-y-3 relative overflow-hidden group flex flex-col justify-center bg-white/[0.01]">
                  <div className="absolute top-0 right-0 p-1.5 bg-white/5 rounded-bl-[1rem] font-black text-[6px] uppercase italic text-white/40 tracking-widest">W2: Anterior</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-white/50">Fase 2: Sem. Anterior (12-18/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week2.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-white/5 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Contatos Recebidos</p>
                      <div className="text-right">
                        <p className="text-sm font-black italic text-white/85 leading-none">{PERFORMANCE_DATA.hiringCampaign.week2.leads.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-brand-cyan mt-0.5 whitespace-nowrap">
                          +{(((PERFORMANCE_DATA.hiringCampaign.week2.leads / PERFORMANCE_DATA.hiringCampaign.week1.leads) - 1) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Custo por Lead</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400/90 leading-none">R$ {PERFORMANCE_DATA.hiringCampaign.week2.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400/60 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.hiringCampaign.week2.cpl / PERFORMANCE_DATA.hiringCampaign.week1.cpl) * 100).toFixed(1)}% vs W1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semana 3 */}
                <div className="glass-card p-3 md:p-4 rounded-[1.5rem] border-brand-cyan/20 bg-brand-cyan/5 space-y-3 relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.1)] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic rounded-bl-[1rem] shadow-lg tracking-widest">W3: Atual</div>
                  <h3 className="text-xs font-black italic uppercase tracking-tight text-brand-cyan">Fase 3: Sem. Atual (19-25/05)</h3>
                  
                  <div className="space-y-2">
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Investimento</p>
                      <p className="text-xs md:text-sm font-black italic text-white whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week3.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center border-b border-brand-cyan/10 pb-1.5 gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Contatos Recebidos</p>
                      <div className="text-right">
                        <p className="text-base md:text-lg font-black italic text-brand-cyan cyan-glow leading-none">{PERFORMANCE_DATA.hiringCampaign.week3.leads.toLocaleString('pt-BR')}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          +{(((PERFORMANCE_DATA.hiringCampaign.week3.leads / PERFORMANCE_DATA.hiringCampaign.week2.leads) - 1) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                      <p className="text-[8px] font-bold uppercase text-brand-cyan/60 tracking-widest">Custo por Lead</p>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black italic text-emerald-400 leading-none whitespace-nowrap">R$ {PERFORMANCE_DATA.hiringCampaign.week3.cpl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-[6px] font-bold uppercase text-emerald-400 mt-0.5 whitespace-nowrap font-black">
                          -{((1 - PERFORMANCE_DATA.hiringCampaign.week3.cpl / PERFORMANCE_DATA.hiringCampaign.week2.cpl) * 100).toFixed(1)}% vs W2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {false && (() => {
            const COMPILATION_DATA = {
              '7d': {
                periodTitle: "Últimos 07 Dias (19/05 a 25/05)",
                totalInvestment: 21513.74,
                totalLeads: 823,
                combinedCpl: 23.87,
                campaigns: [
                  { name: "Original (Performance)", spent: 11525.59, result: "172 Leads", metric: "R$ 67,01 CPL", highlight: false },
                  { name: "Novos Estáticos", spent: 3538.36, result: "56 Leads", metric: "R$ 63,19 CPL", highlight: true },
                  { name: "Teste LP do CRM", spent: 3383.32, result: "252 Leads", metric: "R$ 13,43 CPL", highlight: false },
                  { name: "Contratação (Hiring)", spent: 1195.81, result: "343 Leads", metric: "R$ 3,49 CPL", highlight: false },
                  { name: "Reconhecimento (Brand)", spent: 1119.78, result: "434,5k Alcance", metric: "R$ 2,58 CPM", highlight: false },
                  { name: "Tráfego para Perfil", spent: 750.88, result: "2,1k Visitas", metric: "R$ 0,35 CPV", highlight: false }
                ]
              },
              'month': {
                periodTitle: "Visão Mensal (Período Completo das 4 Semanas)",
                totalInvestment: 87677.53,
                totalLeads: 2398,
                combinedCpl: 34.31,
                campaigns: [
                  { name: "Original (Performance)", spent: 47917.33, result: "511 Leads", metric: "R$ 93,77 CPL", highlight: false },
                  { name: "Campanhas Consolidadas (01 a 04/05)", spent: 13999.58, result: "183 Leads", metric: "R$ 76,50 CPL", highlight: false },
                  { name: "Teste LP do CRM", spent: 8627.14, result: "685 Leads", metric: "R$ 12,59 CPL", highlight: false },
                  { name: "Novos Estáticos", spent: 8490.36, result: "127 Leads", metric: "R$ 66,85 CPL", highlight: true },
                  { name: "Contratação (Hiring)", spent: 3233.86, result: "892 Leads", metric: "R$ 3,63 CPL", highlight: false },
                  { name: "Reconhecimento (Brand)", spent: 3215.58, result: "1,27M Alcance", metric: "R$ 2,53 CPM", highlight: false },
                  { name: "Tráfego para Perfil", spent: 2193.68, result: "5,0k Visitas", metric: "R$ 0,43 CPV", highlight: false }
                ]
              }
            };
            const currentData = COMPILATION_DATA[compilePeriod];

            return (
              <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-2">
                <div className="flex flex-col items-center gap-1.5 text-center mb-1">
                  <span className="text-brand-cyan font-black italic text-sm uppercase tracking-[0.2em] leading-none">Compilado Geral</span>
                  <h2 className="text-lg md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-tight">Visão Consolidada de Períodos e Campanhas</h2>
                  
                  {/* Neon Selector Tabs */}
                  <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mt-1.5 shadow-inner">
                    <button
                      onClick={() => setCompilePeriod('7d')}
                      className={cn(
                        "px-3.5 py-1 rounded-full text-[9px] md:text-xs font-black italic tracking-wider transition-all uppercase whitespace-nowrap",
                        compilePeriod === '7d' 
                          ? "bg-brand-cyan text-brand-black shadow-lg shadow-brand-cyan/20" 
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      Últimos 07 Dias (19-25/05)
                    </button>
                    <button
                      onClick={() => setCompilePeriod('month')}
                      className={cn(
                        "px-3.5 py-1 rounded-full text-[9px] md:text-xs font-black italic tracking-wider transition-all uppercase whitespace-nowrap",
                        compilePeriod === 'month' 
                          ? "bg-brand-cyan text-brand-black shadow-lg shadow-brand-cyan/20" 
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      Visão Mensal (Análise Completa)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full items-stretch">
                  {/* Evolution of Investment Chart */}
                  <div className="lg:col-span-4 glass-card p-3 rounded-[1.25rem] border-white/5 flex flex-col justify-between bg-white/[0.01]">
                    <div className="space-y-1 mb-2">
                      <p className="text-[9px] font-bold uppercase text-brand-cyan/80 tracking-wider">Histórico de Investimento Semanal</p>
                      <p className="text-[7px] text-white/45 font-medium leading-none">Evolução do orçamento distribuído por semana</p>
                    </div>
                    
                    <div className="h-[120px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { period: "01-04 Mai", amount: 9888.33 },
                          { period: "05-11 Mai", amount: 27644.41 },
                          { period: "12-18 Mai", amount: 28631.05 },
                          { period: "19-25 Mai", amount: 21513.74 }
                        ]} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                          <XAxis dataKey="period" stroke="#ffffff30" fontSize={8} tickLine={false} />
                          <YAxis stroke="#ffffff30" fontSize={8} tickLine={false} tickFormatter={(v) => `R$ ${Math.round(v/1000)}k`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#121214', borderColor: '#ffffff10', borderRadius: '6px' }}
                            labelStyle={{ color: '#ffffff80', fontSize: '9px', fontWeight: 'bold' }}
                            itemStyle={{ color: '#00f2ff', fontSize: '10px', fontWeight: 'bold' }}
                            formatter={(value: any) => [`R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 'Investimento']}
                          />
                          <Bar dataKey="amount" radius={[3, 3, 0, 0]}>
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="rgba(255, 255, 255, 0.08)" />
                            <Cell fill="#00f2ff" />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="border-t border-white/5 pt-1.5 mt-1.5 flex justify-between items-center leading-none">
                      <span className="text-[7px] text-white/40 uppercase tracking-widest font-bold font-sans">Investimento Geral Total:</span>
                      <span className="text-xs font-black text-brand-cyan cyan-glow italic">R$ {PERFORMANCE_DATA.weeklyInvestmentTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  {/* Compilation of Campaigns Table and KPI highlights */}
                  <div className="lg:col-span-8 flex flex-col gap-2.5">
                    {/* KPI Cards Band */}
                    <div className="grid grid-cols-3 gap-2">
                      {/* KPI 1: Investimento Campanhas */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <p className="text-white/30 text-[7px] font-bold uppercase tracking-wider leading-none mb-1">Total Investido (Canais)</p>
                        <p className="text-xs md:text-xs font-black italic text-white uppercase tracking-tighter leading-none whitespace-nowrap">
                          R$ {currentData.totalInvestment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>

                      {/* KPI 2: Quantidade de Leads Somados */}
                      <div className="glass-card p-2 rounded-xl border-brand-cyan/20 bg-brand-cyan/5 text-center flex flex-col justify-center shadow-[0_0_20px_-10px_rgba(0,242,255,0.2)] border-b-2 border-brand-cyan/40">
                        <p className="text-brand-cyan text-[7px] font-bold uppercase tracking-wider leading-none mb-1">Leads Somados (Captação)</p>
                        <p className="text-xs md:text-sm font-black italic text-brand-cyan cyan-glow uppercase tracking-tighter leading-none whitespace-nowrap">
                          {currentData.totalLeads.toLocaleString('pt-BR')} Leads
                        </p>
                      </div>

                      {/* KPI 3: CPL Médio Integrado */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <p className="text-white/30 text-[7px] font-bold uppercase tracking-wider leading-none mb-1">CPL Médio Integrado</p>
                        <p className="text-xs md:text-xs font-black italic text-emerald-400 tracking-tighter leading-none whitespace-nowrap">
                          R$ {currentData.combinedCpl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </div>
                    </div>

                    {/* Compilation of Campaigns Table */}
                    <div className="glass-card p-3 rounded-[1.25rem] border-white/5 flex flex-col justify-between bg-white/[0.01] flex-1">
                      <div className="space-y-1 mb-2">
                        <p className="text-[9px] font-bold uppercase text-brand-cyan/80 tracking-wider">Desempenho Detalhado por Campanha • {compilePeriod === '7d' ? '7 Dias' : 'Mensal'}</p>
                        <p className="text-[7px] text-white/40 font-medium leading-none">Exibição de Leads, Investimento e Eficiência em cada canal abordado</p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/5">
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1">Campanha</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Investimento</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Resultado</th>
                              <th className="text-[7px] font-black uppercase text-white/40 tracking-wider py-1 text-right">Custo Unitário</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {currentData.campaigns.map((c, idx) => (
                              <tr key={idx} className={c.highlight ? "bg-brand-cyan/5 text-brand-cyan font-bold" : "text-white/80 hover:bg-white/[0.01]"}>
                                <td className="text-[8px] py-1.5 pr-1.5 truncate max-w-[150px]">{c.name}</td>
                                <td className="text-[8px] text-right py-1.5 font-mono">R$ {c.spent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                                <td className="text-[8px] text-right py-1.5 font-bold text-white">{c.result}</td>
                                <td className="text-[8px] text-right py-1.5 font-mono text-emerald-400 font-bold">{c.metric}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-2 text-center py-1 bg-white/[0.01] border border-white/5 rounded-lg leading-tight">
                        <p className="text-[7px] font-medium text-white/45 leading-none">
                          * Nota: Contratos e leads de captação de clientes + captação ativa de novos recursos humanos integrados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {currentSlide === 0 && (
            <div className="text-center space-y-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block animate-fade-in"
              >
                <h2 className="text-brand-cyan text-sm sm:text-base font-bold tracking-[0.6em] uppercase mb-4 text-center">Apresentação de Performance</h2>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-4 uppercase text-center">
                  RESULTADOS <br />
                  <span className="text-brand-cyan cyan-glow">GOOGLE ADS</span> <br />
                  <span className="text-white">CONFIAUTO</span>
                </h1>
                <div className="h-1.5 w-24 bg-brand-cyan mx-auto mt-6" />
              </motion.div>

              <div className="pt-8 text-white/45 font-mono tracking-[0.3em] text-[10px] uppercase">
                Próximos Passos & Planejamento Estratégico • 2026
              </div>
            </div>
          )}

          {currentSlide === 1 && (
            <div className="w-full max-w-5xl px-4 flex flex-col justify-center items-center gap-3 animate-fade-in">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1 w-full">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">GOOGLE ADS</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Performance Google Ads - Visão Geral</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Resultado Consolidado da Conta • 01/06/2026 a 07/06/2026</p>
              </div>

              {/* Destaque Central de Investimento e Custo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full items-start">
                {/* Investimento */}
                <div className="glass-card p-4 rounded-2xl border-brand-cyan/20 bg-brand-cyan/5 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-[0_0_30px_-15px_rgba(0,242,255,0.15)] h-32">
                  <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic tracking-widest rounded-bl-lg">Custo Total</div>
                  <span className="text-white/40 text-[8px] font-bold uppercase tracking-[0.2em] mt-1">Investimento Google Ads</span>
                  <p className="text-2xl md:text-3xl font-black italic tracking-tighter text-brand-cyan cyan-glow leading-none my-auto">
                    R$ 5.810,50
                  </p>
                  <span className="text-white/30 text-[7px] font-mono">Últimos 07 Dias de Veiculação</span>
                </div>

                {/* Conversões Principais e Interações Diretas */}
                <div className="flex flex-col gap-3 w-full">
                  {/* Conversões Principais */}
                  <div className="glass-card p-4 rounded-2xl border-brand-cyan/35 bg-brand-cyan/10 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-[0_0_40px_-15px_rgba(0,242,255,0.25)] h-32">
                    <div className="absolute top-0 right-0 p-1.5 bg-brand-cyan text-brand-black font-black text-[6px] uppercase italic tracking-widest rounded-bl-lg">Hot Leads</div>
                    <span className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.2em] mt-1">Conversões Principais</span>
                    <div className="flex items-center gap-2 my-auto">
                      <Users className="text-brand-cyan animate-pulse" size={18} />
                      <p className="text-3xl md:text-4xl font-black italic tracking-tighter text-white leading-none">
                        54
                      </p>
                    </div>
                    <span className="text-brand-cyan/70 text-[7px] font-mono font-bold tracking-wider uppercase">Formulários de Cotação Ativos</span>
                  </div>

                  {/* Ligações + WhatsApp Cards Side-by-Side */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Calls from Ads */}
                    <div className="glass-card p-3 rounded-xl border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                      <span className="text-white/40 text-[7.5px] font-bold uppercase tracking-wider">Ligações</span>
                      <p className="text-lg md:text-xl font-black italic tracking-tight text-white mt-1 font-mono">
                        64
                      </p>
                    </div>

                    {/* Whats started */}
                    <div className="glass-card p-3 rounded-xl border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                      <span className="text-white/40 text-[7.5px] font-bold uppercase tracking-wider">WhatsApp</span>
                      <p className="text-lg md:text-xl font-black italic tracking-tight text-white mt-1 font-mono">
                        40
                      </p>
                    </div>
                  </div>
                </div>

                {/* Custo/Conv. (Destaque!) */}
                <div className="glass-card p-4 rounded-2xl border-brand-cyan/35 bg-brand-cyan/10 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-[0_0_40px_-15px_rgba(0,242,255,0.25)] h-32">
                  <span className="text-brand-cyan text-[8px] font-bold uppercase tracking-[0.2em] mt-1">Custo por Conversão</span>
                  <div className="flex items-center gap-2 my-auto">
                    <Target className="text-brand-cyan" size={18} />
                    <p className="text-2xl md:text-3xl font-black italic tracking-tighter text-white leading-none">
                      R$ 107,63
                    </p>
                  </div>
                  <span className="text-brand-cyan/70 text-[7px] font-mono font-bold tracking-wider uppercase">Média Geral Computada</span>
                </div>
              </div>

              {/* Grid Secundária de Métricas de Apoio */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {/* Taxa de Conversão */}
                <div className="glass-card p-3 rounded-xl border-brand-cyan/25 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                  <span className="text-brand-cyan text-[7.5px] font-bold uppercase tracking-wider">Tx. Conversão</span>
                  <p className="text-lg md:text-xl font-black italic tracking-tight text-brand-cyan cyan-glow mt-1 font-mono">
                    5,35%
                  </p>
                  <span className="text-white/20 text-[6px] font-bold uppercase mt-0.5">Formulários / Cliques</span>
                </div>

                {/* Cliques Gerados */}
                <div className="glass-card p-3 rounded-xl border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                  <span className="text-white/40 text-[7.5px] font-bold uppercase tracking-wider">Cliques Gerados</span>
                  <p className="text-lg md:text-xl font-black italic tracking-tight text-white mt-1">
                    1.008
                  </p>
                  <span className="text-white/20 text-[6px] font-bold uppercase mt-0.5">Tráfego Qualificado</span>
                </div>

                {/* Impressões */}
                <div className="glass-card p-3 rounded-xl border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                  <span className="text-white/40 text-[7.5px] font-bold uppercase tracking-wider">Impressões</span>
                  <p className="text-lg md:text-xl font-black italic tracking-tight text-white mt-1">
                    11.346
                  </p>
                  <span className="text-white/20 text-[6px] font-bold uppercase mt-0.5">Exposições Google</span>
                </div>

                {/* CTR Médio */}
                <div className="glass-card p-3 rounded-xl border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                  <span className="text-white/40 text-[7.5px] font-bold uppercase tracking-wider">CTR Médio</span>
                  <p className="text-lg md:text-xl font-black italic tracking-tight text-white mt-1 font-mono">
                    8,88%
                  </p>
                  <span className="text-emerald-400/85 text-[6px] font-bold uppercase mt-0.5 font-bold">Excelente CTR</span>
                </div>
              </div>

              {/* Observação Estratégica no Rodapé do Slide */}
              <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-left shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="text-[8px] font-black uppercase text-brand-cyan tracking-[0.2em]">Observações & Alertas Rápidos</span>
                </div>
                <p className="text-white/60 text-[10px] md:text-xs leading-relaxed font-semibold">
                  O CTR médio de <strong>8,88%</strong> está excelente, refletindo alta intenção das pesquisas. Entretanto, as interações diretas (ligações e WhatsApp) somam <strong>104 contatos</strong> que não estão configurados como conversão principal. Integrar e rastrear corretamente esse tráfego é prioridade máxima.
                </p>
              </div>
            </div>
          )}

          {currentSlide === 2 && (
            <div className="w-full max-w-5xl px-4 pt-10 md:pt-16 flex flex-col justify-center items-center gap-3 animate-fade-in">
              <div className="flex flex-col items-center gap-1.5 text-center mb-1 w-full">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">GOOGLE ADS</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Campanhas de Pesquisa Ativas</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic">Organização e Direcionamento Tático dos Anúncios no Google</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                {/* Lado Esquerdo: Estrutura das Campanhas */}
                <div className="md:col-span-7 flex flex-col gap-3">
                  <div className="glass-card p-4 rounded-2xl border-white/5 bg-white/[0.01] flex flex-col gap-2.5">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase text-brand-cyan tracking-[0.15em] block">Estrutura das Campanhas</span>
                      <p className="text-white/40 text-[8px] font-mono">Segmentações Ativas e Objetivos de Captação</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {/* Campanha Institucional */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/25 transition-colors">
                        <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan leading-none">Campanha Institucional</span>
                        <p className="text-[10.5px] md:text-xs text-white/80 leading-snug font-semibold mt-1">
                          Fortalecimento da presença da marca e captação de pesquisas relacionadas à empresa.
                        </p>
                      </div>

                      {/* Campanha Proteção Veicular */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/25 transition-colors">
                        <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan leading-none">Campanha Proteção Veicular</span>
                        <p className="text-[10.5px] md:text-xs text-white/80 leading-snug font-semibold mt-1">
                          Captação de usuários com alta intenção de contratação de proteção veicular.
                        </p>
                      </div>

                      {/* Campanha Concorrentes */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/25 transition-colors">
                        <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan leading-none">Campanha Concorrentes</span>
                        <p className="text-[10.5px] md:text-xs text-white/80 leading-snug font-semibold mt-1">
                          Estratégia voltada para usuários pesquisando empresas concorrentes no Google.
                        </p>
                      </div>

                      {/* Campanha Seguro Veicular */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/25 transition-colors">
                        <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan leading-none">Campanha Seguro Veicular</span>
                        <p className="text-[10.5px] md:text-xs text-white/80 leading-snug font-semibold mt-1">
                          Atração de clientes buscando alternativas relacionadas a seguro automotivo.
                        </p>
                      </div>
                    </div>

                    {/* Campanha Cidades com Sedes & Teste CRM */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-0.5">
                      {/* Campanha Cidades com Sedes */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between hover:border-brand-cyan/25 transition-colors">
                        <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan leading-none">Campanha Cidades com Sedes</span>
                        <p className="text-[10.5px] md:text-xs text-white/80 leading-snug font-semibold mt-1">
                          Segmentação regional focada nas cidades com operação e presença física.
                        </p>
                      </div>

                      {/* Campanha Teste CRM */}
                      <div className="border border-brand-cyan/35 bg-brand-cyan/5 rounded-xl p-2.5 flex flex-col justify-between shadow-[0_0_15px_-5px_rgba(0,242,255,0.1)]">
                        <div>
                          <span className="text-xs md:text-sm font-black italic uppercase text-brand-cyan cyan-glow leading-none">Campanha Teste CRM</span>
                          <div className="flex flex-col gap-0.5 mt-1.5 font-mono text-[8px] md:text-[9px] font-bold text-white/90 uppercase">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                              PROTEÇÃO VEICULAR TESTE CRM
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                              INSTITUCIONAL TESTE CRM
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                              CONCORRENTES TESTE CRM
                            </span>
                          </div>
                        </div>
                        <p className="text-[10px] md:text-[11px] text-brand-cyan leading-tight font-black mt-1.5">
                          Testes de validação do envio e recebimento de leads via CRM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Estratégia Utilizada */}
                <div className="md:col-span-5 flex flex-col">
                  <div className="glass-card p-4 rounded-2xl border-brand-cyan/20 bg-brand-cyan/[0.02] flex flex-col gap-3 h-full shadow-[0_0_30px_-15px_rgba(0,242,255,0.15)]">
                    <div>
                      <span className="text-[8px] font-black uppercase text-brand-cyan tracking-[0.15em] block">Estratégia Utilizada</span>
                      <p className="text-white/40 text-[7px] font-mono">Fundamentos de Performance no canal Google</p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-2.5">
                      {[
                        "Todas as campanhas operando na Rede de Pesquisa do Google",
                        "Estratégia focada em intenção de geração de leads",
                        "Campanhas segmentadas por objetivo estratégico",
                        "Estrutura otimizada para geração de leads e conversões",
                        "Estratégia de maximização de conversões aplicada nas campanhas",
                        "Integração e validação de rastreamento via CRM"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 bg-white/[0.01] border border-white/5 rounded-xl p-2.5 hover:border-brand-cyan/15 transition-colors">
                          <div className="p-1 bg-brand-cyan/10 rounded text-brand-cyan mt-0.5 flex-shrink-0 animate-pulse">
                            <Target size={11} />
                          </div>
                          <span className="text-white/80 text-[10px] md:text-xs font-semibold leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentSlide === 3 && (() => {
            const campaigns = [
              {
                name: "Institucional",
                fullName: "[AEG] [RP] - INSTITUCIONAL",
                spent: "R$ 937,62",
                cliques: "350",
                impressions: "2.660",
                ctr: "13,16%",
                leads: "23,00",
                whatsapp: "0",
                ligacoes: "16,17",
                conversionRate: "6,57%",
                cpl: "R$ 40,77",
                topPage: "85,00%",
                strategy: "Melhor desempenho geral do período, apresentando o menor custo por conversão da conta.",
                tag: "Melhor Volume & Eficiência",
                isTest: false
              },
              {
                name: "Concorrentes",
                fullName: "[AEG] [RP] - CONCORRENTES",
                spent: "R$ 1.229,11",
                cliques: "111",
                impressions: "2.525",
                ctr: "4,40%",
                leads: "20",
                whatsapp: "2",
                ligacoes: "1,00",
                conversionRate: "17,57%",
                cpl: "R$ 63,03",
                topPage: "82,54%",
                strategy: "Excelente taxa de conversão direta. Embora o CPC seja elevado devido a leilões de concorrência, o retorno em leads é representativo.",
                tag: "Alta Taxa de Conversão",
                isTest: false
              },
              {
                name: "Proteção Veicular",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR",
                spent: "R$ 896,72",
                cliques: "84",
                impressions: "960",
                ctr: "8,75%",
                leads: "7",
                whatsapp: "1",
                ligacoes: "6,83",
                conversionRate: "7,72%",
                cpl: "R$ 138,30",
                topPage: "83,19%",
                strategy: "Custo por conversão elevado. Campanha principal que necessita de otimizações de criativos e negativizações constantes.",
                tag: "Campanha Principal / Escala",
                isTest: false
              },
              {
                name: "Cidades com Sedes",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR | CIDADES COM SEDES",
                spent: "R$ 216,91",
                cliques: "85",
                impressions: "506",
                ctr: "16,80%",
                leads: "1,00",
                whatsapp: "9",
                ligacoes: "6,00",
                conversionRate: "1,18%",
                cpl: "R$ 216,91",
                topPage: "85,57%",
                strategy: "CTR excelente de 16,80% e CPC baixo, mas baixa taxa de conversão direta. As 9 conversas iniciadas no WhatsApp não estão sendo rastreadas como conversão principal.",
                tag: "Máxima Atração / Baixo Rastreio",
                isTest: false
              },
              {
                name: "Seguro Veicular",
                fullName: "[AEG] [RP] - SEGURO VEICULAR",
                spent: "R$ 702,78",
                cliques: "32",
                impressions: "519",
                ctr: "6,17%",
                leads: "4,00",
                whatsapp: "1",
                ligacoes: "0",
                conversionRate: "12,50%",
                cpl: "R$ 175,70",
                topPage: "85,85%",
                strategy: "Maior custo por conversão da conta. CPC muito elevado (R$ 21,96) encarece o resultado final. Exige atenção imediata.",
                tag: "Maior CPC / Atenção",
                isTest: false
              },
              {
                name: "Inst. - Teste CRM",
                fullName: "[AEG] [RP] - INSTITUCIONAL TESTE CRM",
                spent: "R$ 349,01",
                cliques: "167",
                impressions: "1.678",
                ctr: "9,95%",
                leads: "0",
                whatsapp: "8",
                ligacoes: "9,50",
                conversionRate: "0,00%",
                cpl: "R$ 0,00",
                topPage: "72,91%",
                strategy: "ALERTA — Investiu R$ 349,01 sem nenhuma conversão principal ativa. Registrou 8 conversas no WhatsApp e ligações; checar fluxo do CRM.",
                tag: "Validação Tática de CRM",
                isTest: true
              },
              {
                name: "Prot. V. - Teste CRM",
                fullName: "[AEG] [RP] - PROTEÇÃO VEÍCULAR TESTE CRM",
                spent: "R$ 1.072,36",
                cliques: "137",
                impressions: "1.525",
                ctr: "8,98%",
                leads: "0",
                whatsapp: "13",
                ligacoes: "7,50",
                conversionRate: "0,00%",
                cpl: "R$ 0,00",
                topPage: "78,37%",
                strategy: "ALERTA CRÍTICO — R$ 1.072,36 investidos sem conversão ativa rastreada. Alto tráfego desperdiçado sem tagueamento unificado de CRM.",
                tag: "Validação Técnica de CRM",
                isTest: true
              },
              {
                name: "Conc. - Teste CRM",
                fullName: "[AEG] [RP] - CONCORRENTES TESTE CRM",
                spent: "R$ 405,99",
                cliques: "42",
                impressions: "973",
                ctr: "4,32%",
                leads: "0",
                whatsapp: "6",
                ligacoes: "0",
                conversionRate: "0,00%",
                cpl: "R$ 0,00",
                topPage: "75,42%",
                strategy: "ALERTA — R$ 405,99 consumidos com 0 conversões diretas contabilizadas. Necessário unificar o fluxo de disparo de eventos.",
                tag: "Validação Técnica de CRM",
                isTest: true
              }
            ];

            const selected = campaigns[activeGoogleCampaign] || campaigns[0];

            return (
              <div className="w-full max-w-5xl px-4 pt-2 md:pt-4 flex flex-col justify-center items-center gap-2.5 animate-fade-in">
                <div className="flex flex-col items-center gap-1 text-center w-full">
                  <span className="text-brand-cyan font-black italic text-sm md:text-base uppercase tracking-[0.2em] leading-none">GOOGLE ADS</span>
                  <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Performance Individual das Campanhas — Junho</h2>
                  <div className="h-0.5 w-12 bg-white/10 my-1" />
                  <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none">Visão Analítica Completa por Objetivo Tático Operacional</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 w-full items-stretch">
                  {/* Lado Esquerdo: Lista de Campanhas */}
                  <div className="md:col-span-4 flex flex-row md:flex-col gap-2 md:max-h-[390px] overflow-x-auto md:overflow-y-auto pr-1 pb-2 md:pb-0 scrollbar-thin">
                    <div className="hidden md:flex bg-white/[0.02] border border-white/5 rounded-xl px-2.5 py-1.5 items-center justify-between shrink-0">
                      <span className="text-[8px] font-black uppercase text-white/40 tracking-wider">Campanhas Ativas</span>
                      <span className="text-[7px] font-mono text-brand-cyan font-semibold">Selecione para ver</span>
                    </div>

                    {campaigns.map((camp, idx) => {
                      const isSelected = activeGoogleCampaign === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveGoogleCampaign(idx)}
                          className={cn(
                            "text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between select-none shrink-0 w-44 md:w-full",
                            isSelected
                              ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-[0_0_15px_-5px_rgba(0,242,255,0.15)]"
                              : "border-white/5 bg-white/[0.01] hover:border-white/20"
                          )}
                        >
                          <div className="flex justify-between items-start gap-1.5 w-full">
                            <span className={cn(
                              "text-[10px] md:text-xs font-black italic uppercase leading-none truncate max-w-[130px] md:max-w-[170px]",
                              isSelected ? "text-brand-cyan cyan-glow" : "text-white/80"
                            )}>
                              {camp.name}
                            </span>
                            <span className={cn(
                              "text-[6px] font-mono font-bold px-1 py-0.5 rounded shrink-0 uppercase leading-none",
                              camp.isTest 
                                ? "bg-amber-500/10 text-amber-500/80 border border-amber-500/10" 
                                : "bg-brand-cyan/10 text-brand-cyan/80 border border-brand-cyan/10"
                            )}>
                              {camp.isTest ? "CRM" : "Ativa"}
                            </span>
                          </div>

                          <div className="flex justify-between items-center w-full mt-2 pt-1 border-t border-white/5 leading-none">
                            <span className="text-white/40 text-[7px] font-bold font-mono">
                              Leads: <strong className={isSelected ? "text-brand-cyan" : "text-white"}>{camp.leads}</strong>
                            </span>
                            <span className="text-white/40 text-[7px] font-mono">
                              CPL: <strong className="text-emerald-400 font-bold">{camp.cpl}</strong>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Lado Direito: Dashboard Detalhado */}
                  <div className="md:col-span-8 flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-2xl p-3.5 relative overflow-hidden">
                    {/* Glowing effect inside */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />

                    {/* Header do Card Ativo */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-2.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                          <span className="text-[7.5px] font-black uppercase text-brand-cyan tracking-widest font-mono">{selected.tag}</span>
                        </div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-white leading-tight mt-0.5">
                          {selected.fullName}
                        </h3>
                      </div>
                      <div className="bg-white/5 rounded-lg px-2.5 py-1 text-right shrink-0 border border-white/5">
                        <span className="text-[6.5px] text-white/40 font-bold uppercase block tracking-wider leading-none">Investimento</span>
                        <span className="text-xs md:text-sm font-black text-brand-cyan font-mono italic leading-none block mt-0.5">{selected.spent}</span>
                      </div>
                    </div>

                    {/* KPIs Principais (Grid horizontal) */}
                    <div className="grid grid-cols-3 gap-2 mt-2.5">
                      {/* Leads do Card */}
                      <div className="glass-card p-2 rounded-xl border-brand-cyan/25 bg-brand-cyan/[0.03] text-center flex flex-col justify-center shadow-[0_0_15px_-5px_rgba(0,242,255,0.1)]">
                        <span className="text-brand-cyan/80 text-[7px] font-bold uppercase tracking-wider leading-none mb-1 flex items-center justify-center gap-1">
                          <Users size={9} /> Leads Gerados
                        </span>
                        <p className="text-lg md:text-2xl font-black italic text-white uppercase tracking-tighter leading-none font-sans py-0.5">
                          {selected.leads}
                        </p>
                        <span className="text-white/30 text-[5.5px] font-mono block">Cadastros Nativos</span>
                      </div>

                      {/* Taxa de Conversão */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <span className="text-white/40 text-[7px] font-bold uppercase tracking-wider leading-none mb-1 flex items-center justify-center gap-1">
                          <Percent size={9} /> Tx. Conversão
                        </span>
                        <p className="text-lg md:text-2xl font-black italic text-brand-cyan cyan-glow tracking-tighter leading-none font-mono py-0.5">
                          {selected.conversionRate}
                        </p>
                        <span className="text-white/30 text-[5.5px] font-mono block">Métrica de Eficiência</span>
                      </div>

                      {/* Custo/Conv (CPL) */}
                      <div className="glass-card p-2 rounded-xl border-white/5 text-center flex flex-col justify-center bg-white/[0.01]">
                        <span className="text-white/40 text-[7px] font-bold uppercase tracking-wider leading-none mb-1 flex items-center justify-center gap-1">
                          <Target size={9} /> Custo / Conv.
                        </span>
                        <p className="text-lg md:text-2xl font-black italic text-emerald-400 tracking-tighter leading-none font-mono py-0.5">
                          {selected.cpl}
                        </p>
                        <span className="text-white/30 text-[5.5px] font-mono block">Média por Contato</span>
                      </div>
                    </div>

                    {/* Operational Stats Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2.5">
                      {/* Cliques */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none">Cliques</span>
                        <span className="text-xs font-black text-white italic leading-none block mt-1 font-mono">{selected.cliques}</span>
                      </div>

                      {/* Impressões */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none">Impressões</span>
                        <span className="text-xs font-black text-white italic leading-none block mt-1 font-mono">{selected.impressions}</span>
                      </div>

                      {/* CTR */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none">CTR</span>
                        <span className="text-xs font-black text-white italic leading-none block mt-1 font-mono">{selected.ctr}</span>
                      </div>

                      {/* Conversões WhatsApp */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none flex items-center justify-center gap-0.5">
                          <MessageSquare size={7} /> Whats
                        </span>
                        <span className="text-xs font-black text-white italic leading-none block mt-1 font-mono">{selected.whatsapp}</span>
                      </div>

                      {/* Ligações */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none flex items-center justify-center gap-0.5">
                          <Phone size={7} /> Ligações
                        </span>
                        <span className="text-xs font-black text-white italic leading-none block mt-1 font-mono">{selected.ligacoes}</span>
                      </div>

                      {/* Pos Topo */}
                      <div className="border border-white/5 bg-white/[0.005] p-1.5 rounded-lg text-center">
                        <span className="text-white/30 text-[6.5px] font-bold uppercase block tracking-wider leading-none">% Topo</span>
                        <span className="text-xs font-black text-brand-cyan italic leading-none block mt-1 font-mono">{selected.topPage}</span>
                      </div>
                    </div>

                    {/* Destaque Estratégico no rodapé do dashboard */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2.5 mt-2.5 text-left flex gap-2 items-start">
                      <div className="p-1 bg-brand-cyan/10 rounded text-brand-cyan shrink-0">
                        <TrendingUp size={11} className="animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[7px] font-black uppercase tracking-widest text-brand-cyan block">Destaque Estratégico</span>
                        <p className="text-white/80 text-[10px] md:text-[11px] leading-relaxed font-semibold mt-0.5">
                          {selected.strategy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {currentSlide === 4 && (
            <div className="w-full max-w-5xl px-4 pt-4 md:pt-8 flex flex-col justify-center items-center gap-3 animate-fade-in text-white">
              {/* Header Container */}
              <div className="flex flex-col items-center gap-1.5 text-center mb-1 w-full">
                <span className="text-brand-cyan font-black italic text-lg uppercase tracking-[0.2em] leading-none">GOOGLE ADS</span>
                <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Interações Geradas — Ligações e WhatsApp</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none">Resultado Consolidado dos Canais Diretos de Conversão — Junho</p>
              </div>

              {/* Grid 2 Columns for WhatsApp and Calls */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-stretch">
                {/* Lado Esquerdo: WhatsApp */}
                <div className="md:col-span-6 flex flex-col">
                  <div className="glass-card p-4 rounded-2xl border-emerald-500/25 bg-emerald-500/[0.02] flex flex-col justify-between h-full shadow-[0_0_30px_-15px_rgba(16,185,129,0.15)] gap-3.5">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-emerald-500/10 rounded text-emerald-400">
                          <MessageSquare size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-black uppercase text-emerald-400 tracking-[0.15em] block leading-none">RESULTADOS VIA WHATSAPP</span>
                          <p className="text-white/40 text-[8px] font-mono mt-0.5 leading-none">Conversas iniciadas no período</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white/30 text-[7px] font-bold uppercase block tracking-wider leading-none">TOTAL</span>
                        <span className="text-2xl font-black text-emerald-400 font-mono italic leading-none block mt-0.5">~40</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1 justify-center">
                      {[
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR TESTE CRM", val: "13", label: "conversas", isCrm: true },
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR | CIDADES COM SEDES", val: "9", label: "conversas", isCrm: false },
                        { name: "[AEG] [RP] - INSTITUCIONAL TESTE CRM", val: "8", label: "conversas", isCrm: true },
                        { name: "[AEG] [RP] - CONCORRENTES TESTE CRM", val: "6", label: "conversas", isCrm: true },
                        { name: "[AEG] [RP] - CONCORRENTES", val: "2", label: "conversas", isCrm: false },
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR", val: "1", label: "conversa", isCrm: false },
                        { name: "[AEG] [RP] - SEGURO VEICULAR", val: "1", label: "conversa", isCrm: false },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-xl px-3.5 py-1.5 md:py-2 hover:border-emerald-500/30 transition-all">
                          <div className="flex items-center gap-2 min-w-0">
                            {item.isCrm && (
                              <span className="text-[6.5px] font-mono font-bold bg-amber-500/10 text-amber-500/80 border border-amber-500/15 px-1 py-0.5 rounded uppercase leading-none shrink-0">CRM</span>
                            )}
                            <span className="text-white/85 text-[10.5px] md:text-xs font-semibold truncate leading-none">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 ml-2">
                            <span className="text-[12.5px] md:text-sm font-black text-emerald-400 font-mono italic leading-none">{item.val}</span>
                            <span className="text-white/30 text-[7px] font-bold uppercase leading-none">{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Ligações */}
                <div className="md:col-span-6 flex flex-col">
                  <div className="glass-card p-4 rounded-2xl border-brand-cyan/25 bg-brand-cyan/[0.02] flex flex-col justify-between h-full shadow-[0_0_30px_-15px_rgba(0,242,255,0.15)] gap-3.5">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-brand-cyan/10 rounded text-brand-cyan">
                          <Phone size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-black uppercase text-brand-cyan tracking-[0.15em] block leading-none">RESULTADOS VIA LIGAÇÕES</span>
                          <p className="text-white/40 text-[8px] font-mono mt-0.5 leading-none">Chamadas diretas geradas via Google</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white/30 text-[7px] font-bold uppercase block tracking-wider leading-none">TOTAL</span>
                        <span className="text-2xl font-black text-brand-cyan font-mono italic leading-none block mt-0.5 font-bold">64</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1 justify-center">
                      {[
                        { name: "[AEG] [RP] - INSTITUCIONAL", val: "17", label: "ligações", isCrm: false },
                        { name: "[AEG] [RP] - INSTITUCIONAL TESTE CRM", val: "9,50", label: "ligações", isCrm: true },
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR TESTE CRM", val: "7,50", label: "ligações", isCrm: true },
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR", val: "6,83", label: "ligações", isCrm: false },
                        { name: "[AEG] [RP] - PROTEÇÃO VEÍCULAR | CIDADES COM SEDES", val: "6,00", label: "ligações", isCrm: false },
                        { name: "[AEG] [RP] - CONCORRENTES", val: "1,00", label: "ligação", isCrm: false },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-xl px-3.5 py-1.5 md:py-2 hover:border-brand-cyan/30 transition-all">
                          <div className="flex items-center gap-2 min-w-0">
                            {item.isCrm && (
                              <span className="text-[6.5px] font-mono font-bold bg-amber-500/10 text-amber-500/80 border border-amber-500/15 px-1 py-0.5 rounded uppercase leading-none shrink-0">CRM</span>
                            )}
                            <span className="text-white/85 text-[10.5px] md:text-xs font-semibold truncate leading-none">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0 ml-2">
                            <span className="text-[12.5px] md:text-sm font-black text-brand-cyan font-mono italic leading-none">{item.val}</span>
                            <span className="text-white/30 text-[7px] font-bold uppercase leading-none">{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Análise Estratégica no rodapé do slide */}
              <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-left shadow-lg mt-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="text-[8px] font-black uppercase text-brand-cyan tracking-[0.15em]">Análise Estratégica</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-1.5">
                  {[
                    "Alto volume de interações de alta intenção",
                    "Forte geração de contatos diretos via WhatsApp",
                    "Campanhas institucionais apresentaram maior volume de ligações",
                    "Estratégia focada em oportunidades comerciais qualificadas",
                    "Presença eficiente nas pesquisas de alta intenção do Google"
                  ].map((analise, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 bg-white/[0.01] border border-white/5 rounded-xl p-3.5 hover:border-brand-cyan/15 transition-colors">
                      <div className="p-0.5 bg-brand-cyan/10 rounded text-brand-cyan mt-0.5 shrink-0">
                        <Target size={10} />
                      </div>
                      <p className="text-white/80 text-[10px] leading-tight font-semibold">{analise}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {currentSlide === 6 && (
            <div className="w-full max-w-5xl px-4 pt-4 md:pt-6 flex flex-col justify-center items-center gap-3 md:gap-4 animate-fade-in text-white font-sans">
              {/* Header Container */}
              <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                <span className="text-brand-cyan font-black italic text-sm md:text-base uppercase tracking-[0.2em] leading-none">EXPANSÃO DE OPERAÇÃO</span>
                <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Próximas Etapas e Expansão Estratégica</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none mb-1.5">Roadmap de Ampliação de Canais e Reconhecimento — Google Ads</p>
                
                {/* Objetivo da Próxima Fase Banner */}
                <div className="w-full bg-brand-cyan/[0.02] border border-brand-cyan/25 rounded-2xl p-4 text-center shadow-[0_0_25px_-10px_rgba(0,242,255,0.15)] shrink-0 mb-1">
                  <span className="text-[8.5px] font-mono font-black text-brand-cyan tracking-widest uppercase">OBJETIVO DA PRÓXIMA FASE</span>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-semibold mt-1 max-w-3xl mx-auto">
                    Expandir a presença digital da operação no ecossistema Google, aumentando alcance, reconhecimento de marca, volume de oportunidades e presença em diferentes etapas da jornada do usuário.
                  </p>
                </div>
              </div>

              {/* 3 Blocos de Implementações */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full items-stretch">
                
                {/* Bloco 1: YOUTUBE E SHORTS */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-white/10 bg-white/[0.005] flex flex-col justify-between relative overflow-hidden hover:border-red-500/25 transition-all min-h-[300px] shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
                        <Youtube size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-white leading-none">Youtube & Shorts</h3>
                        <span className="text-[8.5px] font-mono text-white/40 font-bold tracking-wider uppercase mt-0.5 block">AUTORIDADE & GERAÇÃO DE DEMANDA</span>
                      </div>
                    </div>
                    
                    <p className="text-[10px] font-mono text-red-400 font-bold block mb-2 uppercase tracking-wide">Estratégia focada em:</p>
                    
                    <div className="flex flex-col gap-2.5">
                      {[
                        "Fortalecimento da marca no mercado de atuação",
                        "Ampliação de alcance segmentado em vídeo",
                        "Conteúdo em vídeo para reconhecimento e autoridade",
                        "Aumento da presença digital no YouTube Shorts",
                        "Geração de demanda e lembrança de marca constante"
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="p-0.5 bg-red-500/10 rounded text-red-500 mt-0.5 shrink-0">
                            <ShieldCheck size={10} />
                          </div>
                          <span className="text-white/85 text-[10.5px] md:text-[11.5px] leading-snug font-semibold">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloco 2: PERFORMANCE MAX (P-MAX) */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-brand-cyan/25 bg-brand-cyan/[0.01] flex flex-col justify-between relative overflow-hidden shadow-[0_0_20px_-10px_rgba(0,242,255,0.15)] hover:border-brand-cyan/40 transition-all min-h-[300px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan shrink-0">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-brand-cyan cyan-glow leading-none font-black italic">Performance Max (P-MAX)</h3>
                        <span className="text-[8.5px] font-mono text-white/45 font-bold tracking-wider uppercase mt-0.5 block">AUTOMAÇÃO INTELIGENTE DA CONTA</span>
                      </div>
                    </div>
                    
                    <p className="text-[10px] font-mono text-brand-cyan font-bold block mb-2 uppercase tracking-wide font-bold">Estratégia focada em:</p>
                    
                    <div className="flex flex-col gap-2.5">
                      {[
                        "Expansão automatizada de campanhas vencedoras",
                        "Maior cobertura capilarizada no ecossistema Google",
                        "Utilização de inteligência artificial para otimização",
                        "Distribuição automática inteligente entre canais Google",
                        "Escala expressiva de conversões e oportunidades qualificadas"
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="p-0.5 bg-brand-cyan/10 rounded text-brand-cyan mt-0.5 shrink-0">
                            <ShieldCheck size={10} />
                          </div>
                          <span className="text-white/90 text-[10.5px] md:text-[11.5px] leading-snug font-semibold">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloco 3: REDE DISPLAY */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-white/10 bg-white/[0.005] flex flex-col justify-between relative overflow-hidden hover:border-emerald-400/25 transition-all min-h-[300px] shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                        <RefreshCw size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-white leading-none">Rede Display</h3>
                        <span className="text-[8.5px] font-mono text-white/40 font-bold tracking-wider uppercase mt-0.5 block">REMARKETING & FREQUÊNCIA</span>
                      </div>
                    </div>
                    
                    <p className="text-[10px] font-mono text-emerald-400 font-bold block mb-2 uppercase tracking-wide">Estratégia focada em:</p>
                    
                    <div className="flex flex-col gap-2.5">
                      {[
                        "Remarketing granular para usuários que interagiram com a marca",
                        "Reforço consistente da presença digital nos parceiros",
                        "Impacto visual e estético em sites e blogs parceiros",
                        "Recuperação tática de usuários qualificados não convertidos",
                        "Ampliação da frequência diária de exposição de marca"
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="p-0.5 bg-emerald-500/10 rounded text-emerald-400 mt-0.5 shrink-0">
                            <ShieldCheck size={10} />
                          </div>
                          <span className="text-white/85 text-[10.5px] md:text-[11.5px] leading-snug font-semibold">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Expectativa da Nova Estrutura Progress Row */}
              <div className="w-full shrink-0 mt-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] md:text-xs font-black uppercase text-brand-cyan tracking-[0.15em] font-mono leading-none">Expectativa de Impacto da Nova Estrutura</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {[
                    { title: "AMPLIAÇÃO VOLUMÉTRICA", desc: "Ampliação significativa do volume de conversões da operação de forma integrada.", color: "text-brand-cyan border-brand-cyan/25 bg-brand-cyan/5" },
                    { title: "PRESENÇA DO MINUTO 1", desc: "Aumento robusto da presença e dominância da marca em todas as redes do Google.", color: "text-white/70 border-white/10 bg-white/[0.02]" },
                    { title: "JORNADA COMPLETA", desc: "Maior cobertura abrangente de todas as etapas da jornada do consumidor digital.", color: "text-brand-cyan border-brand-cyan/25 bg-brand-cyan/5" },
                    { title: "AUTORIDADE DE MARCA", desc: "Expansão da autoridade, valor percebido e reconhecimento digital de marca.", color: "text-white/70 border-white/10 bg-white/[0.02]" },
                    { title: "ESCALABILIDADE SAUDÁVEL", desc: "Estrutura estratégica mais robusta, diversificada e altamente escalável.", color: "text-brand-cyan border-brand-cyan/25 bg-brand-cyan/5" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/[0.015] border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-brand-cyan/25 transition-all min-h-[145px] shadow-sm">
                      <span className={cn("text-[9.5px] font-mono font-extrabold px-2 py-1 rounded uppercase leading-none border inline-block w-fit mb-2 bg-black/20", item.color)}>
                        {item.title}
                      </span>
                      <p className="text-white/90 text-[10.5px] md:text-xs leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentSlide === 7 && (
            <div className="w-full max-w-5xl px-4 pt-4 md:pt-6 flex flex-col justify-center items-center gap-3 md:gap-4 animate-fade-in text-white">
              {/* Header Container */}
              <div className="flex flex-col items-center gap-1 text-center w-full shrink-0">
                <span className="text-brand-cyan font-black italic text-sm md:text-base uppercase tracking-[0.2em] leading-none">PLANEJAMENTO DE MÍDIA</span>
                <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mx-auto leading-none mt-1">Próxima Etapa — Estrutura de Criativos e Expansão de Mídia</h2>
                <div className="h-0.5 w-12 bg-white/10 my-1" />
                <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-[8px] italic leading-none mb-1.5">Materiais Gráficos, Formatos e Estratégia de Conteúdo Visual</p>
                
                {/* Objetivo Banner */}
                <div className="w-full bg-brand-cyan/[0.02] border border-brand-cyan/25 rounded-2xl p-4 text-center shadow-[0_0_25px_-10px_rgba(0,242,255,0.15)] shrink-0 mb-1">
                  <span className="text-[8.5px] font-mono font-black text-brand-cyan tracking-widest uppercase">OBJETIVO DA NOVA FASE</span>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-semibold mt-1 max-w-3xl mx-auto">
                    Desenvolver novos formatos de criativos e ampliar a presença da marca dentro do ecossistema Google, utilizando campanhas visuais, vídeos e estratégias de remarketing para aumentar alcance, reconhecimento e geração de oportunidades.
                  </p>
                </div>
              </div>

              {/* 3 Blocos de Criativos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full items-stretch">
                
                {/* YOUTUBE E YOUTUBE SHORTS */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-white/10 bg-white/[0.005] flex flex-col justify-between relative overflow-hidden hover:border-red-500/20 transition-all min-h-[300px] shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
                        <Video size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-white leading-none">YouTube & Shorts</h3>
                        <span className="text-[8.5px] font-mono text-white/40 font-bold tracking-wider uppercase mt-0.5 block">Formatos, Proporções & Tempos</span>
                      </div>
                    </div>
                    
                    {/* Format Section */}
                    <div className="mb-3">
                      <span className="text-[9.5px] md:text-[10px] font-mono text-red-400 font-black block uppercase tracking-wide mb-1.5 uppercase">Formatos de Vídeo:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Institucionais", "Shorts verticais", "Ofertas e campanhas", "Conteúdo de autoridade", "Retenção & visual"].map((item, id) => (
                          <span key={id} className="text-[9.5px] md:text-[10.5px] font-bold bg-white/5 hover:bg-white/10 text-white/95 px-2.5 py-1 rounded border border-white/10 cursor-default transition-colors">{item}</span>
                        ))}
                      </div>
                    </div>

                    {/* Proportions & Duration */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/5">
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">PROPORÇÕES</span>
                        <div className="flex flex-col gap-0.5 text-[11px] md:text-xs font-bold text-white/[0.85]">
                          <span>Shorts: <strong className="text-red-400 font-extrabold">9:16</strong></span>
                          <span>YouTube: <strong className="text-white font-extrabold">16:9</strong></span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">DURAÇÃO REC.</span>
                        <div className="flex flex-col gap-0.5 text-[11px] md:text-xs font-bold text-white/[0.85]">
                          <span>Shorts: <strong className="text-red-400 font-mono font-extrabold">15s a 45s</strong></span>
                          <span>Reg.: <strong className="text-white font-mono font-extrabold">30s a 90s</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REDE DISPLAY GOOGLE */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-white/10 bg-white/[0.005] flex flex-col justify-between relative overflow-hidden hover:border-emerald-400/20 transition-all min-h-[300px] shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
                        <ImageIcon size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-white leading-none">Rede Display Google</h3>
                        <span className="text-[8.5px] font-mono text-white/40 font-bold tracking-wider uppercase mt-0.5 block">Anúncios Gráficos & Dimensões</span>
                      </div>
                    </div>

                    {/* Format Section */}
                    <div className="mb-3">
                      <span className="text-[9.5px] md:text-[10px] font-mono text-emerald-400 font-black block uppercase tracking-wide mb-1.5 uppercase">Materiais Gráficos:</span>
                      <div className="flex flex-wrap gap-1.5 flex-row">
                        {["Banners inst.", "Promocionais", "Remarketing visual", "Recuperação", "Presença"].map((item, id) => (
                          <span key={id} className="text-[9.5px] md:text-[10.5px] font-bold bg-white/5 hover:bg-white/10 text-white/95 px-2.5 py-1 rounded border border-white/10 cursor-default transition-colors">{item}</span>
                        ))}
                      </div>
                    </div>

                    {/* Core Formats & Objectives */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/5">
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">DIMENSÕES DESTAQUE</span>
                        <div className="text-[9.5px] font-bold text-white/90 flex flex-wrap gap-1 font-mono max-h-[60px] overflow-y-auto">
                          {["1080x1080", "1200x628", "300x250", "336x280", "728x90", "160x600", "300x600"].map((fmt, idx) => (
                            <span key={idx} className="bg-white/10 px-1.5 py-0.5 rounded border border-white/10 text-[8.5px] tracking-tight">{fmt}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">OBJETIVO CHAVE</span>
                        <div className="text-[10px] md:text-[11px] font-bold text-emerald-400 font-semibold flex flex-col gap-0.5">
                          <span>• Remarketing tático</span>
                          <span>• Máximo alcance</span>
                          <span>• Frequência de marca</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PERFORMANCE MAX (P-MAX) */}
                <div className="glass-card p-5 md:p-6 rounded-2xl border-brand-cyan/25 bg-brand-cyan/[0.01] flex flex-col justify-between relative overflow-hidden shadow-[0_0_20px_-10px_rgba(0,242,255,0.15)] hover:border-brand-cyan/40 transition-all min-h-[300px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/10 blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-white/5">
                      <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan shrink-0">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-black italic uppercase text-brand-cyan cyan-glow leading-none">Performance Max (P-MAX)</h3>
                        <span className="text-[8.5px] font-mono text-white/40 font-bold tracking-wider uppercase mt-0.5 block">Componentes & IA no Ecossistema</span>
                      </div>
                    </div>

                    {/* Needed Assets */}
                    <div className="mb-3">
                      <span className="text-[9.5px] md:text-[10px] font-mono text-brand-cyan font-black block uppercase tracking-wide mb-1.5 uppercase">Materiais Necessários:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Headlines", "Descrições", "Logos", "Quadradas", "Horizontais", "Vídeos", "Promo"].map((item, id) => (
                          <span key={id} className="text-[9.5px] md:text-[10.5px] font-bold bg-brand-cyan/10 text-white/95 px-2.5 py-1 rounded border border-brand-cyan/20">{item}</span>
                        ))}
                      </div>
                    </div>

                    {/* Proportions & Setup */}
                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/5">
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">PROPORÇÕES PRINCIPAIS</span>
                        <div className="flex flex-col gap-0.5 text-[11px] md:text-xs font-bold text-white/90 font-mono">
                          <span>Quadrado: <strong className="text-brand-cyan font-extrabold">1:1</strong></span>
                          <span>Horiz.: <strong className="text-white font-extrabold">1.91:1</strong></span>
                          <span>Vert.: <strong className="text-brand-cyan font-extrabold">4:5 | 9:16</strong></span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-white/40 uppercase block mb-1 font-semibold">OBJETIVO CHAVE</span>
                        <div className="text-[10px] md:text-[11px] font-bold text-brand-cyan font-semibold flex flex-col gap-0.5 font-bold">
                          <span>• Escala autogerida</span>
                          <span>• Distribuição inteligente</span>
                          <span>• Cobertura completa</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Estratégia da Nova Fase Row */}
              <div className="w-full shrink-0 mt-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] md:text-xs font-black uppercase text-brand-cyan tracking-[0.15em] font-mono leading-none">Estratégia Unificada da Nova Fase</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {[
                    "Ampliação da presença digital da marca",
                    "Estrutura multicanal dentro do Google",
                    "Aumento da frequência de impacto",
                    "Maior reconhecimento e autoridade",
                    "Expansão da geração de oportunidades",
                    "Estrutura mais robusta e escalável"
                  ].map((estrategia, idx) => (
                    <div key={idx} className="bg-white/[0.015] border border-white/10 rounded-xl p-4 flex items-center gap-3.5 hover:border-brand-cyan/25 transition-all text-left min-h-[75px] md:min-h-[85px] shadow-sm">
                      <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan shrink-0">
                        <Target size={15} />
                      </div>
                      <p className="text-white/95 text-xs md:text-sm font-semibold leading-relaxed">
                        {estrategia}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </SlideWrapper>
      </main>

      {/* Footer / Controls */}
      <footer className="py-4 px-6 md:py-5 md:px-8 flex justify-between items-center z-50">
        <div className="flex gap-4">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                currentSlide === i ? "w-12 bg-brand-cyan" : "w-3 bg-white/10"
              )} 
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-brand-cyan transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="px-6 h-12 rounded-full bg-white text-brand-black font-black italic tracking-widest flex items-center gap-2 hover:bg-brand-cyan transition-all active:scale-95 shadow-xl text-xs sm:text-sm"
          >
             {currentSlide === totalSlides - 1 ? "REINICIAR" : "PRÓXIMO"} <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
