import{Q as A,a as F}from"./QTable.5b775e2d.js";import{_ as N,d as B,j as r,I as E,l as L,o as n,c as i,w as o,e as l,a as s,K as d,aK as _,b8 as h,aH as k,aP as Q,J as P}from"./index.3716ff62.js";import{Q as q}from"./QTd.f966baf3.js";import{Q as w}from"./QTooltip.81a76ccb.js";import{Q as R}from"./QPageSticky.2eb95989.js";import{Q as T}from"./QPage.6bcf8752.js";import{u as S}from"./UseApi.8115085a.js";import{u as U}from"./UseNotify.2d23bdf3.js";import{u as z}from"./use-quasar.70d57dbe.js";import{c as K}from"./table.3b120f00.js";import"./QList.be1e1ace.js";import"./QSelect.bb2a7487.js";import"./QMenu.6b6d0329.js";import"./format.475b1533.js";import"./use-fullscreen.9481c0a9.js";const j=B({name:"PageFrequenciaList",setup(){const e=r([]),t=r(!0),p=E(),c="Aluno",f=z(),{list:y,remove:a}=S(),{user:m}=P,{notifyError:g,notifySuccess:b}=U(),v=async()=>{try{t.value=!0,e.value=await y(c,m.value.id),t.value=!1}catch(u){g(u.message)}},V=u=>{p.push({name:"form-aluno",params:{id:u.value.id}})},C=async u=>{try{f.dialog({title:"Confirm",message:`Voc\xEA ets\xE1 certo de deletar ${e.value.nome} ?`,cancel:!0,persistent:!0}).onOk(async()=>{await a(c,e.value.id),b("Delete com sucesso"),v()})}catch($){g($.message)}};return L(()=>{v()}),{columnsAlunos:K,aluno:e,loading:t,handleEdit:V,handleRemoveFrequencia:C,teal:r(!0),orange:r(!0),red:r(!0),cyan:r(!1)}}}),D={class:"rows"},H=l("span",{class:"text-h6"}," Frequencia ",-1),I={class:"q-pa-md"},J={class:"q-gutter-sm"},M=l("img",{src:"props.row.img_url"},null,-1);function O(e,t,p,c,f,y){return n(),i(T,{padding:""},{default:o(()=>[l("div",D,[s(F,{rows:e.aluno,columns:e.columnsAlunos,"row-key":"id",class:"col-12",loading:e.loading},{top:o(()=>[H,s(A),e.$q.platform.is.desktop?(n(),i(d,{key:0,label:"Adicionar",color:"secondary",icon:"mdi-plus",dense:"",to:{name:"form-frequencia"}})):_("",!0)]),"body-cell-img_url":o(a=>[s(q,{props:a},{default:o(()=>[a.row.img_url?(n(),i(h,{key:0},{default:o(()=>[M]),_:1})):(n(),i(h,{key:1,color:"gray","text-color":"white",icon:"mdi-image-off"}))]),_:2},1032,["props"])]),"body-cell-actions":o(a=>[s(q,{props:a,class:"q-gutter-x-sm"},{default:o(()=>[s(d,{icon:"mdi-pencil-outline",color:"info",dense:"",size:"sm",onClick:m=>e.handleEdit(a.row)},{default:o(()=>[s(w,null,{default:o(()=>[k(" Edit ")]),_:1})]),_:2},1032,["onClick"]),s(d,{icon:"mdi-delete-outline",color:"negative",dense:"",size:"sm",onClick:m=>e.handleListFrequencia(a.row)},{default:o(()=>[s(w,null,{default:o(()=>[k(" Remove ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),default:o(()=>[l("template",null,[l("div",I,[l("div",J,[s(Q,{dense:"",modelValue:e.red,"onUpdate:modelValue":t[0]||(t[0]=a=>e.red=a),label:"Red",color:"red"},null,8,["modelValue"]),s(Q,{dense:"",modelValue:e.cyan,"onUpdate:modelValue":t[1]||(t[1]=a=>e.cyan=a),label:"Cyan",color:"cyan"},null,8,["modelValue"])])])])]),_:1},8,["rows","columns","loading"])]),s(R,{position:"bottom-right",offset:[18,18]},{default:o(()=>[e.$q.platform.is.mobile?(n(),i(d,{key:0,fab:"",icon:"mdi-plus",color:"secondary",to:{name:"form-frequencia"}})):_("",!0)]),_:1})]),_:1})}var ue=N(j,[["render",O]]);export{ue as default};
