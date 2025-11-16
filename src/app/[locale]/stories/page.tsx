import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StoriesPage() {
  const t = useTranslations('navigation');

  // Mock blog posts - in a real app, this would come from your CMS or MDX files
  const stories = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring the latest trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.',
      author: 'Alex Thompson',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Technology',
      tags: ['Web Development', 'AI', 'Trends'],
      image: '/stories/web-dev-future.jpg',
      featured: true,
    },
    {
      id: '2',
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'A comprehensive guide to structuring and scaling React applications for enterprise-level projects.',
      author: 'Sarah Kim',
      date: '2024-12-10',
      readTime: '8 min read',
      category: 'Development',
      tags: ['React', 'Best Practices', 'Scalability'],
      image: '/stories/react-scalability.jpg',
      featured: false,
    },
    {
      id: '3',
      title: 'The Art of User Experience: Design That Converts',
      excerpt: 'How thoughtful UX design can significantly impact conversion rates and user satisfaction.',
      author: 'Michael Chen',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Design',
      tags: ['UX', 'Design', 'Conversion'],
      image: '/stories/ux-design.jpg',
      featured: false,
    },
    {
      id: '4',
      title: 'Why TypeScript is Essential for Modern Development',
      excerpt: 'Understanding the benefits of TypeScript and how it improves code quality and developer productivity.',
      author: 'Emma Davis',
      date: '2024-11-28',
      readTime: '4 min read',
      category: 'Technology',
      tags: ['TypeScript', 'Development', 'Productivity'],
      image: '/stories/typescript-guide.jpg',
      featured: false,
    },
    {
      id: '5',
      title: 'Cloud Architecture: Designing for Scale and Reliability',
      excerpt: 'Best practices for designing cloud-native applications that can handle massive scale.',
      author: 'Alex Thompson',
      date: '2024-11-20',
      readTime: '7 min read',
      category: 'Cloud',
      tags: ['Cloud', 'Architecture', 'Scalability'],
      image: '/stories/cloud-architecture.jpg',
      featured: false,
    },
    {
      id: '6',
      title: 'The Psychology of Color in Digital Design',
      excerpt: 'How color choices influence user behavior and the psychology behind effective color schemes.',
      author: 'Sarah Kim',
      date: '2024-11-15',
      readTime: '5 min read',
      category: 'Design',
      tags: ['Design', 'Psychology', 'Color Theory'],
      image: '/stories/color-psychology.jpg',
      featured: false,
    },
  ];

  const categories = ['All', 'Technology', 'Development', 'Design', 'Cloud'];
  const featuredStory = stories.find(story => story.featured);
  const regularStories = stories.filter(story => !story.featured);

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
              Stories & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughts, insights, and stories from our team about technology, design, and the future of digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">Featured</Badge>
                        <Badge variant="outline">{featuredStory.category}</Badge>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                        {featuredStory.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {featuredStory.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredStory.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredStory.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredStory.readTime}</span>
                        </div>
                      </div>
                      <Button asChild className="group w-fit">
                        <Link href="/stories">
                          Read Full Story
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-10 bg-muted/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <Link href="/stories">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary/30">
                        {story.category.toUpperCase()}
                      </div>
                    </div>
                    <CardHeader className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{story.category}</Badge>
                        <div className="flex flex-wrap gap-1">
                          {story.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {story.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {story.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{story.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{story.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(story.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our newsletter to get the latest insights, tutorials, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}