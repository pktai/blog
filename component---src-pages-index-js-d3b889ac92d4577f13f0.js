(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    191: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'query', function () {
          return o;
        });
      var r = t(0),
        n = t.n(r),
        s = t(194),
        c = t(193);
      t(199);
      a.default = function (e) {
        var a = e.data;
        return n.a.createElement(
          s.a,
          null,
          a.allMarkdownRemark.edges.map(function (e, a) {
            var t = e.node;
            return n.a.createElement(
              'div',
              { className: 'card', key: a },
              n.a.createElement(
                'div',
                { className: 'card-body' },
                n.a.createElement(
                  c.a,
                  { className: 'link-card', to: t.fields.slug },
                  t.frontmatter.title,
                ),
                n.a.createElement(
                  'div',
                  { className: 'card-sub-title' },
                  t.frontmatter.date,
                ),
                n.a.createElement('div', { className: 'card-desc' }, t.excerpt),
              ),
              n.a.createElement(
                'div',
                { className: 'tag-cus' },
                t.frontmatter.tags.map(function (e, a) {
                  return n.a.createElement(
                    'ul',
                    { className: 'tags', key: a },
                    n.a.createElement(
                      'li',
                      null,
                      n.a.createElement('span', { className: 'tag' }, e),
                    ),
                  );
                }),
              ),
            );
          }),
        );
      };
      var o = '3718009238';
    },
    192: function (e, a, t) {
      var r;
      e.exports = ((r = t(196)) && r.default) || r;
    },
    193: function (e, a, t) {
      'use strict';
      t.d(a, 'b', function () {
        return l;
      });
      var r = t(0),
        n = t.n(r),
        s = t(66),
        c = t.n(s);
      t.d(a, 'a', function () {
        return c.a;
      });
      t(192), t(7).default.enqueue;
      var o = n.a.createContext({});
      function i(e) {
        var a = e.staticQueryData,
          t = e.data,
          r = e.query,
          s = e.render,
          c = t ? t.data : a[r] && a[r].data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          c && s(c),
          !c && n.a.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var l = function (e) {
        var a = e.data,
          t = e.query,
          r = e.render,
          s = e.children;
        return n.a.createElement(o.Consumer, null, function (e) {
          return n.a.createElement(i, {
            data: a,
            query: t,
            render: r || s,
            staticQueryData: e,
          });
        });
      };
    },
    194: function (e, a, t) {
      'use strict';
      var r = t(195),
        n = t(0),
        s = t.n(n),
        c = t(193);
      t(197), t(198);
      var o = (function (e) {
        var a, t;
        function n() {
          return e.apply(this, arguments) || this;
        }
        return (
          (t = e),
          ((a = n).prototype = Object.create(t.prototype)),
          (a.prototype.constructor = a),
          (a.__proto__ = t),
          (n.prototype.render = function () {
            var e = this.props.children;
            return s.a.createElement(c.b, {
              query: '4010628437',
              render: function (a) {
                return s.a.createElement(
                  s.a.Fragment,
                  null,
                  s.a.createElement(
                    'header',
                    { className: 'header-banner' },
                    s.a.createElement(
                      'div',
                      { className: 'container-width' },
                      s.a.createElement(
                        'nav',
                        { className: 'menu' },
                        s.a.createElement(
                          'div',
                          { className: 'menu-item' },
                          'JAVASCRIPT',
                        ),
                        s.a.createElement(
                          'div',
                          { className: 'menu-item' },
                          'ENGLISH',
                        ),
                      ),
                      s.a.createElement('div', { className: 'clearfix' }),
                      s.a.createElement('div', { className: 'lead-title' }),
                      s.a.createElement('div', { className: 'sub-lead-title' }),
                    ),
                  ),
                  s.a.createElement(
                    'section',
                    { className: 'flex-sect' },
                    s.a.createElement(
                      'div',
                      { className: 'container-width' },
                      s.a.createElement('div', { className: 'cards' }, e),
                    ),
                  ),
                  s.a.createElement(
                    'section',
                    { className: 'bdg-sect' },
                    s.a.createElement(
                      'div',
                      { className: 'container-width' },
                      s.a.createElement(
                        'h1',
                        { className: 'bdg-title' },
                        'Creator by',
                      ),
                      s.a.createElement(
                        'div',
                        { className: 'badges' },
                        s.a.createElement(
                          'div',
                          { className: 'badge' },
                          s.a.createElement('div', {
                            className: 'badge-header',
                          }),
                          s.a.createElement('div', {
                            className: 'badge-avatar',
                          }),
                          s.a.createElement(
                            'div',
                            { className: 'badge-body' },
                            s.a.createElement(
                              'div',
                              { className: 'badge-name' },
                              'Tai Pham',
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'badge-role' },
                              'Full Stack Javascript',
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'badge-desc' },
                              'Success = Present + Effort',
                            ),
                          ),
                          s.a.createElement(
                            'div',
                            { className: 'badge-foot' },
                            s.a.createElement(
                              'a',
                              {
                                href: 'https://www.facebook.com/pktai.IoT',
                                className: 'badge-link',
                              },
                              'f',
                            ),
                            s.a.createElement(
                              'span',
                              { className: 'badge-link' },
                              't',
                            ),
                            s.a.createElement(
                              'span',
                              { className: 'badge-link' },
                              'ln',
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  s.a.createElement(
                    'footer',
                    { className: 'footer-under' },
                    s.a.createElement(
                      'div',
                      { className: 'container-width' },
                      s.a.createElement(
                        'div',
                        { className: 'footer-container' },
                        s.a.createElement(
                          'div',
                          { className: 'foot-lists' },
                          s.a.createElement('div', { className: 'clearfix' }),
                        ),
                      ),
                    ),
                    s.a.createElement(
                      'div',
                      { className: 'copyright' },
                      s.a.createElement(
                        'div',
                        { className: 'container-width' },
                        s.a.createElement(
                          'div',
                          { className: 'made-with' },
                          'Made By Tai Pham @2019',
                        ),
                        s.a.createElement(
                          'div',
                          { className: 'foot-social-btns' },
                          'facebook twitter linkedin mail',
                        ),
                        s.a.createElement('div', { className: 'clearfix' }),
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
        '{"data":{"site":{"siteMetadata":{"title":"Gatsby Blog Tutorial Demo"}},"topics":{"edges":[{"node":{"frontmatter":{"categories":["Javascript"],"tags":["Javascript"]}}},{"node":{"frontmatter":{"categories":["javasript"],"tags":["javasript"]}}},{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["javasript"],"tags":["javasript"]}}},{"node":{"frontmatter":{"categories":["reactJS"],"tags":["ReactJS"]}}},{"node":{"frontmatter":{"categories":["postgreSql"],"tags":["postgreSql"]}}},{"node":{"frontmatter":{"categories":["reactJs"],"tags":["reactJs"]}}},{"node":{"frontmatter":{"categories":["javascript","reactJs"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["immutable","javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["immutable","javascript"],"tags":["immutable"]}}},{"node":{"frontmatter":{"categories":["momentJs","javascript"],"tags":["momentJs"]}}},{"node":{"frontmatter":{"categories":["nodeJS"],"tags":["nodeJS"]}}},{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["reactjs","webpack"],"tags":["webpack"]}}},{"node":{"frontmatter":{"categories":["reactjs","redux"],"tags":["redux"]}}},{"node":{"frontmatter":{"categories":["reactjs"],"tags":["reactjs"]}}},{"node":{"frontmatter":{"categories":["javascript"],"tags":["javascript"]}}},{"node":{"frontmatter":{"categories":["sequelize"],"tags":["back end","node js","sequelize"]}}}]}}}',
      );
    },
    196: function (e, a, t) {
      'use strict';
      t.r(a);
      t(22);
      var r = t(0),
        n = t.n(r),
        s = t(90);
      a.default = function (e) {
        var a = e.location,
          t = e.pageResources;
        return t
          ? n.a.createElement(
              s.a,
              Object.assign({ location: a, pageResources: t }, t.json),
            )
          : null;
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-d3b889ac92d4577f13f0.js.map
