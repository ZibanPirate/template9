## Commands

### init
```terminal
t9 init
  what is the name of the project? : string!
  what is the root of the project? : string = frontend
  use docker? : y/n = Yes
  install dependencies? : y/n = Yes
  add the first entry? : y/n = Yes
if (add the first entry?) {
  what is the name of the entry? : string!
  What is the default language code for this entry? : string = en
}
```

this will create the following folder structure:

- [root]/config/index.d.ts // type def file
- [root]/config/index.js // global config
- [root]/src/components // frontend components
- [root]/src/config/index.ts // frontend config
- [root]/src/entries // the view layer (entry)
- [root]/src/redux // data layer
- [root]/src/types/index.ts // frontend types
- [root]/src/types/template-types.ts // a readonly frontend types related to template9
- [root]/types/index.ts // global types
- [root]/.editorconfig // conventional configs for the editor
- [root]/.gitignore // paths to be ignored by git
- [root]/package.json // the npm package manifest
- [root]/t9config.json // template9 config file
- [root]/tsconfig.json // typescript config file
- [root]/tslint.json // typescript linting config
- [root]/webpack.config.js // webpack config file

if we choose to add the first entry, the following will be added:

- [root]/src/entries/[firstEntry]/components // entry components
- [root]/src/entries/[firstEntry]/config/default-language/dictionary.json // dictionary file
- [root]/src/entries/[firstEntry]/config/default-language/index.d.ts // type def file
- [root]/src/entries/[firstEntry]/config/default-language/index.js // default language config for this entry
- [root]/src/entries/[firstEntry]/config/index.ts // entry config index file
- [root]/src/entries/[firstEntry]/entry/dictionary-fallbacks.json
- [root]/src/entries/[firstEntry]/entry/dictionary-overwrites.json
- [root]/src/entries/[firstEntry]/entry/dictionary.json
- [root]/src/entries/[firstEntry]/entry/dictionary.scss.json
- [root]/src/entries/[firstEntry]/entry/index.ts
- [root]/src/entries/[firstEntry]/entry/style-initial.scss
- [root]/src/entries/[firstEntry]/entry/style-overwrite.scss
- [root]/src/entries/[firstEntry]/entry/style.scss
- [root]/src/entries/[firstEntry]/scenes // entry scenes
- [root]/src/entries/[firstEntry]/types/index.ts // entry types
- [root]/src/redux/[firstEntry]/actions/index.ts // redux actions
- [root]/src/redux/[firstEntry]/constants/index.ts // redux constants
- [root]/src/redux/[firstEntry]/constants/reducers.ts // redux reducers
- [root]/src/redux/[firstEntry]/index.ts // redux store entry point

### upgrade

- t9 upgrade

### add

#### add entry

- t9 add entry
    - name: [entry name]
    - default language (defaults to 'en'): [default language code] || blank

#### add config object

- t9 add config
    - where: global || frontend || local
    if (global) then ignore the nest step and choose js
    - use ts or js? (defaults to 'ts'): js || ts
    - name: [entry name]

#### add a typescript type

- t9 add type
    - where: global || frontend || local
    - name: [type name]
    - props: [
        - name: [property name]
        - type: [property type]
        - required: y/n
    ]

#### add scene

- t9 add scene
    - in what entry?: [...entries]
    - in what scene? (blank for root): [scene name] || blank
    - name: [scene name]
    - url path: [url path for lazy component]
    - exact?: y/n
    - props: [
        - name: [property name]
        - type: [property type]
        - nullable: y/n
        - undefinable: y/n
        - initial value: [default value] || not set
    ]
    - add lazy-operation?: y/n
    if (yes) then:
    - name: [operation name]
    - repeatable: y/n
    - actions: [
        - function name (without parentheses): [function name]
    ]

#### add component

- t9 add component
    - in what entry?: [...entries]
    - in what scene? (blank for root): [scene name or relative path] || blank
    - name: [component name]
    - stateless? (defaults to yes): y/n
    - props: [
        - name: [property name]
        - type: [property type]
        - nullable: y/n
        - undefinable: y/n
    ]

#### add lazy operation

- t9 add lazy-operation
    - in what entry?: [...entries]
    - for what scene? (blank for root): [scene name or relative path] || blank
    - name: [lazy-operation name]
    - repeatable: y/n
    - actions: [
        - function name (without parentheses): [function name]
    ]

#### add action

- t9 add action
    - in what entry?: [...entries]
    - in what scene? (blank for root): [scene name or relative path] || blank
    - name (without parentheses): [action name]
    - params: [
        - name: [property name]
        - type: [property type]
        - required: y/n
    ]

#### add reducer

- t9 add reducer
    - in what entry?: [...entries]
    - under what reducer?: list of reducers ,first item is 'root'
    - name: [reducer name]
