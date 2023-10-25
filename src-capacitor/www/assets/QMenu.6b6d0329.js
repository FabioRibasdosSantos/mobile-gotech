import{f as F,Z as oe,ak as Ce,a0 as ie,al as Ee,j as q,g as b,h as E,q as z,ah as ue,P as se,y as Te,i as re,am as Se,ae as X,p as Be,an as Y,x as k,l as He,m as _,ao as Me,s as O,ap as G,aq as pe,E as Le,ar as Pe,as as We,at as Re,au as Ae,av as Oe,aw as $e,ax as Fe,ay as ze,az as _e,aA as Ke,aB as De,aC as Z,B as je,aD as Qe,aE as Ie,aF as Ne,R as Ve,aG as Ue}from"./index.3716ff62.js";var it=F({name:"QItem",props:{...oe,...Ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:t}}=z(),a=ie(e,t),{hasLink:c,linkAttrs:l,linkClass:d,linkTag:f,navigateOnClick:s}=Ee(),r=q(null),m=q(null),g=b(()=>e.clickable===!0||c.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&g.value===!0),h=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),H=b(()=>{if(e.insetLevel===void 0)return null;const v=t.lang.rtl===!0?"Right":"Left";return{["padding"+v]:16+e.insetLevel*56+"px"}});function M(v){i.value===!0&&(m.value!==null&&(v.qKeyEvent!==!0&&document.activeElement===r.value?m.value.focus():document.activeElement===m.value&&r.value.focus()),s(v))}function T(v){if(i.value===!0&&ue(v,13)===!0){se(v),v.qKeyEvent=!0;const w=new MouseEvent("click",v);w.qKeyEvent=!0,r.value.dispatchEvent(w)}o("keyup",v)}function p(){const v=Te(n.default,[]);return i.value===!0&&v.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:m})),v}return()=>{const v={ref:r,class:h.value,style:H.value,role:"listitem",onClick:M,onKeyup:T};return i.value===!0?(v.tabindex=e.tabindex||"0",Object.assign(v,l.value)):g.value===!0&&(v["aria-disabled"]="true"),E(f.value,v,p())}}}),ut=F({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:o.value},re(n.default))}});function Xe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Se.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ge({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:a,emit:c}=z(),l=q(null);let d=null;function f(i){return l.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){ue(i,13)===!0&&s.toggle(i)},contextClick(i){a.hide(i),X(i),Be(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:X,mobileTouch(i){if(s.mobileCleanup(i),f(i)!==!0)return;a.hide(i),l.value.classList.add("non-selectable");const h=i.target;Y(s,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){l.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&Xe()}}),o=function(i=t.contextMenu){if(t.noParentEvent===!0||l.value===null)return;let h;i===!0?a.$q.platform.is.mobile===!0?h=[[l.value,"touchstart","mobileTouch","passive"]]:h=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:h=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],Y(s,"anchor",h)});function r(){Me(s,"anchor")}function m(i){for(l.value=i;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;o()}function g(){if(t.target===!1||t.target===""||a.$el.parentNode===null)l.value=null;else if(t.target===!0)m(a.$el.parentNode);else{let i=t.target;if(typeof t.target=="string")try{i=document.querySelector(t.target)}catch{i=void 0}i!=null?(l.value=i.$el||i,o()):(l.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return k(()=>t.contextMenu,i=>{l.value!==null&&(r(),o(i))}),k(()=>t.target,()=>{l.value!==null&&r(),g()}),k(()=>t.noParentEvent,i=>{l.value!==null&&(i===!0?r():o())}),He(()=>{g(),n!==!0&&t.modelValue===!0&&l.value===null&&c("update:modelValue",!1)}),_(()=>{d!==null&&clearTimeout(d),r()}),{anchorEl:l,canShow:f,anchorEvents:s}}function Ze(e,n){const o=q(null);let t;function a(d,f){const s=`${f!==void 0?"add":"remove"}EventListener`,r=f!==void 0?f:t;d!==window&&d[s]("scroll",r,O.passive),window[s]("scroll",r,O.passive),t=f}function c(){o.value!==null&&(a(o.value),o.value=null)}const l=k(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return _(l),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:a}}const{notPassiveCapture:S}=O,x=[];function B(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=G.length-1;for(;o>=0;){const t=G[o].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=x.length-1;t>=0;t--){const a=x[t];if((a.anchorEl.value===null||a.anchorEl.value.contains(n)===!1)&&(n===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(n)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function Je(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",B,S),document.addEventListener("touchstart",B,S))}function J(e){const n=x.findIndex(o=>o===e);n>-1&&(x.splice(n,1),x.length===0&&(document.removeEventListener("mousedown",B,S),document.removeEventListener("touchstart",B,S)))}let ee,te;function ne(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const $={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{$[`${e}#ltr`]=e,$[`${e}#rtl`]=e});function le(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:$[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function tt(e,n){let{top:o,left:t,right:a,bottom:c,width:l,height:d}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],a+=n[0],l+=n[0],d+=n[1]),{top:o,bottom:c,height:d,left:t,right:a,width:l,middle:t+(a-t)/2,center:o+(c-o)/2}}function nt(e,n,o){let{top:t,left:a}=e.getBoundingClientRect();return t+=n.top,a+=n.left,o!==void 0&&(t+=o[1],a+=o[0]),{top:t,bottom:t+1,height:1,left:a,right:a+1,width:1,middle:a,center:t}}function lt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ae(e,n,o){return{top:e[o.anchorOrigin.vertical]-n[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-n[o.selfOrigin.horizontal]}}function at(e){if(pe.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:s}=window.visualViewport;f!==ee&&(d.setProperty("--q-pe-left",f+"px"),ee=f),s!==te&&(d.setProperty("--q-pe-top",s+"px"),te=s)}const{scrollLeft:n,scrollTop:o}=e.el,t=e.absoluteOffset===void 0?tt(e.anchorEl,e.cover===!0?[0,0]:e.offset):nt(e.anchorEl,e.absoluteOffset,e.offset);let a={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(a.minWidth=t.width+"px",e.cover===!0&&(a.minHeight=t.height+"px")),Object.assign(e.el.style,a);const c=lt(e.el);let l=ae(t,c,e);if(e.absoluteOffset===void 0||e.offset===void 0)A(l,t,c,e.anchorOrigin,e.selfOrigin);else{const{top:d,left:f}=l;A(l,t,c,e.anchorOrigin,e.selfOrigin);let s=!1;if(l.top!==d){s=!0;const r=2*e.offset[1];t.center=t.top-=r,t.bottom-=r+2}if(l.left!==f){s=!0;const r=2*e.offset[0];t.middle=t.left-=r,t.right-=r+2}s===!0&&(l=ae(t,c,e),A(l,t,c,e.anchorOrigin,e.selfOrigin))}a={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(a.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(a.minHeight=a.maxHeight)),l.maxWidth!==void 0&&(a.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(a.minWidth=a.maxWidth)),Object.assign(e.el.style,a),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function A(e,n,o,t,a){const c=o.bottom,l=o.right,d=Le(),f=window.innerHeight-d,s=document.body.clientWidth;if(e.top<0||e.top+c>f)if(a.vertical==="center")e.top=n[t.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(n[t.vertical]>f/2){const r=Math.min(f,t.vertical==="center"?n.center:t.vertical===a.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,r),e.top=Math.max(0,r-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===a.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+l>s)if(e.maxWidth=Math.min(l,s),a.horizontal==="middle")e.left=n[t.horizontal]>s/2?Math.max(0,s-l):0;else if(n[t.horizontal]>s/2){const r=Math.min(s,t.horizontal==="middle"?n.middle:t.horizontal===a.horizontal?n.right:n.left);e.maxWidth=Math.min(l,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===a.horizontal?n.left:n.right),e.maxWidth=Math.min(l,s-e.left)}var st=F({name:"QMenu",inheritAttrs:!1,props:{...Ye,...Pe,...oe,...We,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ne},self:{type:String,validator:ne},offset:{type:Array,validator:et},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Re,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let a=null,c,l,d;const f=z(),{proxy:s}=f,{$q:r}=s,m=q(null),g=q(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=ie(e,r),{registerTick:H,removeTick:M}=Ae(),{registerTimeout:T}=Oe(),{transitionProps:p,transitionStyle:v}=$e(e),{localScrollTarget:w,changeScrollEvent:ce,unconfigureScrollTarget:de}=Ze(e,V),{anchorEl:y,canShow:fe}=Ge({showing:g}),{hide:K}=Fe({showing:g,canShow:fe,handleShow:be,handleHide:xe,hideOnRouteChange:i,processOnMount:!0}),{showPortal:D,hidePortal:j,renderPortal:ve}=ze(f,m,ke,"menu"),L={anchorEl:y,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&g.value===!0)return K(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&se(u),!0}},Q=b(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),me=b(()=>e.cover===!0?Q.value:le(e.self||"top start",r.lang.rtl)),he=b(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),ge=b(()=>e.autoClose===!0?{onClick:ye}:{}),I=b(()=>g.value===!0&&e.persistent!==!0);k(I,u=>{u===!0?(Ne(W),Je(L)):(Z(W),J(L))});function P(){Ve(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function be(u){if(a=e.noRefocus===!1?document.activeElement:null,_e(U),D(),V(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const R=Ke(u);if(R.left!==void 0){const{top:qe,left:we}=y.value.getBoundingClientRect();c={left:R.left-we,top:R.top-qe}}}l===void 0&&(l=k(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,C)),e.noFocus!==!0&&document.activeElement.blur(),H(()=>{C(),e.noFocus!==!0&&P()}),T(()=>{r.platform.is.ios===!0&&(d=e.autoClose,m.value.click()),C(),D(!0),o("show",u)},e.transitionDuration)}function xe(u){M(),j(),N(!0),a!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),T(()=>{j(!0),o("hide",u)},e.transitionDuration)}function N(u){c=void 0,l!==void 0&&(l(),l=void 0),(u===!0||g.value===!0)&&(De(U),de(),J(L),Z(W)),u!==!0&&(a=null)}function V(){(y.value!==null||e.scrollTarget!==void 0)&&(w.value=je(y.value,e.scrollTarget),ce(w.value,C))}function ye(u){d!==!0?(Qe(s,u),o("click",u)):d=!1}function U(u){I.value===!0&&e.noFocus!==!0&&Ue(m.value,u.target)!==!0&&P()}function W(u){o("escapeKey"),K(u)}function C(){const u=m.value;u===null||y.value===null||at({el:u,offset:e.offset,anchorEl:y.value,anchorOrigin:Q.value,selfOrigin:me.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ke(){return E(Ie,p.value,()=>g.value===!0?E("div",{role:"menu",...t,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+he.value,t.class],style:[t.style,v.value],...ge.value},re(n.default)):null)}return _(N),Object.assign(s,{focus:P,updatePosition:C}),ve}});export{st as Q,ut as a,it as b,Xe as c,et as d,Ze as e,Ge as f,Je as g,le as p,J as r,at as s,Ye as u,ne as v};
