"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600">
            My journey in software engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 p-1">
              <Image
                src="/kabby.jpeg"
                alt="Kabiru Akeem"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg font-semibold"
            >
              Senior Full-Stack Dev
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                I&apos;m Kabiru Akeem, a software engineer focused on designing
                and delivering scalable systems with measurable impact. With
                expertise across the entire stack, I approach system design
                through deliberate trade-offs, balancing performance, usability,
                and maintainability.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                My specialization lies in building production-grade
                infrastructure serving millions of users. I&apos;ve worked on
                real-time payment systems, fintech platforms, and analytics
                dashboards handling massive scale while maintaining sub-second
                latency and 99.99% uptime.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Beyond coding, I believe strong engineering is rooted in
                collaboration. I work closely with product, design, and backend
                teams to ensure the frontend is a first-class citizen within a
                cohesive, well-designed system. I&apos;m passionate about
                mentoring and establishing technical standards that enable teams
                to move with velocity and confidence.
              </p>
            </div>

            {/* Highlight boxes */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                {
                  icon: "🚀",
                  label: "Performance",
                  desc: "Sub-second latency",
                },
                { icon: "🔒", label: "Security", desc: "Enterprise-grade" },
                { icon: "📈", label: "Scalability", desc: "Millions of users" },
                { icon: "👥", label: "Mentorship", desc: "Team leadership" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 transition-all"
                >
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
