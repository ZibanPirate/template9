# :construction: Notice :construction:

Pardon the mess. The `master` branch is still doesn't make sens because template9 is still in alpha, Thank you for your patience.

# Contributing to template9

Contributions are always welcome. Before contributing please read the
[code of conduct](https://github.com/ZibanPirate/template9/blob/master/CODE_OF_CONDUCT.md) &
[search the issue tracker](https://github.com/ZibanPirate/template9/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) template9, commit your changes,
& [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Do you have a suggestion?

Feature requests should be submitted in the
[issue tracker](https://github.com/ZibanPirate/template9/issues), with a description of
the expected behavior & use case.
Before submitting a request, please search for similar ones in the
[closed issues](https://github.com/ZibanPirate/template9/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Did you find a bug?

When logging a bug, please be sure to answer the following:
 * A clear and concise description of what the bug is
 * If at all possible, an *isolated* way to reproduce the behavior
 * The behavior you expect to see, and the actual behavior

## Do you have a question?

The issue tracker is for **issues**, in other words, bugs and suggestions.
If you have a *question*, please use [Stack Overflow](http://stackoverflow.com/questions/tagged/template9), [Gitter](https://gitter.im/template9), your favorite search engine, or other resources.

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already
established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Naming**:<br>
  Keep variable & method names concise & descriptive.<br>
  Variable names `index`, `array`, & `iteratee` are preferable to
  `i`, `arr`, & `fn`.

- **Quotes**:<br>
  Double-quoted strings are chosen over single-quoted strings; to avoid unnecessary escaping.

- **Comments**:<br>
  Please use single-line comments to annotate significant additions, &
  [JSDoc-style](http://www.2ality.com/2011/08/jsdoc-intro.html) comments for
  functions.

Guidelines are following the [.editorconfig](https://github.com/ZibanPirate/template9/blob/master/.editorconfig) & [.eslintrc.json](https://github.com/ZibanPirate/template9/blob/master/.eslintrc.json) files and enforced using [ESLint](https://www.npmjs.com/package/eslint):
```bash
$ npm run style
```

## Tips

if you are using [VSCode](https://code.visualstudio.com), u may want to use [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for real-time guidelines enforcing for coding.
