import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ArrowRight, Zap, Users, Target, Globe } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { ProblemOpportunitySection } from '@/components/problem-opportunity-section';
import { FeaturesSection } from '@/components/features-section';
import { ProductEcosystem } from '@/components/product-ecosystem';
import { TargetCustomersSection } from '@/components/target-customers-section';
import { DementiaSupportSection } from '@/components/dementia-support-section';
import { BusinessStrategySection } from '@/components/business-strategy-section';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemOpportunitySection />
      <FeaturesSection />
      <ProductEcosystem />
      <TargetCustomersSection />
      <DementiaSupportSection />
      <BusinessStrategySection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}