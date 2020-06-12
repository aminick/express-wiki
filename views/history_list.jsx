const React = require("react");
const DefaultLayout = require("./layouts/default");

function history_list(props) {
  return (
    <DefaultLayout>
      <div className="history-list">
        <h3>{props.page.title}: Page History</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <strong>Changelog</strong>
            </div>
            <div className="col">
              <strong>Edit Date</strong>
            </div>
            <div className="col">
              <strong>Diff</strong>
            </div>
          </div>
          {props.historyList.map((history) => {
            return (
              <div className="row">
                <div className="col">
                  {history.changelog || "No changelog entry"}
                </div>
                <div className="col">{history.edit_date_formatted}</div>
                <div className="col">
                  <a
                    href={`/page/${props.page.slug}/history/${history.id}/diff`}
                  >
                    Diff
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}

module.exports = history_list;
