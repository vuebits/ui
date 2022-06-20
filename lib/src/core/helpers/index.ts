export function getClassName (b: string, e?: string, m?: string): string {
  return `${b}${e ? `__${e}` : ''}${m ? `--${m}` : ''}`;
}
