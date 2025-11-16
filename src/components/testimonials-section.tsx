'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Building2, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const testimonials = [
    {
      name: 'Emily Watson',
      role: 'Wellness Coach & Mindfulness Practitioner',
      company: 'Calm Spaces Studio',
      content: 'REFLEKT has revolutionized my morning routine. The Calm Mode helps me start each day centered, and the mood sensing actually helps me understand my emotional patterns better.',
      rating: 5,
      avatar: 'EW',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
    },
    {
      name: 'Marcus Thompson',
      role: 'Executive & Entrepreneur',
      company: 'Thompson Ventures',
      content: 'As a busy CEO, mornings used to be chaotic. REFLEKT\'s Active Mode gives me the perfect briefing while keeping me grounded. It\'s like having a personal assistant and wellness coach in one.',
      rating: 5,
      avatar: 'MT',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      name: 'Sophia Chen',
      role: 'Beauty Influencer & Style Consultant',
      company: '@SophiaStyle • 2.1M followers',
      content: 'The AR beauty features are incredible! REFLEKT suggests looks that match my mood and schedule. My followers love seeing how I use it for my morning routine - it\'s the future of beauty tech.',
      rating: 5,
      avatar: 'SC',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
      />

      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Mindful Mornings Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Early Adopters Love REFLEKT
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
            Discover how wellness enthusiasts, busy professionals, and style creators are transforming their daily routines with mindful mirror technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

              <Card className="relative h-full bg-slate-800/60 backdrop-blur-xl border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 shadow-2xl">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Quote className={`h-6 w-6 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`} />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg mb-8 leading-relaxed text-slate-300 font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm mr-4`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400 flex items-center">
                        <Building2 className="w-3 h-3 mr-1" />
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-slate-500">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-b-3xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-slate-700/50"
        >
          {[
            { label: "Morning Routine Satisfaction", value: "98%" },
            { label: "Beta Users", value: "1,500+" },
            { label: "Daily Mindful Moments", value: "12k+" },
            { label: "Wellness Partners", value: "25+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}