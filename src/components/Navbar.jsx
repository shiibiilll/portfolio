import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Briefcase, Download, FolderGit2, Home, Layers, Menu, Send, User, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

/* ---------- config ---------- */
const GITHUB = "https://github.com/shiibiilll";
const LINKEDIN = "linkedin.com/in/shibil-k";
const RESUME = "/resume.pdf";

const LINKS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Send },
];

/* ---------- scroll-spy hook ---------- */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el); // skips sections that aren't built yet
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const IDS = LINKS.map((l) => l.id);

/* ---------- Navbar ---------- */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-hot to-aqua"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border py-2 pl-5 pr-2 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "border-white/10 bg-ink/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]" : "border-transparent bg-transparent"
          }`}
        >
          {/* logo */}
          <a href="#hero" className="group flex items-center gap-2 text-xl font-extrabold tracking-tight">
            {/* <span className="relative grid h-8 w-8 place-items-center rounded-xl overflow-hidden transition-transform group-hover:rotate-12">
              <img src="/image/favicon.webp" alt="Logo" className="h-full w-full object-contain" />
            </span> */}
            <span>
              shibil<span className="text-gradient">.dev</span>
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* right side */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>

            {/* <a
              href={RESUME}
              download
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-hot px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_24px_-6px_rgba(99,102,241,0.8)] transition hover:scale-[1.04] sm:inline-flex"
            >
              <Download size={15} /> Resume
            </a> */}

            {/* hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ===== mobile menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/95 px-8 backdrop-blur-2xl lg:hidden"
          >
            {/* soft glow */}
            <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-brand/30 blur-[100px]" />
            <div className="pointer-events-none absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-hot/20 blur-[100px]" />

            <ul className="relative space-y-2">
              {LINKS.map(({ id, label, icon: Icon }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-3xl font-bold transition ${
                      active === id ? "text-gradient" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <Icon size={24} className={active === id ? "text-brand" : "text-zinc-600"} />
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="relative mt-10 flex items-center gap-3"
            >
              {/* <a
                href={RESUME}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-hot px-6 py-3 font-semibold text-white"
              >
                Resume <ArrowUpRight size={16} />
              </a> */}
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-12 w-12 place-items-center rounded-full">
                <FaGithub size={18} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass grid h-12 w-12 place-items-center rounded-full"
              >
                <FaLinkedinIn size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
