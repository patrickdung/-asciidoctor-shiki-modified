import { createRequire } from 'module';
import { createSyncFn } from 'synckit';
import type { Asciidoctor } from '@asciidoctor/core';

const require = createRequire(import.meta.url);
const syncRun = createSyncFn(require.resolve('./worker'));

export const AsciidoctorShiki: Asciidoctor.SyntaxHighlighterFunctions = {
  initialize(_name, _backend, { document }) {
    this.super();
  },
  format (node, lang, opts) {
    if (lang) {
      //return `<pre><code>${node.getContent()}</code></pre>`
      //return `<pre class="shiki" style="background-color: #222222;">
      //  <code ${lang ? ` data-language="${lang}"` : ""}>${node.getContent()}</code></pre>`;
      return `<code2 class="shiki" ${lang ? ` data-language="${lang}"` : ""}>${node.getContent()}</code2>`;
    } else {
      return `<pre class="shiki">${node.getContent()}</pre>`
    };
  },
  highlight(node, content, lang, opts) {
    // problem passing the 'node'
    return syncRun(content, lang, opts);
  },
  handlesHighlighting() {
    return true;
  }
};
