import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as N}from"./index-DRjF_FHU.js";import{I as Ae}from"./Icon-CCFihSvx.js";import{c as qe}from"./colors-CkkS3ZSj.js";const $e={xl:{container:"p-4 min-h-24",text:"text-base",secondaryText:"text-xs"},l:{container:"p-3 min-h-20",text:"text-sm",secondaryText:"text-xxs"},m:{container:"p-2 min-h-20",text:"text-sm",secondaryText:"text-xxs"},s:{container:"p-2 min-h-16",text:"text-sm",secondaryText:"text-xxs"},xs:{container:"px-2 py-1 min-h-16",text:"text-xs",secondaryText:"text-xxs"}},Ce={xl:"top-4 right-4",l:"top-3 right-3",m:"top-2 right-2",s:"top-2 right-2",xs:"top-1 right-2"},t=({size:y="m",status:ge,placeholder:f="Placeholder text",value:g,onChange:v,showStroke:ve=!0,showIcon:ze=!1,icon:ke,className:ye="",disabled:z=!1,rows:be=3})=>{const[Te,je]=N.useState(""),[Ne,b]=N.useState(!1),T=g!==void 0?g:Te,k=ge||(Ne?"active":T?"populated":"empty"),Ie=k==="active",Pe=k==="empty",Ee=Le=>{const j=Le.target.value;g===void 0&&je(j),v==null||v(j)},s=$e[y],Fe=Ce[y];return e.jsxs("div",{className:`
        relative flex items-start bg-white rounded overflow-hidden w-[369px]
        ${s.container}
        ${z?"opacity-50 cursor-not-allowed":""}
        ${ye}
      `,children:[ve&&e.jsx("div",{className:`
            absolute inset-0 border rounded pointer-events-none
            ${Ie?"border-primary":"border-input-border"}
          `}),e.jsx("div",{className:"flex flex-col flex-1 min-h-px min-w-px relative",children:Pe?e.jsx("p",{className:`font-normal text-text-secondary leading-[1.4] ${s.text}`,children:f}):e.jsxs(e.Fragment,{children:[e.jsx("textarea",{value:T,onChange:Ee,onFocus:()=>b(!0),onBlur:()=>b(!1),placeholder:f,disabled:z,rows:be,className:`
                flex-1 bg-transparent outline-none font-normal resize-none
                text-text-primary placeholder:text-text-secondary leading-[1.4]
                ${s.text}
                ${z?"cursor-not-allowed":""}
              `}),k==="populated"&&e.jsx("p",{className:`font-normal text-text-secondary leading-[1.4] ${s.secondaryText}`,children:f})]})}),ze&&e.jsx("div",{className:`absolute ${Fe}`,children:ke||e.jsx(Ae,{name:"sparkles",className:"size-6",color:qe.iconPrimary})})]})};t.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the text field",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'populated' | 'active'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'active'"}]},description:"The current status"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder text'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"true",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in top right",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of rows",defaultValue:{value:"3",computed:!1}}}};const Re={title:"Components/TextField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the text field"},status:{control:"select",options:["empty","populated","active"],description:"The current status"},showStroke:{control:"boolean",description:"Show border stroke"},showIcon:{control:"boolean",description:"Show icon in top right"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},rows:{control:"number",description:"Number of rows"}}},r={args:{size:"m",placeholder:"Placeholder text",showStroke:!0}},o={args:{size:"m",status:"empty",placeholder:"Enter your text here...",showStroke:!0}},a={args:{size:"m",status:"populated",value:"This is some content that has been entered into the text field.",placeholder:"Placeholder text",showStroke:!0}},l={args:{size:"m",status:"active",value:"Currently typing...",placeholder:"Placeholder text",showStroke:!0}},n={args:{size:"m",placeholder:"AI-assisted text field",showStroke:!0,showIcon:!0}},i={args:{size:"m",placeholder:"No border",showStroke:!1}},c={args:{size:"m",placeholder:"Disabled text field",disabled:!0,showStroke:!0}},d={args:{size:"xl",placeholder:"Extra Large text field",showStroke:!0}},p={args:{size:"l",placeholder:"Large text field",showStroke:!0}},m={args:{size:"m",placeholder:"Medium text field",showStroke:!0}},u={args:{size:"s",placeholder:"Small text field",showStroke:!0}},h={args:{size:"xs",placeholder:"Extra Small text field",showStroke:!0}},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showStroke:!0}),e.jsx(t,{size:"l",placeholder:"Large",showStroke:!0}),e.jsx(t,{size:"m",placeholder:"Medium",showStroke:!0}),e.jsx(t,{size:"s",placeholder:"Small",showStroke:!0}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showStroke:!0})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Empty"}),e.jsx(t,{size:"m",status:"empty",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Populated"}),e.jsx(t,{size:"m",status:"populated",value:"Some content here",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:"Active"}),e.jsx(t,{size:"m",status:"active",value:"Typing...",placeholder:"Placeholder text",showStroke:!0})]})]})},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{size:"xl",placeholder:"XL with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"l",placeholder:"L with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"m",placeholder:"M with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"s",placeholder:"S with icon",showStroke:!0,showIcon:!0}),e.jsx(t,{size:"xs",placeholder:"XS with icon",showStroke:!0,showIcon:!0})]})};var I,P,E;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(E=(P=r.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var F,L,A;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'empty',
    placeholder: 'Enter your text here...',
    showStroke: true
  }
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var q,$,C;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'populated',
    value: 'This is some content that has been entered into the text field.',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var D,M,V;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'active',
    value: 'Currently typing...',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,R,X;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'AI-assisted text field',
    showStroke: true,
    showIcon: true
  }
}`,...(X=(R=n.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var _,B,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'No border',
    showStroke: false
  }
}`,...(O=(B=i.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var G,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Disabled text field',
    disabled: true,
    showStroke: true
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    placeholder: 'Extra Large text field',
    showStroke: true
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'l',
    placeholder: 'Large text field',
    showStroke: true
  }
}`,...(ee=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,re;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Medium text field',
    showStroke: true
  }
}`,...(re=(se=m.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ae,le;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: 's',
    placeholder: 'Small text field',
    showStroke: true
  }
}`,...(le=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ne,ie,ce;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Extra Small text field',
    showStroke: true
  }
}`,...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="Extra Large" showStroke />
      <TextField size="l" placeholder="Large" showStroke />
      <TextField size="m" placeholder="Medium" showStroke />
      <TextField size="s" placeholder="Small" showStroke />
      <TextField size="xs" placeholder="Extra Small" showStroke />
    </div>
}`,...(me=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,he,xe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Se,we,fe;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="XL with icon" showStroke showIcon />
      <TextField size="l" placeholder="L with icon" showStroke showIcon />
      <TextField size="m" placeholder="M with icon" showStroke showIcon />
      <TextField size="s" placeholder="S with icon" showStroke showIcon />
      <TextField size="xs" placeholder="XS with icon" showStroke showIcon />
    </div>
}`,...(fe=(we=w.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};const Xe=["Default","Empty","Populated","Active","WithIcon","WithoutStroke","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes","AllStates","WithIconShowcase"];export{l as Active,x as AllSizes,S as AllStates,r as Default,c as Disabled,o as Empty,d as ExtraLarge,h as ExtraSmall,p as Large,m as Medium,a as Populated,u as Small,n as WithIcon,w as WithIconShowcase,i as WithoutStroke,Xe as __namedExportsOrder,Re as default};
