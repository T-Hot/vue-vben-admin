import{aQ as B,aR as N,aS as z,J as W,C as T}from"./entry/index-DxjqCcSt-1711674585023.js";import{f as k,u as s,s as L,g as U,j as F,d as P,b as V,a7 as j,Z as D,a8 as G,a9 as g,k as h,G as b}from"./vue-COhTiP8A.js";import{P as H}from"./index-DuVAoe8C.js";import"./antd-D1Pawy5U.js";import"./useContentViewHeight-BnAge9HZ.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./onMountedOrActivated-GpUdBAv_.js";const $="watermark-dom",x=k(null),y=new Map;function _(n){return Array.from(y.values()).find(t=>t.targetElement===n)}function A(n,t){const r=document.createElement("canvas"),u=300,l=240;Object.assign(r,{width:u,height:l});const a=r.getContext("2d");if(a){const i=(t==null?void 0:t.fontFamily)||"Vedana",d=(t==null?void 0:t.fontSize)||15,c=(t==null?void 0:t.fontColor)||"rgba(0, 0, 0, 0.15)",f=(t==null?void 0:t.textAlign)||"left",e=(t==null?void 0:t.textBaseline)||"middle",o=(t==null?void 0:t.rotate)||20;a.rotate(-o*Math.PI/180),a.font=`${d}px ${i}`,a.fillStyle=c,a.textAlign=f,a.textBaseline=e,a.fillText(n,u/20,l)}return r.toDataURL("image/png")}const E=(n,t,r)=>{n.className="__"+$,n.style.pointerEvents="none",n.style.display="block",n.style.visibility="visible",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.height="100%",n.style.width="100%",n.style.background=`url(${A(s(x)||t,r)}) left top repeat`},J=()=>new MutationObserver(t=>{var r;for(const u of t){for(const l of Array.from(u.removedNodes)){const a=_(l);if(!a)return;const{targetElement:i,parentElement:d}=a;d!=null&&d.contains(i)||(r=a==null?void 0:a.parentElement)==null||r.appendChild(l)}if(u.attributeName==="style"&&u.target){const l=u.target,a=_(l);if(a){const{waterMarkOptions:i={}}=a;E(l,l==null?void 0:l["data-watermark-text"],i)}}}});function v(n=k(document.body),t={}){const r=Symbol($);if(s(n)&&y.has(r)){const{setWatermark:e,clear:o}=y.get(r);return{setWatermark:e,clear:o,clearAll:S}}const l=z(function(){const e=s(n);if(!e)return;const{clientHeight:o,clientWidth:m}=e;d({height:o,width:m})}),a=L(),i=()=>{var m,C;const e=s(a);a.value=void 0;const o=s(n);y.has(r)&&((C=(m=y.get(r))==null?void 0:m.obInstance)==null||C.disconnect()),y.delete(r),o&&(e&&o.removeChild(e),B(o,l))};function d(e={}){const o=s(a);o&&(W(e.width)&&(o.style.width=`${e.width}px`),W(e.height)&&(o.style.height=`${e.height}px`),W(e.str)&&(o.style.background=`url(${A(e.str,t)}) left top repeat`))}const c=e=>{var p,I;if(s(a)&&y.has(r)){x.value=e,d({str:e});return}const o=document.createElement("div");o["data-watermark-text"]=e,x.value=e,a.value=o,E(o,e,t);const m=s(n);if(!m)return;const{clientHeight:C,clientWidth:R}=m;d({str:e,width:R,height:C}),m.appendChild(o),y.set(r,{setWatermark:f,clear:i,parentElement:m,targetElement:o,obInstance:J(),waterMarkOptions:t}),(I=(p=y.get(r))==null?void 0:p.obInstance)==null||I.observe(m,{childList:!0,subtree:!0,attributes:!0})};function f(e){c(e),N(document.documentElement,l),U()&&F(()=>{i()})}return{setWatermark:f,clear:i,clearAll:S}}function S(){Array.from(y.values()).forEach(n=>{var t;(t=n==null?void 0:n.obInstance)==null||t.disconnect(),n.clear()})}const M=P({__name:"index",setup(n){const t=k(document.body),{setWatermark:r,clear:u,clearAll:l}=v(),{setWatermark:a}=v(),{setWatermark:i}=v(t,{fontColor:"red",fontSize:12,rotate:30});return V(()=>{l()}),(d,c)=>{const f=j("a-button");return D(),G(s(H),{title:"水印示例"},{default:g(()=>[h(s(T),{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:g(()=>[h(f,{type:"primary",class:"mr-2",onClick:c[0]||(c[0]=e=>s(r)("WaterMark Info1"))},{default:g(()=>[b(" Create Watermark1 ")]),_:1}),h(f,{type:"primary",class:"mr-2",onClick:c[1]||(c[1]=e=>s(a)("WaterMark Info2"))},{default:g(()=>[b(" Create Watermark2 ")]),_:1}),h(f,{type:"primary",class:"mr-2",onClick:c[2]||(c[2]=e=>s(i)("Custome Style WaterMark"))},{default:g(()=>[b(" Create custom style Watermark ")]),_:1}),h(f,{color:"error",class:"mr-2",onClick:s(u)},{default:g(()=>[b(" Clear Watermark1 ")]),_:1},8,["onClick"]),h(f,{color:"error",class:"mr-2",onClick:s(l)},{default:g(()=>[b(" ClearAll ")]),_:1},8,["onClick"]),h(f,{color:"warning",class:"mr-2",onClick:c[3]||(c[3]=e=>s(r)("WaterMark Info New"))},{default:g(()=>[b(" Update Watermark1 ")]),_:1})]),_:1})]),_:1})}}});export{M as default};
