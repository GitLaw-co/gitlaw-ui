import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as t}from"./Input-Dee0s8Dr.js";import"./index-DRjF_FHU.js";import"./Icon-CHBhNP2K.js";const me={title:"Components/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the input"},status:{control:"select",options:["empty","populated","active"],description:"The current status of the input"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},showRightIcon:{control:"boolean",description:"Show right icon (clear button)"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"},context:{control:"select",options:["default","document-empty","document-filled"],description:"Context for document inputs - affects background color"}}},a={args:{size:"m",placeholder:"Enter text...",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},s={args:{size:"m",placeholder:"Enter your email",showLabel:!0,label:"Email Address",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},r={args:{size:"m",placeholder:"Search...",showLeftIcon:!0,showRightIcon:!0,align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},n={args:{size:"m",placeholder:"Enter text...",value:"Some content",status:"populated",showRightIcon:!0,align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},o={args:{size:"m",placeholder:"Enter text...",status:"active",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},i={args:{size:"m",placeholder:"Disabled input",disabled:!0,align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},c={args:{size:"xl",placeholder:"Extra Large Input",showLabel:!0,label:"Extra Large",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},d={args:{size:"l",placeholder:"Large Input",showLabel:!0,label:"Large",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},p={args:{size:"m",placeholder:"Medium Input",showLabel:!0,label:"Medium",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},u={args:{size:"s",placeholder:"Small Input",showLabel:!0,label:"Small",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},m={args:{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"Extra Small",align:"fill"},decorators:[l=>e.jsx("div",{style:{width:"360px"},children:e.jsx(l,{})})]},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL"}),e.jsx(t,{size:"l",placeholder:"Large",showLabel:!0,label:"L"}),e.jsx(t,{size:"m",placeholder:"Medium",showLabel:!0,label:"M"}),e.jsx(t,{size:"s",placeholder:"Small",showLabel:!0,label:"S"}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS"})]})},h={args:{size:"xs",placeholder:"Placeholder text",context:"document-empty",align:"hug"}},g={args:{size:"xs",placeholder:"Placeholder text",value:"Contents",context:"document-filled",align:"hug"}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Empty (yellow background - new input)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{size:"xs",placeholder:"Placeholder text",context:"document-empty",align:"hug"}),e.jsx(t,{size:"xs",placeholder:"Agreement date",context:"document-empty",align:"hug"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Filled (purple background - edited input)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{size:"xs",value:"Contents",context:"document-filled",align:"hug"}),e.jsx(t,{size:"xs",value:"March 27, 2026",context:"document-filled",align:"hug"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Full width variants"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{size:"xs",placeholder:"Empty full width",context:"document-empty",align:"fill"}),e.jsx(t,{size:"xs",value:"Filled full width",context:"document-filled",align:"fill"})]})]})]})};var f,v,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,y,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var L,j,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(j=r.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,N,D;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(N=n.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var M,P,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,C,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var k,W,X;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var T,_,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,B,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,V;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,le,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Placeholder text',
    context: 'document-empty',
    align: 'hug'
  }
}`,...(te=(le=h.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ae,se,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Placeholder text',
    value: 'Contents',
    context: 'document-filled',
    align: 'hug'
  }
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,oe,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <div>
        <p className="text-sm text-subtle mb-2">Empty (yellow background - new input)</p>
        <div className="flex flex-wrap gap-2">
          <Input size="xs" placeholder="Placeholder text" context="document-empty" align="hug" />
          <Input size="xs" placeholder="Agreement date" context="document-empty" align="hug" />
        </div>
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Filled (purple background - edited input)</p>
        <div className="flex flex-wrap gap-2">
          <Input size="xs" value="Contents" context="document-filled" align="hug" />
          <Input size="xs" value="March 27, 2026" context="document-filled" align="hug" />
        </div>
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Full width variants</p>
        <div className="flex flex-col gap-2">
          <Input size="xs" placeholder="Empty full width" context="document-empty" align="fill" />
          <Input size="xs" value="Filled full width" context="document-filled" align="fill" />
        </div>
      </div>
    </div>
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const xe=["Default","WithLabel","WithSearchIcon","Populated","Active","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes","DocumentEmpty","DocumentFilled","DocumentInputs"];export{o as Active,x as AllSizes,a as Default,i as Disabled,h as DocumentEmpty,g as DocumentFilled,b as DocumentInputs,c as ExtraLarge,m as ExtraSmall,d as Large,p as Medium,n as Populated,u as Small,s as WithLabel,r as WithSearchIcon,xe as __namedExportsOrder,me as default};
