export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function truncateText(text: string, length: number, suffix: string = '...'): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + suffix;
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function highlightText(text: string, query: string): string {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map(part => 
    part.toLowerCase() === query.toLowerCase() 
      ? `<mark>${part}</mark>` 
      : part
  ).join('');
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
