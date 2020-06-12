// Client side real time markdown preview

var wikilinks = require("markdown-it-wikilinks")({
  relativeBaseURL: "#",
  baseURL: "/page/",
  uriSuffix: "",
  makeAllLinksAbsolute: true,
});
var MarkdownIt = require("markdown-it"),
  md = new MarkdownIt().use(wikilinks);
var editor = $(".editor-textarea")[0];

$(".editor-preview")[0].innerHTML = md.render(editor.value);

editor.addEventListener("input", function (event) {
  $(".editor-preview")[0].innerHTML = md.render(event.target.value);
});
