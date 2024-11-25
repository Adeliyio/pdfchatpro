import React from 'react';
import { PricingCard } from '../components/pricing/PricingCard';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out our services',
    features: [
      { text: 'Upload up to 3 PDFs', included: true },
      { text: 'Basic chat functionality', included: true },
      { text: 'Limited to 50 questions/month', included: true },
      { text: 'Advanced AI features', included: false },
      { text: 'Team collaboration', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$19.99',
    description: 'Ideal for individuals and professionals',
    features: [
      { text: 'Unlimited PDF uploads', included: true },
      { text: 'Advanced chat functionality', included: true },
      { text: 'Unlimited questions', included: true },
      { text: 'Advanced AI features', included: true },
      { text: 'Priority support', included: true },
    ],
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$49.99',
    description: 'Perfect for small teams and businesses',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom AI training', included: true },
      { text: 'Dedicated support', included: true },
    ],
  },
];

export function Pricing() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}