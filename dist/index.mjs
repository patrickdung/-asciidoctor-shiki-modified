// src/index.ts
import { createRequire } from "module";
import { createSyncFn } from "synckit";
var require2 = createRequire(import.meta.url);
var syncRun = createSyncFn(require2.resolve("./worker"));
var AsciidoctorShiki = {
  initialize(_name, _backend, { document }) {
    this.super();
  },
  format(node, lang, opts) {
    if (lang) {
      return `<pre><code>${node.getContent()}</code></pre>`;
    } else {
      return `<pre class="shiki">${node.getContent()}</pre>`;
    }
    ;
  },
  highlight(node, content, lang, opts) {
    return syncRun(content, lang, opts);
  },
  handlesHighlighting() {
    return true;
  }
};
export {
  AsciidoctorShiki
};
