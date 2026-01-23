"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "kabby.dev@outlook.com",
      href: "mailto:kabby.dev@outlook.com",
      color: "from-slate-700 to-slate-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kabiruakeem",
      href: "https://linkedin.com/in/kabiruakeem",
      color: "from-slate-700 to-slate-900",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/akeemkabiru",
      href: "https://github.com/akeemkabiru",
      color: "from-slate-800 to-slate-600",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "twitter.com/akemkabiru",
      href: "https://twitter.com/akemkabiru",
      color: "from-black to-slate-700",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600">
            Open to collaborations, opportunities, and technical discussions
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900 rounded-2xl p-12 text-white text-center mb-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to build something great?
          </h3>
          <p className="text-lg mb-8 text-slate-100">
            Get in touch to discuss your next project or collaboration
          </p>
          <motion.a
            href="mailto:kabby.dev@outlook.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-slate-600 text-sm break-all">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-600">
            © {new Date().getFullYear()} Kabiru Akeem. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Crafted with attention to detail and a passion for elegant code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
