!(function(e) {
  function n(n) {
    for (
      var r, u, a = n[0], i = n[1], s = n[2], f = 0, p = [];
      f < a.length;
      f++
    )
      (u = a[f]), o[u] && p.push(o[u][0]), (o[u] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (l && l(n); p.length; ) p.shift()();
    return c.push.apply(c, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], r = !0, a = 1; a < t.length; a++) {
        var i = t[a];
        0 !== o[i] && (r = !1);
      }
      r && (c.splice(n--, 1), (e = u((u.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { 8: 0 },
    c = [];
  function u(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, u), (t.l = !0), t.exports;
  }
  (u.e = function(e) {
    var n = [],
      t = o[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function(n, r) {
          t = o[e] = [n, r];
        });
        n.push((t[2] = r));
        var c,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          u.nc && a.setAttribute("nonce", u.nc),
          (a.src = (function(e) {
            return (
              u.p +
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
                6: "bc976d6c98b446c8ca77"
              }[e] +
              ".js"
            );
          })(e)),
          (c = function(n) {
            (a.onerror = a.onload = null), clearTimeout(i);
            var t = o[e];
            if (0 !== t) {
              if (t) {
                var r = n && ("load" === n.type ? "missing" : n.type),
                  c = n && n.target && n.target.src,
                  u = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")"
                  );
                (u.type = r), (u.request = c), t[1](u);
              }
              o[e] = void 0;
            }
          });
        var i = setTimeout(function() {
          c({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = c), document.head.appendChild(a);
      }
    return Promise.all(n);
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function(e, n, t) {
      u.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (u.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function(e, n) {
      if ((1 & n && (e = u(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (u.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (u.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return u.d(n, "a", n), n;
    }),
    (u.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (u.p = "/04-ssg-gdm-1718-brundeco/"),
    (u.oe = function(e) {
      throw (console.error(e), e);
    });
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    i = a.push.bind(a);
  (a.push = n), (a = a.slice());
  for (var s = 0; s < a.length; s++) n(a[s]);
  var l = i;
  t();
})([]);
//# sourceMappingURL=webpack-runtime-28b59531d5c759533b55.js.map
