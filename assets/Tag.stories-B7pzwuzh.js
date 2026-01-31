import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as h}from"./Icon-CCFihSvx.js";import"./index-DRjF_FHU.js";const xe={xxs:{container:"gap-1 px-2 py-1.5",text:"text-xxs",icon:"size-4"},xs:{container:"gap-2 px-2 py-1",text:"text-sm",icon:"size-5"},s:{container:"gap-2 px-4 py-2",text:"text-sm",icon:"size-6"},m:{container:"gap-2 px-4 py-2",text:"text-base",icon:"size-6"},l:{container:"gap-2 px-4 py-3",text:"text-base",icon:"size-6"},xl:{container:"gap-2 p-4",text:"text-lg",icon:"size-6"}},a=({label:te="Label",size:ne="m",weight:ie="regular",showIcon:ce=!1,icon:ge,showClose:me=!1,onClose:de,className:ue=""})=>{const s=xe[ne],pe=ie==="bold"?"font-semibold":"font-normal";return e.jsxs("div",{className:`
        inline-flex items-center justify-center
        bg-backgrounds-tag-background rounded
        ${s.container}
        ${ue}
      `,children:[ce&&e.jsx("span",{className:"shrink-0 text-text-tag",children:ge||e.jsx(h,{name:"user",className:s.icon,color:"#5e49d6"})}),e.jsx("span",{className:`text-text-tag ${s.text} ${pe} overflow-hidden text-ellipsis`,children:te}),me&&e.jsx("button",{type:"button",onClick:de,className:"shrink-0 text-text-tag hover:opacity-70 transition-opacity",children:e.jsx(h,{name:"x",className:s.icon,color:"#5e49d6"})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"The text label",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the tag",defaultValue:{value:"'m'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"}]},description:"Font weight",defaultValue:{value:"'regular'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ze={title:"Components/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xxs","xs","s","m","l","xl"],description:"The size of the tag"},weight:{control:"select",options:["regular","bold"],description:"Font weight"},label:{control:"text",description:"The text label"},showIcon:{control:"boolean",description:"Show icon"},showClose:{control:"boolean",description:"Show close button"}}},l={args:{label:"Label",size:"m",weight:"regular"}},r={args:{label:"Label",size:"m",weight:"bold"}},o={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0}},t={args:{label:"Removable",size:"m",weight:"regular",showClose:!0}},n={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0,showClose:!0}},i={args:{label:"Employment Agreement",size:"xxs",weight:"bold"}},c={args:{label:"Label",size:"xs",weight:"regular"}},g={args:{label:"Label",size:"s",weight:"regular"}},m={args:{label:"Label",size:"m",weight:"regular"}},d={args:{label:"Label",size:"l",weight:"regular"}},u={args:{label:"Label",size:"xl",weight:"bold"}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",label:"XXS"}),e.jsx(a,{size:"xs",label:"XS"}),e.jsx(a,{size:"s",label:"Small"}),e.jsx(a,{size:"m",label:"Medium"}),e.jsx(a,{size:"l",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra Large"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",weight:"bold",label:"XXS"}),e.jsx(a,{size:"xs",weight:"bold",label:"XS"}),e.jsx(a,{size:"s",weight:"bold",label:"Small"}),e.jsx(a,{size:"m",weight:"bold",label:"Medium"}),e.jsx(a,{size:"l",weight:"bold",label:"Large"}),e.jsx(a,{size:"xl",weight:"bold",label:"Extra Large"})]})},b={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"React",showClose:!0}),e.jsx(a,{label:"TypeScript",showClose:!0}),e.jsx(a,{label:"Storybook",showClose:!0}),e.jsx(a,{label:"Tailwind CSS",showClose:!0}),e.jsx(a,{label:"Figma",showClose:!0})]})};var w,z,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var f,T,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'bold'
  }
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var C,L,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true
  }
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var y,X,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Removable',
    size: 'm',
    weight: 'regular',
    showClose: true
  }
}`,...(N=(X=t.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var I,R,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true,
    showClose: true
  }
}`,...(A=(R=n.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var k,q,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Employment Agreement',
    size: 'xxs',
    weight: 'bold'
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var W,D,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xs',
    weight: 'regular'
  }
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var V,B,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 's',
    weight: 'regular'
  }
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var J,_,$;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,G,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'l',
    weight: 'regular'
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,P,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xl',
    weight: 'bold'
  }
}`,...(Q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,Y,Z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" label="XXS" />
      <Tag size="xs" label="XS" />
      <Tag size="s" label="Small" />
      <Tag size="m" label="Medium" />
      <Tag size="l" label="Large" />
      <Tag size="xl" label="Extra Large" />
    </div>
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" weight="bold" label="XXS" />
      <Tag size="xs" weight="bold" label="XS" />
      <Tag size="s" weight="bold" label="Small" />
      <Tag size="m" weight="bold" label="Medium" />
      <Tag size="l" weight="bold" label="Large" />
      <Tag size="xl" weight="bold" label="Extra Large" />
    </div>
}`,...(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,re,oe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="React" showClose />
      <Tag label="TypeScript" showClose />
      <Tag label="Storybook" showClose />
      <Tag label="Tailwind CSS" showClose />
      <Tag label="Figma" showClose />
    </div>
}`,...(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Se=["Default","Bold","WithIcon","WithClose","WithIconAndClose","SizeXXS","SizeXS","SizeSmall","SizeMedium","SizeLarge","SizeXL","AllSizesRegular","AllSizesBold","TagsList"];export{x as AllSizesBold,p as AllSizesRegular,r as Bold,l as Default,d as SizeLarge,m as SizeMedium,g as SizeSmall,u as SizeXL,c as SizeXS,i as SizeXXS,b as TagsList,t as WithClose,o as WithIcon,n as WithIconAndClose,Se as __namedExportsOrder,ze as default};
