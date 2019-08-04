# template9

[![Build Status](https://travis-ci.org/ZibanPirate/template9.svg?branch=master)](https://travis-ci.org/ZibanPirate/template9)
[![npm version](https://img.shields.io/npm/v/template9)](https://www.npmjs.com/package/template9)
[![npm license](https://img.shields.io/npm/l/template9)](https://www.npmjs.com/package/template9)

CLI that kinda help with frontend development

## Installation
```terminal
npm i -g template9
```

## Commands

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
