const React = require("react");
const Navbar = require("../components/Navbar");

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/stylesheets/default-layout.css" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <title>{props.title}</title>
      </head>
      <body>
        <Navbar />
        <div className="layout-container">{props.children}</div>
      </body>
    </html>
  );
}

module.exports = DefaultLayout;
