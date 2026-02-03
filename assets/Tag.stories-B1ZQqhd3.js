import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as h,c as w}from"./Icon-CHBhNP2K.js";import"./index-DRjF_FHU.js";const xe={xxs:{container:"gap-1 px-2 py-1.5",text:"text-xxs",icon:"size-4"},xs:{container:"gap-2 px-2 py-1",text:"text-sm",icon:"size-5"},s:{container:"gap-2 px-4 py-2",text:"text-sm",icon:"size-6"},m:{container:"gap-2 px-4 py-2",text:"text-base",icon:"size-6"},l:{container:"gap-2 px-4 py-3",text:"text-base",icon:"size-6"},xl:{container:"gap-2 p-4",text:"text-lg",icon:"size-6"}},a=({label:ne="Label",size:ie="m",weight:ce="regular",showIcon:ge=!1,icon:me,showClose:de=!1,onClose:ue,className:pe=""})=>{const s=xe[ie],be=ce==="bold"?"font-semibold":"font-normal";return e.jsxs("div",{className:`
        inline-flex items-center justify-center
        bg-backgrounds-tag-background rounded
        ${s.container}
        ${pe}
      `,children:[ge&&e.jsx("span",{className:"shrink-0 text-foreground-tag",children:me||e.jsx(h,{name:"user",className:s.icon,color:w.iconPrimary})}),e.jsx("span",{className:`text-foreground-tag ${s.text} ${be} overflow-hidden text-ellipsis`,children:ne}),de&&e.jsx("button",{type:"button",onClick:ue,className:"shrink-0 text-foreground-tag hover:opacity-70 transition-opacity",children:e.jsx(h,{name:"x",className:s.icon,color:w.iconPrimary})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"The text label",defaultValue:{value:'"Label"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xxs" | "xs" | "s" | "m" | "l" | "xl"',elements:[{name:"literal",value:'"xxs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'}]},description:"The size of the tag",defaultValue:{value:'"m"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"regular" | "bold"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"bold"'}]},description:"Font weight",defaultValue:{value:'"regular"',computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},showClose:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const Se={title:"Components/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xxs","xs","s","m","l","xl"],description:"The size of the tag"},weight:{control:"select",options:["regular","bold"],description:"Font weight"},label:{control:"text",description:"The text label"},showIcon:{control:"boolean",description:"Show icon"},showClose:{control:"boolean",description:"Show close button"}}},r={args:{label:"Label",size:"m",weight:"regular"}},l={args:{label:"Label",size:"m",weight:"bold"}},o={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0}},t={args:{label:"Removable",size:"m",weight:"regular",showClose:!0}},n={args:{label:"John Doe",size:"m",weight:"regular",showIcon:!0,showClose:!0}},i={args:{label:"Employment Agreement",size:"xxs",weight:"bold"}},c={args:{label:"Label",size:"xs",weight:"regular"}},g={args:{label:"Label",size:"s",weight:"regular"}},m={args:{label:"Label",size:"m",weight:"regular"}},d={args:{label:"Label",size:"l",weight:"regular"}},u={args:{label:"Label",size:"xl",weight:"bold"}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",label:"XXS"}),e.jsx(a,{size:"xs",label:"XS"}),e.jsx(a,{size:"s",label:"Small"}),e.jsx(a,{size:"m",label:"Medium"}),e.jsx(a,{size:"l",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra Large"})]})},b={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{size:"xxs",weight:"bold",label:"XXS"}),e.jsx(a,{size:"xs",weight:"bold",label:"XS"}),e.jsx(a,{size:"s",weight:"bold",label:"Small"}),e.jsx(a,{size:"m",weight:"bold",label:"Medium"}),e.jsx(a,{size:"l",weight:"bold",label:"Large"}),e.jsx(a,{size:"xl",weight:"bold",label:"Extra Large"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"React",showClose:!0}),e.jsx(a,{label:"TypeScript",showClose:!0}),e.jsx(a,{label:"Storybook",showClose:!0}),e.jsx(a,{label:"Tailwind CSS",showClose:!0}),e.jsx(a,{label:"Figma",showClose:!0})]})};var z,S,f;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,v,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'bold'
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var L,j,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var X,N,I;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Removable',
    size: 'm',
    weight: 'regular',
    showClose: true
  }
}`,...(I=(N=t.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var R,A,k;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true,
    showClose: true
  }
}`,...(k=(A=n.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var q,E,W;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Employment Agreement',
    size: 'xxs',
    weight: 'bold'
  }
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,M,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xs',
    weight: 'regular'
  }
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var B,F,J;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 's',
    weight: 'regular'
  }
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var _,$,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular'
  }
}`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var O,G,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'l',
    weight: 'regular'
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'xl',
    weight: 'bold'
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" label="XXS" />
      <Tag size="xs" label="XS" />
      <Tag size="s" label="Small" />
      <Tag size="m" label="Medium" />
      <Tag size="l" label="Large" />
      <Tag size="xl" label="Extra Large" />
    </div>
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" weight="bold" label="XXS" />
      <Tag size="xs" weight="bold" label="XS" />
      <Tag size="s" weight="bold" label="Small" />
      <Tag size="m" weight="bold" label="Medium" />
      <Tag size="l" weight="bold" label="Large" />
      <Tag size="xl" weight="bold" label="Extra Large" />
    </div>
}`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,oe,te;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="React" showClose />
      <Tag label="TypeScript" showClose />
      <Tag label="Storybook" showClose />
      <Tag label="Tailwind CSS" showClose />
      <Tag label="Figma" showClose />
    </div>
}`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const fe=["Default","Bold","WithIcon","WithClose","WithIconAndClose","SizeXXS","SizeXS","SizeSmall","SizeMedium","SizeLarge","SizeXL","AllSizesRegular","AllSizesBold","TagsList"];export{b as AllSizesBold,p as AllSizesRegular,l as Bold,r as Default,d as SizeLarge,m as SizeMedium,g as SizeSmall,u as SizeXL,c as SizeXS,i as SizeXXS,x as TagsList,t as WithClose,o as WithIcon,n as WithIconAndClose,fe as __namedExportsOrder,Se as default};
