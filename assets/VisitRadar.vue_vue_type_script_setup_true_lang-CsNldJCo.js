import{du as r}from"./useECharts-oTYcD2Mp.js";import{R as i}from"./antd-D1Pawy5U.js";import{d as n,f as s,w as d,Z as l,a8 as m,a9 as f,$ as c,ag as h,u}from"./vue-COhTiP8A.js";const b=n({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=s(null),{setOptions:o}=r(t);return d(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"电脑"},{name:"充电器"},{name:"耳机"},{name:"手机"},{name:"Ipad"},{name:"耳机"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(g,p)=>(l(),m(u(i),{title:"转化率",loading:a.loading},{default:f(()=>[c("div",{ref_key:"chartRef",ref:t,style:h({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{b as _};
