'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0.6, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-black dark:via-slate-950 dark:to-slate-900">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-slate-700/20 via-slate-800/10 to-slate-900/20"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute top-40 right-20 w-24 h-24 bg-slate-700/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        className="absolute bottom-20 left-1/3 w-20 h-20 bg-slate-800/10 rounded-full blur-xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div style={{ opacity }} className="container relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 py-20">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Smart Mirror • Wellness Technology
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                REFLEKT
              </motion.span>
              {' '}— Your mindful partner
            </h1>

            {/* Initial Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center space-y-4 mb-8"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100/80 leading-relaxed">
                REFLEKT — your mindful partner helps you start your day grounded, aware, and fully present. REFLEKT transforms daily routines into mindful rituals.
              </p>
            </motion.div>

            {/* Key Messages Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-5xl mx-auto space-y-8 mt-12"
            >
              {/* Solution */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
                  REFLEKT is more than a smart mirror — it's your mindful partner.
                </h2>
                <div className="space-y-4 text-left">
                  <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed text-left">
                    Modern mornings are rushed, reactive, and emotionally disconnected. Most people begin their day overwhelmed by notifications and routines, with no space for mindfulness or emotional check-ins.
                  </p>
                  <p className="text-lg text-blue-100/80 leading-relaxed text-left">
                    REFLEKT greets you with gentle conversation and emotional awareness, helping you pause, reflect, and begin your day with calm and clarity.
                  </p>
                  <p className="text-lg text-blue-100/80 leading-relaxed text-left">
                    Users start with 2–3 minutes of breathing or calming music, then smoothly shift into Active Mode, where REFLEKT presents timely, personalized content.
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* CTA and Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-8 mt-12"
          >
            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Join the Waitlist
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

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="relative"
              >
                <video
                  controls
                  poster="/images/products/REFLEKT mirror image on ppt .png"
                  className="w-full max-w-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <source src="/videos/reflekt-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Core Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl text-blue-100/90 font-medium italic">
                "Before the world asks for your attention, give yourself a moment of reflection"
              </p>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl"
          >
            {[
              { icon: Sparkles, title: "Calm Mode", desc: "Guided breathing and mindfulness to center your morning" },
              { icon: Target, title: "Mood Sensing", desc: "AI-powered emotional awareness with personalized responses" },
              { icon: Zap, title: "Active Mode", desc: "Smart briefings, style tips, and daily preparation" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100/70 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="mt-16 w-full max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/8 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/products/REFLEKT mirror image on ppt .png"
                    alt="REFLEKT Smart Mirror - Transform your morning routine with mindful technology"
                    width={800}
                    height={500}
                    className="w-full h-auto max-h-96 object-contain transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="text-center mt-6"
                >
                  <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed">
                    Experience the future of mindful mornings with REFLEKT's intelligent interface
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hidden Emotional Fatigue Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-20 w-full max-w-4xl"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-4">
                <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
                  It's something we all feel, but we can't always put a name to it. It's a kind of hidden emotional fatigue, a silent stress, you know? It's driven by our overwhelming world, and it just builds up day after day.
                </p>
                <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
                  And this fatigue, it shows up in ways we all recognize: that overwhelming stress that just clouds your thinking, the low-quality sleep that leaves you drained, and of course, that relentless anxiety-driven loop of checking our phones, our emails, our messages. There's just no room left to pause, no room to breathe.
                </p>
              </div>

              {/* Statistics */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl font-bold text-white">80%</div>
                </div>
                <p className="text-lg text-blue-100/80 text-center leading-relaxed mb-3">
                  of people check their phones within 15 minutes of waking, triggering stress and urgency first thing in the morning
                </p>
                <p className="text-sm text-blue-100/60 text-center">
                  Source: HealthShots.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* REFLEKT Interface Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="mt-20 w-full max-w-6xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
              Experience REFLEKT's Dual Modes
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calm Mode */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3.0 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20 rounded-3xl p-6 hover:from-blue-600/15 hover:to-cyan-600/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Calm Mode</h3>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/features/calm-mode-interface.jpg.png"
                      alt="REFLEKT Calm Mode - Mindful breathing and meditation interface"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-blue-100/80 mt-4 text-sm">
                    Begin each day with guided breathing exercises and mindfulness moments that center your mind and reduce anxiety.
                  </p>
                </div>
              </motion.div>

              {/* Active Mode */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-purple-600/10 to-orange-600/10 border border-purple-400/20 rounded-3xl p-6 hover:from-purple-600/15 hover:to-orange-600/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Active Mode</h3>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/features/active-mode-interface.jpg.png"
                      alt="REFLEKT Active Mode - Smart dashboard with daily briefings and personalization"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-blue-100/80 mt-4 text-sm">
                    Your personalized morning dashboard with smart scheduling, daily briefings, and curated content tailored to your day.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Features in Calm Mode */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="mt-16 w-full max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
                  Key Features in Calm Mode
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Guided breathing exercises with visual synchronization",
                    "Personalized meditation prompts based on mood",
                    "Ambient lighting that adapts to your energy levels",
                    "Gentle morning affirmations and mindfulness quotes",
                    "Progressive muscle relaxation guidance",
                    "Stress level assessment and calming recommendations"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 3.2 + index * 0.1 }}
                      className="flex items-start space-x-4 py-2"
                    >
                      <Sparkles className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-blue-100/85 leading-relaxed text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Key Features in Active Mode */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              className="mt-8 w-full max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-orange-500/10 border border-purple-400/20 rounded-2xl p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
                  Key Features in Active Mode
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Smart scheduling based on calendar events and energy levels",
                    "Mood-aware recommendations for wellness, fashion, and skincare",
                    "Curated inspiration from YouTube, Pinterest, and social media",
                    "Product discovery tailored to user interests",
                    "Personalized reminders for supplements or health routines",
                    "Daily briefings that help users begin prepared and focused"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 4.0 + index * 0.1 }}
                      className="flex items-start space-x-4 py-2"
                    >
                      <Sparkles className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-blue-100/85 leading-relaxed text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-blue-400/70 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}