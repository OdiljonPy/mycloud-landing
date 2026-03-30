import Navigation from '@/src/components/Navigation';
import Hero from '@/src/components/Hero';
import Features from '@/src/components/Features';
import HowItWorks from '@/src/components/HowItWorks';
import Pricing from '@/src/components/Pricing';
import Permissions from '@/src/components/Permissions';
import ContactForm from '@/src/components/ContactForm';
import Footer from '@/src/components/Footer';

export default async function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Permissions />
      <ContactForm />
      <Footer />
    </div>
  );
}
