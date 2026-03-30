'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HardDrive, Share2, Shield, RefreshCw, Users, Smartphone } from 'lucide-react';

const featureIcons = {
  storage: HardDrive,
  sharing: Share2,
  security: Shield,
  sync: RefreshCw,
  collab: Users,
  mobile: Smartphone,
};

export default function Features() {
  const t = useTranslations();

  const features = [
    { key: 'storage', icon: 'storage' },
    { key: 'sharing', icon: 'sharing' },
    { key: 'security', icon: 'security' },
    { key: 'sync', icon: 'sync' },
    { key: 'collab', icon: 'collab' },
    { key: 'mobile', icon: 'mobile' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons];

            return (
              <motion.div
                key={feature.key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
