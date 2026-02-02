import type { Meta, StoryObj } from '@storybook/react';
import { EditorToolbar } from '../components/EditorToolbar';

const meta: Meta<typeof EditorToolbar> = {
  title: 'Components/EditorToolbar',
  component: EditorToolbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's'],
      description: 'Toolbar size - xs for desktop, s for mobile (easier to tap)',
    },
    status: {
      control: 'select',
      options: ['editing', 'reviewing'],
      description: 'Toolbar state - editing shows formatting tools, reviewing shows version info',
    },
    undoDisabled: {
      control: 'boolean',
      description: 'Whether undo button is disabled',
    },
    redoDisabled: {
      control: 'boolean',
      description: 'Whether redo button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default - xs size, editing state
export const Default: Story = {
  args: {
    size: 'xs',
    status: 'editing',
  },
};

// Mobile size (s) - editing state
export const MobileEditing: Story = {
  args: {
    size: 's',
    status: 'editing',
  },
};

// Desktop - reviewing state
export const DesktopReviewing: Story = {
  args: {
    size: 'xs',
    status: 'reviewing',
  },
};

// Mobile - reviewing state
export const MobileReviewing: Story = {
  args: {
    size: 's',
    status: 'reviewing',
  },
};

// Undo disabled (nothing to undo)
export const UndoDisabled: Story = {
  args: {
    size: 'xs',
    status: 'editing',
    undoDisabled: true,
  },
};

// Redo disabled (nothing to redo)
export const RedoDisabled: Story = {
  args: {
    size: 'xs',
    status: 'editing',
    redoDisabled: true,
  },
};

// Both undo and redo disabled (fresh document)
export const UndoRedoDisabled: Story = {
  args: {
    size: 'xs',
    status: 'editing',
    undoDisabled: true,
    redoDisabled: true,
  },
};

// Interactive example with console logging
export const Interactive: Story = {
  args: {
    size: 'xs',
    status: 'editing',
  },
  render: (args) => (
    <div>
      <p className="text-sm text-subtle mb-4">
        Hover over icons to see tooltips. Click actions to see console logs.
      </p>
      <EditorToolbar
        {...args}
        onUndo={() => console.log('Undo clicked')}
        onRedo={() => console.log('Redo clicked')}
        onTextStyle={() => console.log('Text style clicked')}
        onBold={() => console.log('Bold clicked')}
        onItalic={() => console.log('Italic clicked')}
        onUnderline={() => console.log('Underline clicked')}
        onStrikethrough={() => console.log('Strikethrough clicked')}
        onList={() => console.log('Bullet list clicked')}
        onOrderedList={() => console.log('Ordered list clicked')}
        onLink={() => console.log('Link clicked')}
        onImage={() => console.log('Image clicked')}
        onTable={() => console.log('Table clicked')}
        onHorizontalRule={() => console.log('Horizontal rule clicked')}
        onQuote={() => console.log('Quote clicked')}
        onCode={() => console.log('Code clicked')}
        onHighlight={() => console.log('Highlight clicked')}
        onSuggestEdits={() => console.log('Suggest edits clicked')}
        onBackToEdit={() => console.log('Back to edit clicked')}
      />
    </div>
  ),
};

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Editing</p>
        <EditorToolbar size="xs" status="editing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Mobile (s) - Editing</p>
        <EditorToolbar size="s" status="editing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Editing (Undo/Redo disabled)</p>
        <EditorToolbar size="xs" status="editing" undoDisabled redoDisabled />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Reviewing</p>
        <EditorToolbar size="xs" status="reviewing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Mobile (s) - Reviewing</p>
        <EditorToolbar size="s" status="reviewing" />
      </div>
    </div>
  ),
};
