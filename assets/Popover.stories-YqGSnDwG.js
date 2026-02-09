import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as P}from"./index-DRjF_FHU.js";import{P as t}from"./Popover-OT7etBEe.js";import{B as n}from"./Button-DquhqAJK.js";import{M as c}from"./MenuItem-Dv70_nnm.js";import{I as l}from"./Icon-CGgPBvn_.js";import"./colors-CUQOl70L.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";const E={title:"Components/Overlays/Popover",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"select",options:["click","hover"],description:"How the popover is triggered"},position:{control:"select",options:["top","bottom","left","right"],description:"Position of the popover relative to trigger"},animated:{control:"boolean",description:"Enable/disable animation"},animationDuration:{control:"number",description:"Animation duration in milliseconds"},gap:{control:"number",description:"Gap between trigger and popover"}}},o=()=>e.jsx("div",{className:"p-3 bg-card rounded-lg shadow-card",children:e.jsx("p",{className:"text-sm text-foreground",children:"This is a popover content"})}),y=()=>e.jsxs("div",{className:"w-[240px] p-2 bg-card rounded-lg shadow-card",children:[e.jsx(c,{primaryText:"Edit",showLeftElement:!0,leftIcon:e.jsx(l,{name:"pencil",className:"size-5"}),width:"fill"}),e.jsx(c,{primaryText:"Duplicate",showLeftElement:!0,leftIcon:e.jsx(l,{name:"copy",className:"size-5"}),width:"fill"}),e.jsx(c,{primaryText:"Delete",showLeftElement:!0,leftIcon:e.jsx(l,{name:"trash-2",className:"size-5"}),width:"fill"})]}),r={args:{trigger:"click",position:"bottom",animated:!0,animationDuration:100,gap:2},render:({trigger:i,content:m,...b})=>e.jsx(t,{content:e.jsx(o,{}),trigger:i,...b,children:e.jsx(n,{variant:"secondary",size:"m",children:i==="hover"?"Hover me":"Click me"})})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-subtle mb-6",children:"Positions"}),e.jsxs("div",{className:"flex flex-col items-center gap-16 p-8",children:[e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"bottom",children:e.jsx(n,{variant:"secondary",size:"m",children:"Bottom"})}),e.jsxs("div",{className:"flex gap-32",children:[e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"right",children:e.jsx(n,{variant:"secondary",size:"m",children:"Right"})}),e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"left",children:e.jsx(n,{variant:"secondary",size:"m",children:"Left"})})]}),e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"top",children:e.jsx(n,{variant:"secondary",size:"m",children:"Top"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-subtle mb-6",children:"Triggers"}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"bottom",children:e.jsx(n,{variant:"secondary",size:"m",children:"Click trigger"})}),e.jsx(t,{content:e.jsx(o,{}),trigger:"hover",position:"bottom",children:e.jsx(n,{variant:"secondary",size:"m",children:"Hover trigger"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-subtle mb-6",children:"Menu Content"}),e.jsx(t,{content:e.jsx(y,{}),trigger:"click",position:"bottom",children:e.jsx(n,{variant:"secondary",size:"m",children:"Options menu"})})]})]})},a={render:()=>{const[i,m]=P.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(t,{content:e.jsx(o,{}),trigger:"click",position:"bottom",isOpen:i,onOpenChange:m,children:e.jsx(n,{variant:"secondary",size:"m",children:i?"Close":"Open"})}),e.jsxs("p",{className:"text-sm text-subtle",children:["Popover is ",i?"open":"closed"]})]})}};var p,d,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    trigger: "click",
    position: "bottom",
    animated: true,
    animationDuration: 100,
    gap: 2
  },
  render: ({
    trigger,
    content: _content,
    ...rest
  }) => <Popover content={<SimpleContent />} trigger={trigger} {...rest}>
      <Button variant="secondary" size="m">
        {trigger === "hover" ? "Hover me" : "Click me"}
      </Button>
    </Popover>
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,v,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12">
      {/* Positions */}
      <div>
        <h3 className="text-sm font-medium text-subtle mb-6">Positions</h3>
        <div className="flex flex-col items-center gap-16 p-8">
          <Popover content={<SimpleContent />} trigger="click" position="bottom">
            <Button variant="secondary" size="m">Bottom</Button>
          </Popover>

          <div className="flex gap-32">
            <Popover content={<SimpleContent />} trigger="click" position="right">
              <Button variant="secondary" size="m">Right</Button>
            </Popover>
            <Popover content={<SimpleContent />} trigger="click" position="left">
              <Button variant="secondary" size="m">Left</Button>
            </Popover>
          </div>

          <Popover content={<SimpleContent />} trigger="click" position="top">
            <Button variant="secondary" size="m">Top</Button>
          </Popover>
        </div>
      </div>

      {/* Triggers */}
      <div>
        <h3 className="text-sm font-medium text-subtle mb-6">Triggers</h3>
        <div className="flex gap-8">
          <Popover content={<SimpleContent />} trigger="click" position="bottom">
            <Button variant="secondary" size="m">Click trigger</Button>
          </Popover>
          <Popover content={<SimpleContent />} trigger="hover" position="bottom">
            <Button variant="secondary" size="m">Hover trigger</Button>
          </Popover>
        </div>
      </div>

      {/* Menu content example */}
      <div>
        <h3 className="text-sm font-medium text-subtle mb-6">Menu Content</h3>
        <Popover content={<MenuContent />} trigger="click" position="bottom">
          <Button variant="secondary" size="m">Options menu</Button>
        </Popover>
      </div>
    </div>
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,j,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <Popover content={<SimpleContent />} trigger="click" position="bottom" isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button variant="secondary" size="m">
            {isOpen ? "Close" : "Open"}
          </Button>
        </Popover>
        <p className="text-sm text-subtle">
          Popover is {isOpen ? "open" : "closed"}
        </p>
      </div>;
  }
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const D=["Default","AllVariants","Interactive"];export{s as AllVariants,r as Default,a as Interactive,D as __namedExportsOrder,E as default};
