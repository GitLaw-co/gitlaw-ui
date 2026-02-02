import type { Meta, StoryObj } from '@storybook/react';
import { Tab, Tabs } from '../components/Tab';

// Tab Stories
const tabMeta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'selected', 'selected-underlined'],
      description: 'The current status of the tab',
    },
    label: {
      control: 'text',
      description: 'The label text',
    },
    showBadge: {
      control: 'boolean',
      description: 'Show badge',
    },
    badgeCount: {
      control: 'number',
      description: 'Badge count',
    },
  },
};

export default tabMeta;
type TabStory = StoryObj<typeof tabMeta>;

// Default Tab
export const Default: TabStory = {
  args: {
    label: 'Activity',
    status: 'default',
  },
};

// Selected Tab
export const Selected: TabStory = {
  args: {
    label: 'Activity',
    status: 'selected',
  },
};

// Selected with Underline
export const SelectedUnderlined: TabStory = {
  args: {
    label: 'Activity',
    status: 'selected-underlined',
  },
};

// With Badge
export const WithBadge: TabStory = {
  args: {
    label: 'Activity',
    status: 'selected-underlined',
    showBadge: true,
    badgeCount: 7,
  },
};

// All States
export const AllStates: TabStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tab label="Default" status="default" />
      <Tab label="Selected" status="selected" />
      <Tab label="Underlined" status="selected-underlined" />
      <Tab label="With Badge" status="selected-underlined" showBadge badgeCount={5} />
    </div>
  ),
};

// Tabs Component
export const TabsComponent: TabStory = {
  render: () => (
    <Tabs
      tabs={[
        { label: 'Activity', badgeCount: 7 },
        { label: 'Documents', badgeCount: 3 },
        { label: 'Comments' },
        { label: 'Settings' },
      ]}
      selectedIndex={0}
      showBadges
    />
  ),
};

// Tabs Without Badges
export const TabsWithoutBadges: TabStory = {
  render: () => (
    <Tabs
      tabs={[
        { label: 'Overview' },
        { label: 'Analytics' },
        { label: 'Reports' },
        { label: 'Settings' },
      ]}
      selectedIndex={1}
    />
  ),
};
