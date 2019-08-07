# template9

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/template9)
[![Build Status](https://travis-ci.org/ZibanPirate/template9.svg?branch=master)](https://travis-ci.org/ZibanPirate/template9)
[![npm version](https://img.shields.io/npm/v/template9)](https://www.npmjs.com/package/template9)
[![npm license](https://img.shields.io/npm/l/template9)](https://www.npmjs.com/package/template9)

CLI that kinda help with frontend development

## Table of Content

- [Table of Content](#table-of-content)
- [Installation](#installation)
- [Commands](#commands)
  - [init](#init)
  - [add entry](#add-entry)
  - [add config](#add-config)
  - [add type](#add-type)
  - [add scene](#add-scene)
  - [add component](#add-component)
  - [add lazy-operation](#add-lazy-operation)
- [Contributing](#contributing)
- [License](#license)

## Installation

```shell
$ npm i -g template9
```

## Commands

### init

```shell
$ t9 init
    what is the name of the project? : string!
    what is the root of the project? : string = frontend
    use docker? : [ true, false ] = true
    install dependencies? : [ true, false ] = true
    add the first entry? : [ true, false ] = true
  if (add the first entry?) {
    what is the name of the entry? : string!
    What is the default language code for this entry? : string = en
  }
```

this will apply the following:

```js
`C: ${root}/config/index.d.ts` // type def file
`C: ${root}/config/index.js` // global config
`C: ${root}/src/components` // frontend components
`C: ${root}/src/config/index.ts` // frontend config
`C: ${root}/src/entries` // the view layer (entry)
`C: ${root}/src/redux` // data layer
`C: ${root}/src/types/index.ts` // frontend types
`C: ${root}/src/types/template-types.ts` // a readonly frontend types related to template9
`C: ${root}/types/index.ts` // global types
`C: ${root}/.editorconfig` // conventional configs for the editor
`C: ${root}/.gitignore` // paths to be ignored by git
`C: ${root}/package.json` // the npm package manifest
`C: ${root}/t9config.json` // template9 config file
`C: ${root}/tsconfig.json` // typescript config file
`C: ${root}/tslint.json` // typescript linting config
`C: ${root}/webpack.config.js` // webpack config file

if (add the first entry) {
  `C: ${root}/src/entries/${firstEntry}/components` // entry components
  `C: ${root}/src/entries/${firstEntry}/config/default-language/dictionary.json` // dictionary file
  `C: ${root}/src/entries/${firstEntry}/config/default-language/index.d.ts` // type def file
  `C: ${root}/src/entries/${firstEntry}/config/default-language/index.js` // default language config for this entry
  `C: ${root}/src/entries/${firstEntry}/config/index.ts` // entry config index file
  `C: ${root}/src/entries/${firstEntry}/entry/dictionary-fallbacks.json`
  `C: ${root}/src/entries/${firstEntry}/entry/dictionary-overwrites.json`
  `C: ${root}/src/entries/${firstEntry}/entry/dictionary.json`
  `C: ${root}/src/entries/${firstEntry}/entry/dictionary.scss.json`
  `C: ${root}/src/entries/${firstEntry}/entry/index.tsx`
  `C: ${root}/src/entries/${firstEntry}/entry/style-initial.scss`
  `C: ${root}/src/entries/${firstEntry}/entry/style-overwrite.scss`
  `C: ${root}/src/entries/${firstEntry}/entry/style.scss`
  `C: ${root}/src/entries/${firstEntry}/scenes` // entry scenes
  `C: ${root}/src/entries/${firstEntry}/types/index.ts` // entry types
  `C: ${root}/src/redux/${firstEntry}/actions/index.ts` // redux actions
  `C: ${root}/src/redux/${firstEntry}/constants/index.ts` // redux constants
  `C: ${root}/src/redux/${firstEntry}/constants/reducers.ts` // redux reducers
  `C: ${root}/src/redux/${firstEntry}/index.ts` // redux store entry point
}
```

### add entry

```shell
$ t9 add entry
    what is the name of the entry? : string!
    What is the default language code for this entry? : string = "en"
```

this will do the following:

```js
`C: ${t9config.root}/src/entries/${entry}/components`
`C: ${t9config.root}/src/entries/${entry}/config/default-language/dictionary.json`
`C: ${t9config.root}/src/entries/${entry}/config/default-language/index.d.ts`
`C: ${t9config.root}/src/entries/${entry}/config/default-language/index.js`
`C: ${t9config.root}/src/entries/${entry}/config/index.ts`
`C: ${t9config.root}/src/entries/${entry}/entry/dictionary-fallbacks.json`
`C: ${t9config.root}/src/entries/${entry}/entry/dictionary-overwrites.json`
`C: ${t9config.root}/src/entries/${entry}/entry/dictionary.json`
`C: ${t9config.root}/src/entries/${entry}/entry/dictionary.scss.json`
`C: ${t9config.root}/src/entries/${entry}/entry/index.tsx`
`C: ${t9config.root}/src/entries/${entry}/entry/style-initial.scss`
`C: ${t9config.root}/src/entries/${entry}/entry/style-overwrite.scss`
`C: ${t9config.root}/src/entries/${entry}/entry/style.scss`
`C: ${t9config.root}/src/entries/${entry}/scenes`
`C: ${t9config.root}/src/entries/${entry}/types/index.ts`
`C: ${t9config.root}/src/redux/${entry}/actions/index.ts`
`C: ${t9config.root}/src/redux/${entry}/constants/index.ts`
`C: ${t9config.root}/src/redux/${entry}/constants/reducers.ts`
`C: ${t9config.root}/src/redux/${entry}/index.ts`
`U: ${t9config.root}/t9config.json`
```

### add config

```shell
$ t9 add config
    where do you want put the config? : [ "fullstack level", "frontend level", "entry level" ]
  if (where === "entry level" && t9config.entries.length > 1) {
    in what entry do you want put the config? : [ ...t9config.entries ]
  }
    what is the name of the config? : string!
  if (where !== "fullstack level") {
    typescript or javascript? : [ "typescript", "javascript" ] = "typescript"
  }
```

this will do the following:

```js
if ("fullstack level"){
  `C: ${t9config.root}/config/${config}/dictionary.json`
  `C: ${t9config.root}/config/${config}/index.d.ts`
  `C: ${t9config.root}/config/${config}/index.js`
  `U: ${t9config.root}/config/index.ts`
} else if ("frontend level"){
  `C: ${t9config.root}/src/config/${config}/dictionary.json`
  if ("typescript"){
    `C: ${t9config.root}/src/config/${config}/index.ts`
  } else if ("javascript"){
    `C: ${t9config.root}/src/config/${config}/index.js`
    `C: ${t9config.root}/src/config/${config}/index.d.ts`
  }
  `U: ${t9config.root}/src/config/index.ts`
} else if ("entry level"){
  `C: ${t9config.root}/src/entries/${entry}/config/${config}/dictionary.json`
  if ("typescript"){
    `C: ${t9config.root}/src/entries/${entry}/config/${config}/index.ts`
  } else if ("javascript"){
    `C: ${t9config.root}/src/entries/${entry}/config/${config}/index.js`
    `C: ${t9config.root}/src/entries/${entry}/config/${config}/index.d.ts`
  }
  `U: ${t9config.root}/src/entries/${entry}/config/index.ts`
}
`U: ${t9config.root}/t9config.json`
```

### add type

```shell
$ t9 add type
    where do you want put the type? : [ "fullstack level", "frontend level", "entry level" ]
  if (where === "entry level" && t9config.entries.length > 1) {
    in what entry do you want put the type? : [ ...t9config.entries ]
  }
    what is the name of the type? : string!
    add properties to the type
    enter an empty property name when done
  while (1) {
    property name : string!
    if (!property name) break;
    property type : [ "custom", ...t9.types ]
    if (!property type === "custom" ) {
      enter custom property type? : string!
    }
    required? : [ true, false ] = true
  }
```

this will do the following:

```js
if ("fullstack level"){
  `U: ${t9config.root}/types/index.ts`
} else if ("frontend level"){
  `U: ${t9config.root}/src/types/index.ts`
} else if ("entry level"){
  `U: ${t9config.root}/src/entries/${entry}/types/index.ts`
}
`U: ${t9config.root}/t9config.json`
```

### add scene

```shell
$ t9 add scene
    in what entry do you want put the scene? : [ ...t9config.entries ]
    under what scene do you want put it? : [ "root", ...t9config.scenes ]
    what is the name of the scene? : string!
    what is the url path of the scene? : string!
    preform exact match on the url path? : [ true, false] = true
    add properties to the scene
    enter an empty property name when done
  while (1) {
    property name : string!
    if (!property name) break;
    property type : [ "custom", ...t9.types ]
    if (!property type === "custom" ) {
      enter custom property type? : string!
    }
    nullable? : [ true, false ] = true
    undefinable? : [ true, false ] = false
    initial value? : string
  }
    add lazy operation for this scene? : [ true, false ] = true
  if (add lazy operation for this scene) {
    what is the name of the operation? : string!
    repeatable? : [ true, false ] = false
    add actions to the lazy operation
    enter an empty action name when done
    while (1) {
      action name : string!
      if (!action name) break;
    }
  }
```

this will do the following:

```js
if (!scene){
  `C: ${t9config.root}/src/entries/${entry}/scenes/${name}/dictionary.json`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${name}/index.tsx`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${name}/index.scss`

  `U: ${t9config.root}/src/entries/${entry}/entry/index.scss`
  `U: ${t9config.root}/src/entries/${entry}/entry/index.tsx`
} else if (scene){
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/${name}/dictionary.json`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/${name}/index.tsx`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/${name}/index.scss`

  `U: ${t9config.root}/src/entries/${entry}/entry/index.scss`
  `U: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/index.tsx`
}
`U: ${t9config.root}/t9config.json`
```

### add component

```shell
$ t9 add component
    in what entry do you want put the component? : [ ...t9config.entries ]
    under what scene do you want put it? : [ "root", ...t9config.scenes ]
    what is the name of the component? : string!
    stateless? : [ true, false] = true
    add properties to the component
    enter an empty property name when done
  while (1) {
    property name : string!
    if (!property name) break;
    property type : [ "custom", ...t9.types ]
    if (!property type === "custom" ) {
      enter custom property type? : string!
    }
    nullable? : [ true, false ] = true
    undefinable? : [ true, false ] = false
    initial value? : string
  }
  if (!stateless) {
    fill the properties of the state object of the component
    enter an empty property name when done
  while (1) {
    property name : string!
    if (!property name) break;
    property type : [ "custom", ...t9.types ]
    if (!property type === "custom" ) {
      enter custom property type? : string!
    }
    nullable? : [ true, false ] = true
    undefinable? : [ true, false ] = false
    initial value? : string
  }
  }
```

this will do the following:

```js
if (!scene){
  `C: ${t9config.root}/src/entries/${entry}/components/${name}/dictionary.json`
  `C: ${t9config.root}/src/entries/${entry}/components/${name}/index.tsx`
  `C: ${t9config.root}/src/entries/${entry}/components/${name}/index.scss`

  `U: ${t9config.root}/src/entries/${entry}/entry/index.scss`
} else if (scene){
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/components/${name}/dictionary.json`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/components/${name}/index.tsx`
  `C: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/components/${name}/index.scss`

  `U: ${t9config.root}/src/entries/${entry}/entry/index.scss`
}
`U: ${t9config.root}/t9config.json`
```

### add lazy-operation

```shell
$ t9 add lazy-operation
    in what entry do you want put the operation? : [ ...t9config.entries ]
    under what scene do you want put it? : [ "root", ...t9config.scenes ]
    what is the name of the operation? : string!
    what is the url path of the operation? : string!
    preform exact match on the url path? : [ true, false] = true
    repeatable? : [ true, false ] = false
    add actions to the operation
    enter an empty action name when done
    while (1) {
      action name : string!
      if (!action name) break;
    }
```

this will do the following:

```js
if (!scene){
  `U: ${t9config.root}/src/entries/${entry}/entry/index.tsx`
} else if (scene){
  `U: ${t9config.root}/src/entries/${entry}/scenes/${scenePath}/index.tsx`
}
`U: ${t9config.root}/t9config.json`
```

<!-- ### add action

- t9 add action
    - in what entry?: [...entries]
    - in what scene? (blank for root): [scene name or relative path] || blank
    - name (without parentheses): [action name]
    - params: [
        - name: [property name]
        - type: [property type]
        - required: y/n
    ]

### add reducer

- t9 add reducer
    - in what entry?: [...entries]
    - under what reducer?: list of reducers ,first item is 'root'
    - name: [reducer name] -->

## Contributing

To get started see [the contributing guidelines](https://github.com/ZibanPirate/template9/blob/master/.github/CONTRIBUTING.md).

**Unit test** :
Unit test are written in [Mocha](https://mochajs.org/). Please add a unit test for every new feature or bug fix. `npm test` to run the test suite.

**Documentation** :
Add documentation for every Command change. Feel free to send typo fixes and better docs!

## License

Copyright (c) 2019 Zakaria Mansouri (twitter: [@zibanpirate](https://twitter.com/zibanpirate))
Licensed under the MIT license.

