// src/worker.ts
var import_shiki = require("shiki");
var import_synckit = require("synckit");
(0, import_synckit.runAsWorker)(async (content, lang, opts) => {
  const highlighter = await (0, import_shiki.getHighlighter)({ "theme": "slack-dark" });
  let lineOptionsItems = [];
  let html = "";
  if (opts.highlight_lines) {
    opts.highlight_lines.map((lineNo) => {
      let item = { line: lineNo, classes: ["codeBlock-highlightedLine"] };
      lineOptionsItems.push(item);
    });
    html = await highlighter.codeToHtml(content, { lang, lineOptions: lineOptionsItems });
  } else {
    html = await highlighter.codeToHtml(content, lang);
  }
  lineOptionsItems = [];
  return html;
});
