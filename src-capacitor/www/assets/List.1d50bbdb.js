import{Q as h}from"./QSpace.d2884989.js";import{Q as u}from"./QTooltip.b18e14a7.js";import{_,d as w,j as f,l as C,o as Q,c as V,w as o,e as r,a as n,aP as p,aH as g}from"./index.625faa3f.js";import{Q as P}from"./QTd.92f9058e.js";import{Q as b}from"./QTable.1e4e78e6.js";import{Q as k}from"./QPage.5ab060c6.js";import{u as v}from"./UseApi.74ae8991.js";import{u as y}from"./UseNotify.d4ee6aa9.js";import"./QMenu.56312f34.js";import"./QList.eef8cc6b.js";import"./QSelect.39af7b46.js";import"./format.0866e07f.js";import"./use-fullscreen.e3399c05.js";import"./use-quasar.1eadf056.js";const $=[{name:"name",align:"left",label:"Nome",field:"name",sortable:!0},{name:"actions",align:"right",label:"Chamada",field:"actions",sortable:!1}],N=w({name:"PagePresencaList",setup(){const a=f([]),s=f(!0),i="Aluno",{list:d}=v(),{notifyError:m}=y(),c=async()=>{try{s.value=!0,a.value=await d(i),s.value=!1}catch(t){m(t.message)}},e=t=>{t.manualOption="Presente",t.falso=!1},l=t=>{t.manualOption="Falta",t.presente=!1};return C(()=>{c()}),{columnsAlunos:$,aluno:a,loading:s,handlePresencaChange:e,handleFaltaChange:l}}}),F={class:"rows"},T=r("span",{class:"text-h6"},"Registro de Presen\xE7a",-1);function U(a,s,i,d,m,c){return Q(),V(k,{padding:""},{default:o(()=>[r("div",F,[n(b,{rows:a.aluno,columns:a.columnsAlunos,"row-key":"id",class:"col-12",loading:a.loading},{top:o(()=>[T,n(h)]),"body-cell-actions":o(e=>[n(P,{props:e,class:"q-gutter-x-sm"},{default:o(()=>[r("div",null,[n(p,{modelValue:e.row.presente,"onUpdate:modelValue":l=>e.row.presente=l,color:"green",onClick:l=>a.handlePresencaChange(e.row)},{default:o(()=>[n(u,null,{default:o(()=>[g(" Presen\xE7a ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","onClick"]),n(p,{modelValue:e.row.falso,"onUpdate:modelValue":l=>e.row.falso=l,color:"red",onClick:l=>a.handleFaltaChange(e.row)},{default:o(()=>[n(u,null,{default:o(()=>[g(" Falta ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","onClick"])])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])])]),_:1})}var G=_(N,[["render",U]]);export{G as default};