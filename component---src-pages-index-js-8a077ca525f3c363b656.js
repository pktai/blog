(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var r=a(0),n=a.n(r),o=a(331),c=a(201),s=a(197);a(326);t.default=function(e){var t=e.data;return n.a.createElement(c.a,null,n.a.createElement("h1",{style:{fontSize:"2em"}},"New Post"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return n.a.createElement("div",{key:t},n.a.createElement("h3",null,n.a.createElement(s.a,{to:a.fields.slug},a.frontmatter.title)),n.a.createElement("div",{style:{display:"grid"}},n.a.createElement("span",{style:{color:"#BBB",fontSize:"14px",textAlign:"right"}}," Created date: ",a.frontmatter.date),n.a.createElement("div",{className:"tag-cus"},a.frontmatter.tags.map(function(e,t){return n.a.createElement(o.a,{key:t,color:"magenta"}," ",e)}))),n.a.createElement("p",null,a.excerpt))}))};var i="3075037192"},196:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},197:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var s=n.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,r=e.query,o=e.render,c=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,c&&o(c),!c&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,o=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(i,{data:t,query:a,render:r||o,staticQueryData:e})})}},201:function(e,t,a){"use strict";var r=a(202),n=a(0),o=a.n(n),c=a(197),s=a(332),i=a(263),u=a(330);a(216),a(217),a(218);var d=s.a.Content,l=o.a.createElement(i.a,{type:"loading",style:{fontSize:24},spin:!0}),m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},i.render=function(){var e=this.props.children;return this.state.hidden?o.a.createElement("div",{className:"center-hello"},o.a.createElement(u.a,{indicator:l,tip:"Tai Pham"})):o.a.createElement(c.b,{query:"61684770",render:function(t){return o.a.createElement(s.a,{style:{fontSize:20,background:"#ffffff"}},o.a.createElement(s.a,{style:{display:"-webkit-box"}},o.a.createElement("div",{className:"sider-cus"}),o.a.createElement(s.a,{style:{padding:"0 0 40px 0",boxShadow:"0 0 11px rgba(33,33,33,.2)"}},o.a.createElement(d,{className:"content-cus"},e)),o.a.createElement("div",{className:"sider-cus"})))},data:r})},n}(n.PureComponent);t.a=m},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["reactJs"],tags:["reactJs"]}}},{node:{frontmatter:{categories:["javascript","reactJs"],tags:["javascript"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["immutable","javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["immutable","javascript"],tags:["immutable"]}}},{node:{frontmatter:{categories:["momentJs","javascript"],tags:["momentJs"]}}},{node:{frontmatter:{categories:["nodeJS"],tags:["nodeJS"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["reactjs","webpack"],tags:["webpack"]}}},{node:{frontmatter:{categories:["reactjs","redux"],tags:["redux"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),o=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-8a077ca525f3c363b656.js.map