import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { illustrations, illustrationsByCategory, categories } from '../../illustrations/manifest';

const meta: Meta = {
  title: 'Foundations/Illustrations',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// Base URL for illustrations - update this path once SVGs are exported
const ILLUSTRATIONS_BASE_URL = '/illustrations';

interface IllustrationCardProps {
  id: string;
  filename: string;
  name: string;
  keywords: string[];
  onCopy: (id: string) => void;
}

const IllustrationCard: React.FC<IllustrationCardProps> = ({ id, filename, name, keywords, onCopy }) => {
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
      className="flex flex-col items-center p-4 bg-card rounded-gitlaw-m border border-border hover:border-primary hover:shadow-sm transition-all cursor-pointer group"
    >
      <div className="w-full aspect-square flex items-center justify-center mb-3 bg-purple-50 rounded-gitlaw-s overflow-hidden">
        {imageError ? (
          <div className="text-xs text-text-secondary text-center p-2">
            SVG not found
          </div>
        ) : (
          <img
            src={`${ILLUSTRATIONS_BASE_URL}/${filename}`}
            alt={name}
            className="w-full h-full object-contain p-2"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <p className="text-sm font-medium text-text-primary group-hover:text-primary text-center">
        {copied ? 'Copied!' : name}
      </p>
      <p className="text-xs text-text-secondary text-center mt-1 line-clamp-2">
        {keywords.slice(0, 3).join(', ')}
      </p>
    </button>
  );
};

const IllustrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lastCopied, setLastCopied] = useState<string | null>(null);

  const filteredIllustrations = illustrations.filter((illustration) => {
    const matchesSearch =
      searchQuery === '' ||
      illustration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      illustration.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === null || illustration.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Illustrations</h1>
        <p className="text-text-secondary mb-6">
          {illustrations.length} illustrations from the Zest illustration library. Click to copy the ID.
        </p>


        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search illustrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-input-bright border border-input-border rounded-gitlaw-m focus:outline-none focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Category:</span>
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="px-3 py-2 text-sm bg-input-bright border border-input-border rounded-gitlaw-m focus:outline-none focus:border-primary"
            >
              <option value="">All ({illustrations.length})</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category} ({illustrationsByCategory[category].length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Toast notification */}
        {lastCopied && (
          <div className="fixed bottom-4 right-4 bg-text-primary text-white px-4 py-2 rounded-gitlaw-m text-sm shadow-lg animate-pulse">
            Copied: {lastCopied}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-text-secondary mb-4">
          Showing {filteredIllustrations.length} of {illustrations.length} illustrations
        </p>

        {/* Illustrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredIllustrations.map((illustration) => (
            <IllustrationCard
              key={illustration.id}
              id={illustration.id}
              filename={illustration.filename}
              name={illustration.name}
              keywords={illustration.keywords}
              onCopy={setLastCopied}
            />
          ))}
        </div>

        {filteredIllustrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No illustrations found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Usage Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-text-primary mb-6 pb-2 border-b border-border">
            Usage
          </h2>
          <div className="bg-card p-6 rounded-gitlaw-m border border-border">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-text-primary mb-2">As an image</p>
                <code className="block bg-muted p-3 rounded-gitlaw-s text-sm font-mono text-text-primary">
                  {`<img src="/illustrations/empty-box.svg" alt="Empty state" className="w-64 h-64" />`}
                </code>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary mb-2">Common use cases</p>
                <ul className="text-sm text-text-secondary space-y-1 ml-4 list-disc">
                  <li><strong>Empty states:</strong> empty-box, location-lost, wifi-disconnect</li>
                  <li><strong>Success:</strong> thumbs-up, antivirus-complete, email-confirm</li>
                  <li><strong>Errors:</strong> wifi-disconnect, clock-warning, empty-box</li>
                  <li><strong>Onboarding:</strong> idea-lightbulb, to-do-list, superhero</li>
                  <li><strong>Search:</strong> document-search, flashlight-search, telescope-explore</li>
                  <li><strong>Security:</strong> shield-sword, lock-protection, password-vault</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export const Gallery: Story = {
  render: () => <IllustrationsPage />,
};
