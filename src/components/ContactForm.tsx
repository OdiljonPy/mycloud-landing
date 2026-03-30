'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background border border-border rounded-2xl p-8 sm:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4 py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">
                {t('contact.success')}
              </h3>
              <p className="text-muted-foreground">
                We&apos;ll get back to you shortly!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.subject')}
                </label>
                <Input
                  {...register('subject')}
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                {errors.subject && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  {...register('message')}
                  placeholder="Tell us more..."
                  rows={6}
                  className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {isLoading ? t('contact.sending') : t('contact.send')}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
