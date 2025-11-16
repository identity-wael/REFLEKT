'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, MessageCircle, Monitor, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  const t = useTranslations('navigation');

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Begin Your Mindful Journey
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Ready to Transform Your Mornings?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed font-light">
            Join the beta program and be among the first to experience REFLEKT's mindful mirror technology.
            Transform your daily routine into a ritual of self-awareness and intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl">
                <Link href="/contact">
                  <Monitor className="mr-2 h-5 w-5" />
                  Join Beta Waitlist
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-blue-400/30 text-blue-100 hover:bg-blue-500/10 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200/70"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm">Beta program open</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">Limited early access spots</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm">Expected Q2 2025 launch</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}