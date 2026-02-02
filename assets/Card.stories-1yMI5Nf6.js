import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{I as m,c as n}from"./Icon-D7PltpT4.js";import{B as D}from"./Button-7d245zHU.js";const L="size-5",l=({type:i="file",title:o,description:y,ownerName:w,ownerInitials:d,ownerAvatar:b,visibility:f="private",organizationName:S,starred:z=!1,selected:I=!1,filesCount:T=0,files:R=[],onClick:h,onDoubleClick:x,onStarClick:v,onMenuClick:g,onFileClick:N,doubleClickThreshold:t=250,className:s=""})=>{const a=i==="folder",u=p.useRef(0),c=p.useRef(null),j=p.useCallback(()=>{const r=Date.now(),C=r-u.current;C<t&&C>0?(c.current&&(clearTimeout(c.current),c.current=null),u.current=0,x==null||x()):(u.current=r,c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{h==null||h(),c.current=null},t))},[h,x,t]),W=()=>{switch(f){case"private":return"Private";case"public":return"Public";case"shared":return"Shared";case"organization":return S||"Organization";default:return"Private"}},_=()=>{switch(f){case"private":return e.jsx(m,{name:"lock",className:"size-6 shrink-0",color:n.iconSecondary});case"public":return e.jsx(m,{name:"earth",className:"size-6 shrink-0",color:n.iconSecondary});case"shared":return e.jsx(m,{name:"users-round",className:"size-6 shrink-0",color:n.iconSecondary});case"organization":return e.jsx(m,{name:"building-2",className:"size-6 shrink-0",color:n.iconSecondary});default:return e.jsx(m,{name:"lock",className:"size-6 shrink-0",color:n.iconSecondary})}},F=()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full h-full",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[w&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"size-6 rounded bg-primary flex items-center justify-center shrink-0",children:b?e.jsx("img",{src:b,alt:w,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-[10px] font-black text-text-negative",children:d})}),e.jsx("span",{className:"text-xs font-normal text-text-primary leading-[1.4]",children:w})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(m,{name:"star",className:L,color:z?n.iconPrimary:n.iconDisabled})}),e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),g==null||g()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(m,{name:"ellipsis",className:L,color:n.iconSecondary})})]})]}),e.jsx("h3",{className:"font-serif text-2xl font-normal text-text-primary leading-[1.4]",children:o}),y&&e.jsx("p",{className:"text-sm font-normal text-text-secondary leading-[1.4]",children:y})]}),B=()=>e.jsxs("div",{className:"flex flex-col gap-3 w-full h-full",children:[e.jsxs("div",{className:"flex items-center gap-2 p-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[e.jsx(m,{name:"folder-closed",className:"size-6 shrink-0",color:n.iconPrimary}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("h3",{className:"text-base font-normal text-text-primary leading-[1.4] truncate",children:o}),e.jsxs("span",{className:"text-xs font-normal text-text-secondary leading-[1.4] hidden @[200px]:block",children:[T," files"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(m,{name:"star",className:L,color:z?n.iconPrimary:n.iconDisabled})}),e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),g==null||g()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(m,{name:"ellipsis",className:L,color:n.iconSecondary})})]})]}),e.jsx("div",{className:"w-full h-px bg-border"}),e.jsx("div",{className:"flex flex-col w-full flex-1 overflow-hidden",children:R.slice(0,6).map(r=>e.jsxs("div",{className:"flex items-center gap-2 min-h-12 p-3 hover:bg-secondary/50 transition-colors cursor-pointer",onClick:C=>{C.stopPropagation(),N==null||N(r)},children:[e.jsx(m,{name:"file-text",className:"size-6 shrink-0",color:n.iconDisabled}),e.jsx("span",{className:"text-base font-normal text-text-primary truncate",children:r.name})]},r.id))})]});return e.jsxs("div",{className:`
        @container bg-card rounded-lg overflow-hidden relative cursor-pointer
        w-full min-w-[160px]
        p-4 @[200px]:p-6
        transition-all
        ${I?"ring-2 ring-primary":""}
        ${s}
      `,style:{aspectRatio:"3/4"},onClick:j,"data-card":"true",children:[a?B():F(),!a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[68px] pointer-events-none",style:{background:"linear-gradient(to bottom, transparent 0%, white 16px, white 100%)"},children:e.jsxs("div",{className:"absolute bottom-4 @[200px]:bottom-6 left-0 right-0 px-4 @[200px]:px-6 flex items-center gap-2",children:[_(),e.jsx("span",{className:"text-sm font-normal text-text-secondary leading-[1.4]",children:W()})]})}),a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-11 pointer-events-none",style:{background:"linear-gradient(to top, white 0%, transparent 100%)"}})]})};l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{type:{required:!1,tsType:{name:"union",raw:"'file' | 'template' | 'folder'",elements:[{name:"literal",value:"'file'"},{name:"literal",value:"'template'"},{name:"literal",value:"'folder'"}]},description:"Card type - file, template (same format), or folder",defaultValue:{value:"'file'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Card title"},description:{required:!1,tsType:{name:"string"},description:"Card description (for file/template)"},ownerName:{required:!1,tsType:{name:"string"},description:"Owner name"},ownerInitials:{required:!1,tsType:{name:"string"},description:"Owner initials"},ownerAvatar:{required:!1,tsType:{name:"string"},description:"Owner avatar URL"},visibility:{required:!1,tsType:{name:"union",raw:"'private' | 'public' | 'shared' | 'organization'",elements:[{name:"literal",value:"'private'"},{name:"literal",value:"'public'"},{name:"literal",value:"'shared'"},{name:"literal",value:"'organization'"}]},description:"Visibility status",defaultValue:{value:"'private'",computed:!1}},organizationName:{required:!1,tsType:{name:"string"},description:"Organization name (required when visibility is 'organization')"},starred:{required:!1,tsType:{name:"boolean"},description:"Whether card is starred",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether card is selected",defaultValue:{value:"false",computed:!1}},filesCount:{required:!1,tsType:{name:"number"},description:"Files count (for folder)",defaultValue:{value:"0",computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"CardFileItem"}],raw:"CardFileItem[]"},description:"Files in folder (for folder type)",defaultValue:{value:"[]",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card click (single click selects)"},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card double click (opens document/folder)"},onStarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On star click"},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On menu click"},onFileClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: CardFileItem) => void",signature:{arguments:[{type:{name:"CardFileItem"},name:"file"}],return:{name:"void"}}},description:"On file click within folder"},doubleClickThreshold:{required:!1,tsType:{name:"number"},description:"Double click threshold in ms (default: 250ms)",defaultValue:{value:"250",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const he=({className:i="size-6",color:o="currentColor"})=>e.jsx("svg",{className:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})});he.__docgenInfo={description:"",methods:[],displayName:"Check",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const xe=({className:i="size-6",color:o="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),e.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),e.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]});xe.__docgenInfo={description:"",methods:[],displayName:"Trash2",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ve=({className:i="size-6",color:o="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M12 17V3"}),e.jsx("path",{d:"m6 11 6 6 6-6"}),e.jsx("path",{d:"M19 21H5"})]});ve.__docgenInfo={description:"",methods:[],displayName:"ArrowDownToLine",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ge=({className:i="size-6",color:o="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}),e.jsx("path",{d:"M2 13h10"}),e.jsx("path",{d:"m9 16 3-3-3-3"})]});ge.__docgenInfo={description:"",methods:[],displayName:"FolderInput",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ke={title:"Components/Card",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["file","template","folder"],description:"Card type"},title:{control:"text",description:"Card title"},description:{control:"text",description:"Card description (for file/template)"},visibility:{control:"select",options:["private","public","shared","organization"],description:"Visibility status"},organizationName:{control:"text",description:"Organization name (when visibility is organization)"},starred:{control:"boolean",description:"Whether card is starred"},selected:{control:"boolean",description:"Whether card is selected (shows 2px primary border)"},onFileClick:{action:"file clicked",description:"Callback when a file within a folder is clicked"}},decorators:[i=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(i,{})})]},k=[{id:"1",name:"Service Design Agreement"},{id:"2",name:"Client Engagement Contract"},{id:"3",name:"Non-Disclosure Agreement"},{id:"4",name:"Consulting Services Agreement"},{id:"5",name:"Partnership Agreement"},{id:"6",name:"Employment Contract"}],q={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!1,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...i})})},E={args:{type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Alex Carter",ownerInitials:"AC",visibility:"private",starred:!1,selected:!0},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...i})})},M={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...i})})},V={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:k,starred:!1,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...i})})},A={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:k,starred:!1,selected:!0},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...i})})},H={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Private Document",description:"Only visible to you.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Public Document",description:"Accessible to everyone.",ownerName:"Whisk",ownerInitials:"WH",visibility:"public"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Shared Document",description:"Shared with specific people.",ownerName:"Whisk",ownerInitials:"WH",visibility:"shared"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Organization Document",description:"Shared with organization.",ownerName:"Whisk",ownerInitials:"WH",visibility:"organization",organizationName:"Gitlaw"})})]})},O={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Under 200px (compact: no star, no file count, 16px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"180px"},children:e.jsx(l,{type:"file",title:"Compact File",description:"Smaller card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"180px"},children:e.jsx(l,{type:"folder",title:"Compact Folder",filesCount:5,files:k,starred:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"200px+ (full: star visible, file count visible, 24px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{type:"file",title:"Standard File",description:"Standard card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{type:"folder",title:"Standard Folder",filesCount:5,files:k,starred:!0})})]})]})]})},ye=1080,we=()=>{const[i,o]=p.useState(new Set),[y,w]=p.useState(!1),[d,b]=p.useState(null),f=p.useRef(null),S=p.useRef(new Map),z=[{id:"1",type:"folder",title:"Service Contract Template",filesCount:8,files:k},{id:"2",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"},{id:"3",type:"file",title:"Mutual NDA",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"4",type:"file",title:"Client Engagement Framework",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"5",type:"file",title:"Project Collaboration Contract",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"6",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"John Titor",ownerInitials:"JT"},{id:"7",type:"file",title:"Creative Partnership Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"8",type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"}],I=p.useCallback(()=>{const t=[];return S.current.forEach((s,a)=>{s&&t.push({id:a,rect:s.getBoundingClientRect()})}),t},[]),T=p.useCallback(t=>{var F;const s=(F=f.current)==null?void 0:F.getBoundingClientRect();if(!s)return new Set;const a=Math.min(t.startX,t.endX)+s.left,u=Math.max(t.startX,t.endX)+s.left,c=Math.min(t.startY,t.endY)+s.top,j=Math.max(t.startY,t.endY)+s.top,W=new Set;return I().forEach(({id:B,rect:r})=>{!(r.right<a||r.left>u||r.bottom<c||r.top>j)&&W.add(B)}),W},[I]),R=p.useCallback(t=>{var u;const s=t.target;if(s.closest('[data-card="true"]')||s.closest("button"))return;t.preventDefault();const a=(u=f.current)==null?void 0:u.getBoundingClientRect();if(a){const c=t.clientX-a.left,j=t.clientY-a.top;w(!0),b({startX:c,startY:j,endX:c,endY:j}),o(new Set)}},[]),h=p.useCallback(t=>{if(y&&d&&f.current){const s=f.current.getBoundingClientRect(),a=t.clientX-s.left,u=t.clientY-s.top,c={...d,endX:a,endY:u};b(c),o(T(c))}},[y,d,T]),x=p.useCallback(()=>{w(!1),b(null)},[]);p.useEffect(()=>{if(y)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x)}},[y,h,x]);const v=t=>{o(s=>{const a=new Set(s);return a.has(t)?a.delete(t):a.add(t),a})},g=(t,s)=>{alert(`Opening: ${s}`)},N=()=>{if(d)return{position:"absolute",left:Math.min(d.startX,d.endX),top:Math.min(d.startY,d.endY),width:Math.abs(d.endX-d.startX),height:Math.abs(d.endY-d.startY),backgroundColor:"rgba(94, 73, 214, 0.1)",border:"2px solid rgba(94, 73, 214, 0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:50}};return e.jsxs("div",{ref:f,className:"relative select-none w-full",style:{minHeight:"800px",minWidth:"1400px"},onMouseDown:R,children:[d&&e.jsx("div",{style:N()}),e.jsxs("div",{style:{width:ye,margin:"0 auto"},children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("p",{className:"text-lg font-semibold text-primary",children:i.size>0?`${i.size} file${i.size>1?"s":""} selected`:"Click or drag to select"}),i.size>0&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(xe,{className:"size-4",color:n.iconPrimary}),children:"Delete"}),e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(ve,{className:"size-4",color:n.iconPrimary}),children:"Download"}),e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(ge,{className:"size-4",color:n.iconPrimary}),children:"Move"}),e.jsx(D,{variant:"primary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(he,{className:"size-4",color:n.white}),onClick:()=>o(new Set),children:"Done"})]})]}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:z.map(t=>e.jsx("div",{ref:s=>{s&&S.current.set(t.id,s)},"data-card":"true",children:e.jsx(l,{type:t.type,title:t.title,description:t.type==="file"?t.description:void 0,ownerName:t.type==="file"?t.ownerName:void 0,ownerInitials:t.type==="file"?t.ownerInitials:void 0,filesCount:t.type==="folder"?t.filesCount:void 0,files:t.type==="folder"?t.files:void 0,visibility:"private",selected:i.has(t.id),onClick:()=>v(t.id),onDoubleClick:()=>g(t.id,t.title)})},t.id))}),e.jsx("p",{className:"text-xs text-text-secondary mt-6",children:"Click to select/deselect. Drag anywhere for rubber band selection. Double click to open."})]})]})},P={render:()=>e.jsx(we,{})};var X,Y,$;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'file',
    title: 'Service Contract Template',
    description: 'Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.',
    ownerName: 'Whisk',
    ownerInitials: 'WH',
    visibility: 'private',
    starred: false,
    selected: false
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Card {...args} />
    </div>
}`,...($=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var U,G,J;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'file',
    title: 'Design Services Agreement',
    description: 'Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.',
    ownerName: 'Alex Carter',
    ownerInitials: 'AC',
    visibility: 'private',
    starred: false,
    selected: true
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Card {...args} />
    </div>
}`,...(J=(G=E.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Z,K,Q;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'file',
    title: 'Service Contract Template',
    description: 'Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.',
    ownerName: 'Whisk',
    ownerInitials: 'WH',
    visibility: 'private',
    starred: true,
    selected: false
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Card {...args} />
    </div>
}`,...(Q=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,te,ie;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'folder',
    title: 'Service Contract Template',
    filesCount: 8,
    files: sampleFiles,
    starred: false,
    selected: false
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Card {...args} />
    </div>
}`,...(ie=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,re,ae;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'folder',
    title: 'Service Contract Template',
    filesCount: 8,
    files: sampleFiles,
    starred: false,
    selected: true
  },
  render: args => <div style={{
    width: '240px'
  }}>
      <Card {...args} />
    </div>
}`,...(ae=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,le,oe;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <div style={{
      width: '220px'
    }}>
        <Card type="file" title="Private Document" description="Only visible to you." ownerName="Whisk" ownerInitials="WH" visibility="private" />
      </div>
      <div style={{
      width: '220px'
    }}>
        <Card type="file" title="Public Document" description="Accessible to everyone." ownerName="Whisk" ownerInitials="WH" visibility="public" />
      </div>
      <div style={{
      width: '220px'
    }}>
        <Card type="file" title="Shared Document" description="Shared with specific people." ownerName="Whisk" ownerInitials="WH" visibility="shared" />
      </div>
      <div style={{
      width: '220px'
    }}>
        <Card type="file" title="Organization Document" description="Shared with organization." ownerName="Whisk" ownerInitials="WH" visibility="organization" organizationName="Gitlaw" />
      </div>
    </div>
}`,...(oe=(le=H.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ce,pe;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Under 200px (compact: no star, no file count, 16px padding)</h3>
        <div className="flex gap-2">
          <div style={{
          width: '180px'
        }}>
            <Card type="file" title="Compact File" description="Smaller card variant." ownerName="Whisk" ownerInitials="WH" visibility="private" starred={true} />
          </div>
          <div style={{
          width: '180px'
        }}>
            <Card type="folder" title="Compact Folder" filesCount={5} files={sampleFiles} starred={true} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">200px+ (full: star visible, file count visible, 24px padding)</h3>
        <div className="flex gap-2">
          <div style={{
          width: '240px'
        }}>
            <Card type="file" title="Standard File" description="Standard card variant." ownerName="Whisk" ownerInitials="WH" visibility="private" starred={true} />
          </div>
          <div style={{
          width: '240px'
        }}>
            <Card type="folder" title="Standard Folder" filesCount={5} files={sampleFiles} starred={true} />
          </div>
        </div>
      </div>
    </div>
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,fe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...(fe=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const Se=["FileCard","SelectedFileCard","StarredFileCard","FolderCard","SelectedFolderCard","VisibilityStates","ResponsiveSizes","Interactive"];export{q as FileCard,V as FolderCard,P as Interactive,O as ResponsiveSizes,E as SelectedFileCard,A as SelectedFolderCard,M as StarredFileCard,H as VisibilityStates,Se as __namedExportsOrder,ke as default};
