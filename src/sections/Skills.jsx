import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Smartphone } from "lucide-react";
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

/* ---------- levels ---------- */
const LEVELS = {
  3: { label: "Strong", text: "text-emerald-400", bar: "bg-emerald-400" },
  2: { label: "Working", text: "text-aqua", bar: "bg-aqua" },
  1: { label: "Familiar", text: "text-amber-400", bar: "bg-amber-400" },
};

/* ---------- data (edit levels here) ---------- */
const SKILLS = [
  // frontend
  { name: "React.js", icon: SiReact, color: "#61dafb", cat: "Frontend", level: 3 },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#f7df1e", cat: "Frontend", level: 3 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", cat: "Frontend", level: 2 },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", cat: "Frontend", level: 3 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", cat: "Frontend", level: 3 },
  { name: "HTML5", icon: FaHtml5, color: "#e34f26", cat: "Frontend", level: 3 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6", cat: "Frontend", level: 3 },
  { name: "Redux", icon: SiRedux, color: "#764abc", cat: "Frontend", level: 1 },
  { name: "Vite", icon: SiVite, color: "#a78bfa", cat: "Frontend", level: 3 },
  { name: "React Native", icon: Smartphone, color: "#ec4899", cat: "Mobile", level: 3 },

  // backend
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e", cat: "Backend", level: 3 },
  { name: "Express.js", icon: SiExpress, color: "#e5e7eb", cat: "Backend", level: 3 },
  { name: "REST APIs", icon: SiPostman, color: "#ff6c37", cat: "Backend", level: 3 },
  { name: "JWT / Auth", icon: SiJsonwebtokens, color: "#d63aff", cat: "Backend", level: 1 },
  { name: "Socket.io", icon: SiSocketdotio, color: "#e5e7eb", cat: "Backend", level: 2 },

  // database
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", cat: "Database", level: 3 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4f8bc9", cat: "Database", level: 2 },
  { name: "Redis", icon: SiRedis, color: "#ef4444", cat: "Database", level: 1 },

  // devops
  { name: "Docker", icon: SiDocker, color: "#2496ed", cat: "DevOps", level: 2 },
  { name: "AWS", icon: FaAws, color: "#ff9900", cat: "DevOps", level: 1 },
  { name: "Git", icon: SiGit, color: "#f05133", cat: "DevOps", level: 3 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", cat: "DevOps", level: 3 },

  // design & tools
  { name: "Figma", icon: SiFigma, color: "#f24e1e", cat: "Design", level: 2 },
  { name: "Shopify", icon: SiShopify, color: "#95bf47", cat: "Design", level: 2 },
];

const TABS = ["All", "Frontend", "Mobile", "Backend", "Database", "DevOps", "Design"];

/* ---------- card ---------- */
function SkillCard({ skill }) {
  const { name, icon: Icon, color, level } = skill;
  const lv = LEVELS[level];

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--cx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--cy", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      layout
      onMouseMove={onMove}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      whileHover={{ y: -6 }}
      className="group glass relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-white/25"
    >
      {/* cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(180px circle at var(--cx) var(--cy), ${color}22, transparent 70%)`,
        }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          style={{ background: `${color}1f`, boxShadow: `0 0 24px -6px ${color}66` }}
        >
          <Icon size={24} style={{ color }} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight">{name}</p>
          <p className={`mt-0.5 text-xs font-medium ${lv.text}`}>{lv.label}</p>
        </div>
      </div>

      {/* level meter */}
      <div className="relative mt-4 flex gap-1.5">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= level ? lv.bar : "bg-white/10"}`} />
        ))}
      </div>
    </motion.div>
  );
}

/* ---------- Skills ---------- */
export default function Skills() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? SKILLS : SKILLS.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="relative py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-hot/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-brand">// skills</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            The <span className="text-gradient">tools</span> in my belt
          </h2>
          <p className="mt-4 text-zinc-400">
            Honest levels, no inflated bars. Strong is what I use daily, Working is what I use on real projects, and Familiar is what I'm still
            growing into.
          </p>
        </motion.div>

        {/* tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                tab === t ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand to-hot"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {tab !== t && <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.03]" />}
              {t}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
