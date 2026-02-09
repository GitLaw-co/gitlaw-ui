import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as t}from"./TableListItem-Z_-JnSTM.js";import"./index-DRjF_FHU.js";import"./Icon-CGgPBvn_.js";import"./StarIcon-BtetS-2M.js";import"./colors-CUQOl70L.js";import"./Checkbox-CfK9XmaB.js";const y={title:"Components/Data Display/TableListItem",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["item","header","skeleton","drag-and-drop"]},cols:{control:"select",options:[0,2,4,6]},iconName:{control:"text"},title:{control:"text"},subtitle:{control:"text"},visibility:{control:"select",options:[void 0,"private","public","shared","organization"]},starCount:{control:"text"},spam:{control:"boolean"},selected:{control:"boolean"},starred:{control:"boolean"},selectMode:{control:"boolean"},selectStatus:{control:"select",options:["off","on","semi"]},sortColumn:{control:"text"},sortDirection:{control:"select",options:[void 0,"asc","desc"]}}},o={args:{type:"item",cols:6,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",visibility:"public",starCount:"17K",metaValues:["Folder","1 minute ago","3 minutes ago","3 days ago"]}},d=1080,s={render:()=>e.jsx("div",{style:{width:d},children:e.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[e.jsx("p",{className:"text-sm font-semibold text-foreground mb-1",children:"Skeleton"}),e.jsx(t,{type:"skeleton"}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Drag & Drop placeholder"}),e.jsx(t,{type:"drag-and-drop"}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Header + Items (6 cols)"}),e.jsx(t,{type:"header",cols:6}),e.jsx(t,{type:"item",cols:6,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",visibility:"public",starCount:"17K",metaValues:["Folder","1 minute ago","3 minutes ago","3 days ago"]}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Header + Items (4 cols)"}),e.jsx(t,{type:"header",cols:4}),e.jsx(t,{type:"item",cols:4,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",visibility:"public",starCount:"17K",metaValues:["3 minutes ago","3 days ago"]}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Header + Items (2 cols)"}),e.jsx(t,{type:"header",cols:2}),e.jsx(t,{type:"item",cols:2,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",visibility:"public",starCount:"17K",metaValues:["3 minutes ago"]}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Selected item"}),e.jsx(t,{type:"item",cols:6,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",metaValues:["Folder","1 minute ago","3 minutes ago","3 days ago"],selected:!0}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Starred item"}),e.jsx(t,{type:"item",cols:6,iconName:"folder",title:"Employment Agreements",subtitle:"8 files in folder",metaValues:["Folder","1 minute ago","3 minutes ago","3 days ago"],starred:!0}),e.jsx("p",{className:"text-sm font-semibold text-foreground mt-4 mb-1",children:"Spam item"}),e.jsx(t,{type:"item",cols:6,iconName:"file-text",title:"Suspicious Document",subtitle:"Unknown sender",spam:!0,metaValues:["Document","2 min ago","5 min ago","Today"]})]})})};var l,n,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "item",
    cols: 6,
    iconName: "folder",
    title: "Employment Agreements",
    subtitle: "8 files in folder",
    visibility: "public",
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,a,r;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    width: GRID_WIDTH
  }}>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm font-semibold text-foreground mb-1">Skeleton</p>
        <TableListItem type="skeleton" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Drag & Drop placeholder
        </p>
        <TableListItem type="drag-and-drop" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (6 cols)
        </p>
        <TableListItem type="header" cols={6} />
        <TableListItem type="item" cols={6} iconName="folder" title="Employment Agreements" subtitle="8 files in folder" visibility="public" starCount="17K" metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]} />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (4 cols)
        </p>
        <TableListItem type="header" cols={4} />
        <TableListItem type="item" cols={4} iconName="folder" title="Employment Agreements" subtitle="8 files in folder" visibility="public" starCount="17K" metaValues={["3 minutes ago", "3 days ago"]} />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (2 cols)
        </p>
        <TableListItem type="header" cols={2} />
        <TableListItem type="item" cols={2} iconName="folder" title="Employment Agreements" subtitle="8 files in folder" visibility="public" starCount="17K" metaValues={["3 minutes ago"]} />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Selected item
        </p>
        <TableListItem type="item" cols={6} iconName="folder" title="Employment Agreements" subtitle="8 files in folder" metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]} selected />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Starred item
        </p>
        <TableListItem type="item" cols={6} iconName="folder" title="Employment Agreements" subtitle="8 files in folder" metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]} starred />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Spam item
        </p>
        <TableListItem type="item" cols={6} iconName="file-text" title="Suspicious Document" subtitle="Unknown sender" spam metaValues={["Document", "2 min ago", "5 min ago", "Today"]} />
      </div>
    </div>
}`,...(r=(a=s.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const N=["Default","AllTypes"];export{s as AllTypes,o as Default,N as __namedExportsOrder,y as default};
