import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { changelog, lastUpdated } from '../changelog/data';
import { Icon } from '../components/Icon';
import { colors } from '../specs';

const meta: Meta = {
  title: 'Changelog',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const categorizeCommit = (message: string): { type: string; icon: string; color: string } => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.startsWith('fix') || lowerMsg.includes('fix:')) {
    return { type: 'Fix', icon: 'bug', color: colors.destructive };
  }
  if (lowerMsg.startsWith('feat') || lowerMsg.includes('add') || lowerMsg.includes('new')) {
    return { type: 'Feature', icon: 'sparkles', color: colors.positive };
  }
  if (lowerMsg.startsWith('refactor') || lowerMsg.includes('refactor')) {
    return { type: 'Refactor', icon: 'refresh-cw', color: colors.primary };
  }
  if (lowerMsg.includes('update') || lowerMsg.includes('improve')) {
    return { type: 'Update', icon: 'arrow-up', color: colors.iconPrimary };
  }
  if (lowerMsg.includes('revert')) {
    return { type: 'Revert', icon: 'undo', color: colors.alert };
  }
  if (lowerMsg.includes('reorganize') || lowerMsg.includes('restructure')) {
    return { type: 'Structure', icon: 'layers', color: colors.iconSecondary };
  }

  return { type: 'Change', icon: 'file-edit', color: colors.iconSecondary };
};

const ChangelogPage = () => {
  return (
    <div className="p-8 bg-page-background min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Changelog</h1>
          <p className="text-text-secondary">
            Recent updates to the GitLaw UI design system.
          </p>
          <p className="text-xs text-text-secondary mt-2">
            Last updated: {formatDate(lastUpdated)} • Auto-generated from Git commits
          </p>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/GitLaw-co/gitlaw-ui/commits/main"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
        >
          <Icon name="github" className="size-4" color={colors.iconPrimary} />
          View full history on GitHub
          <Icon name="external-link" className="size-3" color={colors.iconPrimary} />
        </a>

        {/* Changelog entries */}
        <div className="space-y-8">
          {changelog.map((entry) => (
            <div key={entry.date} className="relative">
              {/* Date header */}
              <div className="sticky top-0 bg-page-background py-2 z-10">
                <h2 className="text-lg font-semibold text-text-primary">
                  {formatDate(entry.date)}
                </h2>
              </div>

              {/* Commits */}
              <div className="bg-card rounded-gitlaw-m border border-border overflow-hidden">
                {entry.commits.map((commit, idx) => {
                  const { type, icon, color } = categorizeCommit(commit.message);
                  return (
                    <div
                      key={commit.hash}
                      className={`flex items-start gap-3 p-4 ${
                        idx !== entry.commits.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className="size-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon name={icon} className="size-4" color={color} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-text-primary leading-relaxed">
                          {commit.message}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-xs px-2 py-0.5 rounded"
                            style={{ backgroundColor: `${color}15`, color }}
                          >
                            {type}
                          </span>
                          <code className="text-xs text-text-secondary font-mono">
                            {commit.hash}
                          </code>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-secondary">
            To regenerate this changelog, run:{' '}
            <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
              node scripts/generate-changelog.js
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export const AllChanges: Story = {
  render: () => <ChangelogPage />,
};
