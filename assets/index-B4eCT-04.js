import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-B3ED1Z0F.js";import"./TableImg.vue_vue_type_style_index_0_lang-CtmF-91d.js";import{a as b}from"./componentMap-DX1W4QF4.js";import{u as g}from"./useTable-CRPyEQZR.js";import{a as C}from"./system-DQJ0dKSt.js";import{b as k}from"./index-S-L_N5jP.js";import{_ as x,c as y,s as R}from"./DeptModal.vue_vue_type_script_setup_true_lang-CMSwDd_a.js";import{d as S,a7 as w,Z as n,_ as M,k as o,a9 as i,G as T,a8 as v,u as e,ab as B}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DLWSENYm.js";import"./FormItem.vue_vue_type_script_lang-imnDPsV5.js";import"./entry/index-DxjqCcSt-1711674585023.js";import"./antd-D1Pawy5U.js";import"./helper-BzV2lckL.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CrE0KI75.js";import"./useForm-DJMb_USF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFI0U2pd.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./useSortable-DCh5r4-2.js";import"./download-CkqX6zmk.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPEKlKPD.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSaQ-mr5.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-C_h4YWZJ.js";import"./index-DdW_cS5o.js";const se=S({name:"DeptManagement",__name:"index",setup(D){const[s,{openModal:r}]=k(),[m,{reload:l}]=g({title:"部门列表",api:C,columns:y,formConfig:{labelWidth:120,schemas:R},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function d(t){}function u(){l()}return(t,N)=>{const f=w("a-button");return n(),M("div",null,[o(e(h),{onRegister:e(m)},{toolbar:i(()=>[o(f,{type:"primary",onClick:p},{default:i(()=>[T(" 新增部门 ")]),_:1})]),bodyCell:i(({column:_,record:a})=>[_.key==="action"?(n(),v(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(s),onSuccess:u},null,8,["onRegister"])])}}});export{se as default};
