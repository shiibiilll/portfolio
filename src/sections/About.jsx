import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { Briefcase, Code2, GraduationCap, MapPin, Rocket, Smartphone, Server, Palette, Zap } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiDocker, SiFigma, SiSocketdotio } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

/* ---------- config (edit these) ---------- */
const STATS = [
  { value: 1, suffix: "+", label: "Year in production" }, // TODO
  { value: 6, suffix: "+", label: "Projects shipped" }, // TODO
  { value: 15, suffix: "+", label: "ERP modules built" }, // TODO
];

const STACK_ICONS = [
  { icon: SiReact, color: "#61dafb" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: SiTypescript, color: "#3178c6" },
  { icon: SiNodedotjs, color: "#5fa04e" },
  { icon: SiMongodb, color: "#47a248" },
  { icon: SiDocker, color: "#2496ed" },
  { icon: FaAws, color: "#ff9900" },
  { icon: SiSocketdotio, color: "#e5e7eb" },
  { icon: SiFigma, color: "#f24e1e" },
];

const FOCUS = [
  {
    icon: Code2,
    title: "Full-stack web",
    text: "MERN apps, REST APIs and dashboards.",
    color: "text-brand",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    text: "Cross-platform apps in React Native.",
    color: "text-hot",
  },
  {
    icon: Server,
    title: "Backend & DevOps",
    text: "Auth, real-time and Docker deployments.",
    color: "text-aqua",
  },
  {
    icon: Palette,
    title: "UI craft",
    text: "From Figma to pixel-perfect React.",
    color: "text-amber-400",
  },
];

/* ---------- helpers ---------- */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 70, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      }),
    [spring, suffix],
  );

  return <span ref={ref}>0{suffix}</span>;
}

// spotlight card that follows the cursor
function Card({ children, className = "", delay = 0 }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--cx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--cy", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group glass relative overflow-hidden rounded-3xl p-6 transition-colors hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(350px circle at var(--cx) var(--cy), rgba(99,102,241,0.14), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

/* ---------- About ---------- */
export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-brand/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-brand">// about me</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Turning ideas into <span className="text-gradient">products that ship</span>
          </h2>
        </motion.div>

        {/* bento grid */}
        <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6">
          {/* bio */}
          <Card className="md:col-span-4 md:row-span-2" delay={0}>
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  <Zap size={13} /> Who I am
                </span>
                <p className="text-xl leading-relaxed text-zinc-300 sm:text-2xl">
                  I'm a <span className="font-semibold text-white">full-stack developer</span> at{" "}
                  <span className="font-semibold text-white">Zihnisoft Technology</span>, building a SaaS ERP product used by real businesses. I also
                  ship client websites and my own products, working across <span className="text-gradient font-semibold">MERN</span>,{" "}
                  <span className="text-gradient font-semibold">Next.js</span> and <span className="text-gradient font-semibold">React Native</span>.
                </p>
                <p className="mt-5 text-zinc-400">
                  I started learning development less than two years ago, mostly by building and debugging real projects. I care about clean code,
                  fast interfaces and finishing what I start.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-300">
                  <MapPin size={14} className="text-hot" /> Kerala, India
                </span>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-300">
                  <Briefcase size={14} className="text-aqua" /> Open to opportunities
                </span>
              </div>
            </div>
          </Card>

          {/* stats */}
          {STATS.slice(0, 2).map((s, i) => (
            <Card key={s.label} className="md:col-span-1 md:row-span-1" delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col justify-center">
                <p className="text-gradient text-5xl font-extrabold">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
              </div>
            </Card>
          ))}

          {/* stack icons */}
          <Card className="md:col-span-2 md:row-span-1" delay={0.26}>
            <p className="mb-4 text-sm font-semibold text-zinc-400">Daily toolkit</p>
            <div className="grid grid-cols-5 gap-3">
              {STACK_ICONS.map(({ icon: Icon, color }, i) => (
                <motion.div key={i} whileHover={{ y: -6, scale: 1.15 }} className="grid aspect-square place-items-center rounded-xl bg-white/[0.04]">
                  <Icon size={22} style={{ color }} />
                </motion.div>
              ))}
            </div>
          </Card>

          {/* focus areas */}
          <Card className="md:col-span-3" delay={0.1}>
            <p className="mb-5 text-sm font-semibold text-zinc-400">What I work on</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {FOCUS.map(({ icon: Icon, title, text, color }) => (
                <div key={title} className="flex gap-3">
                  <div className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold leading-tight">{title}</p>
                    <p className="mt-1 text-sm text-zinc-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* education */}
          <Card className="md:col-span-3" delay={0.18}>
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-hot">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">2022 - 2025</p>
                  <p className="text-lg font-semibold leading-snug">Bachelor of Computer Application</p>
                  <p className="text-sm text-zinc-400">Moulana College of Arts, Science & Commerce, Chennara</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-aqua">
                  <Rocket size={18} />
                </div>
                <p className="text-sm text-zinc-400">Now: building a SaaS ERP at Zihnisoft, plus client and personal projects.</p>
              </div>
            </div>
          </Card>

          {/* third stat, full width strip */}
          <Card className="md:col-span-6" delay={0.1}>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-gradient text-5xl font-extrabold">
                  <Counter to={STATS[2].value} suffix={STATS[2].suffix} />
                </p>
                <p className="mt-1 text-sm text-zinc-400">{STATS[2].label}</p>
              </div>
              <p className="max-w-xl text-zinc-400">CRM, Kanban boards, onboarding flows and more, built as modules of a multi-tenant SaaS ERP.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
