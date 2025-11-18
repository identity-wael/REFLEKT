'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('stories'), href: '/stories' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    return newLocale;
  };

  return (
    <motion.header
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.5)',
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className="fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300"
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative w-16 h-16"
          >
            <Image
              src="/images/products/reflekt logo - transparent.png"
              alt="REFLEKT"
              width={64}
              height={64}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <Link
                href={item.href as any}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-300 group ${
                  isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-white/80'
                }`}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ width: 0 }}
                  animate={{ width: isActive(item.href) ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <Link href={pathname} locale={toggleLocale()}>
                <Globe className="h-4 w-4 mr-2" />
                {locale === 'en' ? '日本語' : 'English'}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">{t('contact')}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'menu'}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-slate-900/95 backdrop-blur-xl border-white/10"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-6 mt-6"
              >
                <div className="flex items-center justify-between">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/products/reflekt logo - transparent.png"
                      alt="REFLEKT"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href as any}
                        className={`text-lg font-medium transition-all duration-300 hover:text-blue-300 block py-2 ${
                          isActive(item.href)
                            ? 'text-blue-400 bg-blue-500/10 px-4 rounded-lg'
                            : 'text-white/80'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="border-t border-white/10 pt-6 space-y-4"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-white/5 border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={pathname} locale={toggleLocale()}>
                      <Globe className="h-4 w-4 mr-2" />
                      {locale === 'en' ? '日本語' : 'English'}
                    </Link>
                  </Button>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {t('contact')}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}