import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const GITHUB = "https://github.com/shiibiilll";
const LINKEDIN = "https://www.linkedin.com/in/shibil-k";

const LINKS = [
  { id: "hero", label: "Overview", num: "00" },
  { id: "about", label: "Profile", num: "01" },
  { id: "skills", label: "Architecture", num: "02" },
  { id: "projects", label: "Case Studies", num: "03" },
  { id: "experience", label: "Ledger", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActive(e.target.id);
            }
          });
        },
        { rootMargin: "-25% 0px -45% 0px" },
      );
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
      return () => observer.disconnect();
    } catch {
      // Graceful fallback for older mobile webviews
    }
  }, [ids]);

  return active;
}

const IDS = LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleMobileNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  return (
    <>
      {/* Precision scroll reading indicator with dual-tone energy */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-indigo-500 via-sky-400 to-amber-400"
      />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-indigo-500/20 bg-[#090d18]/90 shadow-[0_16px_36px_rgba(3,7,18,0.7)] backdrop-blur-md"
              : "border-white/[0.08] bg-[#090d18]/50 backdrop-blur-sm"
          }`}
        >
          {/* Logo / Brandmark */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/40 bg-indigo-500/10 font-mono text-xs font-bold text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.2)] transition group-hover:border-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-white">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-wider text-white">
                SHIBIL<span className="text-amber-400">.</span>
              </span>
              <span className="hidden font-mono text-[10px] text-indigo-300/70 sm:inline-block">
                FULL STACK ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map(({ id, label, num }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-indigo-200"
                    }`}
                  >
                    <span className={`font-mono text-[10px] ${isActive ? "text-indigo-400" : "text-zinc-600"}`}>
                      {num}
                    </span>
                    <span>{label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-lg border border-indigo-500/30 bg-indigo-500/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                <FaGithub size={14} />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
              >
                <FaLinkedinIn size={13} />
              </a>
            </div>

            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-amber-300 transition hover:border-amber-400 hover:bg-amber-500/20 sm:inline-flex"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Button with 44px touch target */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 md:hidden cursor-pointer"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#090d18]/98 px-6 pt-24 pb-8 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">Navigation Index</p>
              <div className="mt-4 flex flex-col gap-3">
                {LINKS.map(({ id, label, num }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleMobileNavClick(e, id)}
                    className="flex items-baseline justify-between border-b border-indigo-500/10 py-3 text-2xl font-light text-zinc-200 transition hover:text-amber-400"
                  >
                    <span>{label}</span>
                    <span className="font-mono text-xs text-indigo-400/80">/{num}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-indigo-500/20 pt-6">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-300">Kerala, IN (GMT+5:30)</span>
                </span>
                <span className="font-mono text-indigo-400">SHIBIL // 2026</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-indigo-500/20 bg-indigo-500/10 py-2.5 text-xs font-medium text-white transition hover:bg-indigo-500/20"
                >
                  <FaGithub size={14} className="text-indigo-400" /> GitHub
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-indigo-500/20 bg-indigo-500/10 py-2.5 text-xs font-medium text-white transition hover:bg-indigo-500/20"
                >
                  <FaLinkedinIn size={14} className="text-indigo-400" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
