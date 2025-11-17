'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Sparkles, TrendingUp, Heart, Brain, Clock } from 'lucide-react';

export function ProblemOpportunitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <Brain className="w-4 h-4 mr-2" />
            The Mindfulness Gap
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Morning Mental Health Crisis
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Modern mornings have become a battleground for our mental well-being, where technology overwhelms instead of empowers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-3xl p-8 border border-red-200/50 dark:border-red-800/30">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Problem</h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/60 dark:bg-slate-800/40 rounded-2xl p-6 border border-red-200/30 dark:border-red-800/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Smartphone Addiction</h4>
                    <div className="text-3xl font-bold text-red-500">80%</div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    check phones within 15 minutes of waking, triggering immediate stress and reactive behavior
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-4"
                >
                  {[
                    { icon: Clock, text: "Rushed, reactive mornings with no space for mindfulness" },
                    { icon: Brain, text: "Overwhelming notifications and information overload" },
                    { icon: Heart, text: "Disconnection from emotional awareness and self-care" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <item.icon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Opportunity Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-500 mr-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Opportunity</h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/60 dark:bg-slate-800/40 rounded-2xl p-6 border border-blue-200/30 dark:border-blue-800/20"
                >
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Mindful Technology Revolution</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Transform morning routines into grounded, personalized rituals that center mental well-being before the day begins
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-4"
                >
                  {[
                    { icon: Heart, text: "Even brief daily mindfulness practice improves mood and stress management" },
                    { icon: Brain, text: "AI-powered emotional awareness creates personalized wellness experiences" },
                    { icon: TrendingUp, text: "Universal need across busy professionals, wellness seekers, and all cultures" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <item.icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Solution Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              REFLEKT bridges this gap
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              By providing a dedicated medium for emotional awareness and intention-setting each morning,
              REFLEKT creates a ritual of self-awareness that fits seamlessly into users' lives —
              helping people start each day centered, calm, and present instead of chaotic.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}