import { createRequire } from 'module'
import { createSyncFn } from 'synckit';
import type { Asciidoctor } from '@asciidoctor/core';

const require = createRequire(import.meta.url)
const syncRun = createSyncFn(require.resolve('./worker'))

export const AsciidoctorShiki: Asciidoctor.SyntaxHighlighterFunctions = {
  initialize(_name, _backend, { document }) {
    this.super()
  },
  highlight(_node, content, lang) {
    return syncRun(content, lang);
  },
  handlesHighlighting() {
    return true
  }
}
