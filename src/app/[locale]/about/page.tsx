import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Globe,
  ArrowRight,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const t = useTranslations('navigation');

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver. Passion drives excellence.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve shared goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in technology and business strategy.',
      image: '/team/alex.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      }
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Design',
      bio: 'Creative director who transforms complex ideas into beautiful, intuitive experiences.',
      image: '/team/sarah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack architect who builds scalable, performant solutions.',
      image: '/team/michael.jpg',
      social: {
        linkedin: '#',
        github: '#',
      }
    },
    {
      name: 'Emma Davis',
      role: 'Project Manager',
      bio: 'Ensures every project is delivered on time and exceeds expectations.',
      image: '/team/emma.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
  ];

  const milestones = [
    { year: '2020', title: 'Founded REFLEKT', description: 'Started with a vision to transform digital experiences' },
    { year: '2021', title: 'First Major Client', description: 'Delivered our first enterprise solution' },
    { year: '2022', title: '50+ Projects', description: 'Reached milestone of 50 successful projects' },
    { year: '2023', title: 'Global Expansion', description: 'Extended services to international markets' },
    { year: '2024', title: '100+ Clients', description: 'Built relationships with over 100 satisfied clients' },
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
              About REFLEKT
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of creators, thinkers, and innovators dedicated to transforming ideas into digital experiences that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses and individuals with innovative digital solutions that drive growth, enhance user experiences, and create meaningful connections in our increasingly digital world.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in creative technology solutions, known for our innovation, quality, and the transformative impact we have on our clients' success.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Globe className="h-24 w-24 mx-auto text-primary" />
                  <div className="text-2xl font-bold">Global Impact</div>
                  <div className="text-muted-foreground">Creating solutions that reach across continents</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring passion, expertise, and creativity to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {member.bio}
                    </CardDescription>
                    <div className="flex justify-center space-x-2">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <Card className="max-w-md mx-auto">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{milestone.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-shrink-0 mx-8">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground">
              We'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}