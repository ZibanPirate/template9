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
  - [add action](#add-action)
  - [add reducer](#add-reducer)
- [Flags](#flags)
  - [Version](#version)
- [Contributing](#contributing)
- [Todos](#todos)
  - [CLI](#cli)
  - [Template](#template)
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
`C: ${root}/src/entries/${entry}/components`
`C: ${root}/src/entries/${entry}/config/default-language/dictionary.json`
`C: ${root}/src/entries/${entry}/config/default-language/index.d.ts`
`C: ${root}/src/entries/${entry}/config/default-language/index.js`
`C: ${root}/src/entries/${entry}/config/index.ts`
`C: ${root}/src/entries/${entry}/entry/dictionary-fallbacks.json`
`C: ${root}/src/entries/${entry}/entry/dictionary-overwrites.json`
`C: ${root}/src/entries/${entry}/entry/dictionary.json`
`C: ${root}/src/entries/${entry}/entry/dictionary.scss.json`
`C: ${root}/src/entries/${entry}/entry/index.tsx`
`C: ${root}/src/entries/${entry}/entry/style-initial.scss`
`C: ${root}/src/entries/${entry}/entry/style-overwrite.scss`
`C: ${root}/src/entries/${entry}/entry/style.scss`
`C: ${root}/src/entries/${entry}/scenes`
`C: ${root}/src/entries/${entry}/types/index.ts`
`C: ${root}/src/redux/${entry}/actions/index.ts`
`C: ${root}/src/redux/${entry}/constants/index.ts`
`C: ${root}/src/redux/${entry}/constants/reducers.ts`
`C: ${root}/src/redux/${entry}/index.ts`
`U: ${root}/t9config.json`
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
  `C: ${root}/config/${config}/dictionary.json`
  `C: ${root}/config/${config}/index.d.ts`
  `C: ${root}/config/${config}/index.js`
  `U: ${root}/config/index.ts`
} else if ("frontend level"){
  `C: ${root}/src/config/${config}/dictionary.json`
  if ("typescript"){
    `C: ${root}/src/config/${config}/index.ts`
  } else if ("javascript"){
    `C: ${root}/src/config/${config}/index.js`
    `C: ${root}/src/config/${config}/index.d.ts`
  }
  `U: ${root}/src/config/index.ts`
} else if ("entry level"){
  `C: ${root}/src/entries/${entry}/config/${config}/dictionary.json`
  if ("typescript"){
    `C: ${root}/src/entries/${entry}/config/${config}/index.ts`
  } else if ("javascript"){
    `C: ${root}/src/entries/${entry}/config/${config}/index.js`
    `C: ${root}/src/entries/${entry}/config/${config}/index.d.ts`
  }
  `U: ${root}/src/entries/${entry}/config/index.ts`
}
`U: ${root}/t9config.json`
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
  `U: ${root}/types/index.ts`
} else if ("frontend level"){
  `U: ${root}/src/types/index.ts`
} else if ("entry level"){
  `U: ${root}/src/entries/${entry}/types/index.ts`
}
`U: ${root}/t9config.json`
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
    initial value? : { JS statement }
  }
    add lazy operation for this scene? : [ true, false ] = true
  if (add lazy operation for this scene) {
    what is the name of the operation? : string!
    repeatable? : [ true, false ] = false
    under what group do you want put its actions? : [ "/${scene?}", "root", ...t9config.actions.map(to groups), "< create new one >" ]
      if ( group === "< create new one >" ){
        what is the name of the group? : string!
      }
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
  `C: ${root}/src/entries/${entry}/scenes/${name}/dictionary.json`
  `C: ${root}/src/entries/${entry}/scenes/${name}/index.tsx`
  `C: ${root}/src/entries/${entry}/scenes/${name}/index.scss`

  `U: ${root}/src/entries/${entry}/entry/index.scss`
  `U: ${root}/src/entries/${entry}/entry/index.tsx`
} else if (scene){
  `C: ${root}/src/entries/${entry}/scenes/${scene}/${name}/dictionary.json`
  `C: ${root}/src/entries/${entry}/scenes/${scene}/${name}/index.tsx`
  `C: ${root}/src/entries/${entry}/scenes/${scene}/${name}/index.scss`

  `U: ${root}/src/entries/${entry}/entry/index.scss`
  `U: ${root}/src/entries/${entry}/scenes/${scene}/index.tsx`
}
if ( add lazy operation for this scene ) {
  if (!group){
    `U: ${root}/src/redux/${entry}/actions/index.ts`
  } else if (group){
    `C|U: ${root}/src/redux/${entry}/actions/${group}/index.ts`
  }
}
`U: ${root}/t9config.json`
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
    initial value? : { JS statement }
  }
  }
```

this will do the following:

```js
if (!scene){
  `C: ${root}/src/entries/${entry}/components/${name}/dictionary.json`
  `C: ${root}/src/entries/${entry}/components/${name}/index.tsx`
  `C: ${root}/src/entries/${entry}/components/${name}/index.scss`

  `U: ${root}/src/entries/${entry}/entry/index.scss`
} else if (scene){
  `C: ${root}/src/entries/${entry}/scenes/${scene}/components/${name}/dictionary.json`
  `C: ${root}/src/entries/${entry}/scenes/${scene}/components/${name}/index.tsx`
  `C: ${root}/src/entries/${entry}/scenes/${scene}/components/${name}/index.scss`

  `U: ${root}/src/entries/${entry}/entry/index.scss`
}
`U: ${root}/t9config.json`
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
    under what group do you want put its actions? : [ "root", ...t9config.actions.map(to groups), "< create new one >" ]
      if ( group === "< create new one >" ){
        what is the name of the group? : string!
      }
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
  `U: ${root}/src/entries/${entry}/entry/index.tsx`
} else if (scene){
  `U: ${root}/src/entries/${entry}/scenes/${scene}/index.tsx`
}
if (!group){
  `U: ${root}/src/redux/${entry}/actions/index.ts`
} else if (group){
  `C|U: ${root}/src/redux/${entry}/actions/${group}/index.ts`
}
`U: ${root}/t9config.json`
```

### add action

```shell
$ t9 add action
    in what entry do you want put the action? : [ ...t9config.entries ]
    under what group do you want put it? : [ "root", ...t9config.actions.map(to groups), "< create new one >" ]
    if ( group === "< create new one >" ){
      what is the name of the group? : string!
    }
    what is the name of the action? : string!
    add parameter to the action function
    enter an empty parameter name when done
  while (1) {
    parameter name : string!
    if (!parameter name) break;
    parameter type : [ "custom", ...t9.types ]
    if (!parameter type === "custom" ) {
      enter custom parameter type? : string!
    }
    required? : [ true, false ] = true
    if ( !required ){
      default value? : string
    }
  }

```

this will do the following:

```js
if (!group){
  `U: ${root}/src/redux/${entry}/actions/index.ts`
} else if (group){
  `C|U: ${root}/src/redux/${entry}/actions/${group}/index.ts`
}
`U: ${root}/t9config.json`
```

### add reducer

```shell
$ t9 add reducer
    in what entry do you want put the reducer? : [ ...t9config.entries ]
    under what reducer do you want put it? : [ "root", ...t9config.reducers ]
    what is the name of the reducer? : string!
    fill the properties of the state object of the reducer
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
    initial value? : { JS statement }
  }
```

this will do the following:

```js
if (!reducer){
  `C: ${root}/src/redux/${entry}/reducer/${name}/index.ts`
  `U: ${root}/src/redux/${entry}/reducer/index.ts`
} else if (reducer){
  `C: ${root}/src/redux/${entry}/reducer/${reducer}/${name}/index.ts`
  `U: ${root}/src/redux/${entry}/reducer/${reducer}/index.ts`
}
`U: ${root}/t9config.json`
```

## Flags

### Version

```shell
$ t9 --version
```
or
```shell
$ t9 -v
```

## Contributing

To get started see [the contributing guidelines](https://github.com/ZibanPirate/template9/blob/master/.github/CONTRIBUTING.md).

**Unit test** :
Unit test are written in [Mocha](https://mochajs.org/). Please add a unit test for every new feature or bug fix. `npm test` to run the test suite.

**Documentation** :
Add documentation for every Command change. Feel free to send typo fixes and better docs!

## Todos

### CLI

* [x]  CLI prompts
* [ ]  Init a new project (with an optional example)
* [ ]  Update existing project (add scenes, ...etc)
* [ ]  Upgrade the template of an existing project

### Template

* [ ]  Use the new React **lazy** and **suspense** for the lazy switch for scenes and sub-scenes
* [ ]  Lazy operations
* [x]  New Localization algorithm [fc703dd](https://github.com/ZibanPirate/template9/commit/fc703dda458b69ea704dfc25a8821c3a402c308e)
* [x]  Split style instead of loading one giant CSS bundle [ee3d500](https://github.com/ZibanPirate/template9/commit/ee3d500d5a7466a377bafef0626740627f8f57b7)
* [ ]  **SSR** with `React.lazy` (no need for server side **Redux**, just stick with loading lazy components with **initial state** )
* [ ]  Transition and animation
* [ ]  Blocking lazyloading
* [ ]  Use Concurrent React when it comes out instead of Blocking lazyloading

## License

Copyright (c) 2019 Zakaria Mansouri (twitter: [@zibanpirate](https://twitter.com/zibanpirate))
Licensed under the MIT license.

