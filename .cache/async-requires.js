// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () =>
    import("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-blog-post-js": () =>
    import("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () =>
    import("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () =>
    import("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
};

exports.data = () =>
  import(/* webpackChunkName: "pages-manifest" */ "/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/.cache/data.json");
