import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as I}from"./index-DRjF_FHU.js";const ve=({className:s="size-6",color:g="currentColor"})=>e.jsxs("svg",{className:s,viewBox:"0 0 24 24",fill:"none",stroke:g,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}),e.jsx("path",{d:"M5 3v4"}),e.jsx("path",{d:"M19 17v4"}),e.jsx("path",{d:"M3 5h4"}),e.jsx("path",{d:"M17 19h4"})]});ve.__docgenInfo={description:"",methods:[],displayName:"Sparkles",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const Ae={xl:{container:"p-4 min-h-24",text:"text-base",secondaryText:"text-xs"},l:{container:"p-3 min-h-20",text:"text-sm",secondaryText:"text-xxs"},m:{container:"p-2 min-h-20",text:"text-sm",secondaryText:"text-xxs"},s:{container:"p-2 min-h-16",text:"text-sm",secondaryText:"text-xxs"},xs:{container:"px-2 py-1 min-h-16",text:"text-xs",secondaryText:"text-xxs"}},Me={xl:"top-4 right-4",l:"top-3 right-3",m:"top-2 right-2",s:"top-2 right-2",xs:"top-1 right-2"},t=({size:s="m",status:g,placeholder:v="Placeholder text",value:k,onChange:z,showStroke:ke=!0,showIcon:ze=!1,icon:ye,className:be="",disabled:y=!1,rows:Te=3})=>{const[je,Ne]=I.useState(""),[Ie,T]=I.useState(!1),j=k!==void 0?k:je,b=g||(Ie?"active":j?"populated":"empty"),Ee=b==="active",Le=b==="empty",Pe=qe=>{const N=qe.target.value;k===void 0&&Ne(N),z==null||z(N)},r=Ae[s],Fe=Me[s];return e.jsxs("div",{className:`
        relative flex items-start bg-white rounded overflow-hidden w-[369px]
        ${r.container}
        ${y?"opacity-50 cursor-not-allowed":""}
        ${be}
      `,children:[ke&&e.jsx("div",{className:`
            absolute inset-0 border rounded pointer-events-none
            ${Ee?"border-primary":"border-input-border"}
          `}),e.jsx("div",{className:"flex flex-col flex-1 min-h-px min-w-px relative",children:Le?e.jsx("p",{className:`font-normal text-text-secondary leading-[1.4] ${r.text}`,children:v}):e.jsxs(e.Fragment,{children:[e.jsx("textarea",{value:j,onChange:Pe,onFocus:()=>T(!0),onBlur:()=>T(!1),placeholder:v,disabled:y,rows:Te,className:`
                flex-1 bg-transparent outline-none font-normal resize-none
                text-text-primary placeholder:text-text-secondary leading-[1.4]
                ${r.text}
                ${y?"cursor-not-allowed":""}
              `}),b==="populated"&&e.jsx("p",{className:`font-normal text-text-secondary leading-[1.4] ${r.secondaryText}`,children:v})]})}),ze&&e.jsx("div",{className:`absolute ${Fe}`,children:ye||e.jsx(ve,{className:"size-6",color:"#5e49d6"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the text field",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'populated' | 'active'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'active'"}]},description:"The current status"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"true",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in top right",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of rows",defaultValue:{value:"3",computed:!1}}}};const $e={title:"Components/TextField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the text field"},status:{control:"select",options:["empty","populated","active"],description:"The current status"},showStroke:{control:"boolean",description:"Show border stroke"},showIcon:{control:"boolean",description:"Show icon in top right"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},rows:{control:"number",description:"Number of rows"}}},o={args:{size:"m",placeholder:"Placeholder text",showStroke:!0}},a={args:{size:"m",status:"empty",placeholder:"Enter your text here...",showStroke:!0}},l={args:{size:"m",status:"populated",value:"This is some content that has been entered into the text field.",placeholder:"Placeholder text",showStroke:!0}},n={args:{size:"m",status:"active",value:"Currently typing...",placeholder:"Placeholder text",showStroke:!0}},i={args:{size:"m",placeholder:"AI-assisted text field",showStroke:!0,showIcon:!0}},c={args:{size:"m",placeholder:"No border",showStroke:!1}},d={args:{size:"m",placeholder:"Disabled text field",disabled:!0,showStroke:!0}},p={args:{size:"xl",placeholder:"Extra Large text field",showStroke:!0}},u={args:{size:"l",placeholder:"Large text field",showStroke:!0}},m={args:{size:"m",placeholder:"Medium text field",showStroke:!0}},h={args:{size:"s",placeholder:"Small text field",showStroke:!0}},x={args:{size:"xs",placeholder:"Extra Small text field",showStroke:!0}},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showStroke:!0}),e.jsx(t,{size:"l",placeholder:"Large",showStroke:!0}),e.jsx(t,{size:"m",placeholder:"Medium",showStroke:!0}),e.jsx(t,{size:"s",placeholder:"Small",showStroke:!0}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showStroke:!0})]})},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Empty"}),e.jsx(t,{size:"m",status:"empty",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Populated"}),e.jsx(t,{size:"m",status:"populated",value:"Some content here",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Active"}),e.jsx(t,{size:"m",status:"active",value:"Typing...",placeholder:"Placeholder text",showStroke:!0})]})]})},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{size:"xl",placeholder:"XL with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"l",placeholder:"L with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"m",placeholder:"M with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"s",placeholder:"S with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"xs",placeholder:"XS with icon",showStroke:!0,showIcon:!0})]})};var E,L,P;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(P=(L=o.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var F,q,A;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'empty',
    placeholder: 'Enter your text here...',
    showStroke: true
  }
}`,...(A=(q=a.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,C,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'populated',
    value: 'This is some content that has been entered into the text field.',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var $,D,W;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'active',
    value: 'Currently typing...',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,R,X;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'AI-assisted text field',
    showStroke: true,
    showIcon: true
  }
}`,...(X=(R=i.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var B,O,Z;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'No border',
    showStroke: false
  }
}`,...(Z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Disabled text field',
    disabled: true,
    showStroke: true
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    placeholder: 'Extra Large text field',
    showStroke: true
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,ee,te;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'l',
    placeholder: 'Large text field',
    showStroke: true
  }
}`,...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,re,oe;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Medium text field',
    showStroke: true
  }
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,le,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 's',
    placeholder: 'Small text field',
    showStroke: true
  }
}`,...(ne=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,ce,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Extra Small text field',
    showStroke: true
  }
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="Extra Large" showStroke />
      <TextField size="l" placeholder="Large" showStroke />
      <TextField size="m" placeholder="Medium" showStroke />
      <TextField size="s" placeholder="Small" showStroke />
      <TextField size="xs" placeholder="Extra Small" showStroke />
    </div>
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,xe,Se;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold mb-2">Empty</p>
        <TextField size="m" status="empty" placeholder="Placeholder text" showStroke />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Populated</p>
        <TextField size="m" status="populated" value="Some content here" placeholder="Placeholder text" showStroke />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Active</p>
        <TextField size="m" status="active" value="Typing..." placeholder="Placeholder text" showStroke />
      </div>
    </div>
}`,...(Se=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var fe,we,ge;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="XL with icon" showStroke showIcon />
      <TextField size="l" placeholder="L with icon" showStroke showIcon />
      <TextField size="m" placeholder="M with icon" showStroke showIcon />
      <TextField size="s" placeholder="S with icon" showStroke showIcon />
      <TextField size="xs" placeholder="XS with icon" showStroke showIcon />
    </div>
}`,...(ge=(we=w.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};const De=["Default","Empty","Populated","Active","WithIcon","WithoutStroke","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes","AllStates","WithIconShowcase"];export{n as Active,S as AllSizes,f as AllStates,o as Default,d as Disabled,a as Empty,p as ExtraLarge,x as ExtraSmall,u as Large,m as Medium,l as Populated,h as Small,i as WithIcon,w as WithIconShowcase,c as WithoutStroke,De as __namedExportsOrder,$e as default};
