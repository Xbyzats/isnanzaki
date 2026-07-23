"use client";

import { useState, useEffect } from "react";
import { 
  Code2, Database, Shield, Bot, Braces, 
  Mail, Phone, Briefcase, Download, FolderGit2,
  LineChart, Workflow, Rocket, Cpu, ShoppingCart,
  Activity, Terminal as TerminalIcon, Zap, ChevronRight, CheckCircle2
} from "lucide-react";

export default function Portfolio() {
  // --- STATES ---
  const [isBooting, setIsBooting] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [terminalText, setTerminalText] = useState("");
  
  // Typing Effect States
  const roles = ["Software Engineer.", "Tech Entrepreneur.", "System Analyst."];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // --- EFFECTS ---
  // 1. Booting Screen (Dipercepat jadi 2.5 detik biar lebih snappy)
  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll Progress Bar & Reveal Animation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    
    // Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-95');
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // 3. Main Hero Typing Effect
  useEffect(() => {
    if (isBooting) return; 
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, isBooting]);

  // 4. Terminal Typing Effect
  const terminalLines = "> Executing profile_build.sh...\n> Compiling business logic...\n> Integrating AI modules...\n> STATUS: SYSTEM ONLINE & READY FOR COLLABORATION.";
  useEffect(() => {
    if (isBooting) return;
    let i = 0;
    const termInterval = setInterval(() => {
      setTerminalText(terminalLines.substring(0, i));
      i++;
      if (i > terminalLines.length) clearInterval(termInterval);
    }, 40);
    return () => clearInterval(termInterval);
  }, [isBooting]);


  return (
    <div className="bg-[#030303] text-gray-200 min-h-screen font-sans scroll-smooth selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* Background Grid Pattern (Bikin Megah) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* --- SCROLL PROGRESS BAR --- */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-[100] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* --- SPLASH SCREEN (CLEAN & ELEGANT) --- */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] transition-all duration-700 ease-in-out ${
          isBooting ? "opacity-100 visible" : "opacity-0 invisible -translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          {/* Nama dan Title */}
          <h1 className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white uppercase mb-3 drop-shadow-lg">
            Isnan Zaki
          </h1>
          <p className="text-xs md:text-sm tracking-[0.4em] text-gray-500 font-mono mb-10 uppercase">
            Software Engineer
          </p>

          {/* Indikator Status */}
          <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            {/* Titik indikator kelap-kelip cyan */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs text-cyan-400 font-mono tracking-wider">
              Initiating Workspace...
            </span>
          </div>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5 py-5 px-6 md:px-12 flex justify-between items-center z-50">
        <h2 className="text-3xl font-black tracking-tighter cursor-pointer group">
          IZ<span className="text-cyan-400 group-hover:text-indigo-500 transition-colors">.</span>
        </h2>
        <ul className="hidden md:flex gap-10 text-xs tracking-widest uppercase font-bold text-gray-400">
          <li><a href="#home" className="hover:text-cyan-400 transition-colors">Core</a></li>
          <li><a href="#metrics" className="hover:text-cyan-400 transition-colors">Impact</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Stack</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Ventures</a></li>
        </ul>
        <a href="#contact" className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
          <Zap size={16} /> Engage
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] p-8 md:p-16 gap-10">
        
        {/* Cinematic Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl relative z-10 mt-10 md:mt-0 reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 uppercase tracking-widest backdrop-blur-md">
            <Activity size={14} className="animate-pulse" /> Status: Ready for Deployment.
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-700 drop-shadow-2xl">
            Isnan Zaki<br />Ramanda.
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-cyan-400 font-bold mb-8 h-12 flex items-center">
            {displayText}
            <span className="animate-[ping_1s_infinite] ml-2 w-3 h-10 bg-cyan-400 inline-block"></span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Tidak sekadar menulis kode, saya merancang ekosistem. Memadukan arsitektur perangkat lunak dengan ketajaman strategi bisnis untuk melahirkan solusi yang skalabel, aman, dan mendominasi pasar.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="group flex items-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105">
              Explore Vault <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="group flex items-center gap-3 bg-transparent border-2 border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 backdrop-blur-sm">
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>

        <div className="relative z-10 reveal-on-scroll opacity-0 translate-y-20 scale-95 transition-all duration-1000 delay-300 ease-out">
          {/* Floating Profile Picture with High-End Border */}
          <div className="relative p-1 rounded-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent shadow-[0_0_80px_rgba(34,211,238,0.2)] animate-[bounce_6s_infinite_ease-in-out]">
            <img 
              src="/zaki-profile.jpg" 
              alt="Profile" 
              className="rounded-full w-64 h-64 md:w-[400px] md:h-[400px] object-cover border-8 border-[#030303] filter contrast-125 transition-all duration-700"
            />
            {/* Dekorasi HUD (Heads Up Display) di pinggir foto */}
            <div className="absolute top-10 -left-6 bg-[#030303] border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md flex items-center gap-2 animate-[pulse_3s_infinite]">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-mono text-gray-300">Isnan Zaki</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW FEATURE: IMPACT METRICS --- */}
      <section id="metrics" className="py-16 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          {[
            { value: "100%", label: "Business Logic Driven" },
            { value: "24/7", label: "Automated Systems" },
            { value: "1 Year", label: "Security Mindset" },
            { value: "Multi", label: "Platform Ecosystems" }
          ].map((metric, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-2">{metric.value}</h3>
              <p className="text-xs text-gray-500 tracking-widest uppercase font-semibold">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW FEATURE: TERMINAL CONSOLE --- */}
      <section className="py-24 px-8 md:px-24 relative z-10">
        <div className="max-w-5xl mx-auto reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="ml-4 text-xs font-mono text-gray-500 flex items-center gap-2"><TerminalIcon size={12}/> isnan_zaki@root: ~/vision</p>
            </div>
            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm md:text-base text-cyan-400 leading-relaxed whitespace-pre-line h-48 md:h-40">
              {terminalText}
              <span className="animate-pulse inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-1"></span>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH & BIZ STACK --- */}
      <section id="skills" className="py-24 px-8 md:px-24 relative z-10 bg-white/[0.01] border-y border-white/5">
        <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white tracking-tighter mb-4">The Arsenal</h2>
            <p className="text-gray-400 text-lg">Persenjataan teknologi dan strategi bisnis yang saya kuasai.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Braces size={40}/>, color: "text-cyan-400", title: "Python", desc: "Data analysis & automations." },
              { icon: <Code2 size={40}/>, color: "text-indigo-400", title: "C# (.NET)", desc: "Enterprise scale systems." },
              { icon: <Shield size={40}/>, color: "text-red-400", title: "Cyber Sec", desc: "OWASP & Vuln Analysis." },
              { icon: <Database size={40}/>, color: "text-emerald-400", title: "SQL Server", desc: "Relational architecture." },
              { icon: <LineChart size={40}/>, color: "text-amber-400", title: "Market Data", desc: "Financial trading analysis." },
              { icon: <Briefcase size={40}/>, color: "text-purple-400", title: "Brand Strategy", desc: "HPP & Commercial flow." },
              { icon: <Workflow size={40}/>, color: "text-blue-400", title: "API Integration", desc: "Seamless data routing." },
              { icon: <Bot size={40}/>, color: "text-pink-400", title: "Gen-AI", desc: "Prompt engineering." }
            ].map((skill, index) => (
              <div key={index} className="group relative bg-[#080808] border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/30">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`${skill.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-500 font-light">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED VENTURES --- */}
      <section id="projects" className="py-32 px-8 md:px-24 relative z-10">
        <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-5xl font-black text-white tracking-tighter mb-4">Selected Ventures</h2>
              <p className="text-gray-400 text-lg max-w-xl">Portofolio proyek di mana logika algoritma bertemu dengan kebutuhan operasional bisnis.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
              View All Archives <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <div className="flex flex-col bg-[#050505] border border-white/10 p-10 rounded-[2rem] hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="bg-cyan-500/10 text-cyan-400 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Database size={32} />
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                  <CheckCircle2 size={12} /> LKS Ready
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white">Enterprise Desktop System</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Perangkat lunak C# dan SQL Server untuk manajemen bisnis. Simulasi LKS yang berfokus pada keandalan data relasional dan efisiensi operasional tingkat tinggi.
              </p>
              
              <div className="flex gap-2 relative z-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">C# .NET</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">SQL Server</span>
              </div>
            </div>

            {/* Card 2: Shop Bot */}
            <div className="flex flex-col bg-[#050505] border border-white/10 p-10 rounded-[2rem] hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="bg-indigo-500/10 text-indigo-400 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <ShoppingCart size={32} />
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                  <Activity size={12} /> Auto 24/7
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white">Automated Shop Bot</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Otomatisasi toko digital menggunakan Bot API. Menangani manajemen pesanan, verifikasi transaksi *seamless*, dan interaksi pelanggan secara instan tanpa intervensi manusia.
              </p>
              
              <div className="flex gap-2 relative z-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Telegram API</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Node.js</span>
              </div>
            </div>

            {/* Card 3: Analytics */}
            <div className="flex flex-col bg-[#050505] border border-white/10 p-10 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="bg-amber-500/10 text-amber-400 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <LineChart size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white">Data-Driven Analytics</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Implementasi skrip Python untuk analisis sentimen dan pemetaan tren pasar finansial. Digunakan untuk perhitungan *risk management* yang presisi.
              </p>
              
              <div className="flex gap-2 relative z-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Python</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Trading Algo</span>
              </div>
            </div>

            {/* Card 4: CRVS */}
            <div className="flex flex-col bg-[#050505] border border-white/10 p-10 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Briefcase size={32} />
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20">
                  CRVS Apparel
                </span>
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white">E-Commerce Architecture</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                Membangun fondasi *brand streetwear* komersial. Mulai dari perhitungan struktur biaya (HPP) hingga pemanfaatan Generative AI untuk mempercepat produksi aset pemasaran.
              </p>
              
              <div className="flex gap-2 relative z-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Entrepreneurship</span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">Gen-AI</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GRAND CONTACT CTA --- */}
      <section id="contact" className="py-32 px-8 md:px-24 relative z-10">
        <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] border border-white/10 p-12 md:p-20 text-center shadow-[0_0_100px_rgba(34,211,238,0.05)]">
            {/* Glowing background in CTA */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent z-0"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">Initiate Protocol.</h2>
              <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Butuh partner strategis untuk mendigitalkan bisnis Anda atau merekayasa ulang arsitektur sistem yang sudah ada? Saluran komunikasi saya selalu terbuka.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:isnanzakiramanda28@gmail.com" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <Mail size={20} /> Email Me
                </a>
                <a href="https://wa.me/6285695227637" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white border border-white/20 font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105">
                  <Phone size={20} /> WhatsApp
                </a>
                <a href="https://linkedin.com/in/isnanzaki" className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white border border-white/20 font-bold rounded-full hover:border-indigo-400 hover:text-indigo-400 transition-all hover:scale-105">
                  <Briefcase size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-10 border-t border-white/5 text-gray-600 text-sm relative z-10 bg-[#020202]">
        <p className="tracking-widest uppercase font-bold text-xs mb-2 text-gray-500">IZ.OS // VER 1.0.0</p>
        <p>© {new Date().getFullYear()} Isnan Zaki Ramanda. Engineered for Scale & Commerce.</p>
      </footer>

    </div>
  );
}
