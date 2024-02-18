export class Validator {
  static isString(value: string): boolean {
    return typeof value === 'string';
  }

  static validLength(value: string, length: number): boolean {
    return value.length === length;
  }
}
