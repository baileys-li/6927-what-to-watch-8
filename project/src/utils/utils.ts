export function normalizeTextToID(text: string): string {
  return text.toLowerCase().replace(' ', '_');
}

export function normalizeDateTime(dateTime: string): string {
  const date = new Date(dateTime);

  return date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });

}
