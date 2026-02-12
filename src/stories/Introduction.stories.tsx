import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Introduction",
  meta: { layout: "fullscreen" },
} satisfies StoryDefault;

/* ------------------------------------------------------------------ */
/*  Color swatch helper                                                */
/* ------------------------------------------------------------------ */

const ColorPreview = ({
  value,
  border,
}: {
  value: string;
  border?: boolean;
}) => (
  <span
    style={{
      display: "inline-block",
      width: "16px",
      height: "16px",
      background: value,
      borderRadius: "4px",
      verticalAlign: "middle",
      border: border ? "1px solid #ddd" : undefined,
    }}
  />
);

const RadiusPreview = ({ radius }: { radius: string }) => (
  <span
    style={{
      display: "inline-block",
      width: "24px",
      height: "24px",
      background: "#5E49D6",
      borderRadius: radius,
    }}
  />
);

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

export const Default: Story = () => (
  <div
    style={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: "#1b1b1f",
      lineHeight: 1.6,
    }}
  >
    <h1>GitLaw UI</h1>
    <p>
      An <strong>experimental</strong> React component library built with
      Tailwind CSS, designed by <strong>Dario Codipietro</strong> and built
      with Claude from the GitLaw Figma design system.
    </p>
    <blockquote
      style={{
        borderLeft: "4px solid #5E49D6",
        paddingLeft: "1rem",
        margin: "1rem 0",
        color: "#6e6e7b",
      }}
    >
      <strong>Note:</strong> This is a proof-of-concept demonstrating how
      Claude can translate Figma designs into functional React components. Not
      intended for production use (yet!).
    </blockquote>

    <h2>About This Project</h2>
    <p>
      This component library showcases 38 components, 1,475 icons, and 100+
      illustrations. Use the sidebar to explore components interactively.
    </p>

    <h3>How to Navigate</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>
            Section
          </th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>
            What You'll Find
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <strong>Components</strong>
          </td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            Interactive component demos with controls
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <strong>Foundations</strong>
          </td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            Colors, typography, spacing, icons
          </td>
        </tr>
      </tbody>
    </table>
    <blockquote
      style={{
        borderLeft: "4px solid #5E49D6",
        paddingLeft: "1rem",
        margin: "1rem 0",
        color: "#6e6e7b",
      }}
    >
      <strong>Tip:</strong> Use the <strong>Controls</strong> panel at the
      bottom of each story to experiment with props in real-time.
    </blockquote>

    <hr style={{ border: "none", borderTop: "1px solid #e2ddff", margin: "2rem 0" }} />

    <h2>Quick Start</h2>
    <pre
      style={{
        background: "#f7f6ff",
        padding: "1rem",
        borderRadius: "8px",
        overflow: "auto",
        fontSize: "14px",
      }}
    >
      <code>{`import { Button, Input, Avatar, Icon } from './components';
import { colors } from './specs';

// Primary button
<Button variant="primary" size="m">Get Started</Button>

// Input with label
<Input label="Email" placeholder="you@example.com" showLabel />

// User avatar
<Avatar type="initials" initials="JD" size="M" />

// Icon
<Icon name="check" className="size-6" color={colors.iconPrimary} />`}</code>
    </pre>

    <hr style={{ border: "none", borderTop: "1px solid #e2ddff", margin: "2rem 0" }} />

    <h2>Component Overview</h2>

    <h3>Actions</h3>
    <ul>
      <li><strong>Button</strong> — Primary, secondary, outline, ghost, destructive variants</li>
      <li><strong>MenuItem</strong> — List items with icons, avatars, checkboxes</li>
      <li><strong>Dropdown</strong> — Adaptive width dropdown menu</li>
    </ul>

    <h3>Form</h3>
    <ul>
      <li><strong>Input</strong> — Text input with labels, icons, validation</li>
      <li><strong>TextField</strong> — Multi-line textarea</li>
      <li><strong>Select</strong> — Searchable dropdown with multi-select</li>
      <li><strong>Switch</strong> — Boolean toggle</li>
      <li><strong>Checkbox</strong> — Checkbox with indeterminate state</li>
      <li><strong>Radio</strong> — Radio button with label</li>
    </ul>

    <h3>Data Display</h3>
    <ul>
      <li><strong>Avatar</strong> — User avatars with multiple display modes</li>
      <li><strong>Badge</strong> — Notification indicators</li>
      <li><strong>Tag</strong> — Labels with icons and close buttons</li>
      <li><strong>Card</strong> — File, template, and folder cards</li>
      <li><strong>StarIcon</strong> — Filled star icon</li>
      <li><strong>TableListItem</strong> — Sortable table rows with selection, starring, menus</li>
      <li><strong>SettingsTableRow</strong> — Settings key-value rows</li>
    </ul>

    <h3>Navigation</h3>
    <ul>
      <li><strong>Tab</strong> — Tab navigation with badges</li>
      <li><strong>Sidebar</strong> — Collapsible navigation sidebar</li>
      <li><strong>PageNav</strong> — Settings page navigation with context switcher</li>
      <li><strong>TopHeader</strong> — Top-level page header with breadcrumbs</li>
      <li><strong>ListHeader</strong> — Toolbar above file lists with edit mode variants</li>
    </ul>

    <h3>Overlays</h3>
    <ul>
      <li><strong>Dialog</strong> — Modal dialogs</li>
      <li><strong>Popover</strong> — Click/hover triggered popover overlay</li>
      <li><strong>Tooltip</strong> — Contextual information hints</li>
    </ul>

    <h3>Feedback</h3>
    <ul>
      <li><strong>Toast</strong> — Notification messages</li>
      <li><strong>StickyFeaturePromoBar</strong> — Feature promotion banner</li>
    </ul>

    <h3>Chat</h3>
    <ul>
      <li><strong>ChatInput</strong> — AI chat input with quick actions</li>
      <li><strong>ChatThread</strong> — Chat conversation thread</li>
    </ul>

    <h3>Editor</h3>
    <ul>
      <li><strong>EditorHeader</strong> — Document title bar with actions</li>
      <li><strong>EditorToolbar</strong> — Responsive formatting toolbar with overflow</li>
      <li><strong>EditorPaper</strong> — Document editing surface</li>
      <li><strong>EditorSection</strong> — Collapsible content sections</li>
    </ul>

    <h3>Layout</h3>
    <ul>
      <li><strong>PageShell</strong> — Responsive page shell with sidebar, header, and content area</li>
      <li><strong>Stack</strong> — Flexbox layout primitive for spacing</li>
      <li><strong>Section</strong> — Content section with optional header</li>
      <li><strong>Icon</strong> — 1,475 icons with color support</li>
      <li><strong>Overlay</strong> — Full-screen overlay backdrop (used by Dialog, PageShell)</li>
      <li><strong>FileDropdown</strong> — File picker dropdown (used by EditorHeader)</li>
    </ul>

    <hr style={{ border: "none", borderTop: "1px solid #e2ddff", margin: "2rem 0" }} />

    <h2>Design Tokens</h2>

    <h3>Colors</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Token</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Value</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>primary</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>#5E49D6</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><ColorPreview value="#5E49D6" /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>secondary</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>#EBE7FF</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><ColorPreview value="#EBE7FF" border /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>destructive</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>#E11D48</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><ColorPreview value="#E11D48" /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>alert</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>#F97316</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><ColorPreview value="#F97316" /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>positive</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>#15803D</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><ColorPreview value="#15803D" /></td>
        </tr>
      </tbody>
    </table>

    <h3>Typography</h3>
    <p><strong>Font Families:</strong></p>
    <ul>
      <li><code>font-sans</code> — DM Sans (default)</li>
      <li><code>font-serif</code> — DM Serif Text</li>
    </ul>
    <p><strong>Line Height:</strong> 1.4 (all sizes)</p>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Scale</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Size</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["xxs", "10px"],
          ["xs", "12px"],
          ["sm", "14px"],
          ["base", "16px"],
          ["lg", "18px"],
          ["xl", "20px"],
          ["2xl", "24px"],
        ].map(([scale, size]) => (
          <tr key={scale}>
            <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>{scale}</code></td>
            <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>{size}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3>Spacing</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Token</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["gitlaw-xxs", "1px"],
          ["gitlaw-xs", "2px"],
          ["gitlaw-s", "4px"],
          ["gitlaw-m", "8px"],
          ["gitlaw-l", "12px"],
          ["gitlaw-xl", "16px"],
          ["gitlaw-2xl", "24px"],
          ["gitlaw-3xl", "32px"],
          ["gitlaw-4xl", "48px"],
        ].map(([token, value]) => (
          <tr key={token}>
            <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>{token}</code></td>
            <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3>Border Radius</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Token</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Value</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>rounded-gitlaw-s</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>4px</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><RadiusPreview radius="4px" /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>rounded-gitlaw-m</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>8px</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><RadiusPreview radius="8px" /></td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>rounded-gitlaw-full</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>1000px</td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><RadiusPreview radius="1000px" /></td>
        </tr>
      </tbody>
    </table>

    <h3>Shadows</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Token</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><code>shadow-card</code></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <span
              style={{
                display: "inline-block",
                width: "60px",
                height: "40px",
                background: "#FFFFFF",
                borderRadius: "8px",
                boxShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.05)",
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>

    <hr style={{ border: "none", borderTop: "1px solid #e2ddff", margin: "2rem 0" }} />

    <h2>Resources</h2>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "1.5rem",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Resource</th>
          <th style={{ textAlign: "left", padding: "8px", borderBottom: "2px solid #e2ddff" }}>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><strong>Figma UI-v3</strong></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <a href="https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3" target="_blank" rel="noopener noreferrer">Open in Figma</a>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><strong>Typography & Icons</strong></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <a href="https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons" target="_blank" rel="noopener noreferrer">Open in Figma</a>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}><strong>GitHub</strong></td>
          <td style={{ padding: "8px", borderBottom: "1px solid #f0f0f5" }}>
            <a href="https://github.com/GitLaw-co/gitlaw-ui" target="_blank" rel="noopener noreferrer">View Repository</a>
          </td>
        </tr>
      </tbody>
    </table>

    <hr style={{ border: "none", borderTop: "1px solid #e2ddff", margin: "2rem 0" }} />

    <h2>Local Development</h2>
    <pre
      style={{
        background: "#f7f6ff",
        padding: "1rem",
        borderRadius: "8px",
        overflow: "auto",
        fontSize: "14px",
      }}
    >
      <code>{`# Install dependencies
npm install

# Start dev server
npm run dev

# Build static site
npm run build-storybook`}</code>
    </pre>
  </div>
);
Default.storyName = "Introduction";
