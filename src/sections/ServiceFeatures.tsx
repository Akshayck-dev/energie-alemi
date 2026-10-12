import React from 'react';
import FeatureCard from '../components/ui/FeatureCard';

export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
  rechenbeispiel?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ServiceFeatures({ features, rechenbeispiel, children }: ServiceFeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0a1628] rounded-t-[3rem] -mt-8 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6">
        {rechenbeispiel && (
          <div className="max-w-4xl mx-auto mb-14 md:mb-16">
            {rechenbeispiel}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
