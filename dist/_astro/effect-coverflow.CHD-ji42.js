import{c as v}from"./create-shadow.CNT41frw.js";import{e as Y}from"./effect-init.D-_Wjm5S.js";import{e as A}from"./effect-target.BPgM_36H.js";import{g as D}from"./pagination.DpC28DZ8.js";function Z($){let{swiper:a,extendParams:x,on:T}=$;x({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Y({effect:"coverflow",swiper:a,on:T,setTranslate:()=>{const{width:l,height:E,slides:o,slidesSizesGrid:d}=a,t=a.params.coverflowEffect,s=a.isHorizontal(),S=a.translate,q=s?-S+l/2:-S+E/2,b=s?t.rotate:-t.rotate,z=t.depth;for(let f=0,O=o.length;f<O;f+=1){const r=o[f],h=d[f],H=r.swiperSlideOffset,M=(q-H-h/2)/h,e=typeof t.modifier=="function"?t.modifier(M):M*t.modifier;let p=s?b*e:0,w=s?0:b*e,m=-z*Math.abs(e),i=t.stretch;typeof i=="string"&&i.indexOf("%")!==-1&&(i=parseFloat(t.stretch)/100*h);let g=s?0:i*e,y=s?i*e:0,u=1-(1-t.scale)*Math.abs(e);Math.abs(y)<.001&&(y=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(p)<.001&&(p=0),Math.abs(w)<.001&&(w=0),Math.abs(u)<.001&&(u=0);const P=`translate3d(${y}px,${g}px,${m}px)  rotateX(${w}deg) rotateY(${p}deg) scale(${u})`,X=A(t,r);if(X.style.transform=P,r.style.zIndex=-Math.abs(Math.round(e))+1,t.slideShadows){let n=s?r.querySelector(".swiper-slide-shadow-left"):r.querySelector(".swiper-slide-shadow-top"),c=s?r.querySelector(".swiper-slide-shadow-right"):r.querySelector(".swiper-slide-shadow-bottom");n||(n=v("coverflow",r,s?"left":"top")),c||(c=v("coverflow",r,s?"right":"bottom")),n&&(n.style.opacity=e>0?e:0),c&&(c.style.opacity=-e>0?-e:0)}}},setTransition:l=>{a.slides.map(o=>D(o)).forEach(o=>{o.style.transitionDuration=`${l}ms`,o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${l}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}export{Z as E};