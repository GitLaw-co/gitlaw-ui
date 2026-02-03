import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as f,c as y}from"./Icon-CHBhNP2K.js";import"./index-DRjF_FHU.js";const te={S:{container:"size-6",text:"text-xs",icon:"size-6"},M:{container:"size-8",text:"text-sm",icon:"size-6"},L:{container:"size-12",text:"text-xl",icon:"size-6"},XL:{container:"size-16",text:"text-2xl",icon:"size-6"}},s=({type:a="image",size:Q="M",src:z,initials:Y="AC",alt:Z="Avatar",showEdit:ee=!1,onEditClick:se,className:ae=""})=>{const g=te[Q],ie=a==="image"?"":"bg-primary";return e.jsxs("div",{className:`relative inline-block ${ae}`,children:[e.jsxs("div",{className:`
          ${g.container}
          ${ie}
          rounded overflow-hidden
          flex items-center justify-center
        `,children:[a==="image"&&z&&e.jsx("img",{src:z,alt:Z,className:"w-full h-full object-cover"}),a==="initials"&&e.jsx("span",{className:`font-black text-negative ${g.text}`,children:Y}),a==="icon"&&e.jsx(f,{name:"building",className:g.icon,color:y.iconNegative}),a==="empty"&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-1",children:[e.jsx(f,{name:"image-up",className:"size-4",color:y.iconNegative}),e.jsx("span",{className:"text-xxs text-negative",children:"Add"})]})]}),ee&&e.jsx("button",{type:"button",onClick:se,className:`
            absolute -bottom-1 -right-1
            size-6 rounded-full
            bg-text-primary
            flex items-center justify-center
            hover:bg-obsidian-800 transition-colors
          `,children:e.jsx(f,{name:"pencil",className:"size-4",color:y.iconNegative})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:'"image" | "initials" | "icon" | "empty"',elements:[{name:"literal",value:'"image"'},{name:"literal",value:'"initials"'},{name:"literal",value:'"icon"'},{name:"literal",value:'"empty"'}]},description:"The type of avatar content",defaultValue:{value:'"image"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"S" | "M" | "L" | "XL"',elements:[{name:"literal",value:'"S"'},{name:"literal",value:'"M"'},{name:"literal",value:'"L"'},{name:"literal",value:'"XL"'}]},description:"The size of the avatar",defaultValue:{value:'"M"',computed:!1}},src:{required:!1,tsType:{name:"string"},description:"Image source URL (for image type)"},initials:{required:!1,tsType:{name:"string"},description:"Initials text (for initials type)",defaultValue:{value:'"AC"',computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"Alt text for image",defaultValue:{value:'"Avatar"',computed:!1}},showEdit:{required:!1,tsType:{name:"boolean"},description:"Show edit button",defaultValue:{value:"false",computed:!1}},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Edit click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const ce={title:"Components/Avatar",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["image","initials","icon","empty"],description:"The type of avatar content"},size:{control:"select",options:["S","M","L","XL"],description:"The size of the avatar"},initials:{control:"text",description:"Initials text (for initials type)"},showEdit:{control:"boolean",description:"Show edit button"}}},i={args:{type:"image",size:"M",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"User avatar"}},t={args:{type:"initials",size:"M",initials:"AC"}},r={args:{type:"icon",size:"M"}},n={args:{type:"empty",size:"M"}},o={args:{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",showEdit:!0}},c={args:{type:"initials",size:"S",initials:"JD"}},l={args:{type:"initials",size:"M",initials:"JD"}},p={args:{type:"initials",size:"L",initials:"JD"}},m={args:{type:"initials",size:"XL",initials:"JD"}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(s,{type:"initials",size:"L",initials:"JD"}),e.jsx(s,{type:"icon",size:"L"}),e.jsx(s,{type:"empty",size:"L"})]})},u={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(s,{type:"initials",size:"S",initials:"S"}),e.jsx(s,{type:"initials",size:"M",initials:"M"}),e.jsx(s,{type:"initials",size:"L",initials:"L"}),e.jsx(s,{type:"initials",size:"XL",initials:"XL"})]})};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'M',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'User avatar'
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var S,L,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'AC'
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,b,M;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    size: 'M'
  }
}`,...(M=(b=r.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var N,w,T;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'empty',
    size: 'M'
  }
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var E,I,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'L',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    showEdit: true
  }
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,J,X;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'S',
    initials: 'JD'
  }
}`,...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,V,k;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'M',
    initials: 'JD'
  }
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var $,_,U;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'L',
    initials: 'JD'
  }
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var R,W,O;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'initials',
    size: 'XL',
    initials: 'JD'
  }
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var B,F,G;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar type="image" size="L" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
      <Avatar type="initials" size="L" initials="JD" />
      <Avatar type="icon" size="L" />
      <Avatar type="empty" size="L" />
    </div>
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,K,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Avatar type="initials" size="S" initials="S" />
      <Avatar type="initials" size="M" initials="M" />
      <Avatar type="initials" size="L" initials="L" />
      <Avatar type="initials" size="XL" initials="XL" />
    </div>
}`,...(P=(K=u.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const le=["Image","Initials","Icon","Empty","WithEdit","SizeSmall","SizeMedium","SizeLarge","SizeExtraLarge","AllTypes","AllSizes"];export{u as AllSizes,d as AllTypes,n as Empty,r as Icon,i as Image,t as Initials,m as SizeExtraLarge,p as SizeLarge,l as SizeMedium,c as SizeSmall,o as WithEdit,le as __namedExportsOrder,ce as default};
