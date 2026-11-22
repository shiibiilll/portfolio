import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const LINKS = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "Profile" },
  { id: "projects", label: "Case Studies" },
  { id: "skills", label: "Architecture" },
  { id: "experience", label: "Ledger" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-500/15 bg-[#060810] py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Colophon & Identity (5 cols) */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-indigo-500/40 bg-indigo-500/10 font-mono text-xs font-bold text-indigo-400">
                S
              </div>
              <span className="font-mono text-sm font-semibold tracking-wider text-white">
                SHIBIL<span className="text-amber-400">.</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-300 max-w-sm">
              Full Stack Developer specializing in multi-tenant SaaS ERP platforms, MERN ecosystems, and high-performance React Native mobile applications.
            </p>
            <div className="font-mono text-[11px] text-indigo-300/80 space-y-1">
              <p>COORDINATES: 10.8505° N, 76.2711° E</p>
              <p>LOCATION: KERALA, INDIA · GMT+5:30</p>
            </div>
          </div>

          {/* Navigation Index (4 cols) */}
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 font-semibold">
              System Navigation
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-xs text-zinc-400">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="transition hover:text-indigo-300 hover:underline underline-offset-4"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top Action (3 cols) */}
          <div className="flex flex-col justify-between gap-6 md:col-span-3 md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/shiibiilll"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="grid h-9 w-9 place-items-center rounded-lg border border-indigo-500/20 bg-indigo-950/20 text-zinc-400 transition hover:border-indigo-400/50 hover:bg-indigo-900/40 hover:text-white"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/shibil-k"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="grid h-9 w-9 place-items-center rounded-lg border border-indigo-500/20 bg-indigo-950/20 text-zinc-400 transition hover:border-indigo-400/50 hover:bg-indigo-900/40 hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#hero"
                aria-label="Scroll to top of page"
                className="grid h-9 w-9 place-items-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 transition hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white cursor-pointer"
              >
                <ArrowUp size={15} />
              </a>
            </div>

            <div className="text-left md:text-right font-mono text-[10px] text-zinc-500">
              <p>© {currentYear} SHIBIL. ALL RIGHTS RESERVED.</p>
              <p className="mt-0.5 text-indigo-400/70">BUILT WITH REACT 19 & MOTION</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
