import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as g}from"./Icon-CCFihSvx.js";import"./index-DRjF_FHU.js";const ie={S:{container:"size-6",text:"text-xs",icon:"size-6"},M:{container:"size-8",text:"text-sm",icon:"size-6"},L:{container:"size-12",text:"text-xl",icon:"size-6"},XL:{container:"size-16",text:"text-2xl",icon:"size-6"}},s=({type:a="image",size:P="M",src:y,initials:Q="AC",alt:Y="Avatar",showEdit:Z=!1,onEditClick:ee,className:se=""})=>{const f=ie[P],ae=a==="image"?"":"bg-primary";return e.jsxs("div",{className:`relative inline-block ${se}`,children:[e.jsxs("div",{className:`
          ${f.container}
          ${ae}
          rounded overflow-hidden
          flex items-center justify-center
        `,children:[a==="image"&&y&&e.jsx("img",{src:y,alt:Y,className:"w-full h-full object-cover"}),a==="initials"&&e.jsx("span",{className:`font-black text-text-negative ${f.text}`,children:Q}),a==="icon"&&e.jsx(g,{name:"building",className:f.icon,color:"#f7f6ff"}),a==="empty"&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-1",children:[e.jsx(g,{name:"image-up",className:"size-4",color:"#f7f6ff"}),e.jsx("span",{className:"text-xxs text-text-negative",children:"Add"})]})]}),Z&&e.jsx("button",{type:"button",onClick:ee,className:`
            absolute -bottom-1 -right-1
            size-6 rounded-full
            bg-[#1b1d22]
            flex items-center justify-center
            hover:bg-[#2a2d33] transition-colors
          `,children:e.jsx(g,{name:"pencil",className:"size-4",color:"#f7f6ff"})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"'image' | 'initials' | 'icon' | 'empty'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'initials'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'empty'"}]},description:"The type of avatar content",defaultValue:{value:"'image'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M' | 'L' | 'XL'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"},{name:"literal",value:"'L'"},{name:"literal",value:"'XL'"}]},description:"The size of the avatar",defaultValue:{value:"'M'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"Image source URL (for image type)"},initials:{required:!1,tsType:{name:"string"},description:"Initials text (for initials type)",defaultValue:{value:"'AC'",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"Alt text for image",defaultValue:{value:"'Avatar'",computed:!1}},showEdit:{required:!1,tsType:{name:"boolean"},description:"Show edit button",defaultValue:{value:"false",computed:!1}},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Edit click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const oe={title:"Components/Avatar",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["image","initials","icon","empty"],description:"The type of avatar content"},size:{control:"select",options:["S","M","L","XL"],description:"The size of the avatar"},initials:{control:"text",description:"Initials text (for initials type)"},showEdit:{control:"boolean",description:"Show edit button"}}},i={args:{type:"image",size:"M",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"User avatar"}},t={args:{type:"initials",size:"M",initials:"AC"}},r={args:{type:"icon",size:"M"}},n={args:{type:"empty",size:"M"}},o={args:{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",showEdit:!0}},l={args:{type:"initials",size:"S",initials:"JD"}},c={args:{type:"initials",size:"M",initials:"JD"}},p={args:{type:"initials",size:"L",initials:"JD"}},m={args:{type:"initials",size:"XL",initials:"JD"}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(s,{type:"initials",size:"L",initials:"JD"}),e.jsx(s,{type:"icon",size:"L"}),e.jsx(s,{type:"empty",size:"L"})]})},u={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(s,{type:"initials",size:"S",initials:"S"}),e.jsx(s,{type:"initials",size:"M",initials:"M"}),e.jsx(s,{type:"initials",size:"L",initials:"L"}),e.jsx(s,{type:"initials",size:"XL",initials:"XL"})]})};var z,x,h;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'M',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'User avatar'
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,S,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'AC'
  }
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var j,A,b;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    size: 'M'
  }
}`,...(b=(A=r.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var M,w,N;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'empty',
    size: 'M'
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,E,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'L',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    showEdit: true
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var C,D,J;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'S',
    initials: 'JD'
  }
}`,...(J=(D=l.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var X,q,V;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'JD'
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var k,$,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'L',
    initials: 'JD'
  }
}`,...(_=($=p.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var U,R,W;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'XL',
    initials: 'JD'
  }
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var O,B,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar type="image" size="L" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
      <Avatar type="initials" size="L" initials="JD" />
      <Avatar type="icon" size="L" />
      <Avatar type="empty" size="L" />
    </div>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Avatar type="initials" size="S" initials="S" />
      <Avatar type="initials" size="M" initials="M" />
      <Avatar type="initials" size="L" initials="L" />
      <Avatar type="initials" size="XL" initials="XL" />
    </div>
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const le=["Image","Initials","Icon","Empty","WithEdit","SizeSmall","SizeMedium","SizeLarge","SizeExtraLarge","AllTypes","AllSizes"];export{u as AllSizes,d as AllTypes,n as Empty,r as Icon,i as Image,t as Initials,m as SizeExtraLarge,p as SizeLarge,c as SizeMedium,l as SizeSmall,o as WithEdit,le as __namedExportsOrder,oe as default};
