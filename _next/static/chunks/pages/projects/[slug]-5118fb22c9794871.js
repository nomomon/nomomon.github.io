(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{48022:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[slug]",function(){return c(24158)}])},26213:function(a,b,c){"use strict";var d=c(26042),e=c(99534),f=c(85893),g=c(43458),h=c(87918);b.Z=function(a){var b=a.label,c=a.link,i=a.icon,j=a.key,k=(0,e.Z)(a,["label","link","icon","key"]),l=i({style:{marginLeft:"0.5em"}});return(0,f.jsx)(g.C,{href:c,underline:"none",children:(0,f.jsx)(h.Z,{icon:l,label:b,variant:"outlined",sx:(0,d.Z)({cursor:"pointer"},k.sx)})},j)}},21463:function(a,b,c){"use strict";var d=c(85893),e=c(9008),f=c.n(e);b.Z=function(a){var b=a.pageTitle,c=a.title,e=a.description,g=a.image,h=a.pageType;return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:void 0===b?"nomomon | website":b}),(0,d.jsx)("meta",{property:"og:title",name:"title",content:void 0===c?"nomomon's website":c}),(0,d.jsx)("meta",{property:"og:description",name:"description",content:void 0===e?"Hi, I'm Nurmukhambetov Mansur. I'm a software engineer and a data scientist. I'm interested in machine learning, data science, and web development.":e}),g&&(0,d.jsx)("meta",{property:"og:image",name:"image",content:g}),(0,d.jsx)("meta",{property:"og:type",content:void 0===h?"article":h}),(0,d.jsx)("meta",{property:"og:locale",content:"en_US"})]})}},24158:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return w}});var d=c(70603),e=c(85893),f=c(9980),g=c.n(f),h=c(26649),i=c(34138),j=c(50161),k=c(87918),l=c(65582),m=c(77274),n=c(86893),o=c(26213),p=c(21463),q={html:!0,linkify:!0},r={idPrefix:""},s={throwOnError:!1,delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],ignoredTags:["script","noscript","style","textarea","pre","code","p"]},t={inline:!1};function u(a){var b=a.frontmatter,c="sourceLink"in b&&b.sourceLink,f="demoLink"in b&&b.demoLink,g="achievements"in b&&b.achievements>0;return(0,e.jsx)(m.Z,{spacing:1,direction:"row",sx:{mb:2},children:[[c,"Github",b.sourceLink,n.uOf],[f,"Demo",b.demoLink,n.KCr],[g,"Achievements","#achievements",n.HR2],].filter(function(a){return(0,d.Z)(a,1)[0]}).map(function(a,b){var c=(0,d.Z)(a,4),f=(c[0],c[1]),g=c[2],h=c[3];return(0,e.jsx)(o.Z,{label:f,link:g,icon:h},b)})})}function v(a){var b=a.tools;return(0,e.jsx)(m.Z,{direction:"row",spacing:1,sx:{mt:6,mb:-6},children:b.map(function(a,b){return(0,e.jsx)(k.Z,{label:a},b)})})}var w=!0;b.default=function(a){var b=a.frontmatter,c=a.content,d=g()(q).use(j,r).use(h,s).use(i,t).render(c);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.Z,{pageTitle:"nomomon | ".concat(b.title.toLowerCase()),title:b.title,description:b.description,image:b.imageURL,pageType:"article"}),(0,e.jsxs)(l.Z,{maxWidth:"md",className:"markdown-body",children:[(0,e.jsx)("h1",{id:b.title.toLowerCase().split(" ").join("-"),children:b.title}),(0,e.jsx)(u,{frontmatter:b}),(0,e.jsx)("article",{dangerouslySetInnerHTML:{__html:d}}),(0,e.jsx)(v,{tools:b.tools})]})]})}}},function(a){a.O(0,[918,370,893,127,774,888,179],function(){var b;return a(a.s=48022)}),_N_E=a.O()}])