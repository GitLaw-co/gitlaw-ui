import{j as i}from"./jsx-runtime-DiklIkkE.js";const o={s:{track:"w-8 h-4",thumb:"w-3.5 h-3"},m:{track:"w-10 h-5",thumb:"w-5 h-4"}},u=({checked:e=!1,size:r="m",onChange:a,disabled:s=!1,className:l=""})=>{const t=o[r],n=()=>{s||a==null||a(!e)};return i.jsx("button",{type:"button",role:"switch","aria-checked":e,disabled:s,onClick:n,className:`
        relative inline-flex items-center
        rounded-sm py-0.5
        transition-colors duration-fast ease-gitlaw
        ${t.track}
        ${e?"bg-primary justify-end pr-0.5":"bg-secondary justify-start pl-0.5"}
        ${s?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${l}
      `,children:i.jsx("span",{className:`
          rounded-sm transition-colors duration-fast ease-gitlaw
          ${t.thumb}
          bg-white
        `})})};u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Current checked state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:"The size of the switch",defaultValue:{value:'"m"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};export{u as S};
