import{j as e}from"./jsx-runtime-DiklIkkE.js";import{s}from"./colors-CUQOl70L.js";const r=({starred:a=!1,className:t="size-5"})=>{const i=a?s.active:s.inactive;return e.jsx("svg",{viewBox:"0 0 24 24",fill:i,xmlns:"http://www.w3.org/2000/svg",className:t,children:e.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"})})};r.__docgenInfo={description:`StarIcon — filled star icon using star color tokens.

This is the ONE exception to the outline icon set: stars are always
rendered as a solid fill (no stroke) using the star design tokens.

@example
<StarIcon starred className="size-5" />
<StarIcon className="size-4" />`,methods:[],displayName:"StarIcon",props:{starred:{required:!1,tsType:{name:"boolean"},description:"Whether the star is active (filled primary) or inactive (filled secondary)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:'Tailwind size class (e.g., "size-4", "size-5")',defaultValue:{value:'"size-5"',computed:!1}}}};export{r as S};
