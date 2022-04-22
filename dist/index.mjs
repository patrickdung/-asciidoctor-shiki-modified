// src/index.ts
import { createRequire } from "module";
import { createSyncFn } from "synckit";
var require2 = createRequire(import.meta.url);
var syncRun = createSyncFn(require2.resolve("./worker"));
var AsciidoctorShiki = {
  initialize(_name, _backend, { document }) {
    this.super();
  },
  highlight(_node, content, lang) {
    return syncRun(content, lang);
  },
  handlesHighlighting() {
    return true;
  }
};
export {
  AsciidoctorShiki
};
