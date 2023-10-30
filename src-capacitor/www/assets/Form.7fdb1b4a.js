import{n as ye,i as ke,h as p,ag as be,ai as J,ae as I,K as B,a3 as we,f as Ce,Z as Se,a0 as Te,b9 as ze,j as P,g as b,x as D,l as X,m as qe,q as xe,P as Pe,p as Be,R as Le,_ as $e,d as Ne,I as He,aJ as Oe,o as Ee,c as _e,w as M,e as R,a as x,Q as K,L as Fe}from"./index.625faa3f.js";import{Q as Re}from"./QBtnDropdown.3f6d515a.js";import{Q as Ae}from"./QTooltip.b18e14a7.js";import{a as W,b as Ue}from"./QMenu.56312f34.js";import{u as Qe,a as je,b as Ie}from"./use-fullscreen.e3399c05.js";import{Q as De}from"./QForm.0e818081.js";import{Q as Me}from"./QPage.5ab060c6.js";import{u as Ke}from"./UseApi.74ae8991.js";import{u as We}from"./UseNotify.d4ee6aa9.js";import"./use-quasar.1eadf056.js";function Z(t,e){if(e&&t===e)return null;const o=t.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return t;const r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,a=r.display;return a==="block"||a==="table"?t:Z(t.parentNode)}function _(t,e,o){return!t||t===document.body?!1:o===!0&&t===e||(e===document?document.body:e).contains(t.parentNode)}function Y(t,e,o){if(o||(o=document.createRange(),o.selectNode(t),o.setStart(t,0)),e.count===0)o.setEnd(t,e.count);else if(e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(o.setEnd(t,e.count),e.count=0);else for(let r=0;e.count!==0&&r<t.childNodes.length;r++)o=Y(t.childNodes[r],e,o);return o}const Ge=/^https?:\/\//;class Je{constructor(e,o){this.el=e,this.eVm=o,this._range=null}get selection(){if(this.el){const e=document.getSelection();if(_(e.anchorNode,this.el,!0)&&_(e.focusNode,this.el,!0))return e}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const e=this.selection;return e!==null&&e.rangeCount?e.getRangeAt(0):this._range}get parent(){const e=this.range;if(e!==null){const o=e.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const e=this.parent;return e!==null?Z(e,this.el):null}save(e=this.range){e!==null&&(this._range=e)}restore(e=this._range){const o=document.createRange(),r=document.getSelection();e!==null?(o.setStart(e.startContainer,e.startOffset),o.setEnd(e.endContainer,e.endOffset),r.removeAllRanges(),r.addRange(o)):(r.selectAllChildren(this.el),r.collapseToEnd())}savePosition(){let e=-1,o;const r=document.getSelection(),a=this.el.parentNode;if(r.focusNode&&_(r.focusNode,a))for(o=r.focusNode,e=r.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,e+=o.textContent.length):o=o.parentNode;this.savedPos=e}restorePosition(e=0){if(this.savedPos>0&&this.savedPos<e){const o=window.getSelection(),r=Y(this.el,{count:this.savedPos});r&&(r.collapse(!1),o.removeAllRanges(),o.addRange(r))}}hasParent(e,o){const r=o?this.parent:this.blockParent;return r!==null?r.nodeName.toLowerCase()===e.toLowerCase():!1}hasParents(e,o,r=this.parent){return r===null?!1:e.includes(r.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(e,o,r.parentNode):!1}is(e,o){if(this.selection===null)return!1;switch(e){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(e)===o;case"fontName":const r=document.queryCommandValue(e);return r===`"${o}"`||r===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(e);return o!==void 0?a===o:a}}getParentAttribute(e){return this.parent!==null?this.parent.getAttribute(e):null}can(e){if(e==="outdent")return this.hasParents(["blockquote","li"],!0);if(e==="indent")return this.hasParents(["li"],!0);if(e==="link")return this.selection!==null||this.is("link")}apply(e,o,r=ye){if(e==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(e,o)&&(e="outdent",o=null),o==="PRE"&&this.is(e,"PRE")&&(o="P");else if(e==="print"){r();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(e==="link"){const a=this.getParentAttribute("href");if(a===null){const u=this.selectWord(this.selection),l=u?u.toString():"";if(!l.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=Ge.test(l)?l:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(u.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(e==="fullscreen"){this.eVm.toggleFullscreen(),r();return}else if(e==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),r();return}document.execCommand(e,!1,o),r()}selectWord(e){if(e===null||e.isCollapsed!==!0||e.modify===void 0)return e;const o=document.createRange();o.setStart(e.anchorNode,e.anchorOffset),o.setEnd(e.focusNode,e.focusOffset);const r=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=e.focusNode,u=e.focusOffset;return e.collapse(e.anchorNode,e.anchorOffset),e.modify("move",r[0],"character"),e.modify("move",r[1],"word"),e.extend(a,u),e.modify("extend",r[1],"character"),e.modify("extend",r[0],"word"),e}}function V(t,e,o){e.handler?e.handler(t,o,o.caret):o.runCmd(e.cmd,e.param)}function A(t){return p("div",{class:"q-editor__toolbar-group"},t)}function ee(t,e,o,r=!1){const a=r||(e.type==="toggle"?e.toggled?e.toggled(t):e.cmd&&t.caret.is(e.cmd,e.param):!1),u=[];if(e.tip&&t.$q.platform.is.desktop){const l=e.key?p("div",[p("small",`(CTRL + ${String.fromCharCode(e.key)})`)]):null;u.push(p(Ae,{delay:1e3},()=>[p("div",{innerHTML:e.tip}),l]))}return p(B,{...t.buttonProps.value,icon:e.icon!==null?e.icon:void 0,color:a?e.toggleColor||t.props.toolbarToggleColor:e.color||t.props.toolbarColor,textColor:a&&!t.props.toolbarPush?null:e.textColor||t.props.toolbarTextColor,label:e.label,disable:e.disable?typeof e.disable=="function"?e.disable(t):!0:!1,size:"sm",onClick(l){o&&o(),V(l,e,t)}},()=>u)}function Xe(t,e){const o=e.list==="only-icons";let r=e.label,a=e.icon!==null?e.icon:void 0,u,l;function h(){y.component.proxy.hide()}if(o)l=e.options.map(d=>{const k=d.type===void 0?t.caret.is(d.cmd,d.param):!1;return k&&(r=d.tip,a=d.icon!==null?d.icon:void 0),ee(t,d,h,k)}),u=t.toolbarBackgroundClass.value,l=[A(l)];else{const d=t.props.toolbarToggleColor!==void 0?`text-${t.props.toolbarToggleColor}`:null,k=t.props.toolbarTextColor!==void 0?`text-${t.props.toolbarTextColor}`:null,c=e.list==="no-icons";l=e.options.map(f=>{const w=f.disable?f.disable(t):!1,S=f.type===void 0?t.caret.is(f.cmd,f.param):!1;S&&(r=f.tip,a=f.icon!==null?f.icon:void 0);const T=f.htmlTip;return p(Ue,{active:S,activeClass:d,clickable:!0,disable:w,dense:!0,onClick(z){h(),t.contentRef.value!==null&&t.contentRef.value.focus(),t.caret.restore(),V(z,f,t)}},()=>[c===!0?null:p(W,{class:S?d:k,side:!0},()=>p(we,{name:f.icon!==null?f.icon:void 0})),p(W,T?()=>p("div",{class:"text-no-wrap",innerHTML:f.htmlTip}):f.tip?()=>p("div",{class:"text-no-wrap"},f.tip):void 0)])}),u=[t.toolbarBackgroundClass.value,k]}const g=e.highlight&&r!==e.label,y=p(Re,{...t.buttonProps.value,noCaps:!0,noWrap:!0,color:g?t.props.toolbarToggleColor:t.props.toolbarColor,textColor:g&&!t.props.toolbarPush?null:t.props.toolbarTextColor,label:e.fixedLabel?e.label:r,icon:e.fixedIcon?e.icon!==null?e.icon:void 0:a,contentClass:u,onShow:d=>t.emit("dropdownShow",d),onHide:d=>t.emit("dropdownHide",d),onBeforeShow:d=>t.emit("dropdownBeforeShow",d),onBeforeHide:d=>t.emit("dropdownBeforeHide",d)},()=>l);return y}function Ze(t){if(t.caret)return t.buttons.value.filter(e=>!t.isViewingSource.value||e.find(o=>o.cmd==="viewsource")).map(e=>A(e.map(o=>t.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?ke(t.slots[o.slot]):o.type==="dropdown"?Xe(t,o):ee(t,o))))}function Ye(t,e,o,r={}){const a=Object.keys(r);if(a.length===0)return{};const u={default_font:{cmd:"fontName",param:t,icon:o,tip:e}};return a.forEach(l=>{const h=r[l];u[l]={cmd:"fontName",param:h,icon:o,tip:h,htmlTip:`<font face="${h}">${h}</font>`}}),u}function Ve(t){if(t.caret){const e=t.props.toolbarColor||t.props.toolbarTextColor;let o=t.editLinkUrl.value;const r=()=>{t.caret.restore(),o!==t.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),t.editLinkUrl.value=null};return[p("div",{class:`q-mx-xs text-${e}`},`${t.$q.lang.editor.url}: `),p("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{be(a),o=a.target.value},onKeydown:a=>{if(J(a)!==!0)switch(a.keyCode){case 13:return I(a),r();case 27:I(a),t.caret.restore(),(!t.editLinkUrl.value||t.editLinkUrl.value==="https://")&&document.execCommand("unlink"),t.editLinkUrl.value=null;break}}}),A([p(B,{key:"qedt_btm_rem",tabindex:-1,...t.buttonProps.value,label:t.$q.lang.label.remove,noCaps:!0,onClick:()=>{t.caret.restore(),document.execCommand("unlink"),t.editLinkUrl.value=null}}),p(B,{key:"qedt_btm_upd",...t.buttonProps.value,label:t.$q.lang.label.update,noCaps:!0,onClick:r})])]}}const et=Object.prototype.toString,F=Object.prototype.hasOwnProperty,tt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(t=>"[object "+t+"]"));function G(t){if(t!==Object(t)||tt.has(et.call(t))===!0||t.constructor&&F.call(t,"constructor")===!1&&F.call(t.constructor.prototype,"isPrototypeOf")===!1)return!1;let e;for(e in t);return e===void 0||F.call(t,e)}function te(){let t,e,o,r,a,u,l=arguments[0]||{},h=1,g=!1;const y=arguments.length;for(typeof l=="boolean"&&(g=l,l=arguments[1]||{},h=2),Object(l)!==l&&typeof l!="function"&&(l={}),y===h&&(l=this,h--);h<y;h++)if((t=arguments[h])!==null)for(e in t)o=l[e],r=t[e],l!==r&&(g===!0&&r&&((a=Array.isArray(r))||G(r)===!0)?(a===!0?u=Array.isArray(o)===!0?o:[]:u=G(o)===!0?o:{},l[e]=te(g,u,r)):r!==void 0&&(l[e]=r));return l}var ot=Ce({name:"QEditor",props:{...Se,...Qe,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:t=>t.length===0||t.every(e=>e.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:t=>["div","p"].includes(t),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...je,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(t,{slots:e,emit:o,attrs:r}){const{proxy:a,vnode:u}=xe(),{$q:l}=a,h=Te(t,l),{inFullscreen:g,toggleFullscreen:y}=Ie(),d=ze(r,u),k=P(null),c=P(null),f=P(null),w=P(!1),S=b(()=>!t.readonly&&!t.disable);let T,z,$=t.modelValue;document.execCommand("defaultParagraphSeparator",!1,t.paragraphTag),T=window.getComputedStyle(document.body).fontFamily;const N=b(()=>t.toolbarBg?` bg-${t.toolbarBg}`:""),oe=b(()=>{const n=t.toolbarOutline!==!0&&t.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:t.toolbarOutline,push:t.toolbarPush,rounded:t.toolbarRounded,dense:!0,color:t.toolbarColor,disable:!S.value,size:"sm"}}),L=b(()=>{const n=l.lang.editor,i=l.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:s=>s.caret&&!s.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:s=>s.caret&&!s.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:t.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),U=b(()=>{const n=t.definitions||{},i=t.definitions||t.fonts?te(!0,{},L.value,n,Ye(T,l.lang.editor.defaultFont,l.iconSet.editor.font,t.fonts)):L.value;return t.toolbar.map(s=>s.map(m=>{if(m.options)return{type:"dropdown",icon:m.icon,label:m.label,size:"sm",dense:!0,fixedLabel:m.fixedLabel,fixedIcon:m.fixedIcon,highlight:m.highlight,list:m.list,options:m.options.map(ve=>i[ve])};const C=i[m];return C?C.type==="no-state"||n[m]&&(C.cmd===void 0||L.value[C.cmd]&&L.value[C.cmd].type==="no-state")?C:Object.assign({type:"toggle"},C):{type:"slot",slot:m}}))}),v={$q:l,props:t,slots:e,emit:o,inFullscreen:g,toggleFullscreen:y,runCmd:O,isViewingSource:w,editLinkUrl:f,toolbarBackgroundClass:N,buttonProps:oe,contentRef:c,buttons:U,setContent:H};D(()=>t.modelValue,n=>{$!==n&&($=n,H(n,!0))}),D(f,n=>{o(`link-${n?"Show":"Hide"}`)});const ne=b(()=>t.toolbar&&t.toolbar.length!==0),ie=b(()=>{const n={},i=s=>{s.key&&(n[s.key]={cmd:s.cmd,param:s.param})};return U.value.forEach(s=>{s.forEach(m=>{m.options?m.options.forEach(i):i(m)})}),n}),re=b(()=>g.value?t.contentStyle:[{minHeight:t.minHeight,height:t.height,maxHeight:t.maxHeight},t.contentStyle]),le=b(()=>`q-editor q-editor--${w.value===!0?"source":"default"}`+(t.disable===!0?" disabled":"")+(g.value===!0?" fullscreen column":"")+(t.square===!0?" q-editor--square no-border-radius":"")+(t.flat===!0?" q-editor--flat":"")+(t.dense===!0?" q-editor--dense":"")+(h.value===!0?" q-editor--dark q-dark":"")),ae=b(()=>[t.contentClass,"q-editor__content",{col:g.value,"overflow-auto":g.value||t.maxHeight}]),se=b(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{});function ue(){if(c.value!==null){const n=`inner${w.value===!0?"Text":"HTML"}`,i=c.value[n];i!==t.modelValue&&($=i,o("update:modelValue",i))}}function ce(n){if(o("keydown",n),n.ctrlKey!==!0||J(n)===!0){q();return}const i=n.keyCode,s=ie.value[i];if(s!==void 0){const{cmd:m,param:C}=s;Pe(n),O(m,C,!1)}}function de(n){q(),o("click",n)}function fe(n){if(c.value!==null){const{scrollTop:i,scrollHeight:s}=c.value;z=s-i}v.caret.save(),o("blur",n)}function pe(n){Be(()=>{c.value!==null&&z!==void 0&&(c.value.scrollTop=c.value.scrollHeight-z)}),o("focus",n)}function he(n){const i=k.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const s=`inner${w.value===!0?"Text":"HTML"}`;v.caret.restorePosition(c.value[s].length),q()}}function me(n){const i=k.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(v.caret.savePosition(),q())}function Q(){z=void 0}function j(n){v.caret.save()}function H(n,i){if(c.value!==null){i===!0&&v.caret.savePosition();const s=`inner${w.value===!0?"Text":"HTML"}`;c.value[s]=n,i===!0&&(v.caret.restorePosition(c.value[s].length),q())}}function O(n,i,s=!0){E(),v.caret.restore(),v.caret.apply(n,i,()=>{E(),v.caret.save(),s&&q()})}function q(){setTimeout(()=>{f.value=null,a.$forceUpdate()},1)}function E(){Le(()=>{c.value!==null&&c.value.focus({preventScroll:!0})})}function ge(){return c.value}return X(()=>{v.caret=a.caret=new Je(c.value,v),H(t.modelValue),q(),document.addEventListener("selectionchange",j)}),qe(()=>{document.removeEventListener("selectionchange",j)}),Object.assign(a,{runCmd:O,refreshToolbar:q,focus:E,getContentEl:ge}),()=>{let n;if(ne.value){const i=[p("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+N.value},Ze(v))];f.value!==null&&i.push(p("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+N.value},Ve(v))),n=p("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return p("div",{ref:k,class:le.value,style:{height:g.value===!0?"100%":null},...se.value,onFocusin:he,onFocusout:me},[n,p("div",{ref:c,style:re.value,class:ae.value,contenteditable:S.value,placeholder:t.placeholder,...d.listeners.value,onInput:ue,onKeydown:ce,onClick:de,onBlur:fe,onFocus:pe,onMousedown:Q,onTouchstartPassive:Q})])}}});const nt=Ne({name:"PageFormFrequencia",setup(){const t="aluno",e=He(),o=Oe(),{post:r,getById:a,update:u,list:l}=Ke(),{notifyError:h,notifySuccess:g}=We(),y=b(()=>o.params.id);let d={};const k=P([]),c=P({name:"",description:"",amount:0,aluno_id:""});X(()=>{f(),y.value&&S(y.value)});const f=async()=>{k.value=await l("aluno")},w=async()=>{try{y.value?(await u(t,c.value),g("Atualizado com Sucesso")):(await r(t,c.value),g("Salvo com Sucesso")),e.push({name:"frequency"})}catch(T){h(T.message)}},S=async T=>{try{d=await a(t,T),c.value=d}catch(z){h(z.message)}};return{handleSubmit:w,form:c,isUpdate:y,optionsAluno:k}}}),it={class:"row justify-center"},rt=R("div",{class:"col-12 text-center"},[R("p",{class:"text-h4"}," Frequ\xEAncia ")],-1);function lt(t,e,o,r,a,u){return Ee(),_e(Me,{padding:""},{default:M(()=>[R("div",it,[rt,x(De,{class:"col-md-7 col-xs-12 col-sm-12 q-gutter-y-md",onSubmit:Fe(t.handleSubmit,["prevent"])},{default:M(()=>[x(K,{label:"Name",modelValue:t.form.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.name=l),rules:[l=>l.length>0||"Name is required"]},null,8,["modelValue","rules"]),x(ot,{modelValue:t.form.description,"onUpdate:modelValue":e[1]||(e[1]=l=>t.form.description=l),"min-height":"5rem"},null,8,["modelValue"]),x(K,{label:"Quantidade de Aulas",modelValue:t.form.amount,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.amount=l),rules:[l=>!!l||"Amount is required"],type:"number"},null,8,["modelValue","rules"]),x(B,{label:t.isUpdate?"Atualizar":"Salvar",color:"primary",class:"full-width",rounded:"",type:"submit"},null,8,["label"]),x(B,{label:"Voltar",color:"primary",class:"full-width",rounded:"",flat:"",to:{name:"frequency"}})]),_:1},8,["onSubmit"])])]),_:1})}var vt=$e(nt,[["render",lt]]);export{vt as default};
