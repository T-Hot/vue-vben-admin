import{_ as y}from"./BasicTable.vue_vue_type_script_setup_true_lang-B3ED1Z0F.js";import"./TableImg.vue_vue_type_style_index_0_lang-CtmF-91d.js";import"./componentMap-DX1W4QF4.js";import{getBasicColumns as r,getBasicShortColumns as x}from"./tableData-CZ4yZPmq.js";import{a as T}from"./entry/index-DxjqCcSt-1711674585023.js";import{d as L}from"./table-B4YCoenZ.js";import{d as B,f as K,a7 as P,Z as v,_ as A,$ as m,k as e,a9 as o,G as n,u as a}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DLWSENYm.js";import"./FormItem.vue_vue_type_script_lang-imnDPsV5.js";import"./helper-BzV2lckL.js";import"./antd-D1Pawy5U.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CrE0KI75.js";import"./index-S-L_N5jP.js";import"./useWindowSizeFn-B1ghfGPQ.js";import"./useForm-DJMb_USF.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFI0U2pd.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DCh5r4-2.js";import"./download-CkqX6zmk.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPEKlKPD.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CSaQ-mr5.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-C_h4YWZJ.js";import"./index-DdW_cS5o.js";import"./select-N1ak_jAY.js";const M={class:"p-4 flex flex-col"},N={class:"mb-4"},V={class:"mb-4"},pe=B({__name:"RefTable",setup(D){const l=K(null),{createMessage:s}=T(),f=r();function i(){const c=a(l);if(!c)throw new Error("tableAction is null");return c}function u(){i().setLoading(!0),setTimeout(()=>{i().setLoading(!1)},1e3)}function p(){i().setProps({columns:x(),rowSelection:{type:"checkbox"}})}function d(){i().setProps({columns:r(),rowSelection:{type:"checkbox"}}),i().reload({page:1})}function _(){s.info("请在控制台查看！")}function g(){s.info("请在控制台查看！")}function C(){s.info("请在控制台查看！")}function k(){s.info("请在控制台查看！")}function b(){i().setPagination({current:2}),i().reload()}function w(){s.info("请在控制台查看！")}function h(){s.info("请在控制台查看！")}function R(){i().setSelectedRowKeys(["0","1","2"])}function S(){i().clearSelectedRowKeys()}return(c,E)=>{const t=P("a-button");return v(),A("div",M,[m("div",N,[e(t,{class:"mr-2",onClick:d},{default:o(()=>[n(" 还原 ")]),_:1}),e(t,{class:"mr-2",onClick:u},{default:o(()=>[n(" 开启loading ")]),_:1}),e(t,{class:"mr-2",onClick:p},{default:o(()=>[n(" 更改Columns ")]),_:1}),e(t,{class:"mr-2",onClick:_},{default:o(()=>[n(" 获取Columns ")]),_:1}),e(t,{class:"mr-2",onClick:g},{default:o(()=>[n(" 获取表格数据 ")]),_:1}),e(t,{class:"mr-2",onClick:C},{default:o(()=>[n(" 获取接口原始数据 ")]),_:1}),e(t,{class:"mr-2",onClick:b},{default:o(()=>[n(" 跳转到第2页 ")]),_:1})]),m("div",V,[e(t,{class:"mr-2",onClick:w},{default:o(()=>[n(" 获取选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:h},{default:o(()=>[n(" 获取选中行Key ")]),_:1}),e(t,{class:"mr-2",onClick:R},{default:o(()=>[n(" 设置选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:S},{default:o(()=>[n(" 清空选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:k},{default:o(()=>[n(" 获取分页信息 ")]),_:1})]),e(a(y),{canResize:!0,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref_key:"tableRef",ref:l,api:a(L),columns:a(f),rowKey:"id",rowSelection:{type:"checkbox"},showSelectionBar:""},null,8,["api","columns"])])}}});export{pe as default};
