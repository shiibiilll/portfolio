import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";

/* ---------- data (edit this) ---------- */
const TIMELINE = [
  {
    type: "work",
    role: "Full Stack Developer (Frontend Focused)",
    org: "Zihnisoft Technology",
    period: "MONTH YEAR - Present", // TODO your start month and year
    place: "Kerala, India",
    points: [
      "Built the sales analytics dashboard for the ERP, with charts and data grids that turn sales data into clear insights.",
      "Developed CRM modules with Kanban boards for managing deals and leads.",
      "Built the ERP's marketing landing page and redesigned the multi-step onboarding flow to match it.",
      "Revamped the zihnisoft.com homepage hero with modern animations and a cleaner design.",
      "Converted an HTML/jQuery/Bootstrap template into a modular React e-commerce app for a client.",
    ],
    stack: [
      { icon: SiReact, color: "#61dafb" },
      { icon: SiTypescript, color: "#3178c6" },
      { icon: SiNextdotjs, color: "#ffffff" },
      { icon: SiTailwindcss, color: "#38bdf8" },
      { icon: SiNodedotjs, color: "#5fa04e" },
      { icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    type: "edu",
    role: "Bachelor of Computer Application",
    org: "Moulana College of Arts, Science & Commerce, Chennara",
    period: "2022 - 2025",
    points: [],
  },
  {
    type: "edu",
    role: "Higher Secondary, Computer Commerce",
    org: "GHSS Tirurangadi",
    period: "2020 - 2022",
    points: [],
  },
];

/* ---------- Experience ---------- */
export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/15 blur-[130px]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-brand">// experience</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Where I've <span className="text-gradient">worked and learned</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          {/* line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 sm:left-[19px]" />
          <motion.div
            style={{ scaleY: line }}
            className="absolute bottom-0 left-[14px] top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-brand via-hot to-aqua sm:left-[18px]"
          />

          <div className="space-y-12">
            {TIMELINE.map((t, i) => {
              const work = t.type === "work";
              const Icon = work ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* node */}
                  <div
                    className={`absolute -left-10 top-1 grid h-9 w-9 place-items-center rounded-full border-4 border-ink sm:-left-14 ${
                      work ? "bg-gradient-to-br from-brand to-hot" : "bg-zinc-800"
                    }`}
                  >
                    <Icon size={14} />
                  </div>

                  <div className={`glass rounded-3xl p-6 transition-colors hover:border-white/20 ${work ? "sm:p-8" : ""}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-semibold text-brand">{t.period}</span>
                      {t.place && <span className="text-xs text-zinc-500">{t.place}</span>}
                    </div>

                    <h3 className={`mt-4 font-bold ${work ? "text-2xl" : "text-xl"}`}>{t.role}</h3>
                    <p className="text-zinc-400">{t.org}</p>

                    {t.points.length > 0 && (
                      <ul className="mt-5 space-y-3">
                        {t.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}

                    {t.stack && (
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                        {t.stack.map(({ icon: S, color }, k) => (
                          <span key={k} className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05]">
                            <S size={18} style={{ color }} />
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
