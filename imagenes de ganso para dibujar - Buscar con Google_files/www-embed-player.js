(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function ka(a,b){a.raw=b;return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ma(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ma(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}ra=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=ra;
function x(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.v=!1;this.m=null;this.i=void 0;this.h=1;this.A=this.l=0;this.K=this.j=null}
function ya(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
xa.prototype.F=function(a){this.i=a};
function za(a,b){a.j={exception:b,jd:!0};a.h=a.l||a.A}
xa.prototype.return=function(a){this.j={return:a};this.h=this.A};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.A=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.jd?a.h=a.l||a.A:void 0!=b.B&&a.A<b.B?(a.h=b.B,a.j=null):a.h=a.A:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.jd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m.next,b,a.h.F):(a.h.F(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m["throw"],b,a.h.F):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.A)}};
b.prototype.da=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ja(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ba(g):this.m(g)}};
b.prototype.ba=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.xa(h,g):this.m(g)};
b.prototype.A=function(g){this.F(2,g)};
b.prototype.m=function(g){this.F(1,g)};
b.prototype.F=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ga();this.K()};
b.prototype.ga=function(){var g=this;e(function(){if(g.W()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.W=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ja=function(g){var h=this.l();g.ac(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(y){try{l(r(y))}catch(v){n(v)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.ac(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).ac(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(v){r[y]=v;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).ac(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ma(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ma(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ma(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ma(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=ka(["\x00"],["\\0"]),pb=ka(["\n"],["\\n"]),qb=ka(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.qe=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);void 0!==b&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(void 0===b?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===Yb.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function $b(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];0<=(e=uc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){this.h=a}
;function zc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=zc.prototype;m.Ld=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new yc(a)):this.xd(a,b)};
m.xd=function(a){var b=this.Sc(B.apply(1,arguments));this.h.set(b,[new yc(a)])};
m.yc=function(){var a=this.Sc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.de=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Sc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ac(a,b){zc.call(this,a,3,b)}
x(Ac,zc);Ac.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.xd(c+a,b)};function Bc(a,b){zc.call(this,a,2,b)}
x(Bc,zc);Bc.prototype.record=function(a){this.Ld(a,B.apply(1,arguments))};function Cc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Dc.apply(null,d):Cc(d)}}
;function G(){this.V=this.V;this.A=this.A}
G.prototype.V=!1;G.prototype.dispose=function(){this.V||(this.V=!0,this.U())};
function Ec(a,b){a.addOnDisposeCallback(Ya(Cc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.V?void 0!==b?a.call(b):a():(this.A||(this.A=[]),this.A.push(void 0!==b?Xa(a,b):a))};
G.prototype.U=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Fc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fc.prototype.stopPropagation=function(){this.j=!0};
Fc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Gc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Hc=Oa(610401301),Ic=Oa(188588736);function Jc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Kc,Lc=C.navigator;Kc=Lc?Lc.userAgentData||null:null;function Mc(a){return Hc?Kc?Kc.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function H(a){return-1!=Jc().indexOf(a)}
;function Nc(){return Hc?!!Kc&&0<Kc.brands.length:!1}
function Oc(){return Nc()?!1:H("Opera")}
function Pc(){return H("Firefox")||H("FxiOS")}
function Qc(){return Nc()?Mc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Nc()?0:H("Edge"))||H("Silk")}
;function Rc(){return Hc?!!Kc&&!!Kc.platform:!1}
function Sc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Tc(a){Tc[" "](a);return a}
Tc[" "]=function(){};var Uc=Oc(),Vc=Nc()?!1:H("Trident")||H("MSIE"),Wc=H("Edge"),Xc=H("Gecko")&&!(-1!=Jc().toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Yc=-1!=Jc().toLowerCase().indexOf("webkit")&&!H("Edge");Yc&&H("Mobile");Rc()||H("Macintosh");Rc()||H("Windows");(Rc()?"Linux"===Kc.platform:H("Linux"))||Rc()||H("CrOS");var Zc=Rc()?"Android"===Kc.platform:H("Android");Sc();H("iPad");H("iPod");Sc()||H("iPad")||H("iPod");Jc().toLowerCase().indexOf("kaios");function $c(a,b){Fc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a($c,Fc);var ad={2:"touch",3:"pen",4:"mouse"};
$c.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Xc){a:{try{Tc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ad[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&$c.Ba.preventDefault.call(this)};
$c.prototype.stopPropagation=function(){$c.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
$c.prototype.preventDefault=function(){$c.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var bd="closure_listenable_"+(1E6*Math.random()|0);var cd=0;function dd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++cd;this.Qb=this.Zb=!1}
function ed(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function fd(a){this.src=a;this.listeners={};this.h=0}
fd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=gd(a,b,d,e);-1<g?(b=a[g],c||(b.Zb=!1)):(b=new dd(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
fd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gd(e,b,c,d);return-1<b?(ed(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function hd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(ed(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function gd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var id="closure_lm_"+(1E6*Math.random()|0),jd={},kd=0;function ld(a,b,c,d,e){if(d&&d.once)md(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else c=nd(c),a&&a[bd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):od(a,b,c,!1,d,e)}
function od(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=pd(a);h||(a[id]=h=new fd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=qd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(rd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");kd++}}
function qd(){function a(c){return b.call(a.src,a.listener,c)}
var b=sd;return a}
function md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else c=nd(c),a&&a[bd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):od(a,b,c,!0,d,e)}
function td(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)td(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=nd(c),a&&a[bd])?a.h.remove(String(b),c,d,e):a&&(a=pd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=gd(b,c,d,e)),(c=-1<a?b[a]:null)&&ud(c))}
function ud(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[bd])hd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(rd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);kd--;(c=pd(b))?(hd(c,a),0==c.h&&(c.src=null,b[id]=null)):ed(a)}}}
function rd(a){return a in jd?jd[a]:jd[a]="on"+a}
function sd(a,b){if(a.Qb)a=!0;else{b=new $c(b,this);var c=a.listener,d=a.hc||a.src;a.Zb&&ud(a);a=c.call(d,b)}return a}
function pd(a){a=a[id];return a instanceof fd?a:null}
var vd="__closure_events_fn_"+(1E9*Math.random()>>>0);function nd(a){if("function"===typeof a)return a;a[vd]||(a[vd]=function(b){return a.handleEvent(b)});
return a[vd]}
;function wd(){G.call(this);this.h=new fd(this);this.Za=this;this.ga=null}
$a(wd,G);wd.prototype[bd]=!0;m=wd.prototype;m.addEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){td(this,a,b,c,d)};
function xd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new Fc(b,a):b instanceof Fc?b.target=b.target||a:(e=b,b=new Fc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=yd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=yd(g,c,!0,b)&&e,b.j||(e=yd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=yd(g,c,!1,b)&&e}
m.U=function(){wd.Ba.U.call(this);this.removeAllListeners();this.ga=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,ed(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function yd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.hc||g.src;g.Zb&&hd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function zd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
zd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ad(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Bd(){}
function Cd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Dd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dd.prototype;m.clone=function(){return new Dd(this.x,this.y)};
m.equals=function(a){return a instanceof Dd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ed(a,b){this.width=a;this.height=b}
m=Ed.prototype;m.clone=function(){return new Ed(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Fd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Hd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Id;function Jd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Gd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Wc;c.Wc=null;e()}};
return function(e){d.next={Wc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Kd(a){C.setTimeout(function(){throw a;},0)}
;function Ld(){this.i=this.h=null}
Ld.prototype.add=function(a,b){var c=Md.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ld.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Md=new zd(function(){return new Nd},function(a){return a.reset()});
function Nd(){this.next=this.scope=this.h=null}
Nd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Nd.prototype.reset=function(){this.next=this.scope=this.h=null};var Od,Pd=!1,Qd=new Ld;function Rd(a,b){Od||Sd();Pd||(Od(),Pd=!0);Qd.add(a,b)}
function Sd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Od=function(){a.then(Td)}}else Od=function(){var b=Td;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Id||(Id=Jd()),Id(b)):C.setImmediate(b)}}
function Td(){for(var a;a=Qd.remove();){try{a.h.call(a.scope)}catch(b){Kd(b)}Ad(Md,a)}Pd=!1}
;function Ud(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Bd)try{var b=this;a.call(void 0,function(c){Vd(b,2,c)},function(c){Vd(b,3,c)})}catch(c){Vd(this,3,c)}}
function Wd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Wd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Xd=new zd(function(){return new Wd},function(a){a.reset()});
function Yd(a,b,c){var d=Xd.get();d.i=a;d.h=b;d.context=c;return d}
function Zd(a){return new Ud(function(b,c){c(a)})}
Ud.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ud.prototype.$goog_Thenable=!0;m=Ud.prototype;m.qc=function(a,b){return $d(this,null,a,b)};
m.catch=Ud.prototype.qc;m.cancel=function(a){if(0==this.h){var b=new ae(a);Rd(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Vd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Yd(null,null,null);e.child=new Ud(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ee(a,e);return e.child}
m.kf=function(a){this.h=0;Vd(this,2,a)};
m.lf=function(a){this.h=0;Vd(this,3,a)};
function Vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.kf,f=a.lf;if(d instanceof Ud){ee(d,Yd(e||Bd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.m||(a.m=!0,Rd(a.Xd,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Xd=function(){for(var a;a=ce(this);)de(this,a,this.h,this.v);this.m=!1};
function de(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.child)b.child.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Ad(Xd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function he(a,b){a.A=!0;Rd(function(){a.A&&je.call(null,b)})}
var je=Kd;function ae(a){bb.call(this,a)}
$a(ae,bb);ae.prototype.name="cancel";function ke(a,b){wd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.gf,this);this.m=Za()}
$a(ke,wd);m=ke.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.gf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),xd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.U=function(){ke.Ba.U.call(this);this.stop();delete this.i};
function le(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function me(a){G.call(this);this.F=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.v=new Set;this.flushInterval=3E4;this.h=new ke(this.flushInterval);this.h.listen("tick",this.Aa,!1,this);Ec(this,this.h)}
x(me,G);m=me.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ne(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Aa()}
m.Aa=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.F.flush(a,this.m);oe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Ra=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ac(a,b))};
m.Eb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bc(a,b))};
function pe(a,b){return a.v.has(b)?void 0:a.i.get(b)}
m.Ab=function(a){this.Jd(a,1,B.apply(1,arguments))};
m.Jd=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof Ac&&(d.i(b,c),ne(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof Bc&&(d.record(b,c),ne(this))};
function oe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function qe(a){this.h=a;this.h.Ra("/client_streamz/bg/fic",{S:3,R:"ke"})}
function re(a){this.h=a;this.h.Ra("/client_streamz/bg/fiec",{S:3,R:"rk"},{S:3,R:"ke"},{S:2,R:"ec"})}
function se(a){this.h=a;this.h.Eb("/client_streamz/bg/fil",{S:3,R:"rk"},{S:3,R:"ke"})}
se.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function te(a){this.h=a;this.h.Ra("/client_streamz/bg/fcc",{S:2,R:"ph"},{S:3,R:"ke"})}
function ue(a){this.h=a;this.h.Eb("/client_streamz/bg/fcd",{S:2,R:"ph"},{S:3,R:"ke"})}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function ve(a){this.h=a;this.h.Ra("/client_streamz/bg/fsc",{S:3,R:"rk"},{S:3,R:"ke"})}
function we(a){this.h=a;this.h.Eb("/client_streamz/bg/fsl",{S:3,R:"rk"},{S:3,R:"ke"})}
we.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function xe(a){this.h=a;this.h.Eb("/client_streamz/bg/wrl",{S:3,R:"mn"},{S:2,R:"ac"},{S:2,R:"sc"},{S:3,R:"rk"})}
xe.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e)};
function ye(a){this.h=a;this.h.Eb("/client_streamz/bg/el",{S:3,R:"en"},{S:3,R:"rk"})}
ye.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function ze(a){this.h=a;this.h.Ra("/client_streamz/bg/cec",{S:2,R:"ec"},{S:3,R:"rk"})}
function Ae(a){this.h=a;this.h.Ra("/client_streamz/bg/po/csc",{S:2,R:"cs"},{S:3,R:"rk"})}
function Be(a){this.h=a;this.h.Ra("/client_streamz/bg/po/ctav",{S:3,R:"av"},{S:3,R:"rk"})}
function Ce(a){this.h=a;this.h.Ra("/client_streamz/bg/po/cwsc",{S:3,R:"su"},{S:3,R:"rk"})}
;Pc();var De=Sc()||H("iPod"),Ee=H("iPad");!H("Android")||Qc()||Pc()||Oc()||H("Silk");Qc();var Fe=H("Safari")&&!(Qc()||(Nc()?0:H("Coast"))||Oc()||(Nc()?0:H("Edge"))||(Nc()?Mc("Microsoft Edge"):H("Edg/"))||(Nc()?Mc("Opera"):H("OPR"))||Pc()||H("Silk")||H("Android"))&&!(Sc()||H("iPad")||H("iPod"));var Ge={},He=null;function Ie(a,b){Qa(a);void 0===b&&(b=0);Je();b=Ge[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ke(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Le(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Le(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=He[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Je();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Je(){if(!He){He={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ge[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===He[f]&&(He[f]=e)}}}}
;var Me="undefined"!==typeof Uint8Array,Ne=!Vc&&"function"===typeof btoa;function Oe(a){if(!Ne)return Ie(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Pe=/[-_.]/g,Qe={"-":"+",_:"/",".":"="};function Re(a){return Qe[a]||""}
function Se(a){return Me&&null!=a&&a instanceof Uint8Array}
var Te={};var Ue;function Ve(a){if(a!==Te)throw Error("illegal external caller");}
function We(a,b){Ve(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
We.prototype.sizeBytes=function(){Ve(Te);var a=this.h;if(null!=a&&!Se(a))if("string"===typeof a)if(Ne){Pe.test(a)&&(a=a.replace(Pe,Re));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ke(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Xe(){return"function"===typeof BigInt}
;var Ye=0,Ze=0;function $e(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(af(c,a)),b=c.next().value,a=c.next().value,c=b);Ye=c>>>0;Ze=a>>>0}
function bf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Xe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+cf(c)+cf(a));return c}
function cf(a){a=String(a);return"0000000".slice(a.length)+a}
function df(){var a=Ye,b=Ze;b&2147483648?Xe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(af(a,b)),a=b.next().value,b=b.next().value,a="-"+bf(a,b)):a=bf(a,b);return a}
function af(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ef(a){return Array.prototype.slice.call(a)}
;var ff="function"===typeof Symbol&&"symbol"===typeof Symbol();function gf(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var hf=gf(),jf=gf("0di"),kf=gf("2ex");Math.max.apply(Math,la(Object.values({wg:1,ug:2,tg:4,zg:8,yg:16,xg:32,Bf:64,Bg:128,sg:256,rg:512,vg:1024,Gf:2048,Ag:4096,Hf:8192})));var lf=ff?function(a,b){a[hf]|=b}:function(a,b){void 0!==a.Ua?a.Ua|=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function mf(a,b,c){return c?a|b:a&~b}
var nf=ff?function(a){return a[hf]|0}:function(a){return a.Ua|0},of=ff?function(a){return a[hf]}:function(a){return a.Ua},pf=hf?function(a,b){a[hf]=b;
return a}:function(a,b){void 0!==a.Ua?a.Ua=b:Object.defineProperties(a,{Ua:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function qf(a){lf(a,34);return a}
function rf(a,b){pf(b,(a|0)&-14591)}
function sf(a,b){pf(b,(a|34)&-14557)}
function tf(a){a=a>>14&1023;return 0===a?536870912:a}
;var uf={},vf={};function wf(a){return!(!a||"object"!==typeof a||a.se!==vf)}
function xf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var yf;function zf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=nf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;pf(a,d|1);return!0}
var Af,Bf=[];pf(Bf,55);Af=Object.freeze(Bf);function Cf(a){if(a&2)throw Error();}
function Df(a,b,c){this.j=0;this.h=a;this.i=b;this.thisArg=c}
Df.prototype.next=function(){if(this.j<this.h.length){var a=this.h[this.j++];return{done:!1,value:this.i?this.i.call(this.thisArg,a):a}}return{done:!0,value:void 0}};
Df.prototype[Symbol.iterator]=function(){return new Df(this.h,this.i,this.thisArg)};
function Ef(){}
Object.freeze(new function(){});
Object.freeze(new Ef);var Ff=Object.freeze(new Ef);var Gf;function Hf(a){a=Error(a);ec(a,"warning");return a}
;function If(a){return a.displayName||a.name||"unknown type name"}
function Jf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Kf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Lf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Kf.test(a)}
function Mf(a){if("number"!==typeof a)throw Hf("int32");if(!Number.isFinite(a))throw Hf("int32");return a|0}
function Nf(a){return null==a?a:Mf(a)}
function Of(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Pf(a){if(null!=a){var b=!!b;if(!Lf(a))throw Hf("int64");a="string"===typeof a?Qf(a):b?Rf(a):Sf(a)}return a}
function Tf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Sf(a){Lf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){$e(a);var b=Ye,c=Ze;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Rf(a){Lf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Tf(b)?a=b:($e(a),a=df())}return a}
function Qf(a){Lf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Tf(a)){if(16>a.length)$e(Number(a));else if(Xe())a=BigInt(a),Ye=Number(a&BigInt(4294967295))>>>0,Ze=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Ze=Ye=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Ze*=1E6,Ye=1E6*Ye+d,4294967296<=Ye&&(Ze+=Math.trunc(Ye/4294967296),Ze>>>=0,Ye>>>=0);b&&(b=w(af(Ye,Ze)),
a=b.next().value,b=b.next().value,Ye=a,Ze=b)}a=df()}return a}
function Uf(a){if("string"!==typeof a)throw Error();return a}
function Vf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Wf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+If(b)+" but got "+(a&&If(a.constructor)));}
function Xf(a,b,c,d){if(null!=a&&"object"===typeof a&&a.Fc===uf)return a;if(!Array.isArray(a))return c?d&2?(a=b[jf])?b=a:(a=new b,qf(a.D),b=b[jf]=a):b=new b:b=void 0,b;var e=c=nf(a);0===e&&(e|=d&32);e|=d&2;e!==c&&pf(a,e);return new b(a)}
;var Yf;function Zf(a,b){nf(b);Yf=b;a=new a(b);Yf=void 0;return a}
function I(a,b,c){null==a&&(a=Yf);Yf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=nf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(xf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}pf(a,d);return a}
;var $f=function(){try{var a=function(){return qa(Map,[],this.constructor)};
x(a,Map);Tc(new a);return!1}catch(b){return!0}}();
function ag(){this.h=new Map}
m=ag.prototype;m.get=function(a){return this.h.get(a)};
m.set=function(a,b){this.h.set(a,b);this.size=this.h.size;return this};
m.delete=function(a){a=this.h.delete(a);this.size=this.h.size;return a};
m.clear=function(){this.h.clear();this.size=this.h.size};
m.has=function(a){return this.h.has(a)};
m.entries=function(){return this.h.entries()};
m.keys=function(){return this.h.keys()};
m.values=function(){return this.h.values()};
m.forEach=function(a,b){return this.h.forEach(a,b)};
ag.prototype[Symbol.iterator]=function(){return this.entries()};
var bg=function(){function a(){return qa(Map,[],this.constructor)}
if($f)return Object.setPrototypeOf(ag.prototype,Map.prototype),Object.defineProperties(ag.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),ag;x(a,Map);return a}();
function cg(a){return a}
function dg(a,b,c,d){c=void 0===c?cg:c;d=void 0===d?cg:d;var e=bg.call(this)||this;var f=nf(a);f|=64;pf(a,f);e.Vb=f;e.sc=b;e.Kb=c;e.Pc=e.sc?eg:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?void 0===l&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);bg.prototype.set.call(e,k,l)}return e}
x(dg,bg);function fg(a){if(a.Vb&2)throw Error("Cannot mutate an immutable Map");}
function gg(a,b){b=void 0===b?hg:b;if(0!==a.size)return ig(a,b)}
function ig(a,b){b=void 0===b?hg:b;var c=[];a=bg.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
m=dg.prototype;m.clear=function(){fg(this);bg.prototype.clear.call(this)};
m.delete=function(a){fg(this);return bg.prototype.delete.call(this,this.Kb(a,!0,!1))};
m.entries=function(){var a=Array.from(bg.prototype.keys.call(this));return new Df(a,jg,this)};
m.keys=function(){return bg.prototype.keys.call(this)};
m.values=function(){var a=Array.from(bg.prototype.keys.call(this));return new Df(a,dg.prototype.get,this)};
m.forEach=function(a,b){var c=this;bg.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
m.set=function(a,b){fg(this);a=this.Kb(a,!0,!1);return null==a?this:null==b?(bg.prototype.delete.call(this,a),this):bg.prototype.set.call(this,a,this.Pc(b,!0,!0,this.sc,!1,this.Vb))};
m.has=function(a){return bg.prototype.has.call(this,this.Kb(a,!1,!1))};
m.get=function(a){a=this.Kb(a,!1,!1);var b=bg.prototype.get.call(this,a);if(void 0!==b){var c=this.sc;return c?(c=this.Pc(b,!1,!0,c,this.Gg,this.Vb),c!==b&&bg.prototype.set.call(this,a,c),c):b}};
dg.prototype[Symbol.iterator]=function(){return this.entries()};
dg.prototype.toJSON=void 0;dg.prototype.se=vf;function eg(a,b,c,d,e,f){b&&Wf(a,d);a=Xf(a,d,c,f);e&&(a=kg(a));f&2&&nf(a.D);return a}
function hg(a){return a}
function jg(a){return[a,this.get(a)]}
;function lg(a,b){return mg(b)}
function mg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(zf(a,void 0,0))return}else{if(Se(a))return Oe(a);if(a instanceof We){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Oe(b)}if(a instanceof dg)return gg(a)}}return a}
;function ng(a,b,c){a=ef(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function og(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=zf(a,void 0,0)?void 0:e&&nf(a)&2?a:pg(a,b,c,void 0!==d,e);else if(xf(a)){var f={},g;for(g in a)f[g]=og(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function pg(a,b,c,d,e){var f=d||c?nf(a):0;d=d?!!(f&32):void 0;a=ef(a);for(var g=0;g<a.length;g++)a[g]=og(a[g],b,c,d,e);c&&c(f,a);return a}
function qg(a){return og(a,rg,void 0,void 0,!1)}
function rg(a){return a.Fc===uf?a.toJSON():a instanceof dg?gg(a,qg):mg(a)}
;function sg(a,b,c){c=void 0===c?sf:c;if(null!=a){if(Me&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=nf(a);d&2||(b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16))),a=b?pf(a,(d|34)&-12293):pg(a,sg,d&4?sf:c,!0,!0));return a}a.Fc===uf?(c=a.D,d=of(c),a=d&2?a:Zf(a.constructor,tg(c,d,!0))):a instanceof dg&&!(a.Vb&2)&&(c=qf(ig(a,sg)),a=new dg(c,a.sc,a.Kb,a.Pc));return a}}
function tg(a,b,c){var d=c||b&2?sf:rf,e=!!(b&32);a=ng(a,b,function(f){return sg(f,e,d)});
lf(a,32|(c?2:0));return a}
function kg(a){var b=a.D,c=of(b);return c&2?Zf(a.constructor,tg(b,c,!1)):a}
;function ug(a,b){a=a.D;return vg(a,of(a),b)}
function wg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function vg(a,b,c,d){if(-1===c)return null;var e=tf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(wg(a,b,e,c)&&null!=kf){var g;a=null!=(g=Gf)?g:Gf={};g=a[kf]||0;4<=g||(a[kf]=g+1,g=Error(),ec(g,"incident"),Kd(g))}return d}return wg(a,b,e,c)}}
function J(a,b,c){var d=a.D,e=of(d);Cf(e);xg(d,e,b,c);return a}
function xg(a,b,c,d,e){xf(d);var f=tf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&pf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function yg(a){return void 0!==zg(a,Ag,11,!1)}
function Bg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Cg(a,b,c){var d=a.D,e=of(d);Cf(e);if(null==b)return xg(d,e,3),a;if(!Array.isArray(b))throw Hf();var f=nf(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Ff||!1);if(!(4&f))for(f=21,h&&(b=ef(b),g=0,f=Dg(f,e),f=Eg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=ef(b),g=0,f=Dg(f,e),f=Eg(f,e,!0));f!==g&&pf(b,f);xg(d,e,3,b);return a}
function Fg(a,b,c,d){a=a.D;var e=of(a);Cf(e);if(null!=d){c.includes(b);var f=b;f=void 0===f?0:f;var g=c.df||(c.df=gf("o_"+c[0])),h=a[g];if(null!=h)h&&null==vg(a,e,h)&&(h=0);else for(var k=h=0;k<c.length;k++){var l=c[k];null!=vg(a,e,l)&&(h&&(e=xg(a,e,h)),h=l)}f&&(h&&h!==f&&(e=xg(a,e,h)),h=f);c=h;ff||g in a?a[g]=c:Object.defineProperty(a,g,{value:c,writable:!0,enumerable:!1});e=f?e:h}xg(a,e,b,d)}
function zg(a,b,c,d){a=a.D;var e=of(a),f=vg(a,e,c,d);b=Xf(f,b,!1,e);b!==f&&null!=b&&xg(a,e,c,b,d);return b}
function Gg(a,b,c,d){d=void 0===d?!1:d;b=zg(a,b,c,d);if(null==b)return b;a=a.D;var e=of(a);if(!(e&2)){var f=kg(b);f!==b&&(b=f,xg(a,e,c,b,d))}return b}
function Hg(a,b,c,d){null!=d?Wf(d,b):d=void 0;return J(a,c,d)}
function Ig(a,b,c,d){var e=a.D,f=of(e);Cf(f);if(null==d)return xg(e,f,c),a;if(!Array.isArray(d))throw Hf();for(var g=nf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&(void 0===Ff||!1),p=!0,r=!0,t=0;t<d.length;t++){var y=d[t];Wf(y,b);k||(y=!!(nf(y.D)&2),p&&(p=!y),r&&(r=y))}k||(g=mf(g,5,!0),g=mf(g,8,p),g=mf(g,16,r));if(n||l&&g!==h)d=ef(d),h=0,g=Dg(g,f),g=Eg(g,f,!0);g!==h&&pf(d,g);xg(e,f,c,d);return a}
function Dg(a,b){a=mf(a,2,!!(2&b));a=mf(a,32,!0);return a=mf(a,2048,!1)}
function Eg(a,b,c){32&b&&c||(a=mf(a,32,!1));return a}
function Jg(a,b){a=ug(a,b);var c;null==a?c=a:Lf(a)?"number"===typeof a?c=Sf(a):c=Qf(a):c=void 0;return c}
function Kg(a){a=ug(a,1);var b=void 0===b?!1:b;b=null==a?a:Lf(a)?"string"===typeof a?Qf(a):b?Rf(a):Sf(a):void 0;return b}
function Lg(a){a=ug(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function Mg(a,b,c){return J(a,b,Vf(c))}
function Ng(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Hf("enum");c|=0}return J(a,b,c)}
;function L(a,b,c){this.D=I(a,b,c)}
m=L.prototype;m.toJSON=function(){if(yf)var a=Og(this,this.D,!1);else a=pg(this.D,rg,void 0,void 0,!1),a=Og(this,a,!0);return a};
m.serialize=function(){yf=!0;try{return JSON.stringify(this.toJSON(),lg)}finally{yf=!1}};
function Rg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");lf(b,32);return Zf(a,b)}
m.clone=function(){var a=this.D,b=of(a);return Zf(this.constructor,tg(a,b,!1))};
m.Fc=uf;m.toString=function(){return Og(this,this.D,!1).toString()};
function Og(a,b,c){var d=Ic?void 0:a.constructor.Qa;var e=of(c?a.D:b);a=b.length;if(!a)return b;var f;if(xf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(zf(n,d,+l)||wf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||zf(c,d,r)||wf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Sg(a){a.Mg=!0;return a}
;function Tg(a){this.D=I(a)}
x(Tg,L);Tg.Qa=[1,2,3,4];var Ug={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Vg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Wg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Xg(a,h),d+=Xg(a,h+4),e+=Xg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Ug.toString(e)}
function Wg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Xg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Yg(a){this.D=I(a)}
x(Yg,L);var Zg=[1,2,3];function $g(a){this.D=I(a)}
x($g,L);var ah=[1,2,3];function bh(a){this.D=I(a)}
x(bh,L);bh.Qa=[1];function ch(a){this.D=I(a)}
x(ch,L);ch.Qa=[3,6,4];function dh(a){this.D=I(a)}
x(dh,L);dh.Qa=[1];function eh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function fh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],v=e[2],z=e[3],F=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var K=z^y&(v^z);var N=1518500249}else K=y^v^z,N=1859775393;else 60>t?(K=y&v|z&(y|v),N=2400959708):(K=y^v^z,N=3395469782);K=((p<<5|p>>>27)&4294967295)+K+F+N+r[t]&4294967295;F=z;z=v;v=(y<<30|y>>>2)&4294967295;y=p;p=K}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+v&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+F&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],y=0,v=p.length;y<v;++y)t.push(p.charCodeAt(y));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var y=24;0<=y;y-=8)p[r++]=e[t]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Td:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function gh(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,hh(eh(d),a,c||null)].join(" "):null}
function hh(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Db(d,function(h){e.push(h)}),ih(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=ih(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ih(a){var b=fh();b.update(a);return b.Td().toLowerCase()}
;var jh={};function kh(a){this.h=a||{cookie:""}}
m=kh.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Ob:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Me;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ob}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ob:0,path:b,domain:c});return d};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var lh=new kh("undefined"==typeof document?null:document);function mh(a){return!!jh.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function nh(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;mh(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new kh(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");mh(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function oh(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new kh(document)).get(b));return a?gh(a,c,d):null}
function ph(a,b){b=void 0===b?!1:b;var c=eh(String(C.location.href)),d=[];if(nh(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new kh(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?gh(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&mh(b)&&((b=oh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=oh("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function qh(a){this.D=I(a)}
x(qh,L);qh.Qa=[2];function rh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
rh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
rh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
rh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
rh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function sh(a){this.D=I(a)}
x(sh,L);function th(a){this.D=I(a)}
x(th,L);function uh(a){this.h=this.i=this.j=a}
uh.prototype.reset=function(){this.h=this.i=this.j};
uh.prototype.getValue=function(){return this.i};function vh(a){this.D=I(a)}
x(vh,L);vh.prototype.fc=function(){return Lg(this)};function wh(a){this.D=I(a)}
x(wh,L);function xh(a){this.D=I(a)}
x(xh,L);function yh(a,b){Ig(a,wh,1,b)}
xh.Qa=[1];function Ag(a){this.D=I(a)}
x(Ag,L);var zh=["platform","platformVersion","architecture","model","uaFullVersion"],Ah=new xh,Bh=null;function Ch(a,b){b=void 0===b?zh:b;if(!Bh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new wh;f=Mg(f,1,e.brand);return Mg(f,2,e.version)});
yh(J(Ah,2,Jf(a.mobile)),c);Bh=a.getHighEntropyValues(b)}var d=new Set(b);return Bh.then(function(e){var f=Ah.clone();d.has("platform")&&Mg(f,3,e.platform);d.has("platformVersion")&&Mg(f,4,e.platformVersion);d.has("architecture")&&Mg(f,5,e.architecture);d.has("model")&&Mg(f,6,e.model);d.has("uaFullVersion")&&Mg(f,7,e.uaFullVersion);return f}).catch(function(){return Ah.clone()})}
;function Dh(a){this.D=I(a)}
x(Dh,L);function Eh(a){this.D=I(a,4)}
x(Eh,L);function Fh(a){this.D=I(a,35)}
x(Fh,L);Fh.Qa=[3,20,27];function Gh(a){this.D=I(a,19)}
x(Gh,L);Gh.prototype.Rb=function(a){return Ng(this,2,a)};
Gh.Qa=[3,5];function Hh(a){this.D=I(a,8)}
x(Hh,L);var Ih=function(a){return function(b){return Rg(a,b)}}(Hh);
Hh.Qa=[5,6,7];function Jh(a){this.D=I(a)}
x(Jh,L);var Kh;Kh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=Gg;this.defaultValue=void 0}(175237375,Jh);function Lh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.da="";this.pageId=null;this.ga=this.W=-1;this.experimentIds=null;this.K=this.m=0;this.ja=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Jb=a.Jb||function(){};
this.i=new Mh(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.v=a.mf||null;this.sessionIndex=a.sessionIndex||null;this.Hb=a.Hb||!1;this.logger=null;this.withCredentials=!a.Zc;this.eb=a.eb||!1;this.F="undefined"!==typeof URLSearchParams&&!!(new URL(Nh())).searchParams&&!!(new URL(Nh())).searchParams.set;var c=Ng(new Dh,1,1);Oh(this.i,c);this.l=new uh(1E4);a=Ph(this,a.Tc);this.h=new rh(this.l.getValue(),a);this.ba=new rh(6E5,a);this.Hb||this.ba.start();this.eb||
(document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&b.xc()}),document.addEventListener("pagehide",this.xc.bind(this)))}
x(Lh,G);function Ph(a,b){return a.F?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=Lh.prototype;m.U=function(){this.xc();this.h.stop();this.ba.stop();G.prototype.U.call(this)};
m.log=function(a){if(this.F){a=a.clone();var b=this.ja++;a=J(a,21,Pf(b));this.componentId&&Mg(a,26,this.componentId);if(!Kg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";J(b,1,Pf(c))}null==Jg(a,15)&&J(a,15,Pf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Hg(b,qh,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Hb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ga>d&&this.W<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.fc?Qh(this.i,this.network.fc()):Qh(this.i,0));var e=Rh(this.i,this.j,this.m,this.K,this.yb);d={};var f=this.Jb();f&&(d.Authorization=f);this.v||(this.v=Nh());try{var g=(new URL(this.v)).toString()}catch(k){g=(new URL(this.v,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.da===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Eg:1,td:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=Ih(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=Kg(l);k=k(null!=p?p:n);0<k&&(c.W=Date.now(),c.ga=c.W+k);l=Kh.ctor?Kh.i(l,Kh.ctor,Kh.h,!0):Kh.i(l,Kh.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=Of(ug(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new uh(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.K=0};
h=function(k,l){var n=e.D;var p=of(n),r=p,t=!(2&p),y=!!(2&r);p=y?1:2;t&&(t=!y);y=vg(n,r,3);y=Array.isArray(y)?y:Af;var v=nf(y),z=!!(4&v);if(!z){var F=v;0===F&&(F=Dg(F,r));F=mf(F,1,!0);v=y;var K=r,N=!!(2&F);N&&(K=mf(K,2,!0));for(var S=!N,da=!0,sa=0,P=0;sa<v.length;sa++){var ea=Xf(v[sa],Fh,!1,K);if(ea instanceof Fh){if(!N){var na=!!(nf(ea.D)&2);S&&(S=!na);da&&(da=na)}v[P++]=ea}}P<sa&&(v.length=P);F=mf(F,4,!0);F=mf(F,16,da);F=mf(F,8,S);pf(v,F);N&&Object.freeze(v);v=F}if(t&&!(8&v||!y.length&&(1===p||
4===p&&32&v))){Bg(v)&&(y=ef(y),v=Dg(v,r),r=xg(n,r,3,y));t=y;for(F=0;F<t.length;F++)K=t[F],N=kg(K),K!==N&&(t[F]=N);v=mf(v,8,!0);v=mf(v,16,!t.length);pf(t,v)}Bg(v)||(t=v,(F=1===p||4===p&&!!(32&v))?(K=!!(32&v),v=mf(v,!y.length||16&v&&(!z||K)?2:2048,!0)):v=Eg(v,r,!1),v!==t&&pf(y,v),F&&Object.freeze(y));2===p&&Bg(v)&&(y=ef(y),v=Dg(v,r),v=Eg(v,r,!1),pf(y,v),xg(n,r,3,y));n=y;r=Jg(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());
401===k&&f&&(c.da=f);r&&(c.m+=r);void 0===l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Hb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.K};
c.network&&c.network.send(d,g,h)}}}};
m.xc=function(){Sh(this.i,!0);this.flush();Sh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Nh(){return"https://play.google.com/log?format=json&hasfast=true"}
function Mh(a,b){this.eb=b=void 0===b?!1:b;this.i=this.locale=null;this.h=new Gh;Number.isInteger(a)&&this.h.Rb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Oh(this,new Dh)}
Mh.prototype.Rb=function(a){this.h.Rb(a);return this};
function Oh(a,b){Hg(a.h,Dh,1,b);Lg(b)||Ng(b,1,1);if(!a.eb){b=Th(a);var c=ug(b,5);(null==c||"string"===typeof c)&&c||Mg(b,5,a.locale)}a.i&&(b=Th(a),Gg(b,xh,9)||Hg(b,xh,9,a.i))}
function Qh(a,b){yg(Uh(a))&&(a=Vh(a),Ng(a,1,b))}
function Sh(a,b){yg(Uh(a))&&(a=Vh(a),J(a,2,Jf(b)))}
function Uh(a){return Gg(a.h,Dh,1)}
function Wh(a){var b=void 0===b?zh:b;var c=a.eb?void 0:window;c?Ch(c,b).then(function(d){a.i=d;d=Th(a);Hg(d,xh,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Th(a){a=Uh(a);var b=Gg(a,Ag,11);b||(b=new Ag,Hg(a,Ag,11,b));return b}
function Vh(a){a=Th(a);var b=Gg(a,vh,10);b||(b=new vh,J(b,2,Jf(!1)),Hg(a,vh,10,b));return b}
function Rh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(yg(Uh(a))){var h=Vh(a);J(h,3,Nf(d))}yg(Uh(a))&&(d=Vh(a),J(d,4,Nf(f)));yg(Uh(a))&&(f=Vh(a),J(f,5,Nf(g)));a=a.h.clone();g=Date.now().toString();a=J(a,4,Pf(g));b=b.slice();b=Ig(a,Fh,3,b);e&&(a=new sh,e=J(a,13,Nf(e)),a=new th,e=Hg(a,sh,2,e),a=new Eh,e=Hg(a,th,1,e),e=Ng(e,2,9),Hg(b,Eh,18,e));c&&J(b,14,Pf(c));return b}
;function Xh(){this.Kd="undefined"!==typeof AbortController}
Xh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,y,v;return A(function(z){switch(z.h){case 1:return f=(e=d.Kd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(z,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.td)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),z.yield(fetch(a.url,g),5);case 5:h=z.i;if(200!==h.status){null==(k=c)||k(h.status);z.B(3);break}if(null==(l=b)){z.B(7);break}p=n=l;return z.yield(h.text(),8);case 8:p(z.i);case 7:case 3:z.K=[z.j];z.l=0;z.A=0;clearTimeout(f);Ca(z);break;case 2:r=Ba(z);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(y=c)||y(408);break;default:null==(v=c)||v(400)}z.B(3)}})};
Xh.prototype.fc=function(){return 4};function Yh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.l=!1;this.network=null;this.componentId="";this.pageId=this.i=this.yb=null}
x(Yh,G);Yh.prototype.Zc=function(){this.m=!0;return this};
function Zh(a){a.network||(a.network=new Xh);var b=new Lh({logSource:a.logSource,Jb:a.Jb?a.Jb:ph,sessionIndex:a.sessionIndex,mf:a.j,eb:a.l,Hb:!1,Zc:a.m,Tc:a.Tc,network:a.network});Ec(a,b);if(a.h){var c=a.h,d=Th(b.i);Mg(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.yb&&(b.yb=a.yb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new qh),c=b.experimentIds,d=d.serialize(),Mg(c,4,d)):b.experimentIds&&J(b.experimentIds,4));Wh(b.i);a.network.Rb&&a.network.Rb(a.logSource);
a.network.Xe&&a.network.Xe(b);return b}
;function $h(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Yh(a,"0"),a.componentId=b,Ec(this,a),""!==c&&(a.j=c),d&&(a.l=!0),e&&(a.h=e),g&&(a.network=g),b=Zh(a));this.h=b}
x($h,G);
$h.prototype.flush=function(a){var b=a||[];if(b.length){a=new dh;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new ch;f=Mg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].R);f=Cg(f,g,Uf);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.j;for(var p=e.yc(l)||[],r=[],t=0;t<p.length;t++){var y=p[t],v=y&&y.h;y=new $g;switch(n){case 3:v=Number(v);Number.isFinite(v)&&Fg(y,1,ah,Pf(v));break;case 2:v=Number(v);
if(null!=v&&"number"!==typeof v)throw Error("Value of float/double field must be a number, found "+typeof v+": "+v);Fg(y,2,ah,v)}r.push(y)}n=r;for(p=0;p<n.length;p++){r=n[p];t=new bh;r=Hg(t,$g,2,r);t=l;y=[];v=[];for(var z=0;z<e.fields.length;z++)v.push(e.fields[z].S);for(z=0;z<v.length;z++){var F=v[z],K=t[z],N=new Yg;switch(F){case 3:Fg(N,1,Zg,Vf(String(K)));break;case 2:F=Number(K);Number.isFinite(F)&&Fg(N,2,Zg,Nf(F));break;case 1:Fg(N,3,Zg,Jf("true"===K))}y.push(N)}Ig(r,Yg,1,y);g.push(r)}}Ig(f,
bh,4,g);c.push(f);e.clear()}Ig(a,ch,1,c);b=this.h;b.F&&(a instanceof Fh?b.log(a):(c=new Fh,a=a.serialize(),a=Mg(c,8,a),b.log(a)));this.h.flush()}};function ai(){}
ai.prototype.serialize=function(a){var b=[];bi(this,a,b);return b.join("")};
function bi(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),bi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ci(d,c),c.push(":"),bi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ci(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var di={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ei=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ci(a,b){b.push('"',a.replace(ei,function(c){var d=di[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),di[c]=d);return d}),'"')}
;function fi(){}
fi.prototype.h=null;fi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var gi;function hi(){}
$a(hi,fi);gi=new hi;function ii(a){wd.call(this);this.headers=new Map;this.Ga=a||null;this.i=!1;this.K=this.T=null;this.l=this.da="";this.j=this.ba=this.m=this.W=!1;this.F=0;this.v=null;this.xa="";this.ja=!1}
$a(ii,wd);var ji=/^https?$/i,ki=["POST","PUT"],li=[];function mi(a,b,c,d,e,f,g){var h=new ii;li.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Rd,!0,void 0,void 0);f&&(h.F=Math.max(0,f));g&&(h.ja=g);h.send(a,c,d,e)}
m=ii.prototype;m.Rd=function(){this.dispose();Ib(li,this)};
m.send=function(a,b,c,d){if(this.T)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.T=new XMLHttpRequest;this.K=this.Ga?this.Ga.getOptions():gi.getOptions();this.T.onreadystatechange=Xa(this.nd,this);try{this.getStatus(),this.ba=!0,this.T.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();ni(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Cb(ki,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.T.setRequestHeader(d,c);this.xa&&(this.T.responseType=this.xa);"withCredentials"in this.T&&this.T.withCredentials!==this.ja&&(this.T.withCredentials=this.ja);try{oi(this),0<this.F&&(this.getStatus(),this.v=le(this.jf,this.F,this)),this.getStatus(),this.m=!0,this.T.send(a),this.m=
!1}catch(g){this.getStatus(),ni(this,g)}};
m.jf=function(){"undefined"!=typeof Na&&this.T&&(this.l="Timed out after "+this.F+"ms, aborting",this.getStatus(),xd(this,"timeout"),this.abort(8))};
function ni(a,b){a.i=!1;a.T&&(a.j=!0,a.T.abort(),a.j=!1);a.l=b;pi(a);qi(a)}
function pi(a){a.W||(a.W=!0,xd(a,"complete"),xd(a,"error"))}
m.abort=function(){this.T&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.T.abort(),this.j=!1,xd(this,"complete"),xd(this,"abort"),qi(this))};
m.U=function(){this.T&&(this.i&&(this.i=!1,this.j=!0,this.T.abort(),this.j=!1),qi(this,!0));ii.Ba.U.call(this)};
m.nd=function(){this.V||(this.ba||this.m||this.j?ri(this):this.Ae())};
m.Ae=function(){ri(this)};
function ri(a){if(a.i&&"undefined"!=typeof Na)if(a.K[1]&&4==si(a)&&2==a.getStatus())a.getStatus();else if(a.m&&4==si(a))le(a.nd,0,a);else if(xd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ti(a))xd(a,"complete"),xd(a,"success");else{try{var b=2<si(a)?a.T.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";pi(a)}}finally{qi(a)}}}
function qi(a,b){if(a.T){oi(a);var c=a.T,d=a.K[0]?function(){}:null;
a.T=null;a.K=null;b||xd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function oi(a){a.v&&(C.clearTimeout(a.v),a.v=null)}
m.isActive=function(){return!!this.T};
m.isComplete=function(){return 4==si(this)};
function ti(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!ji.test(a?a.toLowerCase():"");c=b}return c}
function si(a){return a.T?a.T.readyState:0}
m.getStatus=function(){try{return 2<si(this)?this.T.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function ui(){}
ui.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
mi(a.url,function(d){d=d.target;if(ti(d)){try{var e=d.T?d.T.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.td,a.timeoutMillis,a.withCredentials)};
ui.prototype.fc=function(){return 1};function vi(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=wi()}
vi.prototype.start=function(){this.h=wi()};
vi.prototype.done=function(){null!=this.h&&this.logger.Nb(this.event,wi()-this.h)};
function xi(){}
m=xi.prototype;m.Cc=function(){};
m.Nb=function(){};
m.kd=function(a){return a()};
m.Ha=function(){};
m.Aa=function(){};
function yi(a,b,c,d){G.call(this);this.Ea=b;this.i=new Map;this.j=new Map;b=new Yh(1828,"0");b.h="21";b.network=new ui;if(d){var e=new Tg;d=Cg(e,d,Mf);b.i=d}this.m=new $h(1828,"","",!1,"",Zh(b));this.h=new me(this.m);c&&(this.h.l=1E5,c=this.h,c.flushInterval=3E4,c.h.setInterval(3E4));this.ba=new se(this.h);this.da=new ve(this.h);this.ga=new we(this.h);this.W=new re(this.h);this.v=new te(this.h);this.F=new ue(this.h);this.errorCount=new ze(this.h);this.K=new ye(this.h);new xe(this.h);new Ae(this.h);
new Be(this.h);new Ce(this.h);this.l=Vg(a);a=new qe(this.h);this.i.set("h",1);this.i.set("u",2);this.i.set("k",3);this.i.set("P",4);this.i.set("p",5);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4);a.h.Ab("/client_streamz/bg/fic",this.Ea);Ec(this,this.m);Ec(this,this.h)}
x(yi,G);m=yi.prototype;m.Cc=function(){this.da.h.Ab("/client_streamz/bg/fsc",this.l,this.Ea)};
m.Nb=function(a,b){if("t"===a)this.ba.record(b,this.l,this.Ea);else if("n"===a)this.ga.record(b,this.l,this.Ea);else if("h"===a||"u"===a||"k"===a||"P"===a||"p"===a){if(a=this.i.get(a))this.v.h.Ab("/client_streamz/bg/fcc",a,this.Ea),this.F.record(b,a,this.Ea)}else this.K.record(b,a,this.Ea)};
m.kd=function(a,b){var c=wi();a=a();this.Nb(b,wi()-c);return a};
m.Ha=function(a){var b=this.j.get(a);b?this.W.h.Ab("/client_streamz/bg/fiec",this.l,this.Ea,b):this.errorCount.h.Ab("/client_streamz/bg/cec",a,this.Ea)};
m.Aa=function(){this.h.Aa()};
function wi(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function zi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ai(a){function b(t,y,v){Promise.resolve().then(function(){p.done();d.h&&d.ea.Aa();n.resolve({Nd:t,af:y,Sg:v})})}
function c(t,y,v,z){if(h){var F="k";y?F="h":v&&(F="u");"k"!==F?0!==z&&d.ea.Nb(F,t):0>=d.i?(d.ea.Nb(F,t),d.i=Math.floor(200*Math.random())):d.i--}}
G.call(this);var d=this;this.h=!1;this.i=Math.floor(200*Math.random());var e=a.program;var f=a.ge;var g=Math.random(),h=.3>g;null!=a.Pd&&(h=g<a.Pd);h&&(this.h=!0);var k=new G;this.addOnDisposeCallback(function(){d.j.then(function(t){t=t.af;d.ea.Aa();null==t||t();k.dispose()})});
if(!1!==a.Ge)if(a.ea)this.ea=a.ea;else{var l;Ec(k,this.ea=new yi(f,null!=(l=a.Ea)?l:"_",this.h))}else this.ea=new xi;var n=new zi;this.j=n.promise;var p=new vi(this.ea,"t",!1);if(!C[f])throw this.ea.Ha(25),this.ea.Aa(),Error("EGOU");if(!C[f].a)throw this.ea.Ha(26),this.ea.Aa(),Error("ELIU");try{var r=C[f].a;p.start();this.l=w(r(e,b,!0,a.dh,c)).next().value;this.Ze=n.promise.then(function(){})}catch(t){throw this.ea.Ha(28),this.ea.Aa(),t;
}}
x(Ai,G);Ai.prototype.snapshot=function(a){var b=this;if(this.V)throw Error("Already disposed");this.ea.Cc();return this.j.then(function(c){var d=c.Nd;return new Promise(function(e){var f=new vi(b.ea,"n");d(function(g){f.done();b.h&&b.ea.Aa();e(g)},[a.Yc,
a.bf,a.pf,a.cf])})})};
Ai.prototype.zd=function(a){var b=this;if(this.V)throw Error("Already disposed");this.ea.Cc();var c=this.ea.kd(function(){return b.l([a.Yc,a.bf,a.pf,a.cf])},"n");
this.h&&this.ea.Aa();return c};var Bi=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function Ci(a){var b=Di;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ei(){var a=[];Ci(function(b){a.push(b)});
return a}
var Di={qf:"allow-forms",rf:"allow-modals",sf:"allow-orientation-lock",tf:"allow-pointer-lock",uf:"allow-popups",vf:"allow-popups-to-escape-sandbox",wf:"allow-presentation",xf:"allow-same-origin",yf:"allow-scripts",zf:"allow-top-navigation",Af:"allow-top-navigation-by-user-activation"},Fi=Cd(function(){return Ei()});
function Gi(){var a=Hi(),b={};Db(Fi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Hi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ii(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Ji=(new Date).getTime();function Ki(){var a=Li;return Sg(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;function Mi(a){wd.call(this);var b=this;this.v=this.j=0;this.Da=null!=a?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Ni(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.v||Oi(this)}
x(Mi,wd);function Pi(){var a=Qi;Mi.h||(Mi.h=new Mi(a));return Mi.h}
Mi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.v);delete Mi.h};
Mi.prototype.va=function(){return this.i};
function Oi(a){a.v=a.Da.pa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Ni(a),3):c.yield(Ni(a),3);Oi(a);c.h=0})},3E4)}
function Ni(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.A=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?xd(a,"networkstatus-online"):xd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ri(){this.data=[];this.h=-1}
Ri.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ri.prototype.get=function(a){return!!this.data[a]};
function Si(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ti(){this.blockSize=-1}
;function Ui(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Ui,Ti);Ui.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Vi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ui.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Vi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Vi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Vi(this,e);f=0;break}}this.i=f;this.l+=b}};
Ui.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Vi(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Wi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Xi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Yi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Wi(a).match(/\S+/g)||[],b=0<=Cb(a,b));return b}
function Zi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Yi(a,"inverted-hdpi")&&Xi(a,Array.prototype.filter.call(a.classList?a.classList:Wi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function $i(){}
$i.prototype.next=function(){return aj};
var aj={done:!0,value:void 0};$i.prototype.mb=function(){return this};function bj(a){if(a instanceof cj||a instanceof dj||a instanceof ej)return a;if("function"==typeof a.next)return new cj(function(){return a});
if("function"==typeof a[Symbol.iterator])return new cj(function(){return a[Symbol.iterator]()});
if("function"==typeof a.mb)return new cj(function(){return a.mb()});
throw Error("Not an iterator or iterable.");}
function cj(a){this.h=a}
cj.prototype.mb=function(){return new dj(this.h())};
cj.prototype[Symbol.iterator]=function(){return new ej(this.h())};
cj.prototype.i=function(){return new ej(this.h())};
function dj(a){this.h=a}
x(dj,$i);dj.prototype.next=function(){return this.h.next()};
dj.prototype[Symbol.iterator]=function(){return new ej(this.h)};
dj.prototype.i=function(){return new ej(this.h)};
function ej(a){cj.call(this,function(){return a});
this.j=a}
x(ej,cj);ej.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.v=!!a}
$a(M,G);m=M.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Bb(a)}return!1};
m.Bb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];fj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.V;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Bb(c)}}return 0!=e}return!1};
function fj(a,b,c){Rd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Bb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.U=function(){M.Ba.U.call(this);this.clear();this.j.length=0};function gj(a){this.h=a}
gj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new ai).serialize(b))};
gj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
gj.prototype.remove=function(a){this.h.remove(a)};function hj(a){this.h=a}
$a(hj,gj);function ij(a){this.data=a}
function jj(a){return void 0===a||a instanceof ij?a:new ij(a)}
hj.prototype.set=function(a,b){hj.Ba.set.call(this,a,jj(b))};
hj.prototype.i=function(a){a=hj.Ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
hj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function kj(a){this.h=a}
$a(kj,hj);kj.prototype.set=function(a,b,c){if(b=jj(b)){if(c){if(c<Za()){kj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}kj.Ba.set.call(this,a,b)};
kj.prototype.i=function(a){var b=kj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())kj.prototype.remove.call(this,a);else return b}};function lj(){}
;function mj(){}
$a(mj,lj);mj.prototype[Symbol.iterator]=function(){return bj(this.mb(!0)).i()};
mj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function nj(a){this.h=a;this.i=null}
$a(nj,mj);m=nj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){oj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){oj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){oj(this);this.h.removeItem(a)};
m.mb=function(a){oj(this);var b=0,c=this.h,d=new $i;d.next=function(){if(b>=c.length)return aj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
m.clear=function(){oj(this);this.h.clear()};
m.key=function(a){oj(this);return this.h.key(a)};
function oj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Kd(Error("Storage mechanism: Storage unavailable"))}
;function pj(){var a=null;try{a=C.localStorage||null}catch(b){}nj.call(this,a)}
$a(pj,nj);function qj(a,b){this.i=a;this.h=b+"::"}
$a(qj,mj);qj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qj.prototype.get=function(a){return this.i.get(this.h+a)};
qj.prototype.remove=function(a){this.i.remove(this.h+a)};
qj.prototype.mb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new $i;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},rj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Nc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var sj={nb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},tj={nb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
cd:function(a){return[].concat.apply([],a)}};
O.Ye=function(){rj?(O.lb=Uint8Array,O.Ja=Uint16Array,O.Id=Int32Array,O.assign(O,sj)):(O.lb=Array,O.Ja=Array,O.Id=Array,O.assign(O,tj))};
O.Ye();var uj=!0;try{new Uint8Array(1)}catch(a){uj=!1}
function vj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var wj={};wj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var xj={},yj,zj=[],Aj=0;256>Aj;Aj++){yj=Aj;for(var Bj=0;8>Bj;Bj++)yj=yj&1?3988292384^yj>>>1:yj>>>1;zj[Aj]=yj}xj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^zj[(a^b[d])&255];return a^-1};var Cj={};Cj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Dj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Ej=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Gj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Hj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ij=Array(576);Dj(Ij);var Jj=Array(60);Dj(Jj);var Kj=Array(512);Dj(Kj);var Lj=Array(256);Dj(Lj);var Mj=Array(29);Dj(Mj);var Nj=Array(30);Dj(Nj);function Oj(a,b,c,d,e){this.Ad=a;this.ae=b;this.Zd=c;this.Ud=d;this.xe=e;this.gd=a&&a.length}
var Pj,Qj,Rj;function Sj(a,b){this.bd=a;this.vb=0;this.Wa=b}
function Tj(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function Uj(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Tj(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Vj(a,b,c){Uj(a,c[2*b],c[2*b+1])}
function Wj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Xj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Wj(d[e]++,e))}
function Yj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ka[2*b]=0;a.ra[512]=1;a.Pa=a.zb=0;a.ya=a.matches=0}
function Zj(a){8<a.ia?Tj(a,a.oa):0<a.ia&&(a.Z[a.pending++]=a.oa);a.oa=0;a.ia=0}
function ak(a,b,c){Zj(a);Tj(a,c);Tj(a,~c);O.nb(a.Z,a.window,b,c,a.pending);a.pending+=c}
function bk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ck(a,b,c){for(var d=a.aa[c],e=c<<1;e<=a.Na;){e<a.Na&&bk(b,a.aa[e+1],a.aa[e],a.depth)&&e++;if(bk(b,d,a.aa[e],a.depth))break;a.aa[c]=a.aa[e];c=e;e<<=1}a.aa[c]=d}
function dk(a,b,c){var d=0;if(0!==a.ya){do{var e=a.Z[a.Gb+2*d]<<8|a.Z[a.Gb+2*d+1];var f=a.Z[a.Bc+d];d++;if(0===e)Vj(a,f,b);else{var g=Lj[f];Vj(a,g+256+1,b);var h=Ej[g];0!==h&&(f-=Mj[g],Uj(a,f,h));e--;g=256>e?Kj[e]:Kj[256+(e>>>7)];Vj(a,g,c);h=Fj[g];0!==h&&(e-=Nj[g],Uj(a,e,h))}}while(d<a.ya)}Vj(a,256,b)}
function ek(a,b){var c=b.bd,d=b.Wa.Ad,e=b.Wa.gd,f=b.Wa.Ud,g,h=-1;a.Na=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.aa[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.aa[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Pa--;e&&(a.zb-=d[2*k+1])}b.vb=h;for(g=a.Na>>1;1<=g;g--)ck(a,c,g);k=f;do g=a.aa[1],a.aa[1]=a.aa[a.Na--],ck(a,c,1),d=a.aa[1],a.aa[--a.qb]=g,a.aa[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.aa[1]=k++,ck(a,c,1);while(2<=
a.Na);a.aa[--a.qb]=a.aa[1];g=b.bd;k=b.vb;d=b.Wa.Ad;e=b.Wa.gd;f=b.Wa.ae;var l=b.Wa.Zd,n=b.Wa.xe,p,r=0;for(p=0;15>=p;p++)a.Ka[p]=0;g[2*a.aa[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var t=a.aa[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ka[p]++;var y=0;t>=l&&(y=f[t-l]);var v=g[2*t];a.Pa+=v*(p+y);e&&(a.zb+=v*(d[2*t+1]+y))}}if(0!==r){do{for(p=n-1;0===a.Ka[p];)p--;a.Ka[p]--;a.Ka[p+1]+=2;a.Ka[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ka[p];0!==t;)d=a.aa[--b],d>k||(g[2*d+1]!==p&&(a.Pa+=(p-
g[2*d+1])*g[2*d],g[2*d+1]=p),t--)}Xj(c,h,a.Ka)}
function fk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ka[2*l]+=g:0!==l?(l!==e&&a.ka[2*l]++,a.ka[32]++):10>=g?a.ka[34]++:a.ka[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function gk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Vj(a,l,a.ka);while(0!==--g)}else 0!==l?(l!==e&&(Vj(a,l,a.ka),g--),Vj(a,16,a.ka),Uj(a,g-3,2)):10>=g?(Vj(a,17,a.ka),Uj(a,g-3,3)):(Vj(a,18,a.ka),Uj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function hk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var ik=!1;function jk(a,b,c){a.Z[a.Gb+2*a.ya]=b>>>8&255;a.Z[a.Gb+2*a.ya+1]=b&255;a.Z[a.Bc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Lj[c]+256+1)]++,a.bb[2*(256>b?Kj[b]:Kj[256+(b>>>7)])]++);return a.ya===a.Mb-1}
;function kk(a,b){a.msg=Cj[b];return b}
function lk(a){for(var b=a.length;0<=--b;)a[b]=0}
function mk(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(O.nb(a.output,b.Z,b.Pb,c,a.wb),a.wb+=c,b.Pb+=c,a.Oc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function nk(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.I.wc&&(a.I.wc=hk(a));ek(a,a.jc);ek(a,a.dc);fk(a,a.ra,a.jc.vb);fk(a,a.bb,a.dc.vb);ek(a,a.Uc);for(e=18;3<=e&&0===a.ka[2*Hj[e]+1];e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Uj(a,b?1:0,3),ak(a,c,d);else if(4===a.strategy||g===f)Uj(a,2+(b?1:0),3),dk(a,Ij,Jj);else{Uj(a,4+(b?1:0),3);c=a.jc.vb+1;d=a.dc.vb+1;e+=1;Uj(a,c-257,5);Uj(a,d-1,5);Uj(a,e-4,4);for(f=0;f<e;f++)Uj(a,a.ka[2*
Hj[f]+1],3);gk(a,a.ra,c-1);gk(a,a.bb,d-1);dk(a,a.ra,a.bb)}Yj(a);b&&Zj(a);a.ta=a.o;mk(a.I)}
function R(a,b){a.Z[a.pending++]=b}
function ok(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function pk(a,b){var c=a.ld,d=a.o,e=a.wa,f=a.md,g=a.o>a.ma-262?a.o-(a.ma-262):0,h=a.window,k=a.Xa,l=a.Ia,n=a.o+258,p=h[d+e-1],r=h[d+e];a.wa>=a.ed&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function qk(a){var b=a.ma,c;do{var d=a.Gd-a.u-a.o;if(a.o>=b+(b-262)){O.nb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.ta-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.na)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.na;g>d&&(g=d);0===g?c=0:(e.na-=g,O.nb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=wj(e.H,c,g,f):2===e.state.wrap&&(e.H=xj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.J=(a.J<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.Xa]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.I.na)}
function rk(a,b){for(var c;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ma-262&&(a.P=pk(a,c));if(3<=a.P)if(c=jk(a,a.o-a.ub,a.P-3),a.u-=a.P,a.P<=a.Dc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Ma^a.window[a.o+1])&a.La;else c=jk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}a.sa=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.ya&&(nk(a,!1),0===a.I.M)?1:2}
function sk(a,b){for(var c,d;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ia[a.o&a.Xa]=a.head[a.J],a.head[a.J]=a.o);a.wa=a.P;a.pd=a.ub;a.P=2;0!==c&&a.wa<a.Dc&&a.o-c<=a.ma-262&&(a.P=pk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.ub)&&(a.P=2));if(3<=a.wa&&a.P<=a.wa){d=a.o+a.u-3;c=jk(a,a.o-1-a.pd,a.wa-3);a.u-=a.wa-1;a.wa-=2;do++a.o<=d&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ia[a.o&a.Xa]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.wa);a.fb=0;a.P=2;a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=jk(a,0,a.window[a.o-1]))&&nk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(jk(a,0,a.window[a.o-1]),a.fb=0);a.sa=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.ya&&(nk(a,!1),0===a.I.M)?1:2}
function tk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){qk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=jk(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=jk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(nk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(nk(a,!0),0===a.I.M?3:4):
a.ya&&(nk(a,!1),0===a.I.M)?1:2}
function uk(a,b){for(var c;;){if(0===a.u&&(qk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=jk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.ya&&(nk(a,!1),0===a.I.M)?1:2}
function vk(a,b,c,d,e){this.he=a;this.we=b;this.ze=c;this.ue=d;this.ce=e}
var wk;wk=[new vk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){qk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,nk(a,!1),0===a.I.M)return 1;if(a.o-a.ta>=a.ma-262&&(nk(a,!1),0===a.I.M))return 1}a.sa=0;if(4===b)return nk(a,!0),0===a.I.M?3:4;a.o>a.ta&&nk(a,!1);return 1}),
new vk(4,4,8,4,rk),new vk(4,5,16,8,rk),new vk(4,6,32,32,rk),new vk(4,4,16,16,sk),new vk(8,16,32,32,sk),new vk(8,16,128,128,sk),new vk(8,32,128,256,sk),new vk(32,128,258,1024,sk),new vk(32,258,258,4096,sk)];
function xk(){this.I=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Pb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Rc=this.ma=0;this.window=null;this.Gd=0;this.head=this.Ia=null;this.md=this.ed=this.strategy=this.level=this.Dc=this.ld=this.wa=this.u=this.ub=this.o=this.fb=this.pd=this.P=this.ta=this.Ma=this.La=this.zc=this.ic=this.J=0;this.ra=new O.Ja(1146);this.bb=new O.Ja(122);this.ka=new O.Ja(78);lk(this.ra);lk(this.bb);lk(this.ka);this.Uc=this.dc=this.jc=
null;this.Ka=new O.Ja(16);this.aa=new O.Ja(573);lk(this.aa);this.qb=this.Na=0;this.depth=new O.Ja(573);lk(this.depth);this.ia=this.oa=this.sa=this.matches=this.zb=this.Pa=this.Gb=this.ya=this.Mb=this.Bc=0}
function yk(a,b){if(!a||!a.state||5<b||0>b)return a?kk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.na||666===c.status&&4!==b)return kk(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,R(c,31),R(c,139),R(c,8),c.G?(R(c,(c.G.text?1:0)+(c.G.Ta?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),R(c,c.G.time&255),R(c,c.G.time>>8&255),R(c,c.G.time>>16&255),R(c,c.G.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(R(c,c.G.extra.length&255),R(c,c.G.extra.length>>8&255)),c.G.Ta&&(a.H=xj(a.H,c.Z,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Rc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ok(c,e+(31-e%31));0!==c.o&&(ok(c,a.H>>>16),ok(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ta&&c.pending>e&&(a.H=xj(a.H,c.Z,c.pending-e,e)),mk(a),e=c.pending,c.pending!==c.za));)R(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ta&&c.pending>e&&(a.H=xj(a.H,c.Z,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ta&&c.pending>e&&(a.H=xj(a.H,c.Z,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(0!==f);c.G.Ta&&c.pending>
e&&(a.H=xj(a.H,c.Z,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ta&&c.pending>e&&(a.H=xj(a.H,c.Z,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(0!==f);c.G.Ta&&c.pending>e&&(a.H=xj(a.H,c.Z,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ta?(c.pending+2>c.za&&mk(a),c.pending+2<=c.za&&(R(c,a.H&
255),R(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(mk(a),0===a.M)return c.sb=-1,0}else if(0===a.na&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return kk(a,-5);if(666===c.status&&0!==a.na)return kk(a,-5);if(0!==a.na||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?uk(c,b):3===c.strategy?tk(c,b):wk[c.level].ce(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Uj(c,2,3),Vj(c,256,Ij),16===c.ia?(Tj(c,c.oa),c.oa=0,c.ia=0):8<=c.ia&&
(c.Z[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):5!==b&&(Uj(c,0,3),ak(c,0,0),3===b&&(lk(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),mk(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.H&255),R(c,a.H>>8&255),R(c,a.H>>16&255),R(c,a.H>>24&255),R(c,a.kb&255),R(c,a.kb>>8&255),R(c,a.kb>>16&255),R(c,a.kb>>24&255)):(ok(c,a.H>>>16),ok(c,a.H&65535));mk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var zk={};zk=function(){this.input=null;this.kb=this.na=this.hb=0;this.output=null;this.Oc=this.M=this.wb=0;this.msg="";this.state=null;this.wc=2;this.H=0};var Ak=Object.prototype.toString;
function Bk(a){if(!(this instanceof Bk))return new Bk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new zk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=kk(b,-2);else{8===e&&(e=9);var k=new xk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Rc=e;k.ma=1<<k.Rc;k.Xa=k.ma-1;k.zc=f+7;k.ic=1<<k.zc;k.La=k.ic-1;k.Ma=~~((k.zc+3-1)/3);k.window=new O.lb(2*k.ma);k.head=new O.Ja(k.ic);k.Ia=new O.Ja(k.ma);k.Mb=1<<f+6;k.za=4*k.Mb;k.Z=new O.lb(k.za);k.Gb=1*k.Mb;k.Bc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Oc=0;b.wc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!ik){d=Array(16);for(f=g=0;28>f;f++)for(Mj[f]=g,e=0;e<1<<Ej[f];e++)Lj[g++]=f;Lj[g-1]=f;for(f=g=0;16>f;f++)for(Nj[f]=g,e=0;e<1<<Fj[f];e++)Kj[g++]=f;for(g>>=7;30>f;f++)for(Nj[f]=g<<7,e=0;e<1<<Fj[f]-7;e++)Kj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Ij[2*e+1]=8,e++,d[8]++;for(;255>=e;)Ij[2*e+1]=9,e++,d[9]++;for(;279>=e;)Ij[2*e+1]=7,e++,d[7]++;for(;287>=e;)Ij[2*e+1]=8,e++,d[8]++;Xj(Ij,287,d);for(e=0;30>e;e++)Jj[2*e+1]=5,Jj[2*e]=Wj(e,5);Pj=new Oj(Ij,Ej,257,286,15);Qj=new Oj(Jj,
Fj,0,30,15);Rj=new Oj([],Gj,0,19,7);ik=!0}c.jc=new Sj(c.ra,Pj);c.dc=new Sj(c.bb,Qj);c.Uc=new Sj(c.ka,Rj);c.oa=0;c.ia=0;Yj(c);c=0}else c=kk(b,-2);0===c&&(b=b.state,b.Gd=2*b.ma,lk(b.head),b.Dc=wk[b.level].we,b.ed=wk[b.level].he,b.md=wk[b.level].ze,b.ld=wk[b.level].ue,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.wa=2,b.fb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(Cj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=vj(a.dictionary):
"[object ArrayBuffer]"===Ak.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=wj(a.H,f,g,0));l.wrap=0;g>=l.ma&&(0===b&&(lk(l.head),l.o=0,l.ta=0,l.sa=0),c=new O.lb(l.ma),O.nb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.hb;e=a.input;a.na=g;a.hb=0;a.input=f;for(qk(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.Xa]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;qk(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.wa=2;l.fb=0;a.hb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Cj[b]);this.Cg=!0}}
Bk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=vj(a):"[object ArrayBuffer]"===Ak.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.na=c.input.length;do{0===c.M&&(c.output=new O.lb(d),c.wb=0,c.M=d);a=yk(c,e);if(1!==a&&0!==a)return Ck(this,a),this.ended=!0,!1;if(0===c.M||0===c.na&&(4===e||2===e))if("string"===this.options.to){var f=O.Nc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&uj||!b.subarray))b=
String.fromCharCode.apply(null,O.Nc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Nc(c.output,c.wb),this.chunks.push(b)}while((0<c.na||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=kk(c,-2):(c.state=null,a=113===d?kk(c,-3):0)):a=-2,Ck(this,a),this.ended=!0,0===a;2===e&&(Ck(this,0),c.M=0);return!0};
function Ck(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.cd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Dk(a,b){b=b||{};b.gzip=!0;b=new Bk(b);b.push(a,!0);if(b.err)throw b.msg||Cj[b.err];return b.result}
;function Ek(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Fk(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function Gk(a){this.name=a}
;var Hk=new Gk("rawColdConfigGroup");var Ik=new Gk("rawHotConfigGroup");function Jk(a){this.D=I(a)}
x(Jk,L);var Kk=new Gk("continuationCommand");var Lk=new Gk("webCommandMetadata");var Mk=new Gk("signalServiceEndpoint");var Nk={Ff:"EMBEDDED_PLAYER_MODE_UNKNOWN",Cf:"EMBEDDED_PLAYER_MODE_DEFAULT",Ef:"EMBEDDED_PLAYER_MODE_PFP",Df:"EMBEDDED_PLAYER_MODE_PFL"};var Ok=new Gk("feedbackEndpoint");function Pk(a){this.D=I(a)}
x(Pk,L);Pk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new We(a,Te):Ue||(Ue=new We(null,Te));else if(a.constructor!==We)if(Se(a))a=a.length?new We(new Uint8Array(a),Te):Ue||(Ue=new We(null,Te));else throw Error();return J(this,1,a)};var Li={hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED"};var Qk=new Gk("webPlayerShareEntityServiceEndpoint");var Rk=new Gk("playlistEditEndpoint");var Sk=new Gk("modifyChannelNotificationPreferenceEndpoint");var Tk=new Gk("unsubscribeEndpoint");var Uk=new Gk("subscribeEndpoint");function Vk(){var a=Wk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Xk(a){D("yt.ads.biscotti.lastId_",a)}
;function Yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zk=C.window,$k,al,bl=(null==Zk?void 0:null==($k=Zk.yt)?void 0:$k.config_)||(null==Zk?void 0:null==(al=Zk.ytcfg)?void 0:al.data_)||{};D("yt.config_",bl);function cl(){Yk(bl,arguments)}
function T(a,b){return a in bl?bl[a]:b}
function dl(a){var b=bl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var el=[];function fl(a){el.forEach(function(b){return b(a)})}
function gl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hl(b)}}:a}
function hl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),cl("ERRORS",b));fl(a)}
function il(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),cl("ERRORS",f))}
;var jl=/^[\w.]*$/,kl={q:!0,search_query:!0};function ll(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=ml(f[0]||""),h=ml(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(ll);l.args=[{key:n,value:f[1],query:a,method:nl===p?"unchanged":p}];kl.hasOwnProperty(n)||il(l)}}return c}
var nl=String(ll);function ol(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function pl(a){"?"===a.charAt(0)&&(a=a.substring(1));return ll(a,"&")}
function ql(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),pl(1<a.length?a[1]:a[0])):{}}
function rl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function sl(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function ml(a){return a&&a.match(jl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tl(a){var b=ul;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ji;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Bi:g;try{var h=g.history.length}catch(Ka){h=0}e.u_his=h;var k;e.u_h=null==(k=Bi.screen)?void 0:k.height;var l;e.u_w=null==(l=Bi.screen)?void 0:l.width;var n;e.u_ah=null==(n=Bi.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Bi.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Bi.screen)?void 0:r.colorDepth}catch(Ka){}h=b.h;try{var t=h.screenX;var y=h.screenY}catch(Ka){}try{var v=h.outerWidth;var z=h.outerHeight}catch(Ka){}try{var F=h.innerWidth;var K=h.innerHeight}catch(Ka){}try{var N=h.screenLeft;var S=h.screenTop}catch(Ka){}try{F=h.innerWidth,K=h.innerHeight}catch(Ka){}try{var da=h.screen.availWidth;var sa=h.screen.availTop}catch(Ka){}t=[N,S,t,y,da,sa,v,z,F,K];try{var P=(b.h.top||window).document,ea="CSS1Compat"==
P.compatMode?P.documentElement:P.body;var na=(new Ed(ea.clientWidth,ea.clientHeight)).round()}catch(Ka){na=new Ed(-12245933,-12245933)}P=na;na={};var La=void 0===La?C:La;ea=new Ri;"SVGElement"in La&&"createElementNS"in La.document&&ea.set(0);y=Gi();y["allow-top-navigation-by-user-activation"]&&ea.set(1);y["allow-popups-to-escape-sandbox"]&&ea.set(2);La.crypto&&La.crypto.subtle&&ea.set(3);"TextDecoder"in La&&"TextEncoder"in La&&ea.set(4);La=Si(ea);na.bc=La;na.bih=P.height;na.biw=P.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!Bi.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ul=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ol(tl(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var vl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function wl(){if(!vl)return null;var a=vl();return"open"in a?a:null}
function xl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function yl(a,b){"function"===typeof a&&(a=gl(a));return window.setTimeout(a,b)}
;var zl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(zl),["client_dev_set_cookie"]);function U(a){a=Al(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Bl(a,b){a=Al(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Al(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Cl(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Dl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},El="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(zl)),Fl=!1;
function Gl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&gl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=wl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Hl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Il(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){il(p)}}l.send(d);return l}
function Il(a,b){b=void 0===b?{}:b;var c=sl(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Dl){var f=T(Dl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=ol(tl()));return b}
function Jl(a,b){b.method="POST";b.postParams||(b.postParams={});return Kl(a,b)}
function Kl(a,b){var c=b.format||"JSON";a=Ll(a,b);var d=Ml(a,b),e=!1,f=Nl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=xl(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Ol(a,c,k,b.convertToSafeHtml);l&&(l=Pl(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=yl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Ll(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=rl(a,b||{},!0);return a}
function Ml(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=pl(e),Ub(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!Fl&&f&&"POST"!==b.method&&(Fl=!0,hl(Error("AJAX request with postData should use POST")));return e}
function Ol(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,il(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ql(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rl(g)})}d&&Sl(e);
return e}
function Sl(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Sl(a[b])}}
function Pl(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Ql(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rl(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hl(a){var b=window.location.search,c=oc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sl(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pl(b),f={};Db(El,function(g){e[g]&&(f[g]=e[g])});
return rl(a,f||{},!1)}
var Nl=Gl;var Tl=[{Ec:function(a){return"Cannot read property '"+a.key+"'"},
kc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ec:function(a){return"Cannot call '"+a.key+"'"},
kc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ec:function(a){return a.key+" is not defined"},
kc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Vl={Va:[],Sa:[{callback:Ul,weight:500}]};function Ul(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Wl(){this.Sa=[];this.Va=[]}
var Xl;function Yl(){if(!Xl){var a=Xl=new Wl;a.Va.length=0;a.Sa.length=0;Vl.Va&&a.Va.push.apply(a.Va,Vl.Va);Vl.Sa&&a.Sa.push.apply(a.Sa,Vl.Sa)}return Xl}
;var Zl=new M;function $l(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=am(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=am(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=am(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function am(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function bm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=$l(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cm(f+".ve",g,h,k):0;d+=f;d+=cm(e,a[e],b,c);if(500<d)break}}else c[b]=dm(a),d+=c[b].length;else c[b]=dm(a),d+=c[b].length;return d}
function cm(a,b,c,d){c+="."+a;a=dm(b);d[c]=a;return c.length+a.length}
function dm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function em(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function fm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gm(){this.ef=!0}
function hm(){gm.h||(gm.h=new gm);return gm.h}
function im(a,b){a={};var c=[];"SESSION_ID"in bl&&c.push({key:"u",value:T("SESSION_ID")});if(c=ph(c))a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in bl&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));return a}
;var jm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function km(a,b,c,d,e){lh.set(""+a,b,{Ob:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function lm(a){return lh.get(""+a,void 0)}
function mm(a,b,c){lh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function nm(){if(U("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!lh.isEnabled())return!1;if(lh.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?lh.set("TESTCOOKIESENABLED","1",{Ob:60,Me:"none",secure:!0}):lh.set("TESTCOOKIESENABLED","1",{Ob:60});if("1"!==lh.get("TESTCOOKIESENABLED"))return!1;lh.remove("TESTCOOKIESENABLED");return!0}
;var om=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",om);function pm(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=lm(this.h);a&&this.parse(a)}
var qm;function rm(){qm||(qm=new pm);return qm}
m=pm.prototype;m.get=function(a,b){sm(a);tm(a);a=void 0!==om[a]?om[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){sm(a);tm(a);if(null==b)throw Error("ExpectedNotNull");om[a]=b.toString()};
function um(a){return!!((wm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){sm(a);tm(a);delete om[a]};
m.clear=function(){for(var a in om)delete om[a]};
function tm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function sm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wm(a){a=void 0!==om[a]?om[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(om[d]=c.toString())}};var xm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ym={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function zm(){var a=C.navigator;return a?a.connection:void 0}
function Am(){var a=zm();if(a){var b=xm[a.type||"unknown"]||"CONN_UNKNOWN";a=xm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Bm(){var a=zm();if(null!=a&&a.effectiveType)return ym.hasOwnProperty(a.effectiveType)?ym[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
x(V,Error);function Cm(){try{return Dm(),!0}catch(a){return!1}}
function Dm(a){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function Em(){}
function Fm(a,b){return Qi.ab(a,0,b)}
Em.prototype.pa=function(a,b){return this.ab(a,1,b)};
Em.prototype.Db=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Gm=Bl("web_emulated_idle_callback_delay",300),Hm=1E3/60-3,Im=[8,5,4,3,2,1,0];
function Jm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.da=this.h=0;this.ba=this.m=!1;this.K=[];this.W=this.ga=!1;for(var b=w(Im),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.vc=a.timeout||1;this.F=Hm;this.v=0;this.xa=this.Be.bind(this);this.uc=this.hf.bind(this);this.Za=this.Md.bind(this);this.Cb=this.je.bind(this);this.Ub=this.Ee.bind(this);this.Ga=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ja=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
x(Jm,G);m=Jm.prototype;m.Db=function(a){var b=Za();Km(this,a);a=Za()-b;this.m||(this.F-=a)};
m.ab=function(a,b,c){++this.da;if(10===b)return this.Db(a),this.da;var d=this.da;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.ba||this.m||(0!==this.h&&Lm(this)!==this.v&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function Mm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Nm(a){return!a.isHidden()&&a.ja}
function Lm(a){if(a.i[8].length){if(a.W)return 4;if(Nm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Nm(a)?3:2:1;return 0}
m.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Km(a,b){try{b()}catch(c){a.Ha(c)}}
function Om(a){for(var b=w(Im),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Pm(this,b);this.ga=!1};
m.hf=function(){Pm(this)};
m.Md=function(){Qm(this)};
m.Ee=function(a){this.W=!0;var b=Lm(this);4===b&&b!==this.v&&(this.stop(),this.start());Pm(this,void 0,a);this.W=!1};
m.Be=function(){this.isHidden()||Qm(this);this.h&&(this.stop(),this.start())};
function Qm(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Km(a,e)}Rm(a);a.m=!1;Om(a)&&a.start();b=Za()-b;a.F-=b}
function Rm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Pm(a,b,c){a.W&&4===a.v&&a.h||a.stop();a.m=!0;b=Za()+(b||a.F);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Km(a,f);d=a.ga?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Km(a,c)}while(c&&Za()<b)}a.m=!1;Rm(a);a.F=Hm;Om(a)&&a.start()}
m.start=function(){this.ba=!1;if(0===this.h)switch(this.v=Lm(this),this.v){case 1:var a=this.Cb;this.h=this.Ga?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Gm);break;case 2:this.h=window.setTimeout(this.uc,this.vc);break;case 3:this.h=window.requestAnimationFrame(this.Ub);break;case 4:this.h=window.setTimeout(this.Za,0)}};
m.pause=function(){this.stop();this.ba=!0};
m.stop=function(){if(this.h){switch(this.v){case 1:var a=this.h;this.Ga?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.U=function(){Mm(this);this.stop();this.ja&&document.removeEventListener("visibilitychange",this.xa);G.prototype.U.call(this)};var Sm=E("yt.scheduler.instance.timerIdMap_")||{},Tm=Bl("kevlar_tuner_scheduler_soft_state_timer_ms",800),Um=0,Vm=0;function Wm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.V)a=new Jm(T("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Xm(){Ym();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Ym(){Mm(Wm());for(var a in Sm)Sm.hasOwnProperty(a)&&delete Sm[Number(a)]}
function Zm(a,b,c){if(!c)return c=void 0===c,-Wm().ab(a,b,c);var d=window.setTimeout(function(){var e=Wm().ab(a,b);Sm[d]=e},c);
return d}
function $m(a){Wm().Db(a)}
function an(a){var b=Wm();if(0>a)b.qa(-a);else{var c=Sm[a];c?(b.qa(c),delete Sm[a]):window.clearTimeout(a)}}
function bn(){cn()}
function cn(){window.clearTimeout(Um);Wm().start()}
function dn(){Wm().pause();window.clearTimeout(Um);Um=window.setTimeout(bn,Tm)}
function en(){window.clearTimeout(Vm);Vm=window.setTimeout(function(){fn(0)},Tm)}
function fn(a){en();var b=Wm();b.l=a;b.start()}
function gn(a){en();var b=Wm();b.l>a&&(b.l=a,b.start())}
function hn(){window.clearTimeout(Vm);var a=Wm();a.l=0;a.start()}
;function jn(){Em.apply(this,arguments)}
x(jn,Em);function kn(){jn.h||(jn.h=new jn);return jn.h}
jn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):yl(a,c||0)};
jn.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
jn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Qi=kn();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Xm),D("yt.scheduler.instance.addJob",Zm),D("yt.scheduler.instance.addImmediateJob",$m),D("yt.scheduler.instance.cancelJob",an),D("yt.scheduler.instance.cancelAllJobs",Ym),D("yt.scheduler.instance.start",cn),D("yt.scheduler.instance.pause",dn),D("yt.scheduler.instance.setPriorityThreshold",fn),D("yt.scheduler.instance.enablePriorityThreshold",gn),D("yt.scheduler.instance.clearPriorityThreshold",hn),D("yt.scheduler.initialized",
!0));function ln(a){var b=new pj;this.h=(a=b.isAvailable()?a?new qj(b,a):b:null)?new kj(a):null;this.i=document.domain||window.location.hostname}
ln.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new ai).serialize(b))}catch(f){return}else e=escape(b);km(a,e,c,this.i)};
ln.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=lm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ln.prototype.remove=function(a){this.h&&this.h.remove(a);mm(a,"/",this.i)};var mn=function(){var a;return function(){a||(a=new ln("ytidb"));return a}}();
function nn(){var a;return null==(a=mn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var on=[],pn,qn=!1;function rn(){var a={};for(pn=new sn(void 0===a.handleError?tn:a.handleError,void 0===a.logEvent?un:a.logEvent);0<on.length;)switch(a=on.shift(),a.type){case "ERROR":pn.Ha(a.payload);break;case "EVENT":pn.logEvent(a.eventType,a.payload)}}
function vn(a){qn||(pn?pn.Ha(a):(on.push({type:"ERROR",payload:a}),10<on.length&&on.shift()))}
function wn(a,b){qn||(pn?pn.logEvent(a,b):(on.push({type:"EVENT",eventType:a,payload:b}),10<on.length&&on.shift()))}
;function xn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function yn(a){return a.substr(0,a.indexOf(":"))||a}
;var zn=De||Ee;function An(a){var b=Jc();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Bn={},Cn=(Bn.AUTH_INVALID="No user identifier specified.",Bn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bn.MISSING_INDEX="Index not created.",Bn.MISSING_OBJECT_STORES="Object stores not created.",Bn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bn),Dn={},En=(Dn.AUTH_INVALID="ERROR",Dn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Dn.EXPLICIT_ABORT="IGNORED",Dn.IDB_NOT_SUPPORTED="ERROR",Dn.MISSING_INDEX=
"WARNING",Dn.MISSING_OBJECT_STORES="ERROR",Dn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Dn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Dn.QUOTA_EXCEEDED="WARNING",Dn.QUOTA_MAYBE_EXCEEDED="WARNING",Dn.UNKNOWN_ABORT="WARNING",Dn.INCOMPATIBLE_DB_VERSION="WARNING",Dn),Fn={},Gn=(Fn.AUTH_INVALID=!1,Fn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fn.EXPLICIT_ABORT=!1,Fn.IDB_NOT_SUPPORTED=!1,Fn.MISSING_INDEX=!1,Fn.MISSING_OBJECT_STORES=!1,Fn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fn.QUOTA_EXCEEDED=!1,Fn.QUOTA_MAYBE_EXCEEDED=!0,Fn.UNKNOWN_ABORT=!0,Fn.INCOMPATIBLE_DB_VERSION=!1,Fn);function Hn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Cn[a]:c;d=void 0===d?En[a]:d;e=void 0===e?Gn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Hn.prototype)}
x(Hn,V);function In(a,b){Hn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Cn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,In.prototype)}
x(In,Hn);function Jn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jn.prototype)}
x(Jn,Error);var Kn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ln(a,b,c,d){b=yn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Hn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Hn("QUOTA_EXCEEDED",a);if(Fe&&"UnknownError"===e.name)return new Hn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jn)return new Hn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Kn.some(function(f){return e.message.includes(f)}))return new Hn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Hn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",od:e.name})];e.level="WARNING";return e}
function Mn(a,b,c){var d=nn();return new Hn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Nn(a){if(!a)throw Error();throw a;}
function On(a){return a}
function Pn(a){this.h=a}
function Qn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qn.all=function(a){return new Qn(new Pn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Qn.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qn.resolve=function(a){return new Qn(new Pn(function(b,c){a instanceof Qn?a.then(b,c):b(a)}))};
Qn.reject=function(a){return new Qn(new Pn(function(b,c){c(a)}))};
Qn.prototype.then=function(a,b){var c=this,d=null!=a?a:On,e=null!=b?b:Nn;return new Qn(new Pn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Rn(c,c,d,f,g)}),c.i.push(function(){Sn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Rn(c,c,d,f,g):"REJECTED"===c.state.status&&Sn(c,c,e,f,g)}))};
Qn.prototype.catch=function(a){return this.then(void 0,a)};
function Rn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qn?Tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qn?Tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qn?Tn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Un(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vn(a){return new Promise(function(b,c){Un(a,b,c)})}
function Wn(a){return new Qn(new Pn(function(b,c){Un(a,b,c)}))}
;function Xn(a,b){return new Qn(new Pn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yn=window,W=Yn.ytcsi&&Yn.ytcsi.now?Yn.ytcsi.now:Yn.performance&&Yn.performance.timing&&Yn.performance.now&&Yn.performance.timing.navigationStart?function(){return Yn.performance.timing.navigationStart+Yn.performance.now()}:function(){return(new Date).getTime()};function Zn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Zn.prototype;m.add=function(a,b,c){return $n(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return $n(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return $n(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function ao(a,b,c){a=a.h.createObjectStore(b,c);return new bo(a)}
m.delete=function(a,b){return $n(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return $n(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function co(a,b,c){return $n(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return Wn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $n(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,y,v;return A(function(z){switch(z.h){case 1:var F={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);F=z.yield;var K=new eo(l);K=fo(K,d);return F.call(z,K,7);case 7:return n=z.i,p=Math.round(W()),go(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:r=Ba(z);t=Math.round(W());y=Ln(r,
a.h.name,b.join(),a.h.version);if((v=y instanceof Hn&&!y.h)||g>=f)go(a,k,t,g,y,b.join(),e),h=y;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function go(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Hn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&wn("QUOTA_EXCEEDED",{dbName:yn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Hn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),wn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ho(a,!1,d,f,b,g.tag),vn(e)):ho(a,!0,d,f,b,g.tag)}
function ho(a,b,c,d,e,f){wn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function bo(a){this.h=a}
m=bo.prototype;m.add=function(a,b){return Wn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Wn(this.h.clear()).then(function(){})};
function io(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Wn(this.h.count(a))};
function jo(a,b){return ko(a,{query:b},function(c){return c.delete().then(function(){return lo(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?jo(this,a):Wn(this.h.delete(a))};
m.get=function(a){return Wn(this.h.get(a))};
m.index=function(a){try{return new mo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Jn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ko(a,b,c){a=a.h.openCursor(b.query,b.direction);return no(a).then(function(d){return Xn(d,c)})}
function eo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Hn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function fo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
eo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Hn("EXPLICIT_ABORT");};
eo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new bo(a),this.i.set(a,b));return b};
function mo(a){this.h=a}
m=mo.prototype;m.count=function(a){return Wn(this.h.count(a))};
m.delete=function(a){return oo(this,{query:a},function(b){return b.delete().then(function(){return lo(b)})})};
m.get=function(a){return Wn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function oo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return no(a).then(function(d){return Xn(d,c)})}
function po(a,b){this.request=a;this.cursor=b}
function no(a){return Wn(a).then(function(b){return b?new po(a,b):null})}
function lo(a){a.cursor.continue(void 0);return no(a.request)}
po.prototype.delete=function(){return Wn(this.cursor.delete()).then(function(){})};
po.prototype.getValue=function(){return this.cursor.value};
po.prototype.update=function(a){return Wn(this.cursor.update(a))};function qo(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Zn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Od,k=c.blocking,l=c.ff,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&wn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:yn(a)});var y=f(),v=new eo(g.transaction);
n&&n(y,function(z){return t.oldVersion<z&&t.newVersion>=z},v);
v.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){wn("IDB_UNEXPECTEDLY_CLOSED",{dbName:yn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ro(a,b,c){c=void 0===c?{}:c;return qo(a,b,c)}
function so(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Od)&&c.addEventListener("blocked",function(){e()}),g.yield(Vn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Ln(f,a,"",-1);})}
;function to(a,b){this.name=a;this.options=b;this.j=!0;this.A=this.l=0}
to.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ro(a,b,c)};
to.prototype.delete=function(a){a=void 0===a?{}:a;return so(this.name,a)};
function uo(a,b){return new Hn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vo(a,b){if(!b)throw Mn("openWithToken",yn(a.name));return a.open()}
to.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,y;return A(function(v){switch(v.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(v,2),v.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=v.i,F=c.options,K=[],N=w(Object.keys(F.xb)),S=N.next();!S.done;S=N.next()){S=S.value;var da=F.xb[S],sa=void 0===da.He?Number.MAX_VALUE:da.He;!(z.h.version>=da.Fb)||z.h.version>=sa||z.h.objectStoreNames.contains(S)||K.push(S)}k=K;if(0===k.length){v.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.A<Bl("ytidb_reopen_db_retries",0))return c.A++,h.close(),vn(new Hn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),v.return(a());if(!(c.l<Bl("ytidb_remake_db_retries",1))){v.B(6);break}c.l++;return v.yield(c.delete(),7);case 7:return vn(new Hn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),v.return(a());case 6:throw new In(n,l);case 5:return v.return(h);case 2:p=Ba(v);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){v.B(8);break}return v.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=v.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,uo(c,t);return v.return(r);case 8:throw b(),p instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ln(p,c.name,"",null!=(y=c.options.version)?y:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw uo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ff:b,upgrade:this.options.upgrade};return this.h=d=a()};var wo=new to("YtIdbMeta",{xb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&ao(a,"databases",{keyPath:"actualName"})}});
function xo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(vo(wo,b),2);c=d.i;return d.return($n(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wn(f.h.put(a,void 0)).then(function(){})})}))})}
function yo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(vo(wo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(vo(wo,b),2)):3!=e.h?(d=e.i,e.yield($n(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return ko(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return lo(g)})}),3)):e.return(c)})}
function Ao(a){return zo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Bo(a,b,c){return zo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Co(a){var b,c;return A(function(d){if(1==d.h)return b=Dm("YtIdbMeta hasAnyMeta other"),d.yield(zo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Do,Eo=new function(){}(new function(){});
function Fo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=nn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zn)f=/WebKit\/([0-9]+)/.exec(Jc()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jc()),f=!(f&&602<=parseInt(f[1],10)));if(f||Wc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(xo(d,Eo),4);case 4:return e.yield(yo("yt-idb-test-do-not-use",Eo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Go(){if(void 0!==Do)return Do;qn=!0;return Do=Fo().then(function(a){qn=!1;var b;if(null!=(b=mn())&&b.h){var c;b={hasSucceededOnce:(null==(c=nn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=mn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ho(){return E("ytglobal.idbToken_")||void 0}
function Io(){var a=Ho();return a?Promise.resolve(a):Go().then(function(b){(b=b?Eo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Jo=0;function Ko(a,b){Jo||(Jo=Qi.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Io(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Bo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(so(f.actualName),7);case 7:return h.yield(yo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),vn(g),d=!1;case 4:Qi.qa(Jo),Jo=0,d&&Ko(a,b),h.h=0}})}))}
function Lo(){var a;return A(function(b){return 1==b.h?b.yield(Io(),2):(a=b.i)?b.return(Co(a)):b.return(!1)})}
new zi;function Mo(a){if(!Cm())throw a=new Hn("AUTH_INVALID",{dbName:a}),vn(a),a;var b=Dm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function No(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Io(),2);case 2:g=n.i;if(!g)throw h=Mn("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vn(h),h;xn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mo(a);Aa(n,3);return n.yield(xo(k,g),5);case 5:return n.yield(ro(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(yo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Oo(a,b,c){c=void 0===c?{}:c;return No(a,b,!1,c)}
function Po(a,b,c){c=void 0===c?{}:c;return No(a,b,!0,c)}
function Qo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Io(),2);if(3!=e.h){c=e.i;if(!c)return e.return();xn(a);d=Mo(a);return e.yield(so(d.actualName,b),3)}return e.yield(yo(d.actualName,c),0)})}
function Ro(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(so(d.actualName,b),2):e.yield(yo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function So(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){b=d.i;if(!b)return d.return();xn("LogsDatabaseV2");return d.yield(Ao(b),3)}c=d.i;return d.yield(Ro(c,a,b),0)})}
function To(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){c=d.i;if(!c)return d.return();xn(a);return d.yield(so(a,b),3)}return d.yield(yo(a,c),0)})}
;function Uo(a,b){to.call(this,a,b);this.options=b;xn(a)}
x(Uo,to);function Vo(a,b){var c;return function(){c||(c=new Uo(a,b));return c}}
Uo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?Po:Oo)(a,b,Object.assign({},c))};
Uo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?To:Qo)(this.name,a)};
function Wo(a,b){return Vo(a,b)}
;var Xo={},Yo=Wo("ytGcfConfig",{xb:(Xo.coldConfigStore={Fb:1},Xo.hotConfigStore={Fb:1},Xo),shared:!1,upgrade:function(a,b){b(1)&&(io(ao(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),io(ao(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Zo(a){return vo(Yo(),a)}
function $o(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Zo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(co(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ap(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Zo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(co(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function bp(a){var b,c;return A(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield($n(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return oo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function cp(a){var b,c;return A(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield($n(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return oo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function dp(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(dp,G);dp.prototype.U=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.U.call(this)};function ep(){this.h=0;this.i=new dp}
function fp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:T("RAW_HOT_CONFIG_GROUP")}
function gp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Ho();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(cp(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield($o(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function hp(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ho())?c?h.B(4):h.yield(bp(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(ap(c,b,g,d),0)})}
function ip(){if(!ep.h){var a=new ep;ep.h=a}a=ep.h;var b=W()-a.h;if(!(0!==a.h&&b<Bl("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ep.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function jp(){return"INNERTUBE_API_KEY"in bl&&"INNERTUBE_API_VERSION"in bl}
function kp(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),ke:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),hd:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Lg:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),me:T("INNERTUBE_CONTEXT_HL"),le:T("INNERTUBE_CONTEXT_GL"),ne:T("INNERTUBE_HOST_OVERRIDE")||"",pe:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oe:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function lp(a){var b={client:{hl:a.me,gl:a.le,clientName:a.hd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ke}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Cl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.hd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=fm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Am())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&(a=Bm())&&
b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=ip())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(pl(T("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function mp(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Dg:(a=im(hm()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var np="undefined"!==typeof TextEncoder?new TextEncoder:null,op=np?function(a){return np.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function pp(a,b){this.version=a;this.args=b}
pp.prototype.serialize=function(){return{version:this.version,args:this.args}};function qp(a,b){this.topic=a;this.h=b}
qp.prototype.toString=function(){return this.topic};var rp=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Bb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",rp);var sp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",sp);var tp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",tp);var up=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",up);
D("ytPubsub2Pubsub2SkipSubKey",null);function vp(a,b){var c=wp();c&&c.publish.call(c,a.toString(),a,b)}
function xp(a){var b=yp,c=wp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(sp[d])try{if(f&&b instanceof qp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ed){var l=new h;h.Ed=l.version}var n=h.Ed}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var y=Array(t);for(k=0;k<t;k++)y[k]=r[k];var v=y}else v=[];f=p.call(n,h,v)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){hl(z)}},up[b.toString()]?E("yt.scheduler.instance")?Qi.pa(g):yl(g,0):g())});
sp[d]=!0;tp[b.toString()]||(tp[b.toString()]=[]);tp[b.toString()].push(d);return d}
function zp(){var a=Ap,b=xp(function(c){a.apply(void 0,arguments);Bp(b)});
return b}
function Bp(a){var b=wp();b&&("number"===typeof a&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete sp[c]}))}
function wp(){return E("ytPubsub2Pubsub2Instance")}
;function Cp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&vp("meta_logging_csi_event",{timerName:a,bh:b})}
;var Dp=void 0,Ep=void 0;function Fp(){Ep||(Ep=Ek(T("WORKER_SERIALIZATION_URL")));return Ep||void 0}
function Gp(){var a=Fp();Dp||void 0===a||(Dp=new Worker(kb(a),void 0));return Dp}
;var Hp=Bl("max_body_size_to_compress",5E5),Ip=Bl("min_body_size_to_compress",500),Jp=!0,Kp=0,Lp=0,Mp=Bl("compression_performance_threshold_lr",250),Np=Bl("slow_compressions_before_abandon_count",4),Op=!1,Pp=new Map,Qp=1,Rp=!0;function Sp(){if("function"===typeof Worker&&Fp()&&!Op){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Pp.get(c.key);d&&(Tp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Pp.delete(c.key))}},b=Gp();
b&&(b.addEventListener("message",a),b.onerror=function(){Pp.clear()},Op=!0)}}
function Up(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Jp)try{var g=Vp(b);if(null!=g&&(g>Hp||g<Ip))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!Rp||!U("initial_gzip_use_main_thread"))){Op||Sp();var h=Gp();if(h&&!e){Pp.set(Qp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Qp});Qp++;return}}var k=Dk(op(b));Tp(k,f,a,c,d)}}catch(l){il(l),d(a,c)}else d(a,c)}
function Tp(a,b,c,d,e){Rp=!1;var f=W();b.ticks.gelc=f;Lp++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Mp&&(Kp++,U("abandon_compression_after_N_slow_zips")?Lp===Bl("compression_disable_point")&&Kp>Np&&(Jp=!1):Jp=!1);Wp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Xp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Jp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Vp(g);if(null!=h&&(h>Hp||h<Ip))return a;c=b?{level:1}:void 0;f=Dk(op(g),c);var k=W();e.ticks.gelc=k;if(b){Lp++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Mp)if(Kp++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=Kp/Lp;var l=Np/Bl("compression_disable_point");0<Lp&&0===Lp%Bl("compression_disable_point")&&b>=l&&(Jp=!1)}else Jp=!1;Wp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return il(n),a}}else return a}
function Vp(a){try{return(new Blob(a.split(""))).size}catch(b){return il(b),null}}
function Wp(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Cp("gel_compression",a,{sampleRate:.1})}
;function Yp(a){a=Object.assign({},a);delete a.Authorization;var b=ph();if(b){var c=new Ui;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Ie(c.digest(),3)}return a}
;var Zp;function $p(){Zp||(Zp=new ln("yt.innertube"));return Zp}
function aq(a,b,c,d){if(d)return null;d=$p().get("nextId",!0)||1;var e=$p().get("requests",!0)||{};e[d]={method:a,request:b,authState:Yp(c),requestTime:Math.round(W())};$p().set("nextId",d+1,86400,!0);$p().set("requests",e,86400,!0);return d}
function bq(a){var b=$p().get("requests",!0)||{};delete b[a];$p().set("requests",b,86400,!0)}
function cq(a){var b=$p().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Yp(mp(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),dq(a,d.method,e,{}));delete b[c]}}$p().set("requests",b,86400,!0)}}
;function eq(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Ib=!1;var b;this.Bd=null!=(b=a.Bd)?b:100;var c;this.vd=null!=(c=a.vd)?c:1;var d;this.sd=null!=(d=a.sd)?d:2592E6;var e;this.qd=null!=(e=a.qd)?e:12E4;var f;this.ud=null!=(f=a.ud)?f:5E3;var g;this.X=null!=(g=a.X)?g:void 0;this.ec=!!a.ec;var h;this.cc=null!=(h=a.cc)?h:.1;var k;this.mc=null!=(k=a.mc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Ib&&(this.Ib=a.Ib);a.Yb&&(this.Yb=a.Yb);this.Y=a.Y;this.Da=a.Da;this.ha=a.ha;this.fa=a.fa;this.sendFn=a.sendFn;
this.Kc=a.Kc;this.Hc=a.Hc;fq(this)&&(!this.Y||this.Y("networkless_logging"))&&gq(this)}
function gq(a){fq(a)&&!a.Ib&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.ha.Qd(a.X),hq(a),a.fa.va()&&a.Tb(),a.fa.listen(a.Kc,a.Tb.bind(a)),a.fa.listen(a.Hc,a.Vc.bind(a)))}
m=eq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(d,this.X).then(function(e){d.id=e;c.fa.va()&&iq(c,d)}).catch(function(e){iq(c,d);
jq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ha.set(e,d.X).catch(function(l){jq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ha.set(e,this.X).catch(function(g){d.sendFn(a,b,e.skipRetry);
jq(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ha.ob(d.id,c.X):e=!0;c.fa.gb&&c.Y&&c.Y("vss_network_hint")&&c.fa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ha.set(d,this.X).then(function(g){d.id=g;e&&c.ha.ob(d.id,c.X)}).catch(function(g){jq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Tb=function(){var a=this;if(!fq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.pa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ha.dd("NEW",a.X),2);if(3!=c.h)return b=c.i,b?c.yield(iq(a,b),3):(a.Vc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Bd))};
m.Vc=function(){this.Da.qa(this.i);this.i=0};
function iq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!fq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.ha.te(b.id,a.X),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(kq(a,b,a.sd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.ha.ob(b.id,a.X),5);case 5:return d.return();case 4:b.skipRetry||(b=lq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.ha.ob(b.id,a.X),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function lq(a,b){if(!fq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=mq(f);(h=nq(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.B(2);break}if(!a.fa.pc){n.B(3);break}return n.yield(a.fa.pc(),3);case 3:if(a.fa.va()){n.B(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.ha.Lc(b.id,a.X,!1),6);case 6:return n.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.vd?n.yield(a.ha.Lc(b.id,a.X,!0,h?!1:void 0),12):n.yield(a.ha.ob(b.id,a.X),8);case 12:a.Da.pa(function(){a.fa.va()&&a.Tb()},a.ud);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.ha.ob(b.id,a.X),2);a.fa.gb&&a.Y&&a.Y("vss_network_hint")&&a.fa.gb(!0);d(e,f);h.h=0})};
return b}
function kq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function hq(a){if(!fq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.dd("QUEUED",a.X).then(function(b){b&&!kq(a,b,a.qd)?a.Da.pa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.ha.Lc(b.id,a.X),2);hq(a);c.h=0})}):a.fa.va()&&a.Tb()})}
function jq(a,b){a.Hd&&!a.fa.va()?a.Hd(b):a.handleError(b)}
function fq(a){return!!a.X||a.Yb}
function mq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function nq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var oq;
function pq(){if(oq)return oq();var a={};oq=Wo("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ao(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),io(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return oq()}
;function qq(a){return vo(pq(),a)}
function rq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(qq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(co(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();sq(c);return g.return(f)})}
function tq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(qq(b),2);if(3!=n.h)return d=n.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield($n(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(p){return oo(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();sq(c);return n.return(l)})}
function uq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(qq(b),2);c=d.i;return d.return($n(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function vq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(qq(b),2);e=f.i;return f.return($n(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Wn(h.h.put(k,void 0)).then(function(){return k})):Qn.resolve(void 0)})}))})}
function wq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(qq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function xq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(qq(a),2);b=d.i;c=W()-2592E6;return d.yield($n(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return ko(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lo(f)})})}),0)})}
function yq(){A(function(a){return a.yield(So(),0)})}
function sq(a){U("nwl_csi_killswitch")||Cp("networkless_performance",a,{sampleRate:1})}
;var zq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,
mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,
atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,
cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,
kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500};var Aq={},Bq=Wo("ServiceWorkerLogsDatabase",{xb:(Aq.SWHealthLog={Fb:1},Aq),shared:!0,upgrade:function(a,b){b(1)&&io(ao(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Cq(a){return vo(Bq(),a)}
function Dq(a){var b,c;A(function(d){if(1==d.h)return d.yield(Cq(a),2);b=d.i;c=W()-2592E6;return d.yield($n(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return ko(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lo(f)})})}),0)})}
function Eq(a){var b;return A(function(c){if(1==c.h)return c.yield(Cq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Fq={},Gq=0;function Hq(a){var b=new Image,c=""+Gq++;Fq[c]=b;b.onload=b.onerror=function(){delete Fq[c]};
b.src=a}
;var Iq;function Jq(){Iq||(Iq=new ln("yt.offline"));return Iq}
function Kq(a){if(U("offline_error_handling")){var b=Jq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jq().set("errors",b,2592E3,!0)}}
;function Lq(){this.h=new Map;this.i=!1}
function Mq(){if(!Lq.h){var a=E("yt.networkRequestMonitor.instance")||new Lq;D("yt.networkRequestMonitor.instance",a);Lq.h=a}return Lq.h}
Lq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Lq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Lq.prototype.removeParams=function(a){return a.split("?")[0]};
Lq.prototype.removeParams=Lq.prototype.removeParams;Lq.prototype.isEndpointCFR=Lq.prototype.isEndpointCFR;Lq.prototype.requestComplete=Lq.prototype.requestComplete;Lq.getInstance=Mq;function Nq(){wd.call(this);var a=this;this.j=!1;this.i=Pi();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=Jq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;hl(d)}Jq().set("errors",{},2592E3,!0)}}})}
x(Nq,wd);function Oq(){if(!Nq.h){var a=E("yt.networkStatusManager.instance")||new Nq;D("yt.networkStatusManager.instance",a);Nq.h=a}return Nq.h}
m=Nq.prototype;m.va=function(){return this.i.va()};
m.gb=function(a){this.i.i=a};
m.ee=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Vd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=Ni(this.i,a);a.then(function(b){U("use_cfr_monitor")&&Mq().requestComplete("generate_204",b)});
return a};
Nq.prototype.sendNetworkCheckRequest=Nq.prototype.pc;Nq.prototype.listen=Nq.prototype.listen;Nq.prototype.enableErrorFlushing=Nq.prototype.Vd;Nq.prototype.getWindowStatus=Nq.prototype.ee;Nq.prototype.networkStatusHint=Nq.prototype.gb;Nq.prototype.isNetworkAvailable=Nq.prototype.va;Nq.getInstance=Oq;function Pq(a){a=void 0===a?{}:a;wd.call(this);var b=this;this.i=this.m=0;this.j=Oq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Qq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){xd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){xd(b,"publicytnetworkstatus-offline")})))}
x(Pq,wd);Pq.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Pq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Pq.prototype.pc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&Mq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Qq(a,b){a.rateLimit?a.i?(Qi.qa(a.m),a.m=Qi.pa(function(){a.l!==b&&(xd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(xd(a,b),a.l=b,a.i=W()):xd(a,b)}
;var Rq;function Sq(){var a=eq.call;Rq||(Rq=new Pq({Qg:!0,Jg:!0}));a.call(eq,this,{ha:{Qd:xq,ob:wq,dd:tq,te:uq,Lc:vq,set:rq},fa:Rq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;il(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else hl(b)},
pb:il,sendFn:Tq,now:W,Hd:Kq,Da:kn(),Kc:"publicytnetworkstatus-online",Hc:"publicytnetworkstatus-offline",ec:!0,cc:.1,mc:Bl("potential_esf_error_limit",10),Y:U,Ib:!(Cm()&&Uq())});this.j=new zi;U("networkless_immediately_drop_all_requests")&&yq();To("LogsDatabaseV2")}
x(Sq,eq);function Vq(){var a=E("yt.networklessRequestController.instance");a||(a=new Sq,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&Io().then(function(b){a.X=b;gq(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.X&&Dq(a.X);U("networkless_immediately_drop_sw_health_store")&&Wq(a)}));
return a}
Sq.prototype.writeThenSend=function(a,b){b||(b={});b=Xq(a,b);Cm()||(this.h=!1);eq.prototype.writeThenSend.call(this,a,b)};
Sq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Xq(a,b);Cm()||(this.h=!1);eq.prototype.sendThenWrite.call(this,a,b,c)};
Sq.prototype.sendAndWrite=function(a,b){b||(b={});b=Xq(a,b);Cm()||(this.h=!1);eq.prototype.sendAndWrite.call(this,a,b)};
Sq.prototype.awaitInitialization=function(){return this.j.promise};
function Wq(a){var b;A(function(c){if(!a.X)throw b=Mn("clearSWHealthLogsDb"),b;return c.return(Eq(a.X).catch(function(d){a.handleError(d)}))})}
function Tq(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Yq(a,b);if(U("use_request_time_ms_header"))b.headers&&sl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Gl(a,void 0,"POST",f,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Gl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=mc(nc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(vc),r=uc(a,0,"ri",p);if(0>r)var t=null;else{var y=a.indexOf("&",r);if(0>y||y>p)y=p;t=decodeURIComponent(a.slice(r+3,-1!==y?y:0).replace(/\+/g," "))}n="1"!==t}var v=!n;break b}}catch(F){}v=!1}if(v){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(F){}z=!1}c=z?!0:!1}else c=
!1;c||Hq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Up(a,b.postBody,b,Kl,d)):Up(a,JSON.stringify(b.postParams),b,Jl,d):Kl(a,b)}
function Xq(a,b){U("use_event_time_ms_header")&&sl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Yq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mq().requestComplete(a,!0);d(e,f)}}
function Uq(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var Zq=!1,$q=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Zq};D("ytNetworklessLoggingInitializationOptions",$q);function ar(){var a;A(function(b){if(1==b.h)return b.yield(Io(),2);a=b.i;if(!a||!Cm()&&!U("nwl_init_require_datasync_id_killswitch")||!Uq())return b.B(0);Zq=!0;$q.isNwlInitialized=Zq;return b.yield(Vq().awaitInitialization(),0)})}
;function br(a){var b=this;this.config_=null;a?this.config_=a:jp()&&(this.config_=kp());Fm(function(){cq(b)},5E3)}
br.prototype.isReady=function(){!this.config_&&jp()&&(this.config_=kp());return!!this.config_};
function dq(a,b,c,d){function e(y){y=void 0===y?!1:y;var v;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(v=aq(b,c,l,k)),v)){var z=g.onSuccess,F=g.onFetchSuccess;g.onSuccess=function(S,da){bq(v);z(S,da)};
c.onFetchSuccess=function(S,da){bq(v);F(S,da)}}try{if(y&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Vq().writeThenSend(t,g):Vq().sendAndWrite(t,g);
else if(d.compress){var K=!d.networklessOptions.writeThenSend;if(g.postBody){var N=g.postBody;"string"!==typeof N&&(N=JSON.stringify(g.postBody));Up(t,N,g,Kl,K)}else Up(t,JSON.stringify(g.postParams),g,Jl,K)}else U("web_all_payloads_via_jspb")?Kl(t,g):Jl(t,g)}catch(S){if("InvalidAccessError"===S.name)v&&(bq(v),v=0),il(Error("An extension is blocking network request."));else throw S;}v&&Fm(function(){cq(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&il(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);hl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,v){if(d.onSuccess)d.onSuccess(v)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,v){if(d.onError)d.onError(v)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ne)&&(h=f);var k=a.config_.pe||!1,l=mp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.oe&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=rl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
$q.isNwlInitialized:Zq)?Go().then(function(y){e(y)}):e(!1)}
;var cr=0,dr=Yc?"webkit":Xc?"moz":Vc?"ms":Uc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++cr});var er={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in er||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function gr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
fr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var hr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",hr);
function ir(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function jr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ir(a,b,c,d);if(e)return e;e=++hr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new fr(h);if(!Hd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fr(h);
h.currentTarget=a;return c.call(a,h)};
g=gl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function lr(a){a&&("string"==typeof a&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var kr=Cd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function mr(a){this.F=a;this.h=null;this.l=0;this.v=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.W=jr(window,"mousemove",Xa(this.ba,this));a=Xa(this.K,this);"function"===typeof a&&(a=gl(a));this.da=window.setInterval(a,25)}
$a(mr,G);mr.prototype.ba=function(a){void 0===a.h&&gr(a);var b=a.h;void 0===a.i&&gr(a);this.h=new Dd(b,a.i)};
mr.prototype.K=function(){if(this.h){var a=W();if(0!=this.l){var b=this.v,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.F();this.m=d}this.l=a;this.v=this.h;this.j=(this.j+1)%4}};
mr.prototype.U=function(){window.clearInterval(this.da);lr(this.W)};var nr={};
function or(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.Wd?!0:b.Wd;if(null==E("_lact",window)){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&pr();jr(document,"keydown",pr);jr(document,"keyup",pr);jr(document,"mousedown",pr);jr(document,"mouseup",pr);a?jr(window,"touchmove",function(){qr("touchmove",200)},{passive:!0}):(jr(window,"resize",function(){qr("resize",200)}),b&&jr(window,"scroll",function(){qr("scroll",200)}));
new mr(function(){qr("mouse",100)});
jr(document,"touchstart",pr,{passive:!0});jr(document,"touchend",pr,{passive:!0})}}
function qr(a,b){nr[a]||(nr[a]=!0,Qi.pa(function(){pr();nr[a]=!1},b))}
function pr(){null==E("_lact",window)&&or();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function rr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var vr=C.ytPubsubPubsubInstance||new M,wr=C.ytPubsubPubsubSubscribedKeys||{},xr=C.ytPubsubPubsubTopicToKeys||{},yr=C.ytPubsubPubsubIsSynchronous||{};function zr(a,b){var c=Ar();if(c&&b){var d=c.subscribe(a,function(){function e(){wr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{yr[a]?e():yl(e,0)}catch(g){hl(g)}},void 0);
wr[d]=!0;xr[a]||(xr[a]=[]);xr[a].push(d);return d}return 0}
function Br(a){var b=Ar();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete wr[c]}))}
function Cr(a,b){var c=Ar();c&&c.publish.apply(c,arguments)}
function Dr(a){var b=Ar();if(b)if(b.clear(a),a)Er(a);else for(var c in xr)Er(c)}
function Ar(){return C.ytPubsubPubsubInstance}
function Er(a){xr[a]&&(a=xr[a],Db(a,function(b){wr[b]&&delete wr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Bb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",vr);D("ytPubsubPubsubTopicToKeys",xr);D("ytPubsubPubsubIsSynchronous",yr);D("ytPubsubPubsubSubscribedKeys",wr);var Fr=Symbol("injectionDeps");function Gr(a){this.name=a}
Gr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Hr(a){this.key=a}
function Ir(){this.i=new Map;this.j=new Map;this.h=new Map}
function Jr(a,b){a.i.set(b.oc,b);var c=a.j.get(b.oc);if(c)try{c.Xg(a.resolve(b.oc))}catch(d){c.Vg(d)}}
Ir.prototype.resolve=function(a){return a instanceof Hr?Kr(this,a.key,[],!0):Kr(this,a,[])};
function Kr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Dd)var e=d.Dd;else if(d.nf)e=d[Fr]?Lr(a,d[Fr],c):[],e=d.nf.apply(d,la(e));else if(d.Cd){e=d.Cd;var f=e[Fr]?Lr(a,e[Fr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ah||a.h.set(b,e);return e}
function Lr(a,b,c){return b?b.map(function(d){return d instanceof Hr?Kr(a,d.key,c,!0):Kr(a,d,c)}):[]}
;var Mr;function Nr(){Mr||(Mr=new Ir);return Mr}
;var Or=window;function Pr(){var a,b;return"h5vcc"in Or&&(null==(a=Or.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Or.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Or&&Or.performance.mark&&Or.performance.measure?2:0}
function Qr(a){var b=Pr();switch(b){case 1:Or.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Or.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function Rr(a){var b=Pr();switch(b){case 1:Or.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Or.performance.mark(c);Or.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var Sr=U("web_enable_lifecycle_monitoring")&&0!==Pr(),Tr=U("web_enable_lifecycle_monitoring");function Ur(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?kn():d;this.j=c;this.scheduler=d;this.i=new zi;this.h=a;for(a={cb:0};a.cb<this.h.length;a={lc:void 0,cb:a.cb},a.cb++)a.lc=this.h[a.cb],c=function(e){return function(){e.lc.Ac();b.h[e.cb].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.i.resolve()}}(a),d=this.getPriority(a.lc),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.lc,{Ac:c,
jobId:d})}
function Vr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.scheduler.qa(c.jobId),a.scheduler.ab(c.Ac,10))}
Ur.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.scheduler.qa(b.jobId),b.nc=!0;this.i.resolve()};
Ur.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Wr(a){this.state=a;this.plugins=[];this.l=void 0;this.v={};Sr&&Qr(this.state)}
m=Wr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Sr&&Rr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Vr(this.j),this.j=void 0);Xr(this,a,b);this.state=a;Sr&&Qr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Yr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Yr(a,b){var c=b.filter(function(e){return 10===Zr(a,e)}),d=b.filter(function(e){return 10!==Zr(a,e)});
return a.v.Zg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ke.apply(a,[c].concat(la(e))),2);a.yd.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Le.apply(a,[c].concat(la(e)));a.yd.apply(a,[d].concat(la(e)))}}
m.Le=function(a){for(var b=B.apply(1,arguments),c=kn(),d=w(a),e=d.next(),f={};!e.done;f={Lb:void 0},e=d.next())f.Lb=e.value,c.Db(function(g){return function(){$r(g.Lb.name);g.Lb.callback.apply(g.Lb,la(b));as(g.Lb.name)}}(f))};
m.Ke=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=kn(),d=w(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Wb=void 0;g=function(k){return function(){$r(k.tb.name);var l=k.tb.callback.apply(k.tb,la(b));"function"===typeof(null==l?void 0:l.then)?k.Wb=l.then(function(){as(k.tb.name)}):as(k.tb.name)}}(f);
c.Db(g);return f.Wb?h.yield(f.Wb,3):h.B(3)}f={tb:void 0,Wb:void 0};e=d.next();return h.B(2)})};
m.yd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ac:function(){$r(e.name);e.callback.apply(e,la(b));as(e.name)},
priority:Zr(c,e)}});
d.length&&(this.j=new Ur(d))};
function Zr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function $r(a){Sr&&a&&Qr(a)}
function as(a){Sr&&a&&Rr(a)}
function Xr(a,b,c){Tr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Wr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function bs(a){Wr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.A},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var cs;x(bs,Wr);bs.prototype.i=function(a,b){var c=this;this.h=Fm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
bs.prototype.A=function(a,b){this.h&&(Qi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function ds(){cs||(cs=new bs);return cs}
;var es=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return es});function gs(){this.store={};this.h={}}
gs.prototype.storePayload=function(a,b){a=hs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
gs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=is(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
gs.prototype.extractMatchingEntries=function(a){a=is(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
gs.prototype.getSequenceCount=function(a){a=is(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function is(a,b){var c=hs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&hs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(js(b.auth,g[0])){var h=b.isJspb;js(void 0===h?"undefined":h?"true":"false",g[1])&&js(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),js(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function js(a,b){return void 0===a||"undefined"===a?!0:a===b}
gs.prototype.getSequenceCount=gs.prototype.getSequenceCount;gs.prototype.extractMatchingEntries=gs.prototype.extractMatchingEntries;gs.prototype.smartExtractMatchingEntries=gs.prototype.smartExtractMatchingEntries;gs.prototype.storePayload=gs.prototype.storePayload;function hs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function ks(a,b){if(a)return a[b.name]}
;var ls=Bl("initial_gel_batch_timeout",2E3),ms=Bl("gel_queue_timeout_max_ms",6E4),ns=Math.pow(2,16)-1,ps=Bl("gel_min_batch_size",5),qs=void 0;function rs(){this.l=this.h=this.i=0;this.j=!1}
var ss=new rs,ts=new rs,us=new rs,vs=new rs,ws,xs=!0,ys=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ys);var zs={};function As(){var a=E("yt.logging.ims");a||(a=new gs,D("yt.logging.ims",a));return a}
function Bs(a,b){if("log_event"===a.endpoint){Cs();var c=Ds(a),d=Es(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=zq[d||""];var f,g,h,k=null==Nr().resolve(new Hr(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;k=Fs(e.tier);if(400===k){Gs(a,b);return}}zs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};As().storePayload(e,a.payload);Hs(b,c,e,"gelDebuggingEvent"===d)}}
function Hs(a,b,c,d){function e(){Is({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(qs=new a);a=Bl("tvhtml5_logging_max_batch_ads_fork")||Bl("web_logging_max_batch")||100;var g=W(),h=Js(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=As().getSequenceCount(c));1E3<=d?e():d>=a?ws||(ws=Ks(function(){e();ws=void 0},0)):10<=g-k&&(Ls(f,c.tier),h.l=g)}
function Gs(a,b){if("log_event"===a.endpoint){Cs();var c=Ds(a),d=new Map;d.set(c,[a.payload]);var e=Es(a.payload)||"";b&&(qs=new b);return new Ud(function(f,g){qs&&qs.isReady()?Ms(d,qs,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Ds(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ys[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Is(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ud(function(e,f){var g=Js(c,d),h=g.j;g.j=!1;Ns(g.i);Ns(g.h);g.h=0;qs&&qs.isReady()?void 0===d&&U("enable_web_tiered_gel")?Os(e,f,a,b,c,300,h):Os(e,f,a,b,c,d,h):(Ls(c,d),e())})}
function Os(a,b,c,d,e,f,g){var h=qs;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=U("enable_web_tiered_gel")?As().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):As().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(zs)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?As().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):As().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete zs[l];Ms(k,h,a,b,c,!1,g)}
function Ls(a,b){function c(){Is({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Js(a,b),e=d===vs||d===us?5E3:ms;U("web_gel_timeout_cap")&&!d.h&&(e=Ks(function(){c()},e),d.h=e);
Ns(d.i);e=T("LOGGING_BATCH_TIMEOUT",Bl("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&xs&&(e=ls);e=Ks(function(){0<Bl("gel_min_batch_size")?As().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ps&&c():c()},e);
d.i=e}
function Ms(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={Gc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Jc:void 0,Ic:void 0},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Sb({context:lp(b.config_||kp())});if(!Qa(p)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=ys[n])&&
Ps(g.batchRequest,n,p);delete ys[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Qs(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Jc=function(r){U("start_client_gcf")&&Qi.pa(function(){return A(function(t){return t.yield(Rs(r),0)})});
k--;k||c()};
g.Gc=0;g.Ic=function(r){return function(){r.Gc++;if(e.bypassNetworkless&&1===r.Gc)try{dq(b,l,r.batchRequest,Ss({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Jc,r.Ic,f)),xs=!1}catch(t){hl(t),d()}k--;k||c()}}(g);
try{dq(b,l,g.batchRequest,Ss(e,g.dangerousLogToVisitorSession,g.Jc,g.Ic,f)),xs=!1}catch(r){hl(r),d()}}}
function Ss(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Fg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Ts()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Qs(a,b,c){Ts()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ns/2)),c++,c>ns&&(c=1),cl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ps(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Cs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Al("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(es=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",es),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ts(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Ks(a,b){return!1===U("transport_use_scheduler")?yl(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Fm(function(){if("none"===ds().currentState)a();else{var c={};ds().install((c.none={callback:a},c))}},b):Fm(a,b)}
function Ns(a){U("transport_use_scheduler")?Qi.qa(a):window.clearTimeout(a)}
function Rs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=ks(d,Ik),g=null==(f=d)?void 0:f.hotHashData,h=ks(d,Hk),l=null==(k=d)?void 0:k.coldHashData,(n=Nr().resolve(new Hr(ep)))?g?e?p.yield(gp(n,g,e),2):p.yield(gp(n,g),2):p.B(2):p.return()):l?h?p.yield(hp(n,l,h),0):p.yield(hp(n,l),0):p.B(0)})}
function Js(a,b){b=void 0===b?200:b;return a?300===b?vs:ts:300===b?us:ss}
function Es(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,zq[b])return b}
function Fs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Us=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Us);
function Vs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=rr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Us[b]=b in Us?Us[b]+1:0,a.sequence={index:Us[b],groupKey:b},d.endOfSequence&&delete Us[d.sequenceGroup]);(d.sendIsolatedPayload?Gs:Bs)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function un(a,b,c){c=void 0===c?{}:c;var d=br;T("ytLoggingEventsDefaultDisabled",!1)&&br===br&&(d=null);U("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=rr(),c.timestamp=W());Vs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ws=new Set,Xs=0,Ys=0,Zs=0,$s=[],at=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tn(a){bt(a)}
function ct(a){bt(a,"WARNING")}
function dt(a){a instanceof Error?bt(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",ct(a))}
function bt(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Xs))){d=$s;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=bm(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var y="params."+r,v=dm(t[r]);c[y]=v;p+=y.length+v.length;if(500<p)break}}else c.params=dm(t)}if(d.length)for(r=0;r<d.length&&!(p=bm(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Yl();c=w(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Rg)){a=d.weight;break a}a=w(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=w(Tl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.kc[r.name])for(e=w(c.kc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ec(f);break}r.params||(r.params={});a=Yl();r.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Ws.has(r.message)){if(g&&U("web_enable_error_204"))et(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Zl.Ya("handleError",r),U("record_app_crashed_web")&&0===Zs&&1===r.sampleWeight&&(Zs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),un("appCrashed",g)),Ys++):"WARNING"===b&&Zl.Ya("handleWarning",r);if(U("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=w(at);for(c=a.next();!c.done;c=a.next())if(An(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!dl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(un("clientError",h),("ERROR"===g||U("errors_flush_gel_always_killswitch"))&&Is(void 0,void 0,!1))}U("suppress_error_204_logging")||et(b,r)}try{Ws.add(r.message)}catch(z){}Xs++}}}
function et(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Kl(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ft(){this.register=new Map}
function gt(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ug("ABORTED")}
ft.prototype.clear=function(){gt(this);this.register.clear()};
var ht=new ft;var jt=Date.now().toString();
function kt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(jt)for(a=1,b=0;b<jt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^jt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var lt,mt=C.ytLoggingDocDocumentNonce_;mt||(mt=kt(),D("ytLoggingDocDocumentNonce_",mt));lt=mt;function nt(a){this.h=a}
m=nt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Pk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&J(a,2,Nf(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,Nf(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,Nf(this.h.elementIndex)),this.h.isCounterfactual&&J(a,5,Jf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Hg(a,Pk,7,b)}void 0!==this.h.youtubeData&&Hg(a,Jk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ot(a){return T("client-screen-nonce-store",{})[void 0===a?0:a]}
function pt(a,b){b=void 0===b?0:b;var c=T("client-screen-nonce-store");c||(c={},cl("client-screen-nonce-store",c));c[b]=a}
function qt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function rt(a){return T(qt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",rt);function st(){var a=T("csn-to-ctt-auth-info");a||(a={},cl("csn-to-ctt-auth-info",a));return a}
function tt(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function ut(a){a=ot(void 0===a?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",ut);function vt(a,b,c){var d=st();(c=ut(c))&&delete d[c];b&&(d[a]=b)}
function wt(a){return st()[a]}
D("yt_logging_screen.getCttAuthInfo",wt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ot(c)||b!==T(qt(c)))if(vt(a,d,c),pt(a,c),cl(qt(c),b),b=function(){setTimeout(function(){a&&un("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:lt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function xt(){var a=Rb(zt),b;return(new Ud(function(c,d){a.onSuccess=function(e){xl(e)?c(new At(e)):d(new Bt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Bt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Bt("Request timed out","net.timeout",e))};
b=Kl("//googleads.g.doubleclick.net/pagead/id",a)})).qc(function(c){if(c instanceof ae){var d;
null==(d=b)||d.abort()}return Zd(c)})}
function Bt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(Bt,bb);function At(a){this.xhr=a}
;function Ct(){this.h=0;this.i=null}
Ct.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Dt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Et(a):this};
Ct.prototype.getValue=function(){return this.i};
Ct.prototype.isRejected=function(){return 2==this.h};
Ct.prototype.$goog_Thenable=!0;function Et(a){var b=new Ct;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Dt(a){var b=new Ct;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Ft(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:sl(a)?"same-origin":"cors",credentials:sl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Gt(){return nh()||(De||Ee)&&An("applewebkit")&&!An("version")&&(!An("safari")||An("gsa/"))||Zc&&An("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function Ht(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Nk)if(Nk[d]==c.embeddedPlayerMode){b=Nk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function It(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Jt;this.isTimeout=a instanceof Bt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ae}
x(It,bb);It.prototype.name="BiscottiError";function Jt(){bb.call(this,"Biscotti ID is missing from server")}
x(Jt,bb);Jt.prototype.name="BiscottiMissingError";var zt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Kt=null;function Lt(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Gt())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if("1"==Pb(a))return Error("Biscotti ID is not available in private embed mode");if(Ht(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Wk(){var a=Lt();if(void 0!==a)return Zd(a);Kt||(Kt=xt().then(Mt).qc(function(b){return Nt(2,b)}));
return Kt}
function Mt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Jt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Jt;a=a.id;Xk(a);Kt=Dt(a);Ot(18E5,2);return a}
function Nt(a,b){b=new It(b);Xk("");Kt=Et(b);0<a&&Ot(12E4,a-1);throw b;}
function Ot(a,b){yl(function(){xt().then(Mt,function(c){return Nt(b,c)}).qc(Bd)},a)}
function Pt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Wk()}catch(b){return Zd(b)}}
;var Bb=ja(["data-"]);function Qt(a){a&&(a.dataset?a.dataset[Rt()]="true":Wb(a))}
function St(a){return a?a.dataset?a.dataset[Rt()]:a.getAttribute("data-loaded"):null}
var Tt={};function Rt(){return Tt.loaded||(Tt.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Ut(a,b,c){G.call(this);var d=this;c=c||T("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.v=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.v)}
x(Ut,G);Ut.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){il(d)}}};
Ut.prototype.U=function(){window.removeEventListener("message",this.v);G.prototype.U.call(this)};function Vt(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Vt.prototype.clone=function(){var a=new Vt,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Rb(c):a[b]=c}return a};var Wt=["share/get_web_player_share_panel"],Xt=["feedback"],Yt=["notification/modify_channel_preference"],Zt=["browse/edit_playlist"],$t=["subscription/subscribe"],au=["subscription/unsubscribe"];var bu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",bu);function cu(a){Yk(bu,arguments)}
;function du(a,b,c){eu(a,b,void 0===c?null:c)}
function fu(a){a=gu(a);var b=document.getElementById(a);b&&(Dr(a),b.parentNode.removeChild(b))}
function hu(a,b){a&&b&&(a=""+Sa(b),(a=iu[a])&&Br(a))}
function eu(a,b,c){c=void 0===c?null:c;var d=gu(a),e=document.getElementById(d),f=e&&St(e),g=e&&!f;f?b&&b():(b&&(f=zr(d,b),b=""+Sa(b),iu[b]=f),g||(e=ju(a,d,function(){St(e)||(Qt(e),Cr(d),yl(function(){Dr(d)},0))},c)))}
function ju(a,b,c,d){d=void 0===d?null:d;var e=Gd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,Fk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function gu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var iu={};function ku(a){var b=lu(a),c=document.getElementById(b),d=c&&St(c);d||c&&!d||(c=mu(a,b,function(){if(!St(c)){Qt(c);Cr(b);var e=Ya(Dr,b);yl(e,0)}}))}
function mu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Fk(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function lu(a){var b=Gd("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function nu(a){var b=B.apply(1,arguments);if(!ou(a)||b.some(function(d){return!ou(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())pu(a,c.value)}
function pu(a,b){for(var c in b)if(ou(b[c])){if(c in a&&!ou(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});pu(a[c],b[c])}else if(qu(b[c])){if(c in a&&!qu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ru(a[c],b[c])}else a[c]=b[c];return a}
function ru(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ou(c)?a.push(pu({},c)):qu(c)?a.push(ru([],c)):a.push(c);return a}
function ou(a){return"object"===typeof a&&!Array.isArray(a)}
function qu(a){return"object"===typeof a&&Array.isArray(a)}
;function su(a){a=void 0===a?!1:a;G.call(this);this.h=new M(a);Ec(this,this.h)}
$a(su,G);su.prototype.subscribe=function(a,b,c){return this.V?0:this.h.subscribe(a,b,c)};
su.prototype.unsubscribe=function(a,b,c){return this.V?!1:this.h.unsubscribe(a,b,c)};
su.prototype.l=function(a,b){this.V||this.h.Ya.apply(this.h,arguments)};var tu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function uu(a,b){var c=void 0===c?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(0<=Cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ut()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&vu(a,b,f)}else vu(a,b)}
function vu(a,b,c){a=wu(a);b=b?sc(b):"";c=c||5;Gt()&&km(a,b,c)}
function wu(a){for(var b=w(tu),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function xu(a){pp.call(this,1,arguments);this.csn=a}
x(xu,pp);var yp=new qp("screen-created",xu),yu=[],zu=0,Au=new Map,Bu=new Map,Cu=new Map;
function Du(a,b,c,d,e){e=void 0===e?!1:e;for(var f=Eu({cttAuthInfo:wt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&ct(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=Fu(h,b);if(k.veType&&!Bu.has(l)&&!Cu.has(l)&&!e){if(!U("il_attach_cache_limit")||1E3>Au.size){Au.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&1E3<Au.size&&ct(new V("IL Attach cache exceeded limit"))}h=Fu(c,b);Au.has(h)?
Gu(c,b):Cu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Hu("visualElementAttached",f,c):a?Vs("visualElementAttached",c,a,f):un("visualElementAttached",c,f)}
function Hu(a,b,c){yu.push({Ce:a,payload:c,Ng:void 0,options:b});zu||(zu=zp())}
function Ap(a){if(yu){for(var b=w(yu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,un(c.Ce,c.payload,c.options));yu.length=0}zu=0}
function Fu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Gu(a,b){a=Fu(a,b);Au.has(a)&&(b=Au.get(a)||[],Du(b[0],b[1],b[2],[b[3]],!0),Au.delete(a))}
function Eu(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Iu(){try{return!!self.localStorage}catch(a){return!1}}
;function Ju(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ku(a){if(Iu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ju(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Lu(){if(!Iu())return!1;var a=Dm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Ju(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Mu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return("WEB"===T("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===T("INNERTUBE_CLIENT_NAME"))&&a}
function Nu(a){if(T("LOGGED_IN",!0)&&Mu()){var b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);0<=Cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=pc(a),(b=qc(b))?(b=wu(b),b=(b=lm(b)||null)?pl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Mu()?(d||(d=T("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&uu(a,b)}}
;function Ou(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&uu(a,b);if(c)return!1;Nu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=tc(a,e);Nu(a);f=a+f;var h=void 0===h?wb:h;a:if(h=void 0===h?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.qe(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);void 0!==h&&(g.href=h);return!0}
;function Pu(a){if("1"!=Pb(T("PLAYER_VARS",{}))){a&&Vk();try{Pt().then(function(){},function(){}),yl(Pu,18E5)}catch(b){hl(b)}}}
;var Qu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ru(){var a=void 0===a?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=ql(a).theme;return Qu.get(b)||null}catch(c){}return null}
;function Su(){this.h={};if(this.i=nm()){var a=lm("CONSISTENCY");a&&Tu(this,{encryptedTokenJarContents:a})}}
Su.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Tu(this,a)}};
function Tu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&km("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Uu=window.location.hostname.split(".").slice(-2).join(".");function Vu(){var a=T("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===T("INNERTUBE_CLIENT_NAME")&&(this.h=Wu(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Xu;function Yu(){Xu=E("yt.clientLocationService.instance");Xu||(Xu=new Vu,D("yt.clientLocationService.instance",Xu));return Xu}
m=Vu.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===T("INNERTUBE_CLIENT_NAME")?(this.h=Wu(this))&&this.h.set("yt-location-playability-token",a,15552E3):km("YT_CL",JSON.stringify({loctok:a}),15552E3,Uu,!0))};
function Wu(a){return void 0===a.h?new ln("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Wu(this))&&this.h.remove("yt-location-playability-token"):mm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===T("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Zu(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);T("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=T("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function $u(){this.h={}}
$u.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
$u.prototype.get=function(a){if(this.contains(a))return this.h[a]};
$u.prototype.set=function(a,b){this.h[a]=b};
$u.prototype.remove=function(a){delete this.h[a]};function av(){this.mappings=new $u}
av.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
av.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new av;function bv(a){return function(){return new a}}
;var cv={},dv=(cv.WEB_UNPLUGGED="^unplugged/",cv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",cv.WEB_UNPLUGGED_OPS="^unplugged/",cv.WEB_UNPLUGGED_PUBLIC="^unplugged/",cv.WEB_CREATOR="^creator/",cv.WEB_KIDS="^kids/",cv.WEB_EXPERIMENTS="^experiments/",cv.WEB_MUSIC="^music/",cv.WEB_REMIX="^music/",cv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",cv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",cv);
function ev(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=dv[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(dv).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function fv(){}
fv.prototype.A=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?jm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=T("INNERTUBE_CONTEXT");if(g){g=Sb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;rm();var l="USER_INTERFACE_THEME_LIGHT";um(165)?l="USER_INTERFACE_THEME_DARK":um(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Ru()||l;h.userInterfaceTheme=k;if(!f){if(k=Am())h.connectionType=k;U("web_log_effective_connection_type")&&(k=Bm())&&(g.client.effectiveConnectionType=k)}var n;if(U("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}U("web_gcf_hashes_innertube")&&(k=ip())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},p&&(g.client.configInfo.coldConfigData=
p),n&&(g.client.configInfo.coldHashData=n),k&&(g.client.configInfo.hotHashData=k));p=ql(C.location.href);!U("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&em.h&&(p=em.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=fm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!U("web_lr_app_quality_killswitch")&&(p=T("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=
void 0}r&&(h.timeZone=r)}(r=T("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Cl();Su.h||(Su.h=new Su);h=Su.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!U("web_prequest_context_killswitch")&&(t=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=rm();t=um(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=ut())&&(g.clientScreenNonce=f):!f&&(f=ut())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Yu().setLocationOnInnerTubeContext(g);try{var y=tl(),v=y.bid;delete y.bid;g.adSignalsInfo={params:[],bid:v};var z=w(Object.entries(y));for(var F=z.next();!F.done;F=z.next()){var K=w(F.value),N=K.next().value,S=K.next().value;y=N;v=S;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+
v})}var da;if(U("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var sa=T("INNERTUBE_CONTEXT");sa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=sa.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=sa.adSignalsInfo.limitAdTracking)}}catch(ea){bt(ea)}z=g}else bt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(F=this.i(a)){this.h(z,F,b);var P;
b="/youtubei/v1/"+ev(this.j());(F=null==(P=ks(a.commandMetadata,Lk))?void 0:P.apiUrl)&&(b=F);P=b;(b=T("INNERTUBE_HOST_OVERRIDE"))&&(P=String(b)+String(pc(P)));b={};U("web_api_key_killswitch")&&(b.key=T("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");P=rl(P,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:P,ib:Ft(P),Oa:z,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}bt(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(fv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function gv(){}
x(gv,fv);function hv(){}
x(hv,gv);hv.prototype.A=function(){return{input:"/getDatasyncIdsEndpoint",ib:Ft("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
hv.prototype.j=function(){return[]};
hv.prototype.i=function(){};
hv.prototype.h=function(){};var iv={},jv=(iv.GET_DATASYNC_IDS=bv(hv),iv);function kv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function lv(){var a=kv();a.info||(a.info={});return a.info}
function mv(a){a=kv(a);a.metadata||(a.metadata={});return a.metadata}
function nv(a){a=kv(a);a.tick||(a.tick={});return a.tick}
function ov(a){a=kv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pv(a){a=ov(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function qv(a){var b=kv(a).nonce;b||(b=kt(),kv(a).nonce=b);return b}
;function rv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function sv(a){a=a||"";var b=E("ytcsi.reference");b||(rv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=rv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},tv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings=
"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",
X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function uv(a,b){pp.call(this,1,arguments);this.timer=b}
x(uv,pp);var vv=new qp("aft-recorded",uv);var wv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",wv);function xv(){this.h=0}
function yv(){xv.h||(xv.h=new xv);return xv.h}
xv.prototype.tick=function(a,b,c,d){zv(this,"tick_"+a+"_"+b)||un("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
xv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");zv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,un("latencyActionInfo",a,{cttAuthInfo:c}))};
xv.prototype.jspbInfo=function(){};
xv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");zv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,un("latencyActionSpan",a,{cttAuthInfo:c}))};
function zv(a,b){wv[b]=wv[b]||{count:0};var c=wv[b];c.count++;c.time=W();a.h||(a.h=Fm(function(){var d=W(),e;for(e in wv)wv[e]&&6E4<d-wv[e].time&&delete wv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ct(c)),!0):!1}
;var Av=window;function Bv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Cv(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Dv(e.requestStart),e.responseEnd=Dv(e.responseEnd),e.redirectStart=Dv(e.redirectStart),e.redirectEnd=Dv(e.redirectEnd),e.domainLookupEnd=Dv(e.domainLookupEnd),e.connectStart=Dv(e.connectStart),e.connectEnd=
Dv(e.connectEnd),e.responseStart=Dv(e.responseStart),e.secureConnectionStart=Dv(e.secureConnectionStart),e.domainLookupStart=Dv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Dv(a){return Math.round(Ev()+a)}
function Ev(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Av.performance||Av.mozPerformance||Av.msPerformance||Av.webkitPerformance||new Bv;var Fv=!1,Gv=!1,Hv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Bd,Y);function Iv(a,b){if(!U("web_csi_action_sampling_enabled")||!kv(b).actionDisabled){var c=sv(b||"");nu(c.info,a);a.loadType&&(c=a.loadType,mv(b).loadType=c);nu(pv(b),a);c=qv(b);b=kv(b).cttAuthInfo;yv().info(a,c,b)}}
function Jv(){var a,b,c,d;return(null!=(d=null==Nr().resolve(new Hr(ep))?void 0:null==(a=fp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!kv(c).actionDisabled){var d=qv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(null==Nr().resolve(new Hr(ep))?0:fp())&&!Gv&&(Gv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Nr().resolve(new Hr(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Jv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;kv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Iv(f,c));kv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if("_"!==a[0]&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),void 0===f||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f-=Y.timeOrigin||Y.timing.navigationStart;try{Y.mark(e,{startTime:f})}catch(k){}}e=sv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=
e.next())f=f.value,f();e=ov(c);e.gelTicks&&(e.gelTicks[a]=!0);f=nv(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=kv(c).cttAuthInfo;"_start"===a?(a=yv(),zv(a,"baseline_"+d)||un("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):yv().tick(a,d,b,f);Kv(c);return e}}}
function Lv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=dr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Mv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(T("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Nv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ev(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ov(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Dv(b.startTime)),Z("wffe",Dv(b.responseEnd)))}
function Pv(a){var b=Qv("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Qv(b[d],a);if(e)return e}return NaN}
function Qv(a,b){if(a=nv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Kv(a){var b=Qv("_start",a),c=Pv(a),d=U("enable_cow_info_csi")||!Fv;b&&c&&d&&(vp(vv,new uv(Math.round(c-b),a)),Fv=!0)}
function Rv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return"first-paint"===b.name}))return Dv(a.startTime)}a=Y.timing;
return a.ye?Math.max(0,a.ye):0}
;function Sv(a,b){gl(function(){sv("").info.actionType=a;b&&cl("TIMING_AFT_KEYS",b);cl("TIMING_ACTION",a);var c=Mv();0<Object.keys(c).length&&Iv(c);c={isNavigation:!0,actionType:tv[T("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=T("PREVIOUS_ACTION");d&&(c.previousAction=tv[d]||"LATENCY_ACTION_UNKNOWN");if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=ut())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Lv();if(1===d||-1===d)c.isVisible=!0;mv();lv();
c.loadType="cold";d=lv();var e=Cv(),f=Ev(),g=T("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Rv();0<d&&Z("fpt",d);d=Cv();d.isPerformanceNavigationTiming&&Iv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Ev()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ov();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Hv)Hv.hasOwnProperty(h)&&(e=Hv[h],
Nv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Iv(c);c=ov();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=pv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===mv().loadType&&("cold"===c.loadType||"cold"===d)){d=nv();e=ov();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Qv(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,nu(c,d),nu(k,d),d=!0;d&&Iv(k)}D("ytglobal.timingready_",!0);k=T("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Tv()&&Pv()&&Kv()})()}
function Tv(){return gl(function(){return Uv()})()}
function Vv(a,b,c){gl(Iv)(a,b,void 0===c?!1:c)}
function Wv(a,b,c){return gl(Z)(a,b,c)}
function Uv(){return gl(function(){return"_start"in nv()})()}
function Xv(){gl(function(){var a=qv();requestAnimationFrame(function(){setTimeout(function(){a===qv()&&Wv("ol",void 0,void 0)},0)})})()}
var Yv=window;Yv.ytcsi&&(Yv.ytcsi.infoGel=Vv,Yv.ytcsi.tick=Wv);var Zv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),$v=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function aw(a,b,c,d){this.A=a;this.fa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Sb||(a.Sb={});a.Sb=Object.assign({},jv,a.Sb)}
function bw(a,b,c,d){if(void 0!==aw.h){if(d=aw.h,a=[a!==d.A,b!==d.fa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else aw.h=new aw(a,b,c,d)}
function cw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?jm:c;var d=dw(a,b);return d?new Ud(function(e,f){var g,h,k,l,n;return A(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.A(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.B(0);break}Nu(h.input);l="cors"===(null==(k=h.ib)?void 0:k.mode)?"cors":void 0;if(a.l.ef){var r=h.config,t;r=null==r?void 0:null==(t=r.Xb)?void 0:t.sessionIndex;t=im(0,{sessionIndex:r});n=Object.assign({},
Zu(l),t);p.B(4);break}return p.yield(ew(h.config,l),5);case 5:n=p.i;case 4:e(fw(a,h,n)),p.h=0}})}):Zd(new V("Error: No request builder found for command.",b))}
function gw(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=w(Zv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function fw(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,y,v,z,F,K,N,S,da,sa,P,ea,na,La,Ka,Pg,Qg,sr,tr,ur;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Oa)?0:g.context)){ha.B(4);break}h=b.Oa.context;ha.B(5);break;case 5:k=w([]),l=k.next();case 7:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.Tg(h),8);case 8:l=k.next();ha.B(7);break;case 4:if(null==(p=a.i)||!p.Yg(b.input,b.Oa)){ha.B(11);break}return ha.yield(a.i.Pg(b.input,
b.Oa),12);case 12:return r=ha.i,U("kevlar_process_local_innertube_responses_killswitch")||gw(a,r,b),ha.return(r);case 11:return(v=null==(y=b.config)?void 0:y.Wg)&&a.h.has(v)?t=a.h.get(v):(z=JSON.stringify(b.Oa),N=null!=(K=null==(F=b.ib)?void 0:F.headers)?K:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},N,c)}),S=Object.assign({},b.ib),"POST"===b.ib.method&&(S=Object.assign({},S,{body:z})),(null==(da=b.config)?0:da.Ie)&&Wv(b.config.Ie),sa=function(){return a.fa.fetch(b.input,S,b.config)},t=
sa(),v&&a.h.set(v,t)),ha.yield(t,13);
case 13:if((P=ha.i)&&"error"in P&&(null==(ea=P)?0:null==(na=ea.error)?0:na.details))for(La=P.error.details,Ka=w(La),Pg=Ka.next();!Pg.done;Pg=Ka.next())Qg=Pg.value,(sr=Qg["@type"])&&-1<$v.indexOf(sr)&&(delete Qg["@type"],P=Qg);v&&a.h.has(v)&&a.h.delete(v);(null==(tr=b.config)?0:tr.Je)&&Wv(b.config.Je);if(P||null==(ur=a.i)||!ur.Hg(b.input,b.Oa)){ha.B(14);break}return ha.yield(a.i.Og(b.input,b.Oa),15);case 15:P=ha.i;case 14:return gw(a,P,b),d(),ha.return(P||void 0)}})}
function dw(a,b){a:{a=a.A;var c,d=null==(c=ks(b,Mk))?void 0:c.signal;if(d&&a.Sb&&(c=a.Sb[d])){var e=c();break a}var f;if((c=null==(f=ks(b,Kk))?void 0:f.request)&&a.Sd&&(f=a.Sd[c])){e=f();break a}for(e in b)if(a.Xc[e]&&(b=a.Xc[e])){e=b();break a}e=void 0}if(void 0!==e)return Promise.resolve(e)}
function ew(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Xb)?void 0:d.sessionIndex;var h=g.yield;var k=im(0,{sessionIndex:e});if(!(k instanceof Ud)){var l=new Ud(Bd);Vd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Zu(b),f)))})}
;var hw=new Gr("INNERTUBE_TRANSPORT_TOKEN");function iw(){}
x(iw,gv);iw.prototype.j=function(){return $t};
iw.prototype.i=function(a){return ks(a,Uk)||void 0};
iw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(iw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jw(){}
x(jw,gv);jw.prototype.j=function(){return au};
jw.prototype.i=function(a){return ks(a,Tk)||void 0};
jw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(jw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function kw(){}
x(kw,gv);kw.prototype.j=function(){return Xt};
kw.prototype.i=function(a){return ks(a,Ok)||void 0};
kw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(kw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function lw(){}
x(lw,gv);lw.prototype.j=function(){return Yt};
lw.prototype.i=function(a){return ks(a,Sk)||void 0};
lw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function mw(){}
x(mw,gv);mw.prototype.j=function(){return Zt};
mw.prototype.i=function(a){return ks(a,Rk)||void 0};
mw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function nw(){}
x(nw,gv);nw.prototype.j=function(){return Wt};
nw.prototype.i=function(a){return ks(a,Qk)};
nw.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function ow(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
x(ow,V);var pw=new Gr("NETWORK_SLI_TOKEN");function qw(a){this.h=a}
qw.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=rw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){ct(g);
if((null==c?0:c.Yd)&&g instanceof ow&&1===g.errorType)return Promise.reject(g)}))})};
function rw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=Xp(c));return new window.Request(b,a)}
qw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.re)&&a.ok)return Rg(b.re,d);d=d.replace(")]}'","");if((null==b?0:b.Yd)&&d)try{var e=JSON.parse(d)}catch(g){throw new ow(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Kg(),c=c.then(function(d){ct(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
qw[Fr]=[new Hr(pw)];var sw=new Gr("NETWORK_MANAGER_TOKEN");var tw;function uw(){var a,b,c;return A(function(d){if(1==d.h)return a=Nr().resolve(hw),a?d.yield(cw(a),2):(ct(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ct(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Ig;return d.return(c)}ct(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function vw(){var a;return null==(a=T("WEB_PLAYER_CONTEXT_CONFIGS"))?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ww=C.caches,xw;function yw(a){var b=a.indexOf(":");return-1===b?{od:a}:{od:a.substring(0,b),datasyncId:a.substring(b+1)}}
function zw(){return A(function(a){if(void 0!==xw)return a.return(xw);xw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(ww.open("test-only"),4);case 4:return d.yield(ww.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(xw)})}
function Aw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(zw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(ww.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=yw(f),h=g.datasyncId,!h||a.includes(h)||b.push(ww.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Bw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(zw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Dm("cache contains other");return h.yield(ww.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=yw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Cw(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Dw(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ew(a){if(Cw()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Dw(c);void 0===d||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Fw(){if(!Cw())return!1;var a=Dm(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Dw(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Gw(){uw().then(function(a){a&&(Ko(a),Aw(a),Ku(a),Ew(a))})}
function Hw(){var a=new Pq;Qi.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.B(2);break}b=Dm("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Ko(h);Aw(h);Ku(h);Ew(h);return g.return()}c=Lu();d=Fw();return g.yield(Bw(),3);case 3:return e=g.i,g.yield(Lo(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Gw():a.h.add("publicytnetworkstatus-online",Gw,!0,void 0,void 0),g.h=0}})})}
;function Iw(){this.state=1;this.h=null}
m=Iw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Ek(a.interpreterSafeUrl).toString());Jw(this,d,e,a.program,b,c)}else ct(Error("Cannot initialize botguard without program"))};
function Jw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,du(c,function(){window[g]?Kw(a,d,g,e):(a.state=3,fu(c),ct(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Gd("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Kw(a,d,g,e):(a.state=4,ct(new V("Unable to load Botguard from JS")))):ct(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Kw(a,b,c,d){a.state=5;try{var e=new Ai({program:b,ge:c,Ge:U("att_web_record_metrics"),Ea:"aGIf"});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Mc(e)}catch(f){a.state=7,f instanceof Error&&ct(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Qc()?this.Fd({Yc:a}):null};
m.dispose=function(){this.Mc(null);this.state=8};
m.Qc=function(){return!!this.h};
m.Fd=function(a){return this.h.zd(a)};
m.Mc=function(a){Cc(this.h);this.h=a};var Lw=[],Mw=!1;function Nw(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Gt()){var a=T("PLAYER_VARS",{});if("1"!=Pb(a)&&!Ht(a)){var b=function(){Mw=!0;"google_ad_status"in window?cl("DCLKSTAT",1):cl("DCLKSTAT",2)};
try{du("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Lw.push(Qi.pa(function(){if(!(Mw||"google_ad_status"in window)){try{hu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Mw=!0;cl("DCLKSTAT",3)}},5E3))}}}
function Ow(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;function Pw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Qw(){Iw.apply(this,arguments)}
x(Qw,Iw);Qw.prototype.Mc=function(a){var b;null==(b=Pw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.zd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Qw.prototype.Qc=function(){return!!Pw()};
Qw.prototype.Fd=function(a){return Pw().bgvmc(a)};function Rw(a){Wr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.F},{from:"document_active",to:"document_disposed",action:this.A},{from:"document_disposed_preventable",to:"document_disposed",action:this.A},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(Rw,Wr);Rw.prototype.F=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Rw.prototype.A=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Rw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Rw.prototype.i=function(){this.h=new Map};function Sw(a){Wr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.A},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.A},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.A},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(Sw,Wr);Sw.prototype.i=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Sw.prototype.h=function(a,b){a(null==b?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Sw.prototype.A=function(a,b){a(null==b?void 0:b.event)};
Sw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Tw(){this.l=new Rw;this.A=new Sw}
Tw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.A.install(c)})};function Uw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Uw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ut(void 0===c?0:c)){a=this.client;d=new nt({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=Fu(d,c);Bu.set(f,!0);Gu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Eu({cttAuthInfo:wt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Hu("visualElementGestured",f,d):a?Vs("visualElementGestured",d,a,f):un("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Uw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new nt({trackingParams:a}),b,void 0===c?0:c)};
Uw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=ut(d);a||(a=(a=rt(void 0===d?0:d))?new nt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Eu({cttAuthInfo:wt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Hu("visualElementStateChanged",d,b):a?Vs("visualElementStateChanged",b,a,d):un("visualElementStateChanged",b,d))}};
function Vw(a,b){if(void 0===b)for(var c=tt(),d=0;d<c.length;d++)void 0!==c[d]&&Vw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Du(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Ww(){Tw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||Fm(Xw)}
x(Ww,Tw);Ww.prototype.j=function(){un("finalPayload",{csn:ut()})};
Ww.prototype.h=function(){gt(ht)};
Ww.prototype.i=function(){var a=Vw;Uw.h||(Uw.h=new Uw);a(Uw.h)};
function Xw(){var a=T("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ki();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&un("genericClientExperimentEvent",{eventType:c});delete bl.CLIENT_EXPERIMENT_EVENTS}}
;function Yw(){}
function Zw(){var a=E("ytglobal.storage_");a||(a=new Yw,D("ytglobal.storage_",a));return a}
Yw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return($w()):d.return()})};
function $w(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Yw);function sn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=.2>=Math.random()}
sn.prototype.Ha=function(a){this.handleError(a)};
sn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":ax(this,b);break;case "TRANSACTION_ENDED":this.j&&.1>=Math.random()&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function ax(a,b){Zw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:bx(null==c?void 0:c.usage),deviceStorageQuotaMbytes:bx(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function bx(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var cx={},dx=(cx["api.invalidparam"]=2,cx.auth=150,cx["drm.auth"]=150,cx["heartbeat.net"]=150,cx["heartbeat.servererror"]=150,cx["heartbeat.stop"]=150,cx["html5.unsupportedads"]=5,cx["fmt.noneavailable"]=5,cx["fmt.decode"]=5,cx["fmt.unplayable"]=5,cx["html5.missingapi"]=5,cx["html5.unsupportedlive"]=5,cx["drm.unavailable"]=5,cx["mrm.blocked"]=151,cx);var ex=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function fx(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function gx(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(ex);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function hx(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ix(){var a=jx;this.i=[];this.isReady=!1;this.j={};this.listeners=[];this.l=!1;var b=this.h=new Ut(!!T("WIDGET_ID_ENFORCE")),c=this.Fe.bind(this);b.l=c;b.m=null;this.h.channel="widget";if(b=T("WIDGET_ID"))this.h.sessionId=b;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ue.bind(this));this.addEventListener("onVolumeChange",this.Ve.bind(this));this.addEventListener("onApiChange",this.Ne.bind(this));this.addEventListener("onPlaybackQualityChange",
this.Re.bind(this));this.addEventListener("onPlaybackRateChange",this.Se.bind(this));this.addEventListener("onStateChange",this.Te.bind(this));this.addEventListener("onWebglSettingsChanged",this.We.bind(this));this.addEventListener("captionschanged",this.Oe.bind(this));this.addEventListener("captionssettingschanged",this.Pe.bind(this))}
m=ix.prototype;
m.Fe=function(a,b,c){if("addEventListener"===a&&b)a=b[0],"onReady"===a?this.api.logApiCall(a+" invocation",c):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",c,this.errorCode),this.errorCode=void 0),this.api.logApiCall(a+" registration",c),this.j[a]||"onReady"===a||(this.addEventListener(a,kx(this,a,c)),this.j[a]=!0);else if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&fx(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=gx(d[0],
void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=gx(e);break;case "loadPlaylist":case "cuePlaylist":e=hx(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);fx(a)&&lx(this,mx(this))}};
m.be=function(){this.isReady=!0;this.sendMessage("initialDelivery",mx(this));this.sendMessage("onReady");Db(this.i,this.wd,this);this.i=[]};
function lx(a,b){a.sendMessage("infoDelivery",b)}
m.wd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.wd({event:a,info:void 0===b?null:b})};
function kx(a,b,c){return function(d){"onError"===b?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
m.onReady=function(){var a=this.h,b=this.be.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?dx[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
function mx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(0===f.search("get")||0===f.search("is")){var g=0;0===f.search("get")?g=3:0===f.search("is")&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
m.Te=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());lx(this,a)};
m.Re=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());lx(this,a)};
m.Se=function(a){lx(this,{playbackRate:a})};
m.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ve=function(){lx(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ue=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());lx(this,a)};
m.We=function(){var a={sphericalProperties:this.api.getSphericalProperties()};lx(this,a)};
m.Oe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};lx(this,a)}};
m.Pe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};lx(this,a)}};
m.dispose=function(){this.h=null;for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function nx(a,b){G.call(this);this.h={};this.started=!1;this.connection=b;this.connection.subscribe("command",this.rd,this);this.api=a;this.start()}
x(nx,G);m=nx.prototype;m.start=function(){this.started||this.V||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.V&&this.connection.jb(a,b)};
m.rd=function(a,b,c){if(this.started&&!this.V){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=ox(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=px(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Qe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Qe=function(a,b){this.started&&!this.V&&this.connection.jb(a,qx(a,b))};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.addEventListener=function(a,b){this.api.addEventListener(a,b)};
m.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function ox(a,b){switch(a){case "loadVideoById":return a=gx(b),[a];case "cueVideoById":return a=gx(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=hx(b),[a];case "cuePlaylist":return a=hx(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function px(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function qx(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(null!=b)return{value:b}}
m.U=function(){this.connection.unsubscribe("command",this.rd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.U.call(this);delete this.api};function rx(a,b,c){su.call(this);this.j=a;this.i=b;this.id=c}
x(rx,su);rx.prototype.jb=function(a,b){this.V||this.j.jb(this.i,this.id,a,b)};
rx.prototype.U=function(){this.i=this.j=null;su.prototype.U.call(this)};function sx(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=jr(window,"message",this.j.bind(this));this.connection=new rx(this,a,b);Ec(this,this.connection)}
x(sx,G);sx.prototype.jb=function(a,b,c,d){this.V||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
sx.prototype.j=function(a){if(!this.V&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.V||c.l("command",b.command,b.data,a.origin)}}}};
sx.prototype.U=function(){lr(this.i);this.h=null;G.prototype.U.call(this)};var tx=new Qw;function ux(){return tx.Qc()}
function vx(a){a=void 0===a?{}:a;return tx.invoke(a)}
;function wx(a,b,c,d,e){G.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.uc=e;this.Za=!1;this.api={};this.ja=this.m=null;this.W=new M;this.h={};this.da=this.xa=this.elementId=this.Cb=this.config=null;this.ba=!1;this.j=this.F=null;this.Ga={};this.vc=["onReady"];this.lastError=null;this.Ub=NaN;this.K={};this.ga=0;this.i=this.l=a;Ec(this,this.W);xx(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(yx(this),zx(this))}
x(wx,G);m=wx.prototype;m.getId=function(){return this.v};
m.loadNewVideoConfig=function(a){if(!this.V){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Vt||(b=new Vt(b));this.config=b;this.setConfig(a);zx(this);this.isReady()&&Ax(this)}};
function yx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Cb=a;this.config=Bx(a);yx(this);if(!this.xa){var b;this.xa=Cx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Ii(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Ii(Number(a)||a))};
function Ax(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Dx(a){var b=!0,c=Ex(a);c&&a.config&&(b=c.dataset.version===Fx(a));return b&&!!E("yt.player.Application.create")}
function zx(a){if(!a.V&&!a.ba){var b=Dx(a);if(b&&"html5"===(Ex(a)?"html5":null))a.da="html5",a.isReady()||Gx(a);else if(Hx(a),a.da="html5",b&&a.j&&a.l)a.l.appendChild(a.j),Gx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Ix(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Bx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.uc);Gx(a)};
a.ba=!0;b?a.F():(du(Fx(a),a.F),(b=Jx(a))&&ku(b||""),Kx(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ex(a){var b=Fd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Gx(a){if(!a.V){var b=Ex(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.ba=!1;if(!Ix(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Lx(a)}else a.Ub=setTimeout(function(){Gx(a)},50)}}
function Lx(a){xx(a);a.Za=!0;var b=Ex(a);if(b){a.m=Mx(a,b,"addEventListener");a.ja=Mx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Mx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);Ax(a);a.xa&&a.xa(a.api);a.W.Ya("onReady",a.api)}
function Mx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.v}),e.level="WARNING",e;}}}
function xx(a){a.Za=!1;if(a.ja)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ja(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.m=null;a.ja=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Cb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Za};
m.addEventListener=function(a,b){var c=this,d=Cx(this,b);d&&(0<=Cb(this.vc,a)||this.h[a]||(b=Nx(this,a),this.m&&this.m(a,b)),this.W.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.V||(b=Cx(this,b))&&this.W.unsubscribe(a,b)};
function Cx(a,b){var c=b;if("string"===typeof b){if(a.Ga[b])return a.Ga[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ga[b]=c}return c?c:null}
function Nx(a,b){function c(d){var e=setTimeout(function(){if(!a.V){try{a.W.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.v,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.da||(Ex(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Hx(a){a.cancel();xx(a);a.da=null;a.config&&(a.config.loaded=!1);var b=Ex(a);b&&(Dx(a)||!Kx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.F&&hu(Fx(this),this.F);clearTimeout(this.Ub);this.ba=!1};
m.U=function(){Hx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ga=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Cb=this.config=this.api=null;delete this.l;delete this.i;G.prototype.U.call(this)};
function Kx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Fx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Jx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ix(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Bx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Rb(e):e}return b}
;var Ox={},Px="player_uid_"+(1E9*Math.random()>>>0);function Qx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Fd(c):c;var e=Px+"_"+Sa(c),f=Ox[e];if(f&&d)return Rx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new wx(c,e,a,b,void 0);Ox[e]=f;f.addOnDisposeCallback(function(){delete Ox[f.getId()]});
return f.api}
function Rx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var jx=null,Sx=null,Tx=null;
function Ux(){Xv();var a=rm(),b=um(119),c=1<window.devicePixelRatio;if(document.body&&Yi(document.body,"exp-invert-logo"))if(c&&!Yi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Yi(d,"inverted-hdpi")){var e=Wi(d);Xi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Yi(document.body,"inverted-hdpi")&&Zi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=wm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete om[b]:(c=d.toString(16),om[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in om)om.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(om[f])));var f=d.join("&");km(b,f,63072E3,a.i,c)}}
function Vx(){Wx()}
function Xx(){Wv("ep_init_pr");Wx()}
function Wx(){var a=jx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Yx(){jx&&jx.sendAbandonmentPing&&jx.sendAbandonmentPing();T("PL_ATT")&&tx.dispose();for(var a=Qi,b=0,c=Lw.length;b<c;b++)a.qa(Lw[b]);Lw.length=0;fu("//static.doubleclick.net/instream/ad_status.js");Mw=!1;cl("DCLKSTAT",0);Dc(Tx,Sx);jx&&(jx.removeEventListener("onVideoDataChange",Vx),jx.destroy())}
;D("yt.setConfig",cl);D("yt.config.set",cl);D("yt.setMsg",cu);D("yt.msgs.set",cu);D("yt.logging.errors.log",bt);
D("writeEmbed",function(){var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}Pu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=T("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Sv("embed",["ol"]);c=vw();if(!c.serializedForcedExperimentIds){var d=ql(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Sv("watch",["pbs","pbu","pbp"]);jx=Qx(a,c);jx.addEventListener("onVideoDataChange",Vx);jx.addEventListener("onReady",Xx);a=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?Tx=new ix:T("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Sx=new sx(window.parent,a,b),Tx=new nx(jx,Sx.connection));Nw();U("ytidb_create_logger_embed_killswitch")||rn();a={};Ww.h||(Ww.h=new Ww);Ww.h.install((a.flush_logs={callback:function(){Is()}},a));
ar();U("ytidb_clear_embedded_player")&&Qi.pa(function(){var f,g;if(!tw){var h=Nr();Jr(h,{oc:sw,Cd:qw});var k={Xc:{feedbackEndpoint:bv(kw),modifyChannelNotificationPreferenceEndpoint:bv(lw),playlistEditEndpoint:bv(mw),subscribeEndpoint:bv(iw),unsubscribeEndpoint:bv(jw),webPlayerShareEntityServiceEndpoint:bv(nw)}},l=Yu(),n={};l&&(n.client_location=l);void 0===f&&(f=hm());void 0===g&&(g=h.resolve(sw));bw(k,g,f,n);Jr(h,{oc:hw,Dd:aw.h});tw=h.resolve(hw)}Hw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ux);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||vx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Ow);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ou);D("yt.util.activity.init",E("yt.util.activity.init")||or);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||rr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||pr);window.addEventListener("load",gl(function(){Ux()}));
window.addEventListener("pageshow",gl(function(a){a.persisted||Ux()}));
window.addEventListener("pagehide",gl(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Yx():a.persisted||Yx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=dl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?bt(e):ct(e))};
je=dt;window.addEventListener("unhandledrejection",function(a){dt(a.reason)});
Db(T("ERRORS")||[],function(a){bt.apply(null,a)});
cl("ERRORS",[]);}).call(this);
