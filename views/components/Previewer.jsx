const React = require("react");
const wikilinks = require("markdown-it-wikilinks")({
  baseURL: "/page/",
  uriSuffix: "",
  htmlAttributes: { class: "wikilink" },
});
const HTMLParser = require("node-html-parser");
const MarkdownIt = require("markdown-it"),
  md = new MarkdownIt().use(wikilinks);

function Previewer(props) {
  const { page } = props;
  const result = md.render(page.content);
  let root = HTMLParser.parse(result);
  let wikilinks = root.querySelectorAll(".wikilink");
  for (let link of wikilinks) {
    const slug = link.getAttribute("href").slice(2);
    if (!props.slugs.includes(slug)) {
      link.setAttribute("class", "wikilink warning");
    }
  }
  return (
    <div className="previewer">
      <div className="previewer-header">
        <h1 className="page-title">{page.title}</h1>
        <a className="header-button" href={page.url + "/edit"}>
          Edit Page
        </a>
        <a className="header-button" href={page.url + "/history"}>
          View History
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: root.toString() }}></div>
    </div>
  );
}

module.exports = Previewer;
