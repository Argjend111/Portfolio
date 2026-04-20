"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageSquareText, Send, User } from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";
import { Reveal } from "./ui/Reveal";

const fields = [
  { id: "name", label: "Your name", type: "text", icon: User },
  { id: "email", label: "Email address", type: "email", icon: Mail },
];

function FloatingField({ id, label, type = "text", icon: Icon }) {
  return (
    <label className="group relative block">
      <Icon className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400 transition-colors duration-300 group-focus-within:text-indigo-500" />
      <input
        id={id}
        name={id}
        type={type}
        placeholder=" "
        required
        className="peer h-14 w-full rounded-[1.25rem] border border-slate-200 bg-white/85 pl-12 pr-4 pt-5 text-sm text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.05)] outline-none transition-all duration-300 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
      />
      <span className="pointer-events-none absolute left-12 top-4 origin-left text-sm text-slate-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-2.5 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:scale-75">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea() {
  return (
    <label className="group relative block">
      <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-slate-400 transition-colors duration-300 group-focus-within:text-indigo-500" />
      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder=" "
        required
        className="peer min-h-[180px] w-full rounded-[1.5rem] border border-slate-200 bg-white/85 pl-12 pr-4 pt-6 text-sm text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.05)] outline-none transition-all duration-300 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
      />
      <span className="pointer-events-none absolute left-12 top-5 origin-left text-sm text-slate-500 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-focus:top-3 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:scale-75">
        Tell me about your project
      </span>
    </label>
  );
}

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState(null);

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      event.target.reset();
    } catch {
      setStatus("error");
    } finally {
      window.setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <SectionShell id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let&apos;s build something that feels premium and performs like it should."
            description="Whether you need a product landing page, SaaS dashboard, AI workflow, or full-stack platform, I can help shape and ship it."
            className="mb-0"
          />

          <Card className="space-y-4">
            {[
          
  "Reliable communication and consistent delivery",
  "User-focused design with real product mindset",
  "Full-stack development from architecture to deployment",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </Card>
        </div>

        <Reveal>
          <Card className="p-4 sm:p-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <FloatingField key={field.id} {...field} />
                ))}
              </div>

              <FloatingTextarea />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-slate-500">
                  I usually reply with next steps, timing, and a clear plan for the build.
                </p>

                <Button as={motion.button} type="submit" className="min-w-[180px] justify-center">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                {status ? (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm font-medium",
                      status === "success"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                        : "bg-red-50 text-red-700 ring-1 ring-red-100",
                    ].join(" ")}
                  >
                    {status === "success"
                      ? "Your message was sent successfully."
                      : "Something went wrong while sending the message."}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
