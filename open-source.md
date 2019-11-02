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
