import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as L}from"./index-DRjF_FHU.js";import{S as Le}from"./Search-CwytfMin.js";import{X as ze}from"./X-euOaDNtq.js";const je={xl:{container:"gap-3 p-4 min-h-14",input:"text-base",label:"text-base"},l:{container:"gap-2 p-3 min-h-12",input:"text-base",label:"text-sm"},m:{container:"gap-2 p-2 min-h-9",input:"text-sm",label:"text-sm"},s:{container:"gap-1 px-2 py-1 min-h-7",input:"text-sm",label:"text-sm"},xs:{container:"gap-1 px-2 py-1 min-h-6",input:"text-xs",label:"text-xs"}},t=({size:a="m",status:oe,align:ne="fill",placeholder:ie="Placeholder text",value:r,onChange:l,showLabel:ce=!1,label:de="Label",showLeftIcon:pe=!1,showRightIcon:ue=!1,leftIcon:me,rightIcon:he,className:xe="",disabled:g=!1})=>{const[fe,y]=L.useState(""),[ge,w]=L.useState(!1),b=r!==void 0?r:fe,be=(oe||(ge?"active":b?"populated":"empty"))==="active",ve=Se=>{const S=Se.target.value;r===void 0&&y(S),l==null||l(S)},ye=()=>{r===void 0&&y(""),l==null||l("")},v=je[a],we=ne==="fill"?"w-full":"w-auto";return e.jsxs("div",{className:`flex flex-col gap-2 ${we} ${xe}`,children:[ce&&e.jsx("label",{className:`font-semibold text-text-primary ${v.label}`,children:de}),e.jsxs("div",{className:`
          flex items-center bg-white rounded overflow-hidden
          border transition-colors
          ${v.container}
          ${be?"border-primary":"border-input-border"}
          ${g?"opacity-50 cursor-not-allowed":""}
        `,children:[pe&&e.jsx("span",{className:"shrink-0 text-text-primary",children:me||e.jsx(Le,{className:"size-6",color:"#1b1b1f"})}),e.jsx("input",{type:"text",value:b,onChange:ve,onFocus:()=>w(!0),onBlur:()=>w(!1),placeholder:ie,disabled:g,className:`
            flex-1 bg-transparent outline-none font-normal
            text-text-primary placeholder:text-text-secondary
            ${v.input}
            ${g?"cursor-not-allowed":""}
          `}),ue&&b&&e.jsx("button",{type:"button",onClick:ye,className:"shrink-0 text-text-primary hover:text-text-secondary transition-colors",children:he||e.jsx(ze,{className:"size-6",color:"#1b1b1f"})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the input",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'populated' | 'active'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'active'"}]},description:"The current status"},align:{required:!1,tsType:{name:"union",raw:"'fill' | 'hug'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'hug'"}]},description:"Width behavior",defaultValue:{value:"'fill'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show external label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Show right icon",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const qe={title:"Components/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the input"},status:{control:"select",options:["empty","populated","active"],description:"The current status of the input"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},showRightIcon:{control:"boolean",description:"Show right icon (clear button)"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"}}},s={args:{size:"m",placeholder:"Enter text...",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},o={args:{size:"m",placeholder:"Enter your email",showLabel:!0,label:"Email Address",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},n={args:{size:"m",placeholder:"Search...",showLeftIcon:!0,showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},i={args:{size:"m",placeholder:"Enter text...",value:"Some content",status:"populated",showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},c={args:{size:"m",placeholder:"Enter text...",status:"active",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},d={args:{size:"m",placeholder:"Disabled input",disabled:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},p={args:{size:"xl",placeholder:"Extra Large Input",showLabel:!0,label:"Extra Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},u={args:{size:"l",placeholder:"Large Input",showLabel:!0,label:"Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},m={args:{size:"m",placeholder:"Medium Input",showLabel:!0,label:"Medium",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},h={args:{size:"s",placeholder:"Small Input",showLabel:!0,label:"Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},x={args:{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"Extra Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL"}),e.jsx(t,{size:"l",placeholder:"Large",showLabel:!0,label:"L"}),e.jsx(t,{size:"m",placeholder:"Medium",showLabel:!0,label:"M"}),e.jsx(t,{size:"s",placeholder:"Small",showLabel:!0,label:"S"}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS"})]})};var z,j,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var E,T,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Enter your email',
    showLabel: true,
    label: 'Email Address',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var R,q,M;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Search...',
    showLeftIcon: true,
    showRightIcon: true,
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,A,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    value: 'Some content',
    status: 'populated',
    showRightIcon: true,
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var $,P,W;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    status: 'active',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var C,X,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Disabled input',
    disabled: true,
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(_=(X=d.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var k,F,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    placeholder: 'Extra Large Input',
    showLabel: true,
    label: 'Extra Large',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var O,G,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'l',
    placeholder: 'Large Input',
    showLabel: true,
    label: 'Large',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Medium Input',
    showLabel: true,
    label: 'Medium',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 's',
    placeholder: 'Small Input',
    showLabel: true,
    label: 'Small',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Extra Small',
    showLabel: true,
    label: 'Extra Small',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(te=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,re,se;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Me=["Default","WithLabel","WithSearchIcon","Populated","Active","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes"];export{c as Active,f as AllSizes,s as Default,d as Disabled,p as ExtraLarge,x as ExtraSmall,u as Large,m as Medium,i as Populated,h as Small,o as WithLabel,n as WithSearchIcon,Me as __namedExportsOrder,qe as default};
