# babel-plugin-add-filehash

This Babel plugin makes sure the Babel output changes whenever the input
file changes, even if it are only trivial/whitespace changes.

This was necessary to make Webpack show updated eslint messages/... on
"unchanged" files until [webpack/webpack#2538][issue2538] got fixed. This happened in
Webpack v3.5.4 and now this plugin isn't necessary anymore for this
usecase.

## Installation

With npm:
```shell
npm install --save-dev babel-plugin-add-filehash
```

Or with yarn:
```shell
yarn add --dev babel-plugin-add-filehash
```

After installation of the package you need to add the plugin to
your project's `.babelrc`:

```json
{
  "plugins": ["add-filehash"]
}
```

For more general info about using Babel plugins see the [Babel handbook][1].

 [issue2538]: https://github.com/webpack/webpack/issues/2538
 [1]: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#manually-specifying-plugins

