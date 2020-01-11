# How to write an open source JavaScript Library

## configuring NPM

```
npm set init-author-name 'Elsevier'
npm set init-author-email 'opensource@elsevier.com'
npm set init-author-url 'http://elsevier.com'
npm set init-license 'MIT'
npm set save-exact true
```

`save-exact` makes sure the version of any packages we are using are exact, avoid suprises if the library is updated and there is breaking change.

sign up for npm account

```
npm add user
```

generates auth token in `.npmrc`

```
npm publish
```

## git tags

Tag git with the release version

```
git tag 1.0.0
git push --tags
```

### version numbers

- `1`.0.0 - major: breaking changes
- 1.`1`.0 - minor: new feature
- 1.0.`1` - patch: bug fix

make beta release

```
"version": "1.4.0-beta.0"
```

---

```
npm info
```

---

## Sematic Release

```cli
npm install -g semantic-release-cli

semantic-release-cli setup
```
- creates `.travis.yml`
- version will be removed from package.json
- add back in `"version": "0.0.0-semantically-released"` to avoid errors on npm i
- add the following to run tests before releasing
```yaml
script:
  - npm run test
  ```