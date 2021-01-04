# Testing

## Static Analysis Testing
### Eslint

save as dev dependency
```
npm install --save-dev eslint
```

run across all projects files
```
npx eslint .
```
create `.eslintrc` file
```
touch .eslintrc
```
Add config to `.eslintrc`
```js
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```
add rules
```js
{
  "rules": {
    "strict": ["error", "never"],  
    "valid-typeof": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars":"error",
    "no-unexpected-multiline": "error",
    "no-undef": "error"
  }
}
```
add env
```json
{
  "env": {
    "browser": true
  }
}
```
auto Fix across all files
```
npx eslint . --fix
```
Use recommended set of rules. In the array the one that comes last overrides the previous.
```json
  "extends": ["eslint:recommended"],
  "rules": {
    "strict": ["error", "never"],
  },
```
add to eslint to script config, in `package.json`
```json
{
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint ."
  },
}

```
run it with `npm run lint`

```
create a `touch .eslintignore`, and paste in
```
node_modules
dist
```
or add to the script
```json 
{
  "lint": "eslint --ignore-path .gitignore ."
}
```

---
### Prettier

```
npm install --save-dev prettier
```
run prettier on specific file
```
npx prettier src/example.js
```
Setup script that has glob to target specific files. 
```json
{
   "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.(js|json)\""
  },
}
```
To figure out what config you want go to [prettier.io/playground](https://prettier.io/playground/)
then create and paste config `touch .prettierrc`

```json 
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```
To get auto format on save install the prettier vs code extension, and add to `settings.json`
```json
{
  "editor.defaultFormatter": "esbenp.pretter-vscode",
  "editor.formatOnSave": true,
}
```
**eslint-config-prettier**

```
npm install --save-dev eslint-config-prettier
```
Then add it to the `.eslintrc` to the extends property. disables any rule that prettier renders useless.
```json
{
  "extends": ["eslint:recommended", "eslint-config-prettier"],
}
```

---
## Jest 

### Assertions 

`toEqual()`

`toHaveBeenCalledTimes(2)`

`toHaveBeenCalledWith('argument1', 'argument2')`

`toHaveBeenNthCalledWith(1, 'argument1, 'argument2')`

### Mock functions 

`jest.fn()`

Essentially spies. Pass it the function that you wish to mock, it will record what arguments it called with, how many times it a called etc.

`mockFn.mock.calls` - array containing all the arguments 

```js
jest.spyOn(obj, 'method')
obj.function.mockImplementation((arg1, arg2) => arg2);
...
obj.function.mockRestore()
```

`jest.mock()`

to mock a whole module

```js
jest.mock('../path', () => { 
  return {
    method: jest.fn((arg1, arg2) => arg)
  }
})
```
1. pathway to module
2. module factory function, returns the mocked version of the module

`__mock__` directory to keep mocks you want to use between files$$

## Sinion / Mocha / Chai

### stubs

[https://sinonjs.org/releases/latest/stubs/](https://sinonjs.org/releases/latest/stubs/)

Stubs can be annonymous or wrap existing functions, when they wrap a function the original is not called.
They are simple to get through the code. It doesn't do ant 
|||
|---|---|
|`.alwaysCalledWithExactly()` ||
|`.returns()`| |
|`.throws()`| 
| `.onCall()` | (stub responds differently on consecutive calls)
|`.onFirstCall()` | chain with throws, if you want test first call failing 
|`.onSecondCall()` | see above
|`.onThirdCall()` | see above

`var stub = sinon.stub(object, "method");`

Replaces object.method with a stub function. An exception is thrown if the property is not already a function.

### Spy

Are a special type of stub that collect the data on how the function is stubs is called. you can then check how many times it was called etc. 

## React Testing Library
