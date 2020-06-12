const targetElement = document.getElementById("diff2html-id");
const configuration = {
  drawFileList: false,
  matching: "lines",
  outputFormat: "side-by-side",
};
const diff2htmlUi = new Diff2HtmlUI(targetElement, diff, configuration);
diff2htmlUi.draw();
