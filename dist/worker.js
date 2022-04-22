// src/worker.ts
var import_shiki = require("shiki");
var import_synckit = require("synckit");
var START_RX = /<pre class="shiki" style="background-color: #[0-9a-f]*"><code>/;
var END = "</code></pre>";
(0, import_synckit.runAsWorker)(async (content, lang) => {
  const highlighter = await (0, import_shiki.getHighlighter)({ "theme": "slack-dark" });
  let html = highlighter.codeToHtml(content, lang);
  html = html.replace(START_RX, "");
  html = html.slice(0, -END.length);
  return html;
});
