/**
 * Transforms all values in a one-depth object to strings.
 * @param obj - The object to transform.
 * @returns A new object with all values as strings.
 */
export function toStringValues(obj: Record<string, any>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = String(obj[key]);
    }
  }
  return result;
}
