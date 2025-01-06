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
 * @param condition             Condition to impose.
 * @param message               Error message to include as part of the thrown error.
 * @param assertionFailureCause Any data that can help substantiate why this assertion failed.
 */
function assert(
  condition: unknown,
  message = 'Assertion condition failure', // eslint-disable-line default-param-last -- last 2 parameters are optional
  assertionFailureCause?: unknown,
): asserts condition {
  if (!condition) {
    throw new AssertionError(message, { cause: assertionFailureCause });
  }
}

/**
 * Impose an invariant by verifying the provided value is not nullish, otherwise throw an `AssertionError`.
 * @param value   Value to verify not nullish.
 * @param message Error message to include as part of the thrown error.
 */
function assertNotNullish<T>(
  value: T,
  message = 'Non-nullish value expected',
): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new AssertionError(message, { cause: { value } });
  }
}

// Module Exports
export { assert, AssertionError, assertNotNullish };
