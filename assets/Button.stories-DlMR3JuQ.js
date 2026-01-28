import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as B}from"./Check-D1-gLYxc.js";import{C as Ne}from"./ChevronDown-C78wlgpO.js";import"./index-DRjF_FHU.js";const Ce={xl:"gap-3 p-6 text-lg",l:"gap-2 p-4 text-base",m:"gap-2 px-4 py-3 h-10 text-sm",s:"gap-1 px-3 py-2 h-8 text-xs",xs:"gap-1 px-2 py-1 h-6 text-xxs"},Te={xl:"size-16 p-4",l:"size-14 p-4",m:"size-10 p-3",s:"size-8 p-2",xs:"size-6 p-2"},De={primary:"bg-primary text-text-negative hover:bg-primary-dark",secondary:"bg-secondary text-text-button hover:bg-secondary-dark",outline:"border border-primary text-text-button bg-transparent hover:bg-secondary/30",ghost:"text-text-button bg-transparent hover:bg-secondary/30",destructive:"bg-destructive text-text-negative hover:bg-destructive/90",disabled:"bg-secondary text-text-button-disabled cursor-not-allowed",icon:"bg-transparent text-text-button hover:bg-secondary/30"},r=({children:xe="Button",variant:a="primary",size:b="m",showLeftIcon:fe=!1,showRightIcon:ze=!1,leftIcon:S,rightIcon:be,onClick:Se,className:Be="",disabled:je=!1})=>{const t=a==="icon",Ie=a==="disabled"||je,z=["primary","destructive"].includes(a)?"#f7f6ff":"#5e49d6",we="inline-flex items-center justify-center rounded font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",Re=t?Te[b]:Ce[b],Le=De[a];return e.jsxs("button",{className:`${we} ${Re} ${Le} ${Be}`,onClick:Se,disabled:Ie,type:"button",children:[fe&&!t&&(S||e.jsx(B,{className:"size-5",color:z})),t?S||e.jsx(B,{className:"size-6",color:z}):e.jsx("span",{children:xe}),ze&&!t&&(be||e.jsx(Ne,{className:"size-5",color:z}))]})};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display in the button",defaultValue:{value:"'Button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'disabled' | 'icon'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'icon'"}]},description:"The visual style variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the button",defaultValue:{value:"'m'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Show right icon",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const Ve={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","destructive","disabled","icon"],description:"The visual style variant of the button"},size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the button"},showLeftIcon:{control:"boolean",description:"Show the left icon"},showRightIcon:{control:"boolean",description:"Show the right icon"},children:{control:"text",description:"Button label text"}}},s={args:{variant:"primary",size:"m",children:"Primary Button"}},n={args:{variant:"primary",size:"m",children:"With Icon",showLeftIcon:!0}},i={args:{variant:"primary",size:"m",children:"With Icon",showRightIcon:!0}},o={args:{variant:"secondary",size:"m",children:"Secondary Button"}},c={args:{variant:"outline",size:"m",children:"Outline Button"}},l={args:{variant:"ghost",size:"m",children:"Ghost Button"}},d={args:{variant:"destructive",size:"m",children:"Delete"}},m={args:{variant:"disabled",size:"m",children:"Disabled Button"}},u={args:{variant:"icon",size:"m"}},p={args:{variant:"primary",size:"xl",children:"Extra Large"}},h={args:{variant:"primary",size:"l",children:"Large"}},g={args:{variant:"primary",size:"m",children:"Medium"}},v={args:{variant:"primary",size:"s",children:"Small"}},y={args:{variant:"primary",size:"xs",children:"Extra Small"}},x={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",size:"m",children:"Primary"}),e.jsx(r,{variant:"secondary",size:"m",children:"Secondary"}),e.jsx(r,{variant:"outline",size:"m",children:"Outline"}),e.jsx(r,{variant:"ghost",size:"m",children:"Ghost"}),e.jsx(r,{variant:"destructive",size:"m",children:"Destructive"}),e.jsx(r,{variant:"disabled",size:"m",children:"Disabled"})]})})},f={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",size:"xs",children:"XS"}),e.jsx(r,{variant:"primary",size:"s",children:"Small"}),e.jsx(r,{variant:"primary",size:"m",children:"Medium"}),e.jsx(r,{variant:"primary",size:"l",children:"Large"}),e.jsx(r,{variant:"primary",size:"xl",children:"Extra Large"})]})};var j,I,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Primary Button'
  }
}`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var R,L,N;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    children: 'With Icon',
    showLeftIcon: true
  }
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var C,T,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    children: 'With Icon',
    showRightIcon: true
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,q,P;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'm',
    children: 'Secondary Button'
  }
}`,...(P=(q=o.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var O,V,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'm',
    children: 'Outline Button'
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var G,M,k;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'm',
    children: 'Ghost Button'
  }
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var A,_,$;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    size: 'm',
    children: 'Delete'
  }
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var X,F,H;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    size: 'm',
    children: 'Disabled Button'
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'm'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'xl',
    children: 'Extra Large'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'l',
    children: 'Large'
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Medium'
  }
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,oe,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 's',
    children: 'Small'
  }
}`,...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var le,de,me;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'xs',
    children: 'Extra Small'
  }
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,he;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary" size="m">Primary</Button>
        <Button variant="secondary" size="m">Secondary</Button>
        <Button variant="outline" size="m">Outline</Button>
        <Button variant="ghost" size="m">Ghost</Button>
        <Button variant="destructive" size="m">Destructive</Button>
        <Button variant="disabled" size="m">Disabled</Button>
      </div>
    </div>
}`,...(he=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,ve,ye;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button variant="primary" size="xs">XS</Button>
      <Button variant="primary" size="s">Small</Button>
      <Button variant="primary" size="m">Medium</Button>
      <Button variant="primary" size="l">Large</Button>
      <Button variant="primary" size="xl">Extra Large</Button>
    </div>
}`,...(ye=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const We=["Primary","PrimaryWithLeftIcon","PrimaryWithRightIcon","Secondary","Outline","Ghost","Destructive","Disabled","IconOnly","ExtraLarge","Large","Medium","Small","ExtraSmall","AllVariants","AllSizes"];export{f as AllSizes,x as AllVariants,d as Destructive,m as Disabled,p as ExtraLarge,y as ExtraSmall,l as Ghost,u as IconOnly,h as Large,g as Medium,c as Outline,s as Primary,n as PrimaryWithLeftIcon,i as PrimaryWithRightIcon,o as Secondary,v as Small,We as __namedExportsOrder,Ve as default};
