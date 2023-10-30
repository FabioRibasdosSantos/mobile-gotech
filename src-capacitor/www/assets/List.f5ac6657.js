import{Q as w}from"./QSpace.d2884989.js";import{_ as $,d as C,j as g,I as N,l as V,o as c,c as m,w as o,e as Q,a as s,K as i,aK as y,aH as h}from"./index.625faa3f.js";import{Q as v}from"./QTooltip.b18e14a7.js";import{Q as q}from"./QTd.92f9058e.js";import{Q as B}from"./QTable.1e4e78e6.js";import{Q as E}from"./QPageSticky.7138a93b.js";import{Q as R}from"./QPage.5ab060c6.js";import{u as T}from"./UseApi.74ae8991.js";import{u as x}from"./UseNotify.d4ee6aa9.js";import{u as z}from"./use-quasar.1eadf056.js";import"./QMenu.56312f34.js";import"./QList.eef8cc6b.js";import"./QSelect.39af7b46.js";import"./format.0866e07f.js";import"./use-fullscreen.e3399c05.js";const L=[{name:"nome",align:"left",label:"Nome",field:"nome",sortable:!0},{name:"actions",align:"right",label:"",field:"actions",sortable:!1}],S=C({name:"PageProfessorList",setup(){const e=g([]),a=g(!0),d=N(),l="Professor",f=z(),{list:u,remove:r}=T(),{notifyError:n,notifySuccess:_}=x(),p=async()=>{try{a.value=!0,e.value=await u(l),a.value=!1}catch(t){n(t.message)}},k=t=>{d.push({name:"form-professor",params:{id:t.id}})},b=async t=>{try{f.dialog({title:"Confirma",message:`Voc\xEA est\xE1 certo de deletar ${t.value.nome} ?`,cancel:!0,persistent:!0}).onOk(async()=>{await r(l,t.value.id),_("Delete com sucesso"),p()})}catch(P){n(P.message)}};return V(()=>{p()}),{columnsProfessor:L,professor:e,loading:a,handleEdit:k,handleRemoveProfessor:b}}}),A={class:"rows"},K=Q("span",{class:"text-h6"}," Professor ",-1);function j(e,a,d,l,f,u){return c(),m(R,{padding:""},{default:o(()=>[Q("div",A,[s(B,{rows:e.professor,columns:e.columnsProfessor,"row-key":"id",class:"col-12",loading:e.loading},{top:o(()=>[K,s(w),e.$q.platform.is.desktop?(c(),m(i,{key:0,label:"Adicionar",color:"secondary",icon:"mdi-plus",dense:"",to:{name:"form-professor"}})):y("",!0)]),"body-cell-actions":o(r=>[s(q,{props:r,class:"q-gutter-x-sm"},{default:o(()=>[s(i,{icon:"mdi-pencil-outline",color:"info",dense:"",size:"xs",onClick:n=>e.handleEdit(r.row)},{default:o(()=>[s(v,null,{default:o(()=>[h(" Edit ")]),_:1})]),_:2},1032,["onClick"]),s(i,{icon:"mdi-delete-outline",color:"negative",dense:"",size:"xs",onClick:n=>e.handleRemoveProfessor(r.row)},{default:o(()=>[s(v,null,{default:o(()=>[h(" Remove ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),s(E,{position:"bottom-left",offset:[18,18]},{default:o(()=>[e.$q.platform.is.mobile?(c(),m(i,{key:0,fab:"",icon:"mdi-plus",color:"secondary",dense:"",size:"xs",to:{name:"form-professor"}})):y("",!0)]),_:1})]),_:1})}var se=$(S,[["render",j]]);export{se as default};