import{g as N,j as t,S as E,N as T,P as M,a as D}from"./pagination.DpC28DZ8.js";import{r as b}from"./index.DHQ29l5n.js";import{A as F}from"./autoplay.nyIPMZLo.js";import{c as v}from"./create-shadow.CNT41frw.js";import{e as P}from"./effect-init.D-_Wjm5S.js";import{e as R}from"./effect-target.BPgM_36H.js";import{e as $}from"./effect-virtual-transition-end.D01l5vmq.js";/* empty css                          *//* empty css                          */function k(c){let{swiper:e,extendParams:d,on:p}=c;d({flipEffect:{slideShadows:!0,limitRotation:!0}});const f=(s,i)=>{let r=e.isHorizontal()?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),o=e.isHorizontal()?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");r||(r=v("flip",s,e.isHorizontal()?"left":"top")),o||(o=v("flip",s,e.isHorizontal()?"right":"bottom")),r&&(r.style.opacity=Math.max(-i,0)),o&&(o.style.opacity=Math.max(i,0))};P({effect:"flip",swiper:e,on:p,setTranslate:()=>{const{slides:s,rtlTranslate:i}=e,r=e.params.flipEffect;for(let o=0;o<s.length;o+=1){const l=s[o];let h=l.progress;e.params.flipEffect.limitRotation&&(h=Math.max(Math.min(l.progress,1),-1));const x=l.swiperSlideOffset;let n=-180*h,w=0,u=e.params.cssMode?-x-e.translate:-x,g=0;e.isHorizontal()?i&&(n=-n):(g=u,u=0,w=-n,n=0),l.style.zIndex=-Math.abs(Math.round(h))+s.length,r.slideShadows&&f(l,h);const j=`translate3d(${u}px, ${g}px, 0px) rotateX(${w}deg) rotateY(${n}deg)`,S=R(r,l);S.style.transform=j}},setTransition:s=>{const i=e.slides.map(r=>N(r));i.forEach(r=>{r.style.transitionDuration=`${s}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>{o.style.transitionDuration=`${s}ms`})}),$({swiper:e,duration:s,transformElements:i})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(s=>{let i=s.progress;e.params.flipEffect.limitRotation&&(i=Math.max(Math.min(s.progress,1),-1)),f(s,i)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const y=[{id:1,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Future World 1",description:"Digital Exploration"},{id:2,url:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",title:"Future World 2",description:"Virtual Reality"},{id:3,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Future World 3",description:"Digital Space"},{id:4,url:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",title:"Future World 4",description:"Tech Dreams"},{id:5,url:"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",title:"Future World 5",description:"Digital Future"}];function X(){const[c,e]=b.useState(null),[d,p]=b.useState(0),f=a=>{c&&(c.slideTo(a),p(a))};return t.jsxs("div",{className:"h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900",children:[t.jsxs("div",{className:"text-center pt-16 pb-8",children:[t.jsx("h1",{className:"text-6xl font-bold title-animation-8 mb-4",children:"Future Gallery"}),t.jsx("p",{className:"text-xl text-blue-300",children:"Digital Dimensions"})]}),t.jsx("div",{className:"flex justify-center items-center h-[60vh]",children:t.jsx("div",{className:"w-[80%] max-w-4xl",children:t.jsx(E,{onSwiper:e,modules:[k,T,M,F],effect:"flip",flipEffect:{slideShadows:!0,limitRotation:!0},grabCursor:!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,onSlideChange:a=>p(a.realIndex),className:"w-full h-full rounded-xl overflow-hidden",children:y.map(a=>t.jsx(D,{children:t.jsxs("div",{className:"relative w-full h-[60vh] group",children:[t.jsx("img",{src:a.url,alt:a.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500",children:t.jsxs("div",{className:"absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500",children:[t.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:a.title}),t.jsx("p",{className:"text-lg text-blue-300",children:a.description})]})})]})},a.id))})})}),t.jsx("div",{className:"px-8 pt-8",children:t.jsx("div",{className:"grid grid-cols-5 gap-4",children:y.map((a,m)=>t.jsxs("div",{onClick:()=>f(m),className:`relative aspect-video rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${d===m?"ring-2 ring-blue-400 scale-105":"hover:scale-105"}`,children:[t.jsx("img",{src:a.url,alt:a.title,className:"w-full h-full object-cover"}),t.jsx("div",{className:`absolute inset-0 bg-black/50 transition-opacity duration-300 ${d===m?"opacity-0":"opacity-50 hover:opacity-30"}`,children:t.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:t.jsx("p",{className:"text-white text-center font-bold px-2",children:a.title})})})]},a.id))})})]})}export{X as default};
