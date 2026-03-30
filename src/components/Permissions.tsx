'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Eye, Edit2, Lock, Clock, BarChart3 } from 'lucide-react';

const permissionIcons = {
  'View-only access': Eye,
  'Edit permissions': Edit2,
  'Download controls': Lock,
  'Expiration dates': Clock,
  'Password protection': Shield,
  'Activity tracking': BarChart3,
};

export default function Permissions() {
  const t = useTranslations();
  const rawFeatures = t.raw('permissions.features');
  const permissionsData = Array.isArray(rawFeatures) ? (rawFeatures as string[]) : [];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="permissions" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {t('permissions.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('permissions.subtitle')}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              {t('permissions.description')}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {permissionsData.map((feature, idx) => {
                const Icon = permissionIcons[feature as keyof typeof permissionIcons] || Shield;

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium pt-1">
                      {feature}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-primary/5 rounded-3xl blur-2xl -z-10" />
            
            <div className="relative bg-linear-to-br from-primary/10 to-secondary/5 border border-primary/20 rounded-3xl p-8 space-y-6">
              {/* Mock Permission Card */}
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-foreground">document.pdf</h4>
                    <p className="text-sm text-muted-foreground">Shared with John</p>
                  </div>
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-foreground">View-only access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Expires in 7 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Password protected</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Last accessed 2 hours ago
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold text-sm"
              >
                100% Secure
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
