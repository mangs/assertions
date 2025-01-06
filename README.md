# NPM Package `@mangs/assertions` [![Package Version](https://img.shields.io/npm/v/@mangs/assertions)](https://www.npmjs.com/package/@mangs/assertions)

TypeScript-based assertion functions to impose invariants at runtime

## Overview

Runtime assertions are a useful tool to verify expected behavior within an application. Rather than relying on complex coordination mechanisms like design by contract, instead strong typing and well-placed assertions can be a capable, lower effort substitute. You can write less code as well.

## Inspirations

- [It Takes Two to Contract](https://tigerbeetle.com/blog/2023-12-27-it-takes-two-to-contract/) by [Alex Kladov](https://matklad.github.io/about.html) at [TigerBeetle](https://tigerbeetle.com/)
  - This is a really excellent article detailing how a strong type system and proper assertions can be used in a complex codebase to achieve great results
- [TypeScript assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
  - For some reason this is buried in the TypeScript 3.7 release notes (see the link above) and can't be found easily in the documentation
- Zig's [runtime assertion system](https://ziglang.org/documentation/master/std/#std.debug.assert)
  - Yea I know, this repository is TypeScript. But this was one of the very few production examples of a runtime assertion system. Everyone else seems to use assertions for testing only which seems like a missed opportunity. Hence the recommendation to use this library as a runtime assertion library.
- NASA's [Power of 10: Rules for Developing Safety-Critical Code](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code)
  - One of those rules is "Use a minimum of two runtime assertions per function". This is one of the very few examples I've found supporting runtime assertions, and it's a really good one!
  - If it's good enough to keep resource-constrained software running for decades, it's probably good enough for your website
