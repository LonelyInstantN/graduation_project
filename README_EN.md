# graduation_project

> My  graduation project. An Electron based easy-to-use i18n file edit/generate app.


This is an i18n tool for quickly translating i18n files (eg. json files). Designed to be an out of box app for non-professionals. Provide basic auto word list detect to ensure consistency. Online suggestions is also planed.


## Background

Translating existing i18n files can be annoying due to syncing both files and ensuring translation consistency. There are few software out there for this purpose. But none of them fits my request : 

- Easy to use require no complicate setup
- Open source and free to use
- Focus on translation work flow require no develop skills non-professional translator friendly
- Rapid work flow

In this case, I decide to make my own solution. 

## Dependencies

This repo is based on `element-plus-starter`. I set my start point on the template of `ElementUI` & `Vue`. Above that I installed `vue-cli-plugin-electron-builder` to bring in `Electron`. Until this a basic develop template is done.

### others:

- custom-electron-titlebar (original module is not functional on electron v14+)
- splitpanes@next
- ...

## Usage

run 

```
yarn install
```

or

```
npm insatll
```

and 

```
yarn run electron:serve
```

or

```
npm run electron:serve
```