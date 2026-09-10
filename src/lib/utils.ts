export type ClassValue = string | number | null | false | undefined;

/**
 * Compose class names, dropping falsy values. Keeps call sites declarative
 * (`cn("base", condition && "variant")`) instead of string concatenation.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
