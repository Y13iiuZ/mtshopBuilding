import{m as S,v as T,h as n,am as h,s as k,n as v,T as x,I as B,l as I}from"./index-d69430ba.js";const[P,s]=S("tag"),y={size:String,mark:Boolean,show:k,type:v("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var w=T({name:P,props:y,emits:["close"],setup(o,{slots:l,emit:r}){const c=e=>{e.stopPropagation(),r("close",e)},i=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},d=()=>{var e;const{type:u,mark:m,plain:g,round:C,size:a,closeable:f}=o,t={mark:m,plain:g,round:C};a&&(t[a]=a);const b=f&&n(B,{name:"cross",class:[s("close"),x],onClick:c},null);return n("span",{style:i(),class:s([t,u])},[(e=l.default)==null?void 0:e.call(l),b])};return()=>n(h,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?d():null]})}});const p=I(w);export{p as T};
