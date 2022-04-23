# Asciidoctor Syntax Highlight Extension for Node.js

POC.

- The original code from [TANIGUCHI Masaya]
would hang when using on specific node.js application like Astro (deasync problem)

- David Jencks's extension works on Antora but it is not directly usable for Asciidoctor.
  But he pointed out that the converted code block would have nested ```<pre>/<code>``` section.
  He also have logic to remove the nested code block.

- Refernce Anthony Fu's markdown-it-shini module on how to use the Synckit worker.

## Problems

1. Double ```<pre><code>``` blocks.

First code block

```
<pre class="undefined highlight" id="codecell0">
  <code data-lang="yaml">
```

Then it would have another ```<pre><code>``` block (shiki).
The codes from David Jencks would remove the nested block.

Dane Allen points out that it is a design feature of AsciiDoctor
to control the code blocks that is inserted in the conversion.
This behavior could be changed by over-ridding the 'format' class of the syntax highlighter.

2. This is POC. No code linting and not pushed to npmjs.

## Usage

This extension is not designed for browser.
You must not use this extension without Node.js.

## Copyright and License

MIT license

I make use of the codes from these MIT projects:

- Copyright (c) 2020 Anthony Fu <https://github.com/antfu>, [Markdown it shiki](https://github.com/antfu/markdown-it-shiki)
- Copyright (c) 2021 David Jencks <https://gitlab.com/djencks/antora-shiki>
- Copyright (c) 2022 TANIGUCHI Masaya. All rights reserved. <https://github.com/tani/asciidoctor-shiki>
- Copyright (c) 2022 Patrick Dung
