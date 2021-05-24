# Testing

## Priciples

### Test object factories

At some point, test may have a lot of setup shared between tests. The idea of creating a test object factory is create utility to share between tests and to make it easy to see what is the difference between tests.

- [ObjectMother](https://martinfowler.com/bliki/ObjectMother.html)
- [aha testing](https://kentcdodds.com/blog/aha-testing)

## Static Analysis Testing

### TLDR:

```shell script
npm install --save-dev @babel/cli @babel/core @babel/preset-env @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier husky lint-staged npm-run-all prettier typescript jest
```

`package.json`
```json
{
  "name": "project name",
  "private": true,
  "author": "Freddie Duffield",
  "license": "",
  "scripts": {
    "test": "jest .",
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore --ext .js,.ts,.tsx .",
    "check-types": "tsc",
    "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "validate": "npm-run-all --parallel check-types check-format lint build"
  },
  "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@typescript-eslint/eslint-plugin": "^2.0.0",
    "@typescript-eslint/parser": "^2.0.0",
    "eslint": "^6.1.0",
    "eslint-config-prettier": "^6.0.0",
    "husky": "^3.0.2",
    "lint-staged": "^9.2.1",
    "npm-run-all": "^4.1.5",
    "prettier": "^1.18.2",
    "typescript": "^3.5.3"
  }
}
```

`.babelrc`
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "10"
        }
      }
    ]
  ]
}
```

`.eslintrc`

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint/eslint-plugin"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "eslint-config-prettier/@typescript-eslint"
  ],
  "rules": {
    "strict": ["error", "never"]
  },
  "env": {
    "browser": true
  }
}
```
`.gitignore`
```
node_modules
dist
```
`.huskyrc`
```json
{
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged"
  }
}
```
`.lintstagedrc`

```json
{
  "*.js": [
    "eslint"
  ],
  "*.+(js|json|ts)": [
    "prettier --write",
    "git add"
  ]
}
```
`.prettierrc`

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```
`tsconfig.json` 
```json
{
  "compilerOptions": {
    "noEmit": true,
    "baseUrl": "./src"
  }
}
```

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

```
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
  },
  "rules": {
    "strict": ["error", "never"],
    "valid-typeof": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars":"error",
    "no-unexpected-multiline": "error",
    "no-undef": "error"
  },
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
  }
}
```

run it with `npm run lint`

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
  }
}
```

To figure out what config you want go to [prettier.io/playground](https://prettier.io/playground/)
then create and paste config `touch .prettierrc`

```json
{
  "arrowParens": "always",
  "bracketSpacing": false,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

To get auto format on save install the prettier vs code extension, and add to `settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.pretter-vscode",
  "editor.formatOnSave": true
}
```

**eslint-config-prettier**

```
npm install --save-dev eslint-config-prettier
```

Then add it to the `.eslintrc` to the extends property. disables any rule that prettier renders useless.

```json
{
  "extends": ["eslint:recommended", "eslint-config-prettier"]
}
```

**Validate script**
in the scripts section of `package.json`

```json
{
  "validate": "npm run lint && npm run build"
}
```

Also can create a check to see if files are formatted correctly

```json
{
  "check-format": "prettier --ignore-path .gitignore --list-different \"**/*.(js|json)\""
}
```

Then can update validate to also check the formatting of files and prettier script

```json
{
  {
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore .",
    "prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "validate": "npm run lint && npm run build"
  }
}
}
```

---

### typescript

1. install typescript as a dev dependency
2. create `tsconfig.json`
3. add `compilerOptions`
   1. `baseUrl` to `./src`
   2. set `noEmit` to `true`
4. add script `check-types`, it will run `tsc`
5. add `check-types` to `validate` script
6. update prettier script to include `ts` & `tsx`
7. update build script to include `ts` files, add `--extensions .js, .ts, tsx` after `src`
8. install as a dev dependency `@babel/preset-typescript`
9. add `@babel/preset-typescript` to babel config

**Configure eslint to work with typescript**

1. install as dev depenency `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`
2. extend `lint` script to consider typescript files add `--ext .js, .ts, tsx`
3. add `overides` to eslint config

```json
{
  "overrides": [
    {
      "files": "**/*.+(ts|tsx)",
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "plugins": ["@typescript-eslint/eslint-plugin"],
      "extends:": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier/@typescript-eslint"
      ]
    }
  ]
}
```

### Husky

1. install husky as dev dependency
2. create `.huskyrc`
3. add the folllowing
   ```json
   {
     "hooks": {
       "pre-commit": "npm run validate"
     }
   }
   ```
4. take a look all the types of hooks you could set up `ls -a .git/hooks/`

### lint staged

1. install `lint-staged` as a dev dep.
2. create `.lintstagedrc`
3. add ... to the above

```json
{
  "*.+(js|ts|tsx)": ["eslint"],
  "**/*.+(js|json|ts|tsx)": ["prettier --write", "git add"]
}
```

4. add as pre-commit hook in `.huskyrc`

```json
{
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged && npm run build"
  }
}
```

### npm-run-all

1. install `npm-run-all` as dev dep
2. update validate script to use `npm-run-all`

```
npm-run-all --parallel check-types check-format lint build
```

---

## Jest

**Run tests from specific file**
when tests running in watch mode press `p` and enter the regex for the file you want to run. k

### Assertions

`toEqual()`

`toHaveBeenCalled()`

`toHaveBeenCalledTimes(2)`

`toHaveBeenCalledWith('argument1', 'argument2')`

`toHaveBeenNthCalledWith(1, 'argument1, 'argument2')`

`toMatchObject()` - match subset of object

### Selectors

[api queries](https://testing-library.com/docs/dom-testing-library/api-queries/)
[guide to which query](https://testing-library.com/docs/guide-which-query/)

`getByRole` - best selector because it is based of accessibility.

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
    method: jest.fn((arg1, arg2) => arg),
  };
});
```

1. pathway to module
2. module factory function, returns the mocked version of the module

`__mock__` directory to keep mocks you want to use between files$$

### jest-in-case

```js
// auth.js
export function isPasswordAllowed(password) {
  return (
    password.length > 6 &&
    // non-alphanumeric
    /\W/.test(password) &&
    // digit
    /\d/.test(password) &&
    // capital letter
    /[A-Z]/.test(password) &&
    // lowercase letter
    /[a-z]/.test(password)
  );
}

// auth.test.js
import cases from 'jest-in-case';
import { isPasswordAllowed } from '../auth';

function casify(obj) {
  return Object.entries(obj).map(([name, password]) => ({
    name: `${password} - ${name}`,
    password,
  }));
}

cases(
  'isPasswordAllowed: valid passwords',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(true);
  },
  casify({ valid: '!aBc123k' })
);

cases(
  'isPasswordAllowed: invalid passwords',
  ({ password }) => {
    expect(isPasswordAllowed(password)).toBe(false);
  },
  casify({
    'too short': 'a2c!',
    'no alphabet characters': '123456!',
    'no numbers': 'ABCdef!',
    'no uppercase letters': 'abc123!',
    'no lowercase letters': 'ABC123!',
    'no non-alphanumeric characters': 'ABCdef123',
  })
);
```

## Sinion / Mocha / Chai

`to.be.calledWithExactly()`
    
`to.be.lengthOf()`

### stubs

[https://sinonjs.org/releases/latest/stubs/](https://sinonjs.org/releases/latest/stubs/)

Stubs can be annonymous or wrap existing functions, when they wrap a function the original is not called.
They are simple to get through the code. It doesn't do ant
|||
|---|---|
|`.alwaysCalledWithExactly()` ||
|`.returns()`| |
|`.throws()`|
| `.onCall()` | (stub responds differently on consecutive calls) specific number of calls argument
|`.onFirstCall()` | chain with throws, if you want test first call failing
|`.onSecondCall()` | see above
|`.onThirdCall()` | see above
|`.throwsException()` | pass it an `new Error()`

`var stub = sinon.stub(object, "method");`

Replaces object.method with a stub function. An exception is thrown if the property is not already a function.

### Spy

Are a special type of stub that collect the data on how the function is stubs is called. you can then check how many times it was called etc.

### chai-as-promised

`to.be.rejectedWith`

```js
it('retries 0 times reading from S3 before failing and propagates the error when retries set to 0', async () => {
  getObjectStub.onFirstCall().throwsException(new Error('Error'));

  expect(retrieveS3File('aBucket', 'filename', 0))
    .to.be.rejectedWith(
      Error,
      'Could not load filename from S3 bucket aBucket: Error'
    )
    .then(() => {
      expect(getObjectStub.callCount).to.equal(1);
    });
});
```

### Nock 

Mocking Module that incepts requests

```
DEBUG=nock.*
```

## Enzyme

`.hostNodes()` - returns a new wrapper with host nodes which HTML elements as opposed to react components. 

.filterWhere()

## React Testing Library

```

```
