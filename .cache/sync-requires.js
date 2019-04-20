const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---src-templates-blog-post-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/src/templates/blog-post.js")
    )
  ),
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/Users/brunodecoene/Documents/GitHub/04-ssg-gdm-1718-brundeco/.cache/dev-404-page.js")
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
