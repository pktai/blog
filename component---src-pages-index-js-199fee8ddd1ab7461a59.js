(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),c=a(200),o=a(196);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Bài viết mới nhất"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(o.a,{to:a.fields.slug},a.frontmatter.title),r.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date)),r.a.createElement("p",null,a.excerpt))}))};var u="1136479962"},195:function(e,t,a){var n;e.exports=(n=a(202))&&n.default||n},196:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),c=a(66),o=a.n(c);a.d(t,"a",function(){return o.a});a(195),a(9).default.enqueue;var u=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||c,staticQueryData:e})})}},200:function(e,t,a){"use strict";a(212);var n=a(214),r=a.n(n),c=a(201),o=a(0),u=a.n(o),i=(a(213),a(196)),l=r.a.Header,d=r.a.Content,s=r.a.Sider;t.a=function(e){var t=e.children;return u.a.createElement(i.b,{query:"61684770",render:function(e){return u.a.createElement(r.a,{style:{backgroundImage:"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"}},u.a.createElement(l,{style:{background:"#fff"}},u.a.createElement("div",{className:"logo"})),u.a.createElement(r.a,null,u.a.createElement(s,{width:300,style:{background:"#fff",margin:"24px 24px 24px",borderRadius:20}}),u.a.createElement(r.a,{style:{padding:"24px 24px 24px",borderRadius:20}},u.a.createElement(d,{style:{background:"#fff",padding:60,margin:0,minHeight:768,boxShadow:"rgba(176, 168, 168, 0.75) 0px 0px 21px 2px",borderRadius:20}},t)),u.a.createElement(s,{width:300,style:{background:"#fff",margin:"24px 24px 24px",borderRadius:20}})))},data:c})}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},202:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-199fee8ddd1ab7461a59.js.map