!(function(e) {
  function n(n) {
    for (
      var r, c, a = n[0], i = n[1], s = n[2], f = 0, p = [];
      f < a.length;
      f++
    )
      (c = a[f]), o[c] && p.push(o[c][0]), (o[c] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (l && l(n); p.length; ) p.shift()();
    return u.push.apply(u, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], r = !0, a = 1; a < t.length; a++) {
        var i = t[a];
        0 !== o[i] && (r = !1);
      }
      r && (u.splice(n--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { 8: 0 },
    u = [];
  function c(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.e = function(e) {
    var n = [],
      t = o[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function(n, r) {
          t = o[e] = [n, r];
        });
        n.push((t[2] = r));
        var u,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          c.nc && a.setAttribute("nonce", c.nc),
          (a.src = (function(e) {
            return (
              c.p +
              "" +
              ({
                2: "component---node-modules-gatsby-plugin-offline-app-shell-js",
                3: "component---src-pages-404-js",
                4: "component---src-pages-index-js",
                5: "component---src-templates-blog-post-js",
                6: "pages-manifest"
              }[e] || e) +
              "-" +
              {
                0: "18d32cdc99e3131a0cd8",
                2: "7eeb79eacb51da2232e1",
                3: "b20789500188fd30c345",
                4: "13eac714ef4420350099",
                5: "5bbbe6219357f00c7a96",
                6: "13d5ed418c405660f798"
              }[e] +
              ".js"
            );
          })(e)),
          (u = function(n) {
            (a.onerror = a.onload = null), clearTimeout(i);
            var t = o[e];
            if (0 !== t) {
              if (t) {
                var r = n && ("load" === n.type ? "missing" : n.type),
                  u = n && n.target && n.target.src,
                  c = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + u + ")"
                  );
                (c.type = r), (c.request = u), t[1](c);
              }
              o[e] = void 0;
            }
          });
        var i = setTimeout(function() {
          u({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = u), document.head.appendChild(a);
      }
    return Promise.all(n);
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function(e, n, t) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, n) {
      if ((1 & n && (e = c(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (c.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = "/04-ssg-gdm-1718-brundeco/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    i = a.push.bind(a);
  (a.push = n), (a = a.slice());
  for (var s = 0; s < a.length; s++) n(a[s]);
  var l = i;
  t();
})([]);
//# sourceMappingURL=webpack-runtime-83bd564609b240b21a96.js.map
