import{j as e,S as a,N as l,P as s,a as i}from"./pagination.DpC28DZ8.js";import"./index.DHQ29l5n.js";import{A as o}from"./autoplay.nyIPMZLo.js";import{E as r}from"./effect-coverflow.CHD-ji42.js";/* empty css                          */import"./gallery4.7dfcd21d.l0sNRNKZ.js";import"./create-shadow.CNT41frw.js";import"./effect-init.D-_Wjm5S.js";import"./effect-target.BPgM_36H.js";const c=[{id:1,url:"https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16",title:"Paisaje 1"},{id:2,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Paisaje 2"},{id:3,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Paisaje 3"},{id:4,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Paisaje 4"},{id:5,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Paisaje 5"}];function g(){return e.jsxs("div",{className:"gallery-container",children:[e.jsxs("div",{className:"gallery-title",children:[e.jsx("h1",{className:"title-animation-4",children:"Galería Coverflow"}),e.jsx("p",{children:"Efecto Profundidad"})]}),e.jsx("div",{className:"h-[70vh] px-4",children:e.jsx(a,{modules:[r,l,s,o],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:2,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},navigation:!0,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,className:"w-full h-full",children:c.map(t=>e.jsx(i,{children:e.jsxs("div",{className:"relative w-full h-full",children:[e.jsx("img",{src:t.url,alt:t.title,className:"w-full h-full object-cover rounded-lg"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg",children:e.jsx("div",{className:"absolute bottom-10 left-10",children:e.jsx("h2",{className:"text-3xl font-bold text-white",children:t.title})})})]})},t.id))})})]})}export{g as default};
