(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(e,t,n){"use strict";n.r(t);var a=n(160),r=n.n(a),i=n(159),o=n(0),c=n.n(o),l=n(166),s=n(164);function u(){var e=r()(["\n          font-size: 10rem;\n          margin: 20vmin 0;\n          display: block;\n        "]);return u=function(){return e},e}var m=i.c.div.withConfig({displayName:"sc-404__Container",componentId:"sc-6z6vpb-0"})(["text-align:center;"]);t.default=function(){return c.a.createElement(l.a,null,c.a.createElement(s.a,{title:"404: Not found"}),c.a.createElement(m,null,c.a.createElement(d,{role:"img","aria-label":"facepalm emoji"},"🤦🏻‍♂️"),c.a.createElement("h1",null,"NOT FOUND"),c.a.createElement("p",null,"I have not added this page yet.")))};var d=Object(i.c)("span")(u())},161:function(e,t,n){"use strict";n(76),n(57),n(36),n(167);var a=n(159),r={desktop:992,tablet:768,phone:576},i=Object.keys(r).reduce(function(e,t){return e[t]=function(){return Object(a.b)(["@media (max-width:","em){","}"],r[t]/16,a.b.apply(void 0,arguments))},e},{});t.a=i},162:function(e,t,n){"use strict";var a=n(159),r=n(56),i=Object(a.c)(r.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1pzq7s8-0"})(["text-decoration:none;color:rgba(0,0,0,0.8);"]);t.a=i},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Computer Science and Software Engineering"}}}}},164:function(e,t,n){"use strict";var a=n(165),r=n(0),i=n.n(r),o=n(1),c=n.n(o),l=n(168),s=n.n(l),u=n(56);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Computer Science and Software Engineering",description:"Static site generator • Documenteren • Gebruik van markdown",author:"Assignment 04"}}}}},166:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(160),o=n.n(i),c=n(163),l=n(0),s=n.n(l),u=n(1),m=n.n(u),d=n(159),p=n(56),f=n(162),g=n(161);function h(){var e=o()(["\n    text-align: center;\n  "]);return h=function(){return e},e}var y=d.c.nav.withConfig({displayName:"header__Container",componentId:"sc-1hjyk8g-0"})(["box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);height:10rem;display:flex;align-items:center;justify-content:center;"]),w=d.c.h1.withConfig({displayName:"header__Title",componentId:"sc-1hjyk8g-1"})(["font-size:1.6rem;font-weight:800;letter-spacing:0.1rem;text-transform:uppercase;margin:0;",""],g.a.phone(h())),v=function(e){var t=e.title;return s.a.createElement(y,null,s.a.createElement(f.a,{to:"/"},s.a.createElement(w,null,t)))};v.defaultProps={title:""},v.propTypes={title:m.a.string};var b=v,E={height:150,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},k={width:"80%",borderTop:"1px solid lightgrey",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},x={marginBottom:10},C={color:"grey",fontSize:"85%",marginTop:10},S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{style:E},s.a.createElement("div",{style:k,className:"wrapper"},s.a.createElement("p",{style:x},"CSSE assignment 04 - Static Site Generator"),s.a.createElement("p",{style:C},"© De Coene Bruno, 2019")))},t}(l.Component);function z(){var e=o()(["\n    width: 80%;\n  "]);return z=function(){return e},e}function j(){var e=o()(["\n  @font-face {\n    font-family: system;\n    font-style: normal;\n    font-weight: 300;\n    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),\n      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),\n      local('Roboto-Light'), local('DroidSans'), local('Tahoma');\n  }\n\n  :root {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: 'system';\n    margin: 0;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    color: rgba(0, 0, 0, 0.8);\n    min-height: 100vh;\n    position: relative;\n    font-size: 1.6rem;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Oswald', sans-serif;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    font-size: 2.4rem;\n  }\n\n  h4 {\n    font-size: 1.6rem;\n  }\n  \n  code {\n    font-family: Menlo,Monaco,\"Courier New\",Courier,monospace;\n    word-break: break-word;\n  }\n\n  pre code {\n    word-break: normal;\n  }\n\n  :not(pre) > code[class*=\"language-\"], pre[class*=\"language-text\"] {\n    background-color: transparent;\n    color: inherit;\n    font-size: medium;\n  }\n"]);return j=function(){return e},e}var N=Object(d.a)(j()),I=d.c.div.withConfig({displayName:"layout__Content",componentId:"wzore3-0"})(["width:60%;max-width:728px;margin:0 auto;",""],g.a.tablet(z())),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(p.StaticQuery,{query:"1044757290",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{title:t.site.siteMetadata.title}),s.a.createElement(I,null,e),s.a.createElement(S,null),s.a.createElement(N,null))},data:c})},t}(l.Component);T.propTypes={children:m.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-404-js-bac37edae6059e7ac95a.js.map