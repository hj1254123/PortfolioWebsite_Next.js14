// value is string：告诉编辑器，如果返回 true，value 的类型就是 string
export function validateString(value: unknown, maxLength: number): value is string {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
}
