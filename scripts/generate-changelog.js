#!/usr/bin/env node

/**
 * Generate changelog from git commits
 * Run: node scripts/generate-changelog.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get git log with date and full message
const gitLog = execSync(
  'git log --pretty=format:"%H|%ad|%s|%b" --date=short -50',
  { encoding: 'utf-8' }
);

const commits = gitLog
  .split('\n')
  .filter(line => line.trim())
  .map(line => {
    const parts = line.split('|');
    const hash = parts[0] || '';
    const date = parts[1] || '';
    const subject = parts[2] || '';
    const body = parts[3] || '';
    return { hash: hash.substring(0, 7), date, subject, body: body.trim() };
  })
  // Filter out deployment triggers and minor commits
  .filter(c =>
    c.subject &&
    !c.subject.toLowerCase().includes('trigger') &&
    !c.subject.toLowerCase().includes('merge') &&
    c.subject.trim().length > 0
  );

// Group by date
const grouped = commits.reduce((acc, commit) => {
  if (!acc[commit.date]) {
    acc[commit.date] = [];
  }
  acc[commit.date].push(commit);
  return acc;
}, {});

// Generate TypeScript changelog data
const changelogData = Object.entries(grouped)
  .map(([date, commits]) => ({
    date,
    commits: commits.map(c => ({
      hash: c.hash,
      message: c.subject,
    })),
  }))
  .slice(0, 20); // Last 20 days with commits

const output = `// Auto-generated changelog from git commits
// Generated: ${new Date().toISOString()}
// Run: node scripts/generate-changelog.js

export interface ChangelogEntry {
  date: string;
  commits: {
    hash: string;
    message: string;
  }[];
}

export const changelog: ChangelogEntry[] = ${JSON.stringify(changelogData, null, 2)};

export const lastUpdated = "${new Date().toISOString().split('T')[0]}";
`;

const outputPath = path.join(__dirname, '../src/changelog/data.ts');
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, output);
console.log(`Changelog generated: ${outputPath}`);
console.log(`Total entries: ${changelogData.length} days, ${commits.length} commits`);
