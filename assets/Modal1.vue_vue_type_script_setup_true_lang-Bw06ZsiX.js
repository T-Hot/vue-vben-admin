import{a as h,B as g}from"./index-S-L_N5jP.js";import{d as v,f as i,w as M,a7 as k,Z as a,a8 as y,a9 as s,k as C,G as b,_ as o,ab as u,F as B,aa as w,a0 as x,ac as L,u as d}from"./vue-COhTiP8A.js";const F={key:0,class:"h-full text-center line-height-100px"},N={key:1},R=v({__name:"Modal1",setup(T){const e=i(!0),t=i(10),[c,{setModalProps:r,redoModalHeight:m}]=h();M(()=>t.value,()=>{m()});function f(n){n&&(e.value=!0,r({loading:!0,confirmLoading:!0}),setTimeout(()=>{t.value=Math.round(Math.random()*30+5),e.value=!1,r({loading:!1,confirmLoading:!1})},3e3))}function p(){t.value=Math.round(Math.random()*20+10)}return(n,V)=>{const _=k("a-button");return a(),y(d(g),L(n.$attrs,{destroyOnClose:"",onRegister:d(c),title:"Modal Title",helpMessage:["提示1","提示2"],onOpenChange:f}),{insertFooter:s(()=>[C(_,{type:"primary",danger:"",onClick:p,disabled:e.value},{default:s(()=>[b("点我更新内容")]),_:1},8,["disabled"])]),default:s(()=>[e.value?(a(),o("div",F,"加载中，稍等3秒……")):u("",!0),e.value?u("",!0):(a(),o("ul",N,[(a(!0),o(B,null,w(t.value,l=>(a(),o("li",{key:l},"加载完成"+x(l)+"！",1))),128))]))]),_:1},16,["onRegister"])}}});export{R as _};
