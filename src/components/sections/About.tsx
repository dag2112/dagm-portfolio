import { personalInfo } from "@/data/portfolio";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-widest text-sm uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative w-44 h-44 rounded-2xl ring-4 ring-indigo-500 ring-offset-4 ring-offset-white dark:ring-offset-slate-900 shadow-xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Dagm Woldekidan"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <InfoCard icon={<MapPin size={16} />} label="Location" value={personalInfo.location} />
              <InfoCard icon={<Mail size={16} />} label="Email" value={personalInfo.email} />
              <InfoCard icon={<Phone size={16} />} label="Phone" value={personalInfo.phone} />
              <InfoCard icon={<Send size={16} />} label="Telegram" value="@Abye12" />
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Full-Stack Web Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              I&apos;m currently completing my Bachelor&apos;s degree in Software Engineering at Woldiya
              University (graduating 2026), where I&apos;ve been building real-world applications
              for campus systems and e-commerce platforms.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              My passion lies in crafting full-stack solutions that are not only functional but
              also maintainable, scalable, and easy for users to navigate. I love working across
              the entire stack — from database design to pixel-perfect UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
      <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-200 font-medium break-all">{value}</p>
      </div>
    </div>
  );
}
