import{j as e}from"./jsx-runtime-DiklIkkE.js";import{U as pe}from"./User-Dpxyq6Hj.js";import{X as xe}from"./X-CHna3Xpc.js";import"./index-DRjF_FHU.js";const be={xxs:{container:"gap-1 px-2 py-1.5",text:"text-xxs",icon:"size-4"},xs:{container:"gap-2 px-2 py-1",text:"text-sm",icon:"size-5"},s:{container:"gap-2 px-4 py-2",text:"text-sm",icon:"size-6"},m:{container:"gap-2 px-4 py-2",text:"text-base",icon:"size-6"},l:{container:"gap-2 px-4 py-3",text:"text-base",icon:"size-6"},xl:{container:"gap-2 p-4",text:"text-lg",icon:"size-6"}},a=({label:oe="Label",size:te="m",weight:ne="regular",showIcon:ie=!1,icon:ce,showClose:ge=!1,onClose:me,className:de=""})=>{const s=be[te],ue=ne==="bold"?"font-semibold":"font-normal";return e.jsxs("div",{className:`
        inline-flex items-center justify-center
        bg-backgrounds-tag-background rounded
        ${s.container}
        ${de}
      `,children:[ie&&e.jsx("span",{className:"shrink-0 text-text-tag",children:ce||e.jsx(pe,{className:s.icon,color:"#5e49d6"})}),e.jsx("span",{className:`text-text-tag ${s.text} ${ue} overflow-hidden text-ellipsis`,children:oe}),ge&&e.jsx("button",{type:"button",onClick:me,className:"shrink-0 text-text-tag hover:opacity-70 transition-opacity",children:e.jsx(xe,{className:s.icon,color:"#5e49d6"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"The text label",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the tag",defaultValue:{value:"'m'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"}]},description:"Font weight",defaultValue:{value:"'regular'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const fe={title:"Components/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xxs","xs","s","m","l","xl"],description:"The size of the tag"},weight:{control:"select",options:["regular","bold"],description:"Font weight"},label:{control:"text",description:"The text label"},showIcon:{control:"boolean",description:"Show icon"},showClose:{control:"boolean",description:"Show close button"}}},l={args:{label:"Label",size:"m",weight:"regular"}},r={args:{label:"Label",size:"m",weight:"bold"}},o={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0}},t={args:{label:"Removable",size:"m",weight:"regular",showClose:!0}},n={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0,showClose:!0}},i={args:{label:"Employment Agreement",size:"xxs",weight:"bold"}},c={args:{label:"Label",size:"xs",weight:"regular"}},g={args:{label:"Label",size:"s",weight:"regular"}},m={args:{label:"Label",size:"m",weight:"regular"}},d={args:{label:"Label",size:"l",weight:"regular"}},u={args:{label:"Label",size:"xl",weight:"bold"}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",label:"XXS"}),e.jsx(a,{size:"xs",label:"XS"}),e.jsx(a,{size:"s",label:"Small"}),e.jsx(a,{size:"m",label:"Medium"}),e.jsx(a,{size:"l",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra Large"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",weight:"bold",label:"XXS"}),e.jsx(a,{size:"xs",weight:"bold",label:"XS"}),e.jsx(a,{size:"s",weight:"bold",label:"Small"}),e.jsx(a,{size:"m",weight:"bold",label:"Medium"}),e.jsx(a,{size:"l",weight:"bold",label:"Large"}),e.jsx(a,{size:"xl",weight:"bold",label:"Extra Large"})]})},b={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"React",showClose:!0}),e.jsx(a,{label:"TypeScript",showClose:!0}),e.jsx(a,{label:"Storybook",showClose:!0}),e.jsx(a,{label:"Tailwind CSS",showClose:!0}),e.jsx(a,{label:"Figma",showClose:!0})]})};var h,w,z;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,f,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'bold'
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,C,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true
  }
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,y,X;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Removable',
    size: 'm',
    weight: 'regular',
    showClose: true
  }
}`,...(X=(y=t.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var N,I,R;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true,
    showClose: true
  }
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,k,q;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Employment Agreement',
    size: 'xxs',
    weight: 'bold'
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var E,W,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xs',
    weight: 'regular'
  }
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var M,V,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 's',
    weight: 'regular'
  }
}`,...(B=(V=g.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var F,J,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(_=(J=m.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var $,U,O;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'l',
    weight: 'regular'
  }
}`,...(O=(U=d.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var G,H,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xl',
    weight: 'bold'
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,Q,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" label="XXS" />
      <Tag size="xs" label="XS" />
      <Tag size="s" label="Small" />
      <Tag size="m" label="Medium" />
      <Tag size="l" label="Large" />
      <Tag size="xl" label="Extra Large" />
    </div>
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" weight="bold" label="XXS" />
      <Tag size="xs" weight="bold" label="XS" />
      <Tag size="s" weight="bold" label="Small" />
      <Tag size="m" weight="bold" label="Medium" />
      <Tag size="l" weight="bold" label="Large" />
      <Tag size="xl" weight="bold" label="Extra Large" />
    </div>
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,le,re;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="React" showClose />
      <Tag label="TypeScript" showClose />
      <Tag label="Storybook" showClose />
      <Tag label="Tailwind CSS" showClose />
      <Tag label="Figma" showClose />
    </div>
}`,...(re=(le=b.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const Te=["Default","Bold","WithIcon","WithClose","WithIconAndClose","SizeXXS","SizeXS","SizeSmall","SizeMedium","SizeLarge","SizeXL","AllSizesRegular","AllSizesBold","TagsList"];export{x as AllSizesBold,p as AllSizesRegular,r as Bold,l as Default,d as SizeLarge,m as SizeMedium,g as SizeSmall,u as SizeXL,c as SizeXS,i as SizeXXS,b as TagsList,t as WithClose,o as WithIcon,n as WithIconAndClose,Te as __namedExportsOrder,fe as default};
