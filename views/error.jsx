const React = require("react");
const DefaultLayout = require("./layouts/default");

function error(props) {
  return <DefaultLayout>{props.error.message}</DefaultLayout>;
}

module.exports = error;
