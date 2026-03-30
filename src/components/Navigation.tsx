'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#features', label: t('nav.features') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#permissions', label: t('nav.permissions') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="font-bold text-lg text-foreground">Cloud</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t('nav.cta')}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t('nav.cta')}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
