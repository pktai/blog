(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),l=a(331),c=a(201),s=a(197);a(326);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement("h1",{style:{fontSize:"2em"}},"New Post"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(s.a,{to:a.fields.slug},a.frontmatter.title)),r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("span",{style:{color:"#BBB",fontSize:"14px",textAlign:"right"}}," Created date: ",a.frontmatter.date),r.a.createElement("div",{className:"tag-cus"},a.frontmatter.tags.map(function(e,t){return r.a.createElement(l.a,{key:t,color:"magenta"}," ",e)}))),r.a.createElement("p",null,a.excerpt))}))};var i="3075037192"},196:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(66),c=a.n(l);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var s=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||l,staticQueryData:e})})}},201:function(e,t,a){"use strict";var n=a(202),r=a(0),l=a.n(r),c=a(197),s=a(263),i=a(330),o=a(332);a(216),a(217),a(218);var u=l.a.createElement(s.a,{type:"loading",style:{fontSize:24},spin:!0}),m=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var m=r.prototype;return m.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},m.render=function(){var e=this.props.children;return this.state.hidden?l.a.createElement("div",{className:"center-hello"},l.a.createElement(i.a,{indicator:u,tip:"Tai Pham"})):l.a.createElement(c.b,{query:"61684770",render:function(t){return l.a.createElement(o.a,{style:{fontSize:20,background:"rgb(181, 2, 93)"}},l.a.createElement("div",{className:"s-layout"},l.a.createElement("div",{className:"s-layout__sidebar"},l.a.createElement("a",{className:"s-sidebar__trigger",href:"#0"},l.a.createElement(s.a,{style:{color:"#fff"},type:"menu"})),l.a.createElement("nav",{className:"s-sidebar__nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"s-sidebar__nav-link",href:"#0"},l.a.createElement("i",{className:"fa fa-home"}),l.a.createElement("em",null,"Home"))),l.a.createElement("li",null,l.a.createElement("a",{className:"s-sidebar__nav-link",href:"#0"},l.a.createElement("i",{className:"fa fa-user"}),l.a.createElement("em",null,"My Profile"))),l.a.createElement("li",null,l.a.createElement("a",{className:"s-sidebar__nav-link",href:"#0"},l.a.createElement("i",{className:"fa fa-camera"}),l.a.createElement("em",null,"Camera")))))),l.a.createElement(o.a,{className:"s-layout__content"},e)))},data:n})},r}(r.PureComponent);t.a=m},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-a3cd61a401b0907c6142.js.map