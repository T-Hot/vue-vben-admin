var f=(g,i,o)=>new Promise((p,n)=>{var d=e=>{try{r(o.next(e))}catch(s){n(s)}},l=e=>{try{r(o.throw(e))}catch(s){n(s)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(d,l);r((o=o.apply(g,i)).next())});import{aE as k,h as G}from"./entry/index-DxjqCcSt-1711674585023.js";import{a as V,B as b}from"./index-S-L_N5jP.js";import{_ as M}from"./BasicForm.vue_vue_type_script_setup_true_lang-DLWSENYm.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CrE0KI75.js";import"./componentMap-DX1W4QF4.js";import{u as D}from"./useForm-DJMb_USF.js";import{aj as v}from"./antd-D1Pawy5U.js";import{d as E,f as y,Z as h,a8 as A,a9 as m,k as x,u as a,_ as I,aa as N,ag as P,G as U,a0 as B,F as $,ac as j}from"./vue-COhTiP8A.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./FormItem.vue_vue_type_script_lang-imnDPsV5.js";import"./helper-BzV2lckL.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFI0U2pd.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DCh5r4-2.js";import"./download-CkqX6zmk.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPEKlKPD.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSaQ-mr5.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-C_h4YWZJ.js";import"./index-DdW_cS5o.js";const de=E({__name:"index",setup(g){const i=k(),o=v.Group,{t:p}=G(),[n,{closeModal:d}]=V(()=>f(this,null,function*(){S()})),l=y({development:"http://www.a.com",test:"http://www.b.com",prod:"http://www.c.com"}),r=y({display:"flex",height:"30px",lineHeight:"30px"}),[e,{validateFields:s,setFieldsValue:C}]=D({showActionButtonGroup:!1,schemas:[{field:"api",label:p("layout.header.dropdownChangeApi"),colProps:{span:24},defaultValue:"production",required:!0,slot:"api"}]}),F=()=>f(this,null,function*(){const t=yield s();i.setApiAddress({key:t.api,val:l.value[t.api]}),location.reload()}),R=()=>{d()},S=()=>{const{key:t=""}=i.getApiAddress;t&&C({api:t})};return(t,q)=>(h(),A(a(b),j({title:a(p)("layout.header.dropdownChangeApi")},t.$attrs,{onRegister:a(n),onOk:F,onCancel:R}),{default:m(()=>[x(a(M),{onRegister:a(e)},{api:m(({model:_,field:w})=>[x(a(o),{value:_[w],"onUpdate:value":c=>_[w]=c},{default:m(()=>[(h(!0),I($,null,N(l.value,(c,u)=>(h(),A(a(v),{style:P(r.value),value:u,key:u},{default:m(()=>[U(B(u)+": "+B(c),1)]),_:2},1032,["style","value"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{de as default};
