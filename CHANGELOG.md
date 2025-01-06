# Changelog

## 1.3.0

- Add an optional 3rd parameter to `assert()` to enable customizing the thrown error's `cause` field

## 1.2.0

- Add a build step so library consumers can use runtimes that don't support TypeScript natively
- Change `tsconfig.json` options to reflect Node.js best practices rather than Bun ones
- Upgrade dependency versions to latest

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
