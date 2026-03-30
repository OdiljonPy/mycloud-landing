'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function HowItWorks() {
  const t = useTranslations();

  const steps = [
    { step: 'step1', number: 1 },
    { step: 'step2', number: 2 },
    { step: 'step3', number: 3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent -z-10" />

          {steps.map((item, idx) => {
            return (
              <motion.div key={item.step} variants={itemVariants} className="relative">
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold cursor-pointer"
                >
                  {item.number}
                </motion.div>

                {/* Step Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(`howItWorks.${item.step}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`howItWorks.${item.step}.description`)}
                  </p>
                </div>

                {/* Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-6"
                >
                  <div className="w-8 h-8 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
