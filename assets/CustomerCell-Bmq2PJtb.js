import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-B3ED1Z0F.js";import{_ as l}from"./TableImg.vue_vue_type_style_index_0_lang-CtmF-91d.js";import"./componentMap-DX1W4QF4.js";import{u as h}from"./useTable-CRPyEQZR.js";import{d as k}from"./table-B4YCoenZ.js";import{Q as n,a1 as y}from"./antd-D1Pawy5U.js";import{d as f,k as p,G as s,l as x,Z as e,_ as g,a9 as o,F as I,a0 as m,a8 as i,u as t,ab as v}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DLWSENYm.js";import"./FormItem.vue_vue_type_script_lang-imnDPsV5.js";import"./entry/index-DxjqCcSt-1711674585023.js";import"./helper-BzV2lckL.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CrE0KI75.js";import"./index-S-L_N5jP.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./useForm-DJMb_USF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFI0U2pd.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DCh5r4-2.js";import"./download-CkqX6zmk.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPEKlKPD.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSaQ-mr5.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-C_h4YWZJ.js";import"./index-DdW_cS5o.js";const w={class:"p-4"},te=f({__name:"CustomerCell",setup(b){const u=[{title:"ID",dataIndex:"id",helpMessage:p("div",null,[s("这个是tsx渲染出来的helpMessage")])},{title:"头像",dataIndex:"avatar",width:100,helpMessage:x("div","这是vue h函数渲染出来的helpMessage")},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"姓名",dataIndex:"name",width:120},{title:"图片列表1",dataIndex:"imgArr",helpMessage:["这是简单模式的图片列表","只会显示一张在表格中","但点击可预览多张图片"],width:140},{title:"照片列表2",dataIndex:"imgs",width:160},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no"},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}],[c]=h({title:"自定义列内容",titleHelpMessage:"表格中所有头像、图片均为mock生成，仅用于演示图片占位",api:k,columns:u,bordered:!0,showTableSetting:!0});return(T,A)=>(e(),g("div",w,[p(t(_),{onRegister:t(c)},{bodyCell:o(({column:a,record:r,text:d})=>[a.key==="id"?(e(),g(I,{key:0},[s(" ID: "+m(r.id),1)],64)):a.key==="no"?(e(),i(t(n),{key:1,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):a.key==="avatar"?(e(),i(t(y),{key:2,size:60,src:r.avatar},null,8,["src"])):a.key==="imgArr"?(e(),i(t(l),{key:3,size:60,simpleShow:!0,imgList:d},null,8,["imgList"])):a.key==="imgs"?(e(),i(t(l),{key:4,size:60,imgList:d},null,8,["imgList"])):a.key==="category"?(e(),i(t(n),{key:5,color:"green"},{default:o(()=>[s(m(r.no),1)]),_:2},1024)):v("",!0)]),_:1},8,["onRegister"])]))}});export{te as default};
