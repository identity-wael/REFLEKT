'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Brain,
  Clock,
  Camera,
  Mic,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DementiaSupportSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const supportFeatures = [
    {
      icon: Brain,
      title: 'Memory Support',
      description: 'Gentle reminders of recent activities and "continuation points" to help with daily routines and hobbies.',
      details: [
        'Recent activity recaps and context',
        'Gentle continuation suggestions for reading or hobbies',
        'Visual cues for familiar routines',
        'Progressive memory reinforcement'
      ]
    },
    {
      icon: Clock,
      title: 'Daily Living Reminders',
      description: 'Assists with medication schedules, hydration, meals, and walks using voice and visual cues.',
      details: [
        'Medication schedule management',
        'Hydration and meal reminders',
        'Exercise and walking prompts',
        'Personal care routine guidance'
      ]
    },
    {
      icon: Camera,
      title: 'Life Logging & Sharing',
      description: 'Easy recording of daily activities through photos, notes, and voice, shared with family or caregivers.',
      details: [
        'Simple photo and voice recording',
        'Automatic activity documentation',
        'Family and caregiver sharing',
        'Memory timeline creation'
      ]
    },
    {
      icon: Heart,
      title: 'Reassurance & Emotional Care',
      description: 'Offers calming feedback and comfort to reduce anxiety and build a sense of stability.',
      details: [
        'Gentle "well done today" affirmations',
        'Anxiety reduction techniques',
        'Emotional stability support',
        'Calming interaction patterns'
      ]
    }
  ];

  const accessibility = [
    'Large, clear visual interfaces with high contrast',
    'Simple voice commands and natural language processing',
    'Emergency contact integration for safety',
    'Family dashboard for remote monitoring and support',
    'Customizable interaction complexity based on needs',
    'Integration with existing care management systems'
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4 mr-2" />
            Special Care Features
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            REFLEKT+ for Dementia Support
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Extending REFLEKT's mindful partnership to provide specialized support for people with mild dementia and their families,
            creating a caring daily life companion that promotes independence and peace of mind.
          </p>
        </motion.div>

        {/* Core Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-20"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond Wellness: A Caring Support System
            </h3>
            <p className="text-lg text-purple-100 leading-relaxed max-w-4xl mx-auto mb-8">
              While maintaining REFLEKT's core vision of mindful partnership and wellness support,
              REFLEKT+ expands to become a trusted daily life companion for those who need gentle care and their loved ones.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white font-medium">
              <Activity className="w-5 h-5 mr-2" />
              Mindful Technology + Compassionate Care
            </div>
          </div>
        </motion.div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {supportFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="h-full rounded-3xl p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/30 hover:border-purple-300/70 dark:hover:border-purple-600/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + detailIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-3xl p-8 md:p-12 border border-blue-200/30 dark:border-blue-800/30"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Accessibility & Family Integration
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Designed with accessibility in mind, REFLEKT+ ensures easy interaction while keeping families connected and informed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibility.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-slate-800/40 rounded-2xl border border-blue-200/30 dark:border-blue-800/20"
              >
                <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Supporting Independence with Compassionate Technology
            </h3>
            <p className="text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto mb-8">
              REFLEKT+ strengthens our identity as a true "Mindful Partner" — providing not just wellness and self-growth,
              but also supportive care when it's needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                Learn About REFLEKT+ Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                Connect with Care Specialists
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}