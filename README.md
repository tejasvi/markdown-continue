# Markdown Continue 

[![VS Marketplace badge](https://vsmarketplacebadge.apphb.com/version-short/tejasvi.markdown-continue.svg)](https://marketplace.visualstudio.com/items?itemName=tejasvi.markdown-continue&ssr=false#review-details)

Continue lists and blockquotes on pressing enter. Compatible with [Neo Vim](https://github.com/asvetliakov/vscode-neovim).

## Features

Besides the expected:

* Auto-increment numbered lists.
* Terminate lists and blockquotes by pressing enter twice.

![Demo](https://user-images.githubusercontent.com/45873379/117921231-05041600-b30e-11eb-98f8-27e6a11cde1b.gif)

## Default keybinds

```json
{
    "command": "markdown-continue.continueSequence",
    "key": "enter",
    // Limited to insert mode if neovim is present.
    "when": "resourceLangId == markdown && !neovim.mode || resourceLangId == markdown && neovim.mode == 'insert'"
}
```

<!-- ## Release Notes

### 1.0.0

Initial release of ... -->


-----------------------------------------------------------------------------------------------------------

## Vim tip

Add the following in your `init.vim` to autoinsert prefixes using `o` and `O`. It works by treating the prefixes as comments. See `:h comments`.

```vim-script
filetype plugin indent on
set autoindent
set smartindent
set breakindent
autocmd FileType markdown set comments=:*\ ,:>\ 
set formatoptions+=ro 
```