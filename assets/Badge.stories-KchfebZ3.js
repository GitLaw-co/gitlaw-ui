import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as r}from"./Badge-foPfH3i_.js";import"./index-DRjF_FHU.js";const z={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","red","orange","green"],description:"The color type of the badge"},showNumber:{control:"boolean",description:"Show number in badge"},count:{control:"number",description:"The number to display"}}},s={args:{type:"primary",showNumber:!0,count:7}},a={args:{type:"secondary",showNumber:!0,count:5}},o={args:{type:"red",showNumber:!0,count:3}},n={args:{type:"orange",showNumber:!0,count:12}},t={args:{type:"green",showNumber:!0,count:1}},c={args:{type:"red",showNumber:!1}},p={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{type:"primary",count:7}),e.jsx(r,{type:"secondary",count:5}),e.jsx(r,{type:"red",count:3}),e.jsx(r,{type:"orange",count:12}),e.jsx(r,{type:"green",count:1})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{type:"primary",showNumber:!1}),e.jsx(r,{type:"secondary",showNumber:!1}),e.jsx(r,{type:"red",showNumber:!1}),e.jsx(r,{type:"orange",showNumber:!1}),e.jsx(r,{type:"green",showNumber:!1})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary rounded text-foreground-button",children:"Notifications"}),e.jsx(r,{type:"red",count:3,className:"absolute -top-1 -right-1"})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary rounded text-foreground-button",children:"Messages"}),e.jsx(r,{type:"primary",count:12,className:"absolute -top-1 -right-1"})]})]})};var m,l,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    showNumber: true,
    count: 7
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'secondary',
    showNumber: true,
    count: 5
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,N,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'red',
    showNumber: true,
    count: 3
  }
}`,...(h=(N=o.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var f,w,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'orange',
    showNumber: true,
    count: 12
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var v,B,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'green',
    showNumber: true,
    count: 1
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var O,T,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'red',
    showNumber: false
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,E,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Badge type="primary" count={7} />
      <Badge type="secondary" count={5} />
      <Badge type="red" count={3} />
      <Badge type="orange" count={12} />
      <Badge type="green" count={1} />
    </div>
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var G,M,P;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Badge type="primary" showNumber={false} />
      <Badge type="secondary" showNumber={false} />
      <Badge type="red" showNumber={false} />
      <Badge type="orange" showNumber={false} />
      <Badge type="green" showNumber={false} />
    </div>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,W,_;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
          Notifications
        </button>
        <Badge type="red" count={3} className="absolute -top-1 -right-1" />
      </div>
      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
          Messages
        </button>
        <Badge type="primary" count={12} className="absolute -top-1 -right-1" />
      </div>
    </div>
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const F=["Primary","Secondary","Red","Orange","Green","DotOnly","AllTypesWithNumber","AllTypesDotOnly","UsageExample"];export{d as AllTypesDotOnly,p as AllTypesWithNumber,c as DotOnly,t as Green,n as Orange,s as Primary,o as Red,a as Secondary,u as UsageExample,F as __namedExportsOrder,z as default};
