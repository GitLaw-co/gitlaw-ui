import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as n}from"./TopHeader-D0-y3BZF.js";import"./index-DRjF_FHU.js";import"./Icon-CGgPBvn_.js";import"./Badge-BTb2MvAY.js";import"./Button-DquhqAJK.js";import"./colors-CUQOl70L.js";import"./Dropdown-CCxXfqYx.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";const j={title:"Components/Navigation/TopHeader",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Simple page title"},breadcrumbs:{control:"object",description:"Breadcrumb navigation items"},showStroke:{control:"boolean",description:"Show bottom border"},showFiles:{control:"boolean",description:"Show files button"},fileCount:{control:"number",description:"Number of files"},isSignedIn:{control:"boolean",description:"User signed in state"},isLanding:{control:"boolean",description:"Landing page variant"},showMenu:{control:"boolean",description:"Show hamburger menu"}}},r={args:{title:"Influencer Agreement with Blake Logan",showStroke:!0,isSignedIn:!0}},t={args:{title:"Influencer Agreement with Blake Logan",showStroke:!0,isSignedIn:!1,isLanding:!1}},o={args:{title:"Influencer Agreement with Blake Logan",showStroke:!0,showFiles:!0,fileCount:2,isSignedIn:!0,isLanding:!1}},i={render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(n,{title:"Influencer Agreement with Blake Logan",showStroke:!0,isSignedIn:!0}),e.jsx(n,{title:"Influencer Agreement with Blake Logan",showStroke:!0,showFiles:!0,fileCount:1,isSignedIn:!0}),e.jsx(n,{title:"Influencer Agreement with Blake Logan",showStroke:!0,showFiles:!0,fileCount:4,isSignedIn:!0}),e.jsx(n,{breadcrumbs:[{id:"1",label:"Level One"},{id:"2",label:"Level Two"}],showStroke:!0,isSignedIn:!0}),e.jsx(n,{breadcrumbs:[{id:"1",label:"Level One"},{id:"2",label:"Level Two"},{id:"3",label:"Level Three"}],showStroke:!0,isSignedIn:!0}),e.jsx(n,{breadcrumbs:[{id:"1",label:"Level One"},{id:"2",label:"Level Two"},{id:"3",label:"Level Three"},{id:"4",label:"Level Four"}],showStroke:!0,isSignedIn:!0}),e.jsx(n,{title:"Influencer Agreement with Blake Logan",showStroke:!0,isSignedIn:!1})]})};var l,s,a;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    isSignedIn: true
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var u,d,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    isSignedIn: false,
    isLanding: false
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,m,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    showFiles: true,
    fileCount: 2,
    isSignedIn: true,
    isLanding: false
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,w,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col">
      {/* Signed in - simple title */}
      <TopHeader title="Influencer Agreement with Blake Logan" showStroke={true} isSignedIn={true} />

      {/* Signed in - with files */}
      <TopHeader title="Influencer Agreement with Blake Logan" showStroke={true} showFiles={true} fileCount={1} isSignedIn={true} />

      {/* Signed in - with multiple files */}
      <TopHeader title="Influencer Agreement with Blake Logan" showStroke={true} showFiles={true} fileCount={4} isSignedIn={true} />

      {/* 2-level breadcrumbs */}
      <TopHeader breadcrumbs={[{
      id: "1",
      label: "Level One"
    }, {
      id: "2",
      label: "Level Two"
    }]} showStroke={true} isSignedIn={true} />

      {/* 3-level breadcrumbs */}
      <TopHeader breadcrumbs={[{
      id: "1",
      label: "Level One"
    }, {
      id: "2",
      label: "Level Two"
    }, {
      id: "3",
      label: "Level Three"
    }]} showStroke={true} isSignedIn={true} />

      {/* Collapsed breadcrumbs (4+ levels) */}
      <TopHeader breadcrumbs={[{
      id: "1",
      label: "Level One"
    }, {
      id: "2",
      label: "Level Two"
    }, {
      id: "3",
      label: "Level Three"
    }, {
      id: "4",
      label: "Level Four"
    }]} showStroke={true} isSignedIn={true} />

      {/* Logged out */}
      <TopHeader title="Influencer Agreement with Blake Logan" showStroke={true} isSignedIn={false} />
    </div>
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const C=["Default","LoggedOut","Interactive","AllVariants"];export{i as AllVariants,r as Default,o as Interactive,t as LoggedOut,C as __namedExportsOrder,j as default};
