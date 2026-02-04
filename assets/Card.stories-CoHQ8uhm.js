import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{I as c,c as r}from"./colors-C61pH6SS.js";import{B as D}from"./Button-CdwoKqKF.js";const E="size-5",l=({type:s="file",title:g,description:y,ownerName:w,ownerInitials:o,ownerAvatar:b,visibility:u="private",organizationName:z,starred:I=!1,selected:k=!1,filesCount:T=0,files:B=[],onClick:f,onDoubleClick:h,onStarClick:x,onMenuClick:v,onFileClick:N,doubleClickThreshold:t=250,className:i=""})=>{const a=s==="folder",m=p.useRef(0),d=p.useRef(null),j=p.useCallback(()=>{const n=Date.now(),C=n-m.current;C<t&&C>0?(d.current&&(clearTimeout(d.current),d.current=null),m.current=0,h==null||h()):(m.current=n,d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{f==null||f(),d.current=null},t))},[f,h,t]),W=()=>{switch(u){case"private":return"Private";case"public":return"Public";case"shared":return"Shared";case"organization":return z||"Organization";default:return"Private"}},X=()=>{switch(u){case"private":return e.jsx(c,{name:"lock",className:"size-6 shrink-0",color:r.iconSecondary});case"public":return e.jsx(c,{name:"earth",className:"size-6 shrink-0",color:r.iconSecondary});case"shared":return e.jsx(c,{name:"users-round",className:"size-6 shrink-0",color:r.iconSecondary});case"organization":return e.jsx(c,{name:"building-2",className:"size-6 shrink-0",color:r.iconSecondary});default:return e.jsx(c,{name:"lock",className:"size-6 shrink-0",color:r.iconSecondary})}},F=()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full h-full",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[w&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"size-6 rounded bg-primary flex items-center justify-center shrink-0",children:b?e.jsx("img",{src:b,alt:w,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-[10px] font-black text-negative",children:o})}),e.jsx("span",{className:"text-xs font-normal text-foreground leading-[1.4]",children:w})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),x==null||x()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(c,{name:"star",className:E,color:I?r.iconPrimary:r.iconDisabled})}),e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(c,{name:"ellipsis",className:E,color:r.iconSecondary})})]})]}),e.jsx("h3",{className:"font-serif text-2xl font-normal text-foreground leading-[1.4]",children:g}),y&&e.jsx("p",{className:"text-sm font-normal text-subtle leading-[1.4]",children:y})]}),V=()=>e.jsxs("div",{className:"flex flex-col gap-3 w-full h-full",children:[e.jsxs("div",{className:"flex items-center gap-2 p-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[e.jsx(c,{name:"folder-closed",className:"size-6 shrink-0",color:r.iconPrimary}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("h3",{className:"text-base font-normal text-foreground leading-[1.4] truncate",children:g}),e.jsxs("span",{className:"text-xs font-normal text-subtle leading-[1.4] hidden @[200px]:block",children:[T," files"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),x==null||x()},className:"p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block",children:e.jsx(c,{name:"star",className:E,color:I?r.iconPrimary:r.iconDisabled})}),e.jsx("button",{type:"button",onClick:n=>{n.stopPropagation(),v==null||v()},className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(c,{name:"ellipsis",className:E,color:r.iconSecondary})})]})]}),e.jsx("div",{className:"w-full h-px bg-border"}),e.jsx("div",{className:"flex flex-col w-full flex-1 overflow-hidden",children:B.slice(0,6).map(n=>e.jsxs("div",{className:"flex items-center gap-2 min-h-12 p-3 hover:bg-secondary/50 transition-colors cursor-pointer",onClick:C=>{C.stopPropagation(),N==null||N(n)},children:[e.jsx(c,{name:"file-text",className:"size-6 shrink-0",color:r.iconDisabled}),e.jsx("span",{className:"text-base font-normal text-foreground truncate",children:n.name})]},n.id))})]});return e.jsxs("div",{className:`
        @container bg-card rounded-lg shadow-card overflow-hidden relative cursor-pointer
        w-full min-w-[160px]
        p-4 @[200px]:p-6
        transition-all
        ${i}
      `,style:{aspectRatio:"3/4"},onClick:j,"data-card":"true",children:[a?V():F(),!a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[68px] pointer-events-none",style:{background:"linear-gradient(to bottom, transparent 0%, white 16px, white 100%)"},children:e.jsxs("div",{className:"absolute bottom-4 @[200px]:bottom-6 left-0 right-0 px-4 @[200px]:px-6 flex items-center gap-2",children:[X(),e.jsx("span",{className:"text-sm font-normal text-subtle leading-[1.4]",children:W()})]})}),a&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-11 pointer-events-none",style:{background:"linear-gradient(to top, white 0%, transparent 100%)"}}),k&&e.jsx("div",{className:"absolute inset-0 rounded-lg pointer-events-none",style:{boxShadow:"inset 0 0 0 2px #5E49D6"}})]})};l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{type:{required:!1,tsType:{name:"union",raw:'"file" | "template" | "folder"',elements:[{name:"literal",value:'"file"'},{name:"literal",value:'"template"'},{name:"literal",value:'"folder"'}]},description:"Card type - file, template (same format), or folder",defaultValue:{value:'"file"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Card title"},description:{required:!1,tsType:{name:"string"},description:"Card description (for file/template)"},ownerName:{required:!1,tsType:{name:"string"},description:"Owner name"},ownerInitials:{required:!1,tsType:{name:"string"},description:"Owner initials"},ownerAvatar:{required:!1,tsType:{name:"string"},description:"Owner avatar URL"},visibility:{required:!1,tsType:{name:"union",raw:'"private" | "public" | "shared" | "organization"',elements:[{name:"literal",value:'"private"'},{name:"literal",value:'"public"'},{name:"literal",value:'"shared"'},{name:"literal",value:'"organization"'}]},description:"Visibility status",defaultValue:{value:'"private"',computed:!1}},organizationName:{required:!1,tsType:{name:"string"},description:"Organization name (required when visibility is 'organization')"},starred:{required:!1,tsType:{name:"boolean"},description:"Whether card is starred",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether card is selected",defaultValue:{value:"false",computed:!1}},filesCount:{required:!1,tsType:{name:"number"},description:"Files count (for folder)",defaultValue:{value:"0",computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"CardFileItem"}],raw:"CardFileItem[]"},description:"Files in folder (for folder type)",defaultValue:{value:"[]",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card click (single click selects)"},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On card double click (opens document/folder)"},onStarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On star click"},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On menu click"},onFileClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: CardFileItem) => void",signature:{arguments:[{type:{name:"CardFileItem"},name:"file"}],return:{name:"void"}}},description:"On file click within folder"},doubleClickThreshold:{required:!1,tsType:{name:"number"},description:"Double click threshold in ms (default: 250ms)",defaultValue:{value:"250",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const be={title:"Components/Card",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["file","template","folder"],description:"Card type"},title:{control:"text",description:"Card title"},description:{control:"text",description:"Card description (for file/template)"},visibility:{control:"select",options:["private","public","shared","organization"],description:"Visibility status"},organizationName:{control:"text",description:"Organization name (when visibility is organization)"},starred:{control:"boolean",description:"Whether card is starred"},selected:{control:"boolean",description:"Whether card is selected (shows 2px primary border)"},onFileClick:{action:"file clicked",description:"Callback when a file within a folder is clicked"}},decorators:[s=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(s,{})})]},S=[{id:"1",name:"Service Design Agreement"},{id:"2",name:"Client Engagement Contract"},{id:"3",name:"Non-Disclosure Agreement"},{id:"4",name:"Consulting Services Agreement"},{id:"5",name:"Partnership Agreement"},{id:"6",name:"Employment Contract"}],A={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!1,selected:!1},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...s})})},L={args:{type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Alex Carter",ownerInitials:"AC",visibility:"private",starred:!1,selected:!0},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...s})})},O={args:{type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0,selected:!1},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...s})})},P={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:S,starred:!1,selected:!1},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...s})})},M={args:{type:"folder",title:"Service Contract Template",filesCount:8,files:S,starred:!1,selected:!0},render:s=>e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{...s})})},R={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Private Document",description:"Only visible to you.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Public Document",description:"Accessible to everyone.",ownerName:"Whisk",ownerInitials:"WH",visibility:"public"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Shared Document",description:"Shared with specific people.",ownerName:"Whisk",ownerInitials:"WH",visibility:"shared"})}),e.jsx("div",{style:{width:"220px"},children:e.jsx(l,{type:"file",title:"Organization Document",description:"Shared with organization.",ownerName:"Whisk",ownerInitials:"WH",visibility:"organization",organizationName:"Gitlaw"})})]})},q={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Under 200px (compact: no star, no file count, 16px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"180px"},children:e.jsx(l,{type:"file",title:"Compact File",description:"Smaller card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"180px"},children:e.jsx(l,{type:"folder",title:"Compact Folder",filesCount:5,files:S,starred:!0})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"200px+ (full: star visible, file count visible, 24px padding)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{type:"file",title:"Standard File",description:"Standard card variant.",ownerName:"Whisk",ownerInitials:"WH",visibility:"private",starred:!0})}),e.jsx("div",{style:{width:"240px"},children:e.jsx(l,{type:"folder",title:"Standard Folder",filesCount:5,files:S,starred:!0})})]})]})]})},he=1080,xe=()=>{const[s,g]=p.useState(new Set),[y,w]=p.useState(!1),[o,b]=p.useState(null),u=p.useRef(null),z=p.useRef(new Map),I=[{id:"1",type:"folder",title:"Service Contract Template",filesCount:8,files:S},{id:"2",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"},{id:"3",type:"file",title:"Mutual NDA",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"4",type:"file",title:"Client Engagement Framework",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Open Legal Library",ownerInitials:"OL"},{id:"5",type:"file",title:"Project Collaboration Contract",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"6",type:"file",title:"Design Services Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"John Titor",ownerInitials:"JT"},{id:"7",type:"file",title:"Creative Partnership Agreement",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Blake Logan",ownerInitials:"BL"},{id:"8",type:"file",title:"Service Contract Template",description:"Explains how Mozilla handles minimal personal data.",ownerName:"Alex Carter",ownerInitials:"AC"}],k=p.useCallback(()=>{const t=[];return z.current.forEach((i,a)=>{i&&t.push({id:a,rect:i.getBoundingClientRect()})}),t},[]),T=p.useCallback(t=>{var F;const i=(F=u.current)==null?void 0:F.getBoundingClientRect();if(!i)return new Set;const a=Math.min(t.startX,t.endX)+i.left,m=Math.max(t.startX,t.endX)+i.left,d=Math.min(t.startY,t.endY)+i.top,j=Math.max(t.startY,t.endY)+i.top,W=new Set;return k().forEach(({id:V,rect:n})=>{!(n.right<a||n.left>m||n.bottom<d||n.top>j)&&W.add(V)}),W},[k]),B=p.useCallback(t=>{var m;const i=t.target;if(i.closest('[data-card="true"]')||i.closest("button"))return;t.preventDefault();const a=(m=u.current)==null?void 0:m.getBoundingClientRect();if(a){const d=t.clientX-a.left,j=t.clientY-a.top;w(!0),b({startX:d,startY:j,endX:d,endY:j}),g(new Set)}},[]),f=p.useCallback(t=>{if(y&&o&&u.current){const i=u.current.getBoundingClientRect(),a=t.clientX-i.left,m=t.clientY-i.top,d={...o,endX:a,endY:m};b(d),g(T(d))}},[y,o,T]),h=p.useCallback(()=>{w(!1),b(null)},[]);p.useEffect(()=>{if(y)return document.addEventListener("mousemove",f),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",h)}},[y,f,h]);const x=t=>{g(i=>{const a=new Set(i);return a.has(t)?a.delete(t):a.add(t),a})},v=(t,i)=>{alert(`Opening: ${i}`)},N=()=>{if(o)return{position:"absolute",left:Math.min(o.startX,o.endX),top:Math.min(o.startY,o.endY),width:Math.abs(o.endX-o.startX),height:Math.abs(o.endY-o.startY),backgroundColor:"rgba(94, 73, 214, 0.1)",border:"2px solid rgba(94, 73, 214, 0.5)",borderRadius:"4px",pointerEvents:"none",zIndex:50}};return e.jsxs("div",{ref:u,className:"relative select-none w-full",style:{minHeight:"800px",minWidth:"1400px"},onMouseDown:B,children:[o&&e.jsx("div",{style:N()}),e.jsxs("div",{style:{width:he,margin:"0 auto"},children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("p",{className:"text-lg font-semibold text-primary",children:s.size>0?`${s.size} file${s.size>1?"s":""} selected`:"Click or drag to select"}),s.size>0&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"trash-2",className:"size-4",color:r.iconPrimary}),children:"Delete"}),e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"arrow-down-to-line",className:"size-4",color:r.iconPrimary}),children:"Download"}),e.jsx(D,{variant:"secondary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"folder-input",className:"size-4",color:r.iconPrimary}),children:"Move"}),e.jsx(D,{variant:"primary",size:"s",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"check",className:"size-4",color:r.white}),onClick:()=>g(new Set),children:"Done"})]})]}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:I.map(t=>e.jsx("div",{ref:i=>{i&&z.current.set(t.id,i)},"data-card":"true",children:e.jsx(l,{type:t.type,title:t.title,description:t.type==="file"?t.description:void 0,ownerName:t.type==="file"?t.ownerName:void 0,ownerInitials:t.type==="file"?t.ownerInitials:void 0,filesCount:t.type==="folder"?t.filesCount:void 0,files:t.type==="folder"?t.files:void 0,visibility:"private",selected:s.has(t.id),onClick:()=>x(t.id),onDoubleClick:()=>v(t.id,t.title)})},t.id))}),e.jsx("p",{className:"text-xs text-subtle mt-6",children:"Click to select/deselect. Drag anywhere for rubber band selection. Double click to open."})]})]})},H={render:()=>e.jsx(xe,{})};var Y,_,U;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: "file",
    title: "Service Contract Template",
    description: "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Whisk",
    ownerInitials: "WH",
    visibility: "private",
    starred: false,
    selected: false
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(U=(_=A.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var $,G,J;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: "file",
    title: "Design Services Agreement",
    description: "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "private",
    starred: false,
    selected: true
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(J=(G=L.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Z,K,Q;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: "file",
    title: "Service Contract Template",
    description: "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Whisk",
    ownerInitials: "WH",
    visibility: "private",
    starred: true,
    selected: false
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(Q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,te,ie;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: "folder",
    title: "Service Contract Template",
    filesCount: 8,
    files: sampleFiles,
    starred: false,
    selected: false
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(ie=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ne,ae;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: "folder",
    title: "Service Contract Template",
    filesCount: 8,
    files: sampleFiles,
    starred: false,
    selected: true
  },
  render: args => <div style={{
    width: "240px"
  }}>
      <Card {...args} />
    </div>
}`,...(ae=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,le,oe;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
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
}`,...(oe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ce,pe;q.parameters={...q.parameters,docs:{...(de=q.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
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
    </div>
}`,...(pe=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,fe;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...(fe=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const je=["FileCard","SelectedFileCard","StarredFileCard","FolderCard","SelectedFolderCard","VisibilityStates","ResponsiveSizes","Interactive"];export{A as FileCard,P as FolderCard,H as Interactive,q as ResponsiveSizes,L as SelectedFileCard,M as SelectedFolderCard,O as StarredFileCard,R as VisibilityStates,je as __namedExportsOrder,be as default};
