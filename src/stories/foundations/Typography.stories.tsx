import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

interface TypeSampleProps {
  name: string;
  className: string;
  size: string;
  lineHeight: string;
  sample?: string;
}

const TypeSample: React.FC<TypeSampleProps> = ({
  name,
  className,
  size,
  lineHeight,
  sample = 'The quick brown fox jumps over the lazy dog',
}) => (
  <div className="py-4 border-b border-border last:border-b-0">
    <div className="flex items-baseline gap-4 mb-2">
      <span className="text-sm font-medium text-primary w-24">{name}</span>
      <span className="text-xs text-muted font-mono">
        {size} / {lineHeight}
      </span>
    </div>
    <p className={`text-foreground ${className}`}>{sample}</p>
  </div>
);

const TypographyPage = () => {
  const fontSizes: TypeSampleProps[] = [
    { name: 'text-xxs', className: 'text-xxs', size: '10px', lineHeight: '1.4' },
    { name: 'text-xs', className: 'text-xs', size: '12px', lineHeight: '1.4' },
    { name: 'text-sm', className: 'text-sm', size: '14px', lineHeight: '1.4' },
    { name: 'text-base', className: 'text-base', size: '16px', lineHeight: '1.4' },
    { name: 'text-lg', className: 'text-lg', size: '18px', lineHeight: '1.4' },
    { name: 'text-xl', className: 'text-xl', size: '20px', lineHeight: '1.4' },
    { name: 'text-2xl', className: 'text-2xl', size: '24px', lineHeight: '1.4' },
  ];

  const fontWeights = [
    { name: 'Regular', className: 'font-normal', weight: '400' },
    { name: 'Medium', className: 'font-medium', weight: '500' },
    { name: 'Semibold', className: 'font-semibold', weight: '600' },
    { name: 'Bold', className: 'font-bold', weight: '700' },
  ];

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Typography</h1>
        <p className="text-muted mb-8">
          GitLaw uses DM Sans for UI text and DM Serif Text for display headings.
        </p>

        {/* Font Families */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Font Families
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-gitlaw-m border border-border">
              <p className="text-xs text-muted mb-2 font-mono">font-sans</p>
              <p className="text-2xl font-sans text-foreground mb-2">DM Sans</p>
              <p className="text-sm text-muted font-sans">
                Primary font for all UI elements, body text, and labels.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-sans text-lg">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-gitlaw-m border border-border">
              <p className="text-xs text-muted mb-2 font-mono">font-serif</p>
              <p className="text-2xl font-serif text-foreground mb-2">DM Serif Text</p>
              <p className="text-sm text-muted font-sans">
                Display font for marketing headings and special emphasis.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-serif text-lg">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Font Sizes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Font Sizes
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            {fontSizes.map((size) => (
              <TypeSample key={size.name} {...size} />
            ))}
          </div>
        </section>

        {/* Font Weights */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Font Weights
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            {fontWeights.map((weight) => (
              <div key={weight.name} className="py-4 border-b border-border last:border-b-0">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-medium text-primary w-24">{weight.name}</span>
                  <span className="text-xs text-muted font-mono">{weight.weight}</span>
                </div>
                <p className={`text-xl text-foreground ${weight.className}`}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Text Colors
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-muted w-40">text-foreground</span>
                <span className="text-base text-foreground">Primary text for headings and body</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-muted w-40">text-muted</span>
                <span className="text-base text-muted">Secondary text for descriptions</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-muted w-40">text-primary</span>
                <span className="text-base text-primary">Brand colored text for emphasis</span>
              </div>
              <div className="flex items-center gap-4 bg-primary p-2 rounded">
                <span className="text-sm font-mono text-negative w-40">text-negative</span>
                <span className="text-base text-negative">Text on dark backgrounds</span>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Usage Examples
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border space-y-6">
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Page heading</p>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Section heading</p>
              <h2 className="text-xl font-semibold text-foreground">Recent Documents</h2>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Card title</p>
              <h3 className="text-lg font-semibold text-foreground">Service Contract Template</h3>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Body text</p>
              <p className="text-base text-foreground">
                This document outlines the terms and conditions for service agreements between parties.
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Description / Caption</p>
              <p className="text-sm text-muted">
                Last modified 2 days ago by John Doe
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1 font-mono">Small label</p>
              <p className="text-xs text-muted">8 files</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const AllTypography: Story = {
  render: () => <TypographyPage />,
};
