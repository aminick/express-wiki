const React = require("react");
const DefaultLayout = require("./layouts/default");

function history_detail(props) {
  return (
    <DefaultLayout>
      <h3>Edit at {props.edit_date}</h3>
      <div id="diff2html-id"></div>
      {/* react rendering caveat for inline script */}
      <script
        dangerouslySetInnerHTML={{ __html: `var diff = \`${props.diff}\`` }}
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html-ui.min.js"
      ></script>
      <script type="text/javascript" src="/javascripts/diff.js"></script>
    </DefaultLayout>
  );
}

module.exports = history_detail;
