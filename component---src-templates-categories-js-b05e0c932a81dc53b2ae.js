(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(139),a(140);var n=a(0),r=a.n(n),l=a(206),c=a(203);t.default=function(e){var t=e.data,a=e.pageContext.category,n=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.categories.includes(a)});return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Chuyên mục ",a),n.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(c.a,{to:a.fields.slug},a.frontmatter.title),r.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date)),r.a.createElement("p",null,a.excerpt))}))};var u="3334298382"},201:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},203:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(66),c=a.n(l);a.d(t,"a",function(){return c.a});a(201),a(9).default.enqueue;var u=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||l,staticQueryData:e})})}},206:function(e,t,a){"use strict";var n=a(207),r=a(0),l=a.n(r),c=(a(218),a(203)),u=a(392),i=a(379),m=a(259),o=a(396),s=(a(219),u.a.Header),d=u.a.Content,E=u.a.Footer,f=u.a.Sider,g=i.b.SubMenu;t.a=function(e){e.children;return l.a.createElement(c.b,{query:"61684770",render:function(e){return l.a.createElement(u.a,{style:{minHeight:"100vh"}},l.a.createElement(f,{collapsible:!0,collapsed:!0,onCollapse:!0},l.a.createElement("div",{className:"logo"}),l.a.createElement(i.b,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(i.b.Item,{key:"1"},l.a.createElement(m.a,{type:"pie-chart"}),l.a.createElement("span",null,"Option 1")),l.a.createElement(i.b.Item,{key:"2"},l.a.createElement(m.a,{type:"desktop"}),l.a.createElement("span",null,"Option 2")),l.a.createElement(g,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(m.a,{type:"user"}),l.a.createElement("span",null,"User"))},l.a.createElement(i.b.Item,{key:"3"},"Tom"),l.a.createElement(i.b.Item,{key:"4"},"Bill"),l.a.createElement(i.b.Item,{key:"5"},"Alex")),l.a.createElement(g,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(m.a,{type:"team"}),l.a.createElement("span",null,"Team"))},l.a.createElement(i.b.Item,{key:"6"},"Team 1"),l.a.createElement(i.b.Item,{key:"8"},"Team 2")),l.a.createElement(i.b.Item,{key:"9"},l.a.createElement(m.a,{type:"file"}),l.a.createElement("span",null,"File")))),l.a.createElement(u.a,null,l.a.createElement(s,{style:{background:"#fff",padding:0}}),l.a.createElement(d,{style:{margin:"0 16px"}},l.a.createElement(o.a,{style:{margin:"16px 0"}},l.a.createElement(o.a.Item,null,"User"),l.a.createElement(o.a.Item,null,"Bill")),l.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"Bill is a cat.")),l.a.createElement(E,{style:{textAlign:"center"}},"Ant Design ©2018 Created by Ant UED")))},data:n})}},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-categories-js-b05e0c932a81dc53b2ae.js.map