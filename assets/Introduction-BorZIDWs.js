import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as o}from"./index-ChEI-nsM.js";import{M as t}from"./index-B9666pmy.js";import"./index-DRjF_FHU.js";import"./iframe-DTb7bdGA.js";import"./index-DIvcuAjW.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"gitlaw-ui",children:"GitLaw UI"}),`
`,n.jsxs(e.p,{children:["An ",n.jsx(e.strong,{children:"experimental"})," React component library built with Tailwind CSS, generated using Claude from the GitLaw Figma design system."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," This is a proof-of-concept implementation created with AI assistance. It demonstrates how Claude can translate Figma designs into functional React components. Not intended for production use (yet!)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"about-this-project",children:"About This Project"}),`
`,n.jsx(e.p,{children:"This Storybook showcases 20+ components, 1,474 icons, and 100 illustrations — all generated through an experimental workflow using Claude to interpret Figma designs. Use the sidebar to explore components interactively."}),`
`,n.jsx(e.h3,{id:"how-to-navigate",children:"How to Navigate"}),`
`,n.jsxs(e.p,{children:[`| Section | What You'll Find |
|---------|------------------|
| `,n.jsx(e.strong,{children:"Components"}),` | Interactive component demos with controls |
| `,n.jsx(e.strong,{children:"Foundations"}),` | Colors, typography, spacing, icons |
| `,n.jsx(e.strong,{children:"Docs"})," | Component API documentation |"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tip:"})," Use the ",n.jsx(e.strong,{children:"Controls"})," panel at the bottom of each story to experiment with props in real-time."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Input, Avatar, Icon } from './components';

// Primary button
<Button variant="primary" size="m">Get Started</Button>

// Input with label
<Input label="Email" placeholder="you@example.com" showLabel />

// User avatar
<Avatar type="initials" initials="JD" size="M" />

// Icon
<Icon name="check" className="size-6" color="#5E49D6" />
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"component-overview",children:"Component Overview"}),`
`,n.jsx(e.h3,{id:"form-controls",children:"Form Controls"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-button--docs",children:n.jsx(e.strong,{children:"Button"})})," — Primary, secondary, outline, ghost, destructive variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-input--docs",children:n.jsx(e.strong,{children:"Input"})})," — Text input with labels, icons, validation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-textfield--docs",children:n.jsx(e.strong,{children:"TextField"})})," — Multi-line textarea"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-select--docs",children:n.jsx(e.strong,{children:"Select"})})," — Searchable dropdown with multi-select"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-switch--docs",children:n.jsx(e.strong,{children:"Switch"})})," — Boolean toggle"]}),`
`]}),`
`,n.jsx(e.h3,{id:"data-display",children:"Data Display"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-avatar--docs",children:n.jsx(e.strong,{children:"Avatar"})})," — User avatars with multiple display modes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-badge--docs",children:n.jsx(e.strong,{children:"Badge"})})," — Notification indicators"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-tag--docs",children:n.jsx(e.strong,{children:"Tag"})})," — Labels with icons and close buttons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-card--docs",children:n.jsx(e.strong,{children:"Card"})})," — File, template, and folder cards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-tooltip--docs",children:n.jsx(e.strong,{children:"Tooltip"})})," — Contextual information hints"]}),`
`]}),`
`,n.jsx(e.h3,{id:"navigation",children:"Navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-tab--docs",children:n.jsx(e.strong,{children:"Tab"})})," — Tab navigation with badges"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-menuitem--docs",children:n.jsx(e.strong,{children:"MenuItem"})})," — List items with R element options"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-dropdown--docs",children:n.jsx(e.strong,{children:"Dropdown"})})," — Adaptive width dropdown menu"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-sidebar--docs",children:n.jsx(e.strong,{children:"Sidebar"})})," — Collapsible navigation sidebar"]}),`
`]}),`
`,n.jsx(e.h3,{id:"editor",children:"Editor"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-editorheader--docs",children:n.jsx(e.strong,{children:"EditorHeader"})})," — Document title bar with actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-editortoolbar--docs",children:n.jsx(e.strong,{children:"EditorToolbar"})})," — Formatting toolbar"]}),`
`]}),`
`,n.jsx(e.h3,{id:"feedback",children:"Feedback"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-dialog--docs",children:n.jsx(e.strong,{children:"Dialog"})})," — Modal dialogs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-toast--docs",children:n.jsx(e.strong,{children:"Toast"})})," — Notification messages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/components-chatinput--docs",children:n.jsx(e.strong,{children:"ChatInput"})})," — AI chat interface"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.p,{children:[`| Token | Value | Preview |
|-------|-------|---------|
| `,n.jsx(e.code,{children:"primary"})," | ",n.jsx(e.code,{children:"#5E49D6"})," | ",n.jsx("span",{style:{display:"inline-block",width:"16px",height:"16px",background:"#5E49D6",borderRadius:"4px",verticalAlign:"middle"}}),` |
| `,n.jsx(e.code,{children:"secondary"})," | ",n.jsx(e.code,{children:"#EBE7FF"})," | ",n.jsx("span",{style:{display:"inline-block",width:"16px",height:"16px",background:"#EBE7FF",borderRadius:"4px",verticalAlign:"middle",border:"1px solid #ddd"}}),` |
| `,n.jsx(e.code,{children:"destructive"})," | ",n.jsx(e.code,{children:"#E11D48"})," | ",n.jsx("span",{style:{display:"inline-block",width:"16px",height:"16px",background:"#E11D48",borderRadius:"4px",verticalAlign:"middle"}}),` |
| `,n.jsx(e.code,{children:"alert"})," | ",n.jsx(e.code,{children:"#F97316"})," | ",n.jsx("span",{style:{display:"inline-block",width:"16px",height:"16px",background:"#F97316",borderRadius:"4px",verticalAlign:"middle"}}),` |
| `,n.jsx(e.code,{children:"positive"})," | ",n.jsx(e.code,{children:"#15803D"})," | ",n.jsx("span",{style:{display:"inline-block",width:"16px",height:"16px",background:"#15803D",borderRadius:"4px",verticalAlign:"middle"}})," |"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See ",n.jsx(e.a,{href:"?path=/docs/foundations-colors--docs",children:n.jsx(e.strong,{children:"Foundations/Colors"})})," for the complete palette."]}),`
`]}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Font Family:"})," DM Sans"]}),`
`,n.jsxs(e.p,{children:[`| Scale | Size |
|-------|------|
| `,n.jsx(e.code,{children:"xxs"}),` | 10px |
| `,n.jsx(e.code,{children:"xs"}),` | 12px |
| `,n.jsx(e.code,{children:"sm"}),` | 14px |
| `,n.jsx(e.code,{children:"base"}),` | 16px |
| `,n.jsx(e.code,{children:"lg"}),` | 18px |
| `,n.jsx(e.code,{children:"xl"}),` | 20px |
| `,n.jsx(e.code,{children:"2xl"})," | 24px |"]}),`
`,n.jsx(e.h3,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.p,{children:[`| Token | Value |
|-------|-------|
| `,n.jsx(e.code,{children:"xs"}),` | 4px |
| `,n.jsx(e.code,{children:"m"}),` | 8px |
| `,n.jsx(e.code,{children:"l"}),` | 12px |
| `,n.jsx(e.code,{children:"xl"}),` | 16px |
| `,n.jsx(e.code,{children:"2xl"})," | 24px |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.p,{children:[`| Resource | Link |
|----------|------|
| `,n.jsx(e.strong,{children:"Figma UI-v3"})," | ",n.jsx(e.a,{href:"https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3",rel:"nofollow",children:"Open in Figma"}),` |
| `,n.jsx(e.strong,{children:"Typography & Icons"})," | ",n.jsx(e.a,{href:"https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons",rel:"nofollow",children:"Open in Figma"}),` |
| `,n.jsx(e.strong,{children:"GitHub"})," | ",n.jsx(e.a,{href:"https://github.com/GitLaw-co/gitlaw-ui",rel:"nofollow",children:"View Repository"})," |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"local-development",children:"Local Development"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
`})})]})}function j(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
