'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Zap, Users, Target, Globe, Shield, Rocket, Brain, Layers, Code, Sparkles,
  Eye, Heart, Activity, Palette, Mic, Wifi
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function FeaturesSection() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: Eye,
      title: 'Mood Sensing AI',
      description: 'Advanced facial recognition analyzes your emotional state each morning, providing personalized recommendations based on how you feel.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Heart,
      title: 'Calm Mode',
      description: 'Begin each day with guided breathing exercises and mindfulness moments that center your mind and reduce anxiety.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Activity,
      title: 'Active Mode',
      description: 'Your personalized morning dashboard with smart scheduling, daily briefings, and curated content tailored to your day.',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
    },
    {
      icon: Palette,
      title: 'Style & Beauty AR',
      description: 'Augmented reality overlays suggest skincare routines, makeup looks, and fashion choices that match your mood and schedule.',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      image: '/images/features/Augmented Reality (AR) Style Guidance on the REFLEKT Mirror.png',
    },
    {
      icon: Mic,
      title: 'Voice Interaction',
      description: 'Natural conversation with your mirror through advanced voice recognition and intuitive touch gestures.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
    },
    {
      icon: Wifi,
      title: 'Smart Integrations',
      description: 'Seamlessly connects with your calendar, wellness apps, smart home devices, and favorite content platforms.',
      gradient: 'from-teal-500 to-green-500',
      bgGradient: 'from-teal-500/10 to-green-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
      />

      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Rocket className="w-4 h-4 mr-2" />
            Smart Mirror Technology
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-white">
            More Than a Mirror
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light">
            REFLEKT combines mindfulness technology with personalized wellness to transform your daily routine into a ritual of self-awareness and intention.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants as any}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

                {/* Card */}
                <Card className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>

                  {/* Hover Effect Lines */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Interface Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Interface Deep Dive
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              See REFLEKT in Action
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            >
              Experience how REFLEKT adapts to your needs with two distinct modes designed for different moments in your morning routine.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Calm Mode Detail */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mr-4">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Calm Mode</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Mindful Morning Start</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image
                      src="/images/features/calm-mode-interface.jpg.png"
                      alt="REFLEKT Calm Mode showing breathing exercise visualization"
                      width={500}
                      height={350}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      Guided breathing visualization
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                      Ambient lighting synchronization
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      Personalized meditation prompts
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Mode Detail */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Active Mode</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Smart Daily Dashboard</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image
                      src="/images/features/active-mode-interface.jpg.png"
                      alt="REFLEKT Active Mode showing daily dashboard with schedule and tasks"
                      width={500}
                      height={350}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      Intelligent daily briefings
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      Calendar and task integration
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                      Personalized style suggestions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AR Style Guidance Detail */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="group lg:col-span-2 xl:col-span-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mr-4">
                      <Layers className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">AR Style Guidance</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Wardrobe & Beauty Intelligence</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image
                      src="/images/features/Augmented Reality (AR) Style Guidance on the REFLEKT Mirror.png"
                      alt="REFLEKT AR Style Guidance showing wardrobe suggestions and style overlays"
                      width={500}
                      height={350}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                      Smart wardrobe integration
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      AR makeup and style overlays
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                      Mood-based outfit suggestions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to transform your morning routine?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Waitlist
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}