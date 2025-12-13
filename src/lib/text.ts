export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function excerpt(markdown: string) {
  const firstParagraph = markdown
    .trim()
    .split(/\n\s*\n/)
    .find((p) => p.trim().length > 0)

  if (!firstParagraph) return ''

  return firstParagraph
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#]/g, '')
    .trim()
}
