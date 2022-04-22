//import type { Highlighter, ILanguageRegistration, IThemeRegistration } from 'shiki'
import { getHighlighter } from 'shiki'
import { runAsWorker } from 'synckit'

const START_RX = /<pre class="shiki" style="background-color: #[0-9a-f]*"><code>/
const END = '</code></pre>'

runAsWorker(async (content, lang) => {
  const highlighter = await getHighlighter({'theme': 'slack-dark'});
  let html = highlighter.codeToHtml(content,lang)
  //Leaving the html default results in nested pre/code elements, which is rendered as an unattractive box around the
  //highlighted code.
  html = html.replace(START_RX, '')
  html = html.slice(0, -END.length)
  return html
});
