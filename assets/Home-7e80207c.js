import{_ as k}from"./Footer-194eb8c2.js";import{_ as $,u as I,o as e,c as o,r as v,a as t,t as _,F as p,b as w,d as B,e as F,f as H,g as T,h as d,w as g,i as b,j as C,p as D,k as N,I as V}from"./index-d69430ba.js";import{T as L,a as R}from"./index-b90f6f1b.js";import{g as j}from"./api-cb560b03.js";import"./use-id-6c976a03.js";import"./use-route-d5cecb2c.js";const A={props:["navinfo"],setup(){const s=I();return{toStore:()=>{s.push("/store")}}}},E=["src"],M={class:"item-right"},U={class:"title"},q={class:"sales"},z={class:"price"},G={class:"lable"};function J(s,i,u,a,x,y){return e(!0),o(p,null,v(u.navinfo,(c,m)=>(e(),o("div",{key:m,class:"item",onClick:i[0]||(i[0]=(...r)=>a.toStore&&a.toStore(...r))},[t("img",{src:c.pic},null,8,E),t("div",M,[t("div",U,_(c.title),1),t("div",q,_(c.sales),1),t("div",z,_(c.price),1),t("div",G,[(e(!0),o(p,null,v(c.lable,(r,h)=>(e(),o("div",{key:h},_(r),1))),128))])])]))),128)}const K=$(A,[["render",J],["__scopeId","data-v-5049d6d9"]]);const O={components:{Footer:k,lists:K},setup(){let s=w({big_sort:[],small_sort:[],cententnav_list:[]});const i=B(0),u=()=>{j().then(a=>{s.big_sort=a.big_sort,s.small_sort=a.small_sort,s.cententnav_list=a.cententnav_list})};return F(()=>{u()}),{...H(s),active:i}}},f=s=>(D("data-v-c9ca962f"),s=s(),N(),s),P={class:"home"},Q={class:"content"},W={class:"header"},X=f(()=>t("div",{class:"text"},"外卖",-1)),Y={class:"location"},Z=f(()=>t("span",null,"成都",-1)),tt={class:"main"},st={class:"main-bg"},et=f(()=>t("div",{class:"search"},[t("input",{type:"text"}),t("div",{class:"search-text"},"搜索")],-1)),ot={class:"sort"},nt={class:"big-sort"},at={class:"icon","aria-hidden":"true"},it=["xlink:href"],ct={class:"small-sort"},_t={class:"icon","aria-hidden":"true"},rt=["xlink:href"];function lt(s,i,u,a,x,y){const c=V,m=T("lists"),r=R,h=L,S=k;return e(),o("div",P,[t("div",Q,[t("div",W,[X,t("div",Y,[d(c,{name:"location-o"}),Z,d(c,{name:"arrow"})])]),t("div",tt,[t("div",st,[et,t("div",ot,[t("div",nt,[(e(!0),o(p,null,v(s.big_sort,(n,l)=>(e(),o("div",{key:l},[(e(),o("svg",at,[t("use",{"xlink:href":`#${n.icon}`},null,8,it)])),b(_(n.name),1)]))),128))]),t("div",ct,[(e(!0),o(p,null,v(s.small_sort,(n,l)=>(e(),o("div",{key:l},[(e(),o("svg",_t,[t("use",{"xlink:href":`#${n.icon}`},null,8,rt)])),b(_(n.name),1)]))),128))])])]),d(h,{active:a.active,"onUpdate:active":i[0]||(i[0]=n=>a.active=n),class:"vantab"},{default:g(()=>[(e(!0),o(p,null,v(s.cententnav_list,(n,l)=>(e(),C(r,{title:n.tab,key:l},{default:g(()=>[d(m,{navinfo:n.data},null,8,["navinfo"])]),_:2},1032,["title"]))),128))]),_:1},8,["active"])])]),d(S)])}const ft=$(O,[["render",lt],["__scopeId","data-v-c9ca962f"]]);export{ft as default};
