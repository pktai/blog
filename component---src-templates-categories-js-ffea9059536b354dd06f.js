(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    189: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'query', function () {
          return o;
        });
      t(130), t(131);
      var r = t(0),
        n = t.n(r),
        c = t(194),
        s = t(193);
      a.default = function (e) {
        var a = e.data,
          t = e.pageContext.category,
          r = a.allMarkdownRemark.edges.filter(function (e) {
            return e.node.frontmatter.categories.includes(t);
          });
        return n.a.createElement(
          c.a,
          null,
          n.a.createElement('h1', null, 'Chuyên mục ', t),
          r.map(function (e, a) {
            var t = e.node;
            return n.a.createElement(
              'div',
              { key: a },
              n.a.createElement(
                'h3',
                null,
                n.a.createElement(
                  s.a,
                  { to: t.fields.slug },
                  t.frontmatter.title,
                ),
              ),
              n.a.createElement(
                'span',
                { style: { color: '#BBB' } },
                '— ',
                t.frontmatter.date,
              ),
              n.a.createElement('p', null, t.excerpt),
            );
          }),
        );
      };
      var o = '3334298382';
    },
    192: function (e, a, t) {
      var r;
      e.exports = ((r = t(196)) && r.default) || r;
    },
    193: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return i;
      });
      var r = t(0),
        n = t.n(r),
        c = t(66),
        s = t.n(c);
      t.d(a, 'a', function () {
        return s.a;
      });
      t(192), t(7).default.enqueue;
      var o = n.a.createContext({});
      function l(e) {
        var a = e.staticQueryData,
          t = e.data,
          r = e.query,
          c = e.render,
          s = t ? t.data : a[r] && a[r].data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          s && c(s),
          !s && n.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var i = function (e) {
        var a = e.data,
          t = e.query,
          r = e.render,
          c = e.children;
        return n.a.createElement(o.Consumer, null, function (e) {
          return n.a.createElement(l, {
            data: a,
            query: t,
            render: r || c,
            staticQueryData: e,
          });
        });
      };
    },
    194: function (e, a, t) {
      'use strict';
      var r = t(195),
        n = t(0),
        c = t.n(n),
        s = t(193);
      t(197), t(198);
      var o = (function (e) {
        var a, t;
        function n() {
          for (var a = arguments.length, t = new Array(a), r = 0; r < a; r++)
            t[r] = arguments[r];
          return e.call.apply(e, [this].concat(t)) || this;
        }
        return (
          (t = e),
          ((a = n).prototype = Object.create(t.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = t),
          (n.prototype.render = function () {
            var e = this.props.children;
            return c.a.createElement(s.b, {
              query: '4010628437',
              render: function (a) {
                return c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(
                    'header',
                    { className: 'header-banner' },
                    c.a.createElement(
                      'div',
                      { className: 'container-width' },
                      c.a.createElement(
                        'nav',
                        { className: 'menu' },
                        c.a.createElement(
                          'div',
                          { className: 'menu-item' },
                          'JAVASCRIPT',
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'menu-item' },
                          'ENGLISH',
                        ),
                      ),
                      c.a.createElement('div', { className: 'clearfix' }),
                      c.a.createElement('div', { className: 'lead-title' }),
                      c.a.createElement('div', { className: 'sub-lead-title' }),
                    ),
                  ),
                  c.a.createElement(
                    'section',
                    { className: 'flex-sect' },
                    c.a.createElement(
                      'div',
                      { className: 'container-width' },
                      c.a.createElement('div', { className: 'cards' }, e),
                    ),
                  ),
                  c.a.createElement(
                    'section',
                    { className: 'bdg-sect' },
                    c.a.createElement(
                      'div',
                      { className: 'container-width' },
                      c.a.createElement(
                        'h1',
                        { className: 'bdg-title' },
                        'Creator by',
                      ),
                      c.a.createElement(
                        'div',
                        { className: 'badges' },
                        c.a.createElement(
                          'div',
                          { className: 'badge' },
                          c.a.createElement('div', {
                            className: 'badge-header',
                          }),
                          c.a.createElement('img', {
                            className: 'badge-avatar',
                          }),
                          c.a.createElement(
                            'div',
                            { className: 'badge-body' },
                            c.a.createElement(
                              'div',
                              { className: 'badge-name' },
                              'Tai Pham',
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'badge-role' },
                              'Full Stack Javascript',
                            ),
                            c.a.createElement(
                              'div',
                              { className: 'badge-desc' },
                              'Success = Present + Effort',
                            ),
                          ),
                          c.a.createElement(
                            'div',
                            { className: 'badge-foot' },
                            c.a.createElement(
                              'a',
                              {
                                href: 'https://www.facebook.com/pktai.IoT',
                                className: 'badge-link',
                              },
                              'f',
                            ),
                            c.a.createElement(
                              'span',
                              { className: 'badge-link' },
                              't',
                            ),
                            c.a.createElement(
                              'span',
                              { className: 'badge-link' },
                              'ln',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  c.a.createElement(
                    'footer',
                    { className: 'footer-under' },
                    c.a.createElement(
                      'div',
                      { className: 'container-width' },
                      c.a.createElement(
                        'div',
                        { className: 'footer-container' },
                        c.a.createElement(
                          'div',
                          { className: 'foot-lists' },
                          c.a.createElement('div', { className: 'clearfix' }),
                        ),
                      ),
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'copyright' },
                      c.a.createElement(
                        'div',
                        { className: 'container-width' },
                        c.a.createElement(
                          'div',
                          { className: 'made-with' },
                          'Made By Tai Pham @2019',
                        ),
                        c.a.createElement(
                          'div',
                          { className: 'foot-social-btns' },
                          'facebook twitter linkedin mail',
                        ),
                        c.a.createElement('div', { className: 'clearfix' }),
                      ),
                    ),
                  ),
                );
              },
              data: r,
            });
          }),
          n
        );
      })(n.PureComponent);
      a.a = o;
    },
    195: function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Gatsby Blog Tutorial Demo"}},"topics":{"edges":[{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["javasript"],"tags":["javasript"]}}},{"node":{"frontmatter":{"categories":["reactJS"],"tags":["ReactJS"]}}},{"node":{"frontmatter":{"categories":["postgreSql"],"tags":["postgreSql"]}}},{"node":{"frontmatter":{"categories":["reactJs"],"tags":["reactJs"]}}},{"node":{"frontmatter":{"categories":["javascript","reactJs"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["immutable","javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["immutable","javascript"],"tags":["immutable"]}}},{"node":{"frontmatter":{"categories":["momentJs","javascript"],"tags":["momentJs"]}}},{"node":{"frontmatter":{"categories":["nodeJS"],"tags":["nodeJS"]}}},{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["reactjs","webpack"],"tags":["webpack"]}}},{"node":{"frontmatter":{"categories":["reactjs","redux"],"tags":["redux"]}}},{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["sequelize"],"tags":["back end","node js","sequelize"]}}}]}}}',
      );
    },
    196: function (e, a, t) {
      'use strict';
      t.r(a);
      t(22);
      var r = t(0),
        n = t.n(r),
        c = t(90);
      a.default = function (e) {
        var a = e.location,
          t = e.pageResources;
        return t
          ? n.a.createElement(
              c.a,
              Object.assign({ location: a, pageResources: t }, t.json),
            )
          : null;
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-categories-js-ffea9059536b354dd06f.js.map
