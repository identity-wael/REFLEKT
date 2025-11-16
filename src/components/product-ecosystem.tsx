'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Monitor, Smartphone, Home, ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export function ProductEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      icon: Monitor,
      name: 'REFLEKT Mirror',
      category: 'Flagship Product',
      description: 'The premium smart mirror for your home - your mindful morning companion that transforms daily routines into wellness rituals.',
      features: [
        'AI-powered mood sensing',
        'Calm & Active modes',
        'AR beauty & style guidance',
        'Voice & touch interaction',
        'Smart home integration'
      ],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-600/10 to-purple-600/10',
      availability: 'Beta Program',
      cta: 'Join Waitlist',
      images: [
        '/images/products/REFLEKT Vanity Mirror in a Compact Bathroom.png',
        '/images/products/REFLEKT Vanity Mirror in Active Mode (Compact Bathroom).png'
      ]
    },
    {
      icon: Smartphone,
      name: 'REFLEKT App',
      category: 'Companion Experience',
      description: 'Your portable wellness companion that extends REFLEKT beyond the mirror. Experience mood tracking, guided meditations, and emotion-aware daily briefings wherever you are.',
      features: [
        'Daily mood check-ins with emotional trends tracking',
        'Guided meditations and mindfulness exercises',
        'Emotion-aware daily briefings tailored to your mood',
        'Seamless mirror synchronization for consistent experiences',
        'Integration with Headspace, Calm, and Spotify',
        'Freemium model with premium wellness content',
        'On-boarding tool for new REFLEKT users'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-600/10 to-teal-600/10',
      availability: 'Coming Soon',
      cta: 'Early Access',
      images: [
        '/images/products/mobile app image.png'
      ]
    },
    {
      icon: Home,
      name: 'REFLEKT Space',
      category: 'Ambient Installation',
      description: 'A dedicated wellness pod or room installation that creates an immersive multi-sensory relaxation experience. Perfect for corporate offices, airports, spas, and luxury venues.',
      features: [
        'Immersive multi-sensory wellness environment',
        'Dynamic ambient lighting and aromatherapy diffusion',
        'Contactless motion sensor and voice activation',
        'Guided meditation and breathing exercises',
        'Corporate wellness booths for employee well-being',
        'Airport and lounge relaxation installations',
        'Custom B2B solutions with service contracts',
        'Personal mini-spa experience for homes'
      ],
      gradient: 'from-violet-600 to-pink-600',
      bgGradient: 'from-violet-600/10 to-pink-600/10',
      availability: 'Enterprise',
      cta: 'Partner With Us',
      images: [
        '/images/products/ REFLEKT Space - An Ambient Wellness Installation in a Luxury Hotel.png'
      ]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
      />

      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" />
            Complete Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-white">
            Three Ways to Experience REFLEKT
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-light">
            From personal wellness mirrors to enterprise installations, discover how REFLEKT adapts to every lifestyle and environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
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
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                <Card className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/70 dark:hover:border-slate-600/70 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <CardHeader className="pb-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${product.bgGradient} text-slate-700 dark:text-slate-300`}>
                        {product.availability}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} />
                    </div>

                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Product Images */}
                    {product.images && product.images.length > 0 && (
                      <div className="mb-8">
                        {product.images.length === 1 ? (
                          <div className="relative overflow-hidden rounded-2xl">
                            <Image
                              src={product.images[0]}
                              alt={`${product.name} installation example`}
                              width={400}
                              height={300}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-3">
                            {product.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative overflow-hidden rounded-xl">
                                <Image
                                  src={image}
                                  alt={`${product.name} - View ${imgIndex + 1}`}
                                  width={200}
                                  height={150}
                                  className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                        >
                          <Sparkles className="w-4 h-4 mr-3 text-blue-500" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg text-white border-0 group`}
                        size="lg"
                      >
                        {product.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Hover Border Effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${product.gradient} rounded-b-3xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20 space-y-8"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-200/20 dark:border-blue-800/20">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Transform Your Daily Routine?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of early adopters who are already experiencing the future of mindful technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="px-8">
                  Download App Preview
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}