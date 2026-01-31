import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{I as p}from"./Icon-CCFihSvx.js";import{B as W}from"./Button-C6Y3-Hxg.js";const D="size-5",n=({type:i="file",title:l,description:g,ownerName:y,ownerInitials:o,ownerAvatar:w,visibility:u="private",organizationName:k,starred:z=!1,selected:I=!1,filesCount:S=0,files:R=[],onClick:f,onDoubleClick:h,onStarClick:x,onMenuClick:v,onFileClick:j,doubleClickThreshold:t=250,className:s=""})=>{const a=i==="folder",m=c.useRef(0),d=c.useRef(null),b=c.useCallback(()=>{const r=Date.now(),N=r-m.current;N<t&&N>0?(d.current&&(clearTimeout(d.current),d.current=null),m.current=0,h==null||h()):(m.current=r,d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{f==null||f(),d.current=null},t))},[f,h,t]),F=()=>{switch(u){case"private":return"Private";case"public":return"Public";case"shared":return"Shared";case"organization":return k||"Organization";default:return"Private"}},P=()=>{switch(u){case"private":return e.jsx(p,{name:"lock",className:"size-6 shrink-0",color:"#989898"});case"public":return e.jsx(p,{name:"earth",className:"size-6 shrink-0",color:"#989898"});case"shared":return e.jsx(p,{name:"users-round",className:"size-6 shrink-0",color:"#989898"});case"organization":return e.jsx(p,{name:"building-2",className:"size-6 shrink-0",color:"#989898"});default:return e.jsx(p,{name:"lock",className:"size-6 shrink-0",color:"#989898"})}},T=()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full h-full",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[y&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"size-6 rounded bg-primary flex items-center justify-center shrink-0",children:w?e.jsx("img",{src:w,alt:y,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-[10px] font-black text-text-negative",children:o})}),e.jsx("span",{className:"text-xs font-normal text-text-primary leading-[1.4]",children:y})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),x==null||x()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(p,{name:"star",className:D,color:z?"#5E49D6":"#CFC8F3"})}),e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(p,{name:"ellipsis",className:D,color:"#989898"})})]})]}),e.jsx("h3",{className:"font-serif text-2xl font-normal text-text-primary leading-[1.4]",children:l}),g&&e.jsx("p",{className:"text-sm font-normal text-text-secondary leading-[1.4]",children:g})]}),B=()=>e.jsxs("div",{className:"flex flex-col gap-3 w-full h-full",children:[e.jsxs("div",{className:"flex items-center gap-2 p-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[e.jsx(p,{name:"folder-closed",className:"size-6 shrink-0",color:"#5E49D6"}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("h3",{className:"text-base font-normal text-text-primary leading-[1.4] truncate",children:l}),e.jsxs("span",{className:"text-xs font-normal text-text-secondary leading-[1.4] hidden @[200px]:block",children:[S," files"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),x==null||x()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(p,{name:"star",className:D,color:z?"#5E49D6":"#CFC8F3"})}),e.jsx("button",{type:"button",onClick:r=>{r.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(p,{name:"ellipsis",className:D,color:"#989898"})})]})]}),e.jsx("div",{className:"w-full h-px bg-border"}),e.jsx("div",{className:"flex flex-col w-full flex-1 overflow-hidden",children:R.slice(0,6).map(r=>e.jsxs("div",{className:"flex items-center gap-2 min-h-12 p-3 hover:bg-secondary/50 transition-colors cursor-pointer",onClick:N=>{N.stopPropagation(),j==null||j(r)},children:[e.jsx(p,{name:"file-text",className:"size-6 shrink-0",color:"#CFC8F3"}),e.jsx("span",{className:"text-base font-normal text-text-primary truncate",children:r.name})]},r.id))})]});return e.jsxs("div",{className:`
        @container bg-card rounded-lg overflow-hidden relative cursor-pointer
        w-full min-w-[160px]
        p-4 @[200px]:p-6
        transition-all
        ${I?"ring-2 ring-primary":""}
        ${s}
      `,style:{aspectRatio:"3/4"},onClick:b,"data-card":"true",children:[a?B():T(),!a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[68px] pointer-events-none",style:{background:"linear-gradient(to bottom, transparent 0%, white 16px, white 100%)"},children:e.jsxs("div",{className:"absolute bottom-4 @[200px]:bottom-6 left-0 right-0 px-4 @[200px]:px-6 flex items-center gap-2",children:[P(),e.jsx("span",{className:"text-sm font-normal text-text-secondary leading-[1.4]",children:F()})]})}),a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-11 pointer-events-none",style:{background:"linear-gradient(to top, white 0%, transparent 100%)"}})]})};n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{type:{required:!1,tsType:{name:"union",raw:"'file' | 'template' | 'folder'",elements:[{name:"literal",value:"'file'"},{name:"literal",value:"'template'"},{name:"literal",value:"'folder'"}]},description:"Card type - file, template (same format), or folder",defaultValue:{value:"'file'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Card title"},description:{required:!1,tsType:{name:"string"},description:"Card description (for file/template)"},ownerName:{required:!1,tsType:{name:"string"},description:"Owner name"},ownerInitials:{required:!1,tsType:{name:"string"},description:"Owner initials"},ownerAvatar:{required:!1,tsType:{name:"string"},description:"Owner avatar URL"},visibility:{required:!1,tsType:{name:"union",raw:"'private' | 'public' | 'shared' | 'organization'",elements:[{name:"literal",value:"'private'"},{name:"literal",value:"'public'"},{name:"literal",value:"'shared'"},{name:"literal",value:"'organization'"}]},description:"Visibility status",defaultValue:{value:"'private'",computed:!1}},organizationName:{required:!1,tsType:{name:"string"},description:"Organization name (required when visibility is 'organization')"},starred:{required:!1,tsType:{name:"boolean"},description:"Whether card is starred",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether card is selected",defaultValue:{value:"false",computed:!1}},filesCount:{required:!1,tsType:{name:"number"},description:"Files count (for folder)",defaultValue:{value:"0",computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"CardFileItem"}],raw:"CardFileItem[]"},description:"Files in folder (for folder type)",defaultValue:{value:"[]",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card click (single click selects)"},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card double click (opens document/folder)"},onStarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On star click"},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On menu click"},onFileClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: CardFileItem) => void",signature:{arguments:[{type:{name:"CardFileItem"},name:"file"}],return:{name:"void"}}},description:"On file click within folder"},doubleClickThreshold:{required:!1,tsType:{name:"number"},description:"Double click threshold in ms (default: 250ms)",defaultValue:{value:"250",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const fe=({className:i="size-6",color:l="currentColor"})=>e.jsx("svg",{className:i,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})});fe.__docgenInfo={description:"",methods:[],displayName:"Check",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const he=({className:i="size-6",color:l="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),e.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),e.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]});he.__docgenInfo={description:"",methods:[],displayName:"Trash2",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const xe=({className:i="size-6",color:l="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M12 17V3"}),e.jsx("path",{d:"m6 11 6 6 6-6"}),e.jsx("path",{d:"M19 21H5"})]});xe.__docgenInfo={description:"",methods:[],displayName:"ArrowDownToLine",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ve=({className:i="size-6",color:l="currentColor"})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:i,children:[e.jsx("path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}),e.jsx("path",{d:"M2 13h10"}),e.jsx("path",{d:"m9 16 3-3-3-3"})]});ve.__docgenInfo={description:"",methods:[],displayName:"FolderInput",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const Ce={title:"Components/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["file","template","folder"],description:"Card type"},title:{control:"text",description:"Card title"},description:{control:"text",description:"Card description (for file/template)"},visibility:{control:"select",options:["private","public","shared","organization"],description:"Visibility status"},organizationName:{control:"text",description:"Organization name (when visibility is organization)"},starred:{control:"boolean",description:"Whether card is starred"},selected:{control:"boolean",description:"Whether card is selected (shows 2px primary border)"},onFileClick:{action:"file clicked",description:"Callback when a file within a folder is clicked"}},decorators:[i=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(i,{})})]},C=[{id:"1",name:"Service Design Agreement"},{id:"2",name:"Client Engagement Contract"},{id:"3",name:"Non-Disclosure Agreement"},{id:"4",name:"Consulting Services Agreement"},{id:"5",name:"Partnership Agreement"},{id:"6",name:"Employment Contract"}],E={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!1,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{...i})})},L={args:{type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Alex Carter",ownerInitials:"AC",visibility:"private",starred:!1,selected:!0},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{...i})})},q={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{...i})})},M={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:C,starred:!1,selected:!1},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{...i})})},V={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:C,starred:!1,selected:!0},render:i=>e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{...i})})},A={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"220px"},children:e.jsx(n,{type:"file",title:"Private Document",description:"Only visible to you.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(n,{type:"file",title:"Public Document",description:"Accessible to everyone.",ownerName:"Whisk",ownerInitials:"WH",visibility:"public"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(n,{type:"file",title:"Shared Document",description:"Shared with specific people.",ownerName:"Whisk",ownerInitials:"WH",visibility:"shared"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(n,{type:"file",title:"Organization Document",description:"Shared with organization.",ownerName:"Whisk",ownerInitials:"WH",visibility:"organization",organizationName:"Gitlaw"})})]})},H={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Under 200px (compact: no star, no file count, 16px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"180px"},children:e.jsx(n,{type:"file",title:"Compact File",description:"Smaller card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"180px"},children:e.jsx(n,{type:"folder",title:"Compact Folder",filesCount:5,files:C,starred:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"200px+ (full: star visible, file count visible, 24px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{type:"file",title:"Standard File",description:"Standard card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"240px"},children:e.jsx(n,{type:"folder",title:"Standard Folder",filesCount:5,files:C,starred:!0})})]})]})]})},ge=1080,ye=()=>{const[i,l]=c.useState(new Set),[g,y]=c.useState(!1),[o,w]=c.useState(null),u=c.useRef(null),k=c.useRef(new Map),z=[{id:"1",type:"folder",title:"Service Contract Template",filesCount:8,files:C},{id:"2",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"},{id:"3",type:"file",title:"Mutual NDA",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"4",type:"file",title:"Client Engagement Framework",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"5",type:"file",title:"Project Collaboration Contract",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"6",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"John Titor",ownerInitials:"JT"},{id:"7",type:"file",title:"Creative Partnership Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"8",type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"}],I=c.useCallback(()=>{const t=[];return k.current.forEach((s,a)=>{s&&t.push({id:a,rect:s.getBoundingClientRect()})}),t},[]),S=c.useCallback(t=>{var T;const s=(T=u.current)==null?void 0:T.getBoundingClientRect();if(!s)return new Set;const a=Math.min(t.startX,t.endX)+s.left,m=Math.max(t.startX,t.endX)+s.left,d=Math.min(t.startY,t.endY)+s.top,b=Math.max(t.startY,t.endY)+s.top,F=new Set;return I().forEach(({id:B,rect:r})=>{!(r.right<a||r.left>m||r.bottom<d||r.top>b)&&F.add(B)}),F},[I]),R=c.useCallback(t=>{var m;const s=t.target;if(s.closest('[data-card="true"]')||s.closest("button"))return;t.preventDefault();const a=(m=u.current)==null?void 0:m.getBoundingClientRect();if(a){const d=t.clientX-a.left,b=t.clientY-a.top;y(!0),w({startX:d,startY:b,endX:d,endY:b}),l(new Set)}},[]),f=c.useCallback(t=>{if(g&&o&&u.current){const s=u.current.getBoundingClientRect(),a=t.clientX-s.left,m=t.clientY-s.top,d={...o,endX:a,endY:m};w(d),l(S(d))}},[g,o,S]),h=c.useCallback(()=>{y(!1),w(null)},[]);c.useEffect(()=>{if(g)return document.addEventListener("mousemove",f),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",h)}},[g,f,h]);const x=t=>{l(s=>{const a=new Set(s);return a.has(t)?a.delete(t):a.add(t),a})},v=(t,s)=>{alert(`Opening: ${s}`)},j=()=>{if(o)return{position:"absolute",left:Math.min(o.startX,o.endX),top:Math.min(o.startY,o.endY),width:Math.abs(o.endX-o.startX),height:Math.abs(o.endY-o.startY),backgroundColor:"rgba(94, 73, 214, 0.1)",border:"2px solid rgba(94, 73, 214, 0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:50}};return e.jsxs("div",{ref:u,className:"relative select-none w-full",style:{minHeight:"800px",minWidth:"1400px"},onMouseDown:R,children:[o&&e.jsx("div",{style:j()}),e.jsxs("div",{style:{width:ge,margin:"0 auto"},children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("p",{className:"text-lg font-semibold text-primary",children:i.size>0?`${i.size} file${i.size>1?"s":""} selected`:"Click or drag to select"}),i.size>0&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(W,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(he,{className:"size-6",color:"#5E49D6"}),children:"Delete"}),e.jsx(W,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(xe,{className:"size-6",color:"#5E49D6"}),children:"Download"}),e.jsx(W,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(ve,{className:"size-6",color:"#5E49D6"}),children:"Move"}),e.jsx(W,{variant:"primary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(fe,{className:"size-6",color:"#FFFFFF"}),onClick:()=>l(new Set),children:"Done"})]})]}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:z.map(t=>e.jsx("div",{ref:s=>{s&&k.current.set(t.id,s)},"data-card":"true",children:e.jsx(n,{type:t.type,title:t.title,description:t.type==="file"?t.description:void 0,ownerName:t.type==="file"?t.ownerName:void 0,ownerInitials:t.type==="file"?t.ownerInitials:void 0,filesCount:t.type==="folder"?t.filesCount:void 0,files:t.type==="folder"?t.files:void 0,visibility:"private",selected:i.has(t.id),onClick:()=>x(t.id),onDoubleClick:()=>v(t.id,t.title)})},t.id))}),e.jsx("p",{className:"text-xs text-text-secondary mt-6",children:"Click to select/deselect. Drag anywhere for rubber band selection. Double click to open."})]})]})},O={render:()=>e.jsx(ye,{})};var _,X,Y;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,U,G;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(U=L.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Z,K;q.parameters={...q.parameters,docs:{...(J=q.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,ee,te;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,se,re;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(se=V.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,ne,le;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,de,ce;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...(ue=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const ke=["FileCard","SelectedFileCard","StarredFileCard","FolderCard","SelectedFolderCard","VisibilityStates","ResponsiveSizes","Interactive"];export{E as FileCard,M as FolderCard,O as Interactive,H as ResponsiveSizes,L as SelectedFileCard,V as SelectedFolderCard,q as StarredFileCard,A as VisibilityStates,ke as __namedExportsOrder,Ce as default};
