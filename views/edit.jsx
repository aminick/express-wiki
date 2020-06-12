const React = require("react");
const DefaultLayout = require("./layouts/default");
const Editor = require("./components/Editor");

function edit(props) {
  return (
    <DefaultLayout>
      <Editor page={props.page} />
    </DefaultLayout>
  );
}

module.exports = edit;
