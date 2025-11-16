'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.enum(['waitlist', 'beta-program', 'business-partnership', 'wellness-center', 'media-inquiry', 'other']),
  budget: z.enum(['personal-use', 'small-business', 'enterprise', 'hospitality', 'not-sure']),
  timeline: z.enum(['immediate', '3-months', '6-months', '12-months', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  newsletter: z.boolean().default(false),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: 'other',
      budget: 'not-sure',
      timeline: 'flexible',
      message: '',
      newsletter: false,
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 py-8"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 py-8"
      >
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
        <h3 className="text-xl font-semibold">Something Went Wrong</h3>
        <p className="text-muted-foreground">
          We're sorry, but there was an error sending your message. Please try again or contact us directly.
        </p>
        <Button
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
        >
          Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="group">
                    <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Name *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your full name"
                          className="pl-4 h-12 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80"
                          {...field}
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileFocus={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="group">
                    <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="pl-4 h-12 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80"
                          {...field}
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileFocus={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="waitlist">Join Beta Waitlist</SelectItem>
                      <SelectItem value="beta-program">Beta Testing Program</SelectItem>
                      <SelectItem value="business-partnership">Business Partnership</SelectItem>
                      <SelectItem value="wellness-center">Wellness Center Installation</SelectItem>
                      <SelectItem value="media-inquiry">Media & Press Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interest Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal-use">Personal Home Use</SelectItem>
                      <SelectItem value="small-business">Small Wellness Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise/Corporate</SelectItem>
                      <SelectItem value="hospitality">Hotel/Spa/Resort</SelectItem>
                      <SelectItem value="not-sure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate Interest</SelectItem>
                      <SelectItem value="3-months">Next 3 months</SelectItem>
                      <SelectItem value="6-months">Next 6 months</SelectItem>
                      <SelectItem value="12-months">Next 12 months</SelectItem>
                      <SelectItem value="flexible">Flexible / Future Planning</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your interest in REFLEKT. Are you looking to enhance your morning routine, explore wellness technology, or considering installation for your business? Share your vision and any specific questions..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Help us understand how REFLEKT can fit into your wellness journey or business goals.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Join the REFLEKT wellness community
                  </FormLabel>
                  <FormDescription className="text-xs">
                    Get early access updates, mindfulness tips, and smart mirror technology insights.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                size="lg"
                className="w-full group h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    Send Message
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                privacy policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                terms of service
              </a>.
            </p>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}