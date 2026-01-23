"use client";

import { motion } from "motion/react";
import { skills } from "./constant";
import { Code, Database, GitBranch, BarChart3 } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Architecture": <Code className="w-5 h-5" />,
  "State Management & Data": <Database className="w-5 h-5" />,
  "Backend Development": <GitBranch className="w-5 h-5" />,
  "Database & Caching": <Database className="w-5 h-5" />,
  "DevOps & Infrastructure": <BarChart3 className="w-5 h-5" />,
  "Testing & Quality": <Code className="w-5 h-5" />,
  "Tools & Workflow": <GitBranch className="w-5 h-5" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600">
            Mastery across the full technology stack
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList], categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.08 }}
              className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-slate-50 group-hover:bg-slate-100 rounded-xl transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIdx * 0.08 + skillIdx * 0.03,
                      }}
                      className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-lg text-sm font-medium border border-slate-300 hover:border-slate-400 transition-all duration-200 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl p-8 border border-slate-200 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Proficiency Matrix
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                area: "Full-Stack Development",
                level: 95,
                description: "End-to-end application development",
              },
              {
                area: "System Design & Architecture",
                level: 92,
                description: "Scalable system architecture & patterns",
              },
              {
                area: "Performance Optimization",
                level: 90,
                description: "Critical path optimization & caching",
              },
              {
                area: "DevOps & Infrastructure",
                level: 88,
                description: "Cloud platforms & containerization",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900">
                    {item.area}
                  </span>
                  <span className="text-blue-600 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: idx * 0.1,
                    }}
                    className="h-full bg-gradient-to-r from-slate-700 to-slate-900"
                  ></motion.div>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
