# Asciidoctor Syntax Highlight Extension for Node.js

POC.

- The original code from [TANIGUCHI Masaya]
would hang when using on specific node.js application like Astro (deasync problem)

- David Jencks's extension works on Antora but it is not directly usable for Asciidoctor.
  But he pointed out that the converted code block would have nested <pre>/<code> section.
  He also have logic to remove the nested code block.

- Anthony Fu's markdown-it module show how to use the Synckit worker.

## Usage

This extension is not designed for browser.
You must not use this extension without Node.js.

## Copyright and License

MIT license

I make use of the codes from these MIT projects:

- Copyright (c) 2020 Anthony Fu <https://github.com/antfu>
- Copyright (c) 2021 David Jencks <https://gitlab.com/djencks/antora-shiki>
- Copyright (c) 2022 TANIGUCHI Masaya. All rights reserved. <https://github.com/tani/asciidoctor-shiki>
- Copyright (c) 2022 Patrick Dung
