import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

interface SpacingSampleProps {
  name: string;
  value: string;
  className: string;
}

const SpacingSample: React.FC<SpacingSampleProps> = ({ name, value, className }) => (
  <div className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
    <div className="w-32">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted ml-2 font-mono">{value}</span>
    </div>
    <div className="flex-1">
      <div className={`bg-primary h-4 rounded ${className}`} />
    </div>
  </div>
);

interface RadiusSampleProps {
  name: string;
  value: string;
  className: string;
}

const RadiusSample: React.FC<RadiusSampleProps> = ({ name, value, className }) => (
  <div className="flex flex-col items-center">
    <div className={`w-20 h-20 bg-primary ${className}`} />
    <p className="text-sm font-medium text-foreground mt-3">{name}</p>
    <p className="text-xs text-muted font-mono">{value}</p>
  </div>
);

const SpacingPage = () => {
  const gitlawSpacing: SpacingSampleProps[] = [
    { name: 'gitlaw-xxs', value: '1px', className: 'w-[1px]' },
    { name: 'gitlaw-xs', value: '2px', className: 'w-[2px]' },
    { name: 'gitlaw-s', value: '4px', className: 'w-[4px]' },
    { name: 'gitlaw-m', value: '8px', className: 'w-[8px]' },
    { name: 'gitlaw-l', value: '12px', className: 'w-[12px]' },
    { name: 'gitlaw-xl', value: '16px', className: 'w-[16px]' },
    { name: 'gitlaw-2xl', value: '24px', className: 'w-[24px]' },
    { name: 'gitlaw-3xl', value: '32px', className: 'w-[32px]' },
    { name: 'gitlaw-4xl', value: '48px', className: 'w-[48px]' },
  ];

  const tailwindSpacing: SpacingSampleProps[] = [
    { name: '0', value: '0px', className: 'w-0' },
    { name: '0.5', value: '2px', className: 'w-0.5' },
    { name: '1', value: '4px', className: 'w-1' },
    { name: '1.5', value: '6px', className: 'w-1.5' },
    { name: '2', value: '8px', className: 'w-2' },
    { name: '2.5', value: '10px', className: 'w-2.5' },
    { name: '3', value: '12px', className: 'w-3' },
    { name: '4', value: '16px', className: 'w-4' },
    { name: '5', value: '20px', className: 'w-5' },
    { name: '6', value: '24px', className: 'w-6' },
    { name: '8', value: '32px', className: 'w-8' },
    { name: '10', value: '40px', className: 'w-10' },
    { name: '12', value: '48px', className: 'w-12' },
    { name: '16', value: '64px', className: 'w-16' },
  ];

  const borderRadii: RadiusSampleProps[] = [
    { name: 'gitlaw-s', value: '4px', className: 'rounded-gitlaw-s' },
    { name: 'gitlaw-m', value: '8px', className: 'rounded-gitlaw-m' },
    { name: 'gitlaw-full', value: '1000px', className: 'rounded-gitlaw-full' },
  ];

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Spacing & Radius</h1>
        <p className="text-muted mb-8">
          Consistent spacing and border radius values for the GitLaw design system.
        </p>

        {/* GitLaw Custom Spacing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            GitLaw Spacing Scale
          </h2>
          <p className="text-sm text-muted mb-4">
            Custom spacing tokens defined for GitLaw. Use these for component-specific spacing.
          </p>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            {gitlawSpacing.map((space) => (
              <SpacingSample key={space.name} {...space} />
            ))}
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-gitlaw-m">
            <p className="text-sm text-foreground">
              <strong>Usage:</strong> <code className="text-primary font-mono">p-gitlaw-m</code>,{' '}
              <code className="text-primary font-mono">gap-gitlaw-l</code>,{' '}
              <code className="text-primary font-mono">m-gitlaw-xl</code>
            </p>
          </div>
        </section>

        {/* Tailwind Spacing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Tailwind Spacing Scale
          </h2>
          <p className="text-sm text-muted mb-4">
            Standard Tailwind spacing values. Use for general layout and component spacing.
          </p>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            {tailwindSpacing.map((space) => (
              <SpacingSample key={space.name} {...space} />
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Border Radius
          </h2>
          <p className="text-sm text-muted mb-4">
            Custom border radius values for GitLaw components.
          </p>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="flex gap-12 justify-center">
              {borderRadii.map((radius) => (
                <RadiusSample key={radius.name} {...radius} />
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-gitlaw-m">
            <p className="text-sm text-foreground">
              <strong>Usage:</strong>{' '}
              <code className="text-primary font-mono">rounded-gitlaw-s</code> for buttons,{' '}
              <code className="text-primary font-mono">rounded-gitlaw-m</code> for cards,{' '}
              <code className="text-primary font-mono">rounded-gitlaw-full</code> for avatars/pills
            </p>
          </div>
        </section>

        {/* Spacing Examples */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Usage Examples
          </h2>
          <div className="space-y-6">
            {/* Card Padding Example */}
            <div className="bg-card rounded-gitlaw-m border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <p className="text-xs text-muted font-mono mb-1">Card with p-6 (24px padding)</p>
              </div>
              <div className="p-6 bg-purple-50">
                <div className="bg-card p-4 rounded-gitlaw-m border border-primary border-dashed">
                  <p className="text-sm text-foreground">Content area</p>
                </div>
              </div>
            </div>

            {/* Gap Example */}
            <div className="bg-card rounded-gitlaw-m border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <p className="text-xs text-muted font-mono mb-1">Flex with gap-2 (8px gap)</p>
              </div>
              <div className="p-6">
                <div className="flex gap-2">
                  <div className="w-16 h-16 bg-primary rounded-gitlaw-m" />
                  <div className="w-16 h-16 bg-primary rounded-gitlaw-m" />
                  <div className="w-16 h-16 bg-primary rounded-gitlaw-m" />
                </div>
              </div>
            </div>

            {/* Margin Example */}
            <div className="bg-card rounded-gitlaw-m border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <p className="text-xs text-muted font-mono mb-1">Stack with space-y-4 (16px vertical spacing)</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-8 bg-primary rounded-gitlaw-m" />
                  <div className="h-8 bg-primary rounded-gitlaw-m" />
                  <div className="h-8 bg-primary rounded-gitlaw-m" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const AllSpacing: Story = {
  render: () => <SpacingPage />,
};
