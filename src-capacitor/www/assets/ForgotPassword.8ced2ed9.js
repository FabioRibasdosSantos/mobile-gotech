import{_ as u,d as m,J as f,j as p,o as h,c as w,w as n,a as t,e as r,Q as _,K as d,L as g}from"./index.3716ff62.js";import{Q as y}from"./QForm.af4af17f.js";import{Q as v}from"./QPage.6bcf8752.js";import{u as P}from"./UseNotify.2d23bdf3.js";import"./use-quasar.70d57dbe.js";const Q=m({setup(){const{sendPasswordResetEmail:e}=f(),{notifyError:s,notifySuccess:l}=P(),o=p("");return{email:o,handleForgotPassword:async()=>{try{await e(o.value),l(`Password reset email send to: ${o.value}`)}catch(i){s(i.message)}}}}}),b={class:"row justify-center"},V=r("p",{class:"col-12 text-h4 text-center"},"Redefinir Senha",-1),F={class:"col-md-4 col-sm-6 col-xs-10"},$={class:"full-width q-pt-md"};function x(e,s,l,o,c,i){return h(),w(v,{padding:""},{default:n(()=>[t(y,{onSubmit:g(e.handleForgotPassword,["prevent"])},{default:n(()=>[r("div",b,[V,r("div",F,[t(_,{label:"Email",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.email=a),"lazy-rules":"",rules:[a=>a&&a.length>0||"Email is required !"],type:"email"},null,8,["modelValue","rules"]),r("div",$,[t(d,{label:"enviar e-mail",color:"secondary",class:"full-width",outline:"",rounded:"",size:"lg",type:"submit"}),t(d,{label:"Voltar",color:"dark",class:"full-width",rounded:"",flat:"",to:{name:"login"}})])])])]),_:1},8,["onSubmit"])]),_:1})}var j=u(Q,[["render",x]]);export{j as default};
