(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(81123)}])},57102:function(e,t,r){"use strict";var l=r(85893),n=r(41664),a=r.n(n);let s=e=>{let{href:t,target:r,children:n,className:s}=e;return(0,l.jsx)(a(),{href:t,passHref:!0,legacyBehavior:!0,children:(0,l.jsx)("a",{target:r,className:s,children:n})})};t.Z=s},25027:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var l=r(85893),n=r(11163),a=r(66180),s=r(57102);let c=e=>{let{links:t}=e,r=(0,n.useRouter)();return(0,l.jsx)("div",{className:"flex flex-row justify-end mb-8",children:t.map((e,t)=>{let n="ml-4";return n=r.asPath!==e.href?(0,a.m)(n,"text-gray-500 hover:text-gray-600 underline"):(0,a.m)(n,"cursor-default"),(0,l.jsx)(s.Z,{href:e.href,className:n,children:e.label},t)})})};var u=r(67294);let i=()=>{let[e,t]=(0,u.useState)("");return(0,u.useEffect)(()=>{t(window.origin.replace("https://","").replace("http://","").replace("www.",""))},[]),(0,l.jsx)("footer",{className:"mt-16 mb-8 w-full max-w-screen-sm mx-auto",children:(0,l.jsxs)("p",{className:"text-gray-500 text-xs",children:["2019 - ",new Date().getFullYear()," \xa9 ",e]})})},o=e=>{let{title:t,children:r,useNavLine:n=!0}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("article",{className:"mt-16 min-h-full w-full max-w-screen-sm mx-auto",children:[(0,l.jsx)("h1",{className:"mb-8",children:t}),n&&(0,l.jsx)(c,{links:[{href:"/",label:"Home"},{href:"/tags/project/",label:"Projects"},{href:"/tags/blog/",label:"Blog"},{href:"/tags/note/",label:"Notes"}]}),r]}),(0,l.jsx)(i,{})]})};var f=o},81123:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return _}});var l=r(85893),n=r(25027),a=r(84651),s=r.n(a),c=r(62308),u=r.n(c),i=r(34138),o=r.n(i),f=r(40591),h=r.n(f),d=r(9980),m=r.n(d);let x={html:!0,linkify:!0,breaks:!0,typographer:!0},w={inline:!1},g={validate:e=>e.trim().match(/^\[\!(.*)\]\s+(.*)$/),render:(e,t)=>{let r=e[t].info.trim().match(/^\[\!(.*)\]\s+(.*)$/);return 1===e[t].nesting?'<div class="callout callout-'.concat(r[1].toLowerCase(),'"><div class="callout-title"><span class="callout-icon"></span>').concat(r[2],'</div><div class="callout-content"> '):"</div></div>"}},j=e=>{let t=m()(x).use(u(),{}).use(s(),{label:!0,labelAfter:!0}).use(o(),w).use(h(),"callout",g).render(e);return t},p=e=>{let{title:t,content:r}=e,a=j(r);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.Z,{title:t,children:(0,l.jsx)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:a}})})})};var v=!0,_=p}},function(e){e.O(0,[879,961,510,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);