import React from 'react';
import type { Story, StoryDefault } from "@ladle/react";

export default { title: "Foundations/Colors", meta: { layout: "fullscreen" } } satisfies StoryDefault;

interface ColorSwatchProps {
  name: string;
  value: string;
  className: string;
  textDark?: boolean;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, className, textDark = false }) => (
  <div className="flex flex-col">
    <div
      className={`w-full h-16 rounded-gitlaw-m border border-border ${className}`}
    />
    <p className={`text-sm font-medium mt-2 ${textDark ? 'text-foreground' : 'text-foreground'}`}>
      {name}
    </p>
    <p className="text-xs text-subtle font-mono">{value}</p>
  </div>
);

interface TextColorSwatchProps {
  name: string;
  value: string;
  textClassName: string;
  bgClassName?: string;
}

const TextColorSwatch: React.FC<TextColorSwatchProps> = ({ name, value, textClassName: _textClassName, bgClassName = 'bg-card' }) => (
  <div className="flex flex-col">
    <div
      className={`w-full h-16 rounded-gitlaw-m border border-border ${bgClassName} flex items-center justify-center`}
    >
      <span className="text-lg font-semibold" style={{ color: value }}>Aa</span>
    </div>
    <p className="text-sm font-medium mt-2 text-foreground">
      {name}
    </p>
    <p className="text-xs text-subtle font-mono">{value}</p>
  </div>
);

interface ColorGroupProps {
  title: string;
  colors: ColorSwatchProps[];
}

const ColorGroup: React.FC<ColorGroupProps> = ({ title, colors }) => (
  <div className="mb-10">
    <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </div>
);

const ColorsPage = () => {
  const semanticColors: ColorGroupProps[] = [
    {
      title: 'Brand',
      colors: [
        { name: 'Primary', value: '#5E49D6', className: 'bg-primary' },
        { name: 'Primary Light', value: '#EBE7FF', className: 'bg-primary-light' },
        { name: 'Primary Hover', value: '#6F5EEC', className: 'bg-primary-hover' },
        { name: 'Secondary', value: '#EBE7FF', className: 'bg-secondary' },
        { name: 'Secondary Hover', value: '#E2DDFF', className: 'bg-secondary-hover' },
      ],
    },
    {
      title: 'Status',
      colors: [
        { name: 'Destructive', value: '#E11D48', className: 'bg-destructive' },
        { name: 'Alert', value: '#F97316', className: 'bg-alert' },
        { name: 'Positive', value: '#15803D', className: 'bg-positive' },
      ],
    },
    {
      title: 'Icon',
      colors: [
        { name: 'Primary', value: '#5E49D6', className: 'bg-icon-primary' },
        { name: 'Secondary', value: '#989898', className: 'bg-icon-secondary' },
        { name: 'Disabled', value: '#CFC8F3', className: 'bg-icon-disabled' },
        { name: 'Negative', value: '#F7F6FF', className: 'bg-icon-negative' },
        { name: 'Black', value: '#1B1B1F', className: 'bg-icon-black' },
      ],
    },
    {
      title: 'Backgrounds',
      colors: [
        { name: 'Page', value: '#F7F6FF', className: 'bg-page-background' },
        { name: 'Card', value: '#FFFFFF', className: 'bg-card' },
        { name: 'Sidebar', value: '#F3F1FF', className: 'bg-sidebar-background' },
        { name: 'Sidebar Hover', value: '#EBE7FF', className: 'bg-sidebar-hover' },
        { name: 'Muted', value: '#F0F0F5', className: 'bg-muted' },
      ],
    },
    {
      title: 'Input',
      colors: [
        { name: 'Default', value: '#DFFBE3', className: 'bg-input' },
        { name: 'Bright', value: '#FFFFFF', className: 'bg-input-bright' },
        { name: 'Border', value: '#DCE3E8', className: 'bg-input-border' },
        { name: 'Disabled', value: '#F1F5F8', className: 'bg-input-disabled' },
      ],
    },
    {
      title: 'Border',
      colors: [
        { name: 'Default', value: '#E2DDFF', className: 'bg-border' },
        { name: 'Sidebar', value: '#DCE3E8', className: 'bg-sidebar-border' },
        { name: 'Active', value: '#5E49D6', className: 'bg-active-border' },
      ],
    },
    {
      title: 'Switch',
      colors: [
        { name: 'Active', value: '#5E49D6', className: 'bg-switch-active' },
        { name: 'Inactive', value: '#CFC8F3', className: 'bg-switch-inactive' },
        { name: 'Active Thumb', value: '#FFFFFF', className: 'bg-switch-active-thumb' },
      ],
    },
  ];

  const primitiveColors: ColorGroupProps[] = [
    {
      title: 'Purple',
      colors: [
        { name: '50', value: '#F7F6FF', className: 'bg-purple-50' },
        { name: '65', value: '#F3F1FF', className: 'bg-purple-65' },
        { name: '100', value: '#EBE7FF', className: 'bg-purple-100' },
        { name: '200', value: '#E2DDFF', className: 'bg-purple-200' },
        { name: '300', value: '#CFC8F3', className: 'bg-purple-300' },
        { name: '400', value: '#B6AEE9', className: 'bg-purple-400' },
        { name: '450', value: '#978AE6', className: 'bg-purple-450' },
        { name: '500', value: '#7F72FF', className: 'bg-purple-500' },
        { name: '600', value: '#6F5EEC', className: 'bg-purple-600' },
        { name: '700', value: '#5E49D6', className: 'bg-purple-700' },
        { name: '800', value: '#4D33BC', className: 'bg-purple-800' },
        { name: '900', value: '#382C80', className: 'bg-purple-900' },
        { name: '950', value: '#261D56', className: 'bg-purple-950' },
      ],
    },
    {
      title: 'Obsidian',
      colors: [
        { name: '50', value: '#F0F0F5', className: 'bg-obsidian-50' },
        { name: '100', value: '#C0C0D1', className: 'bg-obsidian-100' },
        { name: '200', value: '#A3A3B3', className: 'bg-obsidian-200' },
        { name: '300', value: '#81818F', className: 'bg-obsidian-300' },
        { name: '400', value: '#6E6E7B', className: 'bg-obsidian-400' },
        { name: '500', value: '#5C5C67', className: 'bg-obsidian-500' },
        { name: '600', value: '#4A4A53', className: 'bg-obsidian-600' },
        { name: '700', value: '#38383F', className: 'bg-obsidian-700' },
        { name: '800', value: '#2D2D33', className: 'bg-obsidian-800' },
        { name: '900', value: '#242428', className: 'bg-obsidian-900' },
        { name: '950', value: '#1B1B1F', className: 'bg-obsidian-950' },
      ],
    },
    {
      title: 'Grass',
      colors: [
        { name: '50', value: '#EBFAEE', className: 'bg-grass-50' },
        { name: '65', value: '#DFFBE3', className: 'bg-grass-65' },
        { name: '80', value: '#D9F8DD', className: 'bg-grass-80' },
        { name: '100', value: '#CFF5D4', className: 'bg-grass-100' },
        { name: '150', value: '#C3F1CA', className: 'bg-grass-150' },
      ],
    },
    {
      title: 'Grey',
      colors: [
        { name: '20', value: '#C4C4C4', className: 'bg-grey-20' },
        { name: '40', value: '#ABABAB', className: 'bg-grey-40' },
        { name: '50', value: '#989898', className: 'bg-grey-50' },
        { name: '60', value: '#6B6B6B', className: 'bg-grey-60' },
        { name: '80', value: '#3D3D3D', className: 'bg-grey-80' },
      ],
    },
    {
      title: 'Bluish',
      colors: [
        { name: '50', value: '#F1F5F8', className: 'bg-bluish-50' },
        { name: '100', value: '#DCE3E8', className: 'bg-bluish-100' },
      ],
    },
  ];

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Colors</h1>
        <p className="text-subtle mb-8">
          GitLaw design system color palette. Use semantic colors for most UI elements.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Semantic Colors
          </h2>
          {semanticColors.map((group) => (
            <ColorGroup key={group.title} {...group} />
          ))}

          {/* Text Colors - shown with actual text samples */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">Text</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <TextColorSwatch name="Primary" value="#1B1B1F" textClassName="" />
              <TextColorSwatch name="Secondary" value="#989898" textClassName="" />
              <TextColorSwatch name="Negative" value="#F7F6FF" textClassName="" bgClassName="bg-primary" />
              <TextColorSwatch name="Button" value="#5E49D6" textClassName="" />
              <TextColorSwatch name="Button Negative" value="#F7F6FF" textClassName="" bgClassName="bg-primary" />
              <TextColorSwatch name="Button Disabled" value="#CFC8F3" textClassName="" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Primitive Colors
          </h2>
          <p className="text-sm text-subtle mb-6">
            Raw color values. Prefer semantic colors in code - use primitives only for reference.
          </p>
          {primitiveColors.map((group) => (
            <ColorGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const AllColors: Story = () => <ColorsPage />;
