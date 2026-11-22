import { useState } from "react";
import { ArrowUpRight, Check, CheckCircle2, Copy, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const EMAIL = "shibildevtech@gmail.com";
const PHONE_DISPLAY = "+91 80783 71334";
const PHONE_LINK = "tel:+918078371334";
const GITHUB = "https://github.com/shiibiilll";
const LINKEDIN = "https://www.linkedin.com/in/shibil-k";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");
    data.append("subject", "Portfolio Inquiry - Shibil");
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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-indigo-500/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
              05 // Direct Protocol
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Initiate collaboration or inquiry.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs text-indigo-300/70">
            RESPONSE TIME &lt; 24 HOURS
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Channels & Information (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's engineer something notable together.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Whether you have an enterprise product architecture requirement, a full-stack web project, or an engineering role, I am available to discuss specifications.
              </p>
            </div>

            {/* Direct Connect Cards with Distinct Color Tints */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between rounded-xl border border-indigo-500/20 bg-[#0c1222]/80 p-4 transition-all hover:border-indigo-400/50 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-indigo-500/30 bg-indigo-500/15 text-indigo-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-indigo-300 uppercase tracking-wider font-semibold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="block font-mono text-xs font-medium text-white hover:text-indigo-300 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 min-h-[36px] font-mono text-[11px] text-indigo-200 transition hover:bg-indigo-500/20 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} className="text-indigo-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href={PHONE_LINK}
                className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-[#091518]/70 p-4 transition-all hover:border-emerald-400/50 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-300 uppercase tracking-wider font-semibold">
                      Telephone / Voice
                    </span>
                    <p className="font-mono text-xs font-medium text-white">{PHONE_DISPLAY}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-emerald-400/70" />
              </a>

              {/* Location Card */}
              <div className="flex items-center justify-between rounded-xl border border-amber-500/20 bg-[#161208]/70 p-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-amber-500/30 bg-amber-500/15 text-amber-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-amber-300 uppercase tracking-wider font-semibold">
                      Location Headquarters
                    </span>
                    <p className="font-mono text-xs font-medium text-white">
                      Kerala, India (IST / UTC+5:30)
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  REMOTE READY
                </span>
              </div>
            </div>

            {/* Social Network Access with Indigo Tints */}
            <div className="flex gap-3 pt-2">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-950/20 py-3 text-xs font-medium text-zinc-200 transition hover:border-indigo-400/50 hover:bg-indigo-900/30 hover:text-white"
              >
                <FaGithub size={15} className="text-indigo-400" />
                <span>GitHub Network</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-950/20 py-3 text-xs font-medium text-zinc-200 transition hover:border-indigo-400/50 hover:bg-indigo-900/30 hover:text-white"
              >
                <FaLinkedinIn size={15} className="text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Precision Inquiry Console (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/20 via-[#0d1324] to-[#090d16] p-6 shadow-2xl backdrop-blur-sm sm:p-8"
            >
              <div className="border-b border-indigo-500/15 pb-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Transmit Message Terminal
                </h4>
                <p className="mt-1 text-xs text-indigo-200/80">
                  Direct encrypted transmission to shibildevtech@gmail.com
                </p>
              </div>

              {/* Honeypot spam trap */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[11px] text-indigo-200 uppercase tracking-wider mb-2 font-semibold">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl border border-indigo-500/20 bg-[#090e1c] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:bg-[#0c1326] focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-indigo-200 uppercase tracking-wider mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      className="w-full rounded-xl border border-indigo-500/20 bg-[#090e1c] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:bg-[#0c1326] focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-indigo-200 uppercase tracking-wider mb-2 font-semibold">
                    Project / Inquiry Scope
                  </label>
                  <input
                    name="scope"
                    placeholder="e.g. SaaS Platform / Full Stack Role / Contract Build"
                    className="w-full rounded-xl border border-indigo-500/20 bg-[#090e1c] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:bg-[#0c1326] focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-indigo-200 uppercase tracking-wider mb-2 font-semibold">
                    Project Brief & Objectives
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Detail your requirements, project timelines, or role context..."
                    className="w-full resize-none rounded-xl border border-indigo-500/20 bg-[#090e1c] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:bg-[#0c1326] focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 p-3.5 text-xs text-emerald-300 font-medium">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>Message transmitted successfully. I will review and reply within 24 hours.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/15 p-3.5 text-xs text-red-300 font-medium">
                    <TriangleAlert size={16} className="shrink-0" />
                    <span>Transmission failed. Please reach out directly at shibildevtech@gmail.com.</span>
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
