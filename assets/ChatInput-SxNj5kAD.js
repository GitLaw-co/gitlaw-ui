import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{I as a,c as n}from"./colors-C61pH6SS.js";import{T as h}from"./Tooltip-BJTLr6Td.js";const _=[{id:"draft",label:"Draft",icon:"draft"},{id:"review",label:"Review",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}],D={draft:"Draft a new document",review:"Review a document",summarize:"Summarize a document"},J=["Draft a mutual NDA","Review my service contract","Summarize this agreement","Create a privacy policy","Help me with licensing terms"],B=({icon:i})=>{switch(i){case"draft":return e.jsx(a,{name:"file-plus",className:"size-4",color:n.iconPrimary});case"review":return e.jsx(a,{name:"file-search",className:"size-4",color:n.iconPrimary});case"summarize":return e.jsx(a,{name:"align-left",className:"size-4",color:n.iconPrimary});default:return null}},F=({status:i="active",size:$="l",placeholder:x,animatedPlaceholders:s=J,placeholderInterval:b=3e3,value:d="",showQuickActions:I=!0,quickActions:S=_,onChange:m,onSubmit:C,onQuickActionClick:p,onAttachmentClick:R,onSettingsClick:V,onStopClick:P,className:w="",fullWidth:j=!1,showSettingsDropdown:l=!1,settingsDropdownContent:N,settingsDropdownPosition:o="top",onSettingsDropdownClose:u})=>{const O=i==="working",f=i==="populated"||d.length>0,c=$==="l",v=r.useRef(null),[G,k]=r.useState(!1),[E,Q]=r.useState(0),[L,T]=r.useState(!1);r.useEffect(()=>{if(!l)return;const t=y=>{v.current&&!v.current.contains(y.target)&&(k(!0),setTimeout(()=>k(!1),150),u==null||u())};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[l,u]);const g=!x&&s.length>0,H=g?s[E]:x||"Draft a mutual NDA";r.useEffect(()=>{if(!g||f)return;const t=setInterval(()=>{T(!0),setTimeout(()=>{Q(y=>(y+1)%s.length),T(!1)},200)},b);return()=>clearInterval(t)},[g,f,s.length,b]);const q=c?"p-6":"p-4",W=c?"gap-6":"gap-4",z=c?"rounded-xl":"rounded-lg",A=c?"text-lg":"text-base";return O?e.jsx("div",{className:`
          bg-white border border-border ${z}
          shadow-card
          flex flex-col ${q}
          w-full ${j?"":"max-w-[624px]"}
          ${w}
        `,children:e.jsxs("div",{className:"flex items-center gap-2.5 p-4",children:[e.jsx("p",{className:"text-lg font-normal text-primary leading-[1.4]",children:"Working on your request..."}),e.jsx("button",{type:"button",onClick:P,className:"ml-auto p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(a,{name:"square",className:"size-6",color:n.iconPrimary})})]})}):e.jsxs("div",{className:`
        bg-white ${z}
        shadow-card
        flex flex-col ${W} ${q}
        w-full ${j?"":"max-w-[624px]"}
        ${w}
      `,children:[e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("input",{type:"text",value:d,onChange:t=>m==null?void 0:m(t.target.value),placeholder:"",className:`
              w-full ${A} font-normal leading-[1.4]
              text-foreground
              bg-transparent outline-none
            `}),!d&&e.jsx("span",{className:`
                absolute left-0 top-1/2 -translate-y-1/2
                ${A} font-normal leading-[1.4]
                text-purple-300 pointer-events-none
                transition-opacity duration-200 ease-in-out
                ${L?"opacity-0":"opacity-100"}
              `,children:H})]}),f&&e.jsx("button",{type:"button",onClick:C,className:`
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            `,children:e.jsx(a,{name:"arrow-up",className:"size-6",color:n.iconNegative})})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(h,{content:"Add a file",type:"purple",position:"bottom",size:"s",children:e.jsx("button",{type:"button",onClick:R,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(a,{name:"paperclip",className:"size-6",color:n.iconPrimary})})}),e.jsxs("div",{className:"relative",ref:v,children:[e.jsx(h,{content:"Jurisdiction and settings",type:"purple",position:"bottom",size:"s",disabled:l,children:e.jsx("button",{type:"button",onClick:V,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(a,{name:"settings-2",className:"size-6",color:n.iconPrimary})})}),N&&e.jsx("div",{className:`
                  absolute z-10 transition-opacity duration-100
                  ${l?"opacity-100":"opacity-0 pointer-events-none"}
                  ${o==="top"?"bottom-full mb-2 left-1/2 -translate-x-1/2":""}
                  ${o==="bottom"?"top-full mt-2 left-1/2 -translate-x-1/2":""}
                  ${o==="left"?"right-full mr-2 top-1/2 -translate-y-1/2":""}
                  ${o==="right"?"left-full ml-2 top-1/2 -translate-y-1/2":""}
                `,children:N})]})]}),I&&e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:S.map(t=>e.jsx(h,{content:D[t.icon]||t.label,type:"purple",position:"bottom",size:"s",children:e.jsxs("button",{type:"button",onClick:()=>p==null?void 0:p(t),className:`
                    bg-secondary hover:bg-secondary-hover
                    flex items-center gap-1 h-8 px-3 py-2 rounded
                    text-xs font-normal text-foreground-button leading-[1.4]
                    transition-colors
                  `,children:[e.jsx(B,{icon:t.icon}),e.jsx("span",{children:t.label})]})},t.id))})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{status:{required:!1,tsType:{name:"union",raw:'"active" | "populated" | "working"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"populated"'},{name:"literal",value:'"working"'}]},description:"Input status",defaultValue:{value:'"active"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"l" | "m"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'}]},description:"Input size",defaultValue:{value:'"l"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text (used if animatedPlaceholders is not provided)"},animatedPlaceholders:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of placeholders to rotate through with animation",defaultValue:{value:`[
  "Draft a mutual NDA",
  "Review my service contract",
  "Summarize this agreement",
  "Create a privacy policy",
  "Help me with licensing terms",
]`,computed:!1}},placeholderInterval:{required:!1,tsType:{name:"number"},description:"Interval in ms between placeholder rotations (default: 3000)",defaultValue:{value:"3000",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:'""',computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"Show quick actions",defaultValue:{value:"true",computed:!1}},quickActions:{required:!1,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Quick action items",defaultValue:{value:`[
  { id: "draft", label: "Draft", icon: "draft" },
  { id: "review", label: "Review", icon: "review" },
  { id: "summarize", label: "Summarize", icon: "summarize" },
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"On value change"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On submit"},onQuickActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: QuickAction) => void",signature:{arguments:[{type:{name:"QuickAction"},name:"action"}],return:{name:"void"}}},description:"On quick action click"},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On attachment click"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On settings click"},onStopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On stop click (when working)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Allow input to fill full container width",defaultValue:{value:"false",computed:!1}},showSettingsDropdown:{required:!1,tsType:{name:"boolean"},description:"Show settings dropdown",defaultValue:{value:"false",computed:!1}},settingsDropdownContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Settings dropdown content"},settingsDropdownPosition:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Settings dropdown position",defaultValue:{value:'"top"',computed:!1}},onSettingsDropdownClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when clicking outside the dropdown to close it"}}};export{F as C};
