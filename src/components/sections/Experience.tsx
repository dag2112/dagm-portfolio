import { experience, education } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-widest text-sm uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience &amp; Education
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-5">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-950" />

                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {exp.role}
                    </h4>
                    <div className="flex flex-wrap gap-3 mt-1.5 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Building2 size={13} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar size={13} />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-violet-200 dark:border-violet-800"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-violet-500 border-2 border-white dark:border-slate-950" />

                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap gap-3 mt-1.5 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Building2 size={13} />
                        {edu.school}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar size={13} />
                        Expected {edu.year}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Completing a comprehensive software engineering curriculum covering
                      algorithms, system design, databases, web technologies, and software
                      development methodologies.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
