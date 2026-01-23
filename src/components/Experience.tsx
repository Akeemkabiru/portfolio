"use client";

import { motion } from "motion/react";
import { experiences } from "./constant";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600">
            Building impactful products at scale
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 md:left-1/2 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative md:flex items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 w-4 h-4 bg-white border-4 border-slate-900 rounded-full top-8 md:top-6 md:left-1/2 transform md:-translate-x-1/2 shadow-lg"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Briefcase size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-slate-800 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400" />
                        {exp.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        {exp.location}
                      </div>
                      <div className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    <span className="font-semibold text-slate-900">
                      Overview:
                    </span>{" "}
                    {exp.overview}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li
                        key={bulletIdx}
                        className="text-slate-600 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-blue-600 font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Impact */}
                  <div className="bg-slate-100 rounded-lg p-4 border border-slate-300">
                    <div className="flex gap-3">
                      <TrendingUp
                        className="text-slate-700 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                          Impact
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          {exp.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200">
                    {Object.entries(exp.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xs text-slate-600 capitalize">
                          {key}
                        </p>
                        <p className="text-sm font-bold text-blue-600">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
