// src/worker.ts
import { getHighlighter } from "shiki";
import { runAsWorker } from "synckit";
var START_RX = /<pre.*><code>/;
var END = "</code></pre>";
runAsWorker(async (content, lang, opts) => {
  const highlighter = await getHighlighter({ "theme": "slack-dark" });
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
  html = html.replace(START_RX, "");
  html = html.slice(0, -END.length);
  return html;
});
