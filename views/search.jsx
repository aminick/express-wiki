const React = require("react");
const DefaultLayout = require("./layouts/default");

function search(props) {
  return (
    <DefaultLayout>
      <div className="container-fluid">
        {props.results.map((result) => {
          return (
            <div className="rol">
              <div className="col">
                <h3>
                  <a href={result.url}>{result.title}</a>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

module.exports = search;
