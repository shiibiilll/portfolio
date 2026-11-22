import { Briefcase, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const TIMELINE = [
  {
    type: "work",
    role: "Full Stack Developer",
    org: "Zihnisoft Technology",
    period: "Present Position",
    place: "Kerala, India",
    desc: "Spearheading frontend development and core module architecture for the company's multi-tenant SaaS ERP platform, while shipping production-grade client platforms.",
    points: [
      "Architected the sales analytics dashboard for the SaaS ERP, engineering interactive chart views and data grids that process high-density commercial sales metrics.",
      "Developed modular CRM workspaces incorporating drag-and-drop Kanban boards for pipeline and lead state management.",
      "Engineered the official SaaS marketing landing infrastructure and modernized the multi-step user onboarding flow to optimize registration conversions.",
      "Revamped the zihnisoft.com corporate website with performant UI animations and modern brand art-direction.",
      "Refactored legacy HTML/jQuery/Bootstrap client storefront templates into modular, stateful React architectures.",
    ],
    stack: [
      { name: "React", icon: SiReact, color: "text-[#61dafb]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38bdf8]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#5fa04e]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
    ],
  },
  {
    type: "edu",
    role: "Bachelor of Computer Application (BCA)",
    org: "Moulana College of Arts, Science & Commerce, Chennara",
    period: "2022 — 2025",
    place: "Kerala, India",
    desc: "Rigorous undergraduate program with comprehensive focus on core computation, data structures, relational database management, and object-oriented software engineering.",
    points: [],
  },
  {
    type: "edu",
    role: "Higher Secondary — Computer Commerce",
    org: "GHSS Tirurangadi",
    period: "2020 — 2022",
    place: "Kerala, India",
    desc: "Secondary education curriculum emphasizing commercial applications of computing, basic algorithmic thinking, and digital systems.",
    points: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-indigo-500/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
              04 // Professional Track
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Chronological engineering ledger.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-indigo-300/70">
            COMMERCIAL PRODUCTION · ACADEMIC PEDIGREE
          </p>
        </div>

        {/* Ledger Entries */}
        <div className="mt-14 space-y-10">
          {TIMELINE.map((item) => {
            const isWork = item.type === "work";
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <div
                key={item.role + item.period}
                className={`rounded-2xl border p-6 backdrop-blur-sm sm:p-8 lg:p-10 transition-all shadow-xl ${
                  isWork
                    ? "border-indigo-500/30 bg-gradient-to-br from-indigo-950/25 via-[#0d1424] to-[#090e1a]"
                    : "border-indigo-500/15 bg-[#0c1120]/60"
                }`}
              >
                {/* Entry Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/15 pb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-9 w-9 place-items-center rounded-xl border ${
                        isWork
                          ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-400 shadow-sm"
                          : "border-indigo-500/20 bg-indigo-500/5 text-zinc-400"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className={`font-mono text-xs font-semibold ${isWork ? "text-indigo-400" : "text-zinc-400"}`}>
                        {isWork ? "COMMERCIAL APPOINTMENT" : "ACADEMIC PROGRAM"}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md border ${
                        isWork
                          ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                          : "border-indigo-500/20 bg-indigo-500/5 text-zinc-300"
                      }`}
                    >
                      {item.period}
                    </span>
                    <span className="mt-1 font-mono text-[11px] text-zinc-400 flex items-center gap-1">
                      <MapPin size={11} className={isWork ? "text-amber-400" : "text-zinc-500"} /> {item.place}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="mt-6">
                  <p className="font-display text-base font-semibold text-white">
                    {item.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300 max-w-3xl">
                    {item.desc}
                  </p>

                  {/* Highlights (if present) */}
                  {item.points && item.points.length > 0 && (
                    <div className="mt-6 space-y-3 border-t border-indigo-500/15 pt-5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-indigo-300 font-semibold">
                        Engineering Deliverables & Impact:
                      </p>
                      <div className="space-y-2.5">
                        {item.points.map((pt) => (
                          <div key={pt} className="flex items-start gap-2.5 text-xs text-zinc-300 sm:text-sm leading-relaxed">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-indigo-400" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stack Tokens with Color Accents */}
                  {item.stack && item.stack.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-indigo-500/15 pt-5">
                      <span className="font-mono text-xs text-indigo-300/80 mr-2 font-semibold">Production Stack:</span>
                      {item.stack.map(({ name, icon: SIcon, color }) => (
                        <span
                          key={name}
                          className="flex items-center gap-1.5 rounded-lg border border-indigo-500/20 bg-indigo-950/30 px-3 py-1 font-mono text-xs text-zinc-200"
                        >
                          <SIcon size={13} className={color} />
                          <span>{name}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
