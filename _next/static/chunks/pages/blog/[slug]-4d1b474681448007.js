(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{49937:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return c(1188)}])},26213:function(a,b,c){"use strict";var d=c(26042),e=c(99534),f=c(85893),g=c(43458),h=c(87918);b.Z=function(a){var b=a.label,c=a.link,i=a.icon,j=a.key,k=(0,e.Z)(a,["label","link","icon","key"]),l=i({style:{marginLeft:"0.5em"}});return(0,f.jsx)(g.C,{href:c,underline:"none",children:(0,f.jsx)(h.Z,{icon:l,label:b,variant:"outlined",sx:(0,d.Z)({cursor:"pointer"},k.sx)})},j)}},21463:function(a,b,c){"use strict";var d=c(85893),e=c(9008),f=c.n(e);b.Z=function(a){var b=a.pageTitle,c=a.title,e=a.description,g=a.image,h=a.pageType;return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:void 0===b?"nomomon | website":b}),(0,d.jsx)("meta",{property:"og:title",name:"title",content:void 0===c?"nomomon's website":c}),(0,d.jsx)("meta",{property:"og:description",name:"description",content:void 0===e?"Hi, I'm Nurmukhambetov Mansur. I'm a software engineer and a data scientist. I'm interested in machine learning, data science, and web development.":e}),g&&(0,d.jsx)("meta",{property:"og:image",name:"image",content:g}),(0,d.jsx)("meta",{property:"og:type",content:void 0===h?"article":h}),(0,d.jsx)("meta",{property:"og:locale",content:"en_US"})]})}},1188:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return B},default:function(){return C}});var d=c(70603),e=c(85893),f=c(9980),g=c.n(f),h=c(62308),i=c(34138),j=c(50161),k=c(87918),l=c(65582),m=c(15861),n=c(77274),o=c(8193),p=c(86893),q=c(97735),r=c(21463),s=c(26213),t=function(a){var b;return Math.ceil(a.trim().split(/\s+/g).length/200)},u={html:!0,linkify:!0},v={idPrefix:""},w={inline:!1};function x(a){var b=a.frontmatter,c="notebookLink"in b&&b.notebookLink,f="achievements"in b&&b.achievements>0;return(0,e.jsx)(n.Z,{spacing:1,direction:"row",sx:{mb:2},children:[[c,"Open in Colab",b.notebookLink,q.fAA],[f,"Achievements","#achievements",p.HR2],].filter(function(a){return(0,d.Z)(a,1)[0]}).map(function(a,b){var c=(0,d.Z)(a,4),f=(c[0],c[1]),g=c[2],h=c[3];return(0,e.jsx)(s.Z,{label:f,link:g,icon:h},b)})})}function y(a){var b=a.tags;return(0,e.jsx)(n.Z,{direction:"row",spacing:1,sx:{mt:6,mb:-6},children:b.map(function(a,b){return(0,e.jsx)(k.Z,{label:a},b)})})}function z(a){var b=a.date,c=new Date(b);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.xHR,{style:{marginBottom:-2,marginRight:4}}),c.toLocaleDateString("en-En",{day:"numeric",month:"short",year:"numeric"})]})}function A(a){var b=t(a.content);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("span",{style:{marginLeft:10},children:[(0,e.jsx)(o.cjn,{style:{marginBottom:-2,marginRight:4}}),b," ",b>1?"mins":"min"," read"]})})}var B=!0,C=function(a){var b=a.frontmatter,c=a.content,d=g()(u).use(j,v).use(h,{}).use(i,w).render(c).replaceAll("mjx-container","span");return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.Z,{pageTitle:"nomomon | ".concat(b.title.toLowerCase()),title:b.title,description:b.description,image:b.imageURL,pageType:"article"}),(0,e.jsxs)(l.Z,{maxWidth:"md",className:"markdown-body",children:[(0,e.jsx)("h1",{id:b.title.toLowerCase().split(" ").join("-"),children:b.title}),(0,e.jsxs)(m.Z,{sx:{mt:1,mb:1.5},variant:"subtitle1",component:"p",color:"text.secondary",children:[(0,e.jsx)(z,{date:b.date}),(0,e.jsx)(A,{content:c})]}),(0,e.jsx)(x,{frontmatter:b}),(0,e.jsx)("article",{dangerouslySetInnerHTML:{__html:d}}),(0,e.jsx)(y,{tags:b.tags})]})]})}}},function(a){a.O(0,[617,879,415,918,893,306,774,888,179],function(){var b;return a(a.s=49937)}),_N_E=a.O()}])