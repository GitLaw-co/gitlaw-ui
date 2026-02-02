import{j as t}from"./jsx-runtime-DiklIkkE.js";const l={primary:{bg:"bg-primary",text:"text-negative"},secondary:{bg:"bg-secondary",text:"text-foreground-button"},red:{bg:"bg-destructive",text:"text-negative"},orange:{bg:"bg-alert",text:"text-negative"},green:{bg:"bg-positive",text:"text-negative"}},i=({type:n="red",showNumber:s=!0,count:a=7,className:r=""})=>{const e=l[n];return s?t.jsx("div",{className:`
        size-[17px] rounded-full
        flex items-center justify-center
        ${e.bg}
        ${r}
      `,children:t.jsx("span",{className:`text-xxs font-normal ${e.text}`,children:a>99?"99+":a})}):t.jsx("div",{className:`
          size-3 rounded-full
          ${e.bg}
          ${r}
        `})};i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'red' | 'orange' | 'green'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'red'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'green'"}]},description:"The color type of the badge",defaultValue:{value:"'red'",computed:!1}},showNumber:{required:!1,tsType:{name:"boolean"},description:"Show number in badge",defaultValue:{value:"true",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"The number to display",defaultValue:{value:"7",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};export{i as B};
