/*  Copyright Usablenet Inc. 2012-2016
 *  @description uFX JS framework
 *  @author Marco Brondani
 *  @version 2.3.6
 */
var uFX=function(){function t(t){return null==t?String(t):U[$.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(n){return"object"==t(n)}function r(t){return o(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return M.call(t,function(t){return null!=t})}function c(t){return t.length>0?E.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in X?X[t]:X[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,n){return"number"!=typeof n||A[l(t)]?n:n+"px"}function d(t){var n,e
return O[t]||(n=z.createElement(t),z.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),O[t]=e),O[t]}function h(t){return"children"in t?C.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,n,e){for(T in n)e&&(r(n[T])||J(n[T]))?(r(n[T])&&!r(t[T])&&(t[T]={}),J(n[T])&&!J(t[T])&&(t[T]=[]),p(t[T],n[T],e)):n[T]!==x&&(t[T]=n[T])}function m(t,n){return null==n?E(t):E(t).filter(n)}function v(t,e,i,o){return n(e)?e.call(t,i,o):e}function g(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function y(t,n){var e=t.className||"",i=e&&e.baseVal!==x
return n===x?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?E.parseJSON(t):t):t}catch(n){return t}}function w(t,n){n(t)
for(var e=0,i=t.childNodes.length;i>e;e++)w(t.childNodes[e],n)}var x,T,E,k,S,D,P=[],C=P.slice,M=P.filter,z=window.document,O={},X={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},F=/^\s*<(\w+|!)[^>]*>/,I=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,j=/^(?:body|html)$/i,Y=/([A-Z])/g,L=["val","css","html","text","data","width","height","offset"],B=["after","prepend","before","append"],W=z.createElement("table"),R=z.createElement("tr"),q={tr:z.createElement("tbody"),tbody:W,thead:W,tfoot:W,td:R,th:R,"*":z.createElement("div")},H=/complete|loaded|interactive/,_=/^[\w-]*$/,U={},$=U.toString,V={},Z=z.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array}
return V.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1
var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector
if(e)return e.call(t,n)
var i,o=t.parentNode,r=!o
return r&&(o=Z).appendChild(t),i=~V.qsa(o,n).indexOf(t),r&&Z.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},D=function(t){return M.call(t,function(n,e){return t.indexOf(n)==e})},V.fragment=function(t,n,e){var i,o,a
return I.test(t)&&(i=E(z.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(N,"<$1></$2>")),n===x&&(n=F.test(t)&&RegExp.$1),n in q||(n="*"),a=q[n],a.innerHTML=""+t,i=E.each(C.call(a.childNodes),function(){a.removeChild(this)})),r(e)&&(o=E(i),E.each(e,function(t,n){L.indexOf(t)>-1?o[t](n):o.attr(t,n)})),i},V.M=function(t,n){return t=t||[],t.__proto__=E.fn,t.selector=n||"",t},V.isM=function(t){return t instanceof V.M},V.init=function(t,e){var i
if(!t)return V.M()
if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&F.test(t))i=V.fragment(t,RegExp.$1,e),t=null
else{if(e!==x)return E(e).find(t)
i=V.qsa(z,t)}else{if(n(t))return E(z).ready(t)
if(V.isM(t))return t
if(J(t))i=s(t)
else if(o(t))i=[t],t=null
else if(F.test(t))i=V.fragment(t.trim(),RegExp.$1,e),t=null
else{if(e!==x)return E(e).find(t)
i=V.qsa(z,t)}}return V.M(i,t)},E=function(t,n){return V.init(t,n)},E.extend=function(t){var n,e=C.call(arguments,1)
return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){p(t,e,n)}),t},V.qsa=function(t,n){var e,i="#"==n[0],o=!i&&"."==n[0],r=i||o?n.slice(1):n,a=_.test(r)
return t.getElementById&&a&&i?(e=t.getElementById(r))?[e]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:C.call(a&&!i&&t.getElementsByClassName?o?t.getElementsByClassName(r):t.getElementsByTagName(n):t.querySelectorAll(n))},E.contains=z.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0
return!1},E.type=t,E.isFunction=n,E.isWindow=e,E.isArray=J,E.isPlainObject=r,E.isObject=o,E.isLikeArray=a,E.isEmptyObject=function(t){var n
for(n in t)return!1
return!0},E.numOnly=function(t){return isNaN(parseFloat(t))&&(t=t.replace(/[^0-9.-]/,"")),parseFloat(t)},E.inArray=function(t,n,e){return P.indexOf.call(n,t,e)},E.camelCase=S,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.noop=function(){},E.map=function(t,n){var e,i,o,r=[]
if(a(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&r.push(e)
else for(o in t)e=n(t[o],o),null!=e&&r.push(e)
return c(r)},E.each=function(t,n){var e,i
if(a(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t
return t},E.grep=function(t,n){return M.call(t,n)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){U["[object "+n+"]"]=n.toLowerCase()}),E.parseXML=function(t){return(new DOMParser).parseFromString(t,"text/xml")},E.plugins={},E.version="2.0.1",E.isReady=!1,E.now=Date.now||function(){return(new Date).getTime()},E.noop=function(){},E.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return E(E.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return E(C.apply(this,arguments))},ready:function(t){return H.test(z.readyState)&&z.body?t(E):z.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===x?C.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):E(M.call(this,function(n){return V.matches(n,t)}))},add:function(t,n){return E(D(this.concat(E(t,n))))},is:function(t){return this.length>0&&V.matches(this[0],t)},not:function(t){var e=[]
if(n(t)&&t.call!==x)this.each(function(n){t.call(this,n)||e.push(this)})
else{var i="string"==typeof t?this.filter(t):a(t)&&n(t.item)?C.call(t):E(t)
this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return E(e)},has:function(t){return this.filter(function(){return o(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0]
return t&&!o(t)?t:E(t)},last:function(){var t=this[this.length-1]
return t&&!o(t)?t:E(t)},find:function(t){var n,e=this
return n=t?"object"==typeof t?E(t).filter(function(){var t=this
return P.some.call(e,function(n){return E.contains(n,t)})}):1==this.length?E(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)}):E()},closest:function(t,n){var e=this[0],o=!1
for("object"==typeof t&&(o=E(t));e&&!(o?o.indexOf(e)>=0:V.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode
return E(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=E.map(e,function(t){return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0})
return m(n,t)},parent:function(t){return m(D(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||C.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,n){return M.call(h(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t)
if(this[0]&&!e)var i=E(t).get(0),o=i.parentNode||this.length>1
return this.each(function(n){E(this).wrapAll(e?t.call(this,n):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t))
for(var n;(n=t.children()).length;)t=n.first()
E(t).append(this)}return this},wrapInner:function(t){var e=n(t)
return this.each(function(n){var i=E(this),o=i.contents(),r=e?t.call(this,n):t
o.length?o.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=E(this);(t===x?"none"==n.css("display"):t)?n.show():n.hide()})},isVisible:function(){return E(this).is(":visible")||"hidden"!=E(this).css("visibility")},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},nextAll:function(t){for(var n=E(),e=this.next();e.length;)("undefined"==typeof t||e.is(t))&&(n=n.add(e)),e=e.next()
return n},prevAll:function(t){for(var n=E(),e=this.prev();e.length;)("undefined"==typeof t||e.is(t))&&(n=n.add(e)),e=e.prev()
return n},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(n){var e=this.innerHTML
E(this).empty().append(v(this,t,n,e))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(n){var e=v(this,t,n,this.textContent)
this.textContent=null==e?"":""+e})},attr:function(t,n){var e
return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(o(t))for(T in t)g(this,T,t[T])
else g(this,t,v(this,n,e,this.getAttribute(t)))}):0==this.length||1!==this[0].nodeType?x:!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e},attributes:function(){var t={}
return this.length?(E.each(this[0].attributes,function(n,e){t[e.name]=e.value}),t):this},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,n){return t=K[t]||t,1 in arguments?this.each(function(e){this[t]=v(this,n,e,this[t])}):this[0]&&this[0][t]},data:function(t,n){var e="data-"+t.replace(Y,"-$1").toLowerCase(),i=1 in arguments?this.attr(e,n):this.attr(e)
return null!==i?b(i):x},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(n){this.value=v(this,t,n,this.value)})},offset:function(t){if(t)return this.each(function(n){var e=E(this),i=v(this,t,n,e.offset()),o=e.offsetParent().offset(),r={top:i.top-o.top,left:i.left-o.left}
"static"==e.css("position")&&(r.position="relative"),e.css(r)})
if(0==this.length)return null
if(!E.contains(z.documentElement,this[0]))return{top:0,left:0}
var n=this[0].getBoundingClientRect()
return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var i=this[0],o=getComputedStyle(i,"")
if(!i)return
if("string"==typeof n)return i.style[S(n)]||o.getPropertyValue(n)
if(J(n)){var r={}
return E.each(n,function(t,n){r[n]=i.style[S(n)]||o.getPropertyValue(n)}),r}}var a=""
if("string"==t(n))e||0===e?a=l(n)+":"+f(n,e):this.each(function(){this.style.removeProperty(l(n))})
else for(T in n)n[T]||0===n[T]?a+=l(T)+":"+f(T,n[T])+";":this.each(function(){this.style.removeProperty(l(T))})
return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},u(t)):!1},addClass:function(t){return t?this.each(function(n){if("className"in this){k=[]
var e=y(this),i=v(this,t,n,e)
i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||k.push(t)},this),k.length&&y(this,e+(e?" ":"")+k.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===x)return y(this,"")
k=y(this),v(this,t,n,k).split(/\s+/g).forEach(function(t){k=k.replace(u(t)," ")}),y(this,k.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var i=E(this),o=v(this,t,e,y(this))
o.split(/\s+/g).forEach(function(t){(n===x?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0]
return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0]
return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=j.test(n[0].nodeName)?{top:0,left:0}:n.offset()
return e.top-=parseFloat(E(t).css("margin-top"))||0,e.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(n[0]).css("border-top-width"))||0,i.left+=parseFloat(E(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||z.body;t&&!j.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent
return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()})
E.fn[t]=function(o){var r,a=this[0]
return o===x?e(a)?a["inner"+n]:i(a)?a.documentElement["scroll"+n]:(r=this.offset())&&r[t]:this.each(function(n){a=E(this),a.css(t,v(this,o,n,a[t]()))})}}),B.forEach(function(n,e){var i=e%2
E.fn[n]=function(){var n,o,r=E.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:V.fragment(e)}),a=this.length>1
return r.length<1?this:this.each(function(t,n){o=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null
var s=E.contains(z.documentElement,o)
r.forEach(function(t){if(a)t=t.cloneNode(!0)
else if(!o)return E(t).remove()
o.insertBefore(t,n),s&&w(t,function(t){var n="ufx-executed",e=t.innerHTML
null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||E(t).data(n)||(E(t).data(n,!0),function(t){window.eval.call(window,t)}(e))})})})},E.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){return E(t)[n](this),this}}),V.M.prototype=E.fn,V.uniq=D,V.deserializeValue=b,E.ufx=V,E}()
window.uFX=uFX,void 0===window.$&&(window.$=uFX),function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(n){if(void 0===this||null===this)throw new TypeError
var e,i=Object(this),o=i.length>>>0,r=0
if("function"!=typeof n)throw new TypeError
if(0==o&&1==arguments.length)throw new TypeError
if(arguments.length>=2)e=arguments[1]
else for(;;){if(r in i){e=i[r++]
break}if(++r>=o)throw new TypeError}for(;o>r;)r in i&&(e=n.call(t,e,i[r],r,i)),r++
return e})}(),function(t){"__proto__"in{}||t.extend(t.ufx,{M:function(n,e){return n=n||[],t.extend(n,t.fn),n.selector=e||"",n.__M=!0,n},isM:function(n){return"array"===t.type(n)&&"__M"in n}})
try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle
window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(uFX),function(t){function n(n){return n=t(n),!(!n.width()&&!n.height())&&"none"!==n.css("display")}function e(t,n){t=t.replace(/=#\]/g,'="#"]')
var e,i,o=s.exec(t)
if(o&&o[2]in a&&(e=a[o[2]],i=o[3],t=o[1],i)){var r=Number(i)
i=isNaN(r)?i.replace(/^["']|["']$/g,""):r}return n(t,e,i)}var i=t.ufx,o=i.qsa,r=i.matches,a=t.expr[":"]={visible:function(){return n(this)?this:void 0},hidden:function(){return n(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,n){return t===n.length-1?this:void 0},eq:function(t,n,e){return t===e?this:void 0},contains:function(n,e,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,e){return i.qsa(this,e).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,l="uFX"+ +new Date
i.qsa=function(n,r){return e(r,function(e,a,s){try{var u
!e&&a?e="*":c.test(e)&&(u=t(n).addClass(l),e="."+l+" "+e)
var f=o(n,e)}catch(d){throw console.error("error performing selector: %o",r),d}finally{u&&u.removeClass(l)}return a?i.uniq(t.map(f,function(t,n){return a.call(t,n,f,s)})):f})},i.matches=function(t,n){return e(n,function(n,e,i){return(!n||r(t,n))&&(!e||e.call(t,null,i)===t)})}}(uFX),function(t){function n(n,i){var c=n[s],l=c&&o[c]
if(void 0===i)return l||e(n)
if(l){if(i in l)return l[i]
var u=a(i)
if(u in l)return l[u]}return r.call(t(n),i)}function e(n,e,r){var c=n[s]||(n[s]=++t.uuid),l=o[c]||(o[c]=i(n))
return void 0!==e&&(l[a(e)]=r),l}function i(n){var e={}
return t.each(n.attributes||c,function(n,i){0==i.name.indexOf("data-")&&(e[a(i.name.replace("data-",""))]=t.ufx.deserializeValue(i.value))}),e}var o={},r=t.fn.data,a=t.camelCase,s=t.expando="uFX"+ +new Date,c=[]
t.fn.data=function(i,o){return void 0===o?t.isPlainObject(i)?this.each(function(n,o){t.each(i,function(t,n){e(o,t,n)})}):0 in this?n(this[0],i):void 0:this.each(function(){e(this,i,o)})},t.fn.removeData=function(n){return"string"==typeof n&&(n=n.split(/\s+/)),this.each(function(){var e=this[s],i=e&&o[e]
i&&t.each(n||i,function(t){delete i[n?a(this):t]})})},["remove","empty"].forEach(function(n){var e=t.fn[n]
t.fn[n]=function(){var t=this.find("*")
return"remove"===n&&(t=t.add(this)),t.removeData(),e.call(this)}})}(uFX),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(n){var e=t.fn[n]
t.fn[n]=function(){var t=e.apply(this,arguments)
return t.prevObject=this,t}})}(uFX),function(t){function n(t){return B===!1?!1:""===B?t:B+t.charAt(0).toUpperCase()+t.substr(1)}var e="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,i="pointerEnabled"in navigator,o="msPointerEnabled"in navigator||i,r=("onmousedown"in document,navigator.appVersion),a=navigator.userAgent,s=/Web[kK]it[\/]{0,1}([\d.]+)/.test(a),c=/(iPhone\sOS)\s([\d_]+)/.test(a),l=/(iPod)(.*OS\s([\d_]+))?/.test(a),u=/(iPad).*OS\s([\d_]+)/.test(a),f=c||l||u,d=!!a.match(/\(Macintosh\; Intel /),h=/(Android);?[\s\/]+([\d.]+)?/.test(a),p=/android 2./gi.test(a),m=/android 3./gi.test(a),v=/android 4./gi.test(a),g=/Android /.test(r)&&!/Chrome\/\d/.test(r),y=/(BlackBerry).*Version\/([\d.]+)/.test(a),b=y&&/version\/6/gi.test(a),w=y&&/version\/7/gi.test(a),x=/(BB10).*Version\/([\d.]+)/.test(a),T=/MSIE\s([\d.]+)/.test(a)||/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/.test(a),E=/MSIE 9/gi.test(a),k=/MSIE 10/gi.test(a),S=/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/.test(a),D=/Chrome\/([\d.]+)/.test(a)||/CriOS\/([\d.]+)/.test(a),P=/Firefox\/([\d.]+)/.test(a),C=/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/.test(a),M=/Silk\/([\d._]+)/.test(a),z=/(webOS|hpwOS)[\s\/]([\d.]+)/.test(a),O=!D&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/.test(a),X=O||/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/.test(a),A=z&&/TouchPad/.test(a),F=/Kindle\/([\d.]+)/.test(a),I=/PlayBook/.test(a),N=/(RIM\sTablet\sOS)\s([\d.]+)/.test(a),j=!a.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),Y=document.createElement("div"),L=Y.style,B=function(){var t,n=["t","webkitT","MozT","msT","OT"],e=0,i=n.length
if(h&&s&&!T)return"webkit"
for(;i>e;e++)if(t=n[e]+"ransform",t in L)return n[e].substr(0,n[e].length-1)}(),W=B?"-"+B.toLowerCase()+"-":""
t.device={ua:a,appVersion:r,isWebkit:s&&!T,isOSX:d,isIDevice:f&&!T,isIPhone:c&&!T,isIPod:l,isIPad:u,getAndroidVersion:function(){var t=0
return this.isAndroid&&(t=r.substring(r.indexOf("Android")+8),t=t.substring(0,t.indexOf(";"))),t},isAndroid:h&&!T,isAndroid2:p,isAndroid3:m,isAndroid4:v&&!T,isBadAndroid:g&&!T,isBB6:b,isBB7:w,isBB6or7:b||w,isBB10:x,isIE:T,isIE9:E,isIE10:k,isIE11:S,isChrome:D,isFirefox:P,isFirefoxOS:C,isSafari:X,isSilk:M,isWebOS:z,isWebView:O,isTouchPad:A,isKindle:F,isPlaybook:I,isRIMTabletOs:N,isDesktop:j,screen:function(){var n="undefined"!=typeof window&&window,e="undefined"!=typeof document&&document,i=e&&e.documentElement,o=function(){var t=i.clientWidth,e=n.innerWidth
return e>t?e:t},r=function(){var t=i.clientHeight,e=n.innerHeight
return e>t?e:t},a=o()>r()
return a?t("body").removeAttr("portrait").attr("landscape","true"):t("body").removeAttr("landscape").attr("portrait","true"),{width:o(),height:r(),portrait:!a,landscape:a}},hasTouch:e,hasPointer:o,hasTransition:n("transition")in L,transitionProperty:n("transitionProperty"),transitionPropertyDOM:W+"transition-property",transitionDuration:n("transitionDuration"),transitionDurationDOM:W+"transition-duration",transformOrigin:n("transformOrigin"),transformOriginDOM:W+"transform-origin",transitionTimingFunction:n("transitionTimingFunction"),transitionTimingFunctionDOM:W+"transition-timing-function",transitionDelay:n("transitionDelay"),transitionDelayDOM:W+"transition-delay",hasTransform:n("transform")in L,hasTransform3d:n("perspective")in L,hasPositionFixed:window.Worker&&f||m||v||w||x||k||D,backfaceVisibility:W+"backface-visibility",transformStyle:W+"transform-style",translate:"translate",transform:W+"transform",transformDOM:B+(""!=B?"T":"t")+"ransform",transition:W+"transition",transitionDOM:B+"Transition",vendorSuffix:W,vendorSuffixDOM:B,prefixStyle:n,hasMotion:!!window.DeviceMotionEvent,hasOrientation:!!window.DeviceOrientationEvent||"onorientationchange"in window,startEvent:e?"touchstart":i?"pointerdown":o?"MSPointerDown":"mousedown",doubleEvent:e?"doubleTap":"dblclick",moveEvent:e?"touchmove":i?"pointermove":o?"MSPointerMove":"mousemove",endEvent:e?"touchend":i?"pointerup":o?"MSPointerUp":"mouseup",cancelEvent:e?"touchcancel":i?"pointercancel":o?"MSPointerCancel":"mouseup",resizeEvent:this.hasOrientation?"orientationchange":"resize",transitionEnd:function(){var t={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd"}
return t[B]}(),animationName:n("animationName"),animationDuration:n("animationDuration"),animationTimingFunction:n("animationTimingFunction"),animationEnd:function(){var t={"":"animationend",webkit:"webkitAnimationEnd",Moz:"animationend",O:"oanimationEnd"}
return t[B]}(),nextFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)}}(),cancelFrame:function(){return window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}()}
var R=t.device;(R.isAndroid2||R.isBB6or7)&&(R.hasTransform3d=!1),R.hasTransform3d&&(R.translate="translate3d")}(uFX),function(t){function n(t){return t.trim().replace(/\ /g,"_")}function e(t,e){var i=n(t)
return e?a[i]=!0:a[i]=!1,a[i]}function i(){var n="",e=""
t.each(a,function(t,i){i?n+=" "+t:e+=" "+t}),t("html").removeClass(e).addClass(n)}function o(n){for(var e=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<e.length;i++)if("undefined"!=typeof t("body")[0].style[e[i]+n])return!0
return!1}function r(){var t=s.appVersion,n="undefined"!=typeof document.body.style["-webkit-overflow-scrolling"],e=s.isAndroid&&s.getAndroidVersion().substring(0,3).replace(".","")>=40,i=-1!=t.toLowerCase().indexOf("windows")&&-1!=t.toLowerCase().indexOf("8")
return n||e||i}var a={},s=t.device
t.device.mobilizer=function(){var n=/BlackBerry\w+\/([\d\.]+)/i.exec(s.ua)
return e("js",!0),e("no-js",!1),e("translate3d","translate3d"==s.translate),e("hasFixed",s.hasPositionFixed||isIE11()),e("bs",o("background-size")),e("overflowScroll",r()),e("localStorage","object"==typeof localStorage),e("geolocation",navigator.geolocation),e("webkit",s.isWebkit),e("idevice",s.isIDevice),e("iphone",s.isIPhone),e("ipad",s.isIPad),e("ipod",s.isIPod),e("android",s.isAndroid),e("android2",s.isAndroid2),e("androidStock",s.isAndroid&&!t.device.isChrome),e("chrome",s.isChrome),e("ie",s.isIE10||s.isIE11),e("ie75",-1!=s.ua.indexOf("Windows Phone OS 7.5")),e("ie10",s.isIE10),e("ie11",s.isIE11),e("bb67",s.isBB6or7),e("bb5",null!==n&&n[1]<6),e("carouselSupported",(s.isWebkit||s.isIE10||s.isIE11)&&!(s.isBB6or7||a.bb5)),i(),a?a:{}},t.device.test=function(o,r){t.device.mobilizer[n(o)]=e(o,r),i()}}(uFX),function(t){function n(t){return t._mid||(t._mid=d++)}function e(t,e,r,a){if(e=i(e),e.ns)var s=o(e.ns)
return(v[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!a||t.sel==a)})}function i(t){var n=(""+t).split(".")
return{e:n[0],ns:n.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t,n){return t.del&&!y&&t.e in b||!!n}function a(t){return w[t]||y&&b[t]||t}function s(e,o,s,c,u,d,h){var p=n(e),m=v[p]||(v[p]=[])
o.split(/\s/).forEach(function(n){if("ready"==n)return t(document).ready(s)
var o=i(n)
o.fn=s,o.sel=u,o.e in w&&(s=function(n){var e=n.relatedTarget
return!e||e!==this&&!t.contains(this,e)?o.fn.apply(this,arguments):void 0}),o.del=d
var p=d||s
o.proxy=function(t){if(t=l(t),!t.isImmediatePropagationStopped()){t.data=c
var n=p.apply(e,t._args==f?[t]:[t].concat(t._args))
return n===!1&&(t.preventDefault(),t.stopPropagation()),n}},o.i=m.length,m.push(o),"addEventListener"in e&&e.addEventListener(a(o.e),o.proxy,r(o,h))})}function c(t,i,o,s,c){var l=n(t);(i||"").split(/\s/).forEach(function(n){e(t,n,o,s).forEach(function(n){delete v[l][n.i],"removeEventListener"in t&&t.removeEventListener(a(n.e),n.proxy,r(n,c))})})}function l(n,e){return(e||!n.isDefaultPrevented)&&(e||(e=n),t.each(k,function(t,i){var o=e[t]
n[t]=function(){return this[i]=x,o&&o.apply(e,arguments)},n[i]=T}),(e.defaultPrevented!==f?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(n.isDefaultPrevented=x)),n}function u(t){var n,e={originalEvent:t}
for(n in t)E.test(n)||t[n]===f||(e[n]=t[n])
return l(e,t)}var f,d=(t.ufx.qsa,1),h=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"}
g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(e,i){var o=2 in arguments&&h.call(arguments,2)
if(p(e)){var r=function(){return e.apply(i,o?o.concat(h.call(arguments)):arguments)}
return r._mid=n(e),r}if(m(i))return o?(o.unshift(e[i],e),t.proxy.apply(null,o)):t.proxy(e[i],e)
throw new TypeError("expected function")},t.fn.bind=function(t,n,e){return this.on(t,n,e)},t.fn.unbind=function(t,n){return this.off(t,n)},t.fn.one=function(t,n,e,i){return this.on(t,n,e,i,1)}
var x=function(){return!0},T=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,k={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"}
t.fn.delegate=function(t,n,e){return this.on(n,t,e)},t.fn.undelegate=function(t,n,e){return this.off(n,t,e)},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i,o,r){var a,l,d=this
return n&&!m(n)?(t.each(n,function(t,n){d.on(t,e,i,n,r)}),d):(m(e)||p(o)||o===!1||(o=i,i=e,e=f),(o===f||i===!1)&&(o=i,i=f),o===!1&&(o=T),d.each(function(f,d){r&&(a=function(t){return c(d,t.type,o),o.apply(this,arguments)}),e&&(l=function(n){var i,r=t(n.target).closest(e,d).get(0)
return r&&r!==d?(i=t.extend(u(n),{currentTarget:r,liveFired:d}),(a||o).apply(r,[i].concat(h.call(arguments,1)))):void 0}),s(d,n,o,i,e,l||a)}))},t.fn.off=function(n,e,i){var o=this
return n&&!m(n)?(t.each(n,function(t,n){o.off(t,e,n)}),o):(m(e)||p(i)||i===!1||(i=e,e=f),i===!1&&(i=T),o.each(function(){c(this,n,i,e)}))},t.fn.trigger=function(n,e){return n=m(n)||t.isPlainObject(n)?t.Event(n):l(n),n._args=e,this.each(function(){n.type in b&&"function"==typeof this[n.type]?this[n.type]():"dispatchEvent"in this?this.dispatchEvent(n):t(this).triggerHandler(n,e)})},t.fn.triggerHandler=function(n,i){var o,r
return this.each(function(a,s){o=u(m(n)?t.Event(n):n),o._args=i,o.target=s,t.each(e(s,n.type||n),function(t,n){return r=n.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return 0 in arguments?this.bind(n,t):this.trigger(n)}}),t.Event=function(t,n){m(t)||(n=t,t=n.type)
var e=document.createEvent(g[t]||"Events"),i=!0
if(n)for(var o in n)"bubbles"==o?i=!!n[o]:e[o]=n[o]
return e.initEvent(t,i,!0),l(e)},t.shouldPreventDefault=function(t,n){var e=!1
for(var i in n)n[i].test(t[i])&&(e=!0)
return e},t.click=function(t){var n,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||(n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),n._constructed=!0,e.dispatchEvent(n))}}(uFX),uFX(document).ready(function(t){function n(){var n=o.screen(),e=t.Event("viewportchange")
t("body").css({"min-height":n.height+"px"}),e.width=n.width,e.height=n.height,e.portrait=n.portrait,e.landscape=n.landscape,t(window).trigger(e)}function e(){r=o.screen(),(r.portrait!=a||c)&&(s=r.height,a=r.portrait,l())}var i,o=t.device,r=o.screen(),a=r.portrait,s=r.height,c=!1,l=function(){var e=t("*:focus"),r=window.innerHeight,a=(new Date).getTime()
return i?(clearInterval(i),void(i=null)):(c=!1,!e.length||o.isIE10||o.isIE9||(o.isAndroid2?setTimeout(function(){e[0].focus()},300):setTimeout(function(){c=!0},300)),void(i=setInterval(function(){var t=(new Date).getTime(),e=parseInt(document.body.clientHeight);(e>=r&&document.body.scrollTop>0||t-a>1e3)&&(clearInterval(i),i=null,o.isAndroid||o.isIE10?setTimeout(n,250):n())},100)))}
t("body").removeAttr("onorientationchange"),l(),o.hasOrientation?t(window).on(o.resizeEvent,function(){e()}):setInterval(function(){e()},100)}),function(t){function n(t,n,e,i){return Math.abs(t-n)>=Math.abs(e-i)?t-n>0?"Left":"Right":e-i>0?"Up":"Down"}function e(){c=null,u.last&&(u.el.trigger("longTap",u),u={})}function i(){c&&clearTimeout(c),c=null}function o(){r&&clearTimeout(r),a&&clearTimeout(a),s&&clearTimeout(s),c&&clearTimeout(c),r=a=s=c=null,u={}}t.isPrimaryTouch=function(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary},t.isPointerEventType=function(t,n){return t.type=="pointer"+n||t.type.toLowerCase()=="mspointer"+n}
var r,a,s,c,l,u={},f=750,d=t.device
t(document).ready(function(){var h,p,m,v,g=0,y=0
"MSGesture"in window&&(l=new MSGesture,l.target=document.body),d.isAndroid2&&t("input[type=text], input[type=number]").on(d.startEvent,function(n){n.stopPropagation(),t(this).click()}),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null
n&&(u.el.trigger("swipe",u),u.el.trigger("swipe"+n,u))}).on(d.startEvent,function(n){(!(v=t.isPointerEventType(n,"down"))||t.isPrimaryTouch(n))&&(m=v||!n.touches?n:n.touches[0],n.touches&&1===n.touches.length&&u.x2&&(u.x2=void 0,u.y2=void 0),h=Date.now(),p=h-(u.last||h),u.el=t("tagName"in m.target?m.target:m.target.parentNode),r&&clearTimeout(r),u.x1=m.pageX,u.y1=m.pageY,p>0&&250>=p&&(u.isDoubleTap=!0),u.last=h,c=setTimeout(e,f),l&&v&&l.addPointer(n.pointerId))}).on(d.moveEvent,function(n){(!(v=t.isPointerEventType(n,"move"))||t.isPrimaryTouch(n))&&(m=v||!n.touches?n:n.touches[0],i(),u.x2=m.pageX,u.y2=m.pageY,g+=Math.abs(u.x1-u.x2),y+=Math.abs(u.y1-u.y2))}).on(d.endEvent,function(e){(!(v=t.isPointerEventType(e,"up"))||t.isPrimaryTouch(e))&&(i(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?s=setTimeout(function(){u.el.trigger("swipe",u),u.el.trigger("swipe"+n(u.x1,u.x2,u.y1,u.y2),u),u={}},0):"last"in u&&(30>g&&30>y?a=setTimeout(function(){var n=t.Event("tap")
n.cancelTouch=o,u.el.trigger(n,u),u.isDoubleTap?(u.el&&u.el.trigger("doubleTap",u),u={}):r=setTimeout(function(){r=null,u.el&&u.el.trigger("singleTap",u),u={}},250)},0):u={}),g=y=0)}).on("touchcancel MSPointerCancel pointercancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){t.fn[n]=function(t){return this.on(n,t)}}),["touchStart","touchEnd","touchMove"].forEach(function(n,e){t.fn[n]=function(t){return n=n.match(/start$/i)?d.startEvent:n.match(/move$/i)?d.moveEvent:d.endEvent,this.on(n,t)}})}(uFX),function(t){function n(t){return"tagName"in t?t:t.parentNode}if(t.device.isIDevice){var e,i={}
t(document).bind("gesturestart",function(t){var o=Date.now()
o-(i.last||o)
i.target=n(t.target),e&&clearTimeout(e),i.e1=t.scale,i.last=o}).bind("gesturechange",function(t){i.e2=t.scale}).bind("gestureend",function(n){i.e2>0?(0!=Math.abs(i.e1-i.e2)&&t(i.target).trigger("pinch")&&t(i.target).trigger("pinch"+(i.e1-i.e2>0?"In":"Out")),i.e1=i.e2=i.last=0):"last"in i&&(i={})}),["pinch","pinchIn","pinchOut"].forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}})}}(uFX),function(t){t.fn.drag=function(n,e,i,o){return t(this).each(function(){function r(){return{start:{},current:{},last:{},end:{},deltaX:0,deltaY:0,moving:!1,horizontal:!1,vertical:!1,directionX:0,directionY:0,scale:0}}function a(){f=null,h=new r}function s(t,n){var e=t.touches?t.touches[0]:t
h[n].x=e.pageX,h[n].y=e.pageY}function c(){h.deltaX=-(h.start.x-h.current.x),h.directionX=h.deltaX>0?1:-1,h.deltaY=-(h.start.y-h.current.y),h.directionY=h.deltaY>0?1:-1,h.scale=1+1/h.deltaX}function l(t){f&&(s(t,"current"),h.moving=!0,c(),!h.vertical&&Math.abs(h.deltaX)>Math.abs(h.deltaY)&&(h.horizontal=!0),!h.horizontal&&Math.abs(h.deltaX)<Math.abs(h.deltaY)&&(h.vertical=!0),e&&e.call(d,t,h))}function u(n){f&&(h.end.x=h.current.x,h.end.y=h.current.y,c(),i&&i.call(d,n,h)),t("body").unbind(m.moveEvent,l).unbind(m.endEvent,u)}var f=!1,d=this,h=null,p={horizontal:!0,vertical:!0},m=t.device
o&&t.extend(p,o),a(),t(this).bind(m.startEvent,function(t){a(),f=(new Date).getTime(),s(t,"start"),n&&n.call(this,t,h)}).bind(m.moveEvent,l).bind(m.endEvent,function(t){h.moving&&t.preventDefault(),u(t)}).bind("click",function(t){h.moving&&(t.preventDefault(),t.stopPropagation())})})}}(uFX),function(t){"use strict"
t.zoom=function(n){var e=t.device,i=e.startEvent,o=e.moveEvent,r=e.endEvent,a=Math.abs,s=Math.max,c=Math.min,l=Math.cos,u=function(){var u,f,d,h,p,m,v,g,y=1,b={x:0,y:0},w=n,x=1,T=!1,E={tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,animationInterval:5,maxZoom:4,minZoom:1,lockDragAxis:!1,use2d:!0,tip:null,landscape:!1,zoomStartEventName:"ufxzoomstart",zoomEndEventName:"ufxzoomend",dragStartEventName:"ufxdragstart",dragEndEventName:"ufxdragend",doubleTapEventName:"ufxdoubletap"},k=function(t,n){return t+n},S=function(){d=t('<div class="ufx-zoom-container"></div>'),w.before(d),d.append(w),d.css({overflow:"hidden",position:"relative"}),w.css(e.vendorSuffix+"transform-origin","0 0%").css({position:"absolute"})},D=function(){at(d.get(0),this),t(window).on(e.resizeEvent,P.bind(this)),w.find("img").on("load",P.bind(this))},P=function(){v||(v=!0,setTimeout(function(){v=!1,$()
var t=V()*y,n=-b.x/t,e=-b.y/t,i="scale3d("+t+", "+t+",1) translate3d("+n+"px,"+e+"px,0px)",o="scale("+t+", "+t+") translate("+n+"px,"+e+"px)",r=function(){g&&g.remove()}.bind(this),a=!1
!E.use2d||T||h?(a=!0,r(),w.css({"-webkit-transform":i,"-o-transform":o,"-ms-transform":o,"-moz-transform":o,transform:i})):(a&&(g=w.clone(),g.css("pointer-events","none"),g.appendTo(d),setTimeout(r,200)),w.css({transform:o}),a=!1)}.bind(this),0))},C=function(){m=!0},M=function(n){t(w).trigger(E.dragStartEventName),tt(),p=!1,T=!0,z(n)},z=function(t){if(y>1){var n=G(t)[0]
B(n,p),b=N(b),p=n}},O=function(){t(w).trigger(E.dragEndEventName),rt()},X=function(n){t(w).trigger(E.zoomStartEventName),tt(),x=1,f=0,u=!1,T=!0},A=function(t,n){var e=W(G(t)),i=n/x
x=n,f+=1,f>3&&(Y(i,e),B(e,u)),u=e},F=function(){t(w).trigger(E.zoomEndEventName),rt()},I=function(n){var e=n?G(n)[0]:{x:d.width()/2,y:d.height()/2},i=y>1?1:E.tapZoomFactor,o=y,r=function(t){j(o+t*(i-o),e)}.bind(this)
T||(o>i&&(e=K()),Q(E.animationDuration,E.animationInterval,r,nt),t(w).trigger(E.doubleTapEventName))},N=function(t){var n=(y-1)*et(),e=(y-1)*it(),i=s(n,0),o=s(e,0),r=c(n,0),a=c(e,0)
return{x:c(s(t.x,r),i),y:c(s(t.y,a),o)}},j=function(t,n){Y(t/y,n)},Y=function(t,n){t=L(t),R({x:(t-1)*(n.x+b.x),y:(t-1)*(n.y+b.y)})},L=function(t){var n=y
return y*=t,y=c(E.maxZoom,s(y,E.minZoom)),y/n},B=function(t,n){n&&R(E.lockDragAxis?a(t.x-n.x)>a(t.y-n.y)?{x:-(t.x-n.x),y:0}:{y:-(t.y-n.y),x:0}:{y:-(t.y-n.y),x:-(t.x-n.x)})},W=function(t){return{x:t.map(function(t){return t.x}).reduce(k)/t.length,y:t.map(function(t){return t.y}).reduce(k)/t.length}},R=function(t){b={x:b.x+t.x,y:b.y+t.y}},q=function(){y<E.zoomOutFactor&&U(),H(b)&&_()},H=function(t){var n=N(t)
return n.x!==t.x||n.y!==t.y},_=function(){var t=N(b),n={x:b.x,y:b.y},e=function(e){b.x=n.x+e*(t.x-n.x),b.y=n.y+e*(t.y-n.y),P()}.bind(this)
Q(E.animationDuration,E.animationInterval,e,nt)},U=function(){var t=y,n=1,e=K(),i=function(i){j(t+i*(n-t),e)}.bind(this)
Q(E.animationDuration,E.animationInterval,i,nt)},$=function(){ot(et()/Z())},V=function(){return d[0].offsetWidth/w[0].offsetWidth},Z=function(){return w[0].offsetWidth/w[0].offsetHeight},K=function(){var t=d[0].offsetWidth*y,n=b.x,e=t-n-d[0].offsetWidth,i=isNaN(n/e)?0:n/e,o=i*d[0].offsetWidth/(i+1),r=d[0].offsetHeight*y,a=b.y,s=r-a-d[0].offsetHeight,c=isNaN(a/s)?0:a/s,l=c*d[0].offsetHeight/(c+1)
return 0===e&&(o=d[0].offsetWidth),0===s&&(l=d[0].offsetHeight),{x:o,y:l}},J=function(){return!(y>.99&&1.01>y)},G=function(n){var e=t.isPointerEventType(n,"down")||!n.touches?n:n.touches,i=d.offset()
return e.pageX?[{x:e.pageX-i.left,y:e.pageY-i.top}]:Array.prototype.slice.call(e).map(function(t){return{x:t.pageX-i.left,y:t.pageY-i.top}})},Q=function(n,e,i,o,r){var a=t.now(),s=function(){if(h){var c=t.now()-a,l=c/n
c>=n?(i(1),r&&r(),P(),tt(),P()):(o&&(l=o(l)),i(l),P(),setTimeout(s,e))}}.bind(this)
h=!0,s()},tt=function(){h=!1},nt=function(t){return-l(t*Math.PI)/2+.5},et=function(){return d[0].offsetWidth},it=function(){return d[0].offsetHeight},ot=function(t){return d.height(t)},rt=function(){T=!1,q(),P()},at=function(n){var e=null,a=0,s=null,c=null,l=function(t,n){if(e!==t){if(e&&!t)switch(e){case"zoom":F(n)
break
case"drag":O(n)}switch(t){case"zoom":X(n)
break
case"drag":M(n)}}e=t},u=function(t){2===a?l("zoom"):1===a&&J()?l("drag",t):l(null)},f=function(t){return Array.prototype.slice.call(t).map(function(t){return{x:t.pageX,y:t.pageY}})},d=function(t,n){var e,i
return e=t.x-n.x,i=t.y-n.y,Math.sqrt(e*e+i*i)},h=function(t,n){var e=d(t[0],t[1]),i=d(n[0],n[1])
return i/e},p=function(t){t.stopPropagation(),t.preventDefault()},v=function(n){var i=t.now()
if(a>1&&(s=null),400>i-s)switch(p(n),g=!1,I(n),e){case"zoom":F(n)
break
case"drag":O(n)}1===a&&(s=i)},g=!0
t(n).bind(i,function(n){if(m){var e=t.isPointerEventType(n,"down")||!n.touches?n:n.touches
g=!0,a=e.length?e.length:1,v(n)}}),t(n).bind(o,function(n){var i=t.isPointerEventType(n,"down")||!n.touches?n:n.touches
if(m){if(g)u(n),e&&p(n),c=f(i)
else{switch(e){case"zoom":A(n,h(c,f(i)))
break
case"drag":z(n)}e&&(p(n),P())}g=!1}}),t(n).bind(r,function(n){var e=t.isPointerEventType(n,"down")||!n.touches?n:n.touches
m&&(a=e.length,u(n))})}
return{setup:function(n){return t.extend(E,n),this},draw:function(){return S(),D(),P(),C(),this},zoomIn:function(){return this.isZoomed()||I(),this},zoomOut:function(){return this.isZoomed()&&I(),this},isZoomed:function(){return y>E.minZoom},isBusy:function(){return T}}}
return new u}}(uFX),function(t,n){function e(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}var i,o,r,a,s,c,l,u,f=t.device,d=f.vendorSuffix,h=f.vendorSuffixDOM,p=document.createElement("div"),m=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,v=f.transform,g={}
g[i=d+"transition-property"]=g[o=d+"transition-duration"]=g[a=d+"transition-delay"]=g[r=d+"transition-timing-function"]=g[s=d+"animation-name"]=g[c=d+"animation-duration"]=g[u=d+"animation-delay"]=g[l=d+"animation-timing-function"]="",t.fx={off:h===n&&p.style.transitionProperty===n,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:f.transitionEnd,animationEnd:f.animationEnd},t.fn.animate=function(e,i,o,r,a){return t.isFunction(i)&&(r=i,o=n,i=n),t.isFunction(o)&&(r=o,o=n),t.isPlainObject(i)&&(o=i.easing,r=i.complete,a=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(e,i,o,r,a)},t.fn.anim=function(f,d,h,p,y){var b,w,x,T={},E="",k=this,S=t.fx.transitionEnd,D=!1
if(d===n&&(d=t.fx.speeds._default/1e3),y===n&&(y=0),t.fx.off&&(d=0),"string"==typeof f)T[s]=f,T[c]=d+"s",T[u]=y+"s",T[l]=h||"linear",S=t.fx.animationEnd
else{w=[]
for(b in f)m.test(b)?E+=b+"("+f[b]+") ":(T[b]=f[b],w.push(e(b)))
E&&(T[v]=E,w.push(v)),d>0&&"object"==typeof f&&(T[i]=w.join(", "),T[o]=d+"s",T[a]=y+"s",T[r]=h||"linear")}return x=function(n){if("undefined"!=typeof n){if(n.target!==n.currentTarget)return
t(n.target).unbind(S,x)}else t(this).unbind(S,x)
D=!0,t(this).css(g),p&&p.call(this)},d>0&&(this.bind(S,x),setTimeout(function(){D||x.call(k)},1e3*(d+y)+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=d&&setTimeout(function(){k.each(function(){x.call(this)})},0),this},p=null}(uFX),function(t,n){function e(e,i,o,r,a){"function"!=typeof i||a||(a=i,i=n)
var s={opacity:o}
return r&&(s.scale=r,e.css(t.fx.cssPrefix+"transform-origin","0 0")),e.animate(s,i,null,a)}function i(n,i,o,r){return e(n,i,0,o,function(){a.call(t(this)),r&&r.call(this)})}var o=window.document,r=(o.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle
t.fn.show=function(t,i){return r.call(this),t===n?t=0:this.css("opacity",0),e(this,t,1,"1,1",i)},t.fn.hide=function(t,e){return t===n?a.call(this):i(this,t,"0,0",e)},t.fn.toggle=function(e,i){return e===n||"boolean"==typeof e?s.call(this,e):this.each(function(){var n=t(this)
n["none"==n.css("display")?"show":"hide"](e,i)})},t.fn.fadeTo=function(t,n,i){return e(this,t,n,null,i)},t.fn.fadeIn=function(t,n){var e=this.css("opacity")
return e>0?this.css("opacity",0):e=1,r.call(this).fadeTo(t,e,n)},t.fn.fadeOut=function(t,n){return i(this,t,null,n)},t.fn.fadeToggle=function(n,e){return this.each(function(){var i=t(this)
i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](n,e)})},t.fn.transform=function(n,e,i,o,r,a,s,c){return c=t.device,t(this).each(function(){var t="",l=!1;(n||e||i)&&(l=!0),n=n?n:0,e=e?e:0,i=i?i:0,o=o?o:null,r=r?r:0,a=a?a:0,s=s?s:0,l&&(t+=c.translate+"("+n+"px,"+e+"px",t+=c.hasTransform3d?","+i+"px) ":") "),r&&(t+="rotateX("+r+"deg) "),a&&(t+="rotateY("+a+"deg) "),s&&(t+="rotateZ("+s+"deg) "),o&&(t+="scale("+o+") "),this.style[c.transformDOM]=t}),t(this)}}(uFX),function(t){function n(n,e,i){var o=t.Event(e)
return t(n).trigger(o,i),!o.isDefaultPrevented()}function e(t,e,i,o){return t.global?n(e||y,i,o):void 0}function i(n){n.global&&0===t.active++&&e(n,null,"ajaxStart")}function o(n){n.global&&!--t.active&&e(n,null,"ajaxStop")}function r(t,n){var i=n.context
return n.beforeSend.call(i,t,n)===!1||e(n,i,"ajaxBeforeSend",[t,n])===!1?!1:void e(n,i,"ajaxSend",[t,n])}function a(t,n,i,o){var r=i.context,a="success"
i.success.call(r,t,a,n),o&&o.resolveWith(r,[t,a,n]),e(i,r,"ajaxSuccess",[n,i,t]),c(a,n,i)}function s(t,n,i,o,r){var a=o.context
o.error.call(a,i,n,t),r&&r.rejectWith(a,[i,n,t]),e(o,a,"ajaxError",[i,o,t||n]),c(n,i,o)}function c(t,n,i){var r=i.context
i.complete.call(r,n,t),e(i,r,"ajaxComplete",[n,i]),o(i)}function l(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==T?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,n){return""==n?t:(t+"&"+n).replace(/[&?]{1,2}/,"?")}function d(n){n.processData&&n.data&&"string"!=t.type(n.data)&&(n.data=t.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=f(n.url,n.data),n.data=void 0)}function h(n,e,i,o){return t.isFunction(e)&&(o=i,i=e,e=void 0),t.isFunction(i)||(o=i,i=void 0),{url:n,data:e,success:i,dataType:o}}function p(n,e,i,o){var r,a=t.isArray(e),s=t.isPlainObject(e)
t.each(e,function(e,c){r=t.type(c),o&&(e=i?o:o+"["+(s||"object"==r||"array"==r?e:"")+"]"),!o&&a?n.add(c.name,c.value):"array"==r||!i&&"object"==r?p(n,c,i,e):n.add(e,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",E="text/html",k=/^\s*$/,S=y.createElement("a")
S.href=window.location.href,t.active=0,t.ajaxJSONP=function(n,e){if(!("type"in n))return t.ajax(n)
var i,o,c=n.jsonpCallback,l=(t.isFunction(c)?c():c)||"jsonp"+ ++g,u=y.createElement("script"),f=window[l],d=function(n){t(u).triggerHandler("error",n||"abort")},h={abort:d}
return e&&e.promise(h),t(u).on("load error",function(r,c){clearTimeout(o),t(u).off().remove(),"error"!=r.type&&i?a(i[0],h,n,e):s(null,c||"error",h,n,e),window[l]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),r(h,n)===!1?(d("abort"),h):(window[l]=function(){i=arguments},u.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),y.head.appendChild(u),n.timeout>0&&(o=setTimeout(function(){d("timeout")},n.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(n){var e,o,c=t.extend({},n||{}),h=t.Deferred&&t.Deferred()
for(m in t.ajaxSettings)void 0===c[m]&&(c[m]=t.ajaxSettings[m])
i(c),c.crossDomain||(e=y.createElement("a"),e.href=c.url,e.href=e.href,c.crossDomain=S.protocol+"//"+S.host!=e.protocol+"//"+e.host),c.url||(c.url=window.location.toString()),(o=c.url.indexOf("#"))>-1&&(c.url=c.url.slice(0,o)),d(c)
var p=c.dataType,g=/\?.+=\?/.test(c.url)
if(g&&(p="jsonp"),c.cache!==!1&&(n&&n.cache===!0||"script"!=p&&"jsonp"!=p)||(c.url=f(c.url,"_="+Date.now())),"jsonp"==p)return g||(c.url=f(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),t.ajaxJSONP(c,h)
var b,w=c.accepts[p],x={},T=function(t,n){x[t.toLowerCase()]=[t,n]},E=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,D=c.xhr(),P=D.setRequestHeader
if(h&&h.promise(D),c.crossDomain||T("X-Requested-With","XMLHttpRequest"),T("Accept",w||"*/*"),(w=c.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),D.overrideMimeType&&D.overrideMimeType(w)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&T("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(v in c.headers)T(v,c.headers[v])
if(D.setRequestHeader=T,D.onreadystatechange=function(){if(4==D.readyState){D.onreadystatechange=l,clearTimeout(b)
var n,e=!1
if(D.status>=200&&D.status<300||304==D.status||0==D.status&&"file:"==E){p=p||u(c.mimeType||D.getResponseHeader("content-type")),n=D.responseText
try{"script"==p?(1,eval)(n):"xml"==p?n=D.responseXML:"json"==p&&(n=k.test(n)?null:t.parseJSON(n))}catch(i){e=i}e?s(e,"parsererror",D,c,h):a(n,D,c,h)}else s(D.statusText||null,D.status?"error":"abort",D,c,h)}},r(D,c)===!1)return D.abort(),s(null,"abort",D,c,h),D
if(c.xhrFields)for(v in c.xhrFields)D[v]=c.xhrFields[v]
var C="async"in c?c.async:!0
D.open(c.type,c.url,C,c.username,c.password)
for(v in x)P.apply(D,x[v])
return c.timeout>0&&(b=setTimeout(function(){D.onreadystatechange=l,D.abort(),s(null,"timeout",D,c,h)},c.timeout)),D.send(c.data?c.data:null),D},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var n=h.apply(null,arguments)
return n.type="POST",t.ajax(n)},t.getJSON=function(){var n=h.apply(null,arguments)
return n.dataType="json",t.ajax(n)},t.fn.load=function(n,e,i){if(!this.length)return this
var o,r=this,a=n.split(/\s/),s=h(n,e,i),c=s.success
return a.length>1&&(s.url=a[0],o=a[1]),s.success=function(n){r.html(o?t("<div>").html(n.replace(b,"")).find(o):n),c&&c.apply(r,arguments)},t.ajax(s),this}
var D=encodeURIComponent
t.param=function(n,e){var i=[]
return i.add=function(n,e){t.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(D(n)+"="+D(e))},p(i,n,e),i.join("&").replace(/%20/g,"+")}}(uFX),function(t){function n(t){return a.raw?t:encodeURIComponent(t)}function e(t){return a.raw?t:decodeURIComponent(t)}function i(t){return n(a.json?JSON.stringify(t):String(t))}function o(n){0===n.indexOf('"')&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"))
try{return a.json?t.parseJSON(n):n}catch(e){}}function r(n,e){var i=a.raw?n:o(n)
return t.isFunction(e)?e(i):i}var a
t.cookie=a=function(o,s,c){if(void 0!==s&&!t.isFunction(s)){if(c=t.extend({},a.defaults,c),"number"==typeof c.expires){var l=c.expires,u=c.expires=new Date
u.setDate(u.getDate()+l)}return document.cookie=[n(o),"=",i(s),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var f=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],h=0,p=d.length;p>h;h++){var m=d[h].split("="),v=e(m.shift()),g=m.join("=")
if(o&&o===v){f=r(g,s)
break}o||void 0===(g=r(g))||(f[v]=g)}return f},a.defaults={},t.removeCookie=function(n,e){return void 0!==t.cookie(n)?(t.cookie(n,"",t.extend({},e,{expires:-1})),!0):!1}}(uFX),function(t){t.fn.serializeArray=function(){var n,e,i=[],o=function(t){return t.forEach?t.forEach(o):void i.push({name:n,value:t})}
return this[0]&&t.each(this[0].elements,function(i,r){e=r.type,n=r.name,n&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||r.checked)&&o(t(r).val())}),i},t.fn.serialize=function(){var t=[]
return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(0 in arguments)this.bind("submit",n)
else if(this.length){var e=t.Event("submit")
this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(uFX),function(t){var n,e=[]
t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(e.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",n&&clearTimeout(n),n=setTimeout(function(){e=[]},6e4)),this.parentNode.removeChild(this))})}}(uFX),function(t){t.Callbacks=function(n){n=t.extend({},n)
var e,i,o,r,a,s,c=[],l=!n.once&&[],u=function(t){for(e=n.memory&&t,i=!0,s=r||0,r=0,a=c.length,o=!0;c&&a>s;++s)if(c[s].apply(t[0],t[1])===!1&&n.stopOnFalse){e=!1
break}o=!1,c&&(l?l.length&&u(l.shift()):e?c.length=0:f.disable())},f={add:function(){if(c){var i=c.length,s=function(e){t.each(e,function(t,e){"function"==typeof e?n.unique&&f.has(e)||c.push(e):e&&e.length&&"string"!=typeof e&&s(e)})}
s(arguments),o?a=c.length:e&&(r=i,u(e))}return this},remove:function(){return c&&t.each(arguments,function(n,e){for(var i;(i=t.inArray(e,c,i))>-1;)c.splice(i,1),o&&(a>=i&&--a,s>=i&&--s)}),this},has:function(n){return!(!c||!(n?t.inArray(n,c)>-1:c.length))},empty:function(){return a=c.length=0,this},disable:function(){return c=l=e=void 0,this},disabled:function(){return!c},lock:function(){return l=void 0,e||f.disable(),this},locked:function(){return!l},fireWith:function(t,n){return!c||i&&!l||(n=n||[],n=[t,n.slice?n.slice():n],o?l.push(n):u(n)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}}
return f}}(uFX),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],o="pending",r={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var e=arguments
return n(function(n){t.each(i,function(i,o){var s=t.isFunction(e[i])&&e[i]
a[o[1]](function(){var e=s&&s.apply(this,arguments)
if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
else{var i=this===r?n.promise():this,a=s?[e]:arguments
n[o[0]+"With"](i,a)}})}),e=null}).promise()},promise:function(n){return null!=n?t.extend(n,r):r}},a={}
return t.each(i,function(t,n){var e=n[2],s=n[3]
r[n[1]]=e.add,s&&e.add(function(){o=s},i[1^t][2].disable,i[2][2].lock),a[n[0]]=function(){return a[n[0]+"With"](this===a?r:this,arguments),this},a[n[0]+"With"]=e.fireWith}),r.promise(a),e&&e.call(a,a),a}var e=Array.prototype.slice
t.when=function(i){var o,r,a,s=e.call(arguments),c=s.length,l=0,u=1!==c||i&&t.isFunction(i.promise)?c:0,f=1===u?i:n(),d=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===o?f.notifyWith(n,i):--u||f.resolveWith(n,i)}}
if(c>1)for(o=new Array(c),r=new Array(c),a=new Array(c);c>l;++l)s[l]&&t.isFunction(s[l].promise)?s[l].promise().done(d(l,a,s)).fail(f.reject).progress(d(l,r,o)):--u
return u||f.resolveWith(a,s),f.promise()},t.Deferred=n}(uFX),function(t){t.panel=function(n){function e(t,n){var e=setInterval(function(){t&&(clearInterval(e),n())},10)}function i(t){var n=t||l
return{mode:n,animation:{speed:300},busy:!1,showCallback:function(){},hideCallback:function(){},handle:!1,id:"panel",opacityTransition:!1,overlay:{css:{},propagation:!1},position:g,scrollable:!0,swipeUp:n==l,swipeDown:n==u,swipeLeft:n==f,swipeRight:n==d,hideAfter:-1,visible:!1}}function o(){function n(t){var n=a.visible?t:!1
c.hide(n),c.overlay&&c.hideOverlay(n)}function e(t){var n=a.visible?!1:t
c.show(n),c.overlay&&c.showOverlay()}var o=function(){a.visible?e(!1):n(!1)}
return{bind:function(){return c.handle&&c.handle.show().transform(0,0).bind(E.endEvent,function(t){t.preventDefault(),t.stopPropagation(),s.togglePanel()}),a.overlay&&(a.mode==h&&a.overlay.propagation?c.overlay.unbind(E.startEvent).bind(E.startEvent,function(t){t.preventDefault()}).unbind(E.moveEvent).bind(E.moveEvent,function(t){t.preventDefault()}):(a.overlay.propagation||c.overlay.unbind(E.moveEvent).bind(E.moveEvent,function(t){t.preventDefault(),t.stopPropagation()}),c.overlay.unbind(E.startEvent).bind(E.startEvent,function(t){s.hidePanel(),a.overlay.propagation||(t.preventDefault(),t.stopPropagation())}))),t(window).unbind(v,o).bind(v,o),a.swipeUp&&S.swipeUp(s.hidePanel),a.swipeDown&&S.swipeDown(s.hidePanel),a.swipeLeft&&S.swipeLeft(s.hidePanel),a.swipeRight&&S.swipeRight(s.hidePanel),this},callCallback:function(t){s[T]?(s[T](),s[T]=null):a.showCallback&&"show"==t?a.showCallback():a.hideCallback&&"hide"==t&&a.hideCallback()},destroy:function(){t(window).unbind(v,o),c.destroy(),S=a=s=c=null},hidePanel:function(e,i){return!S||a.busy?!1:(i=!0,e&&(t.isFunction(e)&&(s[T]=e),t.isFunction(e[T])&&(s[T]=e[T]),"undefined"!=typeof e.animate&&(i=e.animate)),a.busy=!0,null==a.animation&&(i=!1),x(a.timer),a.timer=null,n(i),a.visible=!1,!0)},setup:function(n){return a=new i(n.type),t.extend(a,n),a.position==b&&(a.scrollable=!1),c=new r,c.setup(),this.bind(),this},isPanelVisible:function(){return a.visible},redraw:function(t,n){t&&c.content.css("width",t+"px"),n&&c.content.css("height",n+"px"),o()},showPanel:function(t,n){return!S||a.busy?!1:(x(a.timer),a.timer=null,n=!0,t&&("function"==typeof t&&(s[T]=t),"function"==typeof t[T]&&(s[T]=t[T]),"undefined"!=typeof t.animate&&(n=t.animate)),null==a.animation&&(n=!1),a.busy=!0,c.handle&&c.handle.data("panel-handle","open"),c.content.data("panel-content","visible"),e(n),a.visible=!0,-1!=a.hideAfter&&(a.timer=w(function(){s.hidePanel()},a.hideAfter),S.bind(E.startEvent,function(t){x(a.timer),a.timer=null}).bind(E.moveEvent,function(t){t.preventDefault()})),!0)},togglePanel:function(t){a.visible?s.hidePanel(t):s.showPanel(t)}}}function r(){return{setup:function(){S.css({position:a.position==b?b:g}).show(),S.find("[data-panel-handle]").length&&(c.handle=S.find("[data-panel-handle]")),c.handle&&S.find("[data-panel-content]").length?c.content=S.find("[data-panel-content]"):c.content=t(S[0]),c.content.css({visibility:m,display:"none"}),c.handle&&(c.handle.show(),a.handle=!0),a.opacityTransition&&(c.handle||a.mode==d?a.opacityTransition=!1:S.css("opacity","0").css(k+"transition","opacity "+a.animation.speed/1e3+"s ease-in-out")),(c.handle||a.position==y)&&(a.scrollable=!1),("auto"==S.css("z-index")||0==S.css("z-index"))&&S.css("z-index","401"),a.overlay&&(c.overlay||(c.overlay=t('<div class="divPanelOverlay"></div>'),"modal"==a.mode&&a.position==y?S.before(c.overlay):t(document.body).prepend(c.overlay)),c.overlay.bind(E.startEvent,function(t){t.preventDefault()}).bind(E.moveEvent,function(t){t.preventDefault()}).bind(E.endEvent,function(t){t.preventDefault()}),S.bind(E.moveEvent,function(t){t.preventDefault()}),c.overlay.css({background:a.overlay&&a.overlay.css?a.overlay.css.background:"#909090",opacity:"0",display:"none",position:g,"z-index":"400"}).css(k+"transition","opacity "+a.animation.speed+"ms ease-in-out"),a.overlay.css&&c.overlay.css(a.overlay.css)),D[a.mode]&&t.extend(c,new D[a.mode](S))},destroy:function(){S.css({position:"static"}),c.overlay&&c.overlay.remove(),c.handle&&c.handle.hide(),c=null},hideOverlay:function(t){c.overlay.css({opacity:"0"}),t?w(function(){a.visible||c.overlay.hide()},a.animation.speed):c.overlay.hide()},showOverlay:function(){c.overlay.show(),w(function(){if(a.visible){var t=c.getPanelOffset()
c.overlay.css({top:t.top+"px",left:t.left+"0px",width:t.width+"px",height:t.height+"px",opacity:a.overlay.css?a.overlay.css.opacity:"0"})}},0)},hideCallback:function(){c.content.hide().css({visibility:m}),a.busy=!1,s.callCallback("hide")},showCallback:function(){a.busy=!1,s.callCallback("show")},getPanelOffset:function(){var n={top:a.scrollable?document.body.scrollTop:0,bottom:0,left:a.scrollable?document.body.scrollLeft:0,width:window.innerWidth,height:window.innerHeight},e=t(S)[0].offsetParent
if(a.position==y&&e){var i=e.getBoundingClientRect()
n.width=i.width,n.height=i.height}return n},hide:function(){a.opacityTransition?(0!=S[0].style.opacity?S.one(E.transitionEnd,function(){c.hideCallback()}):c.hideCallback(),S[0].style.opacity="0"):(S.hide().css({visibility:m}),c.hideCallback())},show:function(){a.opacityTransition&&(S[0].style.opacity="1"),S.show().css({visibility:p}),c.showCallback()}}}var a,s,c,l="top",u="bottom",f="left",d="right",h="modal",p="visible",m="hidden",v="viewportchange",g="absolute",y="relative",b="fixed",w=setTimeout,x=clearTimeout,T="callback",E=t.device,k=E.vendorSuffix,S=n,D={modal:function(){S.css({top:"0px",left:"0px"}),this.show=function(t){var n,i
a.visible||c.content.css({visibility:m,display:"block"}),n=c.content.width(),i=c.content.height(),e(i,function(){var t
c.content.css({visibility:p}),a.opacityTransition&&(S[0].style.opacity="1"),t=c.getPanelOffset(),S.css({top:parseInt(t.top+t.height/2-i/2)+"px",left:parseInt(t.left+t.width/2-n/2)+"px"}),w(c.showCallback,a.animation.speed)})}},top:function(){var t
S.css({top:"0px"}).transform(0,0),t=c.content,a.handle&&(t=S,c.content.css({position:g}).transform(0,0)),this.hide=function(n){var e=t.height(),i=a.handle?c.getPanelOffset().top:-e
a.opacityTransition&&(c.content[0].style.opacity="0"),n?t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.hideCallback,300)}).transform(0,i):(t.css(k+"transition","none").transform(0,i),w(c.hideCallback,0))},this.show=function(n){var i
a.visible||c.content.css({visibility:m,display:"block"}),i=c.content.height(),e(i,function(){var e=a.handle?i:c.getPanelOffset().top
a.opacityTransition&&(c.content[0].style.opacity="1"),n?(c.content.css({visibility:p}).transform(0,-i),t.show().css({visibility:p}),w(function(){a.opacityTransition&&(c.content[0].style.opacity="1"),t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.showCallback,300)}).transform(0,e)},E.isAndroid?300:0)):(t.show().css("visibility",p).css(k+"transition","none").transform(0,e),w(c.showCallback,0))})}},bottom:function(){var t=c.content
a.position==y?S.css({bottom:"0px"}):S.css({top:"0px"}),S.transform(0,0),a.handle&&(t=S,c.content.css({position:g}).transform(0,0)),this.hide=function(n){var e=c.content.height(),i=c.getPanelOffset(),o=i.top+i.height
a.handle&&(o-=c.handle.height()),a.position==y&&(o=a.handle?0:e),n?(t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.hideCallback,300)}).transform(0,o),a.opacityTransition&&(t[0].style.opacity="0")):(t.css(k+"transition","none").transform(0,o),a.opacityTransition&&(t[0].style.opacity="0"),w(c.hideCallback,300))},this.show=function(n){a.visible||c.content.css({visibility:m,display:"block"})
var i=c.content.height(),o=c.getPanelOffset(),r=o.top+o.height
c.handle&&(r-=c.handle.height()),a.position==y&&a.handle&&(r=0),e(i,function(){r-=i,c.content.css({visibility:p}),n?(a.handle||a.position!=y||(c.content.transform(0,i),r=0),t.show().css({visibility:p}),w(function(){t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.showCallback,300)}).transform(0,r),a.opacityTransition&&(t[0].style.opacity="1")},E.isAndroid?300:0)):(a.handle||a.position!=y||(c.content.css(k+"transition","none").transform(0,i),r=0),t.show().css("visibility",p).css(k+"transition","none").transform(0,r),a.opacityTransition&&(t[0].style.opacity="1"),w(c.showCallback,0))})}},left:function(){S.css("left","0px").transform(0,0)
var t=c.content
a.handle&&(t=S,c.content.css({top:"0px",position:g}).transform(0,0)),this.hide=function(n){var e=c.content.width(),i=a.handle?c.getPanelOffset().left:-e
n?(t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.hideCallback,300)}).transform(i,0),a.opacityTransition&&(t[0].style.opacity="0")):(t.css(k+"transition","none").transform(i,0),a.opacityTransition&&(t[0].style.opacity="0"),w(c.hideCallback,300))},this.show=function(n){a.visible||c.content.css({visibility:m,display:"block"})
var i=c.content.width()
e(i,function(){var e=c.getPanelOffset().left
a.handle&&(e+=i),n?(c.content.css({visibility:p}).transform(-i,0),t.show().css({visibility:p}),w(function(){t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.showCallback,300)}).transform(e,0),a.opacityTransition&&(t[0].style.opacity="1")},E.isAndroid?300:0)):(t.show().css("visibility",p).css(k+"transition","none").transform(e,0),a.opacityTransition&&(t[0].style.opacity="1"),w(c.showCallback,0))})}},right:function(){S.css("right","0px").css(k+"transition","right 500ms ease").transform(0,0)
var t=c.content
return a.handle&&(t=S,c.content.css({top:"0px",position:g}).transform(0,0)),{hide:function(n){n?(t.css(k+"transition","all "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.hideCallback,300)}).css("right","0px"),a.opacityTransition&&(t[0].style.opacity="0")):(t.css(k+"transition","none").css({right:"0px"}),a.opacityTransition&&(t[0].style.opacity="0"),w(c.hideCallback,300))},show:function(n){a.visible||c.content.css({visibility:m,display:"block"})
var i=c.content.width()
e(i,function(){c.content.css({visibility:p})
var e=a.handle?c.handle.width():i
c.content.transform(e,0),n?w(function(){c.content.show().css({visibility:p}),w(function(){S.css(k+"transition","right "+a.animation.speed+"ms ease").one(E.transitionEnd,function(t){w(c.showCallback,300)}).css({right:i+"px"}),a.opacityTransition&&(t[0].style.opacity="1")},E.isAndroid?300:0)},0):(S.show().css(k+"transition","none").css({right:i+"px",visibility:p}),a.opacityTransition&&(t[0].style.opacity="1"),w(c.showCallback,0))})}}}}
return s=new o}}(uFX),function(t){t.lecture=function(n){var e,i,o,r,a,s=t.device,c=s.startEvent,l=s.endEvent,u="click",f=s.vendorSuffix,d={id:n.attr("id"),animation:{speed:1e3,delay:2e3,jump:!1},mode:null,cardsToShow:1,loop:!1,boundaryCallback:function(){},jumpCallback:function(){},resizeCallback:function(){},preload:!0,mode3D:null,geometry:{x:0,y:0,position:0,scale:1,spacing:0},orientation:"horizontal",zoom:null},h=Math.abs,p=0,m=0,v=0,g=0,y=null,b=null,w=!1,x=!1,T=!1,E=!1,k=[],S=null,D=null,P=null,C=null,M=null,z=null,O=null,X=null,A=null,F=null,I="lecture-",N=null,j=null,Y=null,L=0,B=0,W=0,R=0,q=[],H=[],_=null,U=!1,$=0,V=!1,Z=0,K=null,J=function(t){t.preventDefault(),t.target.click()},G=function(){return{content:null,drawFunction:function(){},id:0,loaded:!1,view:null,visible:!1,thumbUrl:null}},Q=function(n){var e=new G
t.extend(e,n),k.push(e)},tt=function(t){var n,e=k.length
for(n=0;e>n;n++)if(k[n].id==t)return k[n]
return null},nt=function(t){var n=tt(t)
return n?k.splice(n.id,1):!1},et=function(n,e){var i,o,r=k.length
for(i=0;r>i;i++)if(i==n)return o=new G,t.extend(o,e),k[i]=o
return!1},it=function(t){var n=t.view.find("img"),e=setInterval(function(){var i=0
if(n.each(function(){this.complete&&i++}),i>=n.length){var o=tt(t.id)
o.loaded=t.loaded=!0,g++,t.drawFunction.call(this,t),clearInterval(e),e=null}},10)},ot=function(){s.hasTransform3d||(d.mode3D=null),s.isAndroid2&&(d.mode="swipe"),1==d.cardsToShow&&"drag"!=d.mode&&(d.animation.jump=!0),d.mode3D?(d.mode="swipe",d.loop=!0):d.animation.jump&&(d.cardsToShow=1)},rt=function(){w=!0,b||(b=setInterval(function(){st(m+1)},d.animation.delay+d.animation.speed)),ht()},at=function(){w=!1,b&&(clearInterval(b),b=null),pt()},st=function(t){var n,e,i=k.length
if(!T&&!y)return ot(),d.loop||(0>t?(d.boundaryCallback.call(this,t,!1),w&&at(),t=0):t>i-d.cardsToShow&&(d.boundaryCallback.call(this,t,!0),w&&at(),t=Math.max(0,i-d.cardsToShow))),d.loop&&(0==m&&t==i-1&&(p=-1),m==i-1&&0==t&&(p=1)),y||T?Mt:(n=tt((t+d.cardsToShow*i)%i),n?(e=t>m?1:-1,p=h(t-m)*e,v=m%i,m=(t+d.cardsToShow*i)%i,T=!0,d.mode3D&&(-1>p?p=-1:p>1&&(p=1)),d.loop&&(d.cardsToShow>1&&d.cardsToShow<=i?(0==v&&t==i-1&&(p=-1),v==i-1&&0==t&&(p=1)):(0==m&&t==i-1&&(p=-1),m==i-1&&0==t&&(p=1))),Ct(),x?(gt(),wt(K),Et(!0)):vt(function(){p?(gt(),wt(K),setTimeout(function(){Et(!0)},10)):(wt(K),xt())},!0),Mt):!1)},ct=function(){w?at():rt()},lt=function(){d.resizeCallback.call(this,Mt,s.screen(),tt(m))},ut=function(o,r,a,s){var c=n.attr("id")
e=n,i=e.children("."+I+"deck-"+c),C=t("."+I+"bullets-"+c),F=t("."+I+"thumbs-"+c),N=t("."+I+"loading-"+c),j=N.find("img[data-rotate]"),q=[],bt(),"cube"!=d.mode&&e.css({overflow:"hidden",position:"relative"}),t("#"+d.id+" *").css(f+"touch-callout","none").css(f+"user-drag","none").css(f+"user-select","none").css(f+"tap-highligh-color","transparent"),ft(o,r,a,s)},ft=function(t,n,o,c){var l=o?o:"horizontal"==d.orientation?r*d.cardsToShow:r,u=c?c:"vertical"==d.orientation?a*d.cardsToShow:a
W=d.geometry.position?parseInt((o-r)/2):0,R=d.geometry.position?parseInt((c-a)/2):0,r=t?parseInt(t):r,a=n?parseInt(n):a,e.css({width:l+"px",height:u+"px"}),i.css(s.transformStyle,"preserve-3d").css(s.backfaceVisibility,"hidden").transform(0,0,0)},dt=function(n,e,o,c){var l=i.children()
ft(n,e,o,c),l.css(s.transition,"none").css({width:r+"px",height:a+"px"})
for(var u=0;u<q.length;u++){var f=q[u]
f.view&&f.loaded&&f.drawFunction.call(this,f)}S&&t(".ufx-zoom-container").css({width:r+"px",height:a+"px"})},ht=function(){D.hide(),P.show()},pt=function(){D.show(),P.hide()},mt=function(){function n(n){var e=parseInt(t(n.target).attr("data-moveto"))
n.preventDefault(),n.stopPropagation(),w&&(T=!1,at()),st(e)}function e(t){t.preventDefault(),t.stopPropagation(),w&&(T=!1,at()),st(m-1)}function i(t){t.preventDefault(),t.stopPropagation(),w&&(T=!1,at()),st(m+1)}var r,a=d.id
if(C&&(C.empty(),r=d.loop?k.length:k.length-d.cardsToShow+1,r>1)){for(var s=0;r>s;s++)C.append('<img data-src="'+d.bullet+'" data-moveto="'+s+'" data-select="'+d.selectedBullet+'"/>').bind(l,J).bind(u,n)
M=C.find("img")}if(X=t("."+I+"number-"+a),A=t("."+I+"total-"+a),z=t("."+I+"prev-"+a),z&&z.bind(l,J).bind(u,e).data("src",z.attr("src")),O=t("."+I+"next-"+a),O&&O.bind(l,J).bind(u,i).data("src",O.attr("src")),D=t("."+I+"play-"+a).bind(u,ct),P=t("."+I+"pause-"+a).hide().bind(u,ct),F&&(F.empty(),d.thumbs)){for(var s=0;s<o.thumbs.length;s++)F.append('<img class="meThumb" data-src="'+o.thumbsBaseUrl+o.thumbs[s]+'" data-moveto="'+s+'" data-select="'+o.thumbsBaseUrl+o.thumbs[s]+'"/>').bind(l,J).bind(u,n)
_=F.find("img")}},vt=function(n,o){var r,a,s,c,l,u,f,b,T,S,D=(x?m:v)-d.geometry.position,P=x?D-d.cardsToShow:D,C=(x?d.cardsToShow:"")+d.geometry.position,M=(x?3*d.cardsToShow:d.cardsToShow)+h(p)
if(!y){if(Z=0,g=0,d.loop||(P=Math.max(Math.max(0,P-D),P),x&&(M=Math.min(2*d.cardsToShow+h(p)+C,Math.max(d.cardsToShow,C+(k.length-C-P)+h(p))),C=Math.min(d.cardsToShow,D))),0>p&&(P+=p),o)for(r=-d.geometry.position,a=r+d.cardsToShow,S=0;S<H.length;S++)s=H[S],s?(c=s.offset,s.view&&(r>c||c>a)&&(s.view.remove(),s.visible=!1,H.splice(S,1),S--)):(H.splice(S,1),S--)
for(S=0;M>S;S++){for(l=(P+S+d.cardsToShow*k.length)%k.length,c=S-C+(0>p?p:0),s=k[l],u=null,f=0;f<H.length;f++)if(H[f].id==s.id&&H[f].offset==c){u=H[f]
break}u?(q[S]=u,s.loaded&&g++,o&&u.drawFunction.call(this,u),q[S].offset=c,0==c&&(K=q[S])):s&&(b=Dt(s,l),i.append(b[0]),T={},t.extend(T,s),T.offset=c,s.loaded&&g++,T.drawFunction.call(this,T),0==c&&(K=T),q.splice(S,0,T))}if(M>g)if(j){if(!Y){var z="yes"==j.data("rotate")
N[0]&&(Y=setInterval(function(){N.css({position:"absolute"}).css("top",e.offset().height/2-N.height()+"px").css("left",e.offset().width/2-N.width()/2+"px").show(),z&&j.transform(null,null,null,null,null,null,L+=30)},75))}}else N&&N.show().css("top",e.offset().height/2-N.height()/2+"px")
if(g=0,d.preload)for(S=0;S<q.length;S++)q[S].loaded?g++:it(q[S])
else for(M=k.length,S=0;S<k.length;S++)k[S].view=Dt(s,s.id),k[S].loaded?g++:it(k[S])
y=setInterval(function(){g>=M&&(V=!0,U||lt(),kt(!0),E&&w&&rt(),L=0,N[0]&&(N[0].style.display="none"),Y&&clearInterval(Y),Y=null,n&&n.call(this),clearInterval(y),y=null)},10)}},gt=function(){var t,n
for(t=0;t<q.length;t++)n=q[t],n.offset-=p,0==n.offset&&(K=n)},yt=function(t){U&&(v=m,d.resizeCallback.call(this,Mt,t,tt(m)),S&&S.zoomOut(),vt(xt,!0))},bt=function(){p=0,T=!1,x=!1,V=!1,Z=0},wt=function(n){var e,i
d.zoom&&(e=n.view,i=e.find("img").eq(0),Mt.zoomController=S=new t.zoom(t(i)).setup(d.zoom).draw())},xt=function(){setTimeout(function(t){var n,e,o,r=-d.geometry.position,a=r+d.cardsToShow
for(U=!0,i.children().css(s.transition,"none"),e=0;e<q.length;e++)n=q[e],o=n.offset,n.view&&(r>o||o>a)&&(n.view.remove(),q.splice(e,1),e--)
H=q,t=(m+d.cardsToShow*k.length)%k.length,d.jumpCallback(t,tt(t)),bt()},10)},Tt=function(){return"horizontal"==d.orientation?h(Z)>60:"vertical"==d.orientation?h(Z)>75:!1},Et=function(t){var n
d.animation&&K&&t?(n=Z&&x?Math.max(100,(h(h(r*p)-h(Z))/r*d.animation.speed).toFixed(2)):d.animation.speed,Z=0,i.children().css(s.transition,"all "+n/1e3+"s ease-out"),setTimeout(function(){xt()},n),kt(!1)):(Z=0,kt(!1),xt())},kt=function(t){var n,e,o,c,l,u,m,v,g,y,b=q.length
if("cube"==d.mode&&!t)return B-=90*p,void i.one(s.transitionEnd,function(){xt()}).css(s.transition,"all "+d.animation.speed/1e3+"s ease-out").transform(null,null,-100,null,null,B,null)
for(y=0;b>y;y++){c=q[y],l=c.offset,u=W+d.geometry.x,m=R+d.geometry.y,v=0,g=0,d.mode3D?(v=2e3*-h(l)*(d.mode3D.scale/parseInt(d.cardsToShow/2)),"horizontal"==d.orientation?u+=parseInt(r*l*d.mode3D.offset):"vertical"==d.orientation&&(m+=parseInt(a*l*d.mode3D.offset+Z)),c.view.css("opacity",h(l)/parseInt(d.cardsToShow/2)>1?0:1)):"horizontal"==d.orientation?(u+=r*l+Z,x&&(-r>u&&(u=-r),u>r*d.cardsToShow&&(u=r*d.cardsToShow)),c.view.css("opacity",1)):"vertical"==d.orientation?(m+=a*l+Z,x&&(-a>m&&(m=-a),m>a*d.cardsToShow&&(m=a*d.cardsToShow))):"cube"==d.mode&&(n=[{x:0,y:-50,z:r/2,rotateY:0},{x:-r/2,y:-50,z:r,rotateY:90},{x:0,y:-50,z:r/2,rotateY:180},{x:-r/2,y:-50,z:0,rotateY:-90}],e=(h(parseInt(B/90))+l+4)%4,o=n[e],e%2!=0&&c.view.css(f+"transform-origin","0 50%"),u=o.x,m=o.y,v=o.z,g=o.rotateY),t&&c.view.css(s.transitionDOM,"none"),(c.offsetX!=u||c.offsetY!=m)&&(c.offsetX=u,c.offsetY=m,c.view.transform(u,m,v,null,null,g)),c.view.css("visibility","visible"),c.visible=!0
for(var w=0;w<k.length;w++)k[w].id==c.id?k[w].visible=!0:k[w].visible=!1}},St=function(){var n,i,o,f
e.tap(function(){w&&at()}),s.isIE&&("vertical"==d.orientation?e.css("-ms-touch-action","pan-x"):"horizontal"==d.orientation&&e.css("-ms-touch-action","pan-y"),e.children().bind(c,function(n){n.preventDefault(),t(this).bind(u,function(t){return!1})}).bind(l,function(n){setTimeout(function(){if(!T){for(var i,o,r,a=s.hasTouch?n.touches[0]:n,c=a.target,l=window.location;c!=e[0]&&(c=c.parentNode,o=t(c).attr("href"),r=t(c).attr("onclick"),!o&&!r););f=c.tagName,o?(o=-1!=o.indexOf(l.host)?o:l.protocol+"//"+l.host+o,window.location=o):r&&(i=document.createEvent("MouseEvents"),i.initMouseEvent(u,!0,!0,n.view,1,a.screenX,a.screenY,a.clientX,a.clientY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,0,null),i._fake=!0,c.dispatchEvent(i))}},150)})),d.mode&&("drag"==d.mode?e.drag(function(t,n){return y||T||S&&S.isZoomed()?void(x=!1):(x=!0,v=m%k.length,m=v,void vt())},function(t,n){if("horizontal"==d.orientation){if(n.horizontal)t.preventDefault()
else if(n.vertical)return}else if("vertical"==d.orientation)if(n.vertical)t.preventDefault()
else if(n.horizontal)return
S&&S.isZoomed()||!x||(w&&at(),V&&(Z="horizontal"==d.orientation?n.deltaX:n.deltaY,kt(!1)))},function(t,n){var e
return y||T||S&&S.isZoomed()||!x?void(x=!1):(w?at():n.time<250&&h(n.deltaX)>30?st(m+(n.deltaX>0?-1:1)):Tt()?(e=Math.round(h(Z)/("horizontal"==d.orientation?r:a)),Z>0?st(m+-1*e):0>Z&&st(m+e)):Et(n.moved),void(x=!1))},{horizontal:"horizontal"==d.orientation,vertical:"vertical"==d.orientation}):"swipe"==d.mode&&(n="vertical"==d.orientation?"swipeUp":"swipeLeft",i="vertical"==d.orientation?"swipeDown":"swipeRight",o=function(t){T||S&&S.isZoomed()||(w&&at(),st(t))},e.bind(n,function(t){o(m+1)}).bind(i,function(t){o(m-1)}))),t(window).bind("viewportchange",yt)},Dt=function(n,e){var n=tt(e),i=document.createElement("div")
return i.innerHTML=n.content,i.style.visibility="hidden",i.className="lecture-card",r&&(i.style.width=r+"px"),a&&(i.style.height=a+"px"),d.animation&&(i.style.position="absolute",t(i).css("float","left").css(s.transformStyle,"preserve-3d").css(s.backfaceVisibility,"hidden").transform(0,0,0)),n.view=t(i)},Pt=function(t){var n,e
for(n=0;n<H.length;n++)e=H[n],e.id==t&&e.view&&(e.view.remove(),H.splice(n,1),n--)
_&&(_.eq(t).remove(),o.thumbs.splice(t,1))},Ct=function(n){function e(){var n=t(this)
n.attr("data-moveto")==i?n.addClass("thumbSelected").attr("src",n.attr("data-select")):n.removeClass("thumbSelected").attr("src",n.attr("data-src"))}var i=n?n:m
M&&M.each(e),_&&_.each(e),X&&A&&(X.html(m+1),A.html(k.length)),z&&z.attr("src",0!=m||d.loop?z.data("src"):z.data("disabled")),O&&O.attr("src",m!=k.length-d.cardsToShow||d.loop?O.data("src"):O.data("disabled"))},Mt={addCard:function(n,e,i){return i=k.length,t.isObject(n)&&!e?(n.id=i,Q(n)):"string"==typeof n&&Q({id:i,content:n,thumbUrl:e}),this},editCard:function(t,n,e){return et(t,n)&&(Dt(tt(t),t),e&&(o.thumbs[t]=e),mt(),Ct()),this},removeCard:function(t){tt(t)&&(Pt(t),nt(t))},currentCard:function(){return m},jump:function(t){return st(t)},jumpToNext:function(){return st(m+1)},jumpToPrev:function(){return st(m-1)},play:function(){return rt(),this},pause:function(){return at(),this},setBusy:function(t){T=t},setup:function(n){return t.extend(d,n),ot(),this},draw:function(t,n,e,i){if(1>$){d.id
ut(t,n,e,i),mt(),St(),E&&(w=!0),st(m),$+=1}else dt(t,n,e,i),st(this.currentCard())
return this},finalize:function(){k=[],e.unbind(c).unbind(s.moveEvent).unbind(l).unbind("tap").unbind(s.doubleEvent).unbind("swipeLeft").unbind("swipeRight").unbind("swipeUp").unbind("swipeDown"),t(window).unbind("viewportchange",yt),i.empty(),C.empty(),F.empty()},zoomController:null,deck:k}
return Mt}}(uFX),function(t){t.scroll=function(n){var e,i,o,r,a,s,c,l,u,f,d,h,p,m,v,g,y,b,w,x,T,E,k,S,D,P,C,M,z,O,X,A,F,I,N,j,Y,L=this,B=t.device,W=B.nextFrame,R=Math.abs,q=Math.round,H=Math.sqrt,_=Math.pow,U=Math.sin,$=Math.min,V=Math.max,Z={quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return H(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var n=4
return(t-=1)*t*((n+1)*t+n)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var n=.22,e=.4
return 0===t?0:1==t?1:e*_(2,-10*t)*U((t-n/4)*(2*Math.PI)/n)+1}}},K=function(t,n,e,i,o,r){var a,s,c=t-n,l=R(c)/e
return r=void 0===r?6e-4:r,a=t+l*l/(2*r)*(0>c?-1:1),s=l/r,i>a?(a=o?i-o/2.5*(l/8):i,c=R(a-t),s=c/l):a>0&&(a=o?o/2.5*(l/8):0,c=R(t)+a,s=c/l),{destination:q(a),duration:s}},J=function(t,n,e){t[0].addEventListener(n,e,!0)},G=function(t,n,e){t[0].removeEventListener(n,e,!0)},Q={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3},tt=B.startEvent,nt=B.moveEvent,et=B.endEvent,it=B.cancelEvent,ot=B.transitionEnd,rt=B.resizeEvent,at=B.transformDOM,st=B.transformOrigin,ct={zoomMin:1,zoomMax:4,startZoom:1,resizeScrollbars:!0,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,wheelSpeed:20},lt=n,ut=lt.children().first(),ft=ut[0].style,dt=[],ht=0,pt=0,mt=0,vt=0,gt={},yt={},bt={},wt=!1,xt=function(){wt=!0},Tt=function(n){if((1==Q[n.type]||0===n.button)&&wt&&(!Y||Q[n.type]===Y)){!ct.preventDefault||B.isBadAndroid||t.shouldPreventDefault(n.target,ct.preventDefaultException)||n.preventDefault()
var e,i=n.touches?n.touches[0]:n
Y=Q[n.type],F=!1,z=0,O=0,mt=0,vt=0,M=0,$t(),w=t.now(),ct.useTransition&&g?(g=!1,e=Ht(),_t(q(e.x),q(e.y)),Wt("scrollEnd")):!ct.useTransition&&y&&(y=!1,Wt("scrollEnd")),x=ht,T=pt,E=ht,k=pt,P=i.pageX,C=i.pageY,Wt("beforeScrollStart")}},Et=function(n){if(wt&&Q[n.type]===Y){ct.preventDefault&&n.preventDefault()
var e,i,o,r,a=n.touches?n.touches[0]:n,s=a.pageX-P,c=a.pageY-C,l=t.now()
if(P=a.pageX,C=a.pageY,z+=s,O+=c,o=R(z),r=R(O),!(l-m>300&&10>o&&10>r)){if(M||ct.freeScroll||(M=o>r+ct.directionLockThreshold?"h":r>=o+ct.directionLockThreshold?"v":"n"),"h"==M){if("vertical"==ct.eventPassthrough)n.preventDefault()
else if("horizontal"==ct.eventPassthrough)return void(Y=!1)
c=0}else if("v"==M){if("horizontal"==ct.eventPassthrough)n.preventDefault()
else if("vertical"==ct.eventPassthrough)return void(Y=!1)
s=0}s=h?s:0,c=p?c:0,e=ht+s,i=pt+c,(e>0||f>e)&&(e=ct.bounce?ht+s/3:e>0?0:f),(i>0||d>i)&&(i=ct.bounce?pt+c/3:i>0?0:d),mt=s>0?-1:0>s?1:0,vt=c>0?-1:0>c?1:0,F||Wt("scrollStart"),F=!0,_t(e,i),l-w>300&&(w=l,x=ht,T=pt)}}},kt=function(n){if(wt&&Q[n.type]===Y){ct.preventDefault&&!t.shouldPreventDefault(n.target,ct.preventDefaultException)&&n.preventDefault()
var o,r,a=(n.changedTouches?n.changedTouches[0]:n,t.now()-w),s=q(ht),c=q(pt),l=R(s-x),u=R(c-T),v=0,y=""
if(g=0,Y=0,m=t.now(),!qt(ct.bounceTime)){if(Kt.scrollTo(s,c),!F)return ct.tap&&t(n).tap(ct.tap),ct.click&&t.click(n),void Wt("scrollCancel")
if(gt.flick&&200>a&&100>l&&100>u)return void Wt("flick")
if(ct.momentum&&300>a&&(o=h?K(ht,x,a,f,ct.bounce?e:0,ct.deceleration):{destination:s,duration:0},r=p?K(pt,T,a,d,ct.bounce?i:0,ct.deceleration):{destination:c,duration:0},s=o.destination,c=r.destination,v=Math.max(o.duration,r.duration),g=1),ct.snap){var b=Lt(s,c)
bt=b,v=ct.snapSpeed||V(V($(R(s-b.x),1e3),$(R(c-b.y),1e3)),300),s=b.x,c=b.y,mt=0,vt=0,y=ct.bounceEasing}return s!=ht||c!=pt?((s>0||f>s||c>0||d>c)&&(y=Z.quadratic),void Kt.scrollTo(s,c,v,y)):void Wt("scrollEnd")}}},St=function(t){if(wt){t.preventDefault(),t.stopPropagation()
var n,e,i,o
if(void 0===I&&Wt("scrollStart"),clearTimeout(I),I=setTimeout(function(){Wt("scrollEnd"),I=void 0},400),"deltaX"in t)1===t.deltaMode?(n=-t.deltaX*ct.wheelSpeed,e=-t.deltaY*ct.wheelSpeed):(n=-t.deltaX,e=-t.deltaY)
else if("wheelDeltaX"in t)n=t.wheelDeltaX/120*ct.wheelSpeed,e=t.wheelDeltaY/120*ct.wheelSpeed
else if("wheelDelta"in t)n=e=t.wheelDelta/120*ct.wheelSpeed
else{if(!("detail"in t))return
n=e=-t.detail/3*ct.wheelSpeed}if(n*=ct.invertWheelDirection,e*=ct.invertWheelDirection,p||(n=e,e=0),ct.snap)return i=bt.pageX,o=bt.pageY,n>0?i--:0>n&&i++,e>0?o--:0>e&&o++,void Kt.goToPage(i,o)
i=ht+q(h?n:0),o=pt+q(p?e:0),i>0?i=0:f>i&&(i=f),o>0?o=0:d>o&&(o=d),Kt.scrollTo(i,o,0)}},Dt=function(n){if(wt){var o,r=ct.snap,a=r?bt.pageX:ht,s=r?bt.pageY:pt,c=t.now(),l=N||0,u=.25
switch(ct.useTransition&&g&&(o=Ht(),_t(Math.round(o.x),Math.round(o.y)),g=!1),j=200>c-l?$(j+u,50):0,n.keyCode){case ct.keys.pageUp:h&&!p?a+=r?1:e:s+=r?1:i
break
case ct.keys.pageDown:h&&!p?a-=r?1:e:s-=r?1:i
break
case ct.keys.end:a=r?yt.length-1:f,s=r?yt[0].length-1:d
break
case ct.keys.home:a=0,s=0
break
case ct.keys.left:a+=r?-1:5+j>>0
break
case ct.keys.up:s+=r?1:5+j>>0
break
case ct.keys.right:a-=r?-1:5+j>>0
break
case ct.keys.down:s-=r?1:5+j>>0
break
default:return}if(r)return void Kt.goToPage(a,s)
a>0?(a=0,j=0):f>a&&(a=f,j=0),s>0?(s=0,j=0):d>s&&(s=d,j=0),Kt.scrollTo(a,s,0),N=c}},Pt=function(t){var n=R(t.touches[0].pageX-t.touches[1].pageX),e=R(t.touches[0].pageY-t.touches[1].pageY)
u=H(n*n+e*e),l=s,S=R(t.touches[0].pageX+t.touches[1].pageX)/2+o.left-ht,D=R(t.touches[0].pageY+t.touches[1].pageY)/2+o.top-pt,Wt("zoomStart")},Ct=function(t){if(wt&&Q[t.type]===Y){ct.preventDefault&&t.preventDefault()
var n,e,i,o=R(t.touches[0].pageX-t.touches[1].pageX),r=R(t.touches[0].pageY-t.touches[1].pageY),a=H(o*o+r*r),f=1/u*a*l
c=!0,f<ct.zoomMin?f=.5*ct.zoomMin*_(2,f/ct.zoomMin):f>ct.zoomMax&&(f=2*ct.zoomMax*_(.5,ct.zoomMax/f)),n=f/l,e=S-S*n+x,i=D-D*n+T,s=f,Kt.scrollTo(e,i,0)}},Mt=function(t){if(wt&&Q[t.type]===Y){ct.preventDefault&&t.preventDefault()
var n,e,i
g=0,Y=0,s>ct.zoomMax?s=ct.zoomMax:s<ct.zoomMin&&(s=ct.zoomMin),Kt.draw(),i=s/l,n=S-S*i+x,e=D-D*i+T,n>0?n=0:f>n&&(n=f),e>0?e=0:d>e&&(e=d),(ht!=n||pt!=e)&&Kt.scrollTo(n,e,ct.bounceTime),c=!1,Wt("zoomEnd")}},zt=function(t){var n,e
if(clearTimeout(I),I=setTimeout(function(){Wt("zoomEnd")},400),"deltaX"in t)n=-t.deltaY/R(t.deltaY)
else if("wheelDeltaX"in t)n=t.wheelDeltaY/R(t.wheelDeltaY)
else if("weelDelta"in t)n=t.wheelDelta/R(t.wheelDelta)
else{if(!("detail"in t))return
n=-t.detail/R(t.wheelDelta)}e=s+n/5,Kt.zoom(e,t.pageX,t.pageY,0)},Ot=function(t){Kt.resize()},Xt={handleEvent:function(t){switch(t.type){case tt:Tt(t),ct.zoom&&t.touches&&t.touches.length>1&&Pt(t)
break
case nt:Et(t)
break
case et:case it:if(c)return void Mt(t)
if(ct.zoom&&t.touches&&t.touches[1])return void Ct(t)
kt(t)
break
case"orientationchange":case rt:Ot(t)
break
case ot:Vt(t)
break
case"wheel":case"DOMMouseScroll":case"mousewheel":if("zoom"==ct.wheelAction)return void zt(t)
St(t)
break
case"keydown":Dt(t)}}},At=function(n){var e=n?G:J,i=ct.bindToWrapper?lt:t(window)
e(t(window),rt,Xt),e(lt,tt,Xt),e(i,nt,Xt),e(i,it,Xt),e(i,et,Xt),e(ut,ot,Xt),ct.click&&e(lt,"click",L)},Ft=function(){ft[st]="0 0"},It=function(){function t(t){for(var n=dt.length;n--;)t.call(dt[n])}var n,e=ct.interactiveScrollbars,i="string"!=typeof ct.scrollbars,o=[]
ct.scrollbars&&(ct.scrollY&&(n={el:Bt("v",e,ct.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:ct.resizeScrollbars,shrink:ct.shrinkScrollbars,fade:ct.fadeScrollbars,listenX:!1},lt.append(n.el),o.push(n)),ct.scrollX&&(n={el:Bt("h",e,ct.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:ct.resizeScrollbars,shrink:ct.shrinkScrollbars,fade:ct.fadeScrollbars,listenY:!1},lt.append(n.el),o.push(n))),ct.indicators&&(o=o.concat(ct.indicators))
for(var r=o.length;r--;)dt.push(new Jt(Kt).setup(o[r]))
ct.fadeScrollbars&&(Rt("scrollEnd",function(){t(function(){this.fade()})}),Rt("scrollCancel",function(){t(function(){this.fade()})}),Rt("scrollStart",function(){t(function(){this.fade(1)})}),Rt("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),Rt("draw",function(){t(function(){this.draw()})}),Rt("destroy",function(){t(function(){this.destroy()}),delete dt})},Nt=function(){bt={},"string"==typeof ct.snap&&(ct.snap=ut.find(ct.snap)),Rt("draw",function(){var t,n,o,s,c,l,u=0,h=0,p=0,m=ct.snapStepX||e,v=ct.snapStepY||i
if(yt=[],e&&i&&r&&a){if(ct.snap===!0)for(o=q(m/2),s=q(v/2);p>-r;){for(yt[u]=[],t=0,c=0;c>-a;)yt[u][t]={x:V(p,f),y:V(c,d),width:m,height:v,cx:p-o,cy:c-s},c-=v,t++
p-=m,u++}else for(l=ct.snap,t=l.length,n=-1;t>u;u++)(0===u||l[u].offsetLeft<=l[u-1].offsetLeft)&&(h=0,n++),yt[h]||(yt[h]=[]),p=V(-l[u].offsetLeft,f),c=V(-l[u].offsetTop,d),o=p-q(l[u].offsetWidth/2),s=c-q(l[u].offsetHeight/2),yt[h][n]={x:p,y:c,width:l[u].offsetWidth,height:l[u].offsetHeight,cx:o,cy:s},p>f&&h++
Kt.goToPage(bt.pageX||0,bt.pageY||0,0),ct.snapThreshold%1===0?(X=ct.snapThreshold,A=ct.snapThreshold):(X=q(yt[bt.pageX][bt.pageY].width*ct.snapThreshold),A=q(yt[bt.pageX][bt.pageY].height*ct.snapThreshold))}}),Rt("flick",function(){var t=ct.snapSpeed||V(V($(R(ht-x),1e3),$(R(pt-T),1e3)),300)
Kt.goToPage(bt.pageX+mt,bt.pageY+vt,t)})},jt=function(){lt.bind("wheel",St),lt.bind("mousewheel",St),lt.bind("DOMMouseScroll",St),Rt("destroy",function(){lt.unbind("wheel",_wheelHander),lt.unbind("mousewheel",St),lt.unbind("DOMMouseScroll",St)})},Yt=function(){var n,e={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40}
if("object"==typeof ct.keys)for(n in ct.keys)"string"==typeof ct.keys[n]&&(ct.keys[n]=ct.keys[n].toUpperCase().charCodeAt(0))
else ct.keys={}
for(n in e)ct.keys[n]=ct.keys[n]||e[n]
t(window).bind("keydown",Dt),Rt("destroy",function(){t(window).unbind("keydown",Dt)})},Lt=function(t,n){if(!yt.length)return{x:0,y:0,pageX:0,pageY:0}
var e=0,i=yt.length,o=0
if(R(t-E)<X&&R(n-k)<A)return bt
for(t>0?t=0:f>t&&(t=f),n>0?n=0:d>n&&(n=d);i>e;e++)if(t>=yt[e][0].cx){t=yt[e][0].x
break}for(i=yt[e].length;i>o;o++)if(n>=yt[0][o].cy){n=yt[0][o].y
break}return e==bt.pageX&&(e+=mt,0>e?e=0:e>=yt.length&&(e=yt.length-1),t=yt[e][0].x),o==bt.pageY&&(o+=vt,0>o?o=0:o>=yt[0].length&&(o=yt[0].length-1),n=yt[0][o].y),{x:t,y:n,pageX:e,pageY:o}},Bt=function(t,n,e){var i=document.createElement("div"),o=document.createElement("div")
return e===!0&&(i.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="ufxIndicator","h"==t?(e===!0&&(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),i.className="ufxHorizontalScrollbar"):(e===!0&&(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),i.className="ufxVerticalScrollbar"),i.style.cssText+=";overflow:hidden",n||(i.style.pointerEvents="none"),i.appendChild(o),i},Wt=function(t){if(gt[t]){var n=0,e=gt[t].length
if(e)for(;e>n;n++)gt[t][n].apply(this,[].slice.call(arguments,1))}},Rt=function(t,n){gt[t]||(gt[t]=[]),gt[t].push(n)},qt=function(t){var n=ht,e=pt
return t=t||0,!h||ht>0?n=0:f>ht&&(n=f),!p||pt>0?e=0:d>pt&&(e=d),n==ht&&e==pt?!1:(Kt.scrollTo(n,e,t,ct.bounceEasing),!0)},Ht=function(){var t,n,e=window.getComputedStyle(ut[0],null)
return ct.useTransform?(e=e[at].split(")")[0].split(", "),t=+(e[12]||e[4]),n=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),n=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:n}},_t=function(t,n){if(ct.useTransform?ft[at]="translate("+t+"px,"+n+"px) scale("+s+") "+v:(t=q(t),n=q(n),ft.left=t+"px",ft.top=n+"px"),ht=t,pt=n,dt)for(var e=dt.length;e--;)dt[e].updatePosition()},Ut=function(t){if(ft[B.transitionTimingFunction]=t,dt)for(var n=dt.length;n--;)dt[n].transitionTimingFunction(t)},$t=function(t){if(t=t||0,ft[B.transitionDuration]=t+"ms",!t&&B.isBadAndroid&&(ft[B.transitionDuration]="0.001s"),dt)for(var n=dt.length;n--;)dt[n].transitionTime(t)},Vt=function(t){t.target==ut[0]&&g&&($t(),qt(ct.bounceTime)||(g=!1,Wt("scrollEnd")))},Zt=function(n,e,i,o){function r(){var u,f,d,h=t.now()
return h>=l?(y=!1,_t(n,e),void(qt(ct.bounceTime)||Wt("scrollEnd"))):(h=(h-c)/i,d=o(h),u=(n-a)*d+a,f=(e-s)*d+s,_t(u,f),void(y&&W(r)))}var a=ht,s=pt,c=t.now(),l=c+i
y=!0,r()},Kt={setup:function(n){return t.extend(ct,n),v=ct.HWCompositing&&B.hasTransform3d?" translateZ(0)":"",ct.useTransition=B.hasTransition&&ct.useTransition,ct.useTransform=B.hasTransform&&ct.useTransform,ct.eventPassthrough=ct.eventPassthrough===!0?"vertical":ct.eventPassthrough,ct.preventDefault=!ct.eventPassthrough&&ct.preventDefault,ct.scrollY="vertical"==ct.eventPassthrough?!1:ct.scrollY,ct.scrollX="horizontal"==ct.eventPassthrough?!1:ct.scrollX,ct.freeScroll=ct.freeScroll&&!ct.eventPassthrough,ct.directionLockThreshold=ct.eventPassthrough?0:ct.directionLockThreshold,ct.bounceEasing="string"==typeof ct.bounceEasing?Z[ct.bounceEasing]||Z.circular:ct.bounceEasing,ct.resizeWait=void 0===ct.resizeWait?60:ct.resizeWait,ct.tap===!0&&(ct.tap="tap"),"scale"==ct.shrinkScrollbars&&(ct.useTransition=!1),ct.invertWheelDirection=ct.invertWheelDirection?-1:1,s=$(V(ct.startZoom,ct.zoomMin),ct.zoomMax),At(0),ct.zoom&&Ft(),(ct.scrollbars||ct.indicators)&&It(),ct.snap&&Nt(),ct.wheel&&jt(),ct.keys&&Yt(),this},draw:function(){lt[0].offsetHeight
e=lt[0].clientWidth,i=lt[0].clientHeight,r=q(ut[0].offsetWidth*s),a=q(ut[0].offsetHeight*s),f=e-r,d=i-a,h=ct.scrollX&&0>f,p=ct.scrollY&&0>d,h||(f=0,r=e),p||(d=0,a=i),m=0,mt=0,vt=0,o=lt.offset(),Wt("draw"),qt(),xt()},destroy:function(){At(1),Wt("destroy")},resize:function(){clearTimeout(b),b=setTimeout(function(){Kt.draw()},arguments.length>0?parseInt(arguments[0]):ct.resizeWait)},scrollBy:function(t,n,e,i){t=ht+t,n=pt+n,e=e||0,this.scrollTo(t,n,e,i)},scrollTo:function(t,n,e,i){i=i||Z.circular,g=ct.useTransition&&e>0,!e||ct.useTransition&&i.style?(Ut(i.style),$t(e),_t(t,n)):Zt(t,n,e,i.fn)},scrollToElement:function(n,e,i,r,a){if(n=n.nodeType?n:ut.find(n).first()){var s=t(n).offset()
s.left-=o.left,s.top-=o.top,i===!0&&(i=q(n.offsetWidth/2-lt[0].offsetWidth/2)),r===!0&&(r=q(n.offsetHeight/2-lt[0].offsetHeight/2)),s.left-=i||0,s.top-=r||0,s.left=s.left>0?0:s.left<this.maxScrollX?this.maxScrollX:s.left,s.top=s.top>0?0:s.top<this.maxScrollY?this.maxScrollY:s.top,e=void 0===e||null===e||"auto"===e?V(R(this.x-s.left),R(this.y-s.top)):e,this.scrollTo(s.left,s.top,e,a)}},goToPage:function(t,n,e,i){i=i||ct.bounceEasing,t>=yt.length?t=yt.length-1:0>t&&(t=0),n>=yt[t].length?n=yt[t].length-1:0>n&&(n=0)
var o=yt[t][n].x,r=yt[t][n].y
e=void 0===e?ct.snapSpeed||V(V($(R(o-this.x),1e3),$(R(r-this.y),1e3)),300):e,bt={x:o,y:r,pageX:t,pageY:n},this.scrollTo(o,r,e,i)},next:function(t,n){var e=bt.pageX,i=bt.pageY
e++,e>=yt.length&&p&&(e=0,i++),this.goToPage(e,i,t,n)},prev:function(t,n){var e=bt.pageX,i=bt.pageY
e--,0>e&&p&&(e=0,i--),this.goToPage(e,i,t,n)},zoom:function(t,n,r,a){if(t<ct.zoomMin?t=ct.zoomMin:t>ct.zoomMax&&(t=ct.zoomMax),t!=s){var c=t/s
n=void 0===n?e/2:n,r=void 0===r?i/2:r,a=void 0===a?300:a,n=n+o.left-ht,r=r+o.top-pt,n=n-n*c+ht,r=r-r*c+pt,s=t,this.draw(),n>0?n=0:f>n&&(n=f),r>0?r=0:d>r&&(r=d),this.scrollTo(n,r,a)}},ease:Z},Jt=function(n){var e,i,o,s,c,l,u,m,g,y,b,w,x,T,E,k,S,D,P,C,M=1,z=1,O=0,X=0,A=0,F=0,I=!0,N=!1,j={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},Y={handleEvent:function(t){switch(t.type){case tt:L(t)
break
case nt:W(t)
break
case et:case it:H(t)}}},L=function(n){var e=n.touches?n.touches[0]:n
n.preventDefault(),n.stopPropagation(),_i_transitionTime(),I=!0,N=!1,D=e.pageX,P=e.pageY,C=t.now(),t(window).bind(nt,Y),Wt("beforeScrollStart")},W=function(n){var e,i,o,r,a=n.touches?n.touches[0]:n
t.now()
N||Wt("scrollStart"),N=!0,e=a.pageX-D,D=a.pageX,i=a.pageY-P,P=a.pageY,o=O+e,r=X+i,_(o,r),n.preventDefault(),n.stopPropagation()},H=function(n){if(I){if(I=!1,n.preventDefault(),n.stopPropagation(),t(window).unbind(nt,Y),ct.snap){var e=Lt(ht,pt),i=j.snapSpeed||V(V($(R(ht-e.x),1e3),$(R(pt-e.y),1e3)),300);(ht!=e.x||pt!=e.y)&&(mt=0,vt=0,bt=e,g.scrollTo(e.x,e.y,i,ct.bounceEasing))}N&&Wt("scrollEnd")}},_=function(t,n){0>t?t=0:t>A&&(t=A),0>n?n=0:n>F&&(n=F),t=j.listenX?q(t/M):ht,n=j.listenY?q(n/z):pt,g.scrollTo(t,n)}
return{setup:function(o){return e="string"==typeof o.el?document.querySelector(o.el):o.el,i=e.style,c=e.children[0],l=c.style,g=n,t.extend(j,o),j.interactive&&(t(c).bind(tt,Y),t(window).bind(et,Y)),j.fade&&(i[at]=v,i[B.transitionDuration]=B.isBadAndroid?"0.001s":"0ms",i.opacity="0"),this},draw:function(){this.transitionTime(),j.listenX&&!j.listenY?l.display=h?"block":"none":j.listenY&&!j.listenX?l.display=p?"block":"none":l.display=h||p?"block":"none",h&&p?(t(e).addClass("ufxBothScrollbars"),t(e).removeClass("ufxLoneScrollbar"),j.defaultScrollbars&&j.customStyle&&(j.listenX?e.style.right="8px":e.style.bottom="8px")):(t(e).removeClass("ufxBothScrollbars"),t(e).addClass("ufxLoneScrollbar"),j.defaultScrollbars&&j.customStyle&&(j.listenX?e.style.right="2px":e.style.bottom="2px"))
e.offsetHeight
return j.listenX&&(o=e.clientWidth,j.resize?(u=V(q(o*o/(r||o||1)),8),l.width=u+"px"):u=c.clientWidth,A=o-u,"clip"==j.shrink?(y=-u+8,b=o-8):(y=0,b=A),M=j.speedRatioX||f&&A/f),j.listenY&&(s=e.clientHeight,j.resize?(m=V(q(s*s/(a||s||1)),8),l.height=m+"px"):m=c.clientHeight,F=s-m,"clip"==j.shrink?(w=-m+8,x=s-8):(w=0,x=F),F=s-m,z=j.speedRatioY||d&&F/d),this.updatePosition(),this},updatePosition:function(){var t=j.listenX&&q(M*ht)||0,n=j.listenY&&q(z*pt)||0
j.ignoreBoundaries||(y>t?("scale"==j.shrink&&(T=V(u+t,8),l.width=T+"px"),t=y):t>b?"scale"==j.shrink?(T=V(u-(t-A),8),l.width=T+"px",t=A+u-T):t=b:"scale"==j.shrink&&T!=u&&(T=u,l.width=T+"px"),w>n?("scale"==j.shrink&&(E=V(m+3*n,8),l.height=E+"px"),n=w):n>x?"scale"==j.shrink?(E=V(m-3*(n-F),8),l.height=E+"px",n=F+m-E):n=x:"scale"==j.shrink&&E!=m&&(E=m,l.height=E+"px")),O=t,X=n,ct.useTransform?l[at]="translate("+t+"px,"+n+"px)"+v:(l.left=t+"px",l.top=n+"px")},fade:function(t,n){if(!n||k){clearTimeout(S),S=null
var e=t?250:500,o=t?0:300
t=t?"1":"0",i[B.transitionDuration]=e+"ms",S=setTimeout(function(t){i.opacity=t,k=+t}.bind(Xt,t),o)}},transitionTime:function(t){t=t||0,l[B.transitionDuration]=t+"ms",!t&&B.isBadAndroid&&(l[B.transitionDuration]="0.001s")},transitionTimingFunction:function(t){l[B.transitionTimingFunction]=t},destroy:function(){j.interactive&&(t(c).unbind(tt,Y),t(window).unbind(nt,Y).unbind(et,Y)),j.defaultScrollbars&&e.parentNode.removeChild(e)}}}
return Kt}}(uFX)
/*  Copyright Usablenet Inc. 2012-2016 */

/**
 * Mobilizr
 *
 * Executes multiple tests on the device and provides a list of supported features.
 * If a feature is supported a proper class will be added to the <html> tag. This
 * will allow you to react to different features directly using CSS expressions.
 *
 * Example:
 * <pre>
 *		.js .show-only-with-js-loaded {
 *			display: block;
 *		 }
 *		
 * 		.hasFixed .sticky-header {
 *			position:fixed;
 *			top:0;
 *		 }
 * </pre>
 *
 * The same checks can be done via JS, by reading the 'ext.mobilizr' object.
 *
 * Using 'ext.mobilizr.test( classname, expression )' you'll be able to perform
 * further tests, which will automatically add/remove classes to <html> and 
 * update the relative property.
 * 
 * Example:
 * <pre>
 * 		ext.mobilizr.test( 'boolean_said_yes', true )
 * 		$('html').hasClass('boolean_said_yes') 	// true
 * 		alert(ext.mobilizr.boolean_said_yes) 	// true
 * </pre>
 *
 * WARNING: using dashes '-' in classnames will require you to access properties
 * in a different way using JS.
 *
 * Example:
 * <pre>
 * 		ext.mobilizr.test( 'boolean-said-yes', true )
 *		$('html').hasClass('boolean-said-yes')	// false
 *		ext.mobilizr['boolean-said-yes']		// true
 * </pre>
 *
 * @Author Giovanni Piller Cottrer <giovanni.piller@usablenet.com>
 *
 * @Changelog:
 * [v2.3, 10-08-2014]
 * - carouselSupported for IE11 too
 * [v2.2, 10-08-2014]
 * - support for uFX 2.0.3
 * [v2.1, 29-04-2014]
 * - classname can now contain dashes. Backward compatibility with .no-js
 * [v2.0, 29-04-2014]
 * - support for shared 'ext' namespace
 * - initial support for IE11 (WP8.1)
 * - check features support via JS: 'ext.mobilizr.property_name'
 * - support for additional tests after page load using 'ext.mobilizr.test()'
 *
 **/


$(document).ready(function() {
(function( ext, $, undefined ) {
	var EXT_VERSION = '2.3'

	ext.mobilizr = function () {
		var properties = {}

		// Temporary IE11 check
		function isIE11 () {
			return $.device.isIE11 || $.device.ua.indexOf('IEMobile/11.0')!=-1
		}

		function js_name(name) {
			return name.trim().replace(/\ /g, '_')
		}

		// tests expression and sets properties for features support (boolean)
		function testProperty ( classname, expression ) {
			var js_classname = js_name(classname)
			if (expression) {
				properties[js_classname] = true
			}
			else {
				properties[js_classname] = false
			}

			return properties[js_classname]
		}

		// after testing properties, add/remove classes to <html> tags
		function propertiesToHTML() {
			var add_class = '', remove_class = '';
			$.each(properties, function(key, value) {
				if (value) {
					add_class += ' '+key
				}
				else {
					remove_class += ' '+key
				}
			});
			$('html').removeClass(remove_class).addClass(add_class)
		}

		// test basic CSS properties availability
		function checkProperySupport( property ) {
			var prefixes = ['-webkit-', '-moz-', '-ms-', '-o-', '']
			for (var i=0; i<prefixes.length; i++) {
				if(typeof($("body")[0].style[prefixes[i]+property]) !== "undefined") {
					return true
					break
				}
			}
			return false
		}
		
		// [TODO]: fix for future WP releases
		function hasNativeScroll() {
		    var dVersion = $.device.appVersion,
		        a = (typeof(document.body.style["-webkit-overflow-scrolling"]) !== 'undefined'),                        // Ios                                                                                // iOS devices ...
		        b = $.device.isAndroid && $.device.getAndroidVersion().substring(0,3).replace('.','') >= 40,            // Android ...
		        c = (dVersion.toLowerCase().indexOf('windows') != -1 && dVersion.toLowerCase().indexOf('8') != -1 )     // Windows ...
		    return (a || b || c)
		}

		// needed to parse BB version <6
		var bb_version = /BlackBerry\w+\/([\d\.]+)/i.exec($.device.ua)
		var stockAndroid = /(Version)|(SamsungBrowser)\//i.test($.device.ua) //need to check if is a android stock 

		testProperty('js', true)											// javascript support
		testProperty('no-js', false)										// no javascript support
		testProperty('translate3d', $.device.translate == 'translate3d')	// translate3d
		testProperty('hasFixed', $.device.hasPositionFixed || isIE11())		// support for position:fixed
		testProperty('bs', checkProperySupport('background-size')) 			// support for background-size
		testProperty('overflowScroll', hasNativeScroll()) 					// native scrolling
		if (navigator.cookieEnabled)
			testProperty('localStorage', typeof localStorage === 'object')		// local storage + ULINENGM-3776
		testProperty('geolocation', navigator.geolocation)					// device's geolocation
		testProperty('webkit', $.device.isWebkit)							// webkit browser
		testProperty('idevice', $.device.isIDevice)							// Apple device
		testProperty('iphone', $.device.isIPhone)							// iphone
		testProperty('ipad', $.device.isIPad)								// ipad
		testProperty('ipod', $.device.isIPod)								// ipod
		testProperty('android', $.device.isAndroid)							// android
		testProperty('android2', $.device.isAndroid2)						// android 2
		testProperty('stockBrowser', stockAndroid==true&&$.device.isAndroid )
		testProperty('androidStock', $.device.isAndroid&&!$.device.isChrome)// android stock browser
		testProperty('chrome', $.device.isChrome)							// chrome (non-platform dependant)
		testProperty('ie', $.device.isIE10 || isIE11())						// Internet Explorer
		testProperty('ie75',$.device.ua.indexOf('Windows Phone OS 7.5')!=-1)// Internet Explorer for WP 7.5
		testProperty('ie10', $.device.isIE10)								// Internet Explorer 10
		testProperty('ie11', isIE11())										// Internet Explorer 11 (WP8.1)
		testProperty('bb67', $.device.isBB6or7)								// Blackberry 6/7
		testProperty('bb5', (bb_version !== null && bb_version[1] < 6))		// Blackberry 5
		testProperty('carouselSupported', (($.device.isWebkit || $.device.isIE10 || isIE11()) && !($.device.isBB6or7 || properties.bb5)));

		// << END properties testing


		// after testing properties, add/remove classes to <html> tags
		propertiesToHTML()

		// the following will be accessible via ext.mobilizr
		return $.extend({
			EXT_VERSION: EXT_VERSION,
			test: function ( classname, expression ) {
				// this function testes an expression and rewrites classes to <html>
				ext.mobilizr[js_name(classname)] = testProperty(classname, expression)
				propertiesToHTML()
			}
		}, properties ? properties : {})
	}()
}( window.ext = window.ext || {}, window.Merci || window.uFX ))
})
/**
 * Animated scrollTo
 *
 * Usage:
 * ext.scroll.to(endY, duration)
 *
 * Account for sticky elements (example):
 * ext.scroll.accountFor($('.hasFixed .fixed_header'))
 *
 * @Changelog
 * [v1.2, 20-Jun-2014]
 * - scrolling can be animated for overflow:scroll containers too.
 *   (ext.scroll.to(endY, duration, container))
 * [v1.1, 08-May-2014]
 * - account for sticky headers and alike during endY calculation
 **/
$(document).ready(function() {
	(function( ext, $, undefined ) {
		var EXT_VERSION = '1.2';

		ext.scroll = function () {
			var accounted_elements = $();

			function _getAccountedHeight () {
				var accounted_height = 0;
				accounted_elements.each(function(index, el) {
					accounted_height = accounted_height + $(this).height();
				});

				return accounted_height;
			}

			/**
			 * @param elements - Selector for elements to be accounted for
			 * 					 during endY calculation
			 */
			function accountFor ( elements ) {
				accounted_elements = accounted_elements.add($(elements))
				return accounted_elements;
			}

			function scrollTo ( endY, duration, container ) {
				var account_height = accounted_elements.length ? _getAccountedHeight() : 0;
			    endY = (endY-account_height > 0 ? endY-account_height : 0) || ($.device.isAndroid ? 1 : 0);
			    duration = duration || 200;


			    var startY = container ? container.scrollTop : document.body.scrollTop,
			        startT  = +(new Date()),
			        finishT = startT + duration;

			    var interpolate = function (source, target, shift) { 
			        return (source + (target - source) * shift); 
			    };

			    var easing = function (pos) { 
			        return (-Math.cos(pos * Math.PI) / 2) + .5; 
			    };

			    var animate = function() {
			        var now = +(new Date()),
			            shift = (now > finishT) ? 1 : (now - startT) / duration;

			        if (container) {
			        	container.scrollTop = interpolate(startY, endY, easing(shift))
			        }
		        	else {
		        		window.scrollTo(0, interpolate(startY, endY, easing(shift)));
		        	}

			        (now > finishT) || setTimeout(animate, 15);
			    };

			    animate();
			}

			return {
				EXT_VERSION: EXT_VERSION,
				to: scrollTo,
				accountFor: accountFor
			}
		}();
	}( window.ext = window.ext || {}, window.Merci || window.uFX ));
});
/**
 * Menuize
 * 
 * Plugin for implementing sliding content/menu on mobile sites.
 *
 * @author Giovanni Piller Cottrer <giovanni.piller@usablenet.com>
 * 
 * JS METHODS
 * ==========
 *
 * ext.menuize.show( panelID )
 * ---------------------------
 * Adds the proper status classess and shows the panel identified by panelID
 * Example:
 * ext.menuize.show('left')
 *
 * ext.menuize.hide()
 * ------------------
 * Hides any panel currently displayed and removes status classes.
 *
 * ext.menuize.current()
 * ------------------
 * Returns the id of the panel currently being shown or null
 *
 *
 * CSS MARKERS
 * ===========
 * A number of CSS classes are used as markers for each different section of the
 * website.
 *
 * .menuize_main
 * -------------
 * Main content wrapper, usually a <main>.
 * This element will be translated to show panels behind it.
 * 
 * .menuize_sticky
 * ---------------
 * Any additional position:fixed element that needs to be translated as we do 
 * with .menuize_main.
 * Best examples for this are sticky headers.
 *
 * .menuize_overlay
 * ----------------
 * 100% tall, 100% wide area that will cover .menuize_main, intercept clicks and
 * other touch events, that would otherwise be propagated to content inside the
 * main area.
 * Also useful for providing visual effects like shadows or translucency on the 
 * main content.
 *
 * .menuize_panel
 * --------------
 * Identifies each panel (ex. left/right). Must contain a content wrapper in 
 * order to prevent page scroll during native-scrolling events within the panel.
 * Each .menuize_panel will also require having a specific
 * .menuize_panel-[PANEL_ID] class, so that it can be matched via CSS/JS without
 * conflicts.
 * 
 * Example:
 * <nav class="menuize_panel menuize_panel-left">
 *   <!-- A children wrapping the whole content is required -->
 *   <div>
 *     Content goes here
 *   </div>
 * </nav>
 *
 *
 * ACTION CLASSES
 * ==============
 *
 * .menuize_show-[panelID]
 * -----------------------
 * Clicking on the element marked with this class, will show the panel 
 * identified by [panelID].
 * Example:
 * <a href="#" class="menuize_show-left">Show left menu</a>
 * 
 *
 * STATUS CLASSES
 * ==============
 * A number of CSS classes will help you identifying the status of the menu.
 *
 * html.menuize_opened
 * -------------------
 * A panel is currently being shown.
 *
 * html.menuize_opened-left
 * ------------------------
 * Along with .menuize_opened. The left panel is currently being displayed.
 *
 */

$(document).ready(function() {
  (function( ext, $, undefined ) {
    var EXT_VERSION = '2.4'

    // require mobilizr extension
    if (!ext.mobilizr) { 
      console.log('ext.mobilizr is required by ext.menuize')
      return 
    }

    ext.menuize = function() {
      /**
       * Status support variables
       */
      var status = {
        'current': null,
        'native-scrolling': ext.mobilizr.translate3d &&
                            ext.mobilizr.hasFixed &&
                            ext.mobilizr.overflowScroll,
        'preventPageScroll': true, 
      }


      /**
       * Saving selectors for later uses
       *
       * 1. main content wrapper, usually a <main>
       * 2. overlay that will cover the whole main section
       * 3. any other sticky element (ex. sticky header)
       * 4. all menuize panels (ex. right/left)
       */
      var html = $('html'),
          device = $.device,
          main = $('.menuize_main'), /* 1 */
          overlay = $('.menuize_overlay'), /* 2 */
          stickyElements = $('.menuize_sticky'), /* 3 */
          panels = $('.menuize_panel'), /* 4 */
          allTranslated = $('.menuize_main, .menuize_sticky, .menuize_overlay'),
          panelPrefix = 'menuize_panel-'


      /**
       * Depending on the device, multiple fingers might be detected.
       * This will only take in consideration the first, thus letting us use
       * event.pageY regardless.
       */
      function touch ( event ) {
        return event.targetTouches ? event.targetTouches[0] : event
      } 

      /**
       * Reset transformations
       *
       * Launched after all manual transitions are completed.
       * Removes status classes form <html>. Cleans up style attributes.
       */
      function resetTransformations () {
        html.removeClass('menuize_opened menuize_opened-left menuize_opened-right')
        allTranslated.css(device.vendorSuffix+'transform', '')
      }


      function current () {
        return status.current
      }


      /**
       * Animates all elements to starting position (0,0,0) 
       */
      function hidePanel (callback) {
        status.current = null

        var startPosition = 'translate3d(0,0,0)'
        if (!callback) callback = function () {}

        /* transitionEnd may not trigger if transition already happend, 
           so we make sure to launch callback anyway */
        if (main.css(device.vendorSuffix+'transform') == startPosition) {
          resetTransformations()
          callback()
          return 
        }
        
        // bind only one transitionEnd per time, and only on main element
        main.off(device.transitionEnd)
            .one(device.transitionEnd, function () {
              resetTransformations()
              callback()
            })

        // reset position
        allTranslated.css(device.vendorSuffix+'transform', startPosition)
        ext.scroll.to(0,1) // ULINENGM-1556
        $('.quickorderSection input').blur() //ULINENGM-1556
      }


      /**
       * Adds all the necessary classes to <html>.
       * Actually shows the panel.
       */
      function showPanel ( id ) {

        // IE11 is unable to transition 3 different elements to the same coords
        // Toggling view forces repaint, with the correct translate3d value.
        // This is documented better in the CSS.
        if (ext.mobilizr.ie11) {
          main.off(device.transitionEnd)
          .one(device.transitionEnd, function () {
            stickyElements.hide()
            setTimeout(function () {
              stickyElements.show().css(device.vendorSuffix+'transform', '')
            }, 10)
          })
        }
        
        html.addClass('menuize_opened menuize_opened-' + id)
        status.current = id
      }


      /**
       * Show ID panel
       * 
       * @param id (string) usually 'left' or 'right'
       */
      function show ( id ) {
        // attempting to open an already opened panel
        if (status.current == id) return ;

        // a panel with another id is already open. Close it before proceeding.
        if (status.current && status.current != id) {
          hidePanel(function () {
            showPanel(id)
          });
        }
        else if (status.current) {
          hidePanel()
        }
        else {
          showPanel(id)
        }
      }


      /**
       * Setup live binds for show/hide actions on marked elements
       */
      $(document).on('click', '.translate3d.hasFixed .menuize_show-left, .translate3d.hasFixed .menuize_show-right', function (e) {
        e.preventDefault()
        window.scrollTo(0,1); // ULINENGM-1506

        if (!status.current) {
          var that = $(this)
          var panelId = that.hasClass('menuize_show-left') ? 'left' : 'right'

          show(panelId)
        }
        else {
          hidePanel()
        }
        
      })


      // clicking on the overlay will hide any backdrop
      overlay.on(device.endEvent, function(e) {
        e.preventDefault();
        $('.menuize_panel aside').hide();
        hidePanel()

        // fix to hide any keyboard present after focusing on quickOrder section:
        // focus() and blur() after 500ms on search input in main header
        setTimeout(function(){
          $('.search-input input').focus().blur()
          $('.menuize_panel aside').show();
        },500)
      })
      .on(device.moveEvent, function (e) {
        if (status.current && ext.mobilizr.overflowScroll) {
          e.preventDefault()
        }
      })


      /**
       * Disable page-scroll during scrolling events inside panels.
       *
       * In other words: users should be able to scroll the panel's
       * content without affecting page scroll.
       *
       * Usually, when the scrolling of an overflow:scroll element has 
       * reached the end, the page will start scrolling.
       */
      if (status['native-scrolling'] && status.preventPageScroll) {

        // amount of px after which we can consider a scroll event
        var threshold = 5

        function isCurrent ( panelSelector ) {
          return status.current && panelSelector.hasClass(panelPrefix + status.current)
        }

        function scrollingToTop ( touchY, movingY ) {
          return ((touchY - movingY) < threshold)
        }

        function scrollingToBottom ( touchY, movingY ) {
          return ((movingY - touchY) < threshold)
        }

        panels.each(function(index, el) {
          var panel = $(el)
          // starting touch Y coord
          var touchY = 0

          $(window)
          .on(device.startEvent, '.menuize_opened body', function(e) {
            if (!isCurrent(panel)) { return ; }

            // store starting touch coordinates. Will later be used to calculate
            // scrolling amount and direction
            touchY = touch(e).pageY
          })
          .on(device.moveEvent, '.menuize_opened body', function(e) {
            if (!isCurrent(panel)) { return }

            var movingY = touch(e).pageY,
                panelScrolled = panel.scrollTop(),
                panelHeight = panel.height(),
                contentHeight = panel.children().height(),
                maxScroll = contentHeight - panelHeight

            if (scrollingToTop(touchY, movingY) && panelScrolled == 0) {
              e.preventDefault()
              if (device.android) e.stopPropagation()
              return false
            }
            else if (scrollingToBottom(touchY, movingY) &&
                     panelScrolled >= maxScroll) {
              e.preventDefault()
              if (device.android) e.stopPropagation()
              return false
            }
          })
          .on(device.moveEvent, stickyElements.selector, function(e) {
            // prevent page scroll from sticky elements (eg. sticky-header)
            e.stopPropagation()
            e.stopImmediatePropagation()
            e.preventDefault()
            e.cancelBubble = true
          });
        })
      }


      /**
       * Fixes iOs native-scrolling bug
       *
       * Quickly setting/resettig webkitOverflowScrolling fixes the issue
       */
      if (ext.mobilizr.overflowScroll && ext.mobilizr.idevice) {

        /**
         * Device rotation issue
         * ---------------------
         *
         * Starting landscape, content scrolls.
         * Turn to portrait, where scroll not needed.
         * Back to landscape, scrolling is not working anymore.
         */
        $(window).on(device.resizeEvent, function () {
          panels.css({webkitOverflowScrolling: 'auto', overflow: 'hidden'});
          setTimeout(function () {
            panels.css({webkitOverflowScrolling: 'touch', overflow: 'auto'});
          }, 10)
        })

        /**
         * Expand blocks (or similar) issue
         * --------------------------------
         *
         * Expand blocks within the panels.
         * Scrolling not necessary by default.
         * User expands an element tall enough to enable scrolling
         * Scrolling doesnt work
         * 
         * Resetting panels.children() width by using fixed dimensions forces
         * iOS to check for scrolling again thus enabling it 
         */
        var panelsContent = panels.children()
        panelsContent.on('click', function(event) {
          panelsContent.css({
            overflowY: 'hidden',
            height: (device.screen().height)+'px'
          })
          setTimeout(function () {
            panelsContent.css({overflowY: ''})
            panelsContent.css({
              overflowY: '',
              height: ''
            })
          }, 10)
        })
      }


      /**
       * Android redraw fix
       */
      if (ext.mobilizr.androidStock) {
        $(window).on(device.resizeEvent, function () {
          setTimeout(function () {
            allTranslated.add(panels).css({width: '100%'});
            setTimeout(function () {
              allTranslated.add(panels).css({width: ''});
            }, 10)
          }, 1000)
        })
      }

      return {
        show: show,
        hide: hidePanel,
        current: current
      }
    }()
  }( window.ext = window.ext || {}, window.Merci || window.uFX ))
})
/*
Requires animatedscroll.js
*/
var ExpandBlocks;

$(document).ready(function() {
	
	(ExpandBlocks = function(o) {
		var options = {};
		options = $.extend(options, o);

		$(document).on('click', '.expand_toggle', function(e) {
			event.preventDefault();
	
			var that = $(this);
			var expand_block = that.parents('.expand_block').eq(0);

				if (expand_block.hasClass('expanded')) {
					// hide expanded content
					expand_block.removeClass('expanded');
				}
				else {
					//ULINENGM-3532 only for home page expand block, remove .homepage form selector for globally change
					if ($('.homepage .expand_block.expanded').length ) {
						$('.homepage .expand_block.expanded').removeClass('expanded')
					};
					// ULINENGM-2710
					var scrollContainer = expand_block.is('.menuize_panel-left .expand_block') ? $('.menuize_panel-left')[0] : undefined;
					var titleOffset = $('.plp').length ? 50 : 0; //ULINENGM-2255

					console.log('titleOffset '+titleOffset)

					// allow only expand block open per group
					if (options.group_collapsing) {
						that.parents('.expand_block_group').eq(0).find('.expand_block.expanded').removeClass('expanded')
					};
					// show expanded content
					expand_block.addClass('expanded')
					//ULINENGM-1654 start collapses expanded searchbox
					if($('.homepage').length && $('.search-box:visible').length){
						$('.search-box').addClass('hide');
						$('.index').removeClass('white');
						$('.homepage').removeClass('search-margins');
					}
					//ULINENGM-1654 end 
					// scroll to the just opened expand block
					if ( ext.scroll ) {
						// DEBUG:
						// console.log('1 '+expand_block.offset().top );
						// console.log('2 '+parseInt( $('.main-header').height()+10+titleOffset ) );
						// console.log('3 '+scrollContainer );
						
						//ULINENGM-3974
						if (!scrollContainer) {
							ext.scroll.to(expand_block.offset().top - ($('.main-header').height()+10+titleOffset), 300, scrollContainer); //ULINENGM-1452 - ULINENGM-2710 - ULINENGM-3974
						}else{
							ext.scroll.to(expand_block.offset().top + ($('.main-header').height()+10+titleOffset) + expand_block.height() , 300, scrollContainer); //ULINENGM-1452 - ULINENGM-2710 - ULINENGM-3974
						}
						//ULINENGM-3974
						//window.scrollTo(0,expand_block.offset().top - ($('.main-header').height()+10+titleOffset))
					}
				}

		})
	})({
		scroll: true,
		group_collapsing: true
	})
});
$(document).ready(function() {
	/**
	 * Auto-submit plugin
	 * Adding .autosubmit will monitor its change event and trigger autosubmission on it.
	 * 
	 * Author: Giovanni Piller Cottrer <giovanni.piller@usablenet.com>
	 *
	 * @data-autosubmit pseudo-CSS selector of the input to be clicked (generally a modifier)
	 * 
	 * @data-autosubmit-destination pseudo-CSS selector for the destination elements.
	 * Enables the AJAX mode of auto-submit. Will be replaced (entirely) with
	 * the content retrieved.
	 *
	 * @data-autosubmit-selector (optional), used with data-autosubmit-destination,
	 * provides additional filter on the retrieved content.
	 * Accepts pseudo-CSS selectors.
	 *
	 * @data-autosubmit-disable pseudo-css selector. Nodes matching these selectors will be
	 * disabled during ajax
	 *
	 * The element selected by @data-autosubmit-destination will be given .async-update,
	 * so that it can be styled properly during AJAX calls.
	 *
	 * @data-autosubmit-callback (optional) callback to be launched after ajax is completed
	 *
	 * @data-autosubmit-error-callback (optional) callback to be launched after ajax failure
	 *
	 * @Changelog
	 * [v1.4, 2-Sep-2014] 
	 * - .unwrap() after wrapping in <div>s
	 * [v1.3, 25-Aug-2014] 
	 * - changed the way to navigate the new DOM after successful ajax.
	 * [v1.2, 5-May-2014] 
	 * - moved to ext namespace. ext.autosubmit.hideSubmit() is the equivalent
	 *	 of AutoSubmitHideSubmit()
	 * [v1.1, 21-Mar-2014]
	 * - accounting for ajax failure. Added error callback.
	 */
	(function( ext, $, undefined ) {
		var EXT_VERSION = '1.4'

		ext.autosubmit = function () {
			var hideSubmit; // ULINENGM-1946

			// hides submit buttons specified in data-autosubmit
			(hideSubmit = function () {
				$('.autosubmit').each(function () {
					var that = $(this)
					that.parents('form').find(that.attr('data-autosubmit')).hide()
				})
			})()

			// bind .autosubmit elements
			$(document).on('change', '.autosubmit', function (e) {
				var that = $(this).addClass('loading')
				var form = that.parents('form')
			
				if (that.attr('data-autosubmit-destination')) {
					var callback = that.attr('data-autosubmit-callback'),
					    error_callback = that.attr('data-autosubmit-error-callback'),
					    disableDuringAJAX = that.attr('data-autosubmit-disable'),
					    destination = that.attr('data-autosubmit-destination'),
					    selector = that.attr('data-autosubmit-selector'),
					    submit = that.parents('form').find(that.attr('data-autosubmit')),
	                    postdata = that.parents('form').serialize()

					// add submit button to the post params (it might be needed server side)
					postdata += '&' + submit.attr('name') + '=' + submit.val()
				
					// disable these elements during ajax
					if (disableDuringAJAX && disableDuringAJAX.length) {
						$(disableDuringAJAX).prop('disabled', true).addClass('disabled')
					}
				
					$(destination).addClass('async-update');
					//ULINENGM-3082
					$('.main-header, footer, .stickyFooter').addClass('async-update');
				
	                $.ajax({
	                    type: 'POST',
	                    data: postdata,
	                    url: that.parents('form').attr('action'),
	                    error: function(data) {
	                    	if (that.find('option').length) {
								that.find('option').each(function() {
			                		if (this.defaultSelected) {
			                			that.get(0).selectedIndex = this.index
			                		}
			                	})
	                    	}
	                    	else {
	                    		that.val(that.get(0).defaultValue)
	                    	}
	                    	that.removeClass('loading')
	                    	$(destination)
								.show()
								.removeClass('async-update')

							// reenable previously disabled elements
							if (disableDuringAJAX && disableDuringAJAX.length) {
								$(disableDuringAJAX).prop('disabled', false).removeClass('disabled')
							}

							// throw the callback
							if (error_callback && error_callback.length > 0) {
								window[error_callback](data)
							}
							else {
								console.error('Unexpected error.\nPlease try again.')
							}
	                    },
	                    success: function (data) {
	                    	var newHTML = $('<div/>').html(data).find(selector)

	                    	that.removeClass('loading');
							$(destination)
								.show()
								.removeClass('async-update')
								.wrap('<div/>')
								.parent()
								.html(newHTML.wrap('<div/>').parent().html())
								.children()
								.unwrap()
							
							//ULINENGM-3082
							$('.main-header, footer, .stickyFooter').removeClass('async-update');
							// keeps the JSE hidden input updated
							form.find('input[name=un_jtt_jse]')
								.val(newHTML.parents('form').find('input[name=un_jtt_jse]').val())
							
							// reenable previously disabled elements after successful ajax
							if (disableDuringAJAX && disableDuringAJAX.length) {
								$(disableDuringAJAX).prop('disabled', false).removeClass('disabled')
							}
						
							// throw the callback
							if (callback && callback.length > 0) {
								window[callback](data)
							} 
						
							hideSubmit()
	                    }
	                });
				}
				else {
					that.parents('form').find(that.attr('data-autosubmit')).click();
				}
			});

			return {
				EXT_VERSION: EXT_VERSION,
				hideSubmit: hideSubmit
			}
		}()
	}( window.ext = window.ext || {}, window.Merci || window.uFX ))
})
/**
 * WARNING.
 * From version 2.0, Panelize *requires* to be instantiated manually
 * (see: ext.panelize.init()).
 * You're now allowed to pass an object containing panel's alternative config
 * and overwrite all the default functions (such as start_callback,
 * hide_callback, and so on..).
 * This has been done to provide an easier way to customize panel's behaviour
 * and allow easier updates to the plugin.
 *
 * Custom adaptations shouldn't require direct's plugin changes anymore.
 **/

/**
 * Panelize
 * @Author Giovanni Piller Cottrer <giovanni.piller@usablenet.com>
 *
 * Easily place html inside a panel (both local or from ajax calls).
 * With this, you can transform a form page-based in a more advanced form inside
 * an overlay.
 * Code implemented for older devices will have increased functionalities in
 * higher end devices.
 *
 * REQUIRED: mobilizr.js >=v1.2
 *
 * The following classes should NOT be styled via CSS. Required only for binding
 * events.
 *
 * MODES:
 * .async - (tracks click & submit events) makes forms/links asynchronous &
 *          opens content in a panel
 * .local - (tracks click events only) will search for html inside the page,
 *          provided with attribute:
 *          data-local-selector=".pseudo-css-selector"
 *
 * HELPERS:
 * .close_panel - clicking on elements with this class will trigger close panel
 * .scrollable - will enable native overflow:scroll, if available.
 *               It's resized based on screen's height - panel_zone(s).
 * .panel_zone - elements whose height should be accounted when having panels
 *               with scrollable content within (overflow:scroll)
 *
 * EVENTS:
 * Panelize offers an array of events to subscribe to, which will let you react
 * to a variety of states:
 *    'panelize-start': Started panelizing. No panel visible.
 *                      No content populated.
 *   'panelize-resize': Triggered for overflow:scroll capable devices only,
 *                      sets .scrollable height.
 * 'panelize-populate': Populates panel content. Checks for redirects
 *                      instrucitons. Device-specific fixes.
 *     'panelize-show': Panel has been displayed.
 *     'panelize-hide': Hide panel.
 *
 * You can subscribe to these events using panelize's .on/.one methods, and
 * unsubscribe using .off().
 * <pre>
 * ext.panelize.on('panelize-show', function (e) { console.log(e) })
 * </pre>
 *
 *
 * @Changelog:
 * [v2.3.2, 22-Jul-2014] 
 * - upgrade to ufx 2.0
 *
 * [v2.3.1, 11-Jul-2014] 
 * - fixes for wp10
 *
 * [v2.3, 12-Jun-2014]
 * - subscribe to panelize event using ext.panelize.on/one/off
 *
 * [v2.2, 10-Jun-2014]
 * - redirect instructions using script#panelizeRedir
 *
 * [v2.1.1, 5-May-2014]
 * - now using ext.mobilizr.[property] for mobilizr check
 *
 * [v2.1, 5-May-2014]
 * - Close panel via JS using ext.panelize.close()
 * - Open a panel with custom content using:
 *	 ext.panelize.show('<h1>Test content</h1>')
 * - Panelize now needs to be manually instantiated on document.ready using
 *	 ext.panelize.init(), which accepts a custom configuration to extend default
 *	 callbacks (see: PanelizeOptions).
 * - Default update_scrollable_area() now accounts for paddings/margins.
 *	 Affects panels with .scrollable and .panel_zone areas.
 *
 * [v2.0]
 * - Panelize's defult config/functions can now be extended and overwritten
 *   without impacting panelize.js directly
 * - Fixes for WP8, IE10 (thanks to Michael Filippo
 *	 <michael.filippo@usablenet.com>)
 *
 **/
$(document).ready(function () {
	(function (ext, $, undefined) {
		var EXT_VERSION = '2.3.2'

		/**
		 * REQUIREMENTS.
		 * Devices features and plugins
		 */
		if (!ext.mobilizr) {
			throw new Error('ext.mobilizr is required by ext.panelize')
		}

		// IE7.5 doesn't support this extension properly
		if (ext.mobilizr.ie75) {
			return;
		}

		/**
		 * Public object
		 */
		ext.panelize = function () {
			// Selectors for general components
			var panelSelector = $('.panel'),
				overlaySelector = $('.overlay')

			// Keep in memory the latest element that triggered panelize
			var panelizedBy


			/**
			 * EVENTS.
			 * Support functions for binding to subscribable events.
			 *
			 * It basically proxies default binding functions, but doing so
			 * we'll be able to adjust it in the future.
			 */
			var eventPrefix = 'panelize-',
				eventBinder = $(window)

			function onEvent(event, callback) {
				eventBinder.on(event, callback)
				return this;
			}

			function oneEvent(event, callback) {
				eventBinder.one(event, callback)
				return this;
			}

			function offEvent(event, callback) {
				eventBinder.off(event, callback)
				return this;
			}

			function throwEvent(event) {
				event.type = eventPrefix + event.type
				eventBinder.trigger(event)
			}

			/**
			 * CONFIG.
			 * Panel configuration and default callbacks
			 */
			var PanelizeOptions = {
				panel_config: {
					scrollable: true,
					overlay: null,
					type: 'top',
					opacityTransition: false,
					propagation: true,
					swipeUp: false

				}
			}

			/**
			 * Panelization started.
			 * Shows overlay, stores triggerer for later identification.
			 */
			PanelizeOptions.start_callback = function (from) {
				panelizedBy = from;
				throwEvent({
					type: 'start',
					panelizedBy: panelizedBy
				})
				overlaySelector.show()
			}


			/**
			 * Panel has been hidden.
			 * Hides overlay.
			 */
			PanelizeOptions.hide_callback = function () {
				throwEvent({
					type: 'hide',
					panelizedBy: panelizedBy
				})
				overlaySelector.hide()
			}


			/**
			 * Last callback for show events.
			 * Panel has been already populated and is being displayed.
			 */
			PanelizeOptions.show_panel_callback = function (data) {
				throwEvent({
					type: 'show',
					panelizedBy: panelizedBy,
					panelizedData: data,
				})
			}


			/**
			 * Triggered during window resize event (or scroll).
			 * Allows for .scrollable to have a proper height to fit viewport size.
			 */
			PanelizeOptions.update_scrollable_area = function (data) {
				// native scroll is required for this
				if (!ext.mobilizr.overflowScroll) {
					return;
				}

				throwEvent({
					type: 'resize',
					panelizedBy: panelizedBy,
					panelizedData: data,
				})

				var zone_heights = 0
					// use .panel_zone to account for elements height not inside .scrollable
				panelSelector.find('.panel_zone').each(function () {
					zone_heights += $(this).height()
					zone_heights += parseInt($(this).css('padding-top'))
					zone_heights += parseInt($(this).css('padding-bottom'))
					zone_heights += parseInt($(this).css('margin-bottom'))
					zone_heights += parseInt($(this).css('padding-bottom'))
					zone_heights += parseInt($(this).css('margin-top'))
				})
				var heights_to_consider = panelSelector.find('.panel-buttons').height() + zone_heights

				// set dimensions for scrollable area
				panelSelector.find('.scrollable').height($.device.screen().height - heights_to_consider)
			}


			/**
			 * Updates content of the panel. Fixes for cross compatibility.
			 */
			PanelizeOptions.update_panel_content = function (data) {
				throwEvent({
					type: 'populate',
					panelizedBy: panelizedBy,
					panelizedData: data,
				})

				// search for redirection instruction, allowing to exit the panelized flow
				var content = $('<div/>').html(data)
				if (content.find('#panelizeRedir').length) {
					window.location.href = content.find('#panelizeRedir').html().trim()
					return;
				}

				// populate panel with HTML
				$('.panel').html(data)

				// Android-fix - on some devices, panel is not appearing for the second time
				if ($.device.isAndroid) {
					window.panel.redraw()
				}

				// show the prepopulated panel
				window.panel.showPanel()

				// allow some bottom spacing
				$('.panel').css('padding-bottom', '10px')

				// throw callbacks
				PanelizeOptions.update_scrollable_area(data)
				PanelizeOptions.show_panel_callback(data)

				// IE-fix - the panel will show on the top of the screen. Just scroll there.
				if (ext.mobilizr.ie && ext.scroll) {
					ext.scroll.to(0, 500)
				}
			}


			/**
			 * CONSTRUCTOR.
			 * Accepts object which will extend default options.
			 */
			function init (o) {
				// extend default options
				PanelizeOptions = $.extend(PanelizeOptions, o ? o : {})

				/**
				 * Setup UFX panel
				 */
				window.panel = $.panel(panelSelector).setup(PanelizeOptions.panel_config)


				/**
				 * If an input is clicked, we must clone it as an hidden input before submitting it
				 * via panelizeForm's event. Otherwise, it won't be included in the network call.
				 */
				function panelizeInputs(e) {
					var self = $(this)
					var tempElement = $("<input type='hidden'/>")

					// clone the important parts of the button used to submit the form.
					tempElement
						.attr("name", this.name)
						.val(self.val())
						.appendTo(self.parents('form'))
				}


				/**
				 * Form submission
				 */
				function panelizeForm(e) {
					that = $(this)
					e.preventDefault()

					var postdata = that.serialize()

					if (window.panel.isPanelVisible()) {
						panelSelector.html('')
					}

					PanelizeOptions.start_callback(that)

					$.ajax({
						type: 'POST',
						data: postdata,
						url: that.attr('action'),
						success: PanelizeOptions.update_panel_content
					})

					return false;
				}

				/**
				 * Panelize links interactions
				 */
				function panelizeLink(e) {
					that = $(this)
					e.preventDefault()

					PanelizeOptions.start_callback(that)

					$.ajax({
						type: 'GET',
						url: that.attr('href'),
						success: PanelizeOptions.update_panel_content
					})

					return false;
				}

				/**
				 * used for .local panelizations
				 */
				function panelizeLocalContent(e) {
					if (e) {
						e.preventDefault()
					}
					that = $(this)

					PanelizeOptions.start_callback(that)

					PanelizeOptions.update_panel_content($(that.attr('data-local-selector')).clone().wrap('<div/>').parent().html())

					return false;
				}

				/**
				 * Allows to show any content in a panel using ext.panelize.show()
				 */
				function panelizeContent(content) {
					PanelizeOptions.start_callback()
					PanelizeOptions.update_panel_content(content)
				}

				/**
				 * Bound to .close_panel and ext.panelize.close()
				 */
				function closeModal(e) {
					if (e) {
						e.preventDefault()
					}

					if ($.device.isIE10) {
						panelSelector.css("visibility", "hidden")
						panelSelector.html('')
					} else {
						window.panel.hidePanel()
					}

					PanelizeOptions.hide_callback()

					return false;
				}

				/**
				 * Fixes WP bug with overlay and clicks on background elements
				 */
				function windowsPhoneFixes() {
					if ($.device.isIE10) {
						overlaySelector.on('click', function (e) {
							e.preventDefault()
							e.stopPropagation()
						})
					}
				}


				/**
				 * Keep the scrollable area's height updated
				 */
				$(window).bind('viewportresize resize scroll', PanelizeOptions.update_scrollable_area)


				/**
				 * Delegating panelize event
				 */
				$("input[type=submit], input[type=button], button", $('form.async'))
					.off('click', panelizeInputs)
					.on('click', panelizeInputs)
				$(document).on('submit', 'form.async', panelizeForm)
				$(document).on('click', 'a.async', panelizeLink)
				$(document).on('click', '.local', panelizeLocalContent)
				$(document).on('click', '.close_panel', closeModal)


				/**
				 * Set up additional public methods
				 */
				ext.panelize.show = panelizeContent
				ext.panelize.close = closeModal


				/**
				 * HTML adjustments post execution
				 */
				PanelizeOptions.update_scrollable_area()
				windowsPhoneFixes()


				return this;
			}


			/**
			 * Return a bunch of public methods.
			 * Note: object will be integrated with more methods after .init()
			 */
			return {
				EXT_VERSION: EXT_VERSION,
				init: init,
				on: onEvent,
				one: oneEvent,
				off: offEvent,
			}
		}()
	}(window.ext = window.ext || {}, window.Merci || window.uFX))
})
/**
 * Localstorage basic helpers
 *
 * Provides basic get/set/remove methods for localstorage
 **/
$(document).ready(function() {
	(function( ext, $, undefined ) {
		var EXT_VERSION = '1.0';
		//ULINENGM-3776
		if (navigator.cookieEnabled) {
			ext.localstorage = function () {
				if (typeof localStorage !== 'object') {
					return false;
				}

				return {
					EXT_VERSION: EXT_VERSION,
					get : function(name) {
			            try {
			                return JSON.parse(localStorage.getItem(name))
			            }
			            catch(e) {
			                return localStorage.getItem(name)
			            }
			        },
			        set : function(key, value) { // key[String], value[Object or String] 
			            if (typeof value === 'function')
			                throw new TypeError('Functions can not be saved');
			            	//ULINENGM-2958 + ULINENGM
			            	localStorage[key] = typeof value === 'object' ? JSON.stringify(value) : value;
			        },
			        remove : function(key) {
			            localStorage.removeItem(key);
			        }
				}
			}();
		};
	}( window.ext = window.ext || {}, window.Merci || window.uFX ));
});
//ULINENGM-4491
$(window).on('load', function () {
	$('.field input.textfield').each(function(){
		var input = $(this),
		field = input.closest('.field'),
		error = field.find('.error');

		if ( input.is("-webkit-autofill") ){
			var placeholder = input.attr('type') == 'password' ? translations.passwordPlaceH : $(this).attr('placeholder');

			if( input.attr('type') != 'password' ){
				input.attr('placeholder','');
			}
			//debugger
			//ULINENGM-3671
			if (!field.hasClass('superscriptField')){
				field.addClass('superscriptField');
				input.before('<label for="'+input.attr('id')+'" class="superscriptLabel">'+placeholder+'</label>'); //ULINENGM-3883
			}
			var left = input.offset().left;
			var label = field.find('label.superscriptLabel');

			if ( !input.parent('.field').length ) {
				label.css('margin-left', left - 10);
				label.css('width', label.width() - left);
			};
		};
	});
})

$(document).ready(function() {

	ext.panelize.init();

	changeDeeplink();

	//ULINENGM-3790
	window.is_keyboard = false;
	window.initialOrientation = window.orientation == 0 ? 'portrait' : 'landscape';
	window.initial_screen_size = $.device.screen().height;
	$(window).on('resize', function () {
		window.newOrientation = window.orientation == 0 ? 'portrait' : 'landscape';
		if ( window.initialOrientation != window.newOrientation )  {
			window.initial_screen_size = $.device.screen().height;
		};

		//console.log('********'+window.innerHeight)
		//console.log('________'+initial_screen_size)
		//alert('isIPhone: '+!$.device.isIPhone)
		//alert('CriOS '+navigator.userAgent.match('CriOS'))
		//alert('GSA: '+navigator.userAgent.match('GSA/'))

		//ULINENGM-4605
		if (is_keyboard) {
			$('.stickyFooter > footer').hide();
		}else{
			$('.stickyFooter > footer').show();
		}

	});

	// window.addEventListener("resize", function() {


	//   is_keyboard = (window.innerHeight < initial_screen_size);
	// }, false);



	// ULINENGM-2631
	$(document).on('keyup','.user-login .userEmail',function(){
		var $registerActions = $('.user-login .register_buttons')
		var l = $(this).val().length
		if(l > 0){
			$registerActions.find('button').removeClass('hide')
			$registerActions.find('a').addClass('hide')
		}else{
			$registerActions.find('a').removeClass('hide')
			$registerActions.find('button').addClass('hide')
		}
	})
	// END ULINENGM-2631

	//ULINENGM-4071
	$(document).on('click', '.quick-order.collapsed', function(event) {
		event.preventDefault();

		var that = $(this),
		selector   = $('.quickOrderContainer'),
		href = selector.find('form').attr('action');

		$('.menuize_panel').addClass('async-update')

		$.ajax({
			url: href+'?fromTo=menu',
			type: 'GET',
			success: function (response) {
				var response = $('<div/>').html( response ).find(selector.selector);
				if (response.length) {

					if (!response.find('.item').length) {
						var cartURL = $('.cart-icon a').attr('href');
						window.location = cartURL;
					}else{
						$('.quickOrderContainer').html( response.html() );
	        	$('.menuize_panel').removeClass('async-update');
					}
	      }else{
	      	$('.menuize_panel').removeClass('async-update');
	      }
			},
			error: function(){
				console.log('Error')
				$('.menuize_panel').removeClass('async-update');
			}
		})

	});

	$(document).on('click', '.hasSubmenu', function(event) {
		event.preventDefault();
		var that = $(this);
		$('.menu_l1').hide();
		$('.menu_l2').removeClass('hide');
		var submenu = $('.menu_l2').find('.submenu_' + that.attr('data-menu'))
		submenu.show().removeClass("hide");
	});

	$(document).on('click', '.menu_back', function(event) {
		event.preventDefault();
		$('.menu_l1').show();
		$('.menu_l2').addClass('hide');
		$('.menu_l2 ul').hide();
	});

	$(document).on('click', '.menu_back_l3', function(event) {
		event.preventDefault();
		$('.menu_l3').addClass('hide');
		$('.menu_l3 ul').hide();
		$('.parentToReshow').show();
		$('.parentToReshow').removeClass('parentToReshow');
	});

	$(document).on('click', '.overlay', function(event) {
		// ULINENGM-1871 + ULINENGM-3025
		event.preventDefault();

		// While clicking on the overlay, if a edit close button is displayed, click it - ULINENGM-4322
		if($('.panel .btn-close-edit').length && $('.panel .btn-close-edit').is('button') && $('.panel .btn-close-edit').attr('name').includes('un_modify'))
			$('.panel .btn-close-edit').trigger('click')
		else if( !$('.myAccount-invoices').length && !$('.co-review').length && !$('.co-pickUp').length && !$('.co-carrier').length && !$('.estimate').length)
			ext.panelize.close()
	});

	$(document).on('click','.user-icon .h-user-guest, .h-user-logged',function(){
		window.scrollTo(0,1);

		//ULINENGM-3847 + ULINENGM-3928 + ULINENGM-3928 + ULINENGM-4049
		setTimeout(function(){
			$('.menuize_main .content_overlay').css( 'height', parseInt( $('body').height() - $('.main-header').height() ) );
			//ULINENGM-4407
			if ( $('#filters').length && $('#filters').hasClass('move') ) {
				var shadowH = parseInt( ( window.screen.height - $('.scrollingFooter').height() - $('.main-header').height()) -  $('.user-login').height() );
				$('.user-login').css( 'box-shadow', '0px '+shadowH+'px rgba(0,0,0,0.5);' );
			};
		},200)

		if($('.search_overlay:visible').length)
			$('.search_overlay').trigger('click')
		if($('.search-box:visible').length )
			$('.search-box:visible').addClass('hide')
		if(ext.menuize.current())
			ext.menuize.hide();
		if($('.homepage.search-margins').length)
			$('.homepage').removeClass('search-margins');
		//ULINENGM-3366
		if ($('#mini-cart').hasClass('move')) {
			$('.cart-icon a').click()
		};
	})

	if($('.user-login .error').length){
		$('.user-login').removeClass('hide');
		$('.user-icon').toggleClass('open');
		$('.user-icon').find('img').toggleClass('hide');
		$('.content_overlay').toggleClass('hide');
		$('.search-icon').removeClass('white')
		$('.search-box ').addClass('hide');
		if($('.homepage.search-margins').length)
			  $('.homepage').removeClass('search-margins');
	}

	$(document).on('click', '.h-user-guest', function(event) {
		event.preventDefault();
		if(document.cookie)
		   $('.user-login').toggleClass('hide');
		//ULINENGM-4183 + ULINENGM-4232
		if ( !is_keyboard ) {
			$('.user-login').css( 'max-height' , $.device.screen().height - $('.main-header').height() - $('.main-footer').height() )
		}
		$(this).find('img').toggleClass('hide');
		$('.user-icon').toggleClass('open');
		$('.content_overlay').toggleClass('hide');
		$('.search-icon').removeClass('white');
		$('.search-box input').val('')
		$('.predictive-results div').remove()
	});

	//ULINENGM-2893
	$(document).on('click', '.h-user-logged', function(event) {
		event.preventDefault();
		window.scrollTo(0,1) //ULINENGM-3276

			var that = $(this),
					href = that.attr('href'),
					selector   = $('.myAccount-flyout');

		//ULINENGM-3641
		var maxH = $.device.screen().height - $('.main-header').height() - $('.main-footer').height();
		$('.user-myaccount').css( 'max-height' , maxH )

		if (!that.hasClass('myAccount-done')) {
			$('main').addClass('async-update');
	    $('.loader-gif').removeClass('hide');

			$.ajax({
				url: 'https://'+document.domain+href,
				type: 'GET',
				success: function (response) {
					//ULINENGM-3506
					var response = $('<div/>').html( response ).find(selector.selector);
					if (response.length) {
						that.addClass('myAccount-done');
		        $('.user-myaccount').html( response.html() );
		        $('main').removeClass('async-update');
		        $('.loader-gif').addClass('hide');
		      }else{
		      	$('main').removeClass('async-update');
	        	$('.loader-gif').addClass('hide');
	        	$('.content_overlay').addClass('hide');
		      }
				},
				error: function(){
					console.log('Error')
					$('main').removeClass('async-update');
	        $('.loader-gif').addClass('hide');
	        $('.content_overlay').addClass('hide');
				},
				complete: function(){
					//ULINENGM-4407
					if ( $('#filters').length && $('#filters').hasClass('move') ) {
						var shadowH = parseInt( ( window.screen.height - $('.scrollingFooter').height() - $('.main-header').height()) -  $('.user-myaccount').height() );
						$('.user-myaccount').css( 'box-shadow', '0px '+shadowH+'px rgba(0,0,0,0.5)' );
					};
				}
			})
		}
		if(document.cookie)
   		$('.user-myaccount').toggleClass('hide');
		$(this).find('img').toggleClass('hide');
		$('.user-icon').toggleClass('open');
		$('.content_overlay').toggleClass('hide');
		$('.search-icon').removeClass('white');
		$('.search-box input').val('')
		$('.predictive-results div').remove();
		if ($('.search-icon').hasClass('index') ) {
			//$('.search-box').addClass('hide');
		}
		$('.search-box').addClass('hide');



	});

	//ULINENGM-3618
	$(document).on('click', '.stickyFooter button, .stickyFooter a', function(event) {
		if ($('.content_overlay').is(':visible')){
			event.preventDefault();
		}
	})

	$(document).on('click', '.content_overlay', function(event) {
		event.preventDefault();
		$('.h-user').trigger('click');
	});

	$(document).on('focus','.search-box input',function(){
		if($('.homepage').length)
			$('.search_overlay').removeClass('hide');
	});

	$(document).on('click', '.search_overlay', function(event) {
		event.preventDefault();
		if($('.homepage').length){
			$('.predictive-results').html("").addClass('hide');
			$('.search_overlay').addClass('hide').css('margin-top','0px')
		}
		else{
			$('.search_overlay').toggleClass('hide');
			$('.search-replacement').toggleClass('hide');
			$('.search-box').toggleClass('hide');
			$('.search-input input').val("").focus().blur();
			$('.predictive-results').html("").addClass('hide');
			$('.favTitle').removeClass('hide');
			$('.quoteTitle').toggleClass('hide')//ULINENGM-2996
			$('.search-icon').removeClass('white')
			ext.scroll.to(0,1)
		}
	});

	$('.page_content').click(function(event){
		if ($('.search_overlay:visible').length)
			event.preventDefault()
	})


	$(document).on('click', '.submenu_AllProducts .category a , .submenu_Productos .category a', function(event) { //ULINENGM-3138
		event.preventDefault();
		var that = $(this);
		that.css("background-image","url('"+H5_images.spinner+"')");
		that.css("background-size","26px");
		var pagePath = that.attr('data-path');
		var thisCategory = that.text();

		var currentGa = that.attr("data-ga");

		that.parents('ul').addClass('parentToReshow');


		$.ajax({
			headers: { 'un_useragent' : $('#stateSite').attr("data-ua") },
			url: WS_url.hubcat+"?site="+$("#stateSite").attr("data-site")+"&state="+$("#stateSite").attr("data-state")+"&path=" + encodeURIComponent(pagePath) + ($('#stateSite').attr("data-currency") ? "&currencyUN="+$('#stateSite').attr("data-currency") : ''), //ULINENGM-3138 && ULINENGM-3562
			type: 'GET',
			dataType: 'json',
			success: function (response) {
				if(response.data.searchGoTo) {
					window.location.href = H5_pages.deepLink + response.data.searchGoTo
				}
				else {
					var categories = response.data.products

					$('.thirdTier .category').remove()

					for(var i in categories) {
						var name = categories[i]["productName"];
						var image = categories[i]["productImg"];
						var link = categories[i]["productLink"];
						//ULINENGM-3138
						if (link.indexOf(MT_domain) > -1) {
							link = link.replace( MT_domain ,'').replace('https://','');
						};
						var uiLink = "<a href='"+H5_pages.deepLink + link+"' data-ga='"+currentGa+" - "+name+"'>"+name+"</a>";
						$('.thirdTier').append('<li class="category">'+uiLink+'</li>');
					}

					var thisCategoryLink = "<a href='#' class='menu_back_l3'>"+thisCategory+"</a>";
					$('.thirdTier .subSelected').html(thisCategoryLink);
					$('.secondTier .category a').removeAttr('style')
					$('.secondTier').hide();
					$('.menu_l3').removeClass('hide')
					$('.thirdTier').show();
					$('.menuize_panel').get(0).scrollTop = 0;
				}
			}
		})
	});


	$(document).on('keypress', '.search-input input', function(event) {
		if((event.which == 13) && ($(this).val().trim().length == 0))
			event.preventDefault();
	});


	var resizeEvent = $.device.isIPhone ? $.device.resizeEvent : '';
	function minHeight() {
		var minHeight = window.innerHeight // ULINENGM-3245
		var footerHeight = 122;

		//console.log("start: " + minHeight)
		if($('.main-footer').length && !$('.menuize_main  .main-footer').length){
			minHeight -= 55; //ULINENGM-3406 + 	ULINENGM-2436
		}
		//DEBUGS
		//console.log('menuize_main '+$('.menuize_main').height() );
		//console.log('height '+$.device.screen().height)
		//console.log('footerHeight '+footerHeight)

		//ULINENGM-3778 + ULINENGM-3833 + ULINENGM-4118
		if (!is_keyboard) {
		    if ( $('.menuize_main').height() <= parseInt( $.device.screen().height - footerHeight) ) {
		    	$('.stickyFooter').css({position : 'absolute'});
		    	$('.stickyFooter .main-footer').removeClass('hide');
		    	//ULINENGM-3823
		    	if ( $('.cart').length && $('.stickyFooter button').length ) {
		    		$('.stickyFooter').css('bottom' ,  -56 );
		    	};
		    	minHeight -= $('.scrollingFooter').height();
		    }else{
		    	$('.stickyFooter').css({position : 'fixed'});
		    	$('.stickyFooter .main-footer').addClass('hide'); //ULINENGM-4107
		    }
		};

		//ULINENGM-2510 ULINENGM-3242
		/* if($('.cart').length && $('.stickyFooter').length){
			minHeight -= $('.stickyFooter').height()
		}*/

		//ULINENGM-4175
		// if($('.invoiceNav').length){
		// 	minHeight -= $('.invoiceNav').height()
		// 	console.log("-invoiceNav " + minHeight)
		// }

		if ($('.stickyFooter .breadcrumbs').length) {
			minHeight -= $('.stickyFooter .breadcrumbs').height()
		};

		/* ULINENGM-3315 */
		if ($('.userExistBtn').length) {
			minHeight -= $('.userExistBtn').parent().height()
		};

		//remved with ULINENGM-3617
		//if($('.stickyFooter .qtyAddToCart').length){
		//	minHeight -= $('.stickyFooter .qtyAddToCart').height()
		//	console.log("-buttons " + minHeight)
		//}

		/* ULINENGM-3183 */
		/*if ($('.myAccount-myQuotes').length) {
			minHeight -= ( $('footer').not('.main-footer').height() + $('.stickyFooter .stickyFooter').height() )
			console.log("-cose che non so " + minHeight)
		};*/
		if (window.innerHeight > document.body.clientHeight) {
			//console.log('NAVIGATION BAR IS PRESENT'+ parseInt( window.innerHeight - document.body.clientHeight ))
			//minHeight += parseInt( window.innerHeight - document.body.clientHeight )
		};

		//console.log('minHeight debug: '+minHeight)
		$('.menuize_main').css('min-height', minHeight + 'px');
	}

	/* ULINENGM newfooter */
	// if ($('.main-footer').length) {
	//   $(window).on('load ajaxSuccess', function () {
	//   		minHeight()
	//   });
	// }

	//check if breadcrumbs are inside pages
	// if ($('.page_content > article + footer .breadcrumbs').length) {
	// 	$(window).on('load ajaxSuccess', function () {
	//     $('.page_content article').css('min-height', parseInt ($('.page_content').css('min-height')) - $('.page_content > article + footer').height() );
	//   });
	// };

	if ($('.stickyFooter').length) {
		$(window).on('load ajaxSuccess resize', function () {
			//ULINENGM-4005
			//console.log('is_keyboard '+is_keyboard)

			minHeight();
			$('body').css( 'min-height' , window.innerHeight )
						//ULINENGM-3774
			if ($('#add_to_basket_overlay').is(':visible'))
				setTimeout(function(){
					addPanelPosition();
				},400)
		})
	}

	//ULINENGM-4066 - ULINENGM-4254
	$(document).on('click','.expandSearch, .toggleMoreDetails', function(e){

		var that = $(this)

		minHeight();

		// Launch resize event to make minHeight() function calculate everything as it expects
		$(window).trigger('resize')
	})

	/* ULINENGM newfooter end */

	// keep the footer near the bottom of the page ULINENGM-2436
	/* ULINENGM oldfooter
	if ($('.main-footer').length) {
	  $(window).on('load ajaxSuccess ' + $.device.resizeEvent, function () {
	  	var minHeight = $.device.screen().height - $('.main-header').height() - $('.main-footer').height() - 10 // ULINENGM-3245

	  	/*SHOULD BE DONE IN ALL PAGES WITH STICKY FOOTER*\/ /*ULINENGM-2628*\/
	    if(( $('.myAccount-invoiceDetails').length ) && $('.stickyFooter .stickyFooter').length){
	    	minHeight -= $('.stickyFooter .stickyFooter').height()
	    	$('.main-footer').css('margin-bottom', $('.stickyFooter .stickyFooter').height() + 'px')
	    }
	    //ULINENGM-2510 ULINENGM-3242
	   /* if($('.cart').length && $('.stickyFooter').length){
	    	minHeight -= $('.stickyFooter').height()
	    }*\/

	    if ($('.myAccount-myQuotes').length) {
	    	minHeight -= ( $('footer').not('.main-footer').height() + $('.stickyFooter .stickyFooter').height() )
	    };

	    $('.page_content').css('min-height', minHeight + 'px');
	  });
	}

	//check if breadcrumbs are inside pages
	if ($('.page_content > article + footer .breadcrumbs').length) {
		$(window).on('load ajaxSuccess ' + $.device.resizeEvent, function () {
	    $('.page_content article').css('min-height', parseInt ($('.page_content').css('min-height')) - $('.page_content > article + footer').height() );
	  });
	};
	 ULINENGM oldfooter end */


	var predictiveCall = [];

	// ULINENGM-2657
	$(document).on('paste', '.search-input input', function(){
		setTimeout(function(){
			$('.search-input input').trigger('keyup')
		},200)
	})

	$(document).on('keyup', '.search-input input', function() {
		var value = $(this).val();
		if(value.trim().length > 0){
			$('.search-button button').removeAttr('disabled');
		}
		else
			$('.search-button button').attr('disabled','disabled');
		if(value.trim().length == 0)
			$('.predictive-results').removeClass('hide')
		if(value.length >= 2) {
			predictiveCall.push(
				$.ajax({
					headers: { 'un_useragent' : $('#stateSite').attr("data-ua") },
					url: WS_url.predictiveSearch+"?predictiveTerm="+value+"&state="+$('#stateSite').attr("data-state")+"&site="+$('#stateSite').attr("data-site") + ($('#stateSite').attr("data-currency") ? "&currencyUN="+$('#stateSite').attr("data-currency") : ''), //ULINENGM-3562
					type: 'GET',
					dataType: 'html',
					beforeSend: function(){
						for( i in predictiveCall ){
							predictiveCall[i].abort();
						}
					},
					success: function (response) {
						$('.predictive-results').html(response)
						boldResults(value, value.length);
						$('.predictive-results').removeClass('hide')
						// ULINENGM-4458
						if($.device.isChrome)
							$('.predictive-results').height($.device.screen().height - $('.search-box' ).height() - $('.main-header > ul').height())
					}
				})
			)
		}
		else {
			removeResults();
			$('.search_overlay').css("margin-top","102px");
		}
	});
	/*var system = navigator.userAgent;
	var androidversion = parseFloat(system.slice(system.indexOf("Android")+8))
	//alert(androidversion)
	if(androidversion>=5){
		setInterval(function(){
			console.error("ma come ti viene in mente")
			if($(".search-input input").val() == 0)
				$('.predictive-results').addClass('hide')
		},1)
	}*/

	$(document).on('click', '.predictive-results div', function(event) {
		event.preventDefault();
		var value = $(this).text().trim();
		$('.search-input input').val(value);
		removeResults();
		$('.search-button button').trigger('click');
	});

	$(document).on('focus','.user-login input[type=password]',function(){
		$('#radio2').trigger('click')
	})

	function removeResults() {
		$('.predictive-results').html("") // ULINENGM-2577
		$('.predictive-results').addClass('hide')
	}

	function boldResults(s, l) {
		$('.predictive-results div').each(function(){
			var str = $(this).text().trim();

			var regex = new RegExp(s,'gi'), result, indices = [];
			while (result = regex.exec(str))
				indices.push(result.index);

			for(var i=indices.length-1; i>=0; i--) {
				var toReplace = str.substring(indices[i],indices[i]+l);
				var pred = str.substring(0,indices[i]);
				var succ = str.substring(indices[i]+l,str.length)
				str = pred + "<b>"+toReplace+"</b>" + succ;
			}

			$(this).html(str)
		})
	}

	// ULINENGM-2573
	$(document).on('click', '.forgotPswLink', function(e) {
		e.preventDefault()
		var val = $('.login .tag-email').length ? $('.login .tag-email input').eq(0).val() : $('.userEmail').val()
		window.location.href = $(this).attr("href") + "?email=" + val //ULINENGM-2643
	});

	$(document).on('click', '.search-icon a', function(event) {

		if(!$(this).parent().hasClass('index'))
			ext.scroll.to(0,1)

		if($('.predictive-results').length)
			$('.predictive-results').toggleClass('hide')

		//ULINENGM-3366
		if ($('#mini-cart').hasClass('move')) {
			$('.cart-icon a').click()
		};

		event.preventDefault();

		if($('.user-login:visible').length)
			$('.content_overlay').trigger('click')

		if(ext.menuize.current())
			ext.menuize.hide();

		//ULINENGM-3624 start
		if(!$('.search-icon.index').length) {
			$('.search-icon').toggleClass('white');
			toggleSearchBox()
		}

		if($('.search-icon.index').length){
			$('.homepage').toggleClass('search-margins');
			$('.search-icon').toggleClass('white')
			$('.search-replacement').toggleClass('hide');
			$('.search-box').toggleClass('hide');
			$('.search-box input').focus();
			if($('.search-box:hidden').length)
				$('.search_overlay').addClass('hide')
			if($('.search-icon.index.white').length)
				$('.search-box').removeClass('hide')
		}
		//ULINENGM-3381
		if ( $('.user-myaccount').is(':visible') ) {
			$('.user-icon').removeClass('open');
			$('.user-myaccount').addClass('hide');
			$('.h-user-logged img:first').removeClass('hide');
			$('.h-user-logged img:last').addClass('hide');
			$('.content_overlay').addClass('hide');
		};

		if ($('.user-login').is(':visible')) {
			$('.user-icon').removeClass('open');
			$('.user-login').addClass('hide');
			$('.h-user-guest img:first').removeClass('hide');
			$('.h-user-guest img:last').addClass('hide');
			$('.content_overlay').addClass('hide');

		};
		//ULINENGM-3624 end

	});

	// ULINENGM-2547
	$(document).on('click','.toggleSigninFlyout',function(e){
		e.preventDefault();
		ext.menuize.hide();
		$('.user-icon a').trigger('click')
	})


	$(document).on('click','.menuize_show-left',function(){
		//ULINENGM-4253
		openCloseMenuCart()
	})

	function toggleSearchBox() {
		$('.search-replacement').toggleClass('hide');
		$('.search-box').toggleClass('hide');
		$('.search-box input').focus();
		$('.search_overlay').toggleClass('hide');
	}

	$(document).on('click', '.cart-icon a', function(event) {
		if(!$('article.cart').length){/*ULINENGM-2556*/
			event.preventDefault();
			if(ext.menuize.current())	// ULINENGM-2624
				ext.menuize.hide();

			if(!$(this).find('span').length){
				var domain = window.location.href.split("/h5/")[0]
				window.location.href = $(this).attr("href")
			}
			else {
				$('.search-box').addClass('hide');

				//ULINENGM-3663
				if ($('.user-myaccount').is(':visible'))
					$('.h-user-logged').click();
				if ($('.user-login').is(':visible'))
					$('.h-user-guest').click();

				//ULINENGM-4051
				if( !$('.cart-icon').hasClass('white') )
					miniCart()

				if($('.homepage.search-margins').length)
					$('.homepage').removeClass('search-margins');
				$('.search-icon').removeClass('white');
				$('.search_overlay').addClass('hide');
				$('#mini-cart').toggleClass('move');
				$('#mini-cart-overlay').toggleClass('move');
				$('#mini-cart-actions').toggleClass('move');// ULINENGM-2616
				//ULINENGM-4051 not necessary
				//if($('#mini-cart .items .mini-cart-product').length == 0)
				//miniCart();
				$('.cart-icon').toggleClass('white') // ULINENGM-2556
				$('.menuize_main').toggleClass('no-move')// ULINENGM-2556
			}
		}
	})

	$(document).on('click','#mini-cart-overlay',function(){
		$('.cart-icon a').click()//ULINENGM-2556
	})

	// ULINENGM-2556
	$(document).on('click','#mini-cart .checkout',function(e){
		e.preventDefault();
		$.ajax({
			url: WS_url.minicart+"?state="+$('#stateSite').data("state")+"&site="+$('#stateSite').data("site")+"&un_jtt_jse="+$(this).data("jse")+"&checkout=true" + ($('#stateSite').data("currency") != "" ? "&currencyUN="+$('#stateSite').data("currency") : ""), //ULINENGM-3562
			type: 'GET',
			success: function (response) {
				var data = response.data
				if(data.goTo) {
					var domain = window.location.href.split("/h5/")[0]
					window.location.href = domain + '/h5/r/' + MT_domain + data.goTo
				}
			}
		})
	})

	function miniCart() {
		var model = $('#mini-cart .model');

		$.ajax({
			url: WS_url.minicart+"?state="+$('#stateSite').data("state")+"&site="+$('#stateSite').data("site") + ($('#stateSite').data("currency") != "" ? "&currencyUN="+$('#stateSite').data("currency") : ""), //ULINENGM-3562
			type: 'GET',
			success: function (response) {
				var data = response.data
				var items = data.items
				var subTotal = data.subTotal

				$('#mini-cart h2 .green').html(subTotal.price)
				//ULINENGM-4051 prevent double items on miniCart
				if($('#mini-cart .items').length)
					$('#mini-cart .items').html('');

				for(i=0; i<items.length; i++) {
					var current = items[i]
					var cartItem = model.clone()
					cartItem.removeClass("model")
					// ULINENGM-3044
					if(current.path)
						cartItem.attr("href", '/h5/r/' + MT_domain + current.path)
					else
						cartItem.attr('href',"javascript:void(0)")
					cartItem.find('img').attr("src", current.img)
					cartItem.find('.sku').html(current.productCode)
					cartItem.find('.name').html(current.description)
					cartItem.find('.qty').html(current.qty)
					cartItem.find('.price span').html(current.price)
					$('#mini-cart .items').append(cartItem)
				}

				$('#mini-cart .checkout').attr("data-jse",response.un_jtt_jse)
				// ULINENGM-4266, update qty value
				$('.cart-icon').find('span').html(items.length);
			}
		})
	}
	// end ULINENGM-2556

	// Hide an html class if help panel is diplayed - ULINENGM-2641
	ext.panelize.on('panelize-show', function (e) {

		var panelized_by = $(e.panelizedBy)

		if(panelized_by && panelized_by.data('local-selector') == '#help_panel')
			$('html').addClass('help_panel-displayed')

	})

	// Clean previously set class - ULINENGM-2641
	ext.panelize.on('panelize-hide', function (e) {
		$('html').removeClass('help_panel-displayed')
	})

	//ULINENGM-2775
	//checkForm()
	//$(document).on('input','.field input.textfield', function(){ checkInput($(this)) })
	//$(document).on('change','.superscript .field select', function(){ checkInput($(this)) })

	$(window).on('load ajaxSuccess resize', function () {
		checkForm();
		executeScrolling();
		//ULINENGM-4183
		if ( $('.user-myaccount').is(':visible') )
			$('.user-myaccount').css( 'max-height' , $.device.screen().height - $('.main-header').height() - $('.main-footer').height() )
		//ULINENGM-4232
		if ( $('.user-login').is(':visible') && !is_keyboard )
			$('.user-login').css( 'max-height' , $.device.screen().height - $('.main-header').height() - $('.main-footer').height() )

		if ($('.menuize_main .content_overlay').is(':visible'))
			$('.menuize_main .content_overlay').css( 'height', parseInt( $('body').height() - $('.main-header').height() ) );
		//ULINENGM-3774
		if ($('.menuize_main #add_to_basket_overlay').is(':visible'))
			$('.menuize_main #add_to_basket_overlay').css( 'height', parseInt( $('body').height() ) );

		//ULINENGM-4492
		if ( is_keyboard && $('.user-login').is(':visible') ) {
			$('.user-login').css( 'max-height', window.innerHeight - 40 );
			$('.user-login').css( 'overflow', 'scroll' );
		};

	});

	/*$(document).on('touchmove',function(e){
		if((window.scrollY + $(window).height()) > $(document).height())
			e.preventDefault();
	})*/

	//ULINENGM-3523
	$(document).on('change','.field select', function(){
		var label = $(this).prevAll('label'),
				option = $(this).find('option:selected');

		superLabelDropdown( option, label )
	})

	//ULINENGM-3952
	$(document).on('focus','input.textfield', function(){
		var inputOffset = $(this).offset().top
		if($.device.isAndroid){
			setTimeout(function(){
        //ULINENGM-4232
		if ( !$('.user-login').is(':visible') ){
      		window.scrollTo(window.scrollY,parseInt(inputOffset - $('.main-header').height() - 80 ) )
      	}
    	},300)
		}
	})

	$('.field select').each(function(){
		var label = $(this).prevAll('label'),
			  option = $(this).find('option:selected');

		superLabelDropdown( option, label )
	})

	//start ULINENGM-2488 + ULINENGM-3541
	$(document).on('focus','.field input.textfield', function(){
		var input = $(this),
				field = input.closest('.field'), //ULINENGM-4259
				error = field.find('.error');

		if (input.attr('placeholder').trim()!='') {
			var placeholder = input.attr('type') == 'password' ? translations.passwordPlaceH : $(this).attr('placeholder');

				if( input.attr('type') != 'password' ){
					input.attr('placeholder','');
				}
				//debugger
				//ULINENGM-3671
				if (!field.hasClass('superscriptField')){
					field.addClass('superscriptField');
					input.before('<label for="'+input.attr('id')+'" class="superscriptLabel">'+placeholder+'</label>'); //ULINENGM-3883
				}
				var left = input.offset().left;
				var label = field.find('label.superscriptLabel');

				if ( !input.parent('.field').length ) {
					label.css('margin-left', left - 10);
					label.css('width', label.width() - left);
				};
		};
	})

	//ULINENGM-4491
	$(document).on('change','.field input.textfield', function(){
		var input = $(this),
				field = input.closest('.field'),
				error = field.find('.error');

		if (input.val()!='' && input.attr('placeholder').trim()!='') {
			var placeholder = input.attr('type') == 'password' ? translations.passwordPlaceH : $(this).attr('placeholder');

				if( input.attr('type') != 'password' ){
					input.attr('placeholder','');
				}
				//debugger
				//ULINENGM-3671
				if (!field.hasClass('superscriptField')){
					field.addClass('superscriptField');
					input.before('<label for="'+input.attr('id')+'" class="superscriptLabel">'+placeholder+'</label>'); //ULINENGM-3883
				}
				var left = input.offset().left;
				var label = field.find('label.superscriptLabel');

				if ( !input.parent('.field').length ) {
					label.css('margin-left', left - 10);
					label.css('width', label.width() - left);
				};
		};
	})


	//ULINENGM-3790 need for put stycky button above the keyboard + ULINENGM-4005 + ULINENGM-4082
	if ($('.catalog_request').length || $('.registrationNormalUser').length || $('.co-addAddressNewAccount').length ) {
		$(document).on('focus', 'input.textfield', function(event) {
		  event.preventDefault();
		  setTimeout( function(){
		    $('.stickyFooter').css({position : 'fixed'});
		    if ( !$('.stickyFooter .main-footer').hasClass('hide') && !$('.emptyCart').length ) //ULINENGM-3927
		      $('.stickyFooter .main-footer').addClass('hide');
		  },1000)
		});
	};


	$(document).on('blur','.superscriptField input.textfield', function(){
		var input = $(this),
				field = input.closest('.field'), //ULINENGM-4259
				label = field.find('label.superscriptLabel'),
				placeholder = input.attr('type') == 'password' ? translations.passwordPlaceH : $(this).attr('placeholder');

		if (field.hasClass('superscriptField') && input.val() == '') {
			field.removeClass('superscriptField');
			if( input.attr('type') != 'password' ){
				input.attr('placeholder', label.text() )
			}
			//ULINENGM-4119 - ULINENGM-4335
			if(label.length == 1)
				label.eq(0).remove();
			else
				label.remove()
		};
	})
})

//ULINENGM-2775
// function checkForm(){ //LAUNCH THIS FUNCTION ON LOAD AND AJAX SUCCESS IF NEEDED
// 	$('.superscript').each(function(){
// 		var inputs = $(this).find('.field select, .field input.textfield')
// 		inputs.each(function(){
// 			checkInput($(this))
// 		})
// 	})
// }
// function checkInput(input){
// 	if(!input.parents('.no-superscript').length){ //NO-SUPERSCRIPT CLASS IN A CONTAINER TO AVOID THIS CHECK
// 		var label = null
// 		if(input.prev('label').length){
// 			label = input.prev('label')
// 		}
// 		if(input.val() && input.val() != ''){
// 			label.show()
// 		} else {
// 			label.hide()
// 		}
// 	}
// }

//ULINENGM-3523
function superLabelDropdown( option, label ) {
	//ULINENGM-3284
	if ( $(option).length && $(label).length ) {
		var trimOpt = option.text().replace(/[.,:;]/g,'').replace(/\s/g, ''),
				trimLabel = label.text().replace(/[.,:;]/g,'').replace(/\s/g, '');
		if ( trimOpt == trimLabel ) {
			label.addClass('hide');
		}else{
			label.removeClass('hide');
		}
	};
}

function checkForm(){
	$('.field input.textfield').each(function(){
		var inputs = $(this);
			//ULINENGM-4030
			if ($(this).val()!='' && $(this).attr('placeholder').trim()!='') {
					var input = $(this),
							field = input.closest('.field'), //ULINENGM-4259
							error = field.find('.error');

				if (input.attr('placeholder').trim()!='') {
					//ULINENGM-3671
					var placeholder = input.attr('type') == 'password' ? translations.passwordPlaceH : $(this).attr('placeholder');

						if( input.attr('type') != 'password' ){
							input.attr('placeholder','');
						}
						field.addClass('superscriptField');
						input.before('<label for="'+input.attr('id')+'" class="superscriptLabel">'+placeholder+'</label>'); //ULINENGM-3883

						var left = input.offset().left;
						var label = field.find('label.superscriptLabel');

						if ( !input.parent('.field').length ) {
							label.css('margin-left' , left-10 );
							label.css('width' , label.width() -  left );
						};
			};
		};
	})
}
//ULINENGM-2488 end

/* ULINENGM-2247 + ULINENGM-4444 */
function changeDeeplink() {
	$('main a[href^="r/na"], main a[href^="r/sa"], .user-login a[href^="r/sa"]').each(function(){
		var that = $(this);
		that.attr('href', that.attr('href').replace('r/na', '/h5/r/' + MT_domain) )
		that.attr('href', that.attr('href').replace('r/sa', '/h5/r/' + MT_domain) )
	})
}

//ULINENGM-3774
function isLandscape() {
  return (window.orientation === 90 || window.orientation === -90);
}

// ULINENGM-2614 + ULINENGM-3834
function addPanel(e, button){
	e.preventDefault()
	var data = button.closest('form').serialize() + '&addButton=' + button.val()
	//ULINENGM-3554
	var prodId = button.closest('li').find('.prodId').text().match(/.+-[a-zA-Z0-9\/]+/,'')[0].trim();
	var cartProdId = 'prodId_' + prodId;

	//ULINENGM-4185
	//$('#add_to_basket_overlay').css('display','block')
	$('main').addClass('async-update');
	$('.loader-gif').removeClass('hide');
	$.ajax({
		url: button.closest('form').attr('action'), //ULINENGM-3563
		data: data,
		type: 'POST',
		success: function(data){
			//ext.scroll.to(0,0) ULINENGM-3526
			$('main').removeClass('async-update');
			$('.loader-gif').addClass('hide');

			var $content = $('<div/>').html(data)
			var current = $content.find('[id="'+cartProdId+'"]')

			if($content.find('div.error')[0]){
				//ULINENGM-3507
				var jseVal = $content.find('article input[name="un_jtt_jse"]');
				window.location = $('.cart-icon a').attr('href')+'?un_jtt_jse='+jseVal.attr('value');
			}else{
				var cartItem = $('#add_to_basket_cont');
				//ULINENGM-2892
				var countCart = $content.find('.cart-item').text();
				$('#add_to_basket_overlay').css('display','block') //ULINENGM-4540

				if ($('.cart-icon span').length) {
					$('.cart-icon span').text(countCart);
				}else{
					$('.cart-icon a').append('<span>'+countCart+'</span>')
				}

				cartItem.find('.added-prd-link').attr('href',current.find('.prd-image a').attr('href'))
				cartItem.find('.added-prd-image img').attr("src", current.find('.prd-image img').attr('src'))
				cartItem.find('.sku').html(current.find('.model-number').text().trim())
				cartItem.find('.name').html(current.find('.model-description').text().trim())
				cartItem.find('.qty span').html(current.find('.qty').val()) // ULINENGM-2762
				cartItem.find('.price').html(current.find('.model-price').text().trim())
				cartItem.find('.totalPrice').html(current.find('.model-totalPrice').html())

				var checkoutForm = $content.find('.stickyFooter form')
				cartItem.find('form').attr('action',checkoutForm.attr('action'))
				cartItem.find('form').append(checkoutForm.find('input[name="un_jtt_jse"]').clone())
				//ULINENGM-3774
				setTimeout(function(){
					addPanelPosition();
				},400)
			}
		}
	})
}

//ULINENGM-3774 start
function addPanelPosition(){
	$('#add_to_basket_cont').css('width',$.device.screen().width - 40 + 'px')
	//$('#add_to_basket_overlay').css('display','block')
	$('#add_to_basket_cont').css('display','block')
	var leftPos = ($.device.screen().width / 2) - ($('#add_to_basket_cont').width() / 2)
	$('#add_to_basket_cont').css('left',leftPos);
	$('#add_to_basket_cont').css('max-height', '100%;' ); //ULINENGM-4470
	if ( isLandscape() ) {
		$('.plp-title').addClass('hide');
		$('#add_to_basket_cont').css('top', $(window).scrollTop() + $('.main-header').height() + 35 ) //ULINENGM-3526 + ULINENGM-3677 + ULINENGM-3768
		$('#add_to_basket_cont').css('max-height', $.device.screen().height - parseInt( $('.main-header').height() + 54 + $('.added-prd-buttons').height()) );
		// console.log( 'max-height '+ $.device.screen().height - parseInt( $('.main-header').height() + $('.main-footer').height() + $('.added-prd-buttons').height()) )
		// console.log( 'screen '+ $.device.screen().height )
		// console.log('1'+$('.main-header').height())
		// console.log('2'+$('.main-footer').height())
		// console.log('3'+$('.added-prd-buttons').height())
	}else{
		$('#add_to_basket_cont').css('top', $(window).scrollTop() + 150 ) //ULINENGM-3526 + ULINENGM-3677 + ULINENGM-3768
	}
}
//ULINENGM-3774 end

function closeAddPanel(){
	$('#add_to_basket_overlay').css('display','none');
	$('#add_to_basket_cont').css('display','none');
}

function modifyCartPreview(e){
	// ULINENGM-2614
	var $input = $('input#showPanel')
	var checkValue = 'true'
	if($input.length && $input.prop('checked')) checkValue = 'false' // BEFORE CLICK STATE

	var data = "?site="+$("#stateSite").attr("data-site") + "&state="+$("#stateSite").attr("data-state")+"&modifyPreviewCart=" + checkValue + "&un_jtt_jse=" + $('#add_to_basket_cont input[name="un_jtt_jse"]').val() + ($('#stateSite').attr("data-currency") ? "&currencyUN="+$('#stateSite').attr("data-currency") : '') //ULINENGM-3505
	$.ajax({
		url: WS_url.hubcat+data,
		type: 'GET',
		dataType: 'json',
		success: function (response) {
			//ULINENGM-3534
			$('button[name="addButton"], button[name="addToCart"]').each(function(){
				if($(this).hasClass('addAjax')){
					$(this).removeClass('addAjax')
				}else{
					$(this).addClass('addAjax')
				}
			})
		}
	})
}

function updateAddPanelPos(){
	$('#add_to_basket_cont').css('width','90%') //ULINENGM-3491
	var leftPos = ($.device.screen().width / 2) - ($('#add_to_basket_cont').width() / 2)
	$('#add_to_basket_cont').css('left',leftPos)

}

// ULINENGM-3237 ULINENGM-3221 ULINENGM-4107

var fullScroll = 0, originalStyle;

// ULINENGM-3239 ULINENGM-3242 + ULINENGM-3778
var scrollingElements = function () {
	if($('.scrollingFooter').length && !( $('#filters').length && $('#filters').hasClass('move') )) {
		var offset = $('.scrollingFooter').position().top;

		//DEBUGS:
		// console.log( '--->' + parseInt( window.scrollY + $(window).height() + 10 ) )
		// console.log( '<---' + parseInt( $(".menuize_main").height() + padding ) )
		// console.log('padding '+padding)
		// console.log( 'innerHeight '+window.innerHeight )
		// console.log( 'document clientHeight '+document.body.clientHeight )
		// console.log( 'window height '+$(window).height() )

		if ( !is_keyboard && !$('.emptyCart').length ) { //ULINENGM-3790 + ULINENGM-3927
			if(window.scrollY + $(window).height() + 10 >= ($(".menuize_main").height() + padding )) {
				$('.stickyFooter .main-footer').removeClass('hide');
				if ($('.stickyFooter').css('position') != 'absolute')
					$('.stickyFooter').css({position : 'inherit'});
				$('body').css( 'padding-bottom' , 0 );
				/*$('.menuize_main').removeAttr('style') ULINENGM-oldfooter */
			}else {
				if (window.scrollY >= 0) {
					$('.stickyFooter .main-footer').addClass('hide');
					$('.stickyFooter').css({position : 'fixed'});

				};
				$('body').css( 'padding-bottom' , padding*2 ); //need to add padding also for show main-footer ULINENGM-3778
			}
		}else if( $('.emptyCart').length ){ //ULINENGM-3927
			if (is_keyboard){
				$('.stickyFooter').css({position : 'inherit'});
				//$('.stickyFooter .main-footer').addClass('hide'); //ULINENGM-3927 + ULINENGM-4158
			}else{
				$('.stickyFooter').css({position : 'fixed'});
				$('.stickyFooter .main-footer').removeClass('hide'); //ULINENGM-3927
			}
		}else{
			//ULINENGM-3774 + ULINENGM-4118
			if (!isLandscape() && !is_keyboard) {
				$('body').css( 'padding-bottom' , 66 ); //fixed button height ULINENGM-3790
			}else{
				//$('body').css( 'padding-bottom' , 0 ); ULINENGM-4353
			}
			//ULINENGM-4005
			if (is_keyboard){
				// $('.stickyFooter').css({position : 'inherit'}); // ULINENGM-4285
				$('.stickyFooter .main-footer').removeClass('hide'); //ULINENGM-4118
			}
			//else{ ULINENGM-4397
			//	$('.stickyFooter').css({position : 'fixed'});
			//}
		}
	}
}
var padding;
//ULINENGM-4107
var executeScrolling = function(){
	if($('.scrollingFooter').length){
		//ULINENGM-4175
		var diff = parseInt( window.scrollY + $(window).height() + 10 ) - parseInt( $(".menuize_main").height() + $('.scrollingFooter').height() - $('.scrollingFooter .main-footer').height() );
		var bigFooter = $('.myAccount-invoiceDetails').length ? diff : 0;
		padding = $('.scrollingFooter').height() - $('.scrollingFooter .main-footer').height() + bigFooter+1;
	}else{
		padding = 0;
	}
	$(window).on('scroll resize', scrollingElements);
	setTimeout(scrollingElements, 600);
}

function getCookie(name){
	var pattern = RegExp(name + "=.[^;]*")
		matched = document.cookie.match(pattern)
	if(matched){
		var cookie = matched[0].split('=')
		return cookie[1]
	}
	return false
}
//ULINENGM-4253
var openCloseMenuCart = function(){
	$('#mini-cart-overlay').removeClass('move')	// ULINENGM-2624
	$('#mini-cart-actions').removeClass('move') //ULINENGM-2556
	$('.cart-icon').removeClass('white')
	$('.menuize_main').removeClass('no-move')

	if($('.menuize_opened').length && $('.search-icon').hasClass('white')){
	   $('.search-icon').removeClass('white')
	   $('.search_overlay').addClass('hide');
	   $('.search-box').addClass('hide');
	   if($('.homepage').length)
		  $('.homepage').toggleClass('search-margins');

		$('.search_overlay').addClass('hide').css('margin-top','0px')
	}
	if($('.menuize_opened').length && $('.h-user-guest').parent().hasClass('open')){
		$('.content_overlay').addClass('hide')
		$('.user-icon').removeClass('open')
		$('.user-login').addClass('hide')
		$('.search-box').addClass('hide');
		$('.h-user-guest img').toggleClass('hide');
		if($('.homepage.search-margins').length)
		  $('.homepage').removeClass('search-margins');

	}
	//ULINENGM-4451
	if ($('.h-user-logged').parent().hasClass('open')) {
		$('.user-myaccount').addClass('hide');
		$('.content_overlay').addClass('hide');
		$('.h-user-logged img').toggleClass('hide');
		$('.user-icon').removeClass('open')
		$('.user-login').addClass('hide')
	};

	$('.search-box input').val('')
	$('.predictive-results div').remove()
	$('#mini-cart').removeClass('move');
}

// ULINENGM-3237 ULINENGM-3221 end
// ULINENGM-2253

$(document).ready(function() {

	$('#quickOrder').addClass('collapsed');
	$('.quickorderSection button[value="addRow"]').removeClass('btn-async');

	//ULINENGM-2630
	$(document).on('click', '.menuize_panel #quickOrderToggle', function(event) {
	    event.preventDefault();
	    $('#quickOrder').toggleClass('expanded').toggleClass('collapsed');
	});

	//ULINENGM-3638 + ULINENGM-3684
	$(document).on('focus', '.item .model', function() {
		event.preventDefault();
		//ULINENGM-2457
		var current = $(this), index = current.closest('.item').find('.submit').val(), quickOrderContainer = current.closest('.quickOrderContainer')
		//ULINENGM-3976
		// quickOrderContainer.find('.item .qty').each(function(i){
		// 	if(i != index)
		// 		$(this).attr('readonly', 'readonly');
		// })
		//$('.fakeButtons button').attr("disabled","disabled"); // ULINENGM-2430 && ULINENGM-2858
	});

	//ULINENGM-3684
	$(document).on('blur', '.item .qty', function(event) {
		event.preventDefault();
		// if casin col modifier, leave only trigger row
		var qty = $(this), item = qty.closest('.item')
		if(item.find('.model').val() != "")
			$(this).closest('.item').find('.submit').trigger('click');
		else
			$('.item .qty').removeAttr('readonly');
	});

	//ULINENGM-3638 + ULINENGM-3684
	$(document).on('change', '.item .qty', function(event) {
		$(this).closest('.item').find('.submit').trigger('click');
	});

	//ULINENGM-4215 + ULINENGM-4225
	$(document).on('change', '.item .model', function(event) {
		var that = $(this);
		var input = that.attr('name')
 		var textfield = $('#quickOrder input[name="'+input+'"]');

 		that.addClass('focused');
 		textfield.removeClass('focused');
  	var nextField = textfield.hasClass('model') ? textfield.parents('.model-field').next('.qty-field').find('.qty') : textfield.parents('.item').next('.item').find('.model') ;
	  	$('#quickOrder input[name="'+nextField.attr('name')+'"]').focus(); 
	});

	//ULINENGM-3638
	// $(document).on('blur', '.item .model', function(event) {
	// 	event.preventDefault();
	// 	var model = $(this), item = model.closest('.item')
	// 	if(item.find('.qty').val() != "")
	// 		item.find('.submit').trigger('click');
	// });

	$(document).on('click', '.item .submit', function(event) {
		event.preventDefault();
		var btn = $(this), form = btn.closest('form')
		ajaxSubmit(form.serialize()+"&"+btn.attr("name")+"="+btn.val(), form.attr("action"))
	})
	//ULINENGM-4376
	$(document).on('change', '.item select', function() {
		var form = $(this).closest('form');
		var form_serialize = form.serialize()+"&un_select_index="+$(this).next('button').val();
		ajaxSubmit(form_serialize, form.attr("action"))
	})

	$(document).on('click', '.btn-async', function(event) {
		event.preventDefault();
		var btn = $(this), form = btn.closest('form')
		var data = form.serialize() + "&" + btn.attr("name") + "=" + btn.val()
		/* ULINENGM-2674 */
		var cb = btn.val() === 'clearAll' ? function() {
			btn.closest('.quickOrderContainer').find('input[type="text"]').first().focus()
			if (typeof ext.scroll !== 'undefined') {
				ext.scroll.to(0, btn.closest('.quickOrderContainer').offset().top)
			}
		} : undefined

		ajaxSubmit(data, form.attr("action"), cb)
	})

	// ULINENGM-2430
	$(document).on('click', '.fakeButtons button', function(event) {
		event.preventDefault();
		var val = $(this).val()
		$('.buttons').find("button[value='"+val+"']").trigger('click')
	});

	function ajaxSubmit(data, url, cb) { /* ULINENGM-2674 */
		$('.quickOrderContainer').addClass('async-update');
		
		$.ajax({
			url : url,
			type : 'POST',
			data : data,
			success : function(response){
				var resp = $('<div/>').html(response)

				$('.quickOrderContainer').html(resp.find('.quickOrderContainer').html())
				$('nav .quickorderSection .item').each(function(i){
					if(i > 2)
						$(this).remove()
				})
				$('.homepage .quickorderSection .item').each(function(i){
					if(i > 2)
						$(this).remove()
				})
					$('.quickorderSection button[value="addRow"]').removeClass('btn-async');
					$('.quickOrderContainer').removeClass('async-update');

				$('.fakeButtons').html(resp.find('.fakeButtons').html()) // ULINENGM-2602

				//$('.fakeButtons button').removeAttr('disabled') // ULINENGM-2430 && ULINENGM-2858

				if(!$('.buttons button[value="addRow"]').length)
					$('.fakeButtons button[value="addRow"]').remove()

				/* ULINENGM-2674 */
				if (typeof cb === 'function') {
					cb()
				}
			}
		})
	}

})
