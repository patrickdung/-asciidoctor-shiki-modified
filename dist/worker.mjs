// src/worker.ts
import { getHighlighter } from "shiki";
import { runAsWorker } from "synckit";
var START_RX = /<pre class="shiki" style="background-color: #[0-9a-f]*"><code>/;
var END = "</code></pre>";
runAsWorker(async (content, lang) => {
  const highlighter = await getHighlighter({ "theme": "slack-dark" });
  let html = highlighter.codeToHtml(content, lang);
  html = html.replace(START_RX, "");
  html = html.slice(0, -END.length);
  return html;
});
