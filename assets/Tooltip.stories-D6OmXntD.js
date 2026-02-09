import{j as t}from"./jsx-runtime-DiklIkkE.js";import{T as o}from"./Tooltip-p54vDDUe.js";import{B as e}from"./Button-DquhqAJK.js";import"./index-DRjF_FHU.js";import"./Popover-OT7etBEe.js";import"./Icon-CGgPBvn_.js";import"./colors-CUQOl70L.js";const v={title:"Components/Overlays/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text",description:"The content to show in the tooltip"},size:{control:"select",options:["s","m","l"],description:"Tooltip size - s (12px), m (14px), l (16px)"},type:{control:"select",options:["neutral","purple"],description:"Tooltip color type"},position:{control:"select",options:["top","right","bottom","left"],description:"Position of the tooltip relative to the trigger"},disabled:{control:"boolean",description:"Whether the tooltip is disabled"}}},i={args:{content:"Jurisdiction: England & Wales",size:"m",type:"neutral",position:"right",children:t.jsx(e,{variant:"secondary",size:"m",children:"Hover me"})}},n={render:()=>t.jsxs("div",{className:"flex flex-col gap-8 p-8",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4 text-foreground",children:"Neutral Tooltips"}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(o,{content:"Small tooltip (12px)",size:"s",type:"neutral",position:"bottom",children:t.jsx(e,{variant:"secondary",size:"s",children:"Small"})}),t.jsx(o,{content:"Medium tooltip (14px)",size:"m",type:"neutral",position:"bottom",children:t.jsx(e,{variant:"secondary",size:"m",children:"Medium"})}),t.jsx(o,{content:"Large tooltip (16px)",size:"l",type:"neutral",position:"bottom",children:t.jsx(e,{variant:"secondary",size:"l",children:"Large"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4 text-foreground",children:"Purple Tooltips"}),t.jsxs("div",{className:"flex gap-4",children:[t.jsx(o,{content:"Small tooltip (12px)",size:"s",type:"purple",position:"bottom",children:t.jsx(e,{variant:"primary",size:"s",children:"Small"})}),t.jsx(o,{content:"Medium tooltip (14px)",size:"m",type:"purple",position:"bottom",children:t.jsx(e,{variant:"primary",size:"m",children:"Medium"})}),t.jsx(o,{content:"Large tooltip (16px)",size:"l",type:"purple",position:"bottom",children:t.jsx(e,{variant:"primary",size:"l",children:"Large"})})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold mb-4 text-foreground",children:"Position Variants"}),t.jsxs("div",{className:"flex gap-4 items-center justify-center",children:[t.jsx(o,{content:"Top position",size:"m",type:"neutral",position:"top",children:t.jsx(e,{variant:"secondary",size:"m",children:"Top"})}),t.jsx(o,{content:"Right position",size:"m",type:"neutral",position:"right",children:t.jsx(e,{variant:"secondary",size:"m",children:"Right"})}),t.jsx(o,{content:"Bottom position",size:"m",type:"neutral",position:"bottom",children:t.jsx(e,{variant:"secondary",size:"m",children:"Bottom"})}),t.jsx(o,{content:"Left position",size:"m",type:"neutral",position:"left",children:t.jsx(e,{variant:"secondary",size:"m",children:"Left"})})]})]})]})};var s,r,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: 'Jurisdiction: England & Wales',
    size: 'm',
    type: 'neutral',
    position: 'right',
    children: <Button variant="secondary" size="m">
        Hover me
      </Button>
  }
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var a,p,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Neutral Tooltips</h3>
        <div className="flex gap-4">
          <Tooltip content="Small tooltip (12px)" size="s" type="neutral" position="bottom">
            <Button variant="secondary" size="s">Small</Button>
          </Tooltip>
          <Tooltip content="Medium tooltip (14px)" size="m" type="neutral" position="bottom">
            <Button variant="secondary" size="m">Medium</Button>
          </Tooltip>
          <Tooltip content="Large tooltip (16px)" size="l" type="neutral" position="bottom">
            <Button variant="secondary" size="l">Large</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Purple Tooltips</h3>
        <div className="flex gap-4">
          <Tooltip content="Small tooltip (12px)" size="s" type="purple" position="bottom">
            <Button variant="primary" size="s">Small</Button>
          </Tooltip>
          <Tooltip content="Medium tooltip (14px)" size="m" type="purple" position="bottom">
            <Button variant="primary" size="m">Medium</Button>
          </Tooltip>
          <Tooltip content="Large tooltip (16px)" size="l" type="purple" position="bottom">
            <Button variant="primary" size="l">Large</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Position Variants</h3>
        <div className="flex gap-4 items-center justify-center">
          <Tooltip content="Top position" size="m" type="neutral" position="top">
            <Button variant="secondary" size="m">Top</Button>
          </Tooltip>
          <Tooltip content="Right position" size="m" type="neutral" position="right">
            <Button variant="secondary" size="m">Right</Button>
          </Tooltip>
          <Tooltip content="Bottom position" size="m" type="neutral" position="bottom">
            <Button variant="secondary" size="m">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left position" size="m" type="neutral" position="left">
            <Button variant="secondary" size="m">Left</Button>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const z=["Default","AllVariants"];export{n as AllVariants,i as Default,z as __namedExportsOrder,v as default};
