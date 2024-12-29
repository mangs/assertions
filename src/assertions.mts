// Local Classes
class AssertionError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'AssertionError';
  }
}

// Local Functions
/**
 * Impose an invariant by verifying the provided condition is truthy, otherwise throw an `AssertionError`.
 * @param condition Condition to impose.
 * @param message   Error message to include as part of the thrown error.
 */
function assert(condition: boolean, message = 'Assertion condition failure'): asserts condition {
  if (!condition) {
    throw new AssertionError(message);
  }
}

/**
 * Impose an invariant by verifying the provided value is not nullish, otherwise throw an `AssertionError`.
 * @param value Value to verify not nullish.
 */
function assertNotNullish<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new AssertionError(`Expected defined value but received: ${String(value)}`);
  }
}

// Module Exports
export { assert, assertNotNullish };
