import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { icons, iconsByCategory, categories } from '../../icons-manifest';

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// Base URL for icons
const ICONS_BASE_URL = '/icons';

// Color options matching the design system
const colorOptions = [
  { name: 'Primary', value: '#5E49D6', filter: 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)' },
  { name: 'Secondary', value: '#989898', filter: 'brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)' },
  { name: 'Black', value: '#1B1B1F', filter: 'brightness(0) saturate(100%) invert(7%) sepia(5%) saturate(1000%) hue-rotate(201deg) brightness(95%) contrast(95%)' },
  { name: 'White', value: '#FFFFFF', filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' },
  { name: 'Disabled', value: '#CFC8F3', filter: 'brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(654%) hue-rotate(206deg) brightness(99%) contrast(95%)' },
];

interface IconCardProps {
  id: string;
  filename: string;
  name: string;
  colorFilter: string;
  onCopy: (id: string) => void;
}

const IconCard: React.FC<IconCardProps> = ({ id, filename, name, colorFilter, onCopy }) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    onCopy(id);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center p-3 bg-card rounded-gitlaw-m border border-border hover:border-primary hover:shadow-sm transition-all cursor-pointer group"
    >
      <div className="w-10 h-10 flex items-center justify-center mb-2">
        {imageError ? (
          <div className="text-xs text-subtle text-center">
            Not found
          </div>
        ) : (
          <img
            src={`${ICONS_BASE_URL}/${filename}`}
            alt={name}
            className="w-6 h-6 object-contain"
            style={{ filter: colorFilter }}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <p className="text-xs text-subtle group-hover:text-primary text-center truncate w-full">
        {copied ? 'Copied!' : id}
      </p>
    </button>
  );
};

const IconsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [lastCopied, setLastCopied] = useState<string | null>(null);

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch =
      searchQuery === '' ||
      icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null || icon.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Icons</h1>
        <p className="text-subtle mb-6">
          {icons.length} icons available. Click to copy the icon ID.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-input-bright border border-input-border rounded-gitlaw-m focus:outline-none focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-subtle">Category:</span>
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="px-3 py-2 text-sm bg-input-bright border border-input-border rounded-gitlaw-m focus:outline-none focus:border-primary"
            >
              <option value="">All ({icons.length})</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category} ({iconsByCategory[category].length})
                </option>
              ))}
            </select>
          </div>

          {/* Color Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-subtle">Color:</span>
            <div className="flex gap-1">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-gitlaw-s border-2 transition-all ${
                    selectedColor.value === color.value
                      ? 'border-primary scale-110'
                      : 'border-border hover:border-primary'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Toast notification */}
        {lastCopied && (
          <div className="fixed bottom-4 right-4 bg-text-primary text-white px-4 py-2 rounded-gitlaw-m text-sm shadow-lg animate-pulse">
            Copied: {lastCopied}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-subtle mb-4">
          Showing {filteredIcons.length} of {icons.length} icons
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {filteredIcons.map((icon) => (
            <IconCard
              key={icon.id}
              id={icon.id}
              filename={icon.filename}
              name={icon.name}
              colorFilter={selectedColor.filter}
              onCopy={setLastCopied}
            />
          ))}
        </div>

        {filteredIcons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-subtle">No icons found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Usage Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Usage
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">As an image</p>
                <code className="block bg-muted p-3 rounded-gitlaw-s text-sm font-mono text-foreground">
                  {`<img src="/icons/check.svg" alt="Check" className="w-6 h-6" />`}
                </code>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">With custom size</p>
                <code className="block bg-muted p-3 rounded-gitlaw-s text-sm font-mono text-foreground">
                  {`<img src="/icons/star.svg" alt="Star" className="w-4 h-4" />`}
                </code>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Icon Sizes</p>
                <div className="flex items-end gap-4 mt-2">
                  <div className="flex flex-col items-center">
                    <img src="/icons/check.svg" alt="Check" className="w-4 h-4" />
                    <span className="text-xs text-subtle mt-1">w-4</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/icons/check.svg" alt="Check" className="w-5 h-5" />
                    <span className="text-xs text-subtle mt-1">w-5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/icons/check.svg" alt="Check" className="w-6 h-6" />
                    <span className="text-xs text-subtle mt-1">w-6</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/icons/check.svg" alt="Check" className="w-8 h-8" />
                    <span className="text-xs text-subtle mt-1">w-8</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="/icons/check.svg" alt="Check" className="w-10 h-10" />
                    <span className="text-xs text-subtle mt-1">w-10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Icons Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Common Use Cases
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <ul className="text-sm text-subtle space-y-1 ml-4 list-disc">
              <li><strong>Navigation:</strong> arrow-left, arrow-right, chevron-down, menu, home</li>
              <li><strong>Actions:</strong> check, x, plus, minus, edit, trash-2</li>
              <li><strong>Status:</strong> check-circle, alert-circle, info, bell</li>
              <li><strong>Files:</strong> file, folder, file-text, download, upload</li>
              <li><strong>Users:</strong> user, users, user-plus, settings</li>
              <li><strong>Communication:</strong> mail, message-circle, phone, send</li>
              <li><strong>Media:</strong> play, pause, volume-2, image</li>
              <li><strong>Search:</strong> search, filter, zoom-in, zoom-out</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Gallery: Story = {
  render: () => <IconsPage />,
};
