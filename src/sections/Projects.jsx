import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Dumbbell,
  Gem,
  Landmark,
  LayoutDashboard,
  Lock,
  Stethoscope,
  Wallet,
  Ruler,
  FolderGit2,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiJavascript,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

/* ---------- tech shortcuts ---------- */
const T = {
  react: { icon: SiReact, name: "React", color: "#61dafb" },
  next: { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  ts: { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  js: { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  node: { icon: SiNodedotjs, name: "Node.js", color: "#5fa04e" },
  express: { icon: SiExpress, name: "Express", color: "#e5e7eb" },
  mongo: { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
  tw: { icon: SiTailwindcss, name: "Tailwind", color: "#38bdf8" },
  pg: { icon: SiPostgresql, name: "PostgreSQL", color: "#4f8bc9" },
  redis: { icon: SiRedis, name: "Redis", color: "#ef4444" },
};

/* ---------- featured projects (edit links, images, stacks) ---------- */
const PROJECTS = [
  {
    id: "erp",
    title: "Zihnisoft ERP",
    category: "Product",
    tag: "SaaS product · Company work",
    icon: Building2,
    color: "#6366f1",
    image: "/image/projects/erp-light.webp",
    live: "",
    github: "",
    description:
      "A SaaS ERP platform used by businesses to run sales, customers and operations from one place. I'm part of the team building its modules, from analytics dashboards to the product's public website.",
    highlights: [
      "Sales dashboard with charts and data grids",
      "CRM module with Kanban boards for deals and leads",
      "Marketing landing page and multi-step onboarding flow",
      "Many more modules built as part of the product team",
    ],
    stack: [T.react, T.node, T.tw], // TODO adjust to what you actually used
  },
  {
    id: "wellnessway",
    title: "WellnessWay",
    category: "Personal",
    tag: "Full-stack · Personal project",
    icon: Stethoscope,
    color: "#10b981",
    image: "/image/projects/welnessway.webp",
    live: "https://wellnessway-frontend.onrender.com/",
    github: "https://github.com/shiibiilll/WellnessWay",
    description:
      "A hospital management system with separate portals for admins, doctors and patients. Patients book appointments, doctors manage their schedules, and admins run the whole hospital from one dashboard.",
    highlights: [
      "Role-based portals for admin, doctor and patient",
      "Appointment booking and doctor management",
      "Built end to end: UI, REST API and database",
    ],
    stack: [T.react, T.node, T.express, T.mongo],
  },
  {
    id: "skygold-jewellery",
    title: "Sky Gold Jewellery",
    category: "Client",
    tag: "Client website",
    icon: Gem,
    color: "#f59e0b",
    image: "/image/projects/jewellery.webp",
    live: "https://zijewellery2-demo.web.app/",
    github: "",
    description:
      "A premium website for the Sky Gold Jewellery team, designed to showcase their collections with an elegant, fast and mobile-friendly experience.",
    highlights: ["Elegant collection showcase", "Responsive on every screen size", "Fast loading with optimised imagery"],
    stack: [T.react, T.tw], // TODO
  },
  {
    id: "Grandsky-investments",
    title: "Grandsky Investments",
    category: "Client",
    tag: "Client website",
    icon: Landmark,
    color: "#eab308",
    image: "/image/projects/investment.webp",
    live: "https://grandskyinvestmentsltd.com/",
    github: "",
    description:
      "A trustworthy, professional website for the Skygold Investments team that explains their offerings clearly and guides visitors to get in touch.",
    highlights: ["Clear presentation of investment services", "Conversion-focused layout with contact flow", "Responsive and accessible design"],
    stack: [T.react, T.tw], // TODO
  },
  {
    id: "architecture",
    title: "Architecture Studio",
    category: "Client",
    tag: "Client website",
    icon: Ruler,
    color: "#22d3ee",
    image: "/image/projects/architecture.webp",
    live: "https://ziarc-demo.web.app/",
    github: "",
    description:
      "A clean, image-led website for an architecture studio that lets the work speak for itself, with smooth transitions and a gallery-style portfolio.",
    highlights: ["Image-led layout for showcasing projects", "Smooth scroll and page animations", "Fully responsive"],
    stack: [T.react, T.tw], // TODO
  },
  {
    id: "gym",
    title: "Gym Website",
    category: "Client",
    tag: "Client website",
    icon: Dumbbell,
    color: "#ef4444",
    image: "/image/projects/gym.webp",
    live: "https://zigym-demo.web.app/",
    github: "",
    description: "A high-energy website for a gym that presents programs, trainers and memberships, built to turn visitors into members.",
    highlights: ["Programs, trainers and membership sections", "Bold, motion-rich design", "Mobile-first layout"],
    stack: [T.react, T.tw], // TODO
  },
];

/* ---------- smaller builds (from your old portfolio) ---------- */
const MORE = [
  {
    title: "Wallet App",
    icon: Wallet,
    text: "Mobile expense tracker with REST APIs and Redis rate limiting, deployed on Render.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Upstash Redis"],
    github: "https://github.com/shiibiilll/wallet-api-frontend",
  },
  {
    title: "E-commerce Store",
    icon: FolderGit2,
    text: "Storefront with product listing, dynamic cart and a responsive component-based UI.",
    stack: ["React", "Node.js"],
    github: "https://github.com/shiibiilll/ecommerce-project",
  },
  {
    title: "Task Manager",
    icon: CheckCircle2,
    text: "Add, update and delete tasks with component-based state management.",
    stack: ["React"],
    github: "https://github.com/shiibiilll/task-manager",
  },
];

const FILTERS = ["All", "Product", "Client", "Personal"];

/* ---------- browser frame with screenshot ---------- */
function BrowserFrame({ project }) {
  const [failed, setFailed] = useState(false);
  const { image, title, color, icon: Icon, live } = project;

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: `linear-gradient(135deg, ${color}66, transparent)` }}
      />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
        {/* top bar */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex flex-1 items-center gap-2 truncate rounded-md bg-black/30 px-3 py-1 font-mono text-[11px] text-zinc-500">
            <Lock size={10} />
            {live ? live.replace(/^https?:\/\//, "") : "live link coming soon"}
          </div>
        </div>

        {/* screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {failed ? (
            <div className="grid h-full w-full place-items-center" style={{ background: `linear-gradient(135deg, ${color}33, #0a0a0f)` }}>
              <Icon size={64} style={{ color }} className="opacity-70" />
            </div>
          ) : (
            <img
              src={image}
              alt={`${title} screenshot`}
              loading="lazy"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- featured card ---------- */
function ProjectCard({ project, index }) {
  const { title, tag, description, highlights, stack, live, github, color, icon: Icon } = project;
  const flip = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <div className={flip ? "lg:order-2" : ""}>
        <BrowserFrame project={project} />
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${color}22` }}>
            <Icon size={22} style={{ color }} />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{tag}</span>
        </div>

        <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-4 leading-relaxed text-zinc-400">{description}</p>

        <ul className="mt-5 space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map(({ icon: S, name, color: c }) => (
            <span key={name} className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-300">
              <S size={14} style={{ color: c }} /> {name}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="mt-7 flex flex-wrap gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-hot px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_26px_-8px_rgba(99,102,241,0.8)] transition hover:scale-[1.04]"
            >
              Live demo
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              <FaGithub size={16} /> Source code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- small card ---------- */
function MiniCard({ item, i }) {
  const { title, icon: Icon, text, stack, github } = item;
  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group glass relative block overflow-hidden rounded-3xl p-6 transition-colors hover:border-brand/50"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-hot/30">
          <Icon size={22} />
        </div>
        <FaGithub size={20} className="text-zinc-500 transition group-hover:text-white" />
      </div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-300">
            {s}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

/* ---------- Projects ---------- */
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-aqua/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-brand">// projects</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Things I've <span className="text-gradient">built and shipped</span>
          </h2>
          <p className="mt-4 text-zinc-400">A mix of product work at Zihnisoft, websites for clients and projects of my own.</p>
        </motion.div>

        {/* filters */}
        <div className="mb-16 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {filter === f ? (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand to-hot"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : (
                <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.03]" />
              )}
              {f}
            </button>
          ))}
        </div>

        {/* featured */}
        <div className="space-y-28">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* more builds */}
        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3 text-2xl font-bold"
          >
            <LayoutDashboard size={22} className="text-brand" />
            More builds
          </motion.h3>
          <div className="grid gap-5 md:grid-cols-3">
            {MORE.map((m, i) => (
              <MiniCard key={m.title} item={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
