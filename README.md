# template9

CLI that kinda help with frontend development

## commands

### init

- t9 init
    - vscode?: y/n
    - docker?: y/n
    - install dependencies?: y/n
    - first entry name: [entry name] || blank

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
        - required: y/n
    ]
    - add lazy-action?: y/n
    if (yes) then:
    - name: [action name]
    - repeatable: y/n
    - actions: [
        - function name (without parentheses): [function name]
    ]

#### add component

- t9 add component
    - in what entry?: [...entries]
    - in what scene? (blank for root): [scene name or relative path] || blank
    - name: [component name]
    - props: [
        - name: [property name]
        - type: [property type]
        - required: y/n
    ]

#### add lazy action

- t9 add lazy-action
    - in what entry?: [...entries]
    - for what scene? (blank for root): [scene name or relative path] || blank
    - name: [lazy-action name]
    - repeatable: y/n
    - actions: [
        - function name (without parentheses): [function name]
    ]

#### add action

- t9 add action
    - in what entry?: [...entries]
    - name (without parentheses): [action name]
    - repeatable: y/n
    - params: [
        - name: [property name]
        - type: [property type]
        - required: y/n
    ]
