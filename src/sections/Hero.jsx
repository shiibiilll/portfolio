import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Download, Mail, MapPin, Sparkles, ChevronDown, Terminal } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiPostman,
  SiShopify,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import profile from "/image/IMG2.webp";

/* ---------- data ---------- */
const ROLES = ["MERN Stack apps", "React Native mobile apps", "ERP & CRM dashboards", "REST APIs that scale", "pixel-perfect interfaces"];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/shibil-zihnisoft", label: "GitHub" },
  { icon: FaLinkedinIn, href: "linkedin.com/in/shibil-k", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shibildevtech@gmail.com", label: "Email" },
];

const TECH = [
  { icon: SiReact, name: "React", color: "#61dafb" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5fa04e" },
  { icon: SiExpress, name: "Express", color: "#e5e7eb" },
  { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4f8bc9" },
  { icon: SiRedis, name: "Redis", color: "#ef4444" },
  { icon: SiGit, name: "Git", color: "#f05133" },
  { icon: SiPostman, name: "Postman", color: "#ff6c37" },
  { icon: SiShopify, name: "Shopify", color: "#95bf47" },
];

const FLOATING = [
  { icon: SiReact, color: "#61dafb", pos: "-left-6 top-10", delay: 0 },
  { icon: SiNodedotjs, color: "#5fa04e", pos: "-right-4 top-24", delay: 0.8 },
  { icon: SiMongodb, color: "#47a248", pos: "-left-2 bottom-24", delay: 1.6 },
  { icon: SiTailwindcss, color: "#38bdf8", pos: "-right-6 bottom-10", delay: 2.4 },
];

/* ---------- typewriter hook ---------- */
function useTypewriter(words, speed = 70, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const full = text === word;
    const delay = full && !deleting ? pause : deleting ? 35 : speed;

    const t = setTimeout(() => {
      if (full && !deleting) return setDeleting(true);
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          return setIndex((i) => i + 1);
        }
        return setText(word.slice(0, text.length - 1));
      }
      setText(word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

/* ---------- 3D tilt profile card ---------- */
function ProfileCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative mx-auto w-[300px] sm:w-[360px]" style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* floating tech chips */}
      {FLOATING.map(({ icon: Icon, color, pos, delay }, i) => (
        <motion.div
          key={i}
          className={`glass absolute ${pos} z-20 grid h-14 w-14 place-items-center rounded-2xl shadow-xl`}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={26} style={{ color }} />
        </motion.div>
      ))}

      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        {/* spinning gradient ring */}
        <div className="absolute -inset-[3px] overflow-hidden rounded-[2rem]">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,#6366f1,#ec4899,#22d3ee,#6366f1)]" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-2">
          <img src={profile} alt="Shibil" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover" />
          <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

          {/* info strip */}
          <div
            className="glass absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl px-4 py-3"
            style={{ transform: "translateZ(40px)" }}
          >
            <div>
              <p className="text-sm font-semibold leading-tight">Shibil</p>
              <p className="text-xs text-zinc-400">Full Stack Developer</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-300">
              <MapPin size={12} className="text-hot" /> Kerala, IN
            </span>
          </div>
        </div>
      </motion.div>

      {/* mini code card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="glass absolute -bottom-10 -left-10 z-30 hidden rounded-2xl px-4 py-3 font-mono text-[11px] leading-relaxed shadow-2xl md:block"
      >
        <div className="mb-1 flex items-center gap-1.5 text-zinc-500">
          <Terminal size={12} /> shibil.js
        </div>
        <p>
          <span className="text-hot">const</span> <span className="text-aqua">dev</span> = {"{"}
        </p>
        <p className="pl-4">
          stack: <span className="text-emerald-400">"MERN"</span>,
        </p>
        <p className="pl-4">
          mobile: <span className="text-emerald-400">"React Native"</span>,
        </p>
        <p className="pl-4">
          coffee: <span className="text-amber-400">Infinity</span>,
        </p>
        <p>{"}"}</p>
      </motion.div>
    </div>
  );
}

/* ---------- animation presets ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ---------- Hero ---------- */
export default function Hero() {
  const typed = useTypewriter(ROLES);

  // cursor spotlight
  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="hero" onMouseMove={onMouseMove} className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-10">
      {/* ===== background ===== */}
      <div className="absolute inset-0 -z-10">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* blobs */}
        <div className="absolute -left-32 top-0 h-[480px] w-[480px] animate-blob rounded-full bg-brand/30 blur-[120px]" />
        <div
          className="absolute -right-24 top-1/3 h-[420px] w-[420px] animate-blob rounded-full bg-hot/20 blur-[120px]"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-blob rounded-full bg-aqua/15 blur-[120px]"
          style={{ animationDelay: "-9s" }}
        />
        {/* cursor spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(500px circle at var(--mx, 50%) var(--my, 30%), rgba(99,102,241,0.12), transparent 60%)",
          }}
        />
      </div>

      {/* ===== content ===== */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        {/* left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm text-zinc-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Full Stack Developer @ <span className="font-semibold text-white">Zihnisoft Technology</span>
          </motion.div>

          <motion.h1 variants={item} className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Shibil</span>
            <br />
            <span className="text-zinc-400">I build</span>
          </motion.h1>

          <motion.div variants={item} className="mt-2 flex min-h-[3.5rem] items-center text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-aqua" />
          </motion.div>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
            Full-stack developer specializing in the <span className="text-zinc-200">MERN stack</span> and{" "}
            <span className="text-zinc-200">React Native</span>. I turn ideas into fast, scalable products, from clean APIs to interfaces people
            actually enjoy using.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand to-hot px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.7)] transition hover:scale-[1.04]"
            >
              View my work
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* <a
              href="/resume.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:border-brand/60 hover:bg-white/[0.08]"
            >
              <Download size={18} /> Resume
            </a> */}

            <div className="flex items-center gap-2 sm:ml-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid h-12 w-12 place-items-center rounded-full text-zinc-300 transition hover:-translate-y-1 hover:border-hot/60 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <Sparkles size={15} className="text-aqua" />
            Building with modern tools and AI-assisted workflows
          </motion.div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pb-10 lg:pb-0"
        >
          <ProfileCard />
        </motion.div>
      </div>

      {/* ===== tech marquee ===== */}
      <div className="relative mt-20 w-full">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">Tools I build with</p>
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-4">
            {[...TECH, ...TECH].map(({ icon: Icon, name, color }, i) => (
              <div key={i} className="glass flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium text-zinc-300">
                <Icon size={20} style={{ color }} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-zinc-500 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
