import{_ as g}from"./BasicTable.vue_vue_type_script_setup_true_lang-B3ED1Z0F.js";import"./TableImg.vue_vue_type_style_index_0_lang-CtmF-91d.js";import{a as C}from"./componentMap-DX1W4QF4.js";import{u as x}from"./useTable-CRPyEQZR.js";import{d as k}from"./system-DQJ0dKSt.js";import{u as w}from"./index-CPvcFrQu.js";import{_ as y,c as T,s as S}from"./MenuDrawer.vue_vue_type_script_setup_true_lang-BXZgbJl7.js";import{d as R,a7 as D,Z as a,_ as v,k as o,a9 as r,G as B,a8 as F,u as e,ab as M,y as N}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DLWSENYm.js";import"./FormItem.vue_vue_type_script_lang-imnDPsV5.js";import"./entry/index-DxjqCcSt-1711674585023.js";import"./antd-D1Pawy5U.js";import"./helper-BzV2lckL.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CrE0KI75.js";import"./index-S-L_N5jP.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./useForm-DJMb_USF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFI0U2pd.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DCh5r4-2.js";import"./download-CkqX6zmk.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPEKlKPD.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSaQ-mr5.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-C_h4YWZJ.js";import"./index-DdW_cS5o.js";const pe=R({name:"MenuManagement",__name:"index",setup(V){const[s,{openDrawer:i}]=w(),[m,{reload:l,expandAll:c}]=x({title:"菜单列表",api:k,columns:T,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function u(t){i(!0,{record:t,isUpdate:!0})}function d(t){}function f(){l()}function _(){N(c)}return(t,$)=>{const h=D("a-button");return a(),v("div",null,[o(e(g),{onRegister:e(m),onFetchSuccess:_},{toolbar:r(()=>[o(h,{type:"primary",onClick:p},{default:r(()=>[B(" 新增菜单 ")]),_:1})]),bodyCell:r(({column:b,record:n})=>[b.key==="action"?(a(),F(e(C),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:u.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,n)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),o(y,{onRegister:e(s),onSuccess:f},null,8,["onRegister"])])}}});export{pe as default};
