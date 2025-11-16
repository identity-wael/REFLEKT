'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Heart,
  Briefcase,
  Smartphone,
  Sparkles,
  Building,
  Users,
  Baby,
  Shield,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TargetCustomersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const customerSegments = [
    {
      icon: Heart,
      title: 'Wellness-Conscious Consumers',
      description: 'Health-oriented individuals seeking to improve their mental well-being and mindfulness practices.',
      details: [
        'Meditation and yoga practitioners',
        'Self-care routine enthusiasts',
        'Mental wellness advocates',
        'Mindful morning ritual seekers'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
    },
    {
      icon: Briefcase,
      title: 'Busy Professionals & High Achievers',
      description: 'Working professionals and entrepreneurs facing hectic mornings who need structured, calming starts.',
      details: [
        'Executives and business leaders',
        'High-stress career professionals',
        'Performance optimization seekers',
        'Work-life balance advocates'
      ],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    {
      icon: Smartphone,
      title: 'Tech-Savvy Early Adopters',
      description: 'Gadget enthusiasts and smart home users who embrace innovative lifestyle technologies.',
      details: [
        'Smart home enthusiasts',
        'IoT and AI technology adopters',
        'Lifestyle optimization enthusiasts',
        'Data-driven wellness trackers'
      ],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20'
    },
    {
      icon: Sparkles,
      title: 'Beauty & Style Enthusiasts',
      description: 'Consumers invested in personal appearance, skincare, and fashion who want enhanced grooming experiences.',
      details: [
        'Beauty bloggers and influencers',
        'Skincare routine enthusiasts',
        'Fashion and style conscious individuals',
        'AR beauty technology adopters'
      ],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20'
    },
    {
      icon: Building,
      title: 'Hospitality & Wellness Businesses',
      description: 'Luxury hotels, spas, and premium venues seeking unique value-add services for their clients.',
      details: [
        'Luxury hotels and resorts',
        'High-end spas and wellness centers',
        'Premium fitness and co-working spaces',
        'Corporate wellness programs'
      ],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20'
    },
    {
      icon: Baby,
      title: 'Generation Z & Alpha',
      description: 'Digital natives who value authentic wellness, mental health awareness, and mindful technology use.',
      details: [
        'Mental health conscious youth',
        'Mindful technology advocates',
        'Social media wellness influencers',
        'Future wellness technology adopters'
      ],
      gradient: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20'
    },
    {
      icon: Shield,
      title: 'Dementia Support & Accessibility',
      description: 'People with mild dementia and their families seeking supportive daily life companions.',
      details: [
        'Mild dementia patients',
        'Family caregivers and support networks',
        'Memory care facilities',
        'Accessibility-focused wellness solutions'
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20'
    }
  ];

  const beachheadCustomers = [
    {
      title: 'Wellness Enthusiasts & Mindfulness Practitioners',
      description: 'Already invested in daily well-being routines and can serve as passionate evangelists'
    },
    {
      title: 'Beauty/Lifestyle Influencers',
      description: 'Thrive on adopting new trends and can spark broader interest among followers'
    },
    {
      title: 'Boutique Hotels & Spa Resorts',
      description: 'High-visibility hospitality locations for piloting and gaining credibility'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Target Customer Segments
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            REFLEKT for Every Lifestyle
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            From wellness-conscious individuals to enterprise installations, discover how REFLEKT adapts to diverse customer needs and environments.
          </p>
        </motion.div>

        {/* Customer Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {customerSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className={`h-full rounded-3xl p-8 bg-gradient-to-br ${segment.bgGradient} border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/70 dark:hover:border-slate-600/70 transition-all duration-300`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${segment.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {segment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {segment.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {segment.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + detailIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${segment.gradient} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Beachhead Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Beachhead Strategy
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Initial Focus: Early Adopters
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              REFLEKT will initially target key customer groups most likely to embrace the product early and become passionate advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beachheadCustomers.map((customer, index) => (
              <motion.div
                key={customer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {customer.title}
                </h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {customer.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
            >
              Learn About Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}