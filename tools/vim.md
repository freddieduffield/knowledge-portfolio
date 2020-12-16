# Vim

- [save a file in vim with root permission](https://www.cyberciti.biz/faq/vim-vi-text-editor-save-file-without-root-permission/)

```vim
:w !sudo tee %
```
vim commands
`v` - select, move cursor to end of select
`y` - to copy (yank)
`yy` - to copy line
`d` - cut
`p` - paste after
`P` - paste before
`u` - undo
`:x` - save and quit