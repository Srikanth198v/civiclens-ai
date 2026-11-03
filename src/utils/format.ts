/** Formats a timestamp for display using the visitor's locale. */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date);
}
