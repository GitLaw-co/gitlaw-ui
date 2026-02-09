import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{P as c}from"./PageNav-CsASu-Ph.js";import"./MenuItem-Dv70_nnm.js";import"./Icon-CGgPBvn_.js";import"./Button-DquhqAJK.js";import"./colors-CUQOl70L.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";import"./Avatar-fRZogy1Q.js";const i={id:"personal",name:"Alex Carter",type:"Personal Account",initials:"AC"},S={id:"whisk",name:"Whisk",type:"Organization",avatar:"https://placehold.co/32x32/2cb67d/ffffff?text=W"},W={id:"acme",name:"Acme Corp",type:"Organization",avatar:"https://placehold.co/32x32/6366f1/ffffff?text=A"},E={id:"nova",name:"Nova Labs",type:"Organization",avatar:"https://placehold.co/32x32/f59e0b/ffffff?text=N"},s=[i,S,W,E],r=[{id:"profile",label:"Profile"},{id:"account",label:"Account"},{id:"organizations",label:"Organizations"},{id:"contacts",label:"Contacts"},{id:"api-keys",label:"API keys"},{id:"memories",label:"Memories"},{id:"billing",label:"Billing"}],z=[{id:"organization",label:"Organization"},{id:"people",label:"People"},{id:"contacts",label:"Contacts"},{id:"memories",label:"Memories"},{id:"billing",label:"Billing"}],Q={title:"Components/Navigation/PageNav",component:c,parameters:{layout:"centered",backgrounds:{default:"page",values:[{name:"page",value:"#F7F6FF"}]}},tags:["autodocs"]},e={args:{activeAccount:i,accounts:s,items:r,activeItemId:"profile"}},a={render:()=>t.jsxs("div",{className:"flex gap-12",children:[t.jsxs("div",{children:[t.jsx("p",{className:"mb-4 text-sm font-medium text-text-secondary",children:"Personal Account"}),t.jsx(c,{activeAccount:i,accounts:s,items:r,activeItemId:"profile"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-4 text-sm font-medium text-text-secondary",children:"Organization Account"}),t.jsx(c,{activeAccount:S,accounts:s,items:z,activeItemId:"organization"})]})]})},o={render:()=>{const[l,j]=d.useState(i),[C,m]=d.useState("profile"),O=l.id==="personal"?r:z,F=n=>{j(n),m(n.id==="personal"?"profile":"organization")};return t.jsx("div",{className:"p-8",children:t.jsx(c,{activeAccount:l,accounts:s,items:O,activeItemId:C,onItemClick:n=>m(n.id),onAccountSwitch:F})})}};var p,u,v,g,A;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    activeAccount: personalAccount,
    accounts: allAccounts,
    items: personalItems,
    activeItemId: "profile"
  }
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"Single controllable story with args",...(A=(g=e.parameters)==null?void 0:g.docs)==null?void 0:A.description}}};var f,I,h,x,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12">
      <div>
        <p className="mb-4 text-sm font-medium text-text-secondary">Personal Account</p>
        <PageNav activeAccount={personalAccount} accounts={allAccounts} items={personalItems} activeItemId="profile" />
      </div>
      <div>
        <p className="mb-4 text-sm font-medium text-text-secondary">Organization Account</p>
        <PageNav activeAccount={orgWhisk} accounts={allAccounts} items={orgItems} activeItemId="organization" />
      </div>
    </div>
}`,...(h=(I=a.parameters)==null?void 0:I.docs)==null?void 0:h.source},description:{story:"Showcase showing both contexts side by side",...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};var N,P,y,k,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [activeAccount, setActiveAccount] = useState<PageNavAccount>(personalAccount);
    const [activeItemId, setActiveItemId] = useState("profile");
    /* eslint-enable react-hooks/rules-of-hooks */

    const isPersonal = activeAccount.id === "personal";
    const currentItems = isPersonal ? personalItems : orgItems;
    const handleAccountSwitch = (account: PageNavAccount) => {
      setActiveAccount(account);
      // Reset to first item when switching context
      setActiveItemId(account.id === "personal" ? "profile" : "organization");
    };
    return <div className="p-8">
        <PageNav activeAccount={activeAccount} accounts={allAccounts} items={currentItems} activeItemId={activeItemId} onItemClick={item => setActiveItemId(item.id)} onAccountSwitch={handleAccountSwitch} />
      </div>;
  }
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:`Fully interactive PageNav demonstrating:
- Click the context switcher to open the account dropdown
- Switch between Personal and Organization accounts
- Nav items update to match the selected context
- Click nav items to change active state`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};const T=["Default","AllVariants","Interactive"];export{a as AllVariants,e as Default,o as Interactive,T as __namedExportsOrder,Q as default};
