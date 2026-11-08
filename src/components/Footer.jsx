import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const LINKS = ["about", "skills", "projects", "experience", "contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
        <div className="text-center md:text-left">
          <a href="#hero" className="text-xl font-extrabold">
            shibil<span className="text-gradient">.dev</span>
          </a>
          <p className="mt-1 text-sm text-zinc-500">© {new Date().getFullYear()} Shibil. Built with React, Tailwind & Motion.</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-5 text-sm text-zinc-400">
          {LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="capitalize transition hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/shiibiilll"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a href="#hero" aria-label="Back to top" className="glass grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-1">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
