# Changelog

## 1.1.0

- Change `assert()`'s `condition` type from `boolean` to `unknown`
- Change `assertNotNullish()`
  - Add an optional `message` parameter
  - When throwing an error, add the actual value to the error object's `cause` field
- Export `AssertionError` (for example, can be used with `instanceof` checks in unit tests)

## 1.0.1

- Enable `check:package-version` script during CI so semver version bumps are enforced automatically

## 1.0.0

- First public release
