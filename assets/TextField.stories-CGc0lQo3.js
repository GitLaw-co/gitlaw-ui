import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{I as A}from"./Icon-CfPs8lnx.js";import{c as D}from"./colors-CUQOl70L.js";const C={xl:{container:"p-4 min-h-24",text:"text-base",secondaryText:"text-xs"},l:{container:"p-3 min-h-20",text:"text-sm",secondaryText:"text-xxs"},m:{container:"p-2 min-h-20",text:"text-sm",secondaryText:"text-xxs"},s:{container:"p-2 min-h-16",text:"text-sm",secondaryText:"text-xxs"},xs:{container:"px-2 py-1 min-h-16",text:"text-xs",secondaryText:"text-xxs"}},R={xl:"top-4 right-4",l:"top-3 right-3",m:"top-2 right-2",s:"top-2 right-2",xs:"top-1 right-2"},t=({size:c="m",status:w,placeholder:o="Placeholder text",value:r,onChange:i,showStroke:S=!0,showIcon:j=!1,icon:N,className:T="",disabled:n=!1,rows:z=3})=>{const[k,F]=u.useState(""),[P,x]=u.useState(!1),m=r!==void 0?r:k,d=w||(P?"active":m?"populated":"empty"),I=d==="active",q=d==="empty",E=$=>{const p=$.target.value;r===void 0&&F(p),i==null||i(p)},s=C[c],V=R[c];return e.jsxs("div",{className:`
        relative flex items-start bg-white rounded overflow-hidden w-[369px]
        ${s.container}
        ${n?"opacity-50 cursor-not-allowed":""}
        ${T}
      `,children:[S&&e.jsx("div",{className:`
            absolute inset-0 border rounded pointer-events-none
            ${I?"border-primary":"border-input-border"}
          `}),e.jsx("div",{className:"flex flex-col flex-1 min-h-px min-w-px relative",children:q?e.jsx("p",{className:`font-normal text-subtle leading-[1.4] ${s.text}`,children:o}):e.jsxs(e.Fragment,{children:[e.jsx("textarea",{value:m,onChange:E,onFocus:()=>x(!0),onBlur:()=>x(!1),placeholder:o,disabled:n,rows:z,className:`
                flex-1 bg-transparent outline-none font-normal resize-none
                text-foreground placeholder:text-subtle leading-[1.4]
                ${s.text}
                ${n?"cursor-not-allowed":""}
              `}),d==="populated"&&e.jsx("p",{className:`font-normal text-subtle leading-[1.4] ${s.secondaryText}`,children:o})]})}),j&&e.jsx("div",{className:`absolute ${V}`,children:N||e.jsx(A,{name:"sparkles",className:"size-6",color:D.iconPrimary})})]})};t.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'}]},description:"The size of the text field",defaultValue:{value:'"m"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"empty" | "populated" | "active"',elements:[{name:"literal",value:'"empty"'},{name:"literal",value:'"populated"'},{name:"literal",value:'"active"'}]},description:"The current status"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:'"Placeholder text"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"true",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in top right",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of rows",defaultValue:{value:"3",computed:!1}}}};const B={title:"Components/Form/TextField",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the text field"},status:{control:"select",options:["empty","populated","active"],description:"The current status"},showStroke:{control:"boolean",description:"Show border stroke"},showIcon:{control:"boolean",description:"Show icon in top right"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},rows:{control:"number",description:"Number of rows"}}},a={args:{size:"m",placeholder:"Placeholder text",showStroke:!0}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-4",children:"Sizes"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{size:"xl",placeholder:"Extra Large",showStroke:!0}),e.jsx(t,{size:"l",placeholder:"Large",showStroke:!0}),e.jsx(t,{size:"m",placeholder:"Medium",showStroke:!0}),e.jsx(t,{size:"s",placeholder:"Small",showStroke:!0}),e.jsx(t,{size:"xs",placeholder:"Extra Small",showStroke:!0})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Empty"}),e.jsx(t,{size:"m",status:"empty",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Populated"}),e.jsx(t,{size:"m",status:"populated",value:"Some content here",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Active"}),e.jsx(t,{size:"m",status:"active",value:"Typing...",placeholder:"Placeholder text",showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Disabled"}),e.jsx(t,{size:"m",placeholder:"Disabled text field",disabled:!0,showStroke:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Without Stroke"}),e.jsx(t,{size:"m",placeholder:"No border",showStroke:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"With Icon"}),e.jsx(t,{size:"m",placeholder:"AI-assisted text field",showStroke:!0,showIcon:!0})]})]})]})]})};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Placeholder text',
    showStroke: true
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,b,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold mb-4">Sizes</p>
        <div className="flex flex-col gap-4">
          <TextField size="xl" placeholder="Extra Large" showStroke />
          <TextField size="l" placeholder="Large" showStroke />
          <TextField size="m" placeholder="Medium" showStroke />
          <TextField size="s" placeholder="Small" showStroke />
          <TextField size="xs" placeholder="Extra Small" showStroke />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold mb-4">States</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Empty</p>
            <TextField size="m" status="empty" placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Populated</p>
            <TextField size="m" status="populated" value="Some content here" placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Active</p>
            <TextField size="m" status="active" value="Typing..." placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Disabled</p>
            <TextField size="m" placeholder="Disabled text field" disabled showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Without Stroke</p>
            <TextField size="m" placeholder="No border" showStroke={false} />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">With Icon</p>
            <TextField size="m" placeholder="AI-assisted text field" showStroke showIcon />
          </div>
        </div>
      </div>
    </div>
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const O=["Default","AllVariants"];export{l as AllVariants,a as Default,O as __namedExportsOrder,B as default};
