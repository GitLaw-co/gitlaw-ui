import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const K=({className:a="size-6",color:i="currentColor"})=>e.jsxs("svg",{className:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}),e.jsx("path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}),e.jsx("path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}),e.jsx("path",{d:"M10 6h4"}),e.jsx("path",{d:"M10 10h4"}),e.jsx("path",{d:"M10 14h4"}),e.jsx("path",{d:"M10 18h4"})]});K.__docgenInfo={description:"",methods:[],displayName:"Building",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const P=({className:a="size-4",color:i="currentColor"})=>e.jsxs("svg",{className:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.8 0L13 14"}),e.jsx("path",{d:"m14 19.5 3-3 3 3"}),e.jsx("path",{d:"M17 22v-5.5"}),e.jsx("circle",{cx:"9",cy:"9",r:"2"})]});P.__docgenInfo={description:"",methods:[],displayName:"ImageUp",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-4'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const te={S:{container:"size-6",text:"text-xs",icon:"size-6"},M:{container:"size-8",text:"text-sm",icon:"size-6"},L:{container:"size-12",text:"text-xl",icon:"size-6"},XL:{container:"size-16",text:"text-2xl",icon:"size-6"}},s=({type:a="image",size:i="M",src:h,initials:Q="AC",alt:Y="Avatar",showEdit:ee=!1,onEditClick:se,className:ae=""})=>{const g=te[i],ie=a==="image"?"":"bg-primary";return e.jsxs("div",{className:`relative inline-block ${ae}`,children:[e.jsxs("div",{className:`
          ${g.container}
          ${ie}
          rounded overflow-hidden
          flex items-center justify-center
        `,children:[a==="image"&&h&&e.jsx("img",{src:h,alt:Y,className:"w-full h-full object-cover"}),a==="initials"&&e.jsx("span",{className:`font-black text-text-negative ${g.text}`,children:Q}),a==="icon"&&e.jsx(K,{className:g.icon,color:"#f7f6ff"}),a==="empty"&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-1",children:[e.jsx(P,{className:"size-4",color:"#f7f6ff"}),e.jsx("span",{className:"text-xxs text-text-negative",children:"Add"})]})]}),ee&&e.jsx("button",{type:"button",onClick:se,className:`
            absolute -bottom-1 -right-1
            size-6 rounded-full
            bg-[#1b1d22]
            flex items-center justify-center
            hover:bg-[#2a2d33] transition-colors
          `,children:e.jsxs("svg",{className:"size-4",viewBox:"0 0 24 24",fill:"none",stroke:"#f7f6ff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),e.jsx("path",{d:"m15 5 4 4"})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"'image' | 'initials' | 'icon' | 'empty'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'initials'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'empty'"}]},description:"The type of avatar content",defaultValue:{value:"'image'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M' | 'L' | 'XL'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"},{name:"literal",value:"'L'"},{name:"literal",value:"'XL'"}]},description:"The size of the avatar",defaultValue:{value:"'M'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"Image source URL (for image type)"},initials:{required:!1,tsType:{name:"string"},description:"Initials text (for initials type)",defaultValue:{value:"'AC'",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"Alt text for image",defaultValue:{value:"'Avatar'",computed:!1}},showEdit:{required:!1,tsType:{name:"boolean"},description:"Show edit button",defaultValue:{value:"false",computed:!1}},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Edit click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const oe={title:"Components/Avatar",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["image","initials","icon","empty"],description:"The type of avatar content"},size:{control:"select",options:["S","M","L","XL"],description:"The size of the avatar"},initials:{control:"text",description:"Initials text (for initials type)"},showEdit:{control:"boolean",description:"Show edit button"}}},t={args:{type:"image",size:"M",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"User avatar"}},r={args:{type:"initials",size:"M",initials:"AC"}},n={args:{type:"icon",size:"M"}},o={args:{type:"empty",size:"M"}},l={args:{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",showEdit:!0}},c={args:{type:"initials",size:"S",initials:"JD"}},p={args:{type:"initials",size:"M",initials:"JD"}},d={args:{type:"initials",size:"L",initials:"JD"}},m={args:{type:"initials",size:"XL",initials:"JD"}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(s,{type:"initials",size:"L",initials:"JD"}),e.jsx(s,{type:"icon",size:"L"}),e.jsx(s,{type:"empty",size:"L"})]})},f={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(s,{type:"initials",size:"S",initials:"S"}),e.jsx(s,{type:"initials",size:"M",initials:"M"}),e.jsx(s,{type:"initials",size:"L",initials:"L"}),e.jsx(s,{type:"initials",size:"XL",initials:"XL"})]})};var x,y,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'M',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'User avatar'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,j,L;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'AC'
  }
}`,...(L=(j=r.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,M,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    size: 'M'
  }
}`,...(A=(M=n.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var b,w,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'empty',
    size: 'M'
  }
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,k,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'L',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    showEdit: true
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,I,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'S',
    initials: 'JD'
  }
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var V,D,J;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'JD'
  }
}`,...(J=(D=p.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var X,_,B;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'L',
    initials: 'JD'
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var U,W,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'XL',
    initials: 'JD'
  }
}`,...($=(W=m.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var H,R,Z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar type="image" size="L" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
      <Avatar type="initials" size="L" initials="JD" />
      <Avatar type="icon" size="L" />
      <Avatar type="empty" size="L" />
    </div>
}`,...(Z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var O,F,G;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Avatar type="initials" size="S" initials="S" />
      <Avatar type="initials" size="M" initials="M" />
      <Avatar type="initials" size="L" initials="L" />
      <Avatar type="initials" size="XL" initials="XL" />
    </div>
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const le=["Image","Initials","Icon","Empty","WithEdit","SizeSmall","SizeMedium","SizeLarge","SizeExtraLarge","AllTypes","AllSizes"];export{f as AllSizes,u as AllTypes,o as Empty,n as Icon,t as Image,r as Initials,m as SizeExtraLarge,d as SizeLarge,p as SizeMedium,c as SizeSmall,l as WithEdit,le as __namedExportsOrder,oe as default};
