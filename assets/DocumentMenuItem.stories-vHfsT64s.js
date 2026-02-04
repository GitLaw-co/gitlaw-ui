import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as a}from"./MenuItem-CgSDSbGk.js";import{I as B}from"./colors-C61pH6SS.js";import"./index-DRjF_FHU.js";import"./Switch-TBqG44c8.js";import"./Badge-BTb2MvAY.js";const W={title:"Prototypes/DocumentMenuItem",component:a,parameters:{layout:"centered",docs:{description:{component:`Prototype: Document Menu Item

This prototype demonstrates how to use the MenuItem component to create
a document attachment row with file info and actions.`}}}},o=()=>e.jsx("div",{className:"shrink-0 w-14 h-16 bg-surface rounded-lg flex items-center justify-center",children:e.jsx(B,{name:"file-text",className:"size-6 text-subtle"})}),t={args:{primaryText:"Wsgr engagement letter redlines",secondaryText:"Document · DOCX",showSecondaryText:!0,showStroke:!1,width:"fill",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder",showRButton:!0,rButtonLabel:"Open in Microsoft Word"},decorators:[c=>e.jsx("div",{className:"w-[700px]",children:e.jsx(c,{})})]},r={args:{primaryText:"Contract Agreement v2",secondaryText:"Document · PDF",showSecondaryText:!0,showStroke:!1,width:"fill",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder",showRButton:!0,rButtonLabel:"Open in Preview"},decorators:[c=>e.jsx("div",{className:"w-[700px]",children:e.jsx(c,{})})]},n={args:{primaryText:"Short filename.docx",secondaryText:"Document · DOCX",showSecondaryText:!0,showStroke:!1,width:"hug",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder"}},s={render:()=>e.jsxs("div",{className:"w-[700px] space-y-2",children:[e.jsx(a,{primaryText:"Wsgr engagement letter redlines",secondaryText:"Document · DOCX",showSecondaryText:!0,width:"fill",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder",showRButton:!0,rButtonLabel:"Open in Microsoft Word"}),e.jsx(a,{primaryText:"Contract Agreement v2",secondaryText:"Document · PDF",showSecondaryText:!0,width:"fill",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder",showRButton:!0,rButtonLabel:"Open in Preview"}),e.jsx(a,{primaryText:"NDA Template",secondaryText:"Document · DOCX",showSecondaryText:!0,width:"fill",className:"bg-card rounded-lg shadow-card",leftIcon:e.jsx(o,{}),showRIcon1:!0,rIcon1:"folder",showRButton:!0,rButtonLabel:"Open in Microsoft Word"})]})};var d,i,l,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primaryText: "Wsgr engagement letter redlines",
    secondaryText: "Document · DOCX",
    showSecondaryText: true,
    showStroke: false,
    width: "fill",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder",
    showRButton: true,
    rButtonLabel: "Open in Microsoft Word"
  },
  decorators: [Story => <div className="w-[700px]">
        <Story />
      </div>]
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:`Document menu item using MenuItem with:
- width="fill" to fill container
- Custom left icon (document thumbnail)
- Secondary text for file type
- Card background via className
- Stroke border
- RIcon1 for folder action
- RButton for open action`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var h,p,w,f,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    primaryText: "Contract Agreement v2",
    secondaryText: "Document · PDF",
    showSecondaryText: true,
    showStroke: false,
    width: "fill",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder",
    showRButton: true,
    rButtonLabel: "Open in Preview"
  },
  decorators: [Story => <div className="w-[700px]">
        <Story />
      </div>]
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source},description:{story:"PDF document variant",...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var g,y,I,T,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primaryText: "Short filename.docx",
    secondaryText: "Document · DOCX",
    showSecondaryText: true,
    showStroke: false,
    width: "hug",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder"
  }
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source},description:{story:"Hug width variant (default behavior)",...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var b,S,R,N,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="w-[700px] space-y-2">
      <MenuItem primaryText="Wsgr engagement letter redlines" secondaryText="Document · DOCX" showSecondaryText width="fill" className="bg-card rounded-lg shadow-card" leftIcon={<DocumentThumbnail />} showRIcon1 rIcon1="folder" showRButton rButtonLabel="Open in Microsoft Word" />
      <MenuItem primaryText="Contract Agreement v2" secondaryText="Document · PDF" showSecondaryText width="fill" className="bg-card rounded-lg shadow-card" leftIcon={<DocumentThumbnail />} showRIcon1 rIcon1="folder" showRButton rButtonLabel="Open in Preview" />
      <MenuItem primaryText="NDA Template" secondaryText="Document · DOCX" showSecondaryText width="fill" className="bg-card rounded-lg shadow-card" leftIcon={<DocumentThumbnail />} showRIcon1 rIcon1="folder" showRButton rButtonLabel="Open in Microsoft Word" />
    </div>
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source},description:{story:"Multiple documents in a list",...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.description}}};const k=["Default","PDFDocument","HugWidth","DocumentList"];export{t as Default,s as DocumentList,n as HugWidth,r as PDFDocument,k as __namedExportsOrder,W as default};
