import{_ as i,d as p,J as m,I as f,aJ as w,j as h,o as _,c as y,w as l,a,e as t,Q as P,K as R,L as g}from"./index.625faa3f.js";import{Q as v}from"./QForm.0e818081.js";import{Q}from"./QPage.5ab060c6.js";import{u as b}from"./UseNotify.d4ee6aa9.js";import"./use-quasar.1eadf056.js";const S=p({name:"PageResetPassword",setup(){const{resetPassword:e}=m(),{notifyError:o,notifySuccess:r}=b(),n=f(),d=w().query.token,s=h("");return{password:s,handlePasswordReset:async()=>{try{await e(d,s.value),r("New password sent"),n.push({name:"login"})}catch(c){o(c.message)}}}}}),V={class:"row justify-center"},k=t("p",{class:"col-12 text-h4 text-center"},"Redefinir Senha",-1),q={class:"col-md-4 col-sm-6 col-xs-10"},x={class:"full-width q-pt-md"};function B(e,o,r,n,u,d){return _(),y(Q,{padding:""},{default:l(()=>[a(v,{onSubmit:g(e.handlePasswordReset,["prevent"])},{default:l(()=>[t("div",V,[k,t("div",q,[a(P,{label:"Coloque sua nova senha",modelValue:e.password,"onUpdate:modelValue":o[0]||(o[0]=s=>e.password=s),"lazy-rules":"",rules:[s=>s&&s.length>=6||"Password is required send a 6 characters !"],type:"password"},null,8,["modelValue","rules"]),t("div",x,[a(R,{label:"Salvar",color:"secondary",class:"full-width",outline:"",rounded:"",size:"lg",type:"submit"})])])])]),_:1},8,["onSubmit"])]),_:1})}var J=i(S,[["render",B]]);export{J as default};
