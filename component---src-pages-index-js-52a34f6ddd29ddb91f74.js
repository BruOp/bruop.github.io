(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(205),o=n(215),c=n(199),l=n(197),A=n(196),s=n(243),d=l.c.h3.withConfig({displayName:"blog_post_list_item__PostTitle",componentId:"sc-1arjtgv-0"})(["margin-bottom:0;"]),u=l.c.p.withConfig({displayName:"blog_post_list_item__PostBlurb",componentId:"sc-1arjtgv-1"})(["margin-bottom:",";"],Object(A.a)(1.2)),m=function(t){var e=t.post,n=t.className,a=e.frontmatter.title||e.fields.slug;return r.a.createElement("div",{className:n},r.a.createElement(d,null,r.a.createElement(c.a,{to:e.fields.slug},a)),r.a.createElement(s.a,null,e.frontmatter.date),r.a.createElement(u,{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))};n.d(e,"pageQuery",function(){return g});var p=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:this.props.location,title:e},r.a.createElement(o.a,{title:"All posts",keywords:["blog","computer graphics","3d programming","real time rendering"]}),n.map(function(t){var e=t.node;return r.a.createElement(m,{key:e.fields.slug,post:e})}))},a}(r.a.Component),g=(e.default=p,"2785444898")},196:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return A});var a=n(223),r=n.n(a),i=n(224),o=n.n(i),c=new r.a(o.a);var l=c.rhythm,A=c.scale},198:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});n(29),n(30),n(13),n(49);var a=n(197),r={primary:"#444444",secondary:"#1ca086",tertiary:"#EF9803",lighter:"#666666",lightest:"#dddddd"},i={large:900,medium:768},o=Object.keys(i).reduce(function(t,e){return t[e]=function(){return Object(a.b)(["@media (min-width:","em){","}"],i[e]/16,a.b.apply(void 0,arguments))},t},{})},199:function(t,e,n){"use strict";n.d(e,"b",function(){return A});var a=n(0),r=n.n(a),i=n(66),o=n.n(i);n.d(e,"a",function(){return o.a});n(200),n(8).default.enqueue;var c=r.a.createContext({});function l(t){var e=t.staticQueryData,n=t.data,a=t.query,i=t.render,o=n?n.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var A=function(t){var e=t.data,n=t.query,a=t.render,i=t.children;return r.a.createElement(c.Consumer,null,function(t){return r.a.createElement(l,{data:e,query:n,render:a||i,staticQueryData:t})})}},200:function(t,e,n){var a;t.exports=(a=n(202))&&a.default||a},202:function(t,e,n){"use strict";n.r(e);n(23);var a=n(0),r=n.n(a),i=n(94);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null}},204:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/2gAMAwEAAhADEAAAAc27X0w8NKRsSk6xC7//xAAbEAACAwEBAQAAAAAAAAAAAAABAgMREgAQE//aAAgBAQABBQLNvLFHjJ5L+s1hNDxnYih3/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAECEiUYH/2gAIAQEABj8C9mjdBdhxaJr/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMUEQUWH/2gAIAQEAAT8hrrTtAs7o6PEZWrYeHbp8WCRNokyj/9oADAMBAAIAAwAAABBsyMH/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAEDAQE/EAI3V5N//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ECP/xAAcEAEAAwEBAAMAAAAAAAAAAAABABEhMWFBUZH/2gAIAQEAAT8Qb3eJC0PuU5wKQ0z17zYjBw8rjHQa6VwvszKX8gWKyBgL4Y7AX0n/2Q==",width:80,height:80,src:"/static/5bdd83d43d9b552383d43ce632d3df4f/fce1d/profile-pic.jpg",srcSet:"/static/5bdd83d43d9b552383d43ce632d3df4f/fce1d/profile-pic.jpg 1x,\n/static/5bdd83d43d9b552383d43ce632d3df4f/c4de8/profile-pic.jpg 1.5x,\n/static/5bdd83d43d9b552383d43ce632d3df4f/c3234/profile-pic.jpg 2x"}}}}}},205:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=(n(214),n(204)),o=n(199),c=n(222),l=n.n(c),A=n(197),s=n(196),d=n(198);function u(){var t=p(["\n      display: block;\n      margin: initial;\n    "]);return u=function(){return t},t}function m(){var t=p(["\n      margin: initial;\n    "]);return m=function(){return t},t}function p(t,e){return e||(e=t.slice(0)),t.raw=e,t}var g=[{to:"/",text:"Blog Posts"},{to:"/about",text:"About"}],f=function(t){var e=t.className;return r.a.createElement("nav",{className:e},r.a.createElement("ul",null,g.map(function(t,e){return r.a.createElement("li",{key:e},r.a.createElement(o.a,{to:t.to},t.text))})))},h=f=Object(A.c)(f).withConfig({displayName:"nav_list__NavList",componentId:"sc-160lswq-0"})(["ul{list-style:none;padding-left:0;margin-left:0;margin:0;","}li{display:inline-block;margin:0 "," 0 0;"," &:last-child{margin:0;}}"],d.b.medium(m()),Object(s.a)(.5),d.b.medium(u())),b={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}},E=function(t){var e=t.icon,n=t.className;return r.a.createElement("svg",{className:n,viewBox:e.viewBox},r.a.createElement("path",{d:e.path}))},y=[{icon:b.GITHUB,to:"https://github.com/BruOp",alt:"Github Profile"},{icon:b.TWITTER,to:"https://twitter.com/BruOps",alt:"@BruOps twitter profile"},{icon:b.EMAIL,to:"mailto:bruno.opsenica@gmail.com",alt:"Email"}],v=A.c.li.withConfig({displayName:"social__SocialLink",componentId:"uwxdkq-0"})(["display:inline-block;height:",";width:",";padding:",";margin-right:8px;border-radius:100%;border:1px solid ",";box-sizing:border-box;transition:fill 500ms,border 500ms;&:hover{border:1px solid ",";fill:",";}"],Object(s.a)(1.4),Object(s.a)(1.4),Object(s.a)(.3),d.a.lightest,d.a.tertiary,d.a.tertiary),w=function(t){var e=t.className;return r.a.createElement("ul",{className:e},y.map(function(t,e){return r.a.createElement(v,{key:e},r.a.createElement("a",{href:t.to},r.a.createElement(E,{icon:t.icon})))}))},B=w=Object(A.c)(w).withConfig({displayName:"social__SocialLinks",componentId:"uwxdkq-1"})(["list-style:none;margin:0;"]);function j(){var t=N(['\n    align-content: initial;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas:\n      "pic"\n      "text";\n  ']);return j=function(){return t},t}function x(){var t=N(["\n\n    p {\n      display: block;\n    }\n\n    "," {\n      margin-bottom: ",";\n    }\n\n    "," {\n      display: block;\n    }\n  "]);return x=function(){return t},t}function N(t,e){return e||(e=t.slice(0)),t.raw=e,t}var _=Object(A.c)(l.a).withConfig({displayName:"sidebar__ProfilePic",componentId:"sc-16sd0pi-0"})([""]),O=A.c.div.withConfig({displayName:"sidebar__SideBarBlurb",componentId:"sc-16sd0pi-1"})(["h2{",";margin-top:0;}p{"," color:#666666;display:none;}","{display:none;}",""],Object(s.b)(.2),Object(s.b)(-.1),B,d.b.medium(x(),h,Object(s.a)(1),B)),C=A.c.div.withConfig({displayName:"sidebar__SideBarWrapper",componentId:"sc-16sd0pi-2"})(["display:grid;grid-gap:",';grid-template-rows:auto;grid-template-columns:auto 1fr;grid-template-areas:"pic text";align-content:center;'," ","{justify-self:center;grid-area:pic;}","{grid-area:text;}"],Object(s.a)(.5),d.b.medium(j()),_,O),I=function(t){var e=t.className;return r.a.createElement(o.b,{query:Q,render:function(t){return r.a.createElement("div",{className:e},r.a.createElement(C,null,r.a.createElement(_,{fixed:t.avatar.childImageSharp.fixed,alt:"Bruno Opsenica",imgStyle:{borderRadius:"50%"}}),r.a.createElement(O,null,r.a.createElement("h2",null,"Bruno Opsenica","'s Blog"),r.a.createElement("p",null,"This blog chronicles the topics in computer graphics that I'm learning about."),r.a.createElement(h,null),r.a.createElement(B,null))))},data:i})},Q="1023733911",M=I=Object(A.c)(I).withConfig({displayName:"sidebar__SideBar",componentId:"sc-16sd0pi-3"})([""]);function k(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(['\n    grid-template-columns: 220px 1fr;\n    grid-template-rows: 24px 1fr auto;\n    grid-template-areas:\n      "header header"\n      "sidebar main-content"\n      "footer footer";\n  ']);return k=function(){return t},t}var Y=A.c.div.withConfig({displayName:"layout_grid__LayoutGrid",componentId:"t36fz9-0"})(["display:grid;max-width:1280px;margin:auto;min-height:100vh;padding:"," "," 0;grid-gap:",';grid-template-columns:1fr;grid-template-rows:auto 1fr auto;grid-template-areas:"sidebar" "main-content" "footer";'," & > footer{grid-area:footer;}& > ","{grid-area:sidebar;}& > main{grid-area:main-content;min-width:0;}"],Object(s.a)(.75),Object(s.a)(1),Object(s.a)(1),d.b.medium(k()),M),P=function(t){var e=t.className;return r.a.createElement("footer",{className:e},r.a.createElement(B,null),r.a.createElement("div",null,"©",(new Date).getFullYear(),", Bruno Opsenica"))},R=P=Object(A.c)(P).withConfig({displayName:"footer__Footer",componentId:"sc-1kiiktv-0"})([""," color:",";text-align:right;"],Object(s.b)(-.3),d.a.lighter);n(225),n(226);function z(){var t=S(["\n    padding: 0 0 0 ",";\n    border-left: 1px solid ",";\n    border-top: 0\n  "]);return z=function(){return t},t}function D(){var t=S(["\n  color: ",";\n\n  a {\n    color: ","\n\n  }\n\n  a:visited {\n    color: ","\n  }\n\n  figcaption {\n    margin-top: 0;\n    text-align: center;\n    font-style: italic;\n  }\n"]);return D=function(){return t},t}function S(t,e){return e||(e=t.slice(0)),t.raw=e,t}var T=Object(A.a)(D(),d.a.primary,d.a.secondary,d.a.secondary),F=A.c.main.withConfig({displayName:"layout__MainContent",componentId:"sc-1xvv2zr-0"})(["border-top:1px solid ",";padding-top:",";",";"],d.a.lightest,Object(s.a)(1),d.b.medium(z(),Object(s.a)(1),d.a.lightest)),L=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(Y,null,r.a.createElement(M,null),r.a.createElement(F,null,t),r.a.createElement(R,null)))},a}(r.a.Component);e.a=L},215:function(t,e,n){"use strict";var a=n(216),r=n(0),i=n.n(r),o=n(242),c=n.n(o);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,l=t.title,A=a.data.site,s=e||A.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+A.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},e.a=l},216:function(t){t.exports={data:{site:{siteMetadata:{title:"Bruno Opsenica's Blog",description:"A blog about learning 3D programming",author:"Bruno Opsenica"}}}}},243:function(t,e,n){"use strict";n(244);var a=n(197),r=n(198),i=n(196),o=a.c.small.withConfig({displayName:"blog_post_date__BlogPostDate",componentId:"a24z31-0"})(["color:",";font-weight:700;margin-bottom:",";display:block;"],r.a.tertiary,Object(i.a)(.5));e.a=o},244:function(t,e,n){"use strict";n(240)("small",function(t){return function(){return t(this,"small","","")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-52a34f6ddd29ddb91f74.js.map