import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Layers, MapPin, Terminal } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import profile from "/image/IMG2.webp";

const CORE_CAPABILITIES = [
  { label: "Frontend Systems", desc: "React · Next.js · TypeScript · Tailwind", color: "text-indigo-400", border: "border-indigo-500/30" },
  { label: "Backend Engines", desc: "Node.js · Express · REST APIs · Auth", color: "text-emerald-400", border: "border-emerald-500/30" },
  { label: "Data Architecture", desc: "MongoDB · PostgreSQL · Redis", color: "text-amber-400", border: "border-amber-500/30" },
  { label: "Mobile Engineering", desc: "React Native (iOS & Android)", color: "text-sky-400", border: "border-sky-500/30" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Background Architectural Grid & Auras safely clipped without trapping touch scroll */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-hairline opacity-75 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />

        {/* GPU-Safe Radial Glows: High-performance, zero memory leak on mobile Safari/Chrome */}
        <div
          className="absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 h-[380px] w-[380px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Top Status & Context Bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-indigo-500/15 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wider text-emerald-300 font-medium">
              AVAILABLE FOR SELECT PROJECTS & FULL-TIME ROLES
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-amber-400" /> KERALA, INDIA
            </span>
            <span className="hidden sm:inline-block text-indigo-300/80">
              ZIHNISOFT TECHNOLOGY // FULL STACK
            </span>
          </div>
        </motion.div>

        {/* Main Content Composition */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:gap-16">
          {/* Typographic Hero Statement */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                SHIBIL // SOFTWARE ENGINEER
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.06]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-amber-200">scalable web & mobile</span> products.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              Full Stack Developer at <span className="text-white font-semibold">Zihnisoft Technology</span> specializing in the{" "}
              <span className="text-indigo-300 font-medium">MERN stack</span> and{" "}
              <span className="text-sky-300 font-medium">React Native</span>. Building multi-tenant SaaS ERP platforms, high-throughput REST APIs, and bespoke digital experiences designed for production reliability.
            </motion.p>

            {/* CTAs & Social Connections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
              >
                <span>Explore Case Studies</span>
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-950/40 px-6 py-3.5 text-sm font-medium text-indigo-100 transition hover:border-indigo-400/50 hover:bg-indigo-900/50 hover:text-white"
              >
                <span>Initiate Conversation</span>
                <ArrowUpRight size={15} className="text-indigo-400" />
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/shiibiilll"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-500/20 bg-indigo-500/[0.05] text-zinc-400 transition hover:border-indigo-400 hover:bg-indigo-500/15 hover:text-white"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shibil-k"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-500/20 bg-indigo-500/[0.05] text-zinc-400 transition hover:border-indigo-400 hover:bg-indigo-500/15 hover:text-white"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </motion.div>

            {/* Production Metrics Strip with Color Accents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 border-t border-indigo-500/15 pt-6"
            >
              <div className="border-l-2 border-indigo-500/50 pl-3 sm:pl-4">
                <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">15+</p>
                <p className="mt-1 font-mono text-[10px] sm:text-[11px] text-indigo-300/80 uppercase tracking-wider">ERP Modules Shipped</p>
              </div>
              <div className="border-l-2 border-amber-500/50 pl-3 sm:pl-4">
                <p className="font-display text-xl font-bold tracking-tight text-amber-400 sm:text-2xl lg:text-3xl">06+</p>
                <p className="mt-1 font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider">Production Systems</p>
              </div>
              <div className="border-l-2 border-emerald-500/50 pl-3 sm:pl-4">
                <p className="font-display text-xl font-bold tracking-tight text-emerald-400 sm:text-2xl lg:text-3xl">100%</p>
                <p className="mt-1 font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider">Full Stack & Mobile</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Plate: Art-Directed Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            {/* Ambient Aura behind the frame: GPU-safe radial gradient */}
            <div
              className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl opacity-70"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.25) 0%, rgba(14, 165, 233, 0.12) 40%, transparent 70%)",
              }}
            />

            {/* Frame border with precision corner marks */}
            <div className="relative rounded-2xl border border-indigo-500/30 bg-[#0c1222]/90 p-3 shadow-2xl sm:p-4">
              {/* Corner crosshairs in radiant amber */}
              <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-amber-400 select-none font-bold">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-amber-400 select-none font-bold">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-amber-400 select-none font-bold">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-amber-400 select-none font-bold">+</div>

              {/* Image Container with subtle lighting */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-indigo-950/40 to-zinc-950">
                <img
                  src={profile}
                  alt="Shibil - Full Stack Developer"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center filter contrast-[1.05] transition duration-700"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090c15] via-[#090c15]/20 to-transparent opacity-85" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute inset-x-3 bottom-3 rounded-lg border border-indigo-500/30 bg-[#090d18]/95 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm font-semibold text-white">Shibil</p>
                      <p className="font-mono text-[11px] text-indigo-300">Full Stack Developer</p>
                    </div>
                    <div className="rounded border border-emerald-500/40 bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-medium">
                      LIVE IN PRODUCTION
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
                    <Terminal size={11} className="text-amber-400" />
                    <span>Zihnisoft Technology · ERP Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro spec badge floating adjacent */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-indigo-500/20 bg-indigo-950/20 px-4 py-2.5 font-mono text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <Layers size={13} className="text-indigo-400" />
                MERN · Next.js · React Native
              </span>
              <span className="text-indigo-400/80">ID: SHB-2026</span>
            </div>
          </motion.div>
        </div>

        {/* Technical Architecture Capabilities Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-2xl border border-indigo-500/20 bg-[#0c1224]/60 p-5 backdrop-blur-sm sm:p-6"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_CAPABILITIES.map(({ label, desc, color, border }, i) => (
              <div key={label} className={`border-l-2 ${border} pl-4`}>
                <span className={`font-mono text-[10px] ${color} uppercase tracking-widest font-semibold`}>
                  0{i + 1} // Domain
                </span>
                <p className="mt-1 font-display text-sm font-semibold text-white">{label}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
