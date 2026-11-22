import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  Moon,
  Sun,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const FEATURED_ERP = {
  id: "zihnisoft-erp",
  title: "Zihnisoft ERP Platform",
  tag: "Enterprise SaaS · Core Engineering",
  role: "Module Architect & Frontend Engineer",
  period: "Ongoing Production",
  description:
    "A multi-tenant SaaS ERP platform powering sales pipelines, customer relations, and operational analytics for enterprise clients. As part of the engineering team, I designed and developed high-density data visualizations, sales analytics engines, and modular CRM Kanban boards.",
  modules: [
    "Sales Analytics Dashboard with dynamic revenue grids & data charts",
    "CRM Kanban Pipeline with drag-and-drop deal & lead states",
    "Multi-step customer onboarding flow and marketing infrastructure",
    "Modular component library built for fast sub-module integration",
  ],
  stack: ["React", "Node.js", "Tailwind CSS", "Data Analytics"],
  lightImage: "/image/projects/erp-light.webp",
  darkImage: "/image/projects/erp-dark.webp",
};

const FEATURED_WELLNESS = {
  id: "wellnessway",
  title: "WellnessWay Healthcare System",
  tag: "Full-Stack Healthcare Engine · Personal Build",
  role: "Sole Full Stack Architect",
  period: "Production Deployment",
  description:
    "An end-to-end hospital management platform architected with three segregated authentication portals for administrators, medical doctors, and patients. Handles real-time appointment bookings, medical records, and doctor scheduling.",
  modules: [
    "Role-based access control (RBAC) across Admin, Doctor, and Patient portals",
    "Automated scheduling and conflict-free appointment booking pipeline",
    "Complete RESTful API backend integrated with MongoDB document models",
  ],
  stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  image: "/image/projects/welnessway.webp",
  live: "https://wellnessway-frontend.onrender.com/",
  github: "https://github.com/shiibiilll/WellnessWay",
};

const CLIENT_PROJECTS = [
  {
    id: "skygold-jewellery",
    title: "Sky Gold Jewellery",
    category: "Client",
    tag: "Luxury Showcase · Client Website",
    image: "/image/projects/jewellery.webp",
    live: "https://zijewellery2-demo.web.app/",
    github: "",
    description:
      "A luxury jewellery collection showcase engineered for high visual fidelity, seamless mobile browsing, and fast asset delivery.",
    highlights: ["High-resolution imagery optimization", "Mobile-first responsive architecture"],
    stack: ["React", "Tailwind CSS", "Motion"],
    accentColor: "text-amber-400",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-200",
    borderHover: "hover:border-amber-400/50",
  },
  {
    id: "grandsky-investments",
    title: "Grandsky Investments",
    category: "Client",
    tag: "Corporate Finance · Client Website",
    image: "/image/projects/investment.webp",
    live: "https://grandskyinvestmentsltd.com/",
    github: "",
    description:
      "A corporate investment firm web platform communicating financial credibility, risk frameworks, and high-conversion consultation inquiries.",
    highlights: ["Trust-centered typography & layout", "Optimized lead generation flow"],
    stack: ["React", "Tailwind CSS"],
    accentColor: "text-sky-400",
    badgeBg: "bg-sky-500/10 border-sky-500/30 text-sky-200",
    borderHover: "hover:border-sky-400/50",
  },
  {
    id: "architecture-studio",
    title: "Architecture Studio",
    category: "Client",
    tag: "Spatial Design · Client Website",
    image: "/image/projects/architecture.webp",
    live: "https://ziarc-demo.web.app/",
    github: "",
    description:
      "An architectural portfolio celebrating negative space, photographic clarity, and smooth transitions for built environment showcases.",
    highlights: ["Editorial gallery presentation", "Fluid layout transitions"],
    stack: ["React", "Tailwind CSS"],
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-200",
    borderHover: "hover:border-cyan-400/50",
  },
  {
    id: "gym-website",
    title: "Athletic Club & Gym",
    category: "Client",
    tag: "Fitness Platform · Client Website",
    image: "/image/projects/gym.webp",
    live: "https://zigym-demo.web.app/",
    github: "",
    description:
      "A high-impact athletic portal highlighting membership tiers, trainer profiles, and training programs engineered to maximize subscriber conversion.",
    highlights: ["Dynamic schedule matrix", "Action-oriented layout"],
    stack: ["React", "Tailwind CSS"],
    accentColor: "text-rose-400",
    badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-200",
    borderHover: "hover:border-rose-400/50",
  },
];

const ARCHIVE_PROJECTS = [
  {
    title: "Wallet App & Distributed API",
    tag: "Mobile & Backend",
    desc: "Cross-platform mobile expense tracker built with React Native, backed by Node.js, PostgreSQL relational storage, and Upstash Redis rate limiting.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Upstash Redis"],
    github: "https://github.com/shiibiilll/wallet-api-frontend",
    color: "text-sky-400",
  },
  {
    title: "Modular E-Commerce Engine",
    tag: "Frontend Architecture",
    desc: "Component-driven storefront featuring state-driven cart persistence, category indexing, and responsive UI components.",
    stack: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/shiibiilll/ecommerce-project",
    color: "text-indigo-400",
  },
  {
    title: "State-Driven Task Manager",
    tag: "Productivity Tool",
    desc: "Interactive task orchestration dashboard utilizing deterministic state management for adding, updating, and filtering operations.",
    stack: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/shiibiilll/task-manager",
    color: "text-amber-400",
  },
];

const FILTERS = ["All Works", "SaaS & Product", "Client Systems", "Archive"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Works");
  const [erpTheme, setErpTheme] = useState("light"); // 'light' | 'dark'

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-indigo-500/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
              02 // Selected Works
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Production case studies & shipped systems.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-indigo-300/70">
            ENTERPRISE SAAS · CLIENT PLATFORMS · FULL STACK
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all cursor-pointer ${
                activeFilter === f
                  ? "border border-indigo-500/50 bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/25"
                  : "border border-indigo-500/20 bg-indigo-950/20 text-zinc-300 hover:border-indigo-400/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* CASE STUDY 01: ZIHNISOFT ERP (FLAGSHIP ENTERPRISE INDIGO) */}
        {(activeFilter === "All Works" || activeFilter === "SaaS & Product") && (
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-[#0d1424] to-[#0a0e1a] p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
            {/* Ambient subtle backplate aura (GPU-safe radial gradient) */}
            <div
              className="pointer-events-none absolute top-10 right-10 -z-10 h-64 w-64 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)" }}
            />

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-b border-indigo-500/20 pb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-xs text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/15 border border-indigo-500/30 shrink-0">
                  CASE 01
                </span>
                <span className="text-indigo-400/40">//</span>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-indigo-200">
                  {FEATURED_ERP.tag}
                </span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-zinc-400">{FEATURED_ERP.role}</span>
            </div>

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Text & Specs (5 cols) */}
              <div className="min-w-0 w-full space-y-6 lg:col-span-5">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {FEATURED_ERP.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {FEATURED_ERP.description}
                </p>

                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-indigo-300 font-semibold">
                    Key Module Deliverables:
                  </p>
                  {FEATURED_ERP.modules.map((m) => (
                    <div key={m} className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-indigo-400" />
                      <span className="leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {FEATURED_ERP.stack.map((s) => (
                    <span key={s} className="badge-arch border-indigo-500/30 bg-indigo-500/10 text-indigo-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Dashboard Frame with Light/Dark Theme Switch (7 cols) */}
              <div className="min-w-0 w-full lg:col-span-7">
                <div className="relative w-full overflow-hidden rounded-xl border border-indigo-500/30 bg-[#090d18] p-1.5 sm:p-2 shadow-2xl">
                  {/* Browser Bar with interactive light/dark toggle */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-500/20 px-2.5 py-2 text-xs text-zinc-400 sm:px-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="ml-1 font-mono text-[11px] text-indigo-300/80 truncate">
                        erp.zihnisoft.com
                      </span>
                    </div>

                    {/* Mode Toggle */}
                    <div className="flex items-center rounded-lg border border-indigo-500/30 bg-indigo-950/40 p-0.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => setErpTheme("light")}
                        className={`flex items-center gap-1 rounded px-2 py-1 font-mono text-[10px] transition cursor-pointer ${
                          erpTheme === "light"
                            ? "bg-indigo-600 text-white font-semibold shadow-sm"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        <Sun size={11} /> Light
                      </button>
                      <button
                        type="button"
                        onClick={() => setErpTheme("dark")}
                        className={`flex items-center gap-1 rounded px-2 py-1 font-mono text-[10px] transition cursor-pointer ${
                          erpTheme === "dark"
                            ? "bg-indigo-600 text-white font-semibold shadow-sm"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        <Moon size={11} /> Dark
                      </button>
                    </div>
                  </div>

                  {/* Screenshot display */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-zinc-900">
                    <img
                      src={erpTheme === "light" ? FEATURED_ERP.lightImage : FEATURED_ERP.darkImage}
                      alt="Zihnisoft ERP Dashboard"
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CASE STUDY 02: WELLNESSWAY (FLAGSHIP HEALTHCARE EMERALD) */}
        {(activeFilter === "All Works" || activeFilter === "SaaS & Product") && (
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-[#0c181c] to-[#090d16] p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
            {/* Ambient subtle backplate aura (GPU-safe radial gradient) */}
            <div
              className="pointer-events-none absolute bottom-10 left-10 -z-10 h-64 w-64 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)" }}
            />

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-xs text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 shrink-0">
                  CASE 02
                </span>
                <span className="text-emerald-400/40">//</span>
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-emerald-200">
                  {FEATURED_WELLNESS.tag}
                </span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-zinc-400">{FEATURED_WELLNESS.role}</span>
            </div>

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Image Frame (7 cols) */}
              <div className="order-2 min-w-0 w-full lg:order-1 lg:col-span-7">
                <div className="relative w-full overflow-hidden rounded-xl border border-emerald-500/30 bg-[#090e14] p-1.5 sm:p-2 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-emerald-500/20 px-2.5 py-2 text-xs text-zinc-400 sm:px-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="ml-1 font-mono text-[11px] text-emerald-300/80 truncate">
                        wellnessway.onrender.com
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 font-medium shrink-0">LIVE SYSTEM</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-zinc-900">
                    <img
                      src={FEATURED_WELLNESS.image}
                      alt="WellnessWay Hospital Management System"
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Text & Links (5 cols) */}
              <div className="order-1 min-w-0 w-full space-y-6 lg:order-2 lg:col-span-5">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {FEATURED_WELLNESS.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {FEATURED_WELLNESS.description}
                </p>

                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-300 font-semibold">
                    Architectural Callouts:
                  </p>
                  {FEATURED_WELLNESS.modules.map((m) => (
                    <div key={m} className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span className="leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {FEATURED_WELLNESS.stack.map((s) => (
                    <span key={s} className="badge-arch border-emerald-500/30 bg-emerald-500/10 text-emerald-200">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href={FEATURED_WELLNESS.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                  >
                    <span>View Live Application</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={FEATURED_WELLNESS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-5 py-2.5 text-xs font-medium text-emerald-200 transition hover:bg-emerald-900/40 hover:text-white"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CLIENT SYSTEMS (2x2 GRID WITH INDIVIDUAL DOMAIN ACCENTS) */}
        {(activeFilter === "All Works" || activeFilter === "Client Systems") && (
          <div className="mt-14">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-semibold">
                Commercial Client Systems
              </h3>
              <span className="font-mono text-xs text-zinc-400">04 DEPLOYED PLATFORMS</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {CLIENT_PROJECTS.map((p) => (
                <div
                  key={p.id}
                  className={`group rounded-2xl border border-indigo-500/15 bg-[#0c1120]/70 p-5 transition-all ${p.borderHover} hover:bg-[#10172c] shadow-lg`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Metadata & Actions */}
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs ${p.accentColor} font-semibold`}>{p.tag}</span>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 font-mono text-xs text-indigo-300 transition hover:text-white"
                      >
                        <span>Inspect Live</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>

                    <h4 className="font-display text-xl font-bold text-white">{p.title}</h4>
                    <p className="text-xs leading-relaxed text-zinc-300">{p.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.stack.map((s) => (
                        <span key={s} className={`badge-arch ${p.badgeBg} text-[10px]`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ENGINEERING ARCHIVE */}
        {(activeFilter === "All Works" || activeFilter === "Archive") && (
          <div className="mt-16 rounded-2xl border border-indigo-500/20 bg-[#0c1224]/50 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-indigo-500/15 pb-4">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Engineering Archives & Prototypes
                </h3>
                <p className="mt-1 text-xs text-zinc-300">
                  Specialized utilities, mobile repositories, and architectural experiments.
                </p>
              </div>
              <GitBranch size={16} className="text-indigo-400" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {ARCHIVE_PROJECTS.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col justify-between rounded-xl border border-indigo-500/15 bg-[#0a0f1e]/80 p-5 transition hover:border-indigo-400/50 hover:bg-[#10172e] shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-mono text-[10px] ${a.color} font-semibold`}>{a.tag}</span>
                      <a
                        href={a.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View source repository"
                        className="text-zinc-400 transition hover:text-white"
                      >
                        <FaGithub size={14} />
                      </a>
                    </div>
                    <h4 className="mt-3 font-display text-base font-semibold text-white">
                      {a.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{a.desc}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-indigo-500/10">
                    {a.stack.map((s) => (
                      <span key={s} className="badge-arch text-[9px] py-0.5 px-2 border-indigo-500/25 bg-indigo-500/10 text-indigo-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
