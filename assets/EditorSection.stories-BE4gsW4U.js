import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{E as F}from"./EditorHeader-CUSvoDCH.js";import{c as X}from"./breakpoints-BVW42eJe.js";import{E as _}from"./EditorPaper-CpMCEudE.js";import"./Button-DR1DBuRh.js";import"./Icon-CfPs8lnx.js";import"./colors-CUQOl70L.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./Input-M7N85g8K.js";const $=X["@xs"],d=({isOpen:r=!0,onClose:c,initialWidth:l,minWidth:u=400,maxWidth:b,onWidthChange:n,headerProps:L={},children:q,className:H=""})=>{const s=t.useRef(null),[w,S]=t.useState(l),[o,N]=t.useState(!1),j=t.useRef(0),W=t.useRef(0),O=t.useRef(0),v=t.useCallback(()=>{var i;return b||((i=s.current)!=null&&i.parentElement?s.current.parentElement.clientWidth-4:1200)},[b]),z=t.useCallback(i=>{if(i.preventDefault(),i.stopPropagation(),s.current){const m=s.current.getBoundingClientRect().width;j.current=i.clientX,W.current=m}N(!0)},[]);return t.useEffect(()=>{if(!o)return;const i=p=>{p.preventDefault();const a=j.current-p.clientX,y=W.current+a,h=Math.max(u,Math.min(y,v()));O.current=h,S(h),n==null||n(h)},m=p=>{p.preventDefault();const a=v(),y=O.current;a-y<$&&(S(a),n==null||n(a)),N(!1)};return document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",m)}},[o,u,v]),t.useEffect(()=>(o?(document.body.style.cursor="ew-resize",document.body.style.userSelect="none"):(document.body.style.cursor="",document.body.style.userSelect=""),()=>{document.body.style.cursor="",document.body.style.userSelect=""}),[o]),r?e.jsxs("div",{ref:s,className:`
        fixed top-0 right-0 h-full
        bg-white
        flex flex-col
        shadow-card
        ${H}
      `,style:{width:w?`${w}px`:"50%"},children:[e.jsx("div",{onMouseDown:z,className:`
          absolute left-0 top-0 bottom-0
          cursor-ew-resize
          hover:bg-primary/30
          transition-colors duration-fast ease-gitlaw
          z-10
          ${o?"w-1 bg-primary/40":"w-px bg-border"}
        `}),e.jsx(F,{...L,onClose:c}),e.jsx("div",{className:"flex-1 overflow-auto bg-white",children:q})]}):null};d.__docgenInfo={description:`EditorSection - Resizable document editing panel

Contains EditorHeader, EditorToolbar, and content area (EditorPaper).
Positioned on the right side with a draggable left edge for resizing.
Can be closed via the X button in EditorHeader.`,methods:[],displayName:"EditorSection",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the section is open/visible",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"},initialWidth:{required:!1,tsType:{name:"number"},description:"Initial width of the section (default: 50% of viewport)"},minWidth:{required:!1,tsType:{name:"number"},description:"Minimum width in pixels",defaultValue:{value:"400",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"Maximum width in pixels (or percentage of viewport)"},onWidthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"Callback when width changes during drag"},headerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"EditorHeaderProps"},{name:"literal",value:'"onClose"'}],raw:'Omit<EditorHeaderProps, "onClose">'},description:"EditorHeader props",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render (EditorPaper with toolbar inside)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const re={title:"Editor/EditorSection",component:d,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the section is visible"},initialWidth:{control:{type:"number",min:400,max:1600},description:"Initial width in pixels"},minWidth:{control:{type:"number",min:300,max:600},description:"Minimum width in pixels"}}},E=()=>e.jsxs(_,{title:"Mutual Non-Disclosure Agreement",subtitle:"MUTUAL CONFIDENTIALITY AGREEMENT\\n(Standard Form)",agreementDate:"15 January 2026",effectiveDate:"15 January 2026",party1:{name:"GitLaw Limited",address:"71-75 Shelton Street, London"},party2:{name:"Acme Corp",address:"100 Innovation Drive, Cambridge"},children:[e.jsx("h3",{className:"text-lg font-bold text-foreground mb-3",children:"RECITALS"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-3 text-sm",children:[e.jsx("li",{className:"text-foreground",children:"The Parties wish to explore a potential business relationship."}),e.jsx("li",{className:"text-foreground",children:"Each Party may disclose confidential information to the other."})]}),e.jsx("h3",{className:"text-lg font-bold text-foreground mb-3",children:"IT IS AGREED AS FOLLOWS:"}),e.jsxs("ol",{className:"list-decimal list-inside mb-6 space-y-4 text-sm",children:[e.jsxs("li",{className:"text-foreground",children:[e.jsx("strong",{children:"Definitions"}),e.jsx("p",{className:"ml-4 mt-2",children:'"Confidential Information" means all information disclosed by one Party to the other.'})]}),e.jsxs("li",{className:"text-foreground",children:[e.jsx("strong",{children:"Obligations"}),e.jsx("p",{className:"ml-4 mt-2",children:"The Receiving Party shall hold the Confidential Information in strict confidence."})]})]})]}),f={render:()=>{const[r,c]=t.useState(!0),[l,u]=t.useState(void 0);return e.jsxs("div",{className:"min-h-screen bg-page-background",children:[e.jsxs("div",{className:"p-8 transition-[margin] duration-0",style:{marginRight:r?l?`${l}px`:"50%":0},children:[e.jsx("h1",{className:"text-2xl font-bold text-foreground mb-4",children:"Main Content Area"}),e.jsx("p",{className:"text-subtle mb-4",children:"This area would contain the chat or other content. The editor section is on the right."}),!r&&e.jsx("button",{onClick:()=>c(!0),className:"px-4 py-2 bg-primary text-white rounded",children:"Open Editor"})]}),e.jsx(d,{isOpen:r,onClose:()=>c(!1),onWidthChange:u,headerProps:{title:"Mutual NDA",showShare:!0},children:e.jsx(E,{})})]})}},g={args:{isOpen:!0,initialWidth:800,headerProps:{title:"Influencer Agreement",showShare:!0}},render:r=>e.jsx("div",{className:"min-h-screen bg-page-background",children:e.jsx(d,{...r,children:e.jsx(E,{})})})},x={args:{isOpen:!0,initialWidth:450,minWidth:400,headerProps:{title:"Short Document",showShare:!1}},render:r=>e.jsx("div",{className:"min-h-screen bg-page-background",children:e.jsx(d,{...r,children:e.jsx(E,{})})})};var D,M,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [editorWidth, setEditorWidth] = useState<number | undefined>(undefined);
    return <div className="min-h-screen bg-page-background">
        {/* Left side content - responsive to editor width */}
        <div className="p-8 transition-[margin] duration-0" style={{
        marginRight: isOpen ? editorWidth ? \`\${editorWidth}px\` : '50%' : 0
      }}>
          <h1 className="text-2xl font-bold text-foreground mb-4">Main Content Area</h1>
          <p className="text-subtle mb-4">
            This area would contain the chat or other content.
            The editor section is on the right.
          </p>
          {!isOpen && <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-primary text-white rounded">
              Open Editor
            </button>}
        </div>

        {/* Editor Section */}
        <EditorSection isOpen={isOpen} onClose={() => setIsOpen(false)} onWidthChange={setEditorWidth} headerProps={{
        title: 'Mutual NDA',
        showShare: true
      }}>
          <MNDAContent />
        </EditorSection>
      </div>;
  }
}`,...(T=(M=f.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var C,R,A;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    initialWidth: 800,
    headerProps: {
      title: 'Influencer Agreement',
      showShare: true
    }
  },
  render: args => <div className="min-h-screen bg-page-background">
      <EditorSection {...args}>
        <MNDAContent />
      </EditorSection>
    </div>
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var I,P,k;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    initialWidth: 450,
    minWidth: 400,
    headerProps: {
      title: 'Short Document',
      showShare: false
    }
  },
  render: args => <div className="min-h-screen bg-page-background">
      <EditorSection {...args}>
        <MNDAContent />
      </EditorSection>
    </div>
}`,...(k=(P=x.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const ie=["Default","WideWidth","NarrowWidth"];export{f as Default,x as NarrowWidth,g as WideWidth,ie as __namedExportsOrder,re as default};
