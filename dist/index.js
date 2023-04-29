var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AsciidoctorShiki: () => AsciidoctorShiki
});
module.exports = __toCommonJS(src_exports);
var import_module = require("module");
var import_synckit = require("synckit");
var import_meta = {};
var require2 = (0, import_module.createRequire)(import_meta.url);
var syncRun = (0, import_synckit.createSyncFn)(require2.resolve("./worker"));
var AsciidoctorShiki = {
  initialize(_name, _backend, { document }) {
    this.super();
  },
  format(node, lang, opts) {
    if (lang) {
      return `<pre class="shiki" style="background-color: #222222;">
        <code ${lang ? ` data-language="${lang}"` : ""}>${node.getContent()}</code></pre>`;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AsciidoctorShiki
});
