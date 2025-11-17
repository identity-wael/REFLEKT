'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TrendingUp,
  Users,
  Building,
  Smartphone,
  DollarSign,
  Target,
  Handshake,
  Repeat,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BusinessStrategySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const gtmPhases = [
    {
      phase: 'Phase 1',
      title: 'Direct-to-Consumer Pilot',
      description: 'Target early adopters and wellness enthusiasts with invite-based beta program',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      activities: [
        'Waitlist and invite-based pilot program',
        'Focus on wellness and tech communities',
        'Limited pre-orders for beta units',
        'Social media campaigns on Instagram/Pinterest',
        'YouTube influencer partnerships',
        'Direct e-commerce through dedicated website'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Mobile App Mass Market Entry',
      description: 'Broaden reach with free companion app as lower-barrier entry point',
      icon: Smartphone,
      gradient: 'from-emerald-500 to-teal-500',
      activities: [
        'Free companion mobile app launch',
        'Freemium model for wide adoption',
        'Targeted ads on wellness platforms',
        'Meditation app collaborations',
        'App as sales funnel for Smart Mirror',
        'Broader digital marketing channels'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'B2B & Spatial Integration',
      description: 'Expand into business markets and larger-scale installations',
      icon: Building,
      gradient: 'from-purple-500 to-violet-500',
      activities: [
        'Hotel, spa, and gym partnerships',
        'Corporate wellness installations',
        'Industry event showcases',
        'B2B sales team development',
        'Enterprise pricing tiers',
        'White-label solutions'
      ]
    }
  ];

  const revenueStreams = [
    {
      icon: Repeat,
      title: 'Subscription Services',
      description: 'Monthly subscriptions for premium content and personalized insights',
      details: [
        'Premium wellness content library',
        'Advanced mood analytics',
        'Personalized daily coaching',
        'Integration with third-party services',
        'Monthly well-being reports',
        'Priority access to new features'
      ],
      pricing: '$10-30/month'
    },
    {
      icon: DollarSign,
      title: 'Affiliate & Product Revenue',
      description: 'Commission from personalized product recommendations',
      details: [
        'Skincare and beauty product referrals',
        'Supplement and wellness product sales',
        'Curated marketplace integration',
        'Brand partnership affiliate fees',
        'Genuine need-based recommendations',
        'Trust-maintaining product curation'
      ],
      pricing: 'Commission-based'
    },
    {
      icon: Building,
      title: 'B2B Sales & Licensing',
      description: 'Enterprise sales, leasing, and white-label solutions',
      details: [
        'Direct hardware sales to businesses',
        'Annual service fees for enterprise units',
        'White-labeling and co-branding',
        'REFLEKT Space installation contracts',
        'Custom business solutions',
        'Innovation licensing partnerships'
      ],
      pricing: 'Custom quotes'
    }
  ];

  const partnerships = [
    {
      category: 'Beauty & Skincare',
      description: 'Co-branded experiences with cosmetics and skincare companies',
      examples: ['Product recommendations integration', 'AR try-on experiences', 'Exclusive content partnerships']
    },
    {
      category: 'Wellness Platforms',
      description: 'Integration with meditation, fitness, and music services',
      examples: ['Headspace/Calm meditation content', 'Fitbit/WHOOP data integration', 'Spotify wellness playlists']
    },
    {
      category: 'Smart Home Ecosystem',
      description: 'Seamless integration with existing smart home devices',
      examples: ['Apple HomeKit integration', 'Google Assistant compatibility', 'Amazon Alexa routines']
    },
    {
      category: 'Corporate Wellness',
      description: 'Employee well-being and hospitality partnerships',
      examples: ['Corporate wellness rooms', 'Hotel wellness suites', 'Revenue-sharing models']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
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
            <TrendingUp className="w-4 h-4 mr-2" />
            Business Strategy & Growth
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Path to Market Leadership
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our strategic approach to building REFLEKT from niche innovation to mainstream wellness solution through phased expansion and strategic partnerships.
          </p>
        </motion.div>

        {/* Go-to-Market Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Go-to-Market Strategy
          </h3>

          <div className="space-y-8">
            {gtmPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${phase.gradient} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{phase.phase}</div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{phase.title}</h4>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="w-full lg:w-80">
                    <div className={`aspect-square rounded-3xl bg-gradient-to-br ${phase.gradient} p-8 flex items-center justify-center`}>
                      <Icon className="h-24 w-24 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center mb-4">
            Revenue Model
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Diversified revenue streams combining one-time sales, recurring subscriptions, and B2B contracts for sustainable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={stream.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className="h-full rounded-3xl p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/70 dark:hover:border-slate-600/70 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {stream.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {stream.description}
                    </p>

                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-6">
                      {stream.pricing}
                    </div>

                    <div className="space-y-2">
                      {stream.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnerships
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Building the REFLEKT Ecosystem
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Strategic alliances that enhance content, expand distribution, and build credibility across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {partnership.category}
                </h4>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  {partnership.description}
                </p>
                <div className="space-y-2">
                  {partnership.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-3 h-3 text-blue-300 mt-1 flex-shrink-0" />
                      <span className="text-blue-100 text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Business Plan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8"
              >
                <Globe className="mr-2 h-5 w-5" />
                Partner With REFLEKT
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}