import{Q as C,a as h}from"./QTable.5b775e2d.js";import{Q as v}from"./QSelect.bb2a7487.js";import{_ as y,d as b,j as m,l as w,o as u,c as f,w as r,e as a,a as i,K as _,aK as Q}from"./index.3716ff62.js";import{Q as D}from"./QTd.f966baf3.js";import{Q as k}from"./QPage.6bcf8752.js";import{u as S}from"./UseApi.8115085a.js";import{u as V}from"./UseNotify.2d23bdf3.js";import{C as N,a as P}from"./index.d6f49039.js";import"./QList.be1e1ace.js";import"./use-fullscreen.9481c0a9.js";import"./QMenu.6b6d0329.js";import"./format.475b1533.js";import"./use-quasar.70d57dbe.js";const T=[{name:"nome",align:"left",label:"Nome",field:"nome",sortable:!0},{name:"actions",align:"right",label:"Presen\xE7a",field:"actions",sortable:!1}],$=b({name:"PageDisciplinaList",setup(){const e=m([]),o=m(!0),n="Disciplinas",{list:l}=S(),{notifyError:p}=V(),t=m(null),s=async()=>{try{o.value=!0,t.value?e.value=await l(n,{curso:t.value}):e.value=await l(n),o.value=!1}catch(d){p(d.message)}};return w(()=>{s()}),{columnsDisciplinas:T,selectedCurso:t,disciplinas:e,loading:o,op\u00E7\u00F5es:["Administra\xE7\xE3o","Desenvolvimento de Sistemas","Inform\xE1tica","Log\xEDstica","Recursos Humanos","Seguran\xE7a do Trabalho"],openCamera:async d=>{try{const c=await N.getPhoto({resultType:P.Uri});console.log("Imagem capturada:",c.webPath)}catch(c){console.error("Erro ao acessar a c\xE2mera:",c)}}}}}),B={class:"rows"},L=a("span",{class:"text-h6"}," Disciplinas ",-1),E=a("option",{disabled:"",value:"true",color:"primary"},"Escolha o Curso",-1),A={class:"col-8 text-center"},I=["src"];function K(e,o,n,l,p,t){return u(),f(k,{padding:""},{default:r(()=>[a("div",B,[i(h,{rows:e.disciplinas,columns:e.columnsDisciplinas,"row-key":"id",class:"col-12",loading:e.loading},{top:r(()=>[L,i(C),E,i(v,{standout:"",label:"Curso",modelValue:e.selectedCurso,"onUpdate:modelValue":o[0]||(o[0]=s=>e.selectedCurso=s),dense:"",options:e.op\u00E7\u00F5es},null,8,["modelValue","options"])]),"body-cell-actions":r(s=>[i(D,{props:s,class:"q-gutter-x-sm"},{default:r(()=>[a("div",A,[e.cameraStart?Q("",!0):(u(),f(_,{key:0,label:"",color:"secondary",icon:"mdi-camera-iris",onClick:g=>e.openCamera(s.row)},null,8,["onClick"])),a("img",{src:e.imageSrc},null,8,I)])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])])]),_:1})}var Z=y($,[["render",K]]);export{Z as default};
