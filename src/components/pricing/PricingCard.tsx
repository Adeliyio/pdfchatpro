import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features, highlighted }: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${
      highlighted 
        ? 'bg-primary text-white ring-4 ring-primary/30' 
        : 'bg-white'
    }`}>
      <h3 className={`text-2xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <p className={`mt-4 text-sm ${highlighted ? 'text-white/90' : 'text-gray-500'}`}>
        {description}
      </p>
      <p className={`mt-6 flex items-baseline gap-x-1 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        {price !== 'Custom' && <span className="text-sm font-semibold">/month</span>}
      </p>
      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`h-5 w-5 ${
              highlighted 
                ? 'text-white' 
                : feature.included ? 'text-primary' : 'text-gray-300'
            }`} />
            <span className={`text-sm ${
              highlighted 
                ? 'text-white' 
                : feature.included ? 'text-gray-700' : 'text-gray-300'
            }`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        className="mt-8 w-full"
      >
        Get started
      </Button>
    </div>
  );
}