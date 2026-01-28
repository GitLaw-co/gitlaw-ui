import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as z}from"./index-DRjF_FHU.js";import{X as ze}from"./X-CHna3Xpc.js";const ne=({className:a="size-6",color:g="currentColor"})=>e.jsxs("svg",{className:a,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]});ne.__docgenInfo={description:"",methods:[],displayName:"Search",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const je={xl:{container:"gap-3 p-4 min-h-14",input:"text-base",label:"text-base"},l:{container:"gap-2 p-3 min-h-12",input:"text-base",label:"text-sm"},m:{container:"gap-2 p-2 min-h-9",input:"text-sm",label:"text-sm"},s:{container:"gap-1 px-2 py-1 min-h-7",input:"text-sm",label:"text-sm"},xs:{container:"gap-1 px-2 py-1 min-h-6",input:"text-xs",label:"text-xs"}},t=({size:a="m",status:g,align:ie="fill",placeholder:ce="Placeholder text",value:r,onChange:l,showLabel:de=!1,label:pe="Label",showLeftIcon:ue=!1,showRightIcon:me=!1,leftIcon:he,rightIcon:xe,className:fe="",disabled:b=!1})=>{const[ge,w]=z.useState(""),[be,S]=z.useState(!1),v=r!==void 0?r:ge,ve=(g||(be?"active":v?"populated":"empty"))==="active",ye=Le=>{const L=Le.target.value;r===void 0&&w(L),l==null||l(L)},we=()=>{r===void 0&&w(""),l==null||l("")},y=je[a],Se=ie==="fill"?"w-full":"w-auto";return e.jsxs("div",{className:`flex flex-col gap-2 ${Se} ${fe}`,children:[de&&e.jsx("label",{className:`font-semibold text-text-primary ${y.label}`,children:pe}),e.jsxs("div",{className:`
          flex items-center bg-white rounded overflow-hidden
          border transition-colors
          ${y.container}
          ${ve?"border-primary":"border-input-border"}
          ${b?"opacity-50 cursor-not-allowed":""}
        `,children:[ue&&e.jsx("span",{className:"shrink-0 text-text-primary",children:he||e.jsx(ne,{className:"size-6",color:"#1b1b1f"})}),e.jsx("input",{type:"text",value:v,onChange:ye,onFocus:()=>S(!0),onBlur:()=>S(!1),placeholder:ce,disabled:b,className:`
            flex-1 bg-transparent outline-none font-normal
            text-text-primary placeholder:text-text-secondary
            ${y.input}
            ${b?"cursor-not-allowed":""}
          `}),me&&v&&e.jsx("button",{type:"button",onClick:we,className:"shrink-0 text-text-primary hover:text-text-secondary transition-colors",children:xe||e.jsx(ze,{className:"size-6",color:"#1b1b1f"})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the input",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'populated' | 'active'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'active'"}]},description:"The current status"},align:{required:!1,tsType:{name:"union",raw:"'fill' | 'hug'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'hug'"}]},description:"Width behavior",defaultValue:{value:"'fill'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show external label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Show right icon",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const qe={title:"Components/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the input"},status:{control:"select",options:["empty","populated","active"],description:"The current status of the input"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},showRightIcon:{control:"boolean",description:"Show right icon (clear button)"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"}}},s={args:{size:"m",placeholder:"Enter text...",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},o={args:{size:"m",placeholder:"Enter your email",showLabel:!0,label:"Email Address",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},n={args:{size:"m",placeholder:"Search...",showLeftIcon:!0,showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},i={args:{size:"m",placeholder:"Enter text...",value:"Some content",status:"populated",showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},c={args:{size:"m",placeholder:"Enter text...",status:"active",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},d={args:{size:"m",placeholder:"Disabled input",disabled:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},p={args:{size:"xl",placeholder:"Extra Large Input",showLabel:!0,label:"Extra Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},u={args:{size:"l",placeholder:"Large Input",showLabel:!0,label:"Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},m={args:{size:"m",placeholder:"Medium Input",showLabel:!0,label:"Medium",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},h={args:{size:"s",placeholder:"Small Input",showLabel:!0,label:"Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},x={args:{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"Extra Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL"}),e.jsx(t,{size:"l",placeholder:"Large",showLabel:!0,label:"L"}),e.jsx(t,{size:"m",placeholder:"Medium",showLabel:!0,label:"M"}),e.jsx(t,{size:"s",placeholder:"Small",showLabel:!0,label:"S"}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS"})]})};var j,I,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,N,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(N=o.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var R,V,M;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(V=n.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var A,D,$;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(D=i.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var k,C,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var P,_,X;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(_=d.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var F,B,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(te=x.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,se,oe;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Re=["Default","WithLabel","WithSearchIcon","Populated","Active","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes"];export{c as Active,f as AllSizes,s as Default,d as Disabled,p as ExtraLarge,x as ExtraSmall,u as Large,m as Medium,i as Populated,h as Small,o as WithLabel,n as WithSearchIcon,Re as __namedExportsOrder,qe as default};
