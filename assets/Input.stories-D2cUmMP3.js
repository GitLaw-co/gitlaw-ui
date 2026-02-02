import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as L}from"./index-DRjF_FHU.js";import{I as z,c as j}from"./Icon-D7PltpT4.js";const je={xl:{container:"gap-3 p-4 min-h-14",input:"text-base",label:"text-base"},l:{container:"gap-2 p-3 min-h-12",input:"text-base",label:"text-sm"},m:{container:"gap-2 p-2 min-h-9",input:"text-sm",label:"text-sm"},s:{container:"gap-1 px-2 py-1 min-h-7",input:"text-sm",label:"text-sm"},xs:{container:"gap-1 px-2 py-1 min-h-6",input:"text-xs",label:"text-xs"}},t=({size:a="m",status:ie,align:ce="fill",placeholder:de="Placeholder text",value:r,onChange:l,showLabel:pe=!1,label:ue="Label",showLeftIcon:me=!1,showRightIcon:he=!1,leftIcon:xe,rightIcon:ge,className:fe="",disabled:f=!1})=>{const[be,w]=L.useState(""),[ve,y]=L.useState(!1),b=r!==void 0?r:be,we=(ie||(ve?"active":b?"populated":"empty"))==="active",ye=ze=>{const S=ze.target.value;r===void 0&&w(S),l==null||l(S)},Se=()=>{r===void 0&&w(""),l==null||l("")},v=je[a],Le=ce==="fill"?"w-full":"w-auto";return e.jsxs("div",{className:`flex flex-col gap-2 ${Le} ${fe}`,children:[pe&&e.jsx("label",{className:`font-semibold text-foreground ${v.label}`,children:ue}),e.jsxs("div",{className:`
          flex items-center bg-white rounded overflow-hidden
          border transition-colors
          ${v.container}
          ${we?"border-primary":"border-input-border"}
          ${f?"opacity-50 cursor-not-allowed":""}
        `,children:[me&&e.jsx("span",{className:"shrink-0 text-foreground",children:xe||e.jsx(z,{name:"search",className:"size-6",color:j.textPrimary})}),e.jsx("input",{type:"text",value:b,onChange:ye,onFocus:()=>y(!0),onBlur:()=>y(!1),placeholder:de,disabled:f,className:`
            flex-1 bg-transparent outline-none font-normal
            text-foreground placeholder:text-subtle
            ${v.input}
            ${f?"cursor-not-allowed":""}
          `}),he&&b&&e.jsx("button",{type:"button",onClick:Se,className:"shrink-0 text-foreground hover:text-subtle transition-colors",children:ge||e.jsx(z,{name:"x",className:"size-6",color:j.textPrimary})})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the input",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'populated' | 'active'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'active'"}]},description:"The current status"},align:{required:!1,tsType:{name:"union",raw:"'fill' | 'hug'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'hug'"}]},description:"Width behavior",defaultValue:{value:"'fill'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show external label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Show right icon",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const Re={title:"Components/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the input"},status:{control:"select",options:["empty","populated","active"],description:"The current status of the input"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},showRightIcon:{control:"boolean",description:"Show right icon (clear button)"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"}}},s={args:{size:"m",placeholder:"Enter text...",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},o={args:{size:"m",placeholder:"Enter your email",showLabel:!0,label:"Email Address",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},n={args:{size:"m",placeholder:"Search...",showLeftIcon:!0,showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},i={args:{size:"m",placeholder:"Enter text...",value:"Some content",status:"populated",showRightIcon:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},c={args:{size:"m",placeholder:"Enter text...",status:"active",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},d={args:{size:"m",placeholder:"Disabled input",disabled:!0,align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},p={args:{size:"xl",placeholder:"Extra Large Input",showLabel:!0,label:"Extra Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},u={args:{size:"l",placeholder:"Large Input",showLabel:!0,label:"Large",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},m={args:{size:"m",placeholder:"Medium Input",showLabel:!0,label:"Medium",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},h={args:{size:"s",placeholder:"Small Input",showLabel:!0,label:"Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},x={args:{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"Extra Small",align:"fill"},decorators:[a=>e.jsx("div",{style:{width:"360px"},children:e.jsx(a,{})})]},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL"}),e.jsx(t,{size:"l",placeholder:"Large",showLabel:!0,label:"L"}),e.jsx(t,{size:"m",placeholder:"Medium",showLabel:!0,label:"M"}),e.jsx(t,{size:"s",placeholder:"Small",showLabel:!0,label:"S"}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS"})]})};var I,E,T;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var N,R,q;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var M,V,A;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(V=n.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var D,P,$;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var W,C,X;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(C=c.parameters)==null?void 0:C.docs)==null?void 0:X.source}}};var _,k,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var B,O,G;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(le=x.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,oe,ne;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const qe=["Default","WithLabel","WithSearchIcon","Populated","Active","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes"];export{c as Active,g as AllSizes,s as Default,d as Disabled,p as ExtraLarge,x as ExtraSmall,u as Large,m as Medium,i as Populated,h as Small,o as WithLabel,n as WithSearchIcon,qe as __namedExportsOrder,Re as default};
