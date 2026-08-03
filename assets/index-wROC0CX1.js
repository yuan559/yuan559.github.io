var fS=Object.defineProperty;var hS=(f,i,u)=>i in f?fS(f,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):f[i]=u;var st=(f,i,u)=>hS(f,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function u(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=u(r);fetch(r.href,o)}})();var Nh={exports:{}},Gr={};var j_;function dS(){if(j_)return Gr;j_=1;var f=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(a,r,o){var h=null;if(o!==void 0&&(h=""+o),r.key!==void 0&&(h=""+r.key),"key"in r){o={};for(var d in r)d!=="key"&&(o[d]=r[d])}else o=r;return r=o.ref,{$$typeof:f,type:a,key:h,ref:r!==void 0?r:null,props:o}}return Gr.Fragment=i,Gr.jsx=u,Gr.jsxs=u,Gr}var U_;function mS(){return U_||(U_=1,Nh.exports=dS()),Nh.exports}var b=mS(),wh={exports:{}},Tt={};var L_;function pS(){if(L_)return Tt;L_=1;var f=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function T(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function j(z,V,I){this.props=z,this.context=V,this.refs=C,this.updater=I||E}j.prototype.isReactComponent={},j.prototype.setState=function(z,V){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,V,"setState")},j.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=j.prototype;function w(z,V,I){this.props=z,this.context=V,this.refs=C,this.updater=I||E}var L=w.prototype=new D;L.constructor=w,x(L,j.prototype),L.isPureReactComponent=!0;var q=Array.isArray;function W(){}var N={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function K(z,V,I){var P=I.ref;return{$$typeof:f,type:z,key:V,ref:P!==void 0?P:null,props:I}}function F(z,V){return K(z.type,V,z.props)}function rt(z){return typeof z=="object"&&z!==null&&z.$$typeof===f}function tt(z){var V={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(I){return V[I]})}var xt=/\/+/g;function mt(z,V){return typeof z=="object"&&z!==null&&z.key!=null?tt(""+z.key):V.toString(36)}function vt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(W,W):(z.status="pending",z.then(function(V){z.status==="pending"&&(z.status="fulfilled",z.value=V)},function(V){z.status==="pending"&&(z.status="rejected",z.reason=V)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Y(z,V,I,P,ut){var dt=typeof z;(dt==="undefined"||dt==="boolean")&&(z=null);var pt=!1;if(z===null)pt=!0;else switch(dt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(z.$$typeof){case f:case i:pt=!0;break;case g:return pt=z._init,Y(pt(z._payload),V,I,P,ut)}}if(pt)return ut=ut(z),pt=P===""?"."+mt(z,0):P,q(ut)?(I="",pt!=null&&(I=pt.replace(xt,"$&/")+"/"),Y(ut,V,I,"",function(Mn){return Mn})):ut!=null&&(rt(ut)&&(ut=F(ut,I+(ut.key==null||z&&z.key===ut.key?"":(""+ut.key).replace(xt,"$&/")+"/")+pt)),V.push(ut)),1;pt=0;var Kt=P===""?".":P+":";if(q(z))for(var Rt=0;Rt<z.length;Rt++)P=z[Rt],dt=Kt+mt(P,Rt),pt+=Y(P,V,I,dt,ut);else if(Rt=T(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(P=z.next()).done;)P=P.value,dt=Kt+mt(P,Rt++),pt+=Y(P,V,I,dt,ut);else if(dt==="object"){if(typeof z.then=="function")return Y(vt(z),V,I,P,ut);throw V=String(z),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return pt}function Q(z,V,I){if(z==null)return z;var P=[],ut=0;return Y(z,P,"","",function(dt){return V.call(I,dt,ut++)}),P}function et(z){if(z._status===-1){var V=z._result;V=V(),V.then(function(I){(z._status===0||z._status===-1)&&(z._status=1,z._result=I)},function(I){(z._status===0||z._status===-1)&&(z._status=2,z._result=I)}),z._status===-1&&(z._status=0,z._result=V)}if(z._status===1)return z._result.default;throw z._result}var ct=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},M={map:Q,forEach:function(z,V,I){Q(z,function(){V.apply(this,arguments)},I)},count:function(z){var V=0;return Q(z,function(){V++}),V},toArray:function(z){return Q(z,function(V){return V})||[]},only:function(z){if(!rt(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return Tt.Activity=y,Tt.Children=M,Tt.Component=j,Tt.Fragment=u,Tt.Profiler=r,Tt.PureComponent=w,Tt.StrictMode=a,Tt.Suspense=p,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},Tt.cache=function(z){return function(){return z.apply(null,arguments)}},Tt.cacheSignal=function(){return null},Tt.cloneElement=function(z,V,I){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var P=x({},z.props),ut=z.key;if(V!=null)for(dt in V.key!==void 0&&(ut=""+V.key),V)!J.call(V,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&V.ref===void 0||(P[dt]=V[dt]);var dt=arguments.length-2;if(dt===1)P.children=I;else if(1<dt){for(var pt=Array(dt),Kt=0;Kt<dt;Kt++)pt[Kt]=arguments[Kt+2];P.children=pt}return K(z.type,ut,P)},Tt.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:o,_context:z},z},Tt.createElement=function(z,V,I){var P,ut={},dt=null;if(V!=null)for(P in V.key!==void 0&&(dt=""+V.key),V)J.call(V,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ut[P]=V[P]);var pt=arguments.length-2;if(pt===1)ut.children=I;else if(1<pt){for(var Kt=Array(pt),Rt=0;Rt<pt;Rt++)Kt[Rt]=arguments[Rt+2];ut.children=Kt}if(z&&z.defaultProps)for(P in pt=z.defaultProps,pt)ut[P]===void 0&&(ut[P]=pt[P]);return K(z,dt,ut)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(z){return{$$typeof:d,render:z}},Tt.isValidElement=rt,Tt.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:et}},Tt.memo=function(z,V){return{$$typeof:_,type:z,compare:V===void 0?null:V}},Tt.startTransition=function(z){var V=N.T,I={};N.T=I;try{var P=z(),ut=N.S;ut!==null&&ut(I,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(W,ct)}catch(dt){ct(dt)}finally{V!==null&&I.types!==null&&(V.types=I.types),N.T=V}},Tt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},Tt.use=function(z){return N.H.use(z)},Tt.useActionState=function(z,V,I){return N.H.useActionState(z,V,I)},Tt.useCallback=function(z,V){return N.H.useCallback(z,V)},Tt.useContext=function(z){return N.H.useContext(z)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(z,V){return N.H.useDeferredValue(z,V)},Tt.useEffect=function(z,V){return N.H.useEffect(z,V)},Tt.useEffectEvent=function(z){return N.H.useEffectEvent(z)},Tt.useId=function(){return N.H.useId()},Tt.useImperativeHandle=function(z,V,I){return N.H.useImperativeHandle(z,V,I)},Tt.useInsertionEffect=function(z,V){return N.H.useInsertionEffect(z,V)},Tt.useLayoutEffect=function(z,V){return N.H.useLayoutEffect(z,V)},Tt.useMemo=function(z,V){return N.H.useMemo(z,V)},Tt.useOptimistic=function(z,V){return N.H.useOptimistic(z,V)},Tt.useReducer=function(z,V,I){return N.H.useReducer(z,V,I)},Tt.useRef=function(z){return N.H.useRef(z)},Tt.useState=function(z){return N.H.useState(z)},Tt.useSyncExternalStore=function(z,V,I){return N.H.useSyncExternalStore(z,V,I)},Tt.useTransition=function(){return N.H.useTransition()},Tt.version="19.2.8",Tt}var Y_;function Td(){return Y_||(Y_=1,wh.exports=pS()),wh.exports}var gt=Td(),jh={exports:{}},Xr={},Uh={exports:{}},Lh={};var H_;function _S(){return H_||(H_=1,(function(f){function i(Y,Q){var et=Y.length;Y.push(Q);t:for(;0<et;){var ct=et-1>>>1,M=Y[ct];if(0<r(M,Q))Y[ct]=Q,Y[et]=M,et=ct;else break t}}function u(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var Q=Y[0],et=Y.pop();if(et!==Q){Y[0]=et;t:for(var ct=0,M=Y.length,z=M>>>1;ct<z;){var V=2*(ct+1)-1,I=Y[V],P=V+1,ut=Y[P];if(0>r(I,et))P<M&&0>r(ut,I)?(Y[ct]=ut,Y[P]=et,ct=P):(Y[ct]=I,Y[V]=et,ct=V);else if(P<M&&0>r(ut,et))Y[ct]=ut,Y[P]=et,ct=P;else break t}}return Q}function r(Y,Q){var et=Y.sortIndex-Q.sortIndex;return et!==0?et:Y.id-Q.id}if(f.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;f.unstable_now=function(){return o.now()}}else{var h=Date,d=h.now();f.unstable_now=function(){return h.now()-d}}var p=[],_=[],g=1,y=null,S=3,T=!1,E=!1,x=!1,C=!1,j=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function L(Y){for(var Q=u(_);Q!==null;){if(Q.callback===null)a(_);else if(Q.startTime<=Y)a(_),Q.sortIndex=Q.expirationTime,i(p,Q);else break;Q=u(_)}}function q(Y){if(x=!1,L(Y),!E)if(u(p)!==null)E=!0,W||(W=!0,tt());else{var Q=u(_);Q!==null&&vt(q,Q.startTime-Y)}}var W=!1,N=-1,J=5,K=-1;function F(){return C?!0:!(f.unstable_now()-K<J)}function rt(){if(C=!1,W){var Y=f.unstable_now();K=Y;var Q=!0;try{t:{E=!1,x&&(x=!1,D(N),N=-1),T=!0;var et=S;try{e:{for(L(Y),y=u(p);y!==null&&!(y.expirationTime>Y&&F());){var ct=y.callback;if(typeof ct=="function"){y.callback=null,S=y.priorityLevel;var M=ct(y.expirationTime<=Y);if(Y=f.unstable_now(),typeof M=="function"){y.callback=M,L(Y),Q=!0;break e}y===u(p)&&a(p),L(Y)}else a(p);y=u(p)}if(y!==null)Q=!0;else{var z=u(_);z!==null&&vt(q,z.startTime-Y),Q=!1}}break t}finally{y=null,S=et,T=!1}Q=void 0}}finally{Q?tt():W=!1}}}var tt;if(typeof w=="function")tt=function(){w(rt)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,mt=xt.port2;xt.port1.onmessage=rt,tt=function(){mt.postMessage(null)}}else tt=function(){j(rt,0)};function vt(Y,Q){N=j(function(){Y(f.unstable_now())},Q)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(Y){Y.callback=null},f.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<Y?Math.floor(1e3/Y):5},f.unstable_getCurrentPriorityLevel=function(){return S},f.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var et=S;S=Q;try{return Y()}finally{S=et}},f.unstable_requestPaint=function(){C=!0},f.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var et=S;S=Y;try{return Q()}finally{S=et}},f.unstable_scheduleCallback=function(Y,Q,et){var ct=f.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ct+et:ct):et=ct,Y){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=et+M,Y={id:g++,callback:Q,priorityLevel:Y,startTime:et,expirationTime:M,sortIndex:-1},et>ct?(Y.sortIndex=et,i(_,Y),u(p)===null&&Y===u(_)&&(x?(D(N),N=-1):x=!0,vt(q,et-ct))):(Y.sortIndex=M,i(p,Y),E||T||(E=!0,W||(W=!0,tt()))),Y},f.unstable_shouldYield=F,f.unstable_wrapCallback=function(Y){var Q=S;return function(){var et=S;S=Q;try{return Y.apply(this,arguments)}finally{S=et}}}})(Lh)),Lh}var B_;function gS(){return B_||(B_=1,Uh.exports=_S()),Uh.exports}var Yh={exports:{}},hn={};var q_;function yS(){if(q_)return hn;q_=1;var f=Td();function i(p){var _="https://react.dev/errors/"+p;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var a={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(p,_,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:y==null?null:""+y,children:p,containerInfo:_,implementation:g}}var h=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,_){if(p==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,hn.createPortal=function(p,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(i(299));return o(p,_,null,g)},hn.flushSync=function(p){var _=h.T,g=a.p;try{if(h.T=null,a.p=2,p)return p()}finally{h.T=_,a.p=g,a.d.f()}},hn.preconnect=function(p,_){typeof p=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(p,_))},hn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},hn.preinit=function(p,_){if(typeof p=="string"&&_&&typeof _.as=="string"){var g=_.as,y=d(g,_.crossOrigin),S=typeof _.integrity=="string"?_.integrity:void 0,T=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?a.d.S(p,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:T}):g==="script"&&a.d.X(p,{crossOrigin:y,integrity:S,fetchPriority:T,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},hn.preinitModule=function(p,_){if(typeof p=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=d(_.as,_.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof _.integrity=="string"×]÷ç›h‘éì¶»§q«^w_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆš\›××ÙYÙKXÛÜH‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ‘T‘PÕQ–HRˆŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ‘’SHÈ“ÑPÕÈS•TPÕSÓˆŸJW_JW_J_Y[˜Ý[ÛˆÕ

^Ü™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›X[šY™\ÝÈYÙK\Ú[‹Ú[™[Ž–Ø‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X[šY™\Ý××ÛXY‹™]K\™]™X[ŽˆLÚ[™[Ž–Ø‹šœÞ
™KØÛÜNžÞšˆ¹¢$y.ë9æ¡9méy/g9¥®yo#È‹[Žˆ’ÕÈÑH•RSŸKÛ\ÜÓ˜[YNˆ›X[šY™\Ý××ÚÚXÚÙ\ˆŸJK‹šœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›X[šY™\Ý××ÜÝ][Y[‹Ú[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ¹¢$y.ë9.#y.©9.æ9ki9êâùæ¡9. 9o(9fï¸à ˆŸJK‹šœÞ
™[H‹ØÚ[™[Žˆ•ÑHT‘PÕHÖTÕSHŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆº+ªy.©ùdàxà y.®¹âjxà yabyî¯ùd£:/ä9bª9¢éy§"yd#9. 9ieùfè9§§8à ˆŸJW_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X[šY™\Ý××Ù›ÛÝ‹™]K\™]™X[ŽˆLÚ[™[Ž–Ø‹šœÞ
œ‹ØÚ[™[Žˆ¹«ãù.*ºhnyæë¹ab:e yk¦º.ªù.ïy.#¹îäù§¡;ï#9a£ynî¹êâúeg9i-8à y§d:-*9d£:/k9g.º+ëy¬åxà º/æy¨-ûï#:)áº)ây.#ycê¹ âº"lù. 9«({ï#:/æ: ïyîéùîëyå'úeoøà ˆŸJK‹šœÞ
œ‹ØÚ[™[Žˆ•ÙHØÚÈY[]H[™ÝXÝ\™Hš\œÝ[ˆ]]ÜˆØ[Y\˜KX]\šX[[™˜[œÚ][ÛˆÙÚXÈÛÈHÛÜšÈØ[ˆÙY\]›Ûš[™ËˆŸJW_JK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X[šY™\Ý××ÛX\œ]YYH‹˜\šXK[X™[Žˆ¹méy/g9k©9§#yb¨z# ùfí‹Ú[™[Ž˜‹šœÞÊ™]ˆ‹ØÚ[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ”S‘ÓÔ“ÈŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹dàyâc9.%¹åcŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ”“ÑPÕ’STÈŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹.©ùdàynoùdbˆŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ‘QÒUSSS•ŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹¥l9keù.®¹âjHŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ’S•TPÕU‘HSPQÑHŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹k§¹¥í¹.©9.¤ˆŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ”S‘ÓÔ“ÈŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹dàyâc9.%¹åcŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ”“ÑPÕ’STÈŸJK‹šœÞ
šH‹ØÚ[™[Žˆ¹.©ùdàynoùdbˆŸJW_J_JW_J_Y[˜Ý[ÛˆU
Ü›Ú™XÝ™ŸJ^ØÛÛœÝOYÝ\ÙT™YŠ[
KO\OžØÛÛœÝÏZK˜Ý\œ™[ÚYŠ[Ê\™]\›ŽØÛÛœÝ[Ë™Ù]›Ý[™[™ÐÛY[™XÝ

KSX]›Z[ŠKX]›X^

‹˜ÛY[Z›Y
KÚÚY
JKSX]›Z[ŠKX]›X^

‹˜ÛY[KZÜ
KÚšZYÚ
JNÛËœÝ[KœÙ]›Ü\J‹KXØ\™^‹	Ù
ŒLIX
KËœÝ[KœÙ]›Ü\J‹KXØ\™^H‹	Ü
ŒLIX
KËœÝ[KœÙ]›Ü\J‹KXØ\™\ž‹	ÊK\
JŒ‹ŸYYØ
KËœÝ[KœÙ]›Ü\J‹KXØ\™\žH‹	ÊKJJŒËŽYYØ
_KOJ
OOžØÛÛœÝZK˜Ý\œ™[ÜËœÝ[KœÙ]›Ü\J‹KXØ\™\ž‹ŒYÈŠKËœÝ[KœÙ]›Ü\J‹KXØ\™\žH‹ŒYÈŠ_NÜ™]\›ˆ‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ÛYYXH‹™YŽšKÛ”Ú[\“[Ý™NKÛ”Ú[\“X]™N˜KÚ[™[Ž–Ù‹šY[ÏØ‹šœÞ
]‹ÜÜ˜Î™‹šY[Ë[Øš[TÜ˜Î™‹›[Øš[UšY[ËÜÝ\Ž™‹š\›ßJN˜‹šœÞ
š[YÈ‹ÜÜ˜Î™‹š\›Ë[˜	Ù‹]KžšHÈ	Ù‹]K™[ŸXØY[™Îˆ›^žHŸJK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ÜÜÝYÚŸJK‹šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ÜÚYÛ˜[‹Ú[™[Ž™‹œÚYÛ˜[JK‹šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ÞYX\ˆ‹Ú[™[Ž™‹žYX\ŸJW_J_Y[˜Ý[ÛˆÕ

^Ü™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆÛÜšÈ‹YˆÛÜšÈ‹Ú[™[Ž–Ø‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\Ú[ÛÜš××ÚXY[™È‹Ú[™[Ž˜‹šœÞ
ËÚÚXÚÙ\ŽžÞšˆ¹ì¯º`"y/g9dàH‹[Žˆ”ÑSPÕQÓÔ“ÈŸK]NžÞšˆ¹«ãù.*ºhnyæë»ï#:`ïy§"z!ê¹mìyæ¡9âjyä!¸à ˆ‹[Žˆ‘U‘T–H“Ò‘PÕTÈUÈÕÓˆTÒPÔËˆŸK›ÙNžÞšˆ¹¨c:gh¹êëùd$y."ù®æ¹bª9£ª:/æùå.úgh»ï#:)é¹£©ú+¯¹i!ùæí9£©y®äybª9­cú)â8à ˆ‹[Žˆ”ØÜ›ÛÈ[Ý™H›ÝYÚH˜Z[ˆÝÚ\H˜]\˜[HÛˆÝXÚ]šXÙ\ËˆŸ_J_JK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜš××Ü[ˆ‹Ú[™[Ž˜‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜš××Ý˜XÚÈ‹Ú[™[Ž•›X\
O˜‹šœÞÊ˜\XÛH‹ØÛ\ÜÓ˜[YN˜ÛÜšËXØ\™ÛÜšËXØ\™KIÙ‹šYXÚ[™[Ž–Ø‹šœÞ
UÜ›Ú™XÝ™ŸJK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ØÛÜH‹Ú[™[Ž–Ø‹šœÞ
™KØÛÜN™‹šÚ[™Û\ÜÓ˜[YNˆÛÜšËXØ\™×ÚÚ[™ŸJK‹šœÞÊšÈ‹ØÚ[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Ž™‹]KžšJK‹šœÞ
™[H‹ØÚ[™[Ž™‹]K™[ŸJW_JK‹šœÞ
™KØÛÜN™‹œÝ][Y[Û\ÜÓ˜[YNˆÛÜšËXØ\™×ÜÝ][Y[ŸJK‹šœÞ
™KØÛÜN™‹™]Z[Û\ÜÓ˜[YNˆÛÜšËXØ\™×Ù]Z[ŸJK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆÛÜšËXØ\™×ÙØ[\žH‹˜\šXK[X™[Ž˜	Ù‹]KžšH9æî9alùå.úgh˜Ú[™[Ž™‹™Ø[\žK›X\

KJOO˜‹šœÞÊ™šYÝ\™H‹ØÚ[™[Ž–Ø‹šœÞ
š[YÈ‹ÜÜ˜ÎšK[ˆˆ‹ØY[™Îˆ›^žHŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Ž™‹™Ø[\žK›[™ÝOOLÏÖÈ•ÒQH‹‘URS‹•ÓÔ“—VÝWNˆ‘”SQHŸJW_KJJ_JW_JW_K‹šY
J_J_JW_J_XÛÛœÝ™ÏVÞÚYˆœÚ[ÝY]H‹XŽžÞšˆ¹oh¹/dÈ‹[Žˆ”ÒSÕQUHŸK]NžÞšˆ¹ab:+ªz/k¹näù¢éy§"z`'ùn©ˆ‹[Žˆ”ÔQQÕT•ÈSˆHÒSÕQUHŸKÛÜNžÞšˆ¹bcy`/¹iïù  xà z-+ùêoùàkùn)¹.#¹/cºaãyoàù/dùgeùg*:gfy«h¹â­¹  y."ù.ãy£!ùd$ybcy¥®xà ˆ‹[Žˆ‘›ÜØ\™Ý[˜ÙKÛÛ[[Ý\ÈYÚ[™HÝÈš\ÝX[Ù[\ˆÙY\HØš™XÝ[Ýš[™È]™[ˆÚ[ˆÝ[ˆŸK[XYÙNˆ‹Ø\ÜÙ]ËÛ[Øš[]KYš[KÛ[Øš[]KY[ËÙXœŸKÚYˆ›X]\šX[‹XŽžÞšˆ¹§d:-*‹[Žˆ“PUT’PSŸK]NžÞšˆº+ªyîäù§¡9`ãù­¬¹/dù. 9¨-ú(ªùç"ù¡àˆ‹[Žˆ”Õ•PÕT‘H‘PQÈRÑHTURQŸKÛÜNžÞšˆº`#ù¦#¹­`y/dù£ëyé.ºjª9§­¸à z(ázacy.#¹cåùb¦ù¥®yd${ï#9d#9¥í¹/çyåfy.©ùdàyæ¡9ç'ùk§¹«å9/¢øà ˆ‹[Žˆ•˜[œÜ\™[›ÝÈ™]™X[Èœ˜[YK\ÜÙ[X›H[™›Ü˜ÙH\™XÝ[ÛˆÚ[H™\Ù\š[™È™[Y]˜X›H›ÜÜ[Û‹ˆŸK[XYÙNˆ‹Ø\ÜÙ]ËÛ[Øš[]KYš[KÛ\]ZYXÚ\ÜÚ\ËÙXœŸKÚYˆœÚYÛ˜[‹XŽžÞšˆ¹àkùabH‹[Žˆ“QÒÒQÓUT‘HŸK]NžÞšˆ¹. 9ç/:+¬9/cùæ¡9l/¹àkú ïzaãÈ‹[ŽˆHRSSQÒSÕH‘SQSP‘TˆŸKÛÜNžÞšˆ¹a­ù¦¥¹cã:/j9.ã¹èk9.í¹àkùîá9ní¹/.9..ºeg9i-:/k9g.»ï#9/où.©ùdàz+á¹b*ú/æùaiy¥m9¥+ùnoùdb¹âaøà ˆ‹[ŽˆÛÛ[™Ø\›HYÚ]È^[™œ›ÛH\™Ø\™H[È˜[œÚ][ÛœËØ\œžZ[™È™XÛÙÛš][Ûˆ›ÝYÚHš[KˆŸK[XYÙNˆ‹Ø\ÜÙ]ËÛ[Øš[]KYš[KÝZ[Y[™\™ÞKÙXœŸWNÙ[˜Ý[Ûˆ

^ØÛÛœÝÙ‹WOYÝ\ÙTÝ]J
KÝKWOYÝ\ÙTÝ]JN
KÜ‹×OYÝ\ÙTÝ]JÌŠKYÝ\ÙT™YŠ[
KT™ÖÙ—KYÏOžØÛÛœÝOZ˜Ý\œ™[ÚYŠ^J\™]\›ŽØÛÛœÝÏ^K™Ù]›Ý[™[™ÐÛY[™XÝ

KJË˜ÛY[TË›Y
KÔËÚYOJË˜ÛY[KTËÜ
KÔËšZYÚÞKœÝ[KœÙ]›Ü\J‹K\›ÙXÝ^‹	Õ
ŒLIX
KKœÝ[KœÙ]›Ü\J‹K\›ÙXÝ^H‹	ÑJŒLIX
KKœÝ[KœÙ]›Ü\J‹K\›ÙXÝ\žH‹	ÊKJJ_YYØ
KKœÝ[KœÙ]›Ü\J‹K\›ÙXÝ\ž‹	ÊKQJJŒßYYØ
_KÏJ
OOžÚ˜Ý\œ™[ËœÝ[KœÙ]›Ü\J‹K\›ÙXÝ\ž‹ŒYÈŠK˜Ý\œ™[ËœÝ[KœÙ]›Ü\J‹K\›ÙXÝ\žH‹ŒYÈŠ_NÜ™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[HYÙK\Ú[‹Yˆœ›ÙXÝ\Þ\Ý[H‹Ú[™[Ž–Ø‹šœÞ
ËÚÚXÚÙ\ŽžÞšˆ¹.©ùdày¨b9/¢È‹[Žˆ”“ÑPÕÐTÑHŸK]NžÞšˆ¹.#y¦+ù. :/¡º/i¹æ¡9®,¹§äûï#9¦+ù. 9ieùcäyn ùìîùîçøà ˆ‹[Žˆ““ÕH‘S‘T‹ˆHÓÓTUHUSÒÖTÕSKˆŸK›ÙNžÞšˆ¹b!ù£h¹oh¹/døà y§d:-*9.#¹àkùabyl`»ï#9nm¹æí9£©z, ù¥m9å.úgh¹æ¡9cãyl!9d£: ïzaãøà ˆ‹[Žˆ”ÝÚ]Ú\ÚYÛˆ^Y\œË[ˆ[™H™Y›XÝ[Ûˆ[™[™\™ÞH[ˆH]™HÝYÙKˆŸ_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×Û[Ù[H‹™]K\™]™X[ŽˆLÚ[™[Ž–Ø‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ÜÝYÙH‹™YŽšÛ”Ú[\“[Ý™NœÛ”Ú[\“X]™N—ËÝ[NžÈ‹K\™Y›XÝ[ÛˆŽKÌL‹KY[™\™ÞHŽœ‹ÌLKÚ[™[Ž–Ø‹šœÞ
š[YÈ‹ÜÜ˜Î™š[XYÙK[˜	Ù]KžšHÈ	Ù]K™[ŸXKš[XYÙJK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ÛYÚŸJK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ØÛÛÜ™[˜]\È‹Ú[™[Ž–Ø‹šœÞÊœÜ[ˆ‹ØÚ[™[Ž–È–‹Ýš[™ÊX]œ›Ý[™
JŒKÊJKœYÝ\
ËŒŠW_JK‹šœÞÊœÜ[ˆ‹ØÚ[™[Ž–È‘H‹Ýš[™ÊŠKœYÝ\
ËŒŠW_JW_JK‹šœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×Ý\™Ù]‹˜\šXKZY[ˆŽˆYH‹Ú[™[Ž–Ø‹šœÞ
šH‹ßJK‹šœÞ
šH‹ßJW_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×Ü[™[‹Ú[™[Ž–Ø‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ÝXœÈ‹›ÛNˆX›\Ý‹˜\šXK[X™[Žˆ¹.©ùdàz+¯º+¨yl`ˆ‹Ú[™[Ž”™Ë›X\

ËJOO˜‹šœÞ
˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹›ÛNˆXˆ‹˜\šXK\Ù[XÝYŽžOOOY‹Û\ÜÓ˜[YNžOOOYÈš\ËXXÝ]™HŽˆˆ‹ÛÛXÚÎŠ
OOšJJKÚ[™[Ž˜‹šœÞ
™KØÛÜN™ËXŸJ_KËšY
J_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ØÛÜH‹Ú[™[Ž–Ø‹šœÞ
™KØÛÜN™]_JK‹šœÞ
™KØÛÜN™˜ÛÜ_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×ÜÛY\œÈ‹Ú[™[Ž–Ø‹šœÞÊ›X™[‹ØÚ[™[Ž–Ø‹šœÞÊœÜ[ˆ‹ØÚ[™[Ž–Ø‹šœÞ
˜ˆ‹ØÚ[™[Žˆ”‘Q“PÕSÓˆŸJK‹šœÞ
œÛX[‹ØÚ[™[Žˆ¹cãyl!9o.¹n©ˆŸJW_JK‹šœÞ
š[œ]‹Ý\Nˆœ˜[™ÙH‹Z[ŽˆŒŒ‹X^ˆŽMH‹˜[YNKÛÚ[™ÙN™ÏO˜J[X™\ŠË\™Ù]˜[YJJ_JK‹šœÞ
›Ý]]‹ØÚ[™[Ž_JW_JK‹šœÞÊ›X™[‹ØÚ[™[Ž–Ø‹šœÞÊœÜ[ˆ‹ØÚ[™[Ž–Ø‹šœÞ
˜ˆ‹ØÚ[™[Žˆ‘S‘T‘ÖHŸJK‹šœÞ
œÛX[‹ØÚ[™[Žˆº ïzaãù¢jy¥hÈŸJW_JK‹šœÞ
š[œ]‹Ý\Nˆœ˜[™ÙH‹Z[ŽˆŒŒ‹X^ˆŒL‹˜[YNœ‹ÛÚ[™ÙN™ÏO›Ê[X™\ŠË\™Ù]˜[YJJ_JK‹šœÞ
›Ý]]‹ØÚ[™[ŽœŸJW_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›ÙXÝ\Þ\Ý[W×Ü›ÛÙˆ‹Ú[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ‘“Ô“HŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ“PUT’PSŸJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ“SÕSÓˆŸJK‹šœÞ
œÛX[‹ØÚ[™[Žˆ“Ó‘H“ÑPÕS‘ÕPQÑHŸJW_JW_JW_JW_J_Y[˜Ý[Ûˆ•

^Ü™]\›ˆ‹šœÞ
œÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ›[Ý[Û‹\ÙXÝ[Ûˆ‹Yˆ›[Ý[Ûˆ‹Ú[™[Ž˜‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\Ú[‹Ú[™[Ž–Ø‹šœÞ
ËÚÚXÚÙ\ŽžÞšˆ¹bª9¥b9k§ºj£9cì‹[Žˆ“SÕSÓˆPˆŸK]NžÞšˆº+ªz)áºh¤ykîy/h9æ¡9¢bùb¯ù/g9aî¹fç¹n¥8à ˆ‹[Žˆ•H’SH‘TÔÓ‘ÈÈSÕTˆS‘ˆŸK›ÙNžÞšˆº`"y¢êy¤«y¥/¸à y¢å¹¢ïy¢%¹k¦¹¨/9ª(yo#øà ¹£!úd¢9ª*¹d$y/cyïk¹£©ùb-º`'ùn©¹¢%¹¥íºeí;ï#:)é¹£©ùêëù/oùå*:/æùn©¹§hxà ˆ‹[ŽˆÚÛÜÙH^KØÜXˆÜˆÛˆÜš^›Û[ÜÚ][ÛˆÛÛ›ÛÈÜYYÜˆ[YKÚ]HÝXÚ\ØY™H˜[œÜÜ™[ÝËˆŸ_JK‹šœÞ
ÕÜ™Y[ÎžJW_J_J_Y[˜Ý[Ûˆ•

^Ü™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™Ø[\žK\ÙXÝ[ÛˆYÙK\Ú[‹Yˆš[XYÙKYšY[‹Ú[™[Ž–Ø‹šœÞ
ËÚÚXÚÙ\ŽžÞšˆ¹oly`ãù¨à:)áˆ‹[Žˆ’SPQÑH’QSŸK]NžÞšˆºgh:/äyå.úgh»ï#9îáº" ¹/&¹..ùbª9¦/¹ã¬8à ˆ‹[Žˆ“SÕ‘HÓÔÑT‹ˆHURSS”ÕÑT”ËˆŸK›ÙNžÞšˆ¹ «9`g9éîùbª9abyki¹¥/¹i)úeg;ï#9à®yaîú/æùaiyi)ùfï¸à ¹¥+ù£ y¥®yd$ze+¸à y®!y¦l9æ¡9bcyd#¹ïîúhmyd£9ï*yåiyfï¹æí:/¯¸à ˆ‹[Žˆ“[Ý™HHÜXØ[[œËÜ[ˆH[œ˜[YK[ˆ\ÙH\œ›ÝÈÙ^\Ë\™XÝ[X›˜Z[ÈÜˆ\™ÙH˜]šYØ][ÛˆÛÛ›ÛËˆŸ_JK‹šœÞ
•Ùœ˜[Y\Î‘UJW_J_Y[˜Ý[ÛˆÕ

^ØÛÛœÝÙ‹WOYÝ\ÙTÝ]J	ÖÌKšY
KOIË™š[™
OO˜KšYOOYŠOÏÉÖÌNÜ™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\Xš[]Y\ÈYÙK\Ú[‹Yˆ˜Ø\Xš[]Y\È‹Ú[™[Ž–Ø‹šœÞ
ËÚÚXÚÙ\ŽžÞšˆ¹méy/g9k©: ïyb¦È‹[ŽˆÐTP’SUQTÈŸK]NžÞšˆ¹.ã¹ë+9. 9§hz)á9b&{ï#9b,9§ 9d#¹. 9n)øà ˆ‹[Žˆ‘”“ÓHH’T”Õ•SHÈH’SS”SQKˆŸK›ÙNžÞšˆ¹«ãúhnz ïyb¦ú`ïy.#¹ç'ùk§¹¨b9/¢ùå.úgh¹æî:/ç»ï#9leyo 9clùcëù§éyç"ùk ùg*9/g9dày.+yæ¡:$/yà®xà ˆ‹[Žˆ‘]™\žHØ\Xš[]HÛÛ›™XÝÈÈš\ÝX[›ÛÙˆœ›ÛHHÛÜšË›ÝHÙ[™\šXÈÙ\šXÙHØ\™ˆŸ_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\Xš[]Y\××Ø›ÙH‹™]K\™]™X[ŽˆLÚ[™[Ž–Ø‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\Xš[]Y\××Û\Ý‹Ú[™[Ž‰Ë›X\
OOžØÛÛœÝXKšYOO]KšYÜ™]\›ˆ‹šœÞÊ˜\XÛH‹ØÛ\ÜÓ˜[YNœÈš\ËXXÝ]™HŽˆˆ‹Ú[™[Ž–Ø‹šœÞÊ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹˜\šXKY^[™YŽœ‹ÛÛXÚÎŠ
OOšJKšY
KÚ[™[Ž–Ø‹šœÞ
™KØÛÜN˜K]_JK‹šœÞ
œÜ[ˆ‹ØÚ[™[ŽœÈ‹HŽˆŠÈŸJW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ø\Xš[]Y\××Ø[œÝÙ\ˆ‹Ú[™[Ž–Ø‹šœÞ
™KØÛÜN˜K˜ÛÜ_JK‹šœÞ
œ‹ØÚ[™[Ž˜Kœ›ÛÙŸJK‹šœÞ
š[YÈ‹ÜÜ˜Î˜Kš[XYÙK[ˆˆ‹ØY[™Îˆ›^žHŸJW_JW_KKšY
_J_JK‹šœÞÊ™šYÝ\™H‹ØÛ\ÜÓ˜[YNˆ˜Ø\Xš[]Y\××Ýš\ÝX[‹Ú[™[Ž–Ø‹šœÞ
š[YÈ‹ÜÜ˜ÎKš[XYÙK[˜	ÝK]KžšHÈ	ÝK]K™[ŸXKKš[XYÙJK‹šœÞÊ™šYØØ\[Ûˆ‹ØÚ[™[Ž–Ø‹šœÞ
™KØÛÜNK]_JK‹šœÞ
œÜ[ˆ‹ØÚ[™[ŽKœ›ÛÙŸJW_JW_JW_JW_J_Y[˜Ý[Ûˆ•

^ØÛÛœÝÙ‹WOYÝ\ÙTÝ]J[
KOX\Þ[˜ÊKŠOOžØ]ØZ]˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
ŠK˜Ø]Ú


OOžßJKJJKÚ[™ÝËœÙ][Y[Ý]


OOšJ[
KMŒ
_NÜ™]\›ˆ‹šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛXÝ‹Yˆ˜ÛÛXÝ‹Ú[™[Ž–Ø‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛXÝ×ÛYYXH‹Ú[™[Ž˜‹šœÞ
]‹ÜÜ˜Îˆ‹Ø\ÜÙ]ËÛ[Øš[]KYš[KÙ[™\™ÞKY›ÝË›\‹ÜÝ\Žˆ‹Ø\ÜÙ]ËÛ[Øš[]KYš[KÝZ[Y[™\™ÞKÙXœŸJ_JK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛXÝ×Ý™Z[ŸJK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\Ú[ÛÛXÝ×Ú[›™\ˆ‹Ú[™[Ž–Ø‹šœÞ
™KØÛÜNžÞšˆ¹d"9/g: e9ìîÈ‹[Žˆ”ÕT•H“Ò‘PÕŸKÛ\ÜÓ˜[YNˆ˜ÛÛXÝ×ÚÚXÚÙ\ˆŸJK‹šœÞÊšˆ‹ØÚ[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ¹¢¢¹."ù. 9.*¹.%¹åc;ï#ŸJK‹šœÞ
™[H‹ØÚ[™[Žˆ¹kï9¯%9¢$9ç'øà ˆŸJK‹šœÞ
œÛX[‹ØÚ[™[Žˆ“UTÈT‘PÕÒUÓÓQTÈ‘VˆŸJW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛXÝ×ØXÝ[ÛœÈ‹Ú[™[Ž–Ø‹šœÞÊœËÚ™YŽˆ›XZ[ÎMÍÍLÎL\K˜ÛÛH‹Û\ÜÓ˜[YNˆ˜ÛÛXÝXØ\™‹Ú[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ¹å-ykd:`«¹ë¬HŸJK‹šœÞ
˜ˆ‹ØÚ[™[ŽˆMÍÍLÎL\K˜ÛÛHŸJK‹šœÞ
œÛX[‹ØÚ[™[Žˆ‘SPRSTÈ8¡¥ÈŸJW_JK‹šœÞÊœËÚ™YŽˆ[ŒNMŒLŽMLÍˆ‹Û\ÜÓ˜[YNˆ˜ÛÛXÝXØ\™‹Ú[™[Ž–Ø‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ¹d"9/g9å-z+çHŸJK‹šœÞ
˜ˆ‹ØÚ[™[ŽˆŒNHŒLˆMLÍˆŸJK‹šœÞ
œÛX[‹ØÚ[™[ŽˆÐSTÈ8¡¥ÈŸJW_JW_JK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛÛXÝ×ØÛÜKXXÝ[ÛœÈ‹Ú[™[Ž–Ø‹šœÞ
˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOJ™[XZ[‹MÍÍLÎL\K˜ÛÛHŠKÚ[™[Ž™OOH™[XZ[È¹mì¹i#yb-º`«¹ë¬HÈÓÔQQŽˆ¹i#yb-º`«¹ë¬HÈÓÔHSPRSŸJK‹šœÞ
˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹ÛÛXÚÎŠ
OOJœÛ™H‹ŒNMŒLŽMLÍˆŠKÚ[™[Ž™OOHœÛ™HÈ¹mì¹i#yb-¹å-z+çHÈÓÔQQŽˆ¹i#yb-¹å-z+çHÈÓÔHÓ‘HŸJW_JK‹šœÞÊ™›ÛÝ\ˆ‹ØÚ[™[Ž–Ø‹šœÞ
‹ØÛÛ\XÝˆLJK‹šœÞ
œÜ[ˆ‹ØÚ[™[Žˆ–RˆRQÐÈÕQSÈ0ªHŒˆŸJK‹šœÞ
˜H‹Ú™YŽˆˆÝÜ‹Ú[™[Žˆº/å9fçºhmº`êÈPÒÈÈÔ8¡¤HŸJW_JW_JW_J_Y[˜Ý[ÛˆU

^ØÛÛœÝYÝ\ÙT™YŠ[
NÜ™]\›ˆÝ\ÙQY™™XÝ


OOžÚYŠÚ[™ÝË›X]ÚYYXJŠ™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJHŠK›X]Ú\Ê\™]\›ŽØÛÛœÝO[™]ÈÕ
Û\œ‹Œ‹Û[ÛÝÚY[ˆLÞ[˜ÕÝXÚˆL_JKO\OKœ˜YŠŠŒYLÊNÜ™]\›ˆK›ÛŠœØÜ›Û‹\]JK™KXÚÙ\‹˜Y
JK™KXÚÙ\‹›YÔÛ[ÛÝ[™Ê
K

OOžÙ™KXÚÙ\‹œ™[[Ý™JJKK™\Ý›ÞJ
__K×JKÊ

OOžØÛÛœÝO]Ú[™ÝË›X]ÚYYXJŠ™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJHŠK›X]Ú\ÎÙ™K[Y[[™JÙY˜][ÎžÙX\ÙNˆ™^Ë›Ý]Ÿ_JK™œ›ÛJ‹œÚ]KZXY\—×Ø˜\ˆ‹ÞN‹LÍ‹ÜXÚ]NŒ\˜][ÛŽšOÌ‹ŽKŒLŠK™œ›ÛJ‹š\›××Ù^YXœ›ÝÈÜ[ˆ‹ÞNŒNÜXÚ]NŒ\˜][ÛŽšOÌ‹MKÝYÙÙ\Ž‹ŒKŒŠK™œ›ÛJ‹š\›ÈHÜ[ˆ‹ÞT\˜Ù[ŒLL‹ÜXÚ]NŒ\˜][ÛŽšOÌŒKŒKX\ÙNˆœÝÙ\›Ý]ŸKŒJK™œ›ÛJ‹š\›ÈH[H‹Þ\˜Ù[‹LL‹ÜXÚ]NŒ\˜][ÛŽšOÌ‹ŽMKX\ÙNˆ˜Ú\˜Ë›Ý]ŸKŠK™œ›ÛJ‹š\›××ØÛÛ[ˆš\›××ØXÝ[ÛœÈ‹ÞNŒŽÜXÚ]NŒ\˜][ÛŽšOÌ‹ËÝYÙÙ\Ž‹ŒLŸKMJK™KÊ‹œÚ]K\›ÙÜ™\Ü××Ø˜\ˆ‹ÜØØ[VŒKX\ÙNˆ››Û™H‹ØÜ›ÛšYÙÙ\ŽžÜÝ\Œ[™ˆ›X^‹ØÜXŽ‹ŒŸ_JK_
™KÊ‹š\›ËYš[HšY[È‹ÜØØ[NŒKŒL‹š[\ŽˆœØ]\˜]JÍJHÛÛ˜\Ý
KŒŠH‹X\ÙNˆ››Û™H‹ØÜ›ÛšYÙÙ\ŽžÝšYÙÙ\Žˆ‹š\›È‹Ý\ˆÜÜ‹[™ˆ˜›ÝÛHÜ‹ØÜXŽŒKŒ__JK™KÊ‹š\›××ØÛÛ[‹ÞT\˜Ù[ŒNÜXÚ]N‹ŒNX\ÙNˆ››Û™H‹ØÜ›ÛšYÙÙ\ŽžÝšYÙÙ\Žˆ‹š\›È‹Ý\ˆIHÜ‹[™ˆ˜›ÝÛHÜ‹ØÜXŽ‹Ž_JJK™K][ËÐ\œ˜^J–Ù]K\™]™X[HŠK™›Ü‘XXÚ


OOžÙ™K™œ›ÛJÞNšOÌ
Ù	LÊŒLšOÌ™	LÌLŽ‹LL‹ÜXÚ]NŒ\˜][ÛŽšOÌ‹ŽMKX\ÙN™	LÈ˜Ú\˜Ë›Ý]ŽˆœÝÙ\ŒË›Ý]‹ØÜ›ÛšYÙÙ\ŽžÝšYÙÙ\ŽšÝ\ˆÜ	H‹Û˜ÙNˆL_J_JNØÛÛœÝOY™K›X]ÚYYXJ
NØK˜Y
ŠZ[‹]ÚYˆL
H‹

OOžØÛÛœÝYØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹ÛÜš××Ý˜XÚÈŠKYØÝ[Y[œ]Y\žTÙ[XÝÜŠ‹ÛÜš××Ü[ˆŠNÚYŠZY
\™]\›ŽØÛÛœÝJ
OO“X]›X^
œØÜ›ÛÚY]Ú[™ÝËš[›™\•ÚY
Í
NÙ™KÊÞŠ
OO‹\

KX\ÙNˆ››Û™H‹ØÜ›ÛšYÙÙ\ŽžÝšYÙÙ\Ž™Ý\ˆÜÜ‹[™Š
OO˜
ÏIÜ

JÝÚ[™ÝËš[›™\’ZYÚ
‹_X[ŽˆLØÜXŽšOÈLNŒK[˜[Y]SÛ”™Yœ™\ÚˆL[XÚ\]T[ŽŒ__J_JK™K][ËÐ\œ˜^J‹˜Ø\Xš[]Y\××Û\Ý\XÛHŠK™›Ü‘XXÚ


OOžÚ_™K™œ›ÛJÞ™	LÌÎ‹LÎÜXÚ]NŒ\˜][ÛŽ‹Ì‹X\ÙN™	LÈ™^Ë›Ý]ŽˆœÝÙ\ŒË›Ý]‹ØÜ›ÛšYÙÙ\ŽžÝšYÙÙ\ŽšÝ\ˆÜ	H‹Û˜ÙNˆL_J_JNÛ]LØÛÛœÝÏJ
OOžÑœ™Yœ™\Ú

KÚ[™ÝË˜Ø[˜Ù[[š[X][Û‘œ˜[YJŠK]Ú[™ÝËœ™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžØÛÛœÝYXÛÙUT’PÛÛ\Û™[
Ú[™ÝË›ØØ][Û‹š\ÚœÛXÙJJJNÚ	‰™ØÝ[Y[™Ù][[Y[žRY

OËœØÜ›Û[ÕšY]ÊØ›ØÚÎˆœÝ\‹™Z]š[ÜŽˆ˜]]ÈŸJ_J_NÜ™]\›ˆØÝ[Y[œ™XYTÝ]OOOH˜ÛÛ\]HÛÊ
NÚ[™ÝË˜Y]™[\Ý[™\Š›ØY‹ËÛÛ˜ÙNˆLJKÚ[™ÝË˜Y]™[\Ý[™\Šš\ÚÚ[™ÙH‹ÊK

OOžÝÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Š›ØY‹ÊKÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Šš\ÚÚ[™ÙH‹ÊKÚ[™ÝË˜Ø[˜Ù[[š[X][Û‘œ˜[YJŠKKœ™]™\

__KÜØÛÜN™ŸJK‹šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\‹™YŽ™‹Ú[™[Ž–Ø‹šœÞ
˜H‹ØÛ\ÜÓ˜[YNˆœÚÚ\[[šÈ‹™YŽˆˆÝÛÜšÈ‹Ú[™[Žˆº-ìùb,9/g9dàHÈÒÒTÈÓÔ’ÈŸJK‹šœÞ
ÕßJK‹šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÚ]K\›ÙÜ™\ÜÈ‹Ú[™[Ž˜‹šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÚ]K\›ÙÜ™\Ü××Ø˜\ˆŸJ_JK‹šœÞ
UßJK‹šœÞÊ›XZ[ˆ‹ØÚ[™[Ž–Ø‹šœÞ
•ßJK‹šœÞ
ÕßJK‹šœÞ
ÕßJK‹šœÞ
ßJK‹šœÞ
•ßJK‹šœÞ
•ßJK‹šœÞ
ÕßJK‹šœÞ
•ßJW_JK‹šœÞ
•ßJW_J_UË˜Ü™X]T›ÛÝ
ØÝ[Y[™Ù][[Y[žRY
œ›ÛÝŠJKœ™[™\Š‹šœÞ
Ý”ÝšXÝ[ÙKØÚ[™[Ž˜‹šœÞ
UßJ_JJNÂ