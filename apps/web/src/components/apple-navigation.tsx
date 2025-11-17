'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import {
  MenuBar,
  MenuBarContent,
  MenuBarBrand,
  MenuBarSection,
  MenuItem,
  MenuBarDivider,
} from '@reflekt/apple-ui';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Globe, X, Home, Info, Briefcase, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function AppleNavigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/', icon: Home },
    { name: t('about'), href: '/about', icon: Info },
    { name: t('services'), href: '/services', icon: Briefcase },
    { name: t('stories'), href: '/stories', icon: BookOpen },
    { name: t('contact'), href: '/contact', icon: Mail },
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
    <>
      {/* Desktop Navigation with Apple UI MenuBar */}
      <MenuBar
        material="glass"
        position="fixed"
        blurOnScroll={true}
        showBorder={true}
        className="hidden md:block"
        style={{ '--menubar-height': '108px' } as React.CSSProperties}
      >
        <MenuBarContent style={{ height: '80px' }}>
          {/* Brand/Logo */}
          <MenuBarBrand>
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-32 h-32"
              >
                <Image
                  src="/images/products/reflekt logo - transparent.png"
                  alt="REFLEKT"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </MenuBarBrand>

          {/* Navigation Items */}
          <MenuBarSection align="center">
            {navigation.map((item) => {
              return (
                <Link key={item.href} href={item.href as any}>
                  <MenuItem
                    active={isActive(item.href)}
                  >
                    {item.name}
                  </MenuItem>
                </Link>
              );
            })}
          </MenuBarSection>

          {/* Actions */}
          <MenuBarSection align="end">
            <Link href={pathname} locale={toggleLocale()}>
              <MenuItem icon={<Globe className="w-4 h-4" />}>
                {locale === 'en' ? '日本語' : 'English'}
              </MenuItem>
            </Link>

            <MenuBarDivider />

            <Link href="/contact">
              <MenuItem
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                {t('contact')}
              </MenuItem>
            </Link>
          </MenuBarSection>
        </MenuBarContent>
      </MenuBar>

      {/* Mobile Navigation - keep existing glass implementation */}
      <div className="md:hidden fixed top-0 z-50 w-full">
        <div className="glass-mobile-bar">
          <div className="flex items-center justify-between px-4" style={{ height: '80px' }}>
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <Image
                  src="/images/products/reflekt logo - transparent.png"
                  alt="REFLEKT"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                REFLEKT
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-700 dark:text-gray-300">
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
                className="w-80 glass-sheet border-white/10"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-6 mt-6"
                >
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href as any}
                            className={`flex items-center gap-3 text-base font-medium transition-all duration-300 px-4 py-3 rounded-xl ${
                              isActive(item.href)
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400'
                                : 'hover:bg-black/5 dark:hover:bg-white/10'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <Icon className="w-5 h-5" />
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start glass-button"
                      asChild
                    >
                      <Link href={pathname} locale={toggleLocale()}>
                        <Globe className="h-4 w-4 mr-2" />
                        {locale === 'en' ? '日本語' : 'English'}
                      </Link>
                    </Button>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      asChild
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        {t('contact')}
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Custom styles for mobile glass effect */}
      <style jsx global>{`
        .glass-mobile-bar {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(20px) saturate(160%) brightness(110%);
          -webkit-backdrop-filter: blur(20px) saturate(160%) brightness(110%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (prefers-color-scheme: dark) {
          .glass-mobile-bar {
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(20px) saturate(140%) brightness(90%);
            -webkit-backdrop-filter: blur(20px) saturate(140%) brightness(90%);
            border-bottom-color: rgba(255, 255, 255, 0.08);
          }
        }

        .glass-sheet {
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(100px) saturate(200%) !important;
          -webkit-backdrop-filter: blur(100px) saturate(200%) !important;
        }

        @media (prefers-color-scheme: dark) {
          .glass-sheet {
            background: rgba(28, 28, 30, 0.9) !important;
            backdrop-filter: blur(100px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(100px) saturate(180%) !important;
          }
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        @media (prefers-color-scheme: dark) {
          .glass-button {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
          }

          .glass-button:hover {
            background: rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </>
  );
}