import{bf as d,bg as m,_,j as u,o as n,c,w as p,e as a,K as g,aK as f}from"./index.d7174012.js";import{Q as P}from"./QPage.9f684324.js";import{a as v}from"./axios.19855846.js";var i;(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"})(i||(i={}));var l;(function(e){e.Rear="REAR",e.Front="FRONT"})(l||(l={}));var t;(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"})(t||(t={}));const b=d("Camera",{web:()=>m(()=>import("./web.709c3c32.js"),["assets/web.709c3c32.js","assets/index.d7174012.js","assets/index.a2b73638.css","assets/QPage.9f684324.js","assets/axios.19855846.js"]).then(e=>new e.CameraWeb)}),h={name:"PageCamera",setup(){const e=u(""),o={}.VUE_APP_PLATFORM==="web";async function s(){if(o){console.error("A c\xE2mera n\xE3o est\xE1 dispon\xEDvel no ambiente web.");return}const r=await b.getPicture({video:!0,quality:90,allowEditing:!0,resultType:t.Uri});e.value=r.webPath}return{imageSrc:e,captureImage:s}},methods:{async registrarPresenca(){try{const e=JSON.parse(this.value);await v.post("/registrar-presenca",e),alert("Presen\xE7a registrada com sucesso!")}catch(e){console.error("Erro ao registrar presen\xE7a:",e),alert("Erro ao registrar presen\xE7a. Tente novamente.")}}},mounted(){this.registrarPresenca()}},w={class:"row"},C={class:"col-12 text center"},y={autoplay:"",width:"250rem",ref:"videoplay"},O={class:"col-12 text-center"},A=["src"];function E(e,o,s,r,T,x){return n(),c(P,{padding:""},{default:p(()=>[a("div",w,[a("div",C,[a("video",y,null,512)])]),a("div",O,[e.cameraStart?f("",!0):(n(),c(g,{key:0,label:"Acessar a Camera",color:"secondary",icon:"mdi-camera-iris",onClick:r.captureImage},null,8,["onClick"])),a("img",{src:r.imageSrc},null,8,A)])]),_:1})}var R=_(h,[["render",E]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{i as C,l as a,U as b};