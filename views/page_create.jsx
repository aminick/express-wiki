const React = require("react");
const DefaultLayout = require("./layouts/default");

function page_create(props) {
  return (
    <DefaultLayout>
      <div className="page-create">
        <h1 className="page-title">{props.title}</h1>
        <form method="POST" action="">
          <input type="hidden" id="slug" name="slug" value={props.title} />
          <input type="hidden" id="title" name="title" value={props.title} />
          <button type="submit" className="header-button btn btn-link">
            Edit Page
          </button>
        </form>

        <div className="alert alert-primary" role="alert">
          This page does not exist yet.
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = page_create;
