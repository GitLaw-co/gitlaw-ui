import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as R}from"./Badge-foPfH3i_.js";import"./index-DRjF_FHU.js";const a=({label:p="Activity",status:t="default",showBadge:s=!1,badgeCount:b=7,onClick:g,className:n=""})=>{const r=t==="selected"||t==="selected-underlined",O=t==="selected-underlined";return e.jsxs("button",{type:"button",onClick:g,className:`
        inline-flex items-center justify-center gap-2
        px-2 py-4
        transition-colors
        ${O?"border-b-2 border-primary":""}
        ${n}
      `,children:[e.jsx("span",{className:`
          font-semibold text-base text-primary
          overflow-hidden text-ellipsis
          ${r?"":"opacity-30"}
        `,children:p}),s&&e.jsx(R,{type:"secondary",count:b})]})},f=({tabs:p,selectedIndex:t=0,onSelect:s,showBadges:b=!1,className:g=""})=>e.jsx("div",{className:`inline-flex items-center ${g}`,children:p.map((n,r)=>e.jsx(a,{label:n.label,status:r===t?"selected-underlined":"default",showBadge:b&&n.badgeCount!==void 0,badgeCount:n.badgeCount,onClick:()=>s==null?void 0:s(r)},r))});a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"string"},description:"The label text",defaultValue:{value:"'Activity'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'selected' | 'selected-underlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'selected-underlined'"}]},description:"The current status",defaultValue:{value:"'default'",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge",defaultValue:{value:"false",computed:!1}},badgeCount:{required:!1,tsType:{name:"number"},description:"Badge count",defaultValue:{value:"7",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  badgeCount?: number;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"badgeCount",value:{name:"number",required:!1}}]}}],raw:`Array<{
  label: string;
  badgeCount?: number;
}>`},description:"The tabs to display"},selectedIndex:{required:!1,tsType:{name:"number"},description:"Currently selected tab index",defaultValue:{value:"0",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Selection change handler"},showBadges:{required:!1,tsType:{name:"boolean"},description:"Show badges",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const F={title:"Components/Tab",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["default","selected","selected-underlined"],description:"The current status of the tab"},label:{control:"text",description:"The label text"},showBadge:{control:"boolean",description:"Show badge"},badgeCount:{control:"number",description:"Badge count"}}},l={args:{label:"Activity",status:"default"}},d={args:{label:"Activity",status:"selected"}},o={args:{label:"Activity",status:"selected-underlined"}},i={args:{label:"Activity",status:"selected-underlined",showBadge:!0,badgeCount:7}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{label:"Default",status:"default"}),e.jsx(a,{label:"Selected",status:"selected"}),e.jsx(a,{label:"Underlined",status:"selected-underlined"}),e.jsx(a,{label:"With Badge",status:"selected-underlined",showBadge:!0,badgeCount:5})]})},c={render:()=>e.jsx(f,{tabs:[{label:"Activity",badgeCount:7},{label:"Documents",badgeCount:3},{label:"Comments"},{label:"Settings"}],selectedIndex:0,showBadges:!0})},m={render:()=>e.jsx(f,{tabs:[{label:"Overview"},{label:"Analytics"},{label:"Reports"},{label:"Settings"}],selectedIndex:1})};var y,v,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Activity',
    status: 'default'
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,T,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Activity',
    status: 'selected'
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,w,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Activity',
    status: 'selected-underlined'
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,j,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Activity',
    status: 'selected-underlined',
    showBadge: true,
    badgeCount: 7
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var N,V,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tab label="Default" status="default" />
      <Tab label="Selected" status="selected" />
      <Tab label="Underlined" status="selected-underlined" />
      <Tab label="With Badge" status="selected-underlined" showBadge badgeCount={5} />
    </div>
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var D,W,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var k,U,$;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Tabs tabs={[{
    label: 'Overview'
  }, {
    label: 'Analytics'
  }, {
    label: 'Reports'
  }, {
    label: 'Settings'
  }]} selectedIndex={1} />
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const G=["Default","Selected","SelectedUnderlined","WithBadge","AllStates","TabsComponent","TabsWithoutBadges"];export{u as AllStates,l as Default,d as Selected,o as SelectedUnderlined,c as TabsComponent,m as TabsWithoutBadges,i as WithBadge,G as __namedExportsOrder,F as default};
