# NPM Package `@mangs/assertions` [![Package Version](https://img.shields.io/npm/v/@mangs/assertions)](https://www.npmjs.com/package/@mangs/assertions)

TypeScript-based assertion functions to impose invariants at runtime

## Overview

JavaScript does not have native support for assertions, but TypeScript does enable [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) with a special `asserts condition` return syntax. This library uses the latter to create its concise syntax for writing [invariants](<https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science>) intended to guarantee characteristics of a command with precondition and postcondition assertions; the [Hoare triple](https://en.wikipedia.org/wiki/Hoare_logic#Hoare_triple) is the formalized form of this concept.

## Ensuring Correct Behavior

Runtime assertions are a useful tool to verify expected behavior within an application. Rather than relying on complex, ahead-of-design-time quality mechanisms like [design by contract](https://en.wikipedia.org/wiki/Design_by_contract), strong typing and well-placed assertions on their own can be a capable, lower effort substitute. Specifically, a real contract is established with at least 2 assertions checking each condition: 1 at the call site and 1 at the definition site. The article [It Takes Two to Contract](https://tigerbeetle.com/blog/2023-12-27-it-takes-two-to-contract/) offers a great description for this duo's importance:

> Besides readability, another pragmatic reason to pair assertions is robustness and defense in depth: as code is evolving and preconditions are strengthened or relaxed over time, having a separate set of assertions at each call site helps to ensure that refactoring around one call site doesn't break the other.

The rough idea here is to compute the same condition in multiple ways - one for each use case - and assert that each is identical, thus ensuring correct behavior and protecting against mistakes during future refactors.

For example, to assert that the number of posts added to a database never exceeds the length of the provided post array, we can do the following:

```ts
function insertPosts(posts: Post[]) {
  const rowsAdded = db.insert(posts);
  assert(rowsAdded <= posts.length);
  return rowsAdded;
}

const rowsAdded = insertPosts(postList);
assert(rowsAdded <= postList.length);
```

## Type Narrowing With Less Code

Typically, TypeScript requires a conditional statement and possibly a thrown error to properly [narrow a type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). Instead, assertion functions are a more concise way to accomplish the same thing without any nesting. For example:

```ts
stringOrNumber; // Type: string | number
process.env.SOME_THING; // Type: string | undefined

assert(typeof stringOrNumber === "number");
assertNotNullish(process.env.SOME_THING);

stringOrNumber; // Type: number
process.env.SOME_THING; // Type: string
```

The alternative without assertion functions might look like this:

```ts
stringOrNumber; // Type: string | number
process.env.SOME_THING; // Type: string | undefined

if (typeof stringOrNumber !== "number") {
  throw new TypeError();
}
if (process.env.SOME_THING === undefined) {
  throw new TypeError();
}

stringOrNumber; // Type: number
process.env.SOME_THING; // Type: string
```

As you can see, using this library's assertion functions provides type narrowing in a more concise syntax.

## Inspirations

- [It Takes Two to Contract](https://tigerbeetle.com/blog/2023-12-27-it-takes-two-to-contract/) by [Alex Kladov](https://matklad.github.io/about.html) at [TigerBeetle](https://tigerbeetle.com/)
  - This is a really excellent article detailing how a strong type system and proper assertions can be used in a complex codebase to achieve great results
- [TypeScript assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
  - For some reason this is buried in the TypeScript 3.7 release notes (see the link above) and can't be found easily in the documentation
- Zig's [runtime assertion system](https://ziglang.org/documentation/master/std/#std.debug.assert)
  - Yea I know, this repository is TypeScript. But this was one of the very few production examples of a runtime assertion system. Everyone else seems to use assertions for testing only which seems like a missed opportunity. Hence the recommendation to use this library as a runtime assertion library.
- NASA's [Power of 10: Rules for Developing Safety-Critical Code](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code)
  - One of those rules is "Use a minimum of two runtime assertions per function". This is one of the very few examples I've found supporting runtime assertions, and it's a really good one!
  - If it's good enough to keep resource-constrained software running for decades despite the harsh conditions of space, runtime assertions are probably good enough for your website
