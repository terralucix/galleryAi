import{j as t,S as a,N as r,P as s,a as i}from"./pagination.DpC28DZ8.js";import"./index.DHQ29l5n.js";import{A as o}from"./autoplay.nyIPMZLo.js";/* empty css                          */const e=[{id:1,url:"https://source.unsplash.com/random/1600x900/?art,1",title:"Arte Digital 1"},{id:2,url:"https://source.unsplash.com/random/1600x900/?art,2",title:"Arte Digital 2"},{id:3,url:"https://source.unsplash.com/random/1600x900/?art,3",title:"Arte Digital 3"},{id:4,url:"https://source.unsplash.com/random/1600x900/?art,4",title:"Arte Digital 4"},{id:5,url:"https://source.unsplash.com/random/1600x900/?art,5",title:"Arte Digital 5"}];function u(){return t.jsxs("div",{className:"h-screen bg-black flex flex-col",children:[t.jsxs("div",{className:"text-center pt-16 pb-8",children:[t.jsx("h1",{className:"text-6xl font-bold text-white title-animation-6 mb-4",children:"Galería 6"}),t.jsx("p",{className:"text-xl text-gray-300",children:"Arte Digital"})]}),t.jsx("div",{className:"flex-1 px-8",children:t.jsx(a,{modules:[r,s,o],navigation:!0,pagination:{clickable:!0},autoplay:{delay:3e3},loop:!0,className:"h-full rounded-lg overflow-hidden",children:e.map(l=>t.jsx(i,{children:t.jsxs("div",{className:"relative h-full w-full",children:[t.jsx("img",{src:l.url,alt:l.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent",children:t.jsx("h3",{className:"text-3xl font-bold text-white",children:l.title})})]})},l.id))})}),t.jsx("div",{className:"p-8",children:t.jsx("div",{className:"grid grid-cols-5 gap-4",children:e.map(l=>t.jsx("div",{className:"aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-white/50 transition-all",children:t.jsx("img",{src:l.url,alt:l.title,className:"w-full h-full object-cover hover:scale-110 transition-transform duration-300"})},l.id))})})]})}export{u as default};
