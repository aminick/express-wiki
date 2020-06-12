const React = require("react");

function Editor(props) {
  const { page } = props;
  return (
    <form className="editor" method="POST" action="">
      <div className="editor-header">
        <div className="container-fluid">
          <div className="row">
            <h3 className="col">Title</h3>
            <input
              className="col title-input"
              type="text"
              id="title"
              name="title"
              value={page.title}
              required
            />
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <a href={page.url} className="btn btn-link">
                Cancel
              </a>
            </div>
            <div className="w-100"></div>
            <h3 className="col">Describe The Change</h3>
            <input
              className="col changelog-input"
              type="text"
              id="changelog"
              name="changelog"
            />
            <div className="col"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="editor-row row">
          <div className="col">
            <textarea
              id="content"
              name="content"
              className="editor-textarea"
              value={page.content}
            ></textarea>
          </div>
          <div className="col">
            <div className="editor-preview"></div>
          </div>
        </div>
      </div>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/11.0.0/markdown-it.min.js"
      ></script>
      <script type="text/javascript" src="/javascripts/editor.js"></script>
    </form>
  );
}

module.exports = Editor;
