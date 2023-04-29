import { getHighlighter } from 'shiki';
import { runAsWorker } from 'synckit';

const START_RX = /<pre id="*" class="shiki.*" style="background-color: #[0-9a-f]*".*><code>/;
const END = '</code></pre>';

interface lineOptionsItem {
  line: number;
  classes: string[];
}

runAsWorker(async (content, lang, opts) => {
  //const highlighter = await getHighlighter({'theme': 'slack-dark'});
  const highlighter = await getHighlighter({});
  let lineOptionsItems: lineOptionsItem[] = [];
  let html = '';
  if (opts.highlight_lines) {
    //console.log ("opts.highlight_lines: ", opts.highlight_lines)
    opts.highlight_lines.map (lineNo => {
      let item = { line: lineNo, classes: ['codeBlock-highlightedLine'] };
      lineOptionsItems.push (item);
    });
    //console.log (lineOptionsItems);
    html = await highlighter.codeToHtml(content, {lang, lineOptions: lineOptionsItems});
  } else {
    html = await highlighter.codeToHtml(content, lang);
  }
  lineOptionsItems=[];
  //Leaving the html default results in nested pre/code elements, which is rendered as an unattractive box around the
  //highlighted code.
  html = html.replace(START_RX, '');
  html = html.slice(0, -END.length);
  return html;
});
