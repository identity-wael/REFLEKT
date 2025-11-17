'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@reflekt.com',
      description: 'Send us an email anytime',
      href: 'mailto:hello@reflekt.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'San Francisco, CA',
      description: '123 Innovation Drive, Suite 100',
      href: 'https://maps.google.com',
    },
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'General Inquiries',
      description: 'Questions about our services, pricing, or how we can help your business.',
      recommended: 'Best for new clients',
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Need help with an existing project or technical assistance.',
      recommended: 'For existing clients',
    },
    {
      icon: Globe,
      title: 'Partnership',
      description: 'Interested in partnering with us or exploring collaboration opportunities.',
      recommended: 'For businesses',
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Most web projects take 4-12 weeks, while mobile apps typically require 6-16 weeks.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance after project completion.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Vercel.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate seamlessly with your existing team or work independently based on your preferences.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <a
                        href={info.href}
                        className="text-lg font-semibold hover:text-primary transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                      <CardDescription>{info.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Choose the option that best describes your inquiry for faster assistance.
                </p>
              </div>

              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={option.title} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                          <div className="text-sm text-primary font-medium mt-1">
                            {option.recommended}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {option.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Business Hours</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here when you need us. Here are our standard business hours and response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-1 text-sm">
                  <div>Monday - Friday</div>
                  <div className="font-semibold">8:00 AM - 6:00 PM PST</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Email Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-1 text-sm">
                  <div>Typical Response</div>
                  <div className="font-semibold">Within 4 hours</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-1 text-sm">
                  <div>Available</div>
                  <div className="font-semibold">Mon-Fri 9AM-5PM</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Headphones className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Emergency Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-1 text-sm">
                  <div>Critical Issues</div>
                  <div className="font-semibold">24/7 for clients</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Feel free to contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}