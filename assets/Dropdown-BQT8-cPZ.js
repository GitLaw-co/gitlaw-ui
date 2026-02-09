import{j as s}from"./jsx-runtime-DiklIkkE.js";import{I as n}from"./Icon-CfPs8lnx.js";import{c as t}from"./colors-CUQOl70L.js";const c=({items:r,heading:a,showIcons:l=!0,isOpen:o,className:i=""})=>{const d=o!==void 0?`transition-[opacity,transform] duration-fast ease-gitlaw origin-top ${o?"opacity-100 scale-y-100":"opacity-0 scale-y-95 pointer-events-none"}`:"";return s.jsxs("div",{className:`
        w-[220px] max-w-[360px] p-2 rounded-lg
        bg-card shadow-card
        flex flex-col gap-px
        ${d}
        ${i}
      `,style:{width:"max-content",minWidth:"220px",maxWidth:"360px"},children:[a&&s.jsx("div",{className:"px-3 py-2 text-base font-semibold text-foreground",children:a}),r.map(e=>s.jsxs("button",{onClick:e.onClick,disabled:e.disabled,className:`
            w-full px-3 py-3 rounded-none
            flex items-center gap-2 text-left
            transition-colors duration-fast ease-gitlaw
            ${e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-secondary/30 cursor-pointer"}
            ${e.selected?"bg-secondary/20":""}
          `,children:[l&&e.icon&&s.jsx(n,{name:e.icon,className:"size-5",color:t.iconBlack}),s.jsxs("div",{className:"flex flex-col flex-1",children:[s.jsx("span",{className:"text-base text-foreground",children:e.label}),e.secondaryLabel&&s.jsx("span",{className:"text-sm text-subtle",children:e.secondaryLabel})]}),e.selected&&s.jsx(n,{name:"check",className:"size-5",color:t.iconBlack})]},e.id))]})};c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:"List of dropdown items"},heading:{required:!1,tsType:{name:"string"},description:"Optional heading text"},showIcons:{required:!1,tsType:{name:"boolean"},description:"Whether to show icons",defaultValue:{value:"true",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is open (enables fade+scale animation)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};export{c as D};
