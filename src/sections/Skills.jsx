import { useState } from "react";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Wrench,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSocketdotio,
  SiJsonwebtokens,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiShopify,
} from "react-icons/si";
import { FaAws, FaHtml5, FaCss3Alt } from "react-icons/fa6";

const SKILL_TAXONOMY = [
  {
    category: "Frontend & Interface Engineering",
    icon: Code2,
    badge: "LAYER 01",
    description: "Component systems, reactive interfaces, and responsive web foundations.",
    color: "text-indigo-400",
    badgeBg: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    items: [
      { name: "React.js", icon: SiReact, role: "Primary UI Library", brandColor: "group-hover:text-[#61dafb]" },
      { name: "Next.js", icon: SiNextdotjs, role: "SSR & Web Framework", brandColor: "group-hover:text-white" },
      { name: "TypeScript", icon: SiTypescript, role: "Type-Safe Architecture", brandColor: "group-hover:text-[#3178c6]" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, role: "Core Language", brandColor: "group-hover:text-[#f7df1e]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, role: "Utility Styling", brandColor: "group-hover:text-[#38bdf8]" },
      { name: "HTML5 / CSS3", icon: FaHtml5, role: "Semantic Markup", brandColor: "group-hover:text-[#e34f26]" },
      { name: "Vite", icon: SiVite, role: "Build Tooling", brandColor: "group-hover:text-[#a78bfa]" },
      { name: "Redux", icon: SiRedux, role: "Global State Management", brandColor: "group-hover:text-[#764abc]" },
    ],
  },
  {
    category: "Mobile Architecture",
    icon: Smartphone,
    badge: "LAYER 02",
    description: "Cross-platform mobile applications engineered for native performance.",
    color: "text-sky-400",
    badgeBg: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    items: [
      { name: "React Native", icon: Smartphone, role: "iOS & Android Builds", brandColor: "group-hover:text-[#38bdf8]" },
      { name: "Mobile UI Patterns", icon: Layers, role: "Touch Gestures & Views", brandColor: "group-hover:text-sky-300" },
    ],
  },
  {
    category: "Backend & Distributed Services",
    icon: Server,
    badge: "LAYER 03",
    description: "Server runtimes, RESTful communication, and secure authentication.",
    color: "text-emerald-400",
    badgeBg: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    items: [
      { name: "Node.js", icon: SiNodedotjs, role: "Server Runtime", brandColor: "group-hover:text-[#5fa04e]" },
      { name: "Express.js", icon: SiExpress, role: "REST Framework", brandColor: "group-hover:text-zinc-200" },
      { name: "REST APIs", icon: Globe, role: "API Architecture", brandColor: "group-hover:text-emerald-300" },
      { name: "JWT / Auth", icon: SiJsonwebtokens, role: "Token Authorization", brandColor: "group-hover:text-[#d63aff]" },
      { name: "Socket.io", icon: SiSocketdotio, role: "Real-Time Events", brandColor: "group-hover:text-zinc-200" },
    ],
  },
  {
    category: "Data Systems & Caching",
    icon: Database,
    badge: "LAYER 04",
    description: "Data modeling, relational indexing, and low-latency in-memory cache.",
    color: "text-amber-400",
    badgeBg: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    items: [
      { name: "MongoDB", icon: SiMongodb, role: "Document Database", brandColor: "group-hover:text-[#47a248]" },
      { name: "PostgreSQL", icon: SiPostgresql, role: "Relational Storage", brandColor: "group-hover:text-[#4f8bc9]" },
      { name: "Redis", icon: SiRedis, role: "In-Memory Caching & Rate Limits", brandColor: "group-hover:text-[#ef4444]" },
    ],
  },
  {
    category: "Cloud, Infrastructure & Design",
    icon: Wrench,
    badge: "LAYER 05",
    description: "Deployment pipelines, version control, and design system fidelity.",
    color: "text-purple-400",
    badgeBg: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    items: [
      { name: "Docker", icon: SiDocker, role: "Containerization", brandColor: "group-hover:text-[#2496ed]" },
      { name: "AWS", icon: FaAws, role: "Cloud Services", brandColor: "group-hover:text-[#ff9900]" },
      { name: "Git & GitHub", icon: SiGit, role: "Version Control", brandColor: "group-hover:text-[#f05133]" },
      { name: "Postman", icon: SiPostman, role: "API Testing & Docs", brandColor: "group-hover:text-[#ff6c37]" },
      { name: "Figma", icon: SiFigma, role: "UI/UX Translation", brandColor: "group-hover:text-[#f24e1e]" },
      { name: "Shopify", icon: SiShopify, role: "E-Commerce Integrations", brandColor: "group-hover:text-[#95bf47]" },
    ],
  },
];

const CATEGORY_TABS = [
  "All Layers",
  "Frontend & Mobile",
  "Backend & APIs",
  "Data Systems",
  "Cloud & Tools",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All Layers");

  const filteredCategories = SKILL_TAXONOMY.filter((cat) => {
    if (activeTab === "All Layers") return true;
    if (activeTab === "Frontend & Mobile")
      return cat.category.includes("Frontend") || cat.category.includes("Mobile");
    if (activeTab === "Backend & APIs") return cat.category.includes("Backend");
    if (activeTab === "Data Systems") return cat.category.includes("Data");
    if (activeTab === "Cloud & Tools") return cat.category.includes("Cloud");
    return true;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-indigo-500/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
              03 // Systems Taxonomy
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technical capabilities & engineering stack.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-indigo-300/70">
            STRUCTURED ARCHITECTURE · PRODUCTION-READY STACK
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all cursor-pointer ${
                activeTab === tab
                  ? "border border-indigo-500/50 bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/25"
                  : "border border-indigo-500/20 bg-indigo-950/20 text-zinc-300 hover:border-indigo-400/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Systems Taxonomy Stack */}
        <div className="mt-12 space-y-10">
          {filteredCategories.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.category}
                className="rounded-2xl border border-indigo-500/20 bg-[#0d1324]/60 p-6 shadow-xl backdrop-blur-sm sm:p-8"
              >
                {/* Layer Heading */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-indigo-500/15 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {layer.category}
                      </h3>
                      <p className="text-xs text-zinc-400">{layer.description}</p>
                    </div>
                  </div>
                  <span className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${layer.badgeBg}`}>
                    {layer.badge}
                  </span>
                </div>

                {/* Items Grid with Brand Accents */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {layer.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="group flex flex-col justify-between rounded-xl border border-indigo-500/15 bg-[#090e1c]/80 p-3.5 transition-all hover:border-indigo-400/50 hover:bg-[#11182c] shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <ItemIcon
                            size={20}
                            className={`text-zinc-400 transition-colors duration-200 ${item.brandColor}`}
                          />
                        </div>
                        <div className="mt-3">
                          <p className="font-display text-xs font-semibold text-white group-hover:text-indigo-200 transition-colors">
                            {item.name}
                          </p>
                          <p className="mt-0.5 font-mono text-[10px] text-zinc-400 truncate">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Notice with Amber and Indigo Highlights */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5 font-mono text-xs text-zinc-300">
          <div className="flex items-center gap-2.5">
            <Terminal size={14} className="text-amber-400 shrink-0" />
            <span>Stack philosophy: Tools are chosen for type-safety, maintainability, and delivery speed.</span>
          </div>
          <span className="text-indigo-400 font-semibold">STABILITY & PERFORMANCE FIRST</span>
        </div>
      </div>
    </section>
  );
}
