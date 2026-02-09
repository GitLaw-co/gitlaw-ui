import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as i}from"./Icon-CfPs8lnx.js";import{c as r}from"./colors-CUQOl70L.js";import"./index-DRjF_FHU.js";const C={xxs:{container:"gap-1 px-2 py-1.5",text:"text-xxs",icon:"size-4"},xs:{container:"gap-2 px-2 py-1",text:"text-sm",icon:"size-5"},s:{container:"gap-2 px-4 py-2",text:"text-sm",icon:"size-6"},m:{container:"gap-2 px-4 py-2",text:"text-base",icon:"size-6"},l:{container:"gap-2 px-4 py-3",text:"text-base",icon:"size-6"},xl:{container:"gap-2 p-4",text:"text-lg",icon:"size-6"}},a=({label:f="Label",size:h="m",weight:w="regular",showIcon:T=!1,icon:z,showClose:v=!1,onClose:j,className:y=""})=>{const s=C[h],S=w==="bold"?"font-semibold":"font-normal";return e.jsxs("div",{className:`
        inline-flex items-center justify-center
        bg-backgrounds-tag-background rounded
        ${s.container}
        ${y}
      `,children:[T&&e.jsx("span",{className:"shrink-0 text-foreground-tag",children:z||e.jsx(i,{name:"user",className:s.icon,color:r.iconPrimary})}),e.jsx("span",{className:`text-foreground-tag ${s.text} ${S} overflow-hidden text-ellipsis`,children:f}),v&&e.jsx("button",{type:"button",onClick:j,className:"shrink-0 text-foreground-tag hover:opacity-70 transition-opacity duration-fast ease-gitlaw",children:e.jsx(i,{name:"x",className:s.icon,color:r.iconPrimary})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"The text label",defaultValue:{value:'"Label"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xxs" | "xs" | "s" | "m" | "l" | "xl"',elements:[{name:"literal",value:'"xxs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'}]},description:"The size of the tag",defaultValue:{value:'"m"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"regular" | "bold"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"bold"'}]},description:"Font weight",defaultValue:{value:'"regular"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const k={title:"Components/Data Display/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xxs","xs","s","m","l","xl"],description:"The size of the tag"},weight:{control:"select",options:["regular","bold"],description:"Font weight"},label:{control:"text",description:"The text label"},showIcon:{control:"boolean",description:"Show icon"},showClose:{control:"boolean",description:"Show close button"}}},l={args:{label:"Label",size:"m",weight:"regular"}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-text-secondary",children:"Regular"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",label:"XXS"}),e.jsx(a,{size:"xs",label:"XS"}),e.jsx(a,{size:"s",label:"Small"}),e.jsx(a,{size:"m",label:"Medium"}),e.jsx(a,{size:"l",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra Large"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-text-secondary",children:"Bold"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",weight:"bold",label:"XXS"}),e.jsx(a,{size:"xs",weight:"bold",label:"XS"}),e.jsx(a,{size:"s",weight:"bold",label:"Small"}),e.jsx(a,{size:"m",weight:"bold",label:"Medium"}),e.jsx(a,{size:"l",weight:"bold",label:"Large"}),e.jsx(a,{size:"xl",weight:"bold",label:"Extra Large"})]})]})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"React",showClose:!0}),e.jsx(a,{label:"TypeScript",showClose:!0}),e.jsx(a,{label:"Storybook",showClose:!0}),e.jsx(a,{label:"Tailwind CSS",showClose:!0}),e.jsx(a,{label:"Figma",showClose:!0})]})};var n,c,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var x,m,p;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Regular</p>
        <div className="flex flex-wrap items-center gap-4">
          <Tag size="xxs" label="XXS" />
          <Tag size="xs" label="XS" />
          <Tag size="s" label="Small" />
          <Tag size="m" label="Medium" />
          <Tag size="l" label="Large" />
          <Tag size="xl" label="Extra Large" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Bold</p>
        <div className="flex flex-wrap items-center gap-4">
          <Tag size="xxs" weight="bold" label="XXS" />
          <Tag size="xs" weight="bold" label="XS" />
          <Tag size="s" weight="bold" label="Small" />
          <Tag size="m" weight="bold" label="Medium" />
          <Tag size="l" weight="bold" label="Large" />
          <Tag size="xl" weight="bold" label="Extra Large" />
        </div>
      </div>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="React" showClose />
      <Tag label="TypeScript" showClose />
      <Tag label="Storybook" showClose />
      <Tag label="Tailwind CSS" showClose />
      <Tag label="Figma" showClose />
    </div>
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const q=["Default","AllVariants","TagsList"];export{t as AllVariants,l as Default,o as TagsList,q as __namedExportsOrder,k as default};
