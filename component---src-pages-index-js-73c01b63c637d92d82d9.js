(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),c=a(331),o=a(201),i=a(197);a(326);t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement("h1",{style:{fontSize:"2em"}},"New Post"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(i.a,{to:a.fields.slug},a.frontmatter.title)),r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("span",{style:{color:"#BBB",fontSize:"14px",textAlign:"right"}}," Created date: ",a.frontmatter.date),r.a.createElement("div",{className:"tag-cus"},a.frontmatter.tags.map(function(e,t){return r.a.createElement(c.a,{color:"magenta"}," ",e)}))),r.a.createElement("p",null,a.excerpt))}))};var s="3075037192"},196:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),c=a(66),o=a.n(c);a.d(t,"a",function(){return o.a});a(196),a(9).default.enqueue;var i=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||c,staticQueryData:e})})}},201:function(e,t,a){"use strict";var n=a(202),r=a(0),c=a.n(r),o=a(197),i=a(332),s=a(263),l=a(330);a(216),a(217),a(218);var u=i.a.Header,d=i.a.Content,m=i.a.Sider,f=c.a.createElement(s.a,{type:"loading",style:{fontSize:24},spin:!0}),g=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},s.render=function(){var e=this.props.children;return this.state.hidden?c.a.createElement("div",{className:"center-hello"},c.a.createElement(l.a,{indicator:f,tip:"Tai Pham"})):c.a.createElement(o.b,{query:"61684770",render:function(t){return c.a.createElement(i.a,{style:{fontSize:20,background:"rgb(181, 2, 93)"}},c.a.createElement(u,{style:{background:"none"}},c.a.createElement("div",{className:"logo"})),c.a.createElement(i.a,null,c.a.createElement(m,{className:"sider-cus"}),c.a.createElement(i.a,{style:{padding:"10px 0 40px 0"}},c.a.createElement(d,{className:"content-cus"},e)),c.a.createElement(m,{className:"sider-cus"})))},data:n})},r}(r.PureComponent);t.a=g},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-73c01b63c637d92d82d9.js.map