import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

/* ---------- config ---------- */
const EMAIL = "shibildevtech@gmail.com";
const PHONE_DISPLAY = "+91 80783 71334";
const PHONE_LINK = "tel:+918078371334";
const GITHUB = "https://github.com/shiibiilll";
const LINKEDIN = "#"; // TODO paste your LinkedIn URL

const INFO = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, color: "text-brand" },
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_LINK, color: "text-emerald-400" },
  { icon: MapPin, label: "Location", value: "Kerala, India", href: null, color: "text-hot" },
];

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-brand/70 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]";

/* ---------- Contact ---------- */
export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    data.append("subject", "New message from your portfolio");
    data.append("from_name", "Portfolio Contact Form");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-hot/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-brand/20 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-brand">// contact</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let's build something <span className="text-gradient">great together</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Have a project, a job opportunity or just want to say hi? Send a message and I'll reply as soon as I can.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {INFO.map(({ icon: Icon, label, value, href, color }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="glass group flex items-center gap-4 rounded-3xl p-5 transition hover:border-white/25"
                >
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.05] ${color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
                    <p className="truncate font-semibold">{value}</p>
                  </div>
                  {href && (
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  )}
                </Wrapper>
              );
            })}

            <div className="flex gap-3 pt-2">
              {[
                { icon: FaGithub, href: GITHUB, label: "GitHub" },
                { icon: FaLinkedinIn, href: LINKEDIN, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid h-14 w-14 place-items-center rounded-2xl text-zinc-300 transition hover:-translate-y-1 hover:border-hot/60 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass relative space-y-5 rounded-3xl p-6 sm:p-8"
          >
            {/* honeypot spam trap */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={fieldClass} />
              <input name="email" type="email" required placeholder="Your email" className={fieldClass} />
            </div>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project or opportunity..."
              className={`${fieldClass} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-hot px-8 py-4 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(99,102,241,0.8)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send message <Send size={17} />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <TriangleAlert size={16} /> Something went wrong. Please email me directly at {EMAIL}.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
