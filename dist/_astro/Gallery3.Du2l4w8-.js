import{g as R,j as s,S as I,N as O,P as D,a as X}from"./pagination.DpC28DZ8.js";import"./index.DHQ29l5n.js";import{c as k}from"./create-shadow.CNT41frw.js";import{e as q}from"./effect-init.D-_Wjm5S.js";import{e as z}from"./effect-target.BPgM_36H.js";import{e as A}from"./effect-virtual-transition-end.D01l5vmq.js";/* empty css                          *//* empty css                          */function C(c){let{swiper:t,extendParams:M,on:j}=c;M({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),q({effect:"cards",swiper:t,on:j,setTranslate:()=>{const{slides:i,activeIndex:o,rtlTranslate:r}=t,n=t.params.cardsEffect,{startTranslate:g,isTouched:w}=t.touchEventsData,v=r?-t.translate:t.translate;for(let f=0;f<i.length;f+=1){const d=i[f],S=d.progress,e=Math.min(Math.max(S,-4),4);let h=d.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(h-=i[0].swiperSlideOffset);let l=t.params.cssMode?-h-t.translate:-h,p=0;const $=-100*Math.abs(e);let u=1,x=-n.perSlideRotate*e,b=n.perSlideOffset-Math.abs(e)*.75;const m=t.virtual&&t.params.virtual.enabled?t.virtual.from+f:f,E=(m===o||m===o-1)&&e>0&&e<1&&(w||t.params.cssMode)&&v<g,T=(m===o||m===o+1)&&e<0&&e>-1&&(w||t.params.cssMode)&&v>g;if(E||T){const a=(1-Math.abs((Math.abs(e)-.5)/.5))**.5;x+=-28*e*a,u+=-.5*a,b+=96*a,p=`${-25*a*Math.abs(e)}%`}if(e<0?l=`calc(${l}px ${r?"-":"+"} (${b*Math.abs(e)}%))`:e>0?l=`calc(${l}px ${r?"-":"+"} (-${b*Math.abs(e)}%))`:l=`${l}px`,!t.isHorizontal()){const a=p;p=l,l=a}const N=e<0?`${1+(1-u)*e}`:`${1-(1-u)*e}`,y=`
        translate3d(${l}, ${p}, ${$}px)
        rotateZ(${n.rotate?r?-x:x:0}deg)
        scale(${N})
      `;if(n.slideShadows){let a=d.querySelector(".swiper-slide-shadow");a||(a=k("cards",d)),a&&(a.style.opacity=Math.min(Math.max((Math.abs(e)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(S))+i.length;const P=z(n,d);P.style.transform=y}},setTransition:i=>{const o=t.slides.map(r=>R(r));o.forEach(r=>{r.style.transitionDuration=`${i}ms`,r.querySelectorAll(".swiper-slide-shadow").forEach(n=>{n.style.transitionDuration=`${i}ms`})}),A({swiper:t,duration:i,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const G=[{id:1,url:"https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16",title:"Retrato 1"},{id:2,url:"https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d",title:"Retrato 2"},{id:3,url:"https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d",title:"Retrato 3"},{id:4,url:"https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d",title:"Retrato 4"},{id:5,url:"https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d",title:"Retrato 5"}];function U(){return s.jsxs("div",{className:"gallery-container",children:[s.jsxs("div",{className:"gallery-title",children:[s.jsx("h1",{className:"title-animation-3",children:"Galería Cartas"}),s.jsx("p",{children:"Efecto Baraja"})]}),s.jsx("div",{className:"flex justify-center items-center h-[70vh]",children:s.jsx("div",{className:"w-[350px] h-[500px]",children:s.jsx(I,{modules:[C,O,D],effect:"cards",navigation:!0,pagination:{clickable:!0},className:"w-full h-full",children:G.map(c=>s.jsx(X,{children:s.jsxs("div",{className:"relative w-full h-full rounded-2xl overflow-hidden",children:[s.jsx("img",{src:c.url,alt:c.title,className:"w-full h-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",children:s.jsx("div",{className:"absolute bottom-10 left-10",children:s.jsx("h2",{className:"text-3xl font-bold text-white",children:c.title})})})]})},c.id))})})})]})}export{U as default};