"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";
import Image from "next/image";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center gap-6 relative z-10">
        {/* Profile photo */}
        <div className="relative w-28 h-28 rounded-full ring-4 ring-indigo-500 ring-offset-4 ring-offset-white dark:ring-offset-slate-900 shadow-xl overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Dagm Woldekidan"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Greeting */}
        <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-widest text-sm uppercase">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-indigo-400" />
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            {personalInfo.title}
          </h2>
          <span className="h-px w-8 bg-indigo-400" />
        </div>

        {/* Bio */}
        <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin size={15} />
          <span>{personalInfo.location}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button
            onClick={() => handleScroll("#projects")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow-md transition-all hover:shadow-indigo-300 dark:hover:shadow-indigo-900 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-sm font-semibold rounded-full transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <Mail size={22} />
          </a>
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <TelegramIcon size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScroll("#about")}
          aria-label="Scroll down"
          className="mt-8 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
