import{j as t}from"./jsx-runtime-DiklIkkE.js";import{E as p}from"./EditorHeader-CUSvoDCH.js";import"./index-DRjF_FHU.js";import"./Button-DR1DBuRh.js";import"./Icon-CfPs8lnx.js";import"./colors-CUQOl70L.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";const v={title:"Editor/EditorHeader",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Document title displayed in the header"},showShare:{control:"boolean",description:"Show the Share button"}}},e={args:{title:"Influencer agreement",showShare:!0}},o={args:{title:"Employment Agreement for Senior Software Engineer Position",showShare:!0}},r={args:{title:"Employment Agreement",showShare:!0},render:u=>t.jsxs("div",{children:[t.jsx("p",{className:"text-sm text-subtle mb-4",children:"Hover over icons to see tooltips. Click actions to see console logs."}),t.jsx(p,{...u,onClose:()=>console.log("Close clicked"),onTitleClick:()=>console.log("Title clicked"),onMenuClick:()=>console.log("Menu clicked"),onShare:()=>console.log("Share clicked"),onESign:()=>console.log("eSign clicked"),onDownload:()=>console.log("Download clicked"),onVersions:()=>console.log("Versions clicked"),onMore:()=>console.log("More clicked")})]})};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Influencer agreement',
    showShare: true
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,i,a;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Employment Agreement for Senior Software Engineer Position',
    showShare: true
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Employment Agreement',
    showShare: true
  },
  render: args => <div>
      <p className="text-sm text-subtle mb-4">Hover over icons to see tooltips. Click actions to see console logs.</p>
      <EditorHeader {...args} onClose={() => console.log('Close clicked')} onTitleClick={() => console.log('Title clicked')} onMenuClick={() => console.log('Menu clicked')} onShare={() => console.log('Share clicked')} onESign={() => console.log('eSign clicked')} onDownload={() => console.log('Download clicked')} onVersions={() => console.log('Versions clicked')} onMore={() => console.log('More clicked')} />
    </div>
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const M=["Default","LongTitle","Interactive"];export{e as Default,r as Interactive,o as LongTitle,M as __namedExportsOrder,v as default};
