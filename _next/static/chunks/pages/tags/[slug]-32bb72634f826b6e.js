(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{9044:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[slug]",function(){return r(9318)}])},3949:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893);let l=e=>{var t;return e&&("string"!=typeof e||"Invalid Date"!==(e=new Date(e)).toString())&&null!==(t=e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))&&void 0!==t?t:""};var o=r(7851);let a=e=>{let{frontmatter:t}=e,r=l(t.date),a="w-full h-64 py-20 flex flex-col items-center";a=t.banner?(0,o.m)(a,"bg-center bg-cover bg-no-repeat"):(0,o.m)(a,"bg-gradient-to-r from-purple-500 to-red-500");let u=t.banner&&{backgroundImage:"url(".concat(t.banner,")")}||void 0;return(0,n.jsxs)("div",{className:a,style:u,children:[(0,n.jsx)("h1",{className:"text-white text-6xl drop-shadow-md",children:t.title}),(0,n.jsx)("p",{className:"mb-4 text-white opacity-75 font-light",children:t.description}),r&&(0,n.jsx)("div",{className:"text-white opacity-75 text-sm font-light py-1 px-4 rounded-md backdrop-blur-xl bg-black/30",children:r})]})};var u=a},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),a=r(1003),u=r(7795),i=r(4465),c=r(2692),s=r(8245),f=r(9246),d=r(227),p=r(3468);let h=new Set;function v(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:u.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:h,children:g,prefetch:x,passHref:y,replace:b,shallow:_,scroll:j,locale:w,onClick:C,onMouseEnter:k,onTouchStart:M,legacyBehavior:N=!1}=e,E=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,N&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let O=!1!==x,P=o.default.useContext(c.RouterContext),S=o.default.useContext(s.AppRouterContext),L=null!=P?P:S,T=!P,{href:I,as:R}=o.default.useMemo(()=>{if(!P){let e=m(u);return{href:e,as:h?m(h):e}}let[e,t]=a.resolveHref(P,u,!0);return{href:e,as:h?a.resolveHref(P,h):t||e}},[P,u,h]),D=o.default.useRef(I),U=o.default.useRef(R);N&&(n=o.default.Children.only(r));let H=N?n&&"object"==typeof n&&n.ref:t,[K,Z,B]=f.useIntersection({rootMargin:"200px"}),A=o.default.useCallback(e=>{(U.current!==R||D.current!==I)&&(B(),U.current=R,D.current=I),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[R,H,I,B,K]);o.default.useEffect(()=>{L&&Z&&O&&v(L,I,R,{locale:w})},[R,I,Z,w,O,null==P?void 0:P.locale,L]);let X={ref:A,onClick(e){N||"function"!=typeof C||C(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,l,u,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?o.default.startTransition(h):h()}(e,L,I,R,b,_,j,w,T,O)},onMouseEnter(e){N||"function"!=typeof k||k(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(O||!T)&&v(L,I,R,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof M||M(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(O||!T)&&v(L,I,R,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==w?w:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(R,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);X.href=t||p.addBasePath(i.addLocale(R,e,null==P?void 0:P.defaultLocale))}return N?o.default.cloneElement(n,X):o.default.createElement("a",Object.assign({},E,X),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!o,[s,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},u.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[c,r,t,s,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,s,h]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9318:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return h}});var n=r(5893),l=r(9008),o=r.n(l),a=r(1664),u=r.n(a);let i=e=>{let{href:t,target:r,children:l,className:o}=e;return(0,n.jsx)(u(),{href:t,passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("a",{target:r,className:o,children:l})})};var c=r(3949);let s=e=>{let{post:t}=e;return(0,n.jsxs)("div",{className:"w-full rounded-md bg-gradient-to-r from-purple-500 to-red-500 py-4 px-8",children:[(0,n.jsx)("h2",{className:"text-white text-3xl drop-shadow-md",children:t.title}),(0,n.jsx)("p",{className:"text-white opacity-75 font-light",children:null==t?void 0:t.date}),(0,n.jsx)("p",{className:"text-white opacity-75 font-light",children:t.description})]})},f=e=>{let{tag:t,posts:r}=e;return(0,n.jsxs)("div",{className:"w-full overflow-y-auto",children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:t||"Tag"})}),(0,n.jsx)(c.Z,{frontmatter:{title:t}}),(0,n.jsx)("section",{className:"flex flex-col gap-4 w-full max-w-xl m-auto mt-8 max-sm:px-4",children:r.map((e,t)=>(0,n.jsx)(i,{href:"/"+e.slug,children:(0,n.jsx)(s,{post:e},t)}))})]})},d=e=>{let{tag:t,posts:r}=e;return(0,n.jsx)(f,{tag:t,posts:r})};var p=!0,h=d},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[440,774,888,179],function(){return e(e.s=9044)}),_N_E=e.O()}]);