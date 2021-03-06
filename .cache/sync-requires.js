const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/node_modules/gatsby-plugin-offline/app-shell.js")
    )
  ),
  "component---src-templates-blog-post-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/templates/blog-post.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/pages/404.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/pages/index.js")
    )
  )
};
