(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    157: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(159),
        a = n.n(r),
        i = n(158),
        o = n(7),
        l = n.n(o),
        c = n(0),
        s = n.n(c),
        m = n(55),
        u = n(165),
        p = n(163),
        d = n(160);
      function f() {
        var e = a()(["\n    text-align: center;\n  "]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()(["\n    margin-top: 4rem;\n  "]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var h = i.c.article.withConfig({
          displayName: "post-styles__Container",
          componentId: "uvw59-0"
        })(
          [
            "margin-top:8rem;",
            " p{line-height:1.5;}blockquote{margin-left:0.25rem;font-size:1.6rem;color:inherit;font-style:italic;border-left:0.2rem solid rgb(0,0,0);padding-left:1rem;margin:1rem 0;}pre{margin-bottom:2rem;}h3{line-height:1.13;}h2,h3,h4,h5,h6{margin:2rem 0 2rem;}hr{border:0;border-top:0.1rem solid #ccc;display:block;height:1rem;padding:0;}"
          ],
          d.a.phone(g())
        ),
        y = i.c.header.withConfig({
          displayName: "post-styles__Header",
          componentId: "uvw59-1"
        })(["", ";"], d.a.tablet(f())),
        w = i.c.h1.withConfig({
          displayName: "post-styles__Title",
          componentId: "uvw59-2"
        })(["margin-bottom:1rem;font-size:3rem;"]),
        b = i.c.ul.withConfig({
          displayName: "post-styles__LinkList",
          componentId: "uvw59-3"
        })([
          "display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0px;"
        ]);
      function v() {
        var e = a()(["\n              margin: 5rem 0;\n            "]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = a()([
          "\n                color: rgba(0, 0, 0, 0.8);\n              "
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      n.d(t, "pageQuery", function() {
        return k;
      });
      var x = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            l()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title,
                n = this.props.pageContext,
                r = n.previous,
                a = n.next;
              return s.a.createElement(
                u.a,
                { location: this.props.location, title: t },
                s.a.createElement(p.a, {
                  title: e.frontmatter.title,
                  description: e.excerpt
                }),
                s.a.createElement(
                  h,
                  null,
                  s.a.createElement(
                    y,
                    null,
                    s.a.createElement(w, null, e.frontmatter.title),
                    s.a.createElement(
                      C,
                      null,
                      s.a.createElement(
                        "span",
                        null,
                        "Gepubliceerd op ",
                        e.frontmatter.date
                      ),
                      s.a.createElement("span", null, "  -  "),
                      s.a.createElement("span", null, e.fields.readingTime.text)
                    )
                  ),
                  s.a.createElement(S, {
                    dangerouslySetInnerHTML: { __html: e.html }
                  }),
                  s.a.createElement(
                    b,
                    null,
                    s.a.createElement(
                      "li",
                      null,
                      r &&
                        s.a.createElement(
                          m.Link,
                          { to: r.fields.slug, rel: "prev" },
                          "← ",
                          r.frontmatter.title
                        )
                    ),
                    s.a.createElement(
                      "li",
                      null,
                      a &&
                        s.a.createElement(
                          m.Link,
                          { to: a.fields.slug, rel: "next" },
                          a.frontmatter.title,
                          " →"
                        )
                    )
                  )
                )
              );
            }),
            t
          );
        })(s.a.Component),
        k = ((t.default = x), "1003360979"),
        C = Object(i.c)("sub")(E()),
        S = Object(i.c)("div")(v());
    },
    160: function(e, t, n) {
      "use strict";
      n(76), n(56), n(36), n(166);
      var r = n(158),
        a = { desktop: 992, tablet: 768, phone: 576 },
        i = Object.keys(a).reduce(function(e, t) {
          return (
            (e[t] = function() {
              return Object(r.b)(
                ["@media (max-width:", "em){", "}"],
                a[t] / 16,
                r.b.apply(void 0, arguments)
              );
            }),
            e
          );
        }, {});
      t.a = i;
    },
    161: function(e, t, n) {
      "use strict";
      var r = n(158),
        a = n(55),
        i = Object(r.c)(a.Link).withConfig({
          displayName: "styled-link__StyledLink",
          componentId: "sc-1pzq7s8-0"
        })(["text-decoration:none;color:rgba(0,0,0,0.8);"]);
      t.a = i;
    },
    162: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: { title: "Computer Science and Software Engineering" }
          }
        }
      };
    },
    163: function(e, t, n) {
      "use strict";
      var r = n(164),
        a = n(0),
        i = n.n(a),
        o = n(1),
        l = n.n(o),
        c = n(167),
        s = n.n(c),
        m = n(55);
      function u(e) {
        var t = e.description,
          n = e.lang,
          a = e.meta,
          o = e.keywords,
          l = e.title;
        return i.a.createElement(m.StaticQuery, {
          query: p,
          render: function(e) {
            var r = t || e.site.siteMetadata.description;
            return i.a.createElement(s.a, {
              htmlAttributes: { lang: n },
              title: l,
              titleTemplate: "%s | " + e.site.siteMetadata.title,
              meta: [
                { name: "description", content: r },
                { property: "og:title", content: l },
                { property: "og:description", content: r },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary" },
                {
                  name: "twitter:creator",
                  content: e.site.siteMetadata.author
                },
                { name: "twitter:title", content: l },
                { name: "twitter:description", content: r }
              ]
                .concat(
                  o.length > 0
                    ? { name: "keywords", content: o.join(", ") }
                    : []
                )
                .concat(a)
            });
          },
          data: r
        });
      }
      (u.defaultProps = { lang: "en", meta: [], keywords: [] }),
        (u.propTypes = {
          description: l.a.string,
          lang: l.a.string,
          meta: l.a.array,
          keywords: l.a.arrayOf(l.a.string),
          title: l.a.string.isRequired
        }),
        (t.a = u);
      var p = "1025518380";
    },
    164: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: "Computer Science and Software Engineering",
              description:
                "Static site generator • Documenteren • Gebruik van markdown",
              author: "Assignment 04"
            }
          }
        }
      };
    },
    165: function(e, t, n) {
      "use strict";
      var r = n(7),
        a = n.n(r),
        i = n(159),
        o = n.n(i),
        l = n(162),
        c = n(0),
        s = n.n(c),
        m = n(1),
        u = n.n(m),
        p = n(158),
        d = n(55),
        f = n(161),
        g = n(160);
      function h() {
        var e = o()(["\n    text-align: center;\n  "]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      var y = p.c.nav.withConfig({
          displayName: "header__Container",
          componentId: "sc-1hjyk8g-0"
        })([
          "box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);height:10rem;display:flex;align-items:center;justify-content:center;"
        ]),
        w = p.c.h1.withConfig({
          displayName: "header__Title",
          componentId: "sc-1hjyk8g-1"
        })(
          [
            "font-size:1.6rem;font-weight:800;letter-spacing:0.1rem;text-transform:uppercase;margin:0;",
            ""
          ],
          g.a.phone(h())
        ),
        b = function(e) {
          var t = e.title;
          return s.a.createElement(
            y,
            null,
            s.a.createElement(f.a, { to: "/" }, s.a.createElement(w, null, t))
          );
        };
      (b.defaultProps = { title: "" }), (b.propTypes = { title: u.a.string });
      var v = b,
        E = {
          height: 150,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        x = {
          width: "80%",
          borderTop: "1px solid lightgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        k = { marginBottom: 10 },
        C = { color: "grey", fontSize: "85%", marginTop: 10 },
        S = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            a()(t, e),
            (t.prototype.render = function() {
              return s.a.createElement(
                "div",
                { style: E },
                s.a.createElement(
                  "div",
                  { style: x, className: "wrapper" },
                  s.a.createElement(
                    "p",
                    { style: k },
                    "CSSE assignment 04 - Static Site Generator"
                  ),
                  s.a.createElement("p", { style: C }, "© De Coene Bruno, 2019")
                )
              );
            }),
            t
          );
        })(c.Component);
      function _() {
        var e = o()(["\n    width: 80%;\n  "]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = o()([
          "\n  @font-face {\n    font-family: system;\n    font-style: normal;\n    font-weight: 300;\n    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),\n      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),\n      local('Roboto-Light'), local('DroidSans'), local('Tahoma');\n  }\n\n  :root {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: 'system';\n    margin: 0;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    color: rgba(0, 0, 0, 0.8);\n    min-height: 100vh;\n    position: relative;\n    font-size: 1.6rem;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Oswald', sans-serif;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    font-size: 2.4rem;\n  }\n\n  h4 {\n    font-size: 1.6rem;\n  }\n  \n  code {\n    font-family: Menlo,Monaco,\"Courier New\",Courier,monospace;\n    word-break: break-word;\n  }\n\n  pre code {\n    word-break: normal;\n  }\n\n  :not(pre) > code[class*=\"language-\"], pre[class*=\"language-text\"] {\n    background-color: transparent;\n    color: inherit;\n    font-size: medium;\n  }\n"
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      var L = Object(p.a)(I()),
        j = p.c.div.withConfig({
          displayName: "layout__Content",
          componentId: "wzore3-0"
        })(["width:60%;max-width:728px;margin:0 auto;", ""], g.a.tablet(_())),
        z = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            a()(t, e),
            (t.prototype.render = function() {
              var e = this.props.children;
              return s.a.createElement(d.StaticQuery, {
                query: "1044757290",
                render: function(t) {
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(v, { title: t.site.siteMetadata.title }),
                    s.a.createElement(j, null, e),
                    s.a.createElement(S, null),
                    s.a.createElement(L, null)
                  );
                },
                data: l
              });
            }),
            t
          );
        })(c.Component);
      z.propTypes = { children: u.a.node.isRequired };
      t.a = z;
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-5bbbe6219357f00c7a96.js.map
