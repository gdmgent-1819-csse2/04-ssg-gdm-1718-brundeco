!(function(e) {
  function n(n) {
    for (
      var r, a, c = n[0], i = n[1], s = n[2], f = 0, p = [];
      f < c.length;
      f++
    )
      (a = c[f]), o[a] && p.push(o[a][0]), (o[a] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (l && l(n); p.length; ) p.shift()();
    return u.push.apply(u, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], r = !0, c = 1; c < t.length; c++) {
        var i = t[c];
        0 !== o[i] && (r = !1);
      }
      r && (u.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { 8: 0 },
    u = [];
  function a(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.e = function(e) {
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
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          a.nc && c.setAttribute("nonce", a.nc),
          (c.src = (function(e) {
            return (
              a.p +
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
                6: "bec93fa8d118d6e47798"
              }[e] +
              ".js"
            );
          })(e)),
          (u = function(n) {
            (c.onerror = c.onload = null), clearTimeout(i);
            var t = o[e];
            if (0 !== t) {
              if (t) {
                var r = n && ("load" === n.type ? "missing" : n.type),
                  u = n && n.target && n.target.src,
                  a = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + u + ")"
                  );
                (a.type = r), (a.request = u), t[1](a);
              }
              o[e] = void 0;
            }
          });
        var i = setTimeout(function() {
          u({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = u), document.head.appendChild(c);
      }
    return Promise.all(n);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function(e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (a.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = "/04-ssg-gdm-1718-brundeco/"),
    (a.oe = function(e) {
      throw (console.error(e), e);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c);
  (c.push = n), (c = c.slice());
  for (var s = 0; s < c.length; s++) n(c[s]);
  var l = i;
  t();
})([]);
//# sourceMappingURL=webpack-runtime-ffdd378ef6944761cadf.js.map
