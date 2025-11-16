'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations('navigation');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@reflekt.com', icon: Mail },
  ];

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('stories'), href: '/stories' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">REFLEKT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovative solutions for modern challenges through technology and creativity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as any}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                App Development
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Consulting
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Design
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@reflekt.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} REFLEKT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}