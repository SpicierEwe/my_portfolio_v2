export function embedCustomLinks({
  link,
  title,
}: {
  link: string;
  title: string;
}): string {
  const x = `<a href=${link} target='_blank' style='color: red; text-decoration: none; font-style: italic;'>${title}</a>`;

  return x;
}
