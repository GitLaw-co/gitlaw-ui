import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{I as R}from"./Icon-CCFihSvx.js";const Xe={xl:{container:"gap-3 p-4 min-h-14",text:"text-base",label:"text-base",gap:"gap-2"},l:{container:"gap-2 p-3 min-h-12",text:"text-sm",label:"text-sm",gap:"gap-2"},m:{container:"gap-2 p-2 min-h-9",text:"text-sm",label:"text-sm",gap:"gap-1"},s:{container:"gap-1 px-2 py-1 min-h-7",text:"text-sm",label:"text-sm",gap:"gap-1"},xs:{container:"gap-1 px-2 py-1 min-h-6",text:"text-xs",label:"text-xs",gap:"gap-1"}},o=({size:t="m",status:ze,align:q="fill",labelPosition:y="top",placeholder:je="Select an option",value:w,options:L=[],onChange:z,showLabel:Oe=!1,label:Te="Label",showLeftIcon:Ee=!1,leftIcon:Ne,rightIcon:qe,className:$e="",disabled:$=!1})=>{const[Ce,Ie]=r.useState(""),[C,j]=r.useState(!1),O=r.useRef(null),T=w!==void 0?w:Ce,We=ze||(T?"default":"empty"),E=L.find(l=>l.value===T);r.useEffect(()=>{const l=De=>{O.current&&!O.current.contains(De.target)&&j(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const Re=l=>{w===void 0&&Ie(l),z==null||z(l),j(!1)},s=Xe[t],I=q==="fill"?"w-full":"w-auto",N=y==="left",Ve=We==="empty"?"text-text-secondary":"text-text-primary",W=()=>Oe?e.jsx("label",{className:`font-semibold text-text-primary ${s.label} ${N?"shrink-0":""}`,children:Te}):null,Me=()=>e.jsxs("div",{className:`
        flex items-center bg-white rounded overflow-hidden
        border border-input-border
        ${s.container}
        ${$?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${q==="fill"&&N?"flex-1":I}
      `,onClick:()=>!$&&j(!C),children:[e.jsxs("div",{className:`flex items-center flex-1 min-w-0 ${s.gap}`,children:[Ee&&e.jsx("span",{className:"shrink-0 text-text-primary",children:Ne||e.jsx(R,{name:"user",className:"size-6",color:"#1b1b1f"})}),e.jsx("span",{className:`flex-1 truncate font-normal ${s.text} ${Ve}`,children:(E==null?void 0:E.label)||je})]}),e.jsx("span",{className:"shrink-0 text-text-primary",children:qe||e.jsx(R,{name:"chevron-down",className:"size-6",color:"#1b1b1f"})})]});return e.jsxs("div",{ref:O,className:`
        relative flex rounded-lg
        ${N?`flex-row items-center ${s.gap}`:`flex-col ${s.gap}`}
        ${I}
        ${$e}
      `,children:[y==="top"&&W(),y==="left"&&W(),Me(),C&&L.length>0&&e.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white border border-input-border rounded shadow-lg z-50 max-h-60 overflow-auto",children:L.map(l=>e.jsx("div",{className:`
                px-3 py-2 cursor-pointer transition-colors
                ${s.text}
                ${l.value===T?"bg-secondary text-text-primary":"text-text-primary hover:bg-secondary/50"}
              `,onClick:()=>Re(l.value),children:l.label},l.value))})]})};o.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:"The size of the select",defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'empty' | 'default'",elements:[{name:"literal",value:"'empty'"},{name:"literal",value:"'default'"}]},description:"The current status"},align:{required:!1,tsType:{name:"union",raw:"'fill' | 'hug'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'hug'"}]},description:"Width behavior",defaultValue:{value:"'fill'",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"}]},description:"Label position",defaultValue:{value:"'top'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Select an option'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Options to select from",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show external label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const _e={title:"Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the select"},status:{control:"select",options:["empty","default"],description:"The current status"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},labelPosition:{control:"select",options:["top","left"],description:"Label position"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"}}},a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],n={args:{size:"m",placeholder:"Select an option",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},i={args:{size:"m",status:"empty",placeholder:"Select an option",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},c={args:{size:"m",value:"option1",status:"default",placeholder:"Select an option",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},p={args:{size:"m",placeholder:"Select an option",showLabel:!0,label:"Choose an option",labelPosition:"top",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},d={args:{size:"m",placeholder:"Select an option",showLabel:!0,label:"Label",labelPosition:"left",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},m={args:{size:"m",placeholder:"Select a user",showLeftIcon:!0,align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},u={args:{size:"m",placeholder:"Select an option",align:"hug",options:a}},h={args:{size:"m",placeholder:"Disabled select",disabled:!0,align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},x={args:{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL Select",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},f={args:{size:"l",placeholder:"Large",showLabel:!0,label:"L Select",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},g={args:{size:"m",placeholder:"Medium",showLabel:!0,label:"M Select",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},b={args:{size:"s",placeholder:"Small",showLabel:!0,label:"S Select",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},S={args:{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS Select",align:"fill",options:a},decorators:[t=>e.jsx("div",{style:{width:"340px"},children:e.jsx(t,{})})]},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[340px]",children:[e.jsx(o,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL",options:a}),e.jsx(o,{size:"l",placeholder:"Large",showLabel:!0,label:"L",options:a}),e.jsx(o,{size:"m",placeholder:"Medium",showLabel:!0,label:"M",options:a}),e.jsx(o,{size:"s",placeholder:"Small",showLabel:!0,label:"S",options:a}),e.jsx(o,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS",options:a})]})};var V,M,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(D=(M=n.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var X,k,P;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'm',
    status: 'empty',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var A,_,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'm',
    value: 'option1',
    status: 'default',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var B,F,G;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Select an option',
    showLabel: true,
    label: 'Choose an option',
    labelPosition: 'top',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Select an option',
    showLabel: true,
    label: 'Label',
    labelPosition: 'left',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Select a user',
    showLeftIcon: true,
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Select an option',
    align: 'hug',
    options: sampleOptions
  }
}`,...(ae=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,se,oe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Disabled select',
    disabled: true,
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(oe=(se=h.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ne,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    placeholder: 'Extra Large',
    showLabel: true,
    label: 'XL Select',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,pe,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: 'l',
    placeholder: 'Large',
    showLabel: true,
    label: 'L Select',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(de=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,he;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Medium',
    showLabel: true,
    label: 'M Select',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(he=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var xe,fe,ge;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    size: 's',
    placeholder: 'Small',
    showLabel: true,
    label: 'S Select',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(ge=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,Se,ve;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    placeholder: 'Extra Small',
    showLabel: true,
    label: 'XS Select',
    align: 'fill',
    options: sampleOptions
  },
  decorators: [Story => <div style={{
    width: '340px'
  }}>
        <Story />
      </div>]
}`,...(ve=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var ye,we,Le;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[340px]">
      <Select size="xl" placeholder="Extra Large" showLabel label="XL" options={sampleOptions} />
      <Select size="l" placeholder="Large" showLabel label="L" options={sampleOptions} />
      <Select size="m" placeholder="Medium" showLabel label="M" options={sampleOptions} />
      <Select size="s" placeholder="Small" showLabel label="S" options={sampleOptions} />
      <Select size="xs" placeholder="Extra Small" showLabel label="XS" options={sampleOptions} />
    </div>
}`,...(Le=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};const He=["Default","Empty","WithValue","WithLabelTop","WithLabelLeft","WithLeftIcon","HugWidth","Disabled","ExtraLarge","Large","Medium","Small","ExtraSmall","AllSizes"];export{v as AllSizes,n as Default,h as Disabled,i as Empty,x as ExtraLarge,S as ExtraSmall,u as HugWidth,f as Large,g as Medium,b as Small,d as WithLabelLeft,p as WithLabelTop,m as WithLeftIcon,c as WithValue,He as __namedExportsOrder,_e as default};
