(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    156: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(7),
        r = n.n(a),
        i = n(159),
        o = n.n(i),
        s = n(0),
        l = n.n(s),
        c = n(158),
        d = n(165),
        u = n(163),
        f = (n(185), n(186), n(187)),
        p = n(55),
        m = n(188),
        h = n.n(m),
        g = n(160);
      function y() {
        var e = o()(["\n    order: 1;\n  "]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = o()(["\n    order: 2;\n  "]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = o()([
          "\n    flex-direction: column;\n    text-align: center;\n  "
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      var v = c.c.div.withConfig({
          displayName: "bio__Container",
          componentId: "sc-16moc3v-0"
        })(
          [
            "display:flex;align-items:center;justify-content:space-between;margin:5rem 0;",
            ""
          ],
          g.a.tablet(w())
        ),
        S = c.c.div.withConfig({
          displayName: "bio__TextContainer",
          componentId: "sc-16moc3v-1"
        })(["", ""], g.a.phone(b())),
        E = c.c.div.withConfig({
          displayName: "bio__ImageContainer",
          componentId: "sc-16moc3v-2"
        })(["", ""], g.a.phone(y())),
        I = c.c.h3.withConfig({
          displayName: "bio__Name",
          componentId: "sc-16moc3v-3"
        })([
          "font-size:2.4rem;letter-spacing:0.1rem;font-weight:800;margin-bottom:1rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:'system';"
        ]),
        x = c.c.sub.withConfig({
          displayName: "bio__TagLine",
          componentId: "sc-16moc3v-4"
        })(["font-weight:normal;font-size:1.6rem;margin:0;display:block;"]),
        C = "4078604750",
        L = function() {
          return l.a.createElement(p.StaticQuery, {
            query: C,
            render: function(e) {
              var t = e.site.siteMetadata,
                n = t.author,
                a = t.description;
              return l.a.createElement(
                v,
                null,
                l.a.createElement(
                  S,
                  null,
                  l.a.createElement(I, null, n),
                  l.a.createElement(x, null, a)
                ),
                l.a.createElement(
                  E,
                  null,
                  l.a.createElement(h.a, {
                    fixed: e.avatar.childImageSharp.fixed,
                    alt: n
                  })
                )
              );
            },
            data: f
          });
        },
        z = n(1),
        A = n.n(z),
        R = n(161);
      function T() {
        var e = o()(["\n    margin: 0.5rem 0;\n    padding: 0.4rem 0;\n  "]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }
      var N = c.c.div.withConfig({
          displayName: "post__Container",
          componentId: "airrv5-0"
        })(
          ["padding:1rem 0;margin:1rem 0;&:first-child{margin-top:0;}", ""],
          g.a.phone(T())
        ),
        k = c.c.h4.withConfig({
          displayName: "post__Title",
          componentId: "airrv5-1"
        })(["margin-bottom:0.2rem;font-size:2.2rem;"]),
        q = function(e) {
          var t = e.node;
          return l.a.createElement(
            R.a,
            { to: t.fields.slug },
            l.a.createElement(
              N,
              null,
              l.a.createElement(k, null, t.frontmatter.title),
              l.a.createElement(
                "sub",
                null,
                l.a.createElement("span", null, "on ", t.frontmatter.date),
                l.a.createElement("span", null, "  -  "),
                l.a.createElement("span", null, t.fields.readingTime.text)
              ),
              l.a.createElement("p", {
                dangerouslySetInnerHTML: { __html: t.excerpt }
              })
            )
          );
        };
      q.propTypes = {
        node: A.a.shape({
          id: A.a.string.isRequired,
          frontmatter: A.a.shape({
            title: A.a.string.isRequired,
            date: A.a.string.isRequired
          }),
          fields: A.a.shape({ slug: A.a.string.isRequired }),
          excerpt: A.a.string.isRequired
        })
      };
      var O = q;
      function j() {
        var e = o()(["\n    margin: 3rem 0 0;\n  "]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      n.d(t, "pageQuery", function() {
        return G;
      });
      var V = c.c.h3.withConfig({
          displayName: "pages__Title",
          componentId: "sc-8fp4vw-0"
        })(
          ["font-weight:800;font-size:2.6rem;margin:6rem 0 0;", ""],
          g.a.phone(j())
        ),
        M = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.allMarkdownRemark.edges;
              return l.a.createElement(
                d.a,
                null,
                l.a.createElement(u.a, {
                  title: "All Posts",
                  keywords: ["gatsby", "blog", "react"]
                }),
                l.a.createElement(L, null),
                l.a.createElement(
                  "main",
                  null,
                  l.a.createElement(V, null, "Recente artikelen"),
                  e.map(function(e) {
                    var t = e.node;
                    return l.a.createElement(O, { key: t.id, node: t });
                  })
                )
              );
            }),
            t
          );
        })(s.Component),
        G = ((t.default = M), "2436808889");
    },
    160: function(e, t, n) {
      "use strict";
      n(76), n(56), n(36), n(166);
      var a = n(158),
        r = { desktop: 992, tablet: 768, phone: 576 },
        i = Object.keys(r).reduce(function(e, t) {
          return (
            (e[t] = function() {
              return Object(a.b)(
                ["@media (max-width:", "em){", "}"],
                r[t] / 16,
                a.b.apply(void 0, arguments)
              );
            }),
            e
          );
        }, {});
      t.a = i;
    },
    161: function(e, t, n) {
      "use strict";
      var a = n(158),
        r = n(55),
        i = Object(a.c)(r.Link).withConfig({
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
      var a = n(164),
        r = n(0),
        i = n.n(r),
        o = n(1),
        s = n.n(o),
        l = n(167),
        c = n.n(l),
        d = n(55);
      function u(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          o = e.keywords,
          s = e.title;
        return i.a.createElement(d.StaticQuery, {
          query: f,
          render: function(e) {
            var a = t || e.site.siteMetadata.description;
            return i.a.createElement(c.a, {
              htmlAttributes: { lang: n },
              title: s,
              titleTemplate: "%s | " + e.site.siteMetadata.title,
              meta: [
                { name: "description", content: a },
                { property: "og:title", content: s },
                { property: "og:description", content: a },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary" },
                {
                  name: "twitter:creator",
                  content: e.site.siteMetadata.author
                },
                { name: "twitter:title", content: s },
                { name: "twitter:description", content: a }
              ]
                .concat(
                  o.length > 0
                    ? { name: "keywords", content: o.join(", ") }
                    : []
                )
                .concat(r)
            });
          },
          data: a
        });
      }
      (u.defaultProps = { lang: "en", meta: [], keywords: [] }),
        (u.propTypes = {
          description: s.a.string,
          lang: s.a.string,
          meta: s.a.array,
          keywords: s.a.arrayOf(s.a.string),
          title: s.a.string.isRequired
        }),
        (t.a = u);
      var f = "1025518380";
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
      var a = n(7),
        r = n.n(a),
        i = n(159),
        o = n.n(i),
        s = n(162),
        l = n(0),
        c = n.n(l),
        d = n(1),
        u = n.n(d),
        f = n(158),
        p = n(55),
        m = n(161),
        h = n(160);
      function g() {
        var e = o()(["\n    text-align: center;\n  "]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var y = f.c.nav.withConfig({
          displayName: "header__Container",
          componentId: "sc-1hjyk8g-0"
        })([
          "box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);height:10rem;display:flex;align-items:center;justify-content:center;"
        ]),
        b = f.c.h1.withConfig({
          displayName: "header__Title",
          componentId: "sc-1hjyk8g-1"
        })(
          [
            "font-size:1.6rem;font-weight:800;letter-spacing:0.1rem;text-transform:uppercase;margin:0;",
            ""
          ],
          h.a.phone(g())
        ),
        w = function(e) {
          var t = e.title;
          return c.a.createElement(
            y,
            null,
            c.a.createElement(m.a, { to: "/" }, c.a.createElement(b, null, t))
          );
        };
      (w.defaultProps = { title: "" }), (w.propTypes = { title: u.a.string });
      var v = w,
        S = {
          height: 150,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        E = {
          width: "80%",
          borderTop: "1px solid lightgrey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        I = { marginBottom: 10 },
        x = { color: "grey", fontSize: "85%", marginTop: 10 },
        C = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              return c.a.createElement(
                "div",
                { style: S },
                c.a.createElement(
                  "div",
                  { style: E, className: "wrapper" },
                  c.a.createElement(
                    "p",
                    { style: I },
                    "CSSE assignment 04 - Static Site Generator"
                  ),
                  c.a.createElement("p", { style: x }, "© De Coene Bruno, 2019")
                )
              );
            }),
            t
          );
        })(l.Component);
      function L() {
        var e = o()(["\n    width: 80%;\n  "]);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = o()([
          "\n  @font-face {\n    font-family: system;\n    font-style: normal;\n    font-weight: 300;\n    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),\n      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),\n      local('Roboto-Light'), local('DroidSans'), local('Tahoma');\n  }\n\n  :root {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: 'system';\n    margin: 0;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    color: rgba(0, 0, 0, 0.8);\n    min-height: 100vh;\n    position: relative;\n    font-size: 1.6rem;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Oswald', sans-serif;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    font-size: 2.4rem;\n  }\n\n  h4 {\n    font-size: 1.6rem;\n  }\n  \n  code {\n    font-family: Menlo,Monaco,\"Courier New\",Courier,monospace;\n    word-break: break-word;\n  }\n\n  pre code {\n    word-break: normal;\n  }\n\n  :not(pre) > code[class*=\"language-\"], pre[class*=\"language-text\"] {\n    background-color: transparent;\n    color: inherit;\n    font-size: medium;\n  }\n"
        ]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      var A = Object(f.a)(z()),
        R = f.c.div.withConfig({
          displayName: "layout__Content",
          componentId: "wzore3-0"
        })(["width:60%;max-width:728px;margin:0 auto;", ""], h.a.tablet(L())),
        T = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.children;
              return c.a.createElement(p.StaticQuery, {
                query: "1044757290",
                render: function(t) {
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    c.a.createElement(v, { title: t.site.siteMetadata.title }),
                    c.a.createElement(R, null, e),
                    c.a.createElement(C, null),
                    c.a.createElement(A, null)
                  );
                },
                data: s
              });
            }),
            t
          );
        })(l.Component);
      T.propTypes = { children: u.a.node.isRequired };
      t.a = T;
    },
    169: function(e, t, n) {
      var a = n(12),
        r = n(25),
        i = n(20),
        o = /"/g,
        s = function(e, t, n, a) {
          var r = String(i(e)),
            s = "<" + t;
          return (
            "" !== n &&
              (s += " " + n + '="' + String(a).replace(o, "&quot;") + '"'),
            s + ">" + r + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var n = {};
        (n[e] = t(s)),
          a(
            a.P +
              a.F *
                r(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            n
          );
      };
    },
    185: function(e, t, n) {
      "use strict";
      n(169)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    186: function(e, t, n) {
      "use strict";
      n(169)("sub", function(e) {
        return function() {
          return e(this, "sub", "", "");
        };
      });
    },
    187: function(e) {
      e.exports = {
        data: {
          avatar: {
            childImageSharp: {
              fixed: {
                base64:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE10lEQVQ4y22UyW9TVxTGXxCLdsGiUjelFGgITZzJTrATOyZzgCTOCCEOSRhCCFNLCSQOcTzEczwknoc4gwOoKEJQUagoUqtuqvYvqEBIqFR0g1Q2VReo5dn363nPNmqlPunTOe/J/t3vnHPv5Uo+KuSER1Eq5fYVl28RcrfJutWu0x9NeBZvJX3+5yuLgb/X/KH0ejD8IhWM3EmFoiPr4ei7wm83IvEtN6IJkZGP3H6pgpvUz4n50ry923h56rFteha3YkmsLgVFrQfCuBGJYTO5hs2VNVyPxH65EYkPcbmHYAVisnf7bo5/+izrUlJp7205BE19Kya0o3zE5eFX/aEMARk5ZOQusxGO8oK+SCRxezWF69F46C00tlzAVez+RCzzw/e3O0t27kFFYUlaSqqvlLNTh7XMpTexVQEWirL1YCQfQTGdCsf4LzdugtxFxPLDkazLsp1F3eU7i1D8wa60rEiSUZVXo6pIwmqKy1lTVQ1O9h+F32IHORRKZzlBWEBwe3uNnEbioyKstaJ6a1Op7MlBgjTuLU3L90iglEiZslRGbosJXAqVRIqxI0OgFoi9XPeHILRAzAPh9M3YMgj8gga0jeuqVh45rFCjp6qW767Yx9pKpayDXLXIFFAUl0O+twxqWuzSyTOIexazQyJgblhCbwUov5lcxUYoeobrV9Rt9sjrUC+p5JvJ2UC1kh1TNaJTroK26QB6VA1Ql1XhyulzSC4GkCSQGHNaISgtwN+KJ5EKhB9wPXLVr5rqWuwrLMnIdnzMzrW242xbJ2Q7CjE1cAzjnb3UgkrMXriEZZ8fCdLyfxRgBM5shGJCG55wfXLVm2PKBvSRs26a7PzhIdwxzONcezdWrs7AcHwMtOGxoDeJjoSy456ltzHhWWLLXj9bybbgNaeta+I/O6DB1MEudlrdzI6QW/foKfwUjuH3bx5hc96G4Y5exL1+RN2+rBby0Yv4go8l3ItMcJv0BV5zg+rm3z492IXTjW2sX6FmGqkCusER3HW68fzePfxIG9hJpyZKjsION8L0PZST8B5xelhswZvJuX/KaRTqO2Mt7RhQ1vO9sho2rmxg5v5BGIZP4hFti69IHpMVQbsLAZsLfkG5PCjI7mIhh5sXSo64vA85VZlsWFOjxmh9Kz/W2Ibx5kPMO34ej2jFm1Su/fI0fPN2LP6fLA62ZHHAb3XyNBwEHAsXubqyqneapPJnbbT3OuV16TGhn4MjzDJxAdMnxmH8fApesw1u4zw8RktW5Jgi81LuNVnSBMSS1fFyyeZ8TzwtDRXVWhWdjNqyKr57fzPrUjehQ9XIdGcvwm2ywEkTds2Z/y2WjwsG85uw00Ng2xkR1lldK14O7TJF8Cht6AFVI3+pX5veIBcJh5tZZ+aYY9bIHNcMYrRTJIHe06Q3Qi8JnBIYXqO5gBuo3Z+/fbhTLYci5zv7oB86ge+jCX7V5eWNV2YyAsSq0zObTp+hyFumZ3kBKpRum5lL5f/v0Juyt83x1o6C/MdVn3/ku7t3X7x6/DN+ePAAczQU46QO5qlrILcglyQTTFdnXpqnZyfewmaNWYZW2SDGCU0fd214VPwIYBuQGX/9x6uvv71//4nP6viTwH8ZruieGianHxomdRcpFwfgmjMVkNuCHJT7B09lJN0qPmnlAAAAAElFTkSuQmCC",
                width: 70,
                height: 70,
                src:
                  "/static/a9e347a42682bf3f45cf1cf1a02a2124/cfe2b/profile1.png",
                srcSet:
                  "/static/a9e347a42682bf3f45cf1cf1a02a2124/cfe2b/profile1.png 1x,\n/static/a9e347a42682bf3f45cf1cf1a02a2124/ac6d4/profile1.png 1.5x,\n/static/a9e347a42682bf3f45cf1cf1a02a2124/2d171/profile1.png 2x,\n/static/a9e347a42682bf3f45cf1cf1a02a2124/11787/profile1.png 3x"
              }
            }
          },
          site: {
            siteMetadata: {
              author: "Assignment 04",
              authorTagline: "Student at Arteveldehogeschool Ghent",
              description:
                "Static site generator • Documenteren • Gebruik van markdown"
            }
          }
        }
      };
    },
    188: function(e, t, n) {
      "use strict";
      var a = n(8);
      (t.__esModule = !0), (t.default = void 0);
      var r,
        i = a(n(7)),
        o = a(n(38)),
        s = a(n(77)),
        l = a(n(78)),
        c = a(n(0)),
        d = a(n(1)),
        u = function(e) {
          var t = (0, l.default)({}, e);
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          );
        },
        f = {},
        p = function(e) {
          var t = u(e),
            n = t.fluid ? t.fluid.src : t.fixed.src;
          return f[n] || !1;
        },
        m = [];
      var h = function(e, t) {
          (void 0 === r &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            (r = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  m.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (r.unobserve(t[0]), t[1]());
                  });
                });
              },
              { rootMargin: "200px" }
            )),
          r).observe(e),
            m.push([e, t]);
        },
        g = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            n = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            a = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                n +
                "/>"
              : "",
            r = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + n + "/>" : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            c = e.opacity ? e.opacity : "1";
          return (
            "<picture>" +
            a +
            r +
            "<img " +
            s +
            l +
            t +
            o +
            i +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : "0.5s") +
            ";opacity:" +
            c +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        y = c.default.forwardRef(function(e, t) {
          var n = e.style,
            a = e.onLoad,
            r = e.onError,
            i = (0, s.default)(e, ["style", "onLoad", "onError"]);
          return c.default.createElement(
            "img",
            (0, l.default)({}, i, {
              onLoad: a,
              onError: r,
              ref: t,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
                },
                n
              )
            })
          );
        });
      y.propTypes = {
        style: d.default.object,
        onError: d.default.func,
        onLoad: d.default.func
      };
      var b = (function(e) {
        function t(t) {
          var n;
          n = e.call(this, t) || this;
          var a = !0,
            r = !1,
            i = t.fadeIn,
            s = p(t);
          !s &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            ((a = !1), (r = !0)),
            "undefined" == typeof window && (a = !1),
            t.critical && ((a = !0), (r = !1));
          var l = !(n.props.critical && !n.props.fadeIn);
          return (
            (n.state = {
              isVisible: a,
              imgLoaded: !1,
              IOSupported: r,
              fadeIn: i,
              hasNoScript: l,
              seenBefore: s
            }),
            (n.imageRef = c.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind(
              (0, o.default)((0, o.default)(n))
            )),
            (n.handleRef = n.handleRef.bind((0, o.default)((0, o.default)(n)))),
            n
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.handleRef = function(e) {
            var t = this;
            this.state.IOSupported &&
              e &&
              h(e, function() {
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: p(t.props) }),
                  t.setState({ isVisible: !0, imgLoaded: !1 });
              });
          }),
          (n.handleImageLoaded = function() {
            var e, t, n;
            (e = this.props),
              (t = u(e)),
              (n = t.fluid ? t.fluid.src : t.fixed.src),
              (f[n] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            var e = u(this.props),
              t = e.title,
              n = e.alt,
              a = e.className,
              r = e.style,
              i = void 0 === r ? {} : r,
              o = e.imgStyle,
              s = void 0 === o ? {} : o,
              d = e.placeholderStyle,
              f = void 0 === d ? {} : d,
              p = e.placeholderClassName,
              m = e.fluid,
              h = e.fixed,
              b = e.backgroundColor,
              w = e.Tag,
              v = "boolean" == typeof b ? "lightgray" : b,
              S = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: "opacity 0.5s",
                  transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
                },
                s,
                f
              ),
              E = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition: !0 === this.state.fadeIn ? "opacity 0.5s" : "none"
                },
                s
              ),
              I = {
                title: t,
                alt: this.state.isVisible ? "" : n,
                style: S,
                className: p
              };
            if (m) {
              var x = m;
              return c.default.createElement(
                w,
                {
                  className: (a || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    i
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(x.srcSet)
                },
                c.default.createElement(w, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / x.aspectRatio + "%"
                  }
                }),
                x.base64 &&
                  c.default.createElement(
                    y,
                    (0, l.default)({ src: x.base64 }, I)
                  ),
                x.tracedSVG &&
                  c.default.createElement(
                    y,
                    (0, l.default)({ src: x.tracedSVG }, I)
                  ),
                v &&
                  c.default.createElement(w, {
                    title: t,
                    style: {
                      backgroundColor: v,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: "0.35s",
                      right: 0,
                      left: 0
                    }
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    x.srcSetWebp &&
                      c.default.createElement("source", {
                        type: "image/webp",
                        srcSet: x.srcSetWebp,
                        sizes: x.sizes
                      }),
                    c.default.createElement("source", {
                      srcSet: x.srcSet,
                      sizes: x.sizes
                    }),
                    c.default.createElement(y, {
                      alt: n,
                      title: t,
                      src: x.src,
                      style: E,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError
                    })
                  ),
                this.state.hasNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: g((0, l.default)({ alt: n, title: t }, x))
                    }
                  })
              );
            }
            if (h) {
              var C = h,
                L = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: C.width,
                    height: C.height
                  },
                  i
                );
              return (
                "inherit" === i.display && delete L.display,
                c.default.createElement(
                  w,
                  {
                    className: (a || "") + " gatsby-image-wrapper",
                    style: L,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(C.srcSet)
                  },
                  C.base64 &&
                    c.default.createElement(
                      y,
                      (0, l.default)({ src: C.base64 }, I)
                    ),
                  C.tracedSVG &&
                    c.default.createElement(
                      y,
                      (0, l.default)({ src: C.tracedSVG }, I)
                    ),
                  v &&
                    c.default.createElement(w, {
                      title: t,
                      style: {
                        backgroundColor: v,
                        width: C.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: "0.25s",
                        height: C.height
                      }
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      C.srcSetWebp &&
                        c.default.createElement("source", {
                          type: "image/webp",
                          srcSet: C.srcSetWebp,
                          sizes: C.sizes
                        }),
                      c.default.createElement("source", {
                        srcSet: C.srcSet,
                        sizes: C.sizes
                      }),
                      c.default.createElement(y, {
                        alt: n,
                        title: t,
                        width: C.width,
                        height: C.height,
                        src: C.src,
                        style: E,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError
                      })
                    ),
                  this.state.hasNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: g(
                          (0, l.default)(
                            {
                              alt: n,
                              title: t,
                              width: C.width,
                              height: C.height
                            },
                            C
                          )
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      b.defaultProps = { critical: !1, fadeIn: !0, alt: "", Tag: "div" };
      var w = d.default.shape({
          width: d.default.number.isRequired,
          height: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        }),
        v = d.default.shape({
          aspectRatio: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          sizes: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string
        });
      b.propTypes = {
        resolutions: w,
        sizes: v,
        fixed: w,
        fluid: v,
        fadeIn: d.default.bool,
        title: d.default.string,
        alt: d.default.string,
        className: d.default.oneOfType([d.default.string, d.default.object]),
        critical: d.default.bool,
        style: d.default.object,
        imgStyle: d.default.object,
        placeholderStyle: d.default.object,
        placeholderClassName: d.default.string,
        backgroundColor: d.default.oneOfType([
          d.default.string,
          d.default.bool
        ]),
        onLoad: d.default.func,
        onError: d.default.func,
        onStartLoad: d.default.func,
        Tag: d.default.string
      };
      var S = b;
      t.default = S;
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-eea88ef275a7803f0626.js.map
