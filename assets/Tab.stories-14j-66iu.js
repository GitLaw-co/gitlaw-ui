import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as w}from"./Badge-BTb2MvAY.js";import"./index-DRjF_FHU.js";const a=({label:i="Activity",status:t="default",showBadge:s=!1,badgeCount:u=7,onClick:c,className:n=""})=>{const l=t==="selected"||t==="selected-underlined",C=t==="selected-underlined";return e.jsxs("button",{type:"button",onClick:c,className:`
        inline-flex items-center justify-center gap-2
        px-2 py-4
        transition-colors duration-fast ease-gitlaw
        ${C?"border-b-2 border-primary":""}
        ${n}
      `,children:[e.jsx("span",{className:`
          font-semibold text-base text-primary
          overflow-hidden text-ellipsis
          ${l?"":"opacity-30"}
        `,children:i}),s&&e.jsx(w,{type:"secondary",count:u})]})},T=({tabs:i,selectedIndex:t=0,onSelect:s,showBadges:u=!1,className:c=""})=>e.jsx("div",{className:`inline-flex items-center ${c}`,children:i.map((n,l)=>e.jsx(a,{label:n.label,status:l===t?"selected-underlined":"default",showBadge:u&&n.badgeCount!==void 0,badgeCount:n.badgeCount,onClick:()=>s==null?void 0:s(l)},l))});a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"string"},description:"The label text",defaultValue:{value:'"Activity"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "selected" | "selected-underlined"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"selected"'},{name:"literal",value:'"selected-underlined"'}]},description:"The current status",defaultValue:{value:'"default"',computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge",defaultValue:{value:"false",computed:!1}},badgeCount:{required:!1,tsType:{name:"number"},description:"Badge count",defaultValue:{value:"7",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  badgeCount?: number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"badgeCount",value:{name:"number",required:!1}}]}}],raw:`Array<{
  label: string;
  badgeCount?: number;
}>`},description:"The tabs to display"},selectedIndex:{required:!1,tsType:{name:"number"},description:"Currently selected tab index",defaultValue:{value:"0",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Selection change handler"},showBadges:{required:!1,tsType:{name:"boolean"},description:"Show badges",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const q={title:"Components/Navigation/Tab",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["default","selected","selected-underlined"],description:"The current status of the tab"},label:{control:"text",description:"The label text"},showBadge:{control:"boolean",description:"Show badge"},badgeCount:{control:"number",description:"Badge count"}}},r={args:{label:"Activity",status:"default"}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{label:"Default",status:"default"}),e.jsx(a,{label:"Selected",status:"selected"}),e.jsx(a,{label:"Underlined",status:"selected-underlined"}),e.jsx(a,{label:"With Badge",status:"selected-underlined",showBadge:!0,badgeCount:5})]})},o={render:()=>e.jsx(T,{tabs:[{label:"Activity",badgeCount:7},{label:"Documents",badgeCount:3},{label:"Comments"},{label:"Settings"}],selectedIndex:0,showBadges:!0})};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Activity',
    status: 'default'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,g,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tab label="Default" status="default" />
      <Tab label="Selected" status="selected" />
      <Tab label="Underlined" status="selected-underlined" />
      <Tab label="With Badge" status="selected-underlined" showBadge badgeCount={5} />
    </div>
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Tabs tabs={[{
    label: 'Activity',
    badgeCount: 7
  }, {
    label: 'Documents',
    badgeCount: 3
  }, {
    label: 'Comments'
  }, {
    label: 'Settings'
  }]} selectedIndex={0} showBadges />
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const A=["Default","AllStates","TabsComponent"];export{d as AllStates,r as Default,o as TabsComponent,A as __namedExportsOrder,q as default};
