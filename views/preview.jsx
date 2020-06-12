const React = require("react");
const DefaultLayout = require("./layouts/default");
const Previewer = require("./components/Previewer");

function preview(props) {
  return (
    <DefaultLayout>
      <Previewer page={props.page} slugs={props.slugs} />
    </DefaultLayout>
  );
}

module.exports = preview;
