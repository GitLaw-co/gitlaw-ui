import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as T}from"./Icon-CfPs8lnx.js";import{c as C}from"./colors-CUQOl70L.js";import"./index-DRjF_FHU.js";const v=({title:s,subtitle:n,avatarSrc:i,avatarAlt:y="",actionLabel:A="Action",showAction:S=!0,onActionClick:j,onClose:k,className:N=""})=>e.jsxs("div",{className:`
        bg-card rounded-gitlaw-m shadow-card
        flex items-center gap-gitlaw-2xl
        min-h-[48px] p-gitlaw-m
        ${N}
      `,children:[e.jsxs("div",{className:"flex items-center gap-gitlaw-m",children:[i&&e.jsx("div",{className:"size-8 rounded-gitlaw-s overflow-hidden shrink-0",children:e.jsx("img",{src:i,alt:y,className:"size-full object-cover"})}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("p",{className:"text-sm font-semibold leading-[1.4] text-text-primary",children:s}),n&&e.jsx("p",{className:"text-sm font-normal leading-[1.4] text-text-secondary",children:n})]})]}),e.jsxs("div",{className:"flex items-center gap-gitlaw-m min-h-[24px]",children:[S&&e.jsx("button",{type:"button",onClick:j,className:`
              bg-primary hover:bg-primary-hover
              flex items-center justify-center gap-gitlaw-s
              h-8 px-gitlaw-l py-gitlaw-m
              rounded-gitlaw-s
              text-xs font-normal leading-[1.2]
              text-foreground-button-negative
              transition-colors duration-fast ease-gitlaw shrink-0
            `,children:A}),e.jsx("button",{type:"button",onClick:k,className:"shrink-0 hover:opacity-70 transition-opacity duration-fast ease-gitlaw",children:e.jsx(T,{name:"x",className:"size-6",color:C.iconBlack})})]})]});v.__docgenInfo={description:"",methods:[],displayName:"StickyFeaturePromoBar",props:{title:{required:!0,tsType:{name:"string"},description:"Title text (bold)"},subtitle:{required:!1,tsType:{name:"string"},description:"Subtitle text"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source URL"},avatarAlt:{required:!1,tsType:{name:"string"},description:"Avatar alt text",defaultValue:{value:'""',computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"Action button label",defaultValue:{value:'"Action"',computed:!1}},showAction:{required:!1,tsType:{name:"boolean"},description:"Show action button",defaultValue:{value:"true",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const B={title:"Components/Feedback/StickyFeaturePromoBar",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},avatarSrc:{control:"text"},actionLabel:{control:"text"},showAction:{control:"boolean"}},decorators:[s=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(s,{})})]},t={args:{title:"Word export is now live",subtitle:"Try downloading your contract in .docx",avatarSrc:"/illustrations/word-icon.png",actionLabel:"Create contract",showAction:!0}},a={args:{title:"New feature available",subtitle:"Check out the latest updates",avatarSrc:"/illustrations/word-icon.png",showAction:!1}},r={args:{title:"Your document has been saved",avatarSrc:"/illustrations/word-icon.png",actionLabel:"View",showAction:!0}},o={args:{title:"Export complete",subtitle:"Your file is ready for download",actionLabel:"Download",showAction:!0}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Word export is now live",
    subtitle: "Try downloading your contract in .docx",
    avatarSrc: "/illustrations/word-icon.png",
    actionLabel: "Create contract",
    showAction: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "New feature available",
    subtitle: "Check out the latest updates",
    avatarSrc: "/illustrations/word-icon.png",
    showAction: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,x,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Your document has been saved",
    avatarSrc: "/illustrations/word-icon.png",
    actionLabel: "View",
    showAction: true
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,w,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Export complete",
    subtitle: "Your file is ready for download",
    actionLabel: "Download",
    showAction: true
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const D=["Default","WithoutAction","WithoutSubtitle","WithoutAvatar"];export{t as Default,a as WithoutAction,o as WithoutAvatar,r as WithoutSubtitle,D as __namedExportsOrder,B as default};
