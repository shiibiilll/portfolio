import { ArrowUpRight, CheckCircle2, Code2, Cpu, GraduationCap, Layers, MapPin, Rocket, Server, Smartphone } from "lucide-react";

const CORE_DISCIPLINES = [
  {
    num: "01",
    title: "Full-Stack Web Systems",
    desc: "Architecting modular MERN applications, Next.js web applications, and robust RESTful APIs with strict validation.",
    icon: Code2,
    color: "text-indigo-400",
    hoverBorder: "hover:border-indigo-400/40",
    bg: "bg-indigo-500/10",
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "Engineering performant, fluid cross-platform mobile apps using React Native for iOS and Android.",
    icon: Smartphone,
    color: "text-sky-400",
    hoverBorder: "hover:border-sky-400/40",
    bg: "bg-sky-500/10",
  },
  {
    num: "03",
    title: "Backend & Data Engineering",
    desc: "Designing scalable MongoDB schemas, PostgreSQL relational tables, JWT authentication flows, and Redis caching layers.",
    icon: Server,
    color: "text-emerald-400",
    hoverBorder: "hover:border-emerald-400/40",
    bg: "bg-emerald-500/10",
  },
  {
    num: "04",
    title: "Design System & Interface Craft",
    desc: "Transforming design prototypes into accessible, responsive, and pixel-precise React components.",
    icon: Layers,
    color: "text-amber-400",
    hoverBorder: "hover:border-amber-400/40",
    bg: "bg-amber-500/10",
  },
];

const MILESTONES = [
  {
    year: "2022 — 2025",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Moulana College of Arts, Science & Commerce, Chennara",
    desc: "Formal computer science foundation covering algorithms, data structures, database management systems, and software engineering principles.",
  },
  {
    year: "2020 — 2022",
    degree: "Higher Secondary — Computer Commerce",
    institution: "GHSS Tirurangadi",
    desc: "Early immersion into computation, structured logic, and business commerce foundations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Hairline boundary */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-indigo-500/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
              01 // Profile & Foundations
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering with purpose, shipping with precision.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-indigo-300/70">
            BASED IN KERALA, INDIA · WORKING GLOBALLY
          </p>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Personal Narrative & Philosophy (7 cols) */}
          <div className="space-y-8 lg:col-span-7">
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/20 via-[#0d1322] to-[#090d16] p-6 shadow-xl sm:p-8">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                The Trajectory
              </span>
              <p className="mt-4 font-display text-xl font-normal leading-relaxed text-zinc-100 sm:text-2xl">
                I am a full-stack developer at <strong className="text-white font-semibold underline decoration-indigo-400 underline-offset-4">Zihnisoft Technology</strong>, where I develop enterprise SaaS modules used in daily commercial operations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                My approach to software engineering centers around practical problem-solving. Over the past two years, I have immersed myself in building and shipping production applications—from sales analytics dashboards and CRM Kanban engines to customer onboarding workflows and custom client platforms.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                I believe that good software must be two things at once: structurally rigorous under the hood, and remarkably effortless for the person using it.
              </p>

              {/* Quick Metadata Tags with Tinted Borders */}
              <div className="mt-8 flex flex-wrap gap-2.5 pt-6 border-t border-indigo-500/15">
                <span className="badge-arch border-indigo-500/30 bg-indigo-500/10 text-indigo-200">MERN Stack</span>
                <span className="badge-arch border-sky-500/30 bg-sky-500/10 text-sky-200">React Native</span>
                <span className="badge-arch border-indigo-500/30 bg-indigo-500/10 text-indigo-200">Next.js & TypeScript</span>
                <span className="badge-arch border-emerald-500/30 bg-emerald-500/10 text-emerald-200">MongoDB & PostgreSQL</span>
                <span className="badge-arch border-amber-500/30 bg-amber-500/10 text-amber-200">REST API Architecture</span>
              </div>
            </div>

            {/* Disciplines Grid */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300/80 mb-4 font-semibold">
                Core Engineering Disciplines
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {CORE_DISCIPLINES.map(({ num, title, desc, icon: Icon, color, hoverBorder, bg }) => (
                  <div
                    key={title}
                    className={`group rounded-xl border border-indigo-500/15 bg-[#0d1222]/60 p-5 transition-all ${hoverBorder} hover:bg-[#11172a] shadow-sm`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs ${color} font-semibold`}>{num}</span>
                      <div className={`grid h-7 w-7 place-items-center rounded-lg ${bg}`}>
                        <Icon size={15} className={color} />
                      </div>
                    </div>
                    <h4 className="mt-3 font-display text-base font-semibold text-white">{title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Pedigree & Production Focus (5 cols) */}
          <div className="space-y-8 lg:col-span-5">
            {/* Production Stats Card (Warm Radiant Gold & Amber) */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] via-[#14120a] to-[#0d0f17] p-6 shadow-xl sm:p-7">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Production Snapshot
              </span>
              <div className="mt-6 space-y-5">
                <div className="flex items-baseline justify-between border-b border-amber-500/15 pb-3">
                  <span className="text-sm text-zinc-300">Primary Role</span>
                  <span className="font-mono text-xs font-semibold text-white">Full Stack Developer</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-amber-500/15 pb-3">
                  <span className="text-sm text-zinc-300">Current Affiliation</span>
                  <span className="font-mono text-xs font-semibold text-indigo-300">Zihnisoft Technology</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-amber-500/15 pb-3">
                  <span className="text-sm text-zinc-300">Enterprise Product</span>
                  <span className="font-mono text-xs font-semibold text-amber-400">Zihnisoft SaaS ERP</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-zinc-300">Location Base</span>
                  <span className="font-mono text-xs font-medium text-zinc-300">Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Academic Pedigree Ledger */}
            <div className="rounded-2xl border border-indigo-500/15 bg-[#0c1120]/60 p-6 shadow-xl sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={16} className="text-indigo-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-300 font-semibold">
                  Academic Ledger
                </h3>
              </div>

              <div className="space-y-6">
                {MILESTONES.map(({ year, degree, institution, desc }) => (
                  <div key={degree} className="border-l-2 border-indigo-500/30 pl-4 transition-colors hover:border-amber-400">
                    <span className="font-mono text-xs text-amber-400 font-semibold">{year}</span>
                    <h4 className="mt-1 font-display text-sm font-semibold text-white">{degree}</h4>
                    <p className="text-xs text-indigo-300/90 mt-0.5">{institution}</p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
