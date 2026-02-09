import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as i}from"./Card-DJrNNhRu.js";import"./index-DRjF_FHU.js";import"./Icon-CGgPBvn_.js";import"./StarIcon-BtetS-2M.js";import"./colors-CUQOl70L.js";const w={title:"Components/Data Display/Card",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["file","template","folder"],description:"Card type"},title:{control:"text",description:"Card title"},description:{control:"text",description:"Card description (for file/template)"},visibility:{control:"select",options:["private","public","shared","organization"],description:"Visibility status"},organizationName:{control:"text",description:"Organization name (when visibility is organization)"},starred:{control:"boolean",description:"Whether card is starred"},selected:{control:"boolean",description:"Whether card is selected (shows 2px primary border)"},compact:{control:"boolean",description:"Compact mode — square (1:1), full-width, no min/max-w constraints"},onFileClick:{action:"file clicked",description:"Callback when a file within a folder is clicked"}},decorators:[s=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(s,{})})]},a=[{id:"1",name:"Service Design Agreement"},{id:"2",name:"Client Engagement Contract"},{id:"3",name:"Non-Disclosure Agreement"},{id:"4",name:"Consulting Services Agreement"},{id:"5",name:"Partnership Agreement"},{id:"6",name:"Employment Contract"}],t={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!1,selected:!1,compact:!1},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(i,{...s})})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Visibility States"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"220px"},children:e.jsx(i,{type:"file",title:"Private Document",description:"Only visible to you.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(i,{type:"file",title:"Public Document",description:"Accessible to everyone.",ownerName:"Whisk",ownerInitials:"WH",visibility:"public"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(i,{type:"file",title:"Shared Document",description:"Shared with specific people.",ownerName:"Whisk",ownerInitials:"WH",visibility:"shared"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(i,{type:"file",title:"Organization Document",description:"Shared with organization.",ownerName:"Whisk",ownerInitials:"WH",visibility:"organization",organizationName:"Gitlaw"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Under 200px (compact: no star, no file count, 16px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"180px"},children:e.jsx(i,{type:"file",title:"Compact File",description:"Smaller card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"180px"},children:e.jsx(i,{type:"folder",title:"Compact Folder",filesCount:5,files:a,starred:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"200px+ (full: star visible, file count visible, 24px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"240px"},children:e.jsx(i,{type:"file",title:"Standard File",description:"Standard card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"240px"},children:e.jsx(i,{type:"folder",title:"Standard Folder",filesCount:5,files:a,starred:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Compact mode — square (1:1), full-width"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"192px"},children:e.jsx(i,{type:"file",title:"Compact File",description:"Square card for mobile grids.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",compact:!0})}),e.jsx("div",{style:{width:"192px"},children:e.jsx(i,{type:"folder",title:"Compact Folder",filesCount:5,files:a,compact:!0})})]})]})]})};var l,r,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "file",
    title: "Service Contract Template",
    description: "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Whisk",
    ownerInitials: "WH",
    visibility: "private",
    starred: false,
    selected: false,
    compact: false
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Visibility States */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Visibility States
        </h3>
        <div className="flex gap-2">
          <div style={{
          width: "220px"
        }}>
            <Card type="file" title="Private Document" description="Only visible to you." ownerName="Whisk" ownerInitials="WH" visibility="private" />
          </div>
          <div style={{
          width: "220px"
        }}>
            <Card type="file" title="Public Document" description="Accessible to everyone." ownerName="Whisk" ownerInitials="WH" visibility="public" />
          </div>
          <div style={{
          width: "220px"
        }}>
            <Card type="file" title="Shared Document" description="Shared with specific people." ownerName="Whisk" ownerInitials="WH" visibility="shared" />
          </div>
          <div style={{
          width: "220px"
        }}>
            <Card type="file" title="Organization Document" description="Shared with organization." ownerName="Whisk" ownerInitials="WH" visibility="organization" organizationName="Gitlaw" />
          </div>
        </div>
      </div>

      {/* Responsive Sizes */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Under 200px (compact: no star, no file count, 16px padding)
        </h3>
        <div className="flex gap-2">
          <div style={{
          width: "180px"
        }}>
            <Card type="file" title="Compact File" description="Smaller card variant." ownerName="Whisk" ownerInitials="WH" visibility="private" starred={true} />
          </div>
          <div style={{
          width: "180px"
        }}>
            <Card type="folder" title="Compact Folder" filesCount={5} files={sampleFiles} starred={true} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          200px+ (full: star visible, file count visible, 24px padding)
        </h3>
        <div className="flex gap-2">
          <div style={{
          width: "240px"
        }}>
            <Card type="file" title="Standard File" description="Standard card variant." ownerName="Whisk" ownerInitials="WH" visibility="private" starred={true} />
          </div>
          <div style={{
          width: "240px"
        }}>
            <Card type="folder" title="Standard Folder" filesCount={5} files={sampleFiles} starred={true} />
          </div>
        </div>
      </div>

      {/* Compact Mode (mobile) */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Compact mode — square (1:1), full-width
        </h3>
        <div className="flex gap-2">
          <div style={{
          width: "192px"
        }}>
            <Card type="file" title="Compact File" description="Square card for mobile grids." ownerName="Whisk" ownerInitials="WH" visibility="private" compact />
          </div>
          <div style={{
          width: "192px"
        }}>
            <Card type="folder" title="Compact Folder" filesCount={5} files={sampleFiles} compact />
          </div>
        </div>
      </div>
    </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["Default","AllVariants"];export{n as AllVariants,t as Default,b as __namedExportsOrder,w as default};
